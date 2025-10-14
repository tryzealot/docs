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
ZEALOT_CERT=zealot.example.com.pem
ZEALOT_CERT_KEY=zealot.example.com-key.pem
```

> 和 Let's Encrypt 注册电子邮箱名二选一，不能同时设置

## 域名 (URL)

必须配置否则下载应用和一些静态资源会无法正确访问到

```bash
# 域名配置，无需配置 http:// 或 https://
ZEALOT_DOMAIN=zealot.example.com
```

## 数据库和缓存

假如你有可以复用的 postgres 服务也可以自定义配置使用，而无需使用 docker-compose 默认配置的服务。

### Postgres

```bash
# url 变量
ZEALOT_DATABASE_URL="postgresql://postgres:ze@l0t@127.0.0.1:5432/zealot?sslmode=disable"

# 或使用独立变量
ZEALOT_POSTGRES_HOST=127.0.0.1
ZEALOT_POSTGRES_PORT=5432
ZEALOT_POSTGRES_USERNAME=postgres
ZEALOT_POSTGRES_PASSWORD=ze@l0t
ZEALOT_POSTGRES_DB_NAME=zealot
ZEALOT_POSTGRES_SSLMODE=disable/allow/prefer/verify-ca/verify-full
```

针对 ssl mode 的值的详细说明请看 https://www.postgresql.org/docs/current/libpq-ssl.html

## 网站默认语言

语言包 | 值
---|---
zh-CN | 简体中文 (默认)
en | 英文

```bash
DEFAULT_LOCALE=en
```

## 网站默认外观

外观 | 值
---|---
light | 浅色 (默认)
dark | 深色（黑暗模式）
auto | 随系统自动

```bash
ZEALOT_APPEARANCE=dark
```

## 管理员账户和密码

默认不配置如下也会生成下面的账户和密码作为管理员权限的账户，建议配置后重新修改密码。

```bash
ZEALOT_ADMIN_EMAIL=admin@zealot.com
ZEALOT_ADMIN_PASSWORD=ze@l0t
```

## 邮件服务

目前仅支持 smtp 的方式配置邮件通知服务，邮件通知主要影响用户注册、发送激活邮件、更改密码服务，如果不开启也不影响使用，账户激活的链接也会在用户管理那边找到。

```bash
# 发送邮件配置
SMTP_DOMAIN=zealot.example.com
SMTP_ADDRESS=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=you@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_AUTH_METHOD=plain
SMTP_ENABLE_STARTTLS=true

# 邮件默认收发人配置
ACTION_MAILER_DEFAULT_FROM=notification@zealot.com
ACTION_MAILER_DEFAULT_TO=noreply-to@zealot.com
```

:::caution

谷歌已[阻止](https://support.google.com/accounts/answer/6010255)其认为安全性较低的应用的登录操作。
您可以更改 Gmail [设置](https://www.google.com/settings/security/lesssecureapps)以允许这些尝试。
如果您的 Gmail 帐户启用了双重身份验证，则需要设置[应用密码](https://myaccount.google.com/apppasswords)并使用它来替换常规密码。

:::

## 服务开关

### 开启用户注册

启用或关闭内置认证系统的用户注册功能。关闭后仅管理员可以创建新用户

```bash
# 开启注册
ZEALOT_REGISTER_ENABLED=true

# 关闭注册
ZEALOT_REGISTER_ENABLED=false
```

### 开启系统内置用户登录认证

:::info

自 6.1.0 版本开始支持。

:::

启用或关闭内置认证系统的用户登录功能。关闭后仅可使用第三方认证方式登录。

```bash
# 开启登录
ZEALOT_LOGIN_ENABLED=true

# 关闭登录
ZEALOT_LOGIN_ENABLED=false
```

### 开启游客模式

开启游客模式后允许应用的查看、下载和安装，建议公司内部对权限依赖不高的状况使用，具体权限对比可以[看这里查看详情](/docs/user-guide/administrator/permissions)

```bash
# 开启游客模式
ZEALOT_GUEST_MODE=true

# 关闭游客模式
ZEALOT_GUEST_MODE=false
```

## 统计服务

### Google Analytics

Google Analytics 是一个网站分析服务，由 Google 提供。仅支持 Universal Analytics，不支持 GA4。

```bash
GOOGLE_ANALYTICS_ID=UA-12345678-9
```

### Umami

Umami 是一个开源的网站分析工具，可以自己部署，也可以使用官方提供的服务，不设置 `UMAMI_SCRIPT_URL` 时启用官方服务。

```bash
UMAMI_SCRIPT_URL=https://analytics.us.umami.is/script.js
UMAMI_WEBSITE_ID=12345678-9
```

### Clarity

Clarity 是一个网站分析服务，由 Microsoft 提供。

```bash
CLARITY_ANALYTICS_ID=12345678-9
```

## 日志格式

日志的格式使用 [lograge](https://github.com/roidrage/lograge) 实现，输出的格式可以使用如下格式：

值   | 说明         | 备注
-----|-------------|-----
`rails` | Rails 自带的格式 | [相关文档](https://guides.rubyonrails.org/debugging_rails_applications.html#sending-messages)
`json` | JSON | 把 keyvalue 的内容 JSON 数据化
`graylog2` | Graylog2 格式 | 也是 JSON 格式的另外组合
`ltsv` | LTSV 格式 | key-value 按照冒号组合，并按 `\t` 分隔
`keyvalue` | 键值格式 | key-value 按照等号组合，并按空格分隔 **默认格式**

```bash
ZEALOT_LOG_FORMAT=json
```
