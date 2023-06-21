---
id: applications-protocol-x509
title: X509 Certificate
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **X509 Certificat** brings a host template:

* **App-Protocol-X509-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Protocol-X509-custom" label="App-Protocol-X509-custom">

| Service Alias    | Service Template                     | Service Description                           |
|:-----------------|:-------------------------------------|:----------------------------------------------|
| X509-Certificate | App-Protocol-X509-Certificate-custom | Check expiration date of a X509's certificate |

> The services listed above are created automatically when the **App-Protocol-X509** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="X509-Certificate" label="X509-Certificate">

| Metric name | Unit  |
|:------------|:------|
| status      | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

The remote server must have an X509's certificate.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-protocol-x509
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-x509
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-protocol-x509
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-x509
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **X509 Certificat** connector through
the **Configuration > Monitoring Connectors Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Protocol-X509
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Protocol-X509
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-protocol-x509
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-X509
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Protocol-X509-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="X509-Certificate" label="X509-Certificate">

| Macro          | Description                                                                                                                                                                                                                                                                                                                                                                | Default value      | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:------------|
| CUSTOMMODE     |                                                                                                                                                                                                                                                                                                                                                                            | tcp                |             |
| PORT           |                                                                                                                                                                                                                                                                                                                                                                            | 443                |             |
| WARNINGSTATUS  | Set warning threshold for status. (Default: '%{expiration} \< 60'). Can use special variables like: %{expiration}, %{subject}, %{issuer}, %{alt\_subjects}                                                                                                                                                                                                                 | %{expiration} < 60 |             |
| CRITICALSTATUS | Set critical threshold for status. (Default: '%{expiration} \< 30'). Can use special variables like: %{expiration}, %{subject}, %{issuer}, %{alt\_subjects}.  Examples :  Raise a critical alarm if certificate expires in less than 30 days or does not cover alternative name 'my.app.com' --critical-status='%{expiration} \< 30 \|\| %{alt\_subjects} !~ /my.app.com/' | %{expiration} < 30 |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                                                                                                                                        |                    |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_protocol_x509.pl \
	--plugin=apps::protocols::x509::plugin \
	--mode=certificate \
	--custommode='tcp' \
	--hostname='10.0.0.1' \
	--port=443 \
	--warning-status='%{expiration} < 60' \
	--critical-status='%{expiration} < 30' \
	
```

The expected command output is shown below:

```bash
OK:  | 
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_protocol_x509.pl \
	--plugin=apps::protocols::x509::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode        | Linked service template              |
|:------------|:-------------------------------------|
| certificate | App-Protocol-X509-Certificate-custom |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_protocol_x509.pl \
	--plugin=apps::protocols::x509::plugin \
    --list-custommode
```

The plugin brings the following custom modes:

* file
* https
* opensslcli
* tcp

### Available options

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="file" label="file">

| Option        | Description                      | Type |
|:--------------|:---------------------------------|:-----|
| --certificate | Certificate file (PEM or DER).   | File |

</TabItem>
<TabItem value="https" label="https">

| Option           | Description                                                                                                                        | Type         |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --hostname       | IP Addr/FQDN of the webserver host                                                                                                 | Https        |
| --port           | Port used by Webserver (Default: 443)                                                                                              | Https        |
| --method         | Specify http method used (Default: 'GET')                                                                                          | Https        |
| --urlpath        | Set path to get webpage (Default: '/')                                                                                             | Https        |
| --timeout        | Threshold for HTTP timeout (Default: 5)                                                                                            | Https        |
| --header         | Set HTTP headers (Multiple option)                                                                                                 | Https        |
| --no-follow      | Do not follow http redirect                                                                                                        | Https        |
| --http-peer-addr | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                | Http global  |
| --proxyurl       | Proxy URL. Eg: http://my.proxy:3128                                                                                                | Http global  |
| --proxypac       | Proxy pac file (can be a URL or a local file).                                                                                     | Http global  |
| --insecure       | Accept insecure SSL connections.                                                                                                   | Http global  |
| --http-backend   | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                            | Http global  |
| --ssl-opt        | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                          | Backend lwp  |
| --curl-opt       | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).   | Backend curl |

</TabItem>
<TabItem value="opensslcli" label="opensslcli">

| Option                  | Description                                                                                                                                                            | Type           |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------|
| --hostname              | IP Addr/FQDN of the host.                                                                                                                                              | Openssl cli    |
| --port                  | Port used by host.                                                                                                                                                     | Openssl cli    |
| --ssh-backend           | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                     | Ssh global     |
| --ssh-username          | Define the user name to log in to the host.                                                                                                                            | Ssh global     |
| --ssh-password          | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.   | Ssh global     |
| --ssh-port              | Define the TCP port on which SSH is listening.                                                                                                                         | Ssh global     |
| --ssh-priv-key          | Define the private key file to use for user authentication.                                                                                                            | Ssh global     |
| --sshcli-command        | ssh command (default: 'ssh').                                                                                                                                          | Backend sshcli |
| --sshcli-path           | ssh command path (default: none)                                                                                                                                       | Backend sshcli |
| --sshcli-option         | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                      | Backend sshcli |
| --plink-command         | plink command (default: 'plink').                                                                                                                                      | Backend plink  |
| --plink-path            | plink command path (default: none)                                                                                                                                     | Backend plink  |
| --plink-option          | Specify plink options (example: --plink-option='-T').                                                                                                                  | Backend plink  |
| --libssh-strict-connect | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                    | Backend libssh |

</TabItem>
<TabItem value="tcp" label="tcp">

| Option              | Description                                                                                                                                                                                                                 | Type |
|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --hostname          | IP Addr/FQDN of the host.                                                                                                                                                                                                   | Tcp  |
| --port              | Port used by host.                                                                                                                                                                                                          | Tcp  |
| --servername        | Servername of the host for SNI support (only with IO::Socket::SSL \>= 1.56) (eg: foo.bar.com).                                                                                                                              | Tcp  |
| --ssl-opt           | Set SSL options.  Examples:  Do not verify certificate: --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE"  Verify certificate: --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_PEER" --ssl-opt="SSL\_version =\> 'TLSv1'"   | Tcp  |
| --ssl-ignore-errors | Ignore SSL handshake errors. For example: 'SSL error: SSL wants a read first'.                                                                                                                                              | Tcp  |
| --timeout           | Set timeout in seconds for SSL connection (Default: '3') (only with IO::Socket::SSL \>= 1.984).                                                                                                                             | Tcp  |
| --starttls          | Init plaintext connection and start\_SSL after. Can be: 'smtp', 'ftp'.                                                                                                                                                      | Tcp  |

</TabItem>
</Tabs>

#### Modes options

All modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="X509-Certificate" label="X509-Certificate">

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get the an information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Global |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --warning-status                           | Set warning threshold for status. (Default: '%{expiration} \< 60'). Can use special variables like: %{expiration}, %{subject}, %{issuer}, %{alt\_subjects}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Mode   |
| --critical-status                          | Set critical threshold for status. (Default: '%{expiration} \< 30'). Can use special variables like: %{expiration}, %{subject}, %{issuer}, %{alt\_subjects}.  Examples :  Raise a critical alarm if certificate expires in less than 30 days or does not cover alternative name 'my.app.com' --critical-status='%{expiration} \< 30 \|\| %{alt\_subjects} !~ /my.app.com/'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Mode   |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_protocol_x509.pl \
	--plugin=apps::protocols::x509::plugin \
	--mode=certificate \
    --help
```
