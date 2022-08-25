---
sidebar_label: "依赖"
---

# Zealot 自部署依赖

如果想要顺利并发挥 Zealot 最佳状态运行，本页面提供了安装所需的各自软硬环境的依赖安装信息。

## 操作系统

Zealot 可以安装在绝大多数 Linux 操作系统，但目前并没有测试和统计具体有哪些。

## 硬件依赖

### CPU

CPU requirements are dependent on the usage and expected workload. Your workload is influenced by factors such as - but not limited to - how many apps and debug files are uploaded and parsed, how many apps are downloaded, how many web hooks are triggered, how often Apple developers sync test devices, and how much and how often backup schedule jobs are made.

The following is the recommended minimum CPU hardware guidance for a handful of example Zealot conversation base sizes.

- **1 cores** is the **required** minimum number of cores.

### 内存

Memory requirements are dependent on the usage and expected workload. Your workload is influenced by factors such as - but not limited to - how many apps and debug files are uploaded and parsed, how many apps are downloaded, how many web hooks are triggered, how often Apple developers sync test devices, and how much and how often backup schedule jobs are made.

The following is the recommended minimum Memory hardware guidance for a handful of example Zealot conversation base sizes.

- **512MB RAM** is the **required** minimum memory size.

### 存储

The necessary hard drive space largely depends on the size and number of apps and debug files uploaded, also include backup files.

## 软件依赖

### Ruby 版本

- Ruby 3.0 and later is required.

You must use the standard MRI implementation of Ruby. Zealot needs several Gems that have native extensions.

### Node.js 版本

Zealot uses [esbuild](https://esbuild.github.io/) and [sass](https://sass-lang.com/) to compile frontend assets.

We recommend Node 14.x, as it's faster.

You can check which version you're running with `node -v`. If you're running a version older than `v10.12.0`,
you need to update it to a newer version. You can find instructions to install from community maintained packages or compile from source at the [Node.js website](https://nodejs.org/en/download/).

## 数据库

PostgreSQL is the only supported database. We don't have plans to support any other alternatives as of now.

### PostgreSQL 依赖

The server running PostgreSQL should have _at least_ 5-10 GB of storage
available, though the exact requirements depends on the usage on your Zealot Instance.

We highly recommend using the latest stable PostgreSQL versions as these were used for development and testing.

### Redis

Redis stores the background task queue and various Zealot configurations cached.
The storage requirements for Redis are minimal, You can start with 50MB and scale up as required.

Redis version 5.0 or higher is recommended

## Sidekiq

Sidekiq processes the background jobs with a multi-threaded process.
This process starts with the entire Rails stack but it can grow over time due to memory leaks.
On a very active server the Sidekiq process can use 1GB+ of memory.

You can opt to have both the sidekiq workers and rails servers to run on the same machine.
But we recommend keeping the worker process and rails server on seperate webservers for better scalability.

## 已支持 Web 浏览器

Zealot supports the following web browsers:

- [x] [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [x] [Google Chrome](https://www.google.com/chrome/)
- [x] [Chromium](https://www.chromium.org/getting-involved/dev-channel)
- [x] [Apple Safari](https://www.apple.com/safari/)
- [ ] [Microsoft Edge](https://www.microsoft.com/en-us/edge) - no test

NOTE:
We don't support running Zealot with JavaScript disabled in the browser.
