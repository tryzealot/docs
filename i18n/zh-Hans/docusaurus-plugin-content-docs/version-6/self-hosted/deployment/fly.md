---
sidebar_label: "Fly"
---

# 部署 Zealot 到 Fly 指南

Zealot 支持 [fly.io](https://fly.io) 官方的应用配置格式（fly.toml）。

## 部署步骤

- 预先安装 [flyctl](https://fly.io/docs/flyctl/) 命令行工具。
- 复制下面[配置文件](#配置文件) 保存为 `fly.toml` 文件放在项目根目录，根据创建的 fly app 项目修改 app 的值。
- 运行 `flyctl deploy` 开始构建和部署工作。
- 运行 `fly scale vm shared-cpu-1x --memory 512` 来达到 Zealot 可允许的内存环境，默认免费的 256M 内存实际只有 205M，Zealot 运行起来闲置状态会 190M 到会提示 OOM 内存溢出。

### 配置文件

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
