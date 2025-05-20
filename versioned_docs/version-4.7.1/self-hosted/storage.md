# Data storages

Here is a list of all the data storages required by the Zealot service,
for those who are able to manually backup and restore data before better backup management tools are available.

## Postgres

This is used to store and manage all data related to Zealot, so it goes without saying.

## Redis

Currently only the sidekiq asynchronous task service is using it to store some task status and statistics.

## File storage

The Zealot service relies on postgresql, redis and some other disk storage for uploaded application and debug files.
It is currently stored in the filesystem in the `public/uploads` directory.

- `apps` The directory for uploading applications
- `debugs_files` directory for uploading debug files

## Backup storage

The Zealot service currently supports command-generated backup data, which will contain
the database and binary packages of the uploaded apps and debug files.

The backup data is currently stored in the file system in the `public/backup` directory.
