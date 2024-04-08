---
sidebar_label: "Source code"
---

# Source code

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

The following is a tutorial on local deployment development for different operating systems.

## Prepare dependencies

### macOS

#### Install homebrew

First you need to install Xcode Command tools:

```bash
$ xcode-select --install
```

Then install Homebrew, the package management tool for macOS

```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### Install dependencies

```bash
$ brew install postgresql webp imagemagick node git
```

#### Setup Database and cache services

Run postgresql  services

```bash
$ brew services start postgresql
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


### Debian (Ubuntu)

#### System dependencies

```bash
$ apt update
$ apt install -y libssl-dev tar tzdata git imagemagick libjpeg-dev libpng-dev libtiff-dev libwebp-dev
```

#### Install dependencies

```bash
$ apt install -y postgresql-client node
```

#### Setup Database and cache services

Run postgres services

```bash
$ systemctl postgres start
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

### Alpine Linux

#### System dependencies

```bash
$ apk --update --no-cache add build-base libxml2 libxslt git \
    libxml2-dev libxslt-dev yaml-dev postgresql-dev nodejs npm yarn libwebp-dev libpng-dev tiff-dev \
    tzdata
```

Needs install `gcompat` if use `arm` architecture. or an exception will throws such like "[Error loading shared library](https://nokogiri.org/tutorials/installing_nokogiri.html#linux-musl-error-loading-shared-library)".

#### Install dependencies

```bash
$ apk --update --no-cache postgresql
```

#### Setup Database and cache services

Run postgres services

```bash
$ rc-service postgres start
```

You also need to create a default username in Postgres：

```bash
$ initdb -D /var/lib/postgresql/data
$ createuser --superuser zealot

# If you are worried about the high privilege, you can only enable the create database privilege
$ createuser --createdb zealot
```

## Install Ruby

Can be installed by either asdf, rvm as ruby version manager.

```mdx-code-block
<Tabs groupId="install-ruby">
<TabItem value="asdf">
```

Following the [offical install guide](http://asdf-vm.com/guide/getting-started.html) then:

```bash
# Enable Ruby 3.2.0 YJIT need install rust 1.58+
# Optinal install:
asdf plugin add rust
asdf install rust latest
asdf global rust latest
export RUBY_CONFIGURE_OPTS=--enable-yjit

# Required:
asdf plugin add ruby
asdf install ruby 3.2.0
asdf global ruby 3.2.0
```

```mdx-code-block
</TabItem>
<TabItem value="rvm">
```

```bash
$ curl -sSL https://get.rvm.io | bash -s stable
$ rvm install 3.2.0 --disable-binary
```

```mdx-code-block
</TabItem>
</Tabs>
```

## Fetch source code

```bash
git clone https://github.com/tryzealot/zealot.git
```

## Initialize Zealot

All the following steps need to be performed in the zealot root directory.

### bundler

Install Ruby gems

```bash
$ [sudo] gem install bundler
$ bundle install
```

### yarn

Install javascript packages:

```bash
$ yarn install
```

### Initialize database

Make sure there are no problems with the connection database information, then the database tables will be created and the table structure will be created:

```bash
$ rails db:create
$ rails db:migrate
```

Configuring the connection database can be done via [environment variables](/docs/self-hosted/configuration/environment-variables) or by changing the `config/database.yml` file.

### Initialize default account and demo data

Initialize administrator account and sample application

```bash
$ rails db:seed
```

### Launch services

```bash
$ bin/dev
```

Open brower `http://localhost:3000`
