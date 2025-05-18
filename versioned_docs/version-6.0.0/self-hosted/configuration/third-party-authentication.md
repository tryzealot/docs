# Third-party Authentication

Zealot supports authorized logins using supported third-party services, which can be currently configured via the following environment variables or in the settings page of the admin panel.

Service | provider
---|---
Feishu | `feishu`
Gitlab | `gitlab`
Google | `google_oauth2`
LDAP | `ldap`
OpenID Connect | `openid_connect`

If the above services need to set the callback address please set it uniformly as follows

```
https://zealot.example.com/users/auth/:provider/callback
```

where `:provider` is the identifier of the above supported third-party service, for example:

```bash
# if Google is enabled, then replace `:provider` with `google_oauth2`.
https://zealot.example.com/users/auth/google_oauth2/callback
```

## Gitlab

1. Register a Gitlab [On line](http://gitlab.com) account or use self-host service
1. Create an application in Preferences -> Applications page.
1. Configure `Redirect URI` such like `https://zealot.example.com/users/auth/gitlab/callback` (replace the domain in your case)
1. Check scope: `read_user`，By default zealot only uses this license, if your enable scope is `api` that's fine too

```bash
GITLAB_ENABLED=true
GITLAB_SITE=https://gitlab.com/api/v4
GITLAB_SCOPE=read_user
GITLAB_APP_ID=
GITLAB_SECRET=
```

## Google

1. Register a Google account
1. Enable [Google Cloud Platform](https://console.cloud.google.com/apis/dashboard) service
1. Choose or create a Project then go to Credentials page
1. Create OAuth Client ID with Web Application, and configure Authorized redirect URI such like `https://zealot.example.com/users/auth/google_oauth2/callback` (replace the domain in your case)

```bash
GOOGLE_OAUTH_ENABLED=true
GOOGLE_CLIENT_ID=
GOOGLE_SECRET=
```

## Feishu (Lark)

1. Register a feishu (lark) account and download the Phone app.
1. Enable [Open platform](https://open.feishu.cn/app/) and create application to get app_id, app_secret
1. Configure callback url such like `https://zealot.example.com/users/auth/feishu/callback` (replace the domain in your case)
1. Check user filed information scope: `email address` (Optional)
1. Create a version and publish

```bash
FEISHU_ENABLED=true
FEISHU_APP_ID=
FEISHU_APP_SECRET=
```

## LDAP

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

## OpenID Connect

Supports both auto-discovery mode and manual settings.

### Auto-discovery

Turning on auto-discovery mode will automatically fetch the `[OIDC_ISSUER_URL]/.well-known/openid-configuration` configuration.

```bash
OIDC_ENABLED=true
OIDC_NAME=OIDC Provider
OIDC_CLIENT_ID=
OIDC_CLIENT_SECRET=
OIDC_SCOPE=openid,email,profile
OIDC_RESPONSE_TYPE=code
OIDC_UID_FIELD=preferred_username
OIDC_ISSUER_URL=https://oidc.example.com
OIDC_DISCOVERY=true
```

### Manual

```
OIDC_ENABLED=true
OIDC_NAME=OIDC Provider
OIDC_CLIENT_ID=
OIDC_CLIENT_SECRET=
OIDC_SCOPE=openid,email,profile
OIDC_RESPONSE_TYPE=code
OIDC_UID_FIELD=preferred_username
OIDC_ISSUER_URL=https://oidc.example.com
OIDC_AUTH_URI=/authorize
OIDC_TOKEN_URI=/token
OIDC_USERINFO_URI=/userinfo
```

Above `OIDC_AUTH_URI`, `OIDC_TOKEN_URI`, `OIDC_USERINFO_URI` will use the default path as above if not set.
