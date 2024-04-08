---
sidebar_label: "Nomad"
---

# Deploy Zealot with Nomad guide

Zealot support deployments using [Nomad](https://www.nomadproject.io/), it use [HCL](https://developer.hashicorp.com/nomad/docs/job-specification/hcl2) language to configure.

## Setup

### Using Nomad

First, follow the official tutorial to install [nomad](https://developer.hashicorp.com/nomad/docs/install), this binary file contains the client and server. It is recommended to follow the [tutorials](https://developer.hashicorp.com/nomad/tutorials/get-started) to walk through it if you don't know it.

The following file will create the postgres and zealot services. For the existing external database and cache services,
you can delete the corresponding `port`, `service` and `task` and edit the template variables in the `zealot` task.

```hcl title="zealot.nomad"
job "zealot" {
  type        = "service"
  datacenters = "dc1"     // modify

  update {
    max_parallel      = 1
    min_healthy_time  = "30s"
    auto_revert       = true
  }

  group "zealot" {
    network {
      port "zealot" {
        to = 80
      }

      port "postgres" {
        to = 5678
      }
    }

    service {
      name = "zealot"
      port = "zealot"
      provider = "nomad"

      // Register to traefik
      // tags = [
      //   "traefik.enable=true",
      //   "traefik.http.routers.zealot.entrypoints=web, websecure",
      //   "traefik.http.routers.zealot.rule=Host(`zealot.example.com`)",
      // ]
    }

    service {
      name = "postgres"
      port = "postgres"
      provider = "nomad"

      // Register to traefik
      // tags = [
      //   "traefik.enable=true",
      //   "traefik.tcp.routers.postgres.rule=HostSNI(`*`)",
      //   "traefik.tcp.routers.postgres.entrypoints=postgres",
      // ]
    }

    task "zealot" {
      driver = "docker"

      config {
        image = "ghcr.io/tryzealot/zealot:latest"
        ports = ["zealot"]

        // modify
        volumes = [
          "/tmp/zealot/uploads:/app/public/uploads",
          "/tmp/zealot/backups:/app/public/backups",
        ]

        // Register to homepage dashboard
        // labels = {
        //   "homepage.group"        = "Dev"
        //   "homepage.name"         = "Zealot"
        //   "homepage.icon"         = "mdi-progress-download"
        //   "homepage.href"         = "https://zealot.example.com"
        //   "homepage.description"  = "Beta App Distribution"
        // }
      }

      // Zealot example config
      // https://github.com/tryzealot/zealot-docker/blob/master/config.env
      template {
        destination = "local/config.env"
        change_mode = "restart"
        env         = true
        data        = <<-EOF
        ZEALOT_APPEARANCE = dark
        ZEALOT_DOMAIN = zealot.example.com

        ZEALOT_GUEST_MODE = false
        ZEALOT_REGISTER_ENABLED = true
        EOF
      }

      template {
        destination = "secrets/secret.env"
        change_mode = "restart"
        env         = true
        data        = <<-EOF
        # admin account
        ZEALOT_ADMIN_EMAIL = admin@zealot.com
        ZEALOT_ADMIN_PASSWORD = ze@l0t

        # datbase
        ZEALOT_POSTGRES_HOST = {{ env "NOMAD_IP_postgres" }}
        ZEALOT_POSTGRES_PORT = {{ env "NOMAD_PORT_postgres" }}
        ZEALOT_POSTGRES_USERNAME = "zealot"
        ZEALOT_POSTGRES_PASSWORD = "zealot"
        ZEALOT_POSTGRES_DB_NAME = "zealot"

        # secret token
        SECRET_TOKEN = $${ sha256(uuidv5("url", "zealot.ews.im")) }
        EOF
      }

      resources {
        cpu         = 500
        memory      = 500
        memory_max  = 1000
      }
    }

    task "postgres" {
      driver = "docker"

      lifecycle {
        hook = "prestart"
        sidecar = true
      }

      config {
        image = "postgres:15-alpine"
        ports = ["postgres"]
        volumes = [
          "secrets/init-role.sql:/init-role.sql",
          "secrets/init-db.sql:/init-db.sql"
        ]
      }

      env {
        POSTGRES_INITDB_ARGS  = "--data-checksums"
        POSTGRES_USER         = "zealot"
        POSTGRES_PASSWORD     = "zealot"
        POSTGRES_DB           = "zealot"
      }

      resources{
        cpu         = 512
        memory      = 200
        memory_max  = 512
      }
    }
  }
}
```

Save the file and execute the command `nomad job run zealot.nomad`.

### Using Terraform

> Both Terraform and Nomad are the same company.

Following the offical tutorials to install [terraform](https://www.terraform.io/), [nomad plugin](https://registry.terraform.io/providers/hashicorp/nomad/),
copy the `zealot.nomad` in previous step and edit a new file named `main.tf`:


```hcl
resource "nomad_job" "jobs" {
  jobspec = file("${path.module}/zealot.nomad")
}
```

Execute `terraform plan` to ensure, then deploy `terraform apply`.

## External Storages

Nomad supports multi-cluster management, and in many cases the storage deployed by the service cannot be mounted directly to the corresponding file system, but is more often placed on top of a shared file storage protocol, such as SMB, NFS, S3, etc.

### CSI

Nomad currently supports the [CSI](https://developer.hashicorp.com/nomad/tutorials/stateful-workloads/stateful-workloads-csi-volumes) in [a limited capability](https://github.com/democratic-csi/democratic-csi/blob/master/docs/nomad.md) (Nomad 1.5).
Nomad can utilize CSI volumes, but it can not automatically create, destroy, or manage them in any capacity. Volumes have to be created externally and then registered with Nomad.
You can find a list of plugins in the [Kubernetes CSI Developer Documentation](https://kubernetes-csi.github.io/docs/drivers.html).

Plugin | Schemes | Compatible | terraform nomad resource
---|---|---|---
[kubernetes-csi-driver-smb](https://github.com/kubernetes-csi/csi-driver-smb) | smb | Unknown | Unknown
[kubernetes-csi-driver-nfs](https://github.com/kubernetes-csi/csi-driver-nfs) | nfs | Supported | [nomad_csi_volume_registration](https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/csi_volume_registration)
[kubernetes-csi-driver-iscsi](https://github.com/kubernetes-csi/csi-driver-iscsi) | iscsi | Supported | Supported
[democraticcsi/democratic-csi](https://github.com/democratic-csi/democratic-csi) | smb/nfs/iscsi | Supported | [nomad_csi_volume](https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/csi_volume)
[rocketduck/csi-plugin-nfs](https://gitlab.com/rocketduck/csi-plugin-nfs) | nfs | Supported | [nomad_csi_volume](https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/csi_volume)
