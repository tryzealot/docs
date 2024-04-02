---
sidebar_label: "Requirements"
---

# Zealot Self Hosted Requirements

This page incldues useful information on the requirements that are needed to install and run Zealot on your servers.

## Operating Systems

Installation of Zealot is possible on most Linux environments, but not officially supported.

## Hardware requirements

### Architecture

Zealot can now run on either x86_64(amd86) or arm64(armv8/arrch) or armv7 based mostly Linux OS, for example: Debian, Ubuntu, CentOS, Arch Linux, Armbian etc.

### CPU

CPU requirements are dependent on the usage and expected workload. Your workload is influenced by factors such as - but not limited to - how many apps and debug files are uploaded and parsed, how many apps are downloaded, how many web hooks are triggered, how often Apple developers sync test devices, and how much and how often backup schedule jobs are made.

The following is the recommended minimum CPU hardware guidance for a handful of example Zealot conversation base sizes.

- **1 cores** is the **required** minimum number of cores.

### Memory

Memory requirements are dependent on the usage and expected workload. Your workload is influenced by factors such as - but not limited to - how many apps and debug files are uploaded and parsed, how many apps are downloaded, how many web hooks are triggered, how often Apple developers sync test devices, and how much and how often backup schedule jobs are made.

The following is the recommended minimum Memory hardware guidance for a handful of example Zealot conversation base sizes.

- **512MB RAM** is the **required** minimum memory size.

### Storage

The necessary hard drive space largely depends on the size and number of apps and debug files uploaded, also include backup files.

## Software requirements

### Ruby versions

- Ruby 3.0 and later is required.

You must use the standard MRI implementation of Ruby. Zealot needs several Gems that have native extensions.

### Node.js versions

Zealot uses [esbuild](https://esbuild.github.io/) and [sass](https://sass-lang.com/) to compile frontend assets.

We recommend Node 14.x or higher version, as it's faster.

You can check which version you're running with `node -v`. If you're running a version older than `v8.0`,
you need to update it to a newer version. You can find instructions to install from community maintained packages or compile from source at the [Node.js website](https://nodejs.org/en/download/).

## Database

PostgreSQL is the only supported database. We don't have plans to support any other alternatives as of now.

### PostgreSQL Requirements

The server running PostgreSQL should have _at least_ 5-10 GB of storage
available, though the exact requirements depends on the usage on your Zealot Instance.

We highly recommend using the latest stable PostgreSQL versions as these were used for development and testing.

### Redis

Redis stores the background task queue and various Zealot configurations cached.
The storage requirements for Redis are minimal, You can start with 50MB and scale up as required.

Redis version 6.2 or higher version is recommended

## Sidekiq

Sidekiq processes the background jobs with a multi-threaded process.
This process starts with the entire Rails stack but it can grow over time due to memory leaks.
On a very active server the Sidekiq process can use 1GB+ of memory.

## Supported web browsers

:::tip

We don't support running Zealot with JavaScript disabled in the browser.

:::

Zealot supports the following web browsers:

- [x] [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [x] [Google Chrome](https://www.google.com/chrome/)
- [x] [Chromium](https://www.chromium.org/getting-involved/dev-channel)
- [x] [Apple Safari](https://www.apple.com/safari/)
- [x] [Microsoft Edge](https://www.microsoft.com/en-us/edge)
