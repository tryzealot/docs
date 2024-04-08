# Environment Variables

## The .env File

You can set the correct values as per the following options. Once you set the values, you should rename the file to `.env` before you start the server.

## Configure HTTPS (SSL)

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

## Configure URL (Domain)

Must be configured otherwise downloaded applications and some static resources will not be accessed correctly

```bash
# No need http:// or https://
ZEALOT_DOMAIN=zealot.com
```

## Database configuration

If you have reusable postgres services,
you can also customize the configuration to use them instead of
using the services configured by default with docker-compose.

### Postgres

```bash
ZEALOT_POSTGRES_HOST=127.0.0.1
ZEALOT_POSTGRES_PORT=5432
ZEALOT_POSTGRES_USERNAME=postgres
ZEALOT_POSTGRES_PASSWORD=ze@l0t
ZEALOT_POSTGRES_DB_NAME=zealot
```

### Redis

Version 5.3.0 is not dependent on redis. If you have configured it before,
please consider deleting the REDIS_URL environment variable, but not deleting it will not affect the use.

## Configure default language

Packs | Value
---|---
zh-CN | Simplified Chinese (default)
en | English

```bash
DEFAULT_LOCALE=en
```

## Configure default appearance

Appearance | Value
---|---
light | Light mode(default)
dark | Dark mode
auto | System auto

```bash
ZEALOT_APPEARANCE=dark
```

## Configure default Administer

The default does not configure the following will also generate the following account and
password as an account with administrator privileges, it is recommended to change the password again after configuration.

```bash
ZEALOT_ADMIN_EMAIL=admin@zealot.com
ZEALOT_ADMIN_PASSWORD=ze@l0t
```

## Enable new user registration

After closing the registration, the administrator can add users manually through the user management in the administration panel.

```bash
# Open registration
ZEALOT_REGISTER_ENABLED=true

# Close registration
ZEALOT_REGISTER_ENABLED=false
```

## Enable guest mode

Enable the visitor mode to allow the application to view, download and install,
it is recommended that the company internal reliance on permissions is not high condition to use,
specific permission comparison can [see here for details](/docs/user-guide/administrator/permissions)

```bash
# Guest mode is ON
ZEALOT_GUEST_MODE=true

# Guest mode is OFF
ZEALOT_GUEST_MODE=false
```

## Configure emails

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

## Disbale Cable request protection

Experimental:

```bash
ZEALOT_DISABLE_CABLE_REQUEST_PROTECTION=true
```
