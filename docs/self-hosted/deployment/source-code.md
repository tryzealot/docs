---
sidebar_label: "Source code"
---

# Source code

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

The following is a tutorial on local deployment development for different operating systems.

## macOS

### System dependencies

#### Install homebrew

First you need to install Xcode Command tools:

```bash
$ xcode-select --install
```

Then install Homebrew, the package management tool for macOS

```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install dependencies

```bash
$ brew install redis postgresql webp imagemagick node git
```

#### Setup Database and cache services

Run postgresql and redis services

```bash
$ brew services start postgresql
$ brew services start redis
```

You also need to create a default username in Postgresql：

```bash
$ createuser --superuser zealot

# If you are worried about the high privilege, you can only enable the create database privilege
$ createuser --createdb zealot
```

#### yarn

```bash
$ npm install -g yarn
```

#### ruby

Can be installed by either asdf, rvm as ruby version manager.

```mdx-code-block
<Tabs groupId="install-ruby">
<TabItem value="asdf">
```

Following the [offical install guide](http://asdf-vm.com/guide/getting-started.html) then:

```bash
asdf plugin add ruby
asdf install ruby 3.0.0
asdf global ruby 3.0.0
```

```mdx-code-block
</TabItem>
<TabItem value="rvm">
```

```bash
$ curl -sSL https://get.rvm.io | bash -s stable
$ rvm install 3.0 --disable-binary
```

```mdx-code-block
</TabItem>
</Tabs>
```

#### bundler

```bash
$ [sudo] gem install bundler
$ bundle install
```

### Initialize database

```bash
$ rails db:create
$ rails db:migrate
```

Initialize administrator account and sample application

```bash
$ rails db:seed
```

### Launch services

```bash
$ bin/dev
```

Open brower `http://localhost:3000`

## Debian (Ubuntu)

### System dependencies

```bash
$ apt update
$ apt install -y libssl-dev tar tzdata git imagemagick libjpeg-dev libpng-dev libtiff-dev libwebp-dev
```

### Install dependencies

```bash
$ apt install -y redis postgresql-client node
```

#### Setup Database and cache services

Run postgresql and redis services

```bash
$ systemctl postgres start
$ systemctl redis start
```

You also need to create a default username in Postgresql：

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

#### ruby

Can be installed by either asdf, rvm as ruby version manager.

```mdx-code-block
<Tabs groupId="install-ruby">
<TabItem value="asdf">
```

Following the [offical install guide](http://asdf-vm.com/guide/getting-started.html) then:

```bash
asdf plugin add ruby
asdf install ruby 3.0.0
asdf global ruby 3.0.0
```

```mdx-code-block
</TabItem>
<TabItem value="rvm">
```

```bash
$ curl -sSL https://get.rvm.io | bash -s stable
$ rvm install 3.0 --disable-binary
```

```mdx-code-block
</TabItem>
</Tabs>
```

#### bundler

```bash
$ [sudo] gem install bundler
$ bundle install
```

### Initialize database

```bash
$ rails db:create
$ rails db:migrate
```

Initialize administrator account and sample application

```bash
$ rails db:seed
```

### Launch services

```bash
$ bin/dev
```

Open brower `http://localhost:3000`

## Alpine Linux

### System dependencies

```bash
$ apk --update --no-cache add build-base libxml2 libxslt git \
    libxml2-dev libxslt-dev yaml-dev postgresql-dev nodejs npm yarn libwebp-dev libpng-dev tiff-dev \
    tzdata
```

### Install dependencies

```bash
$ apk --update --no-cache redis postgresql node
```

#### Setup Database and cache services

Run postgresql and redis services

```bash
$ rc-service postgres start
$ rc-service redis start
```

You also need to create a default username in Postgresql：

```bash
$ initdb -D /var/lib/postgresql/data
$ createuser --superuser zealot

# If you are worried about the high privilege, you can only enable the create database privilege
$ createuser --createdb zealot
```

#### yarn

```bash
$ npm install -g yarn
```

#### ruby

Can be installed by either asdf, rvm as ruby version manager.

```mdx-code-block
<Tabs groupId="install-ruby">
<TabItem value="asdf">
```

Following the [offical install guide](http://asdf-vm.com/guide/getting-started.html) then:

```bash
asdf plugin add ruby
asdf install ruby 3.0.0
asdf global ruby 3.0.0
```

```mdx-code-block
</TabItem>
<TabItem value="rvm">
```

```bash
$ curl -sSL https://get.rvm.io | bash -s stable
$ rvm install 3.0 --disable-binary
```

```mdx-code-block
</TabItem>
</Tabs>
```

#### bundler

```bash
$ [sudo] gem install bundler
$ bundle install
```

### Initialize database

```bash
$ rails db:create
$ rails db:migrate
```

Initialize administrator account and sample application

```bash
$ rails db:seed
```

### Launch services

```bash
$ bin/dev
```

Open brower `http://localhost:3000`
