---
id: using-packages
title: Using packages
---

Centreon provides RPM packages for its products through the Centreon Open
Source version available free of charge in our repository.

These packages have been successfully tested in CentOS 7 and 8 environments.

> Due to Red Hat's stance on CentOS 8, we suggest not to use said version for
> your production environment. Nevertheless, these packages for CentOS 8 are
> compatible with RHEL 8 and Oracle Linux 8 versions.

You must run the installation procedure as a privileged user.

## Prerequisites

After installing your server, update your operating system using the following
command:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf update
```
<!--CentOS 7-->
```shell
yum update
```
<!--END_DOCUSAURUS_CODE_TABS-->

> Accept all GPG keys and reboot your server if a kernel update is
> proposed.

## Step 1: Pre-installation

### Disable SELinux

During installation, SELinux should be disabled. To do this, edit the file
**/etc/selinux/config** and replace **enforcing** by **disabled**. You can also run the following command:

```shell
sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config
```

Reboot your operating system to apply the change.

```shell
reboot
```

After system startup, perform a quick check of the SELinux status:

```shell
getenforce
```

You should have this result:
```shell
Disabled
```

### Configure or disable the firewall

If your firewall is active, add [firewall rules](../../administration/secure-platform.html#enable-firewalld). You can also disable the firewall during installation by running the following commands:

```shell
systemctl stop firewalld
systemctl disable firewalld
```

### Install the repositories

<!--DOCUSAURUS_CODE_TABS-->

<!--RHEL 8-->
#### Remi and CodeReady Builder repository

To install Centreon you will need to install the **remi** and **CodeReady Builder** repositories.

Run the following commands:

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

Enable PHP 8.0 using the following commands:
```shell
dnf module reset php
dnf module install php:remi-8.0
```

<!--CentOS 8-->

#### Remi repository

To install Centreon you will need to install the **remi** repository.

Run the following commands:

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
dnf config-manager --set-enabled 'powertools'
```

Enable PHP 8.0 using the following commands:
```shell
dnf module reset php
dnf module install php:remi-8.0
```

<!--Oracle Linux 8-->

#### Remi and CodeReady Builder repositories

To install Centreon you will need to install the **remi** and **CodeReady Builder** repositories.

Run the following commands:

```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
dnf config-manager --set-enabled ol8_codeready_builder
```

Enable PHP 8.0 using the following commands:
```shell
dnf module reset php
dnf module install php:remi-8.0
```

<!--CentOS 7-->
#### Redhat Software Collections repository

To install Centreon you will need to set up the official Software Collections
repository supported by Redhat. It is required for installing apache 2.4.

Install the Software Collections repository using this command:

```shell
yum install -y centos-release-scl
```

#### Remi repository

To install Centreon you will need to install the **remi** repository.

Run the following commands:

```shell
yum install -y yum-utils
yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum-config-manager --enable remi-php80
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Centreon repository

To install Centreon software from the repository, you should first install the
centreon-release package, which will provide the repository file.

Install the Centreon repository using this command:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y https://yum.centreon.com/standard/21.10/el8/stable/noarch/RPMS/centreon-release-21.10-2.el8.noarch.rpm
```
<!--CentOS 7-->
```shell
yum install -y https://yum.centreon.com/standard/21.10/el7/stable/noarch/RPMS/centreon-release-21.10-2.el7.centos.noarch.rpm
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Step 2: Installation

This section describes how to install a Centreon central server.

You can install this server with a local database on the server, or
a remote database on a dedicated server.

### With a local database

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y centreon centreon-database
systemctl daemon-reload
systemctl restart mariadb
```
<!--CentOS 7-->
```shell
yum install -y centreon centreon-database
systemctl daemon-reload
systemctl restart mariadb
```
<!--END_DOCUSAURUS_CODE_TABS-->

You can now move to [Step 3](#step-3-configuration).

### With a remote database

> If installing database on a dedicated server, this server should also have
> the prerequired repositories.

Run the following command on the Central server:
<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y centreon-base-config-centreon-engine centreon-widget\*
```
<!--CentOS 7-->
```shell
yum install -y centreon-base-config-centreon-engine centreon-widget\*
```
<!--END_DOCUSAURUS_CODE_TABS-->

Then run the following commands on the dedicated server:
<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```
<!--CentOS 7-->
```shell
yum install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```
<!--END_DOCUSAURUS_CODE_TABS-->

Secure your MariaDB installation by executing the following command:
```shell
mysql_secure_installation
```

> It is mandatory to set a password for the root user of the database.

Then create a distant user with **root** privileges needed for Centreon
installation:

```SQL
CREATE USER '<USER>'@'<IP>' IDENTIFIED BY '<PASSWORD>';
GRANT ALL PRIVILEGES ON *.* TO '<USER>'@'<IP>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Replace **\<IP\>** with the Centreon Central IP address that will connect to
> the database server.
>
> Replace **\<USER\>** and **\<PASSWORD\>** by user's credentials.

Once the installation is complete you can delete this user using:

```SQL
DROP USER '<USER>'@'<IP>';
```

> The package **centreon-database** installs an optimized MariaDB configuration
> to be used with Centreon.
>
> If this package is not installed, system limitation **LimitNOFILE** should be
> at least set to **32000** using a dedicated configuration file, example:
>
> ```shell
> $ cat /etc/systemd/system/mariadb.service.d/centreon.conf
> [Service]
> LimitNOFILE=32000
> ```
>
> Same for the MariaDB **open_files_limit** directive, example:
>
> ```shell
> $ cat /etc/my.cnf.d/centreon.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```

> In addition to the directives above, it's strongly recommended to tune the
> database configuration with the following parameters:
>
> ```shell
> [server]
> key_buffer_size = 256M
> sort_buffer_size = 32M
> join_buffer_size = 4M
> thread_cache_size = 64
> read_buffer_size = 512K
> read_rnd_buffer_size = 256K
> max_allowed_packet = 128M
> ```
>
> Optionally, tune the memory and buffer utilization of the InnoDB engine powered
> tables. The example below applies to a database server with 8Gb RAM
>
> ```shell
> innodb_buffer_pool_size=1G
> ```
>
> Remember to restart MariaDB after a change to configuration.

## Step 3: Configuration

### Server name

If you want, you can change the server's hostname using the following command:
```shell
hostnamectl set-hostname new-server-name
```

Replace **new-server-name** by the name you want. Example:

```shell
hostnamectl set-hostname central
```

### Set the PHP time zone

You are required to set the PHP time zone. Run the following command as `root`:

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

> Replace **Europe/Paris** by your time zone. You can find the list of
> supported time zones [here](http://php.net/manual/en/timezones.php).

After saving the file, restart the PHP-FPM service:

```shell
systemctl restart php-fpm
```

### Services startup during system bootup

To make services start automatically during system bootup, run these commands
on the central server:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
systemctl enable php-fpm httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```
<!--CentOS 7-->
```shell
systemctl enable php-fpm httpd24-httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```
<!--END_DOCUSAURUS_CODE_TABS-->

> If the database is on a dedicated server, remember to enable **mariadb**
> service on it.

### Secure the database

Since MariaDB 10.5, it is necessary to secure its installation
before installing Centreon.

> Answer yes to all questions except to "Disallow root login remotely?". It is mandatory
> to set a password for the **root** user of the database.

```shell
mysql_secure_installation
```

> For more information, refer to the [official MariaDB documentation](https://mariadb.com/kb/en/mysql_secure_installation/).

## Step 4: Web installation

1. Start the Apache server with the
following command:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
systemctl start httpd
```
<!--CentOS 7-->
```shell
systemctl start httpd24-httpd
```
<!--END_DOCUSAURUS_CODE_TABS-->

2. To complete the installation, follow the
[web installation steps](../web-and-post-installation.html#web-installation) procedure.