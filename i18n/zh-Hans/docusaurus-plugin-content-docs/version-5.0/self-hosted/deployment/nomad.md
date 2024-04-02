---
sidebar_label: "Nomad"
---

# Nomad 部署 Zealot 指南

Zealot 原生支持使用 [Nomad](https://www.nomadproject.io/) 部署。这得益于 Nomad 有很不错的插件机制，官方默认支持 Docker 插件。
在配置上接近于 docker compose 的配置，只不过它的配置语言是 [HCL](https://developer.hashicorp.com/nomad/docs/job-specification/hcl2) 而不是 YAML。

## 基本部署

### 使用 Nomad 部署

先按照官方教程依次安装好 [nomad](https://developer.hashicorp.com/nomad/docs/install)，这个二进制文件是包含了客户端和服务端。
不了解的建议跟着[官方教程](https://developer.hashicorp.com/nomad/tutorials/get-started)演练一遍。

下面文件将会创建 postgres、redis 和 zealot 三个服务，对于已有的外部数据库和缓存服务，可以删除掉对应的 `port`, `service` 和 `task` 后编辑 `zealot` task 里面的模板变量。

```hcl title="zealot.nomad"
job "zealot" {
  type        = "service"
  datacenters = "dc1"     // 根据实际情况修改

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

      port "redis" {
        to = 6379
      }
    }

    service {
      name = "zealot"
      port = "zealot"
      provider = "nomad"

      // 注册服务到 traefik
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

      // 注册服务到 traefik
      // tags = [
      //   "traefik.enable=true",
      //   "traefik.tcp.routers.postgres.rule=HostSNI(`*`)",
      //   "traefik.tcp.routers.postgres.entrypoints=postgres",
      // ]
    }

    service {
      name = "redis"
      port = "redis"
      provider = "nomad"

      // 注册服务到 traefik
      // tags = [
      //   "traefik.enable=true",
      //   "traefik.tcp.routers.redis.rule=HostSNI(`*`)",
      //   "traefik.tcp.routers.redis.entrypoints=redis",
      // ]
    }

    task "zealot" {
      driver = "docker"

      config {
        image = "ghcr.io/tryzealot/zealot:latest"
        ports = ["zealot"]

        // 根据实际情况修改，或采用 CSI 协议的外部存储
        volumes = [
          "/tmp/zealot/uploads:/app/public/uploads",
          "/tmp/zealot/backups:/app/public/backups",
        ]

        // 添加服务到 homepage dashboard 面板
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

        # cache
        REDIS_URL = redis://{{ env "NOMAD_ARRR_redis" }}/0

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

    task "redis" {
      driver = "docker"

      lifecycle {
        hook = "prestart"
        sidecar = true
      }

      config {
        image = "redis:7-alpine"
        ports = ["redis"]
      }

      resources {
        cpu    = 200
        memory = 200
      }
    }
  }
}
```

确认无误后执行 `nomad job run zealot.nomad`

### 使用 Terraform 部署

> Terraform 和 Nomad 是同家公司的产品。

先按照官方教程依次安装好 [terraform](https://www.terraform.io/)、[nomad 插件](https://registry.terraform.io/providers/hashicorp/nomad/)后，复用上面的 `zealot.nomad` 文件再额外加一个 `main.tf` 文件即可。

```hcl
resource "nomad_job" "jobs" {
  jobspec = file("${path.module}/zealot.nomad")
}
```

执行 `terraform plan` 确认无误后在通过 `terraform apply` 应用。

## 外部文件存储

Nomad 支持多集群管理，很多情况下服务部署的存储不可能直接挂载到对应的文件系统中，更多的是放在一个共享文件存储协议上面，比如 SMB、NFS、S3 等等。

### CSI 协议

Nomad [支持 CSI 协议](https://developer.hashicorp.com/nomad/tutorials/stateful-workloads/stateful-workloads-csi-volumes)，理论上[实现 CSI 接口的服务](https://kubernetes-csi.github.io/docs/drivers.html)都可以满足。

> 截止 Nomad 1.5 版本为止，Nomad 可以使用 CSI 卷，但它不能自身控制创建、销毁或管理。卷必须在外部创建，然后向 Nomad 注册后才能使用。

插件 | 支持协议 | 兼容情况 | terraform nomad 资源
---|---|---|---
[kubernetes-csi-driver-smb](https://github.com/kubernetes-csi/csi-driver-smb) | smb | 未测试 | 未测试
[kubernetes-csi-driver-nfs](https://github.com/kubernetes-csi/csi-driver-nfs) | nfs | 支持 | [nomad_csi_volume_registration](https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/csi_volume_registration)
[kubernetes-csi-driver-iscsi](https://github.com/kubernetes-csi/csi-driver-iscsi) | iscsi | 未测试 | 未测试
[democraticcsi/democratic-csi](https://github.com/democratic-csi/democratic-csi) | smb/nfs/iscsi | 支持 | [nomad_csi_volume](https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/csi_volume)
[rocketduck/csi-plugin-nfs](https://gitlab.com/rocketduck/csi-plugin-nfs) | nfs | 支持 | [nomad_csi_volume](https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/csi_volume)
