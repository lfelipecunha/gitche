#!/usr/bin/env bash

# echo "export PS1='$ '" >> .bashrc

cat << EOF | tee -a /etc/motd.tail
***************************************

Welcome to Vagrant Box

For GiTchê development

***************************************
EOF

apt-get update
apt-get install -y curl php5-cli

### Installing Composer
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer

### Installing MySQL
# debconf-set-selections <<< 'mysql-server \
#  mysql-server/root_password password root'
# debconf-set-selections <<< 'mysql-server \
#  mysql-server/root_password_again password root'
# apt-get install -y php5-mysql mysql-server

# cat << EOF | tee -a /etc/mysql/conf.d/default_engine.cnf
# [mysqld]
# default-storage-engine = MyISAM
# EOF

# sudo service mysql restart

### Installing Apache
sudo apt-get install -y apache2 libapache2-mod-php5
sudo a2enmod rewrite
sudo service apache2 restart

echo "You've been provisioned"
date > /etc/vagrant_provisioned_at