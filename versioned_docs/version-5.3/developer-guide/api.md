# API

Access Zealot apps, debug files, users and other resources via API. All endpoints can be accessed with the authentication, but some of them are accessible publicly without authentication.

There are two versions of the API: `REST API` and `GraphQL`.

## REST API

The current version of the API is `1.x`. It is the recommended way to interact with Zealot. Version 1 does not requires clinets to pass the `v1` version to path of url.

Open [API docs](/api/v1/en).

### Authentication

Requests currently only support query authentication for User Token, found in `API - Key` at the bottom of the login user details page.

> example : `https://YOUR_ZEALOT_URL/api?token=YOUR_TOKEN`

## GraphQL

GraphGL API is being developed gradually for a long long long long time.
