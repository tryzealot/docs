---
sidebar_label: "依赖"
---

# Zealot 自部署依赖

如果想要顺利并发挥 Zealot 最佳状态运行，本页面提供了安装所需的各自软硬环境的依赖安装信息。

## 操作系统

Zealot 可以安装在绝大多数 Linux 操作系统，但目前并没有测试和统计具体有哪些。

## 硬件依赖

### CPU

CPU 数量取决于 Zealot 使用的资源和任务量，工作量受（包括但不仅限于）以下因素影响：有多少应用和调试文件被上传和解析；有多少应用被下载；有多少网络钩子被触发；苹果开发者同步测试设备的频率以及备份计划作业的数量和频率。

下面是最小硬件条件推荐的 CPU 硬件规格，请不要低于这个标准否则服务运行会收到一定的影响造成服务无法正常工作：

- **1 核**是**必须**的最小核心数。

### 内存

内存大小取决于 Zealot 使用的资源和任务量，工作量受（包括但不仅限于）以下因素影响：有多少应用和调试文件被上传和解析；有多少应用被下载；有多少网络钩子被触发；苹果开发者同步测试设备的频率以及备份计划作业的数量和频率。

下面是最小硬件条件推荐的内存大小规格，请不要低于这个标准否则服务运行会收到一定的影响造成服务无法正常工作：

- **512MB****是**必须**的最少的内存大小。

### 存储

存储容量的大小取决于有多少应用和调试文件版本上传，当然也包含生成的备份文件。

## 软件依赖

### Ruby 版本

- Ruby 3.0+

必须使用标准的 MRI 实现的 Ruby 版本。Zealot 内部依赖的 Gems 需要原生扩展。

### Node.js 版本

Zealot 使用 [esbuild](https://esbuild.github.io/) 和 [sass](https://sass-lang.com/) 编译前端资源。

推荐使用 Node 14.x+ 版本。

可以在终端应用通过运行 `node -v` 命令查看 node 的版本。如果运行的版本低于 `v8.0` 你需要更新到推荐的版本。你可在[官方网站](https://nodejs.org/en/download/)查看更多安装或升级教程。

## 数据库

数据库仅支持 PostgreSQL 且目前没有计划支持更多其他数据库。

### PostgreSQL 依赖

PostgreSQL 预留_至少_ 5-10 GB 空间，更多的空间意味着可以存储更多的数据。

我们强烈推荐使用且保持 PostgreSQL 永远是最新的稳定版本作为开发和测试使用。

### Redis

Zealot 后台异步任务和定时任务依赖于 Redis 做数据的存储和统计使用，存储空间依赖很小，50MB 足矣。

Redis 版本推荐 5.0+

## Sidekiq

Sidekiq 是 Zealot 后台异步任务和定时任务使用的服务，它支持多线程操作且运行时依托于 Rails （也就是 Zealot 使用的框架）。
它可能会随着时间的推移而增长内存的占用，如果 Zealot 运行的时间很长造成的服务不稳定请适当调整内存的大小，建议是 1GB+。

## 已支持 Web 浏览器

Zealot 支持如下 Web 浏览器：

- [x] [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [x] [Google Chrome](https://www.google.com/chrome/)
- [x] [Chromium](https://www.chromium.org/getting-involved/dev-channel)
- [x] [Apple Safari](https://www.apple.com/safari/)
- [ ] [Microsoft Edge](https://www.microsoft.com/en-us/edge) - 没有测试

:::warn

Zealot 运行部分页面依赖于 Javascript，请不要设置浏览器禁止它。

:::
