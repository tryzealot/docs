---
sidebar_label: "Dev Container (Docker)"
---

# Visual Studio Code Dev Container 开发部署指南

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

[Dev Container](https://code.visualstudio.com/docs/devcontainers/containers) (Developing inside a Container) 是 Visual Studio Code 使用 Docker 作为开发环境能够实现在本地无需配置开发环境在容器开发有近乎本地体验的解决方案。

![VSCode devcontainer](https://code.visualstudio.com/assets/docs/devcontainers/containers/architecture-containers.png)

## 系统依赖

在开发之前，你需要安装最新版本的 Git，Virsual Studio Code，Docker 和 docker-compose。

### 安装 Git

因操作系统不同，建议按照官方[安装教程](https://github.com/git-guides/install-git)操作。

### 安装 Docker & docker-compose

- Windows: 10 Pro/Enterprise 需要 [Docker Desktop](https://www.docker.com/products/docker-desktop) / Windows 10 Home (2004+) 需要 Docker Desktop 2.3+ 和 [WSL 2 back-end](https://aka.ms/vscode-remote/containers/docker-wsl2)。（不支持 Docker Toolbox 和 Windows container images）
- macOS: [Docker Desktop](https://www.docker.com/products/docker-desktop) 2.0+。
- Linux: [Docker CE/EE](https://docs.docker.com/install/#supported-platforms) 18.06+ 和 [Docker Compose](https://docs.docker.com/compose/install) 1.21+。（不支持 Ubuntu snap 包）

### 安装 Visual Studio Code

Visual Studio Code 是一个跨平台运行的免费的代码编辑器，根据操作系统选择你的安装方式：

```mdx-code-block
<Tabs groupId="install-vscode">
<TabItem value="MacOS">
```

1. 下载 [Visual Studio Code](https://go.microsoft.com/fwlink/?LinkID=534106) macOS 版。
1. 打开浏览器下载界面找到已下载的应用文件或压缩文件。
1. 如果是压缩文件先进行解压缩操作，如果使用 Safari 下载通常会帮你自动解压缩。
1. 拖拽 `Visual Studio Code.app` 到系统应用文件夹。
1. 双击 VS Code 应用即可打开应用。

```mdx-code-block
</TabItem>
<TabItem value="Windows">
```

1. 下载 [Visual Studio Code installer](https://go.microsoft.com/fwlink/?LinkID=534107) Windows 版。
1. 下载完成后执行安装程序（VSCodeUserSetup-{version}.exe）等待安装成功。
1. 默认情况下 VS Code 会安装到 `C:\Users\{Username}\AppData\Local\Programs\Microsoft VS Code` 路径。

```mdx-code-block
</TabItem>
<TabItem value="Linux">
```

因操作系统不同，建议按照官方[安装教程](https://code.visualstudio.com/docs/setup/linux)操作。

```mdx-code-block
</TabItem>
</Tabs>
```

### 安装 Remote container 扩展

按照官方教程安装 [Remote Container extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)。

![VSCode extension](/img/vscode-install-remote-containers.png)

## 获取 Zealot Codespace

Zealot Codespace 同样存放在 Zealot 项目 [.devcontailer](https://github.com/tryzealot/zealot/tree/develop/.devcontainer) 目录，你需要先克隆项目源代码。

```bash
git clone https://github.com/tryzealot/zealot.git
```

Codespace 包含了一系列文件：

文件名 | 说明
---|---
`devcontainer.json` | VSCode devcontainer 配置文件
`Dockerfile.base` | 镜像核心，变更会自动推送到不同 registry 仓库
`Dockerfile` | 间接镜像，主要是节省编译时间
`docker-compose.yml` | 项目服务依赖
`create-db-user.sql` | 用于初始化 Postgres 默认用户及权限

## 在容器内打开项目

打开 Visual Studio Code 应用后在 [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) 输入 `Dev Containers: Open Folder in Container...` 回车选择刚克隆下来的 Zealot 项目目录。

![VSCode Command Palette](/img/vscode-command-palette.png)

首次执行会拉取 Zealot Codespace 镜像并开始构建，过程会持续一段时间期间可点击 **Starting Dev Container (show log)** 查看构建实时日志。

![VSCode Command Palette](/img/vscode-devcontainer-log.png)

构建完成并启动完毕会加载项目文件和 zsh 终端，通过日志可以看到如下信息：

```
[7293 ms] Start: Run in container: cat /proc/344/environ
[9836 ms] Port forwarding connection from 53148 > 43379 > 43379 in the container.
[9836 ms] Start: Run in container: /home/vscode/.vscode-server/bin/5235c6bb189b60b01b1f49062f4ffa42384f8c91/node -e
[9981 ms] Port forwarding 53148 > 43379 > 43379 stderr: Connection established
[14988 ms] Port forwarding 53148 > 43379 > 43379 stderr: Remote close
[14999 ms] Port forwarding 53148 > 43379 > 43379 terminated with code 0 and signal null.
[29221 ms] Port forwarding 53148 > 43379 > 43379: Local close
```

在宿主机也能看到 Docker 启动了 docker-compose 在运行：

![Docker-Compose containers](/img/vscode-devcontainer-docker-containers.png)

## 启动项目

如果没有打开 VSCode 内置终端可以通过快捷键 `` Ctrl + ` `` 打开，新打开一个终端运行 `bin/dev` 可运行 Zealot 依赖的所有服务。

![VSCode Zealot in Container](/img/vscode-devcontainer-zealot.png)

## 浏览器访问服务

在运行 `bin/dev` 一会后你会在右下角窗口看到 **Open in Browser** 窗口点击可打开 Zealot 网页服务。同样也可以通过终端区域顶部 **Ports** 选项查看可转发端口的服务，点击浏览器图标会把容器的端口转发并绑定到本地随机断开后上面访问。

![VSCode forwarded ports](/img/vscode-devcontainer-forwarded-ports.png)
