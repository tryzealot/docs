# FAQ

Below are some common questions and answers.

## Why can't use HTTP deployment service

Given that iOS download services depend on SSL/TLS certificates, it's recommended to use an authorized certificate service. If your service doesn't need to provide iOS or macOS installation services, you can consider using HTTPS for deployment.
We recommend using free [Let's Encrypt](https://letsencrypt.org/) SSL certificates.

## Unable to install iOS applications with self-signed certificates

If you use self-signed certificates, each iOS device must install the self-signed certificate before downloading and installing applications. This needs to be done on every device, which is quite complicated. With free SSL certificate services available, it's not recommended to use self-signed certificates unless absolutely necessary.

## When using load balancer deployment, downloads always change from https to http

When load balancers provide services, they deploy https at the frontend, but the internal distribution still uses http. The solution is to change the forwarded protocol header from http to https on the load balancer, so that the service will inherit the frontend protocol header (`X-Forwarded-Proto`).

## Is external postgres connection supported

Yes, it is supported. Please check [environment variables](/docs/self-hosted/configuration/environment-variables#postgres) for detailed parameters.

## Is Kubernetes (k8s) deployment supported

The service [supports K8S deployment](/docs/self-hosted/deployment/kubernetes) but doesn't support scaling features. This is because application uploads use local storage within the container and don't support third-party cloud storage like Amazon S3 or Aliyun.

## Is there a sharing page for applications similar to FIR or pgyer services

The service provides two types of page addresses:

**1 Application channel detail page**

`https://YOUR_ZEALOT_URL/channels/SLUG`

Where `YOUR_ZEALOT_URL` is your zealot service address, and `SLUG` is the unique address of your application channel.

**2 Uploaded version detail page**

`https://YOUR_ZEALOT_URL/channels/SLUG/releases/ID`

Where `YOUR_ZEALOT_URL` is your zealot service address, `SLUG` is the unique address of your application channel, and `ID` is the uploaded version ID. When ID is empty, it will automatically adjust to the latest version, so you can directly share:

`https://YOUR_ZEALOT_URL/channels/SLUG/releases`

## CPU or memory resources surge after running the service for a while, how to solve it?

According to user [Cleam](https://github.com/Cleam)'s [feedback](https://github.com/tryzealot/zealot/issues/768#issuecomment-1161097162), after deploying the service with few hosted applications, low upload frequency, and server hardware specifications that meet requirements, CPU or memory resources still surge causing server freezes.
This is currently an individual case with unknown cause, but you can work around it by limiting CPU and memory. For Docker deployment, you can edit the `docker-compose.yml` file:

```diff
zealot:
  <<: *defaults
+  deploy:
+    resources:
+      limits:
+        cpus: 2.0
+        memory: 2G
+      reservations:
+        cpus: 0.5
+        memory: 256M
```
