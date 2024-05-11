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
Get an App by id | `/api/apps/:id`
List verions from an App | `/api/apps/versions`
Get the latest Release from an App | `/api/apps/latest`
Check an Release from App exists | `/api/apps/version_exist`

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
