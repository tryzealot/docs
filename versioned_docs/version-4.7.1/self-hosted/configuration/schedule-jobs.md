# Schedule Jobs

## Clean old version builds

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

:::info

`ZEALOT_KEEP_UPLOADS` set `true` by default.

:::

## Backup

When you create any backup it will join itself to the schedule job list.
