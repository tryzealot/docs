---
sidebar_label: "Source code"
---

The following is a tutorial on local deployment development for different operating systems.

## macOS

### homebrew

First you need to install Xcode Command tools:

```bash
$ xcode-select --install
```

Then install Homebrew, the package management tool for macOS

```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### postgresql and redis

```bash
$ brew install redis postgresql
```

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

### node

```bash
$ brew install node
$ npm install -g yarn
```

### ruby

Can be installed by either asdf, rvm or homebrew

#### asdf

Following the [offical install guide](http://asdf-vm.com/guide/getting-started.html) then:

```bash
asdf plugin add ruby
asdf install ruby 2.7.0
asdf global ruby 2.7.0
```

#### rvm

```bash
$ curl -sSL https://get.rvm.io | bash -s stable
$ rvm install 2.7 --disable-binary
```

### homebrew

```bash
$ brew install ruby
```

After that, you need to add the ruby execution path of the homebrew installation to the `PATH` environment variable of your current shell:

- **zsh** shell append to `~/.zshrc`
- **bash** shell append to `~/.bashrc` or `~/.bash_profile`

```bash
export PATH="/usr/local/lib/ruby/gems/2.7.0/bin:/usr/local/opt/ruby/bin:$PATH"
```

Remember to reload the configuration file after adding

```bash
$ source ~/.zshrc
# or
$ source ~/.bash_profile
```

### bundler

```bash
$ [sudo] gem install bundler
$ bundle install
```

### initialize database

```bash
$ rails db:create
$ rails db:migrate
```

Initialize administrator account and sample application

```bash
$ rails db:seed
```

### launch services

```bash
$ bundle exec guard
```

Open brower `http://localhost:3000`
