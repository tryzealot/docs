# 环境变量

## .env 文件

Zealot 可通过如下环境变量或使用项目根目录的 `.env` 文件配置系统参数，通过上述方式更改后需要重启服务才可生效。

## HTTPS 证书

**因苹果的硬性要求线上部署和下载服务强制 HTTPS**，因此再部署的时候下载应用会强制走 HTTPS 协议。

如果部署是单台机器的独立服务，建议开启 Let's Encrypt 免费 SSL 证书，只需要设置

```bash
ZEALOT_CERT_EMAIL=zealot@example.com
```

> 和下面自签名证书文件名二选一，不能同时设置

如果部署的机器只能使用自签名证书，则需要配置，但需要注意的是 iOS 的下载需要在 iOS 设备授权自签名的证书后才允许下载安装。（不推荐）

```bash
ZEALOT_CERT=zealot.test.pem
ZEALOT_CERT_KEY=zealot.test-key.pem
```

> 和 Let's Encrypt 注册电子邮箱名二选一，不能同时设置

## 配置域名 (URL)

必须配置否则下载应用和一些静态资源会无法正确访问到

```bash
# 域名配置，无需配置 http:// 或 https://
ZEALOT_DOMAIN=zealot.com
```

## 配置数据库和缓存

假如你有可以复用的 postgres 服务也可以自定义配置使用，而无需使用 docker-compose 默认配置的服务。

### Postgres

```bash
ZEALOT_POSTGRES_HOST=127.0.0.1
ZEALOT_POSTGRES_PORT=5432
ZEALOT_POSTGRES_USERNAME=postgres
ZEALOT_POSTGRES_PASSWORD=ze@l0t
ZEALOT_POSTGRES_DB_NAME=zealot
```

### Redis

5.3.0 版本不再依赖 redis，如果之前已经配置请考虑删除 `REDIS_URL` 环境变量，但不删除也不影响使用。

## 配置网站默认语言

语言包 | 值
---|---
zh-CN | 简体中文 (默认)
en | 英文

```bash
DEFAULT_LOCALE=en
```

## 配置网站默认外观

外观 | 值
---|---
light | 浅色 (默认)
dark | 深色（黑暗模式）
auto | 随系统自动

```bash
ZEALOT_APPEARANCE=dark
```

## 配置管理员账户和密码

默认不配置如下也会生成下面的账户和密码作为管理员权限的账户，建议配置后重新修改密码。

```bash
ZEALOT_ADMIN_EMAIL=admin@zealot.com
ZEALOT_ADMIN_PASSWORD=ze@l0t
```

### 开启用户注册

关闭注册之后，管理员可以通过管理面板的用户管理手动添加用户。

```bash
# 开启注册
ZEALOT_REGISTER_ENABLED=true

# 关闭注册
ZEALOT_REGISTER_ENABLED=false
```

### 开启游客模式

开启游客模式后允许应用的查看、下载和安装，建议公司内部对权限依赖不高的状况使用，具体权限对比可以[看这里查看详情](/docs/user-guide/administrator/permissions)

```bash
# 开启游客模式
ZEALOT_GUEST_MODE=true

# 关闭游客模式
ZEALOT_GUEST_MODE=false
```

## 邮件服务

目前仅支持 smtp 的方式配置邮件通知服务，邮件通知主要影响用户注册、发送激活邮件、更改密码服务，如果不开启也不影响使用，账户激活的链接也会在用户管理那边找到。

```bash
# 发送邮件配置
SMTP_ADDRESS=smtp.gmail.com
SMTP_PORT=587
SMTP_DOMAIN=gmail.com
SMTP_USERNAME=you@gmail.com
SMTP_PASSWORD=yourpassword
SMTP_AUTH_METHOD=plain
SMTP_ENABLE_STARTTLS_AUTO=true

# 邮件默认收发人配置
ACTION_MAILER_DEFAULT_FROM=you@gmail.com
ACTION_MAILER_DEFAULT_TO=you@gmail.com
```
