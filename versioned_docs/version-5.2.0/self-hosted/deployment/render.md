---
sidebar_label: "Render"
---

# Deploy Zealot to Render guide

Zealot support a render [blueprint](https://render.com/docs/blueprint-spec) named `render.yaml` to deploy on [render.com](https://render.com/).

## Deploying on Render

* It uses the [Zealot Docker image](https://ghcr.io/tryzealot/zealot).
* It uses [Render Disks](https://render.com/docs/disks) for permanent SSD storage for uploaded files and content.
* It uses [PostgreSQL](https://render.com/docs/databases) as the backing database and [Redis](https://render.com/docs/redis) as cache service.

### Install button

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/tryzealot/zealot)
