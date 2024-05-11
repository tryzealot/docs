# APIs

Use the Zealot APIs to view, upload, download the build of app or debug file.

## Authentication

Requests currently only support query authentication for User Token, found in `API - Key` at the bottom of the login user details page.

> example : `https://YOUR_ZEALOT_URL/api?token=YOUR_TOKEN`

## Version

The current version is `v1`, the APIs does not need to explicitly pass the version parameter,
and the GraphGL interface is being developed gradually.

## Apps

Resource | Available endpoints
---|---
Upload an App | `/api/apps/upload`
List Apps | `/api/apps`
Get an App by ID | `/api/apps/:id`
List verions from an App | `/api/apps/versions`
Get the latest Release from an App | `/api/apps/latest`
Check an Release from App exists | `/api/apps/version_exist`
Create Apps | `/api/apps`
Update App name by ID | `/api/apps/:id`
Destry app by ID | `/api/apps/:id`

> Full APIs to check [api/apps](/docs/developer-guide/api/apps) page.

## Schemes

Resource | Available endpoints
---|---
List Schemes by app ID | `/api/apps/:id/schemes`
Create Scheme by app ID | `/api/apps/:id/schemes`
Update Scheme by ID | `/api/schemes/:id`
Destry Scheme by ID | `/api/schemes/:id`

> Full APIs to check [api/schemes](/docs/developer-guide/api/schemes) page.

## Channels

Resource | Available endpoints
---|---
List Channels by scheme ID | `/api/schemes/:id/channels`
Create Channel by scheme ID | `/api/schemes/:id/channels`
Update Channel by ID | `/api/channels/:id`
Destry Channel by ID | `/api/channels/:id`

> Full APIs to check [api/channels](/docs/developer-guide/api/channels) page.

## Debug files

Resource | Available endpoints
---|---
Upload a debug file | `/api/debug_files/upload`
Download a debug file by id | `/api/debug_files/download`
List Debug files | `/api/debug_files`
Get an debug file by id | `/api/debug_files/:id`
Check a debug file exists by id | `/api/debug_files/version_exist`
Update a debug file by id | `/api/debug_files/:id`
Delete a debug file by id  | `/api/debug_files/:id`

> Full APIs to check [api/debug_files](/docs/developer-guide/api/debug_files) page.
