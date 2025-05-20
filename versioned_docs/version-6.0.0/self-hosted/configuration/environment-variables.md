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
ZEALOT_CERT=zealot.example.com.pem
ZEALOT_CERT_KEY=zealot.example.com-key.pem
```

## Configure URL (Domain)

Must be configured otherwise downloaded applications and some static resources will not be accessed correctly

```bash
# No need http:// or https://
ZEALOT_DOMAIN=zealot.example.com
```

## Database configuration

If you have reusable postgres services,
you can also customize the configuration to use them instead of
using the services configured by default with docker-compose.

### Postgres

```bash
# Use url format variable
ZEALOT_DATABASE_URL="postgresql://postgres:ze@l0t@127.0.0.1:5432/zealot?sslmode=disable"

# Or use individual variables
ZEALOT_POSTGRES_HOST=127.0.0.1
ZEALOT_POSTGRES_PORT=5432
ZEALOT_POSTGRES_USERNAME=postgres
ZEALOT_POSTGRES_PASSWORD=ze@l0t
ZEALOT_POSTGRES_DB_NAME=zealot
ZEALOT_POSTGRES_SSLMODE=disable/allow/prefer/verify-ca/verify-full
```

ssl mode can review https://www.postgresql.org/docs/current/libpq-ssl.html

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

## Configure emails

Currently, only `smtp` is supported to configure email notification service.
Email notification mainly affects are user registration, sending activation emails and
changing password service, but it does not affect the use if it is not turned on.

```bash
# SMTP settings
SMTP_DOMAIN=zealot.example.com
SMTP_ADDRESS=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=you@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_AUTH_METHOD=plain
SMTP_ENABLE_STARTTLS=true

# Sender and email address by default
ACTION_MAILER_DEFAULT_FROM=notification@zealot.com
ACTION_MAILER_DEFAULT_TO=noreply-to@zealot.com
```

:::caution

Google [blocks sign-ins](https://support.google.com/accounts/answer/6010255) from apps it deems less secure.
You can change your Gmail settings [here](https://www.google.com/settings/security/lesssecureapps) to allow the attempts.
If your Gmail account has 2-factor authentication enabled, then you will need to set an
[app password](https://myaccount.google.com/apppasswords) and use that instead of your regular password.

:::

## Switch services

### Enable new user registration

After closing the registration, the administrator can add users manually through the user management in the administration panel.

```bash
# Open registration
ZEALOT_REGISTER_ENABLED=true

# Close registration
ZEALOT_REGISTER_ENABLED=false
```

### Enable guest mode

Enable the visitor mode to allow the application to view, download and install,
it is recommended that the company internal reliance on permissions is not high condition to use,
specific permission comparison can [see here for details](/docs/user-guide/administrator/permissions)

```bash
# Guest mode is ON
ZEALOT_GUEST_MODE=true

# Guest mode is OFF
ZEALOT_GUEST_MODE=false
```

## Configure analytics

### Google Analytics

Google Analytics is a website analysis service provided by Google. It only supports Universal Analytics, not GA4.

```bash
GOOGLE_ANALYTICS_ID=UA-12345678-9
```

### Umami

Umami is an open-source website analytics tool that can be self-hosted or used with the official service, which is enabled by default when `UMAMI_SCRIPT_URL` is not set.

```bash
UMAMI_SCRIPT_URL=https://analytics.us.umami.is/script.js
UMAMI_WEBSITE_ID=12345678-9
```

### Clarity

Google Analytics is a website analysis service provided by Microsoft.

```bash
CLARITY_ANALYTICS_ID=12345678-9
```

## Logging format

The log format uses [lograge](https://github.com/roidrage/lograge) implementation, and the output format can use the following formats:

name | description | memo
-----|-------------|-----
`rails` | Rails built-in format | [Documentation](https://guides.rubyonrails.org/debugging_rails_applications.html#sending-messages)
`json` | JSON | Transforms key-value content into JSON data
`graylog2` | Graylog2 format | Another combination in JSON format
`ltsv` | LTSV format | key-value combined with colons and separated by `\t`
`keyvalue` | Key-value format | key-value combined with equal signs and separated by spaces. **Default format**

```bash
ZEALOT_LOG_FORMAT=json
```
