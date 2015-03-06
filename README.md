GiTchê Web Interface for GIT
============================

Vagrant enviroment

```bash
$ vagrant box add precise32 http://files.vagrantup.com/precise32.box
$ vagrant box add trusty64 https://atlas.hashicorp.com/ubuntu/boxes/trusty64/versions/14.04/providers/virtualbox.box
$ vagrant up
$ vagrant ssh
$ cd /vagrant
```

Download backend dependencies

```bash
composer install
```

Download frontend dependencies

```bash
npm install
```

Build frontend application

```bash
grunt
```
