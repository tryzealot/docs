# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ pnpm install
```

### Configuration

The Paddle checkout and the gateway client read build-time environment
variables. Copy `.env.example` to `.env` (git-ignored) and fill in the values:

| Variable | Purpose |
| --- | --- |
| `PADDLE_CLIENT_TOKEN` | Paddle client-side token (`test_…` for sandbox) |
| `PADDLE_ENV` | `sandbox` or `production` |
| `ZEALOT_GATEWAY_URL` | Gateway base URL; required, must end with `/api` (ADR-0007) |
| `ZEALOT_ENCRYPTION_KEY` | Must match the gateway's `NITRO_ENCRYPTION_KEY` |
| `ZEALOT_ENCRYPTION_SALT` | Must match the gateway's `NITRO_ENCRYPTION_SALT` |
| `ENVIRONMENT` | `production` only for the production deploy |

`ZEALOT_GATEWAY_URL` has no default. Local builds read it from `.env`, and the
production GitHub Pages deploy receives it (along with the other variables)
from repository secrets. Preview deployments must set it in the hosting
project's environment settings; the checkout shows a configuration error if the
variable is missing or does not end with `/api`.

### Local Development

```
$ pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true pnpm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
