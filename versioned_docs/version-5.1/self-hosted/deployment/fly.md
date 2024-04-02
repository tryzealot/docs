---
sidebar_label: "Fly"
---

# Deploy Zealot to Fly guide

Zealot support use App Configuration (fly.toml) to deploy on [fly.io](https://fly.io).

## Deploying on Fly

- Install [flyctl](https://fly.io/docs/flyctl/).
- Copy full content of [app configuration](#app-configuration) save to `fly.toml` then change the `app` value .
- Run `flyctl deploy`.
- Run `fly scale vm shared-cpu-1x --memory 512`.

### App Configuration

```toml
app = "[app-name:changeme]"
kill_signal = "SIGINT"
kill_timeout = 120
processes = []

[build]
  image = "ghcr.io/tryzealot/zealot:nightly"

[experimental]
  allowed_public_ports = []
  auto_rollback = true

[[services]]
  http_checks = []
  internal_port = 80
  processes = ["app"]
  protocol = "tcp"
  script_checks = []
  [services.concurrency]
    hard_limit = 25
    soft_limit = 20
    type = "connections"

  [[services.ports]]
    force_https = true
    handlers = ["http"]
    port = 80

  [[services.ports]]
    handlers = ["tls", "http"]
    port = 443

  [[services.tcp_checks]]
    grace_period = "1s"
    interval = "15s"
    restart_limit = 0
    timeout = "2s"

[[statics]]
  guest_path = "/app/public"
  url_prefix = "/"
```
