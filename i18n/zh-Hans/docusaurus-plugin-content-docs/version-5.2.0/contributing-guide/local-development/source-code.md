---
sidebar_label: "源代码"
---

# 源码部署 Zealot 指南

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

如下整理了不同操作系统的本地部署开发教程。

## 准备部署环境

### macOS

#### 安装 homebrew

首先需要安装 Xcode Command tools:

```bash
$ xcode-select --install
```

如果提示安装失败，需要从 https://developer.apple.com/downloads 下载安装。

之后安装 macOS 的包管理工具 Homebrew

```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### 安装依赖

之后开始安装环境依赖

```bash
$ brew install redis postgresql webp imagemagick node git
```

M1 用户需要设置依赖编译路径到 SHELL 的配置文件中：

```bash
export CPATH=/opt/homebrew/include/
export LIBRARY_PATH=$LIBRARY_PATH:/opt/homebrew/lib/
```

#### 配置 Postgres 和 Redis

运行 postgresql 和 redis 服务

```bash
$ brew services start postgresql
$ brew services start redis
```

Postgresql 还需要创建默认用户名：

```bash
$ createuser --superuser zealot

# 如果担心权限过高可以只开启创建数据库权限
$ createuser --createdb zealot
```

#### yarn

```bash
$ npm install -g yarn
```

运行起来后使用浏览器访问 `http://localhost:3000`

#### 疑难杂症

##### M1 芯片 MacOS 问题

```
aarch64-darwin/libwebp_ffi.bundle => aarch64-darwin/jpegdec.o
```

使用 `bundle install` 会遇到如上问题这个是因为 homebrew 安装 webp 依赖之后编译路径无法被找到，上面有解决办法。

### Debian (Ubuntu)

#### 安装环境依赖

```bash
$ apt update
$ apt install -y libssl-dev tar tzdata git imagemagick libjpeg-dev libpng-dev libtiff-dev libwebp-dev
```

#### 安装依赖

```bash
$ apt install -y redis postgresql-client node
```

#### 配置 Postgres 和 Redis

运行 postgresql 和 redis 服务

```bash
$ systemctl postgres start
$ systemctl redis start
```

Postgresql 还需要创建默认用户名：

```bash
$ initdb -D /var/lib/postgresql/data
$ createuser --superuser zealot

# If you are worried about the high privilege, you can only enable the create database privilege
$ createuser --createdb zealot
```

#### node

```bash
$ npm install -g yarn
```

### Alpine Linux

#### 安装环境依赖

```bash
$ apk --update --no-cache add build-base libxml2 libxslt git \
    libxml2-dev libxslt-dev yaml-dev postgresql-dev nodejs npm yarn libwebp-dev libpng-dev tiff-dev \
    tzdata
```

如果是在 `arm` 架构安装还需要额外安装 `gcompat` glib 兼容层，否则会报 "[Error loading shared library](https://nokogiri.org/tutorials/installing_nokogiri.html#linux-musl-error-loading-shared-library)" 异常错误。

#### 安装依赖

```bash
$ apk --update --no-cache redis postgresql node
```

#### 配置 Postgres 和 Redis

运行 postgresql 和 redis 服务

```bash
$ rc-service postgres start
$ rc-service redis start
```

Postgresql 还需要创建默认用户名：

```bash
$ initdb -D /var/lib/postgresql/data
$ createuser --superuser zealot

# 如果担心数据库用户权限，可仅开启创建数据库权限
$ createuser --createdb zealot
```

#### yarn

```bash
$ npm install -g yarn
```

## 安装 Ruby

可以通过 asdf、rvm 任意一种方式安装。

```mdx-code-block
<Tabs groupId="install-ruby">
<TabItem value="asdf">
```

一个支持主流开发语言版本切换的工具，请按照[官方安装教程](http://asdf-vm.com/guide/getting-started.html)好之后安装 ruby：

```bash
# 开启 Ruby 3.2.0 YJIT 新特性需要安装 rust 1.58+
# 可选安装:
asdf plugin add rust
asdf install rust latest
asdf global rust latest
export RUBY_CONFIGURE_OPTS=--enable-yjit

# 必须安装
asdf plugin add ruby
asdf install ruby 3.2.0
asdf global ruby 3.2.0
```

```mdx-code-block
</TabItem>
<TabItem value="rvm">
```

如下命令是先安装 rvm 到当前系统的用户后安装 Ruby 3.0 版本：

```bash
$ curl -sSL https://get.rvm.io | bash -s stable
$ rvm install 3.2.0 --disable-binary
```

```mdx-code-block
</TabItem>
</Tabs>
```

## 克隆源代码

```bash
git clone https://github.com/tryzealot/zealot.git
```

## 初始化

以下步骤均需要在 zealot 根目录执行。

### bundler

安装 Ruby gems 第三方类库

```bash
$ [sudo] gem install bundler
$ bundle install
```

### yarn

安装前端第三方类库

```bash
$ yarn install
```

### 初始化数据库

确保连接数据库信息没有问题，后将会创建数据库表并创建表结构

```bash
$ rails db:create
$ rails db:migrate
```

配置数据库连接参数可通过[环境变量](/docs/self-hosted/configuration/environment-variables)或更改 `config/database.yml` 文件。

### 初始化预制数据

初始化管理员账号和应用样例

```bash
$ rails db:seed
```

### 运行 Zealot 服务

```bash
$ bin/dev
```

打开浏览器访问 `http://localhost:3000`
