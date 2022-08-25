# Environments

## The .env File

You can set the correct values as per the following options. Once you set the values, you should rename the file to `.env` before you start the server.

## Domain

Must be configured otherwise downloaded applications and some static resources will not be accessed correctly

```bash
# No need http:// or https://
ZEALOT_DOMAIN=zealot.com
```

## Locale (Language)

Packs | Value
---|---
zh-CN | Simplified Chinese (default)
en | English

```bash
DEFAULT_LOCALE=en
```

## Appearance

Appearance | Value
---|---
light | Light mode(default)
dark | Dark mode
auto | System auto

```bash
ZEALOT_APPEARANCE=dark
```

## Admin account and password

The default does not configure the following will also generate the following account and
password as an account with administrator privileges, it is recommended to change the password again after configuration.

```bash
ZEALOT_ADMIN_EMAIL=admin@zealot.com
ZEALOT_ADMIN_PASSWORD=ze@l0t
```

## HTTPS SSL

**Due to Apple's mandatory requirement of mandatory HTTPS for online deployment and download services**, d
ownloading applications will be forced to go HTTPS protocol when redeploying.

If the deployment is a standalone service on a single machine, it is recommended to enable Let's Encrypt free SSL certificate:

```bash
ZEALOT_CERT_EMAIL=zealot@example.com
```

> The following self-signed certificate file name, can not be set at the same time

If the deployed machine can only use self-signed certificates, they need to be configured,
but note that iOS downloads require the iOS device to authorize the self-signed certificate before the download and installation is allowed. (Not recommended)

```bash
ZEALOT_CERT=zealot.test.pem
ZEALOT_CERT_KEY=zealot.test-key.pem
```

## Login

### Guest mode

Enable the visitor mode to allow the application to view, download and install,
it is recommended that the company internal reliance on permissions is not high condition to use,
specific permission comparison can [see here for details](/docs/user-guide/permissions)

```bash
# Guest mode is ON
ZEALOT_GUEST_MODE=true

# Guest mode is OFF
ZEALOT_GUEST_MODE=false
```

### Open Registration

After closing the registration, the administrator can add users manually through the user management in the administration panel.

```bash
# Open registration
ZEALOT_REGISTER_ENABLED=true

# Close registration
ZEALOT_REGISTER_ENABLED=false
```

### Third-party Auths

Avaiable services:

Service Name | provider value
---|---
Feishu | `feishu`
Gitlab | `gitlab`
Google | `google_oauth2`
LDAP | `ldap`

If the above services need to set the callback address please set it uniformly as follows

```
http://zealot.com/users/auth/:provider/callback
```

where `:provider` is the identifier of the above supported third-party service, for example:

```bash
# if Google is enabled, then replace `:provider` with `google_oauth2`.
http://zealot.com/users/auth/google_oauth2/callback
```

#### Gitlab

1. Register a Gitlab [On line](http://gitlab.com) account or use self-host service
1. Create an application in Preferences -> Applications page.
1. Configure `Redirect URI` such like `http://zealot.com/users/auth/gitlab/callback` (replace the domain in your case)
1. Check scope: `read_user`，By default zealot only uses this license, if your enable scope is `api` that's fine too

```bash
GITLAB_ENABLED=true
GITLAB_SITE=https://gitlab.com/api/v4
GITLAB_SCOPE=read_user
GITLAB_APP_ID=
GITLAB_SECRET=
```

#### Google

1. Register a Google account
1. Enable [Google Cloud Platform](https://console.cloud.google.com/apis/dashboard) service
1. Choose or create a Project then go to Credentials page
1. Create OAuth Client ID with Web Application, and configure Authorized redirect URI such like `http://zealot.com/users/auth/google_oauth2/callback` (replace the domain in your case)

```bash
GOOGLE_OAUTH_ENABLED=true
GOOGLE_CLIENT_ID=
GOOGLE_SECRET=
```

#### Feishu (Lark)

1. Register a feishu (lark) account and download the Phone app.
1. Enable [Open platform](https://open.feishu.cn/app/) and create application to get app_id, app_secret
1. Configure callback url such like `http://zealot.com/users/auth/feishu/callback` (replace the domain in your case)
1. Check user filed information scope: `email address` (Optional)
1. Create a version and publish

```bash
FEISHU_ENABLED=true
FEISHU_APP_ID=
FEISHU_APP_SECRET=
```

#### LDAP

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

## Exteral Storages

If you have reusable postgresql and redis services,
you can also customize the configuration to use them instead of
using the services configured by default with docker-compose.


### Postgresql

```bash
ZEALOT_POSTGRES_HOST=127.0.0.1
ZEALOT_POSTGRES_PORT=5432
ZEALOT_POSTGRES_USERNAME=postgres
ZEALOT_POSTGRES_PASSWORD=ze@l0t
ZEALOT_POSTGRES_DB_NAME=zealot
```

### Redis

This is a URL connection mainly for heroku compatibility

```bash
REDIS_URL=redis://user:pass@127.0.0.1:6379/0
```


## Send Mail

Currently, only `smtp` is supported to configure email notification service.
Email notification mainly affects are user registration, sending activation emails and
changing password service, but it does not affect the use if it is not turned on.

```bash
# SMTP settings
SMTP_ADDRESS=smtp.gmail.com
SMTP_PORT=587
SMTP_DOMAIN=gmail.com
SMTP_USERNAME=you@gmail.com
SMTP_PASSWORD=yourpassword
SMTP_AUTH_METHOD=plain
SMTP_ENABLE_STARTTLS_AUTO=true

# Sender and email address by default
ACTION_MAILER_DEFAULT_FROM=you@gmail.com
ACTION_MAILER_DEFAULT_TO=you@gmail.com
```

## Schedule Jobs

### Clean old version releases of app

> After version 4.2.0 are off by default; previous versions were on.

A reliable logic for cleaning up old versions is to keep an eye on all uploaded
versions of the current master version, as observed by project maintainers over time.

Previously uploaded historical versions only need to keep the last uploaded build
version basically to meet the vast majority of cases, for example:

> Additional: the current logic is relatively trouble-free but inflexible, in fact,
> there is thought to support a variety of processing logic, see https://github.com/tryzealot/zealot/issues/376

```
- 2.0
  - 3
  - 2
  - 1
- 1.0.1
  - 10
  - 9
  - 8
  ...
- 1.0
  - 5
  - 4
  - 3
  ...
```

The task will clean up all versions up to version 1.0.1 containing 9 and version 1.0 containing 4,
leaving the final version file as follows:

```
- 2.0
  - 3
  - 2
  - 1
- 1.0.1
  - 10
- 1.0
  - 5
```

If disk space is limited, you can enable cleanup of timed tasks by setting the environment variable `ZEALOT_KEEP_UPLOADS=false`.
