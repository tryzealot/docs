# 第三方登录

目前已接入的第三方登录：

服务 | 标识符
---|---
飞书 | `feishu`
Gitlab | `gitlab`
Google | `google_oauth2`
LDAP | `ldap`

如果以上服务需要设置回调地址的话请统一设置为：

```
http://zealot.com/users/auth/:provider/callback
```

其中 `:provider` 是上面支持第三方服务的标识符，例如开启了飞书那就把 `:provider` 替换成 `feishu`。

## 飞书

1. 去注册一个飞书账号并下载手机 App
1. 注册[飞书开发平台](https://open.feishu.cn/app/)并创建企业自建应用获得 app_id, app_secret
1. 填写 callback url 为 `http://zealot.com/users/auth/feishu/callback` (域名根据实际情况修改）
1. 添加用户字段信息授权：`email 地址` （可选）
1. 至少勾选一个应用方式并创建新版本后发布

```bash
FEISHU_ENABLED=true
FEISHU_APP_ID=
FEISHU_APP_SECRET=
```

## Gitlab

1. 注册 Gitlab [官方](http://gitlab.com)账户或自部署 Gitlab 服务
1. 在用户设置（Preferences） -> 应用（Applications） 创建一个新应用
1. 回调地址（Redirect URI） 配置为  `http://zealot.com/users/auth/gitlab/callback` (域名根据实际情况修改）
1. 添加用户字段信息授权（scope）：`read_user`，默认 zealot 仅用此授权，如果你的授权范围是 `api` 也没问题

```bash
GITLAB_ENABLED=true
GITLAB_SITE=https://gitlab.com/api/v4
GITLAB_SCOPE=read_user
GITLAB_APP_ID=
GITLAB_SECRET=
```

## Google

1. 注册 Google 账号
1. 开通 [Google Cloud Platform](https://console.cloud.google.com/apis/dashboard) 服务
1. 选择或创建 Project 并前往 Credentials
1. 创建 OAuth Client ID 选择 Web Application 后添加回调地址（Authorized redirect URI） 配置为 `http://zealot.com/users/auth/google_oauth2/callback` (域名根据实际情况修改）
1. 创建成功后获得 Client ID 和 Client Secret

```bash
GOOGLE_OAUTH_ENABLED=true
GOOGLE_CLIENT_ID=
GOOGLE_SECRET=
```

## LDAP

1. 自部署或使用现有的 LDAP 服务
1. 自配置或查找如下参数的值

```bash
LDAP_ENABLED=true
LDAP_HOST=10.0.0.1
LDAP_PORT=389
LDAP_METHOD=plain
LDAP_BIND_DN="cn=Manager,dc=example,dc=com"
LDAP_PASSWORD=password
LDAP_BASE="ou=People,dc=example,dc=com"
LDAP_UID=uid
```
