---
id: applications-pacemaker-ssh
title: Pacemaker
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Pacemaker** brings a host template:

* **App-Pacemaker-SSH-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Pacemaker-SSH-custom" label="App-Pacemaker-SSH-custom">

| Service Alias | Service Template                     | Service Description                                             |
|:--------------|:-------------------------------------|:----------------------------------------------------------------|
| CRM           | App-Pacemaker-CRM-SSH-custom         | Check cluster state with crm_mon command                        |
| Clustat       | App-Pacemaker-Clustat-SSH-custom     | Check cluster state with clustat command                        |
| Constraints   | App-Pacemaker-Constraints-SSH-custom | Check if there is any constraints applied to a cluster resource |

> The services listed above are created automatically when the **App-Pacemaker-SSH** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="CRM" label="CRM">

| Metric name                                           | Unit  |
|:------------------------------------------------------|:------|
| cluster~connection-status                             | N/A   |
| cluster~quorum-status                                 | N/A   |
| cluster~cluster.nodes.online.count                    | count |
| cluster~cluster.nodes.offline.count                   | count |
| cluster~cluster.nodes.standby.count                   | count |
| cluster~cluster.actions.failed.count                  | count |
| resources#resource-status                             | N/A   |
| resources#resource.actions.failed.count               | count |
| resources#resource.migration.failed.count             | count |
| clone_resources#clone-resource-status                 | N/A   |
| clone_resources#clone_resource.actions.failed.count   | count |
| clone_resources#clone_resource.migration.failed.count | count |

</TabItem>
<TabItem value="Clustat" label="Clustat">

| Metric name  | Unit  |
|:-------------|:------|
| nodes#node   | N/A   |
| groups#group | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Constraints" label="Constraints">

Coming soon

</TabItem>
</Tabs>

## Prerequisites

### SSH configuration

A user is required to query the server by SSH. There is no need for root or sudo
privileges. There are two possible ways to log in through SSH, either by
exchanging the SSH key from **centreon-engine** user to the target server, or by
setting your unique user and password directly in the host macros.

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
dnf install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Pacemaker** connector through
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
dnf install centreon-plugin-Applications-Pacemaker-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Pacemaker-Ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Pacemaker-Ssh
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Pacemaker-SSH-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                                                         | Default value     | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli , plink and libssh                                                                                            | libssh            |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                               |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="CRM" label="CRM">

| Macro                                | Description                                                                                                                                                                                       | Default value                     | Mandatory   |
|:-------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:------------|
| FILTERRESOURCENAME                   | Filter resource (also clone resource) by name (can be a regexp)                                                                                                                                   |                                   |             |
| WARNINGCLONERESOURCEACTIONSFAILED    | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALCLONERESOURCEACTIONSFAILED   | Thresholds                                                                                                                                                                                        |                                   |             |
| WARNINGCLONERESOURCEMIGRATIONFAILED  | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALCLONERESOURCEMIGRATIONFAILED | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALCLONERESOURCESTATUS          | Set critical threshold for status (Default: '%{status} =~ /failed/i'). You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged} | %{status} =~ /failed/i            |             |
| WARNINGCLONERESOURCESTATUS           | Set warning threshold for status. You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged}                                      |                                   |             |
| CRITICALCLUSTERACTIONSFAILED         | Thresholds                                                                                                                                                                                        | 0                                 |             |
| WARNINGCLUSTERACTIONSFAILED          | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALCONNECTIONSTATUS             | Set critical threshold for status (Default: '%{connection\_status} =~ /failed/i'). You can use the following variables: %{connection\_status}, %{connection\_error}                               | %{connection_status} =~ /failed/i |             |
| WARNINGCONNECTIONSTATUS              | Set warning threshold for status. You can use the following variables: %{connection\_status}, %{connection\_error}                                                                                |                                   |             |
| CRITICALNODESOFFLINE                 | Thresholds                                                                                                                                                                                        | 0                                 |             |
| WARNINGNODESOFFLINE                  | Thresholds                                                                                                                                                                                        |                                   |             |
| WARNINGNODESONLINE                   | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALNODESONLINE                  | Thresholds                                                                                                                                                                                        |                                   |             |
| WARNINGNODESSTANDBY                  | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALNODESSTANDBY                 | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALQUORUMSTATUS                 | Set critical threshold for status (Default: '%{quorum\_status} =~ /noQuorum/i'). You can use the following variables: %{quorum\_status}                                                           | %{quorum_status} =~ /noQuorum/i   |             |
| WARNINGQUORUMSTATUS                  | Set warning threshold for status. You can use the following variables: %{quorum\_status}                                                                                                          |                                   |             |
| WARNINGRESOURCEACTIONSFAILED         | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALRESOURCEACTIONSFAILED        | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALRESOURCEMIGRATIONFAILED      | Thresholds                                                                                                                                                                                        | 0                                 |             |
| WARNINGRESOURCEMIGRATIONFAILED       | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALRESOURCESTATUS               | Set critical threshold for status (Default: '%{status} =~ /stopped\|failed/i'). You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                | %{status} =~ /stopped|failed/i    |             |
| WARNINGRESOURCESTATUS                | Set warning threshold for status. You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                                                              |                                   |             |
| EXTRAOPTIONS                         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                               | --verbose                         |             |

</TabItem>
<TabItem value="Clustat" label="Clustat">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Constraints" label="Constraints">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| RESOURCENAME | Set the resource name you want to check                                                             | RESOURCENAME      |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_pacemaker_ssh.pl \
	--plugin=apps::pacemaker::local::plugin \
	--mode=crm \
	--hostname='10.0.0.1' \
	--ssh-backend='libssh' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--filter-resource-name='' \
	--warning-nodes-online='' \
	--critical-nodes-online='' \
	--warning-nodes-offline='' \
	--critical-nodes-offline='0' \
	--warning-nodes-standby='' \
	--critical-nodes-standby='' \
	--warning-clone-resource-status='' \
	--critical-clone-resource-status='%{status} =~ /failed/i' \
	--warning-clone-resource-actions-failed='' \
	--critical-clone-resource-actions-failed='' \
	--warning-clone-resource-migration-failed='' \
	--critical-clone-resource-migration-failed='' \
	--warning-connection-status='' \
	--critical-connection-status='%{connection_status} =~ /failed/i' \
	--warning-cluster-actions-failed='' \
	--critical-cluster-actions-failed='0' \
	--warning-resource-status='' \
	--critical-resource-status='%{status} =~ /stopped|failed/i' \
	--warning-resource-actions-failed='' \
	--critical-resource-actions-failed='' \
	--warning-resource-migration-failed='' \
	--critical-resource-migration-failed='0' \
	--warning-quorum-status='' \
	--critical-quorum-status='%{quorum_status} =~ /noQuorum/i' \
	--verbose\
	
```

The expected command output is shown below:

```bash
OK:             | 'cluster.nodes.online.count'=25;;;0; 'cluster.nodes.offline.count'=44;;;0; 'cluster.nodes.standby.count'=38;;;0; 'cluster.actions.failed.count'=65;;;0; 'resource.actions.failed.count'=30;;;0; 'resource.migration.failed.count'=23;;;0; 'clone_resource.actions.failed.count'=60;;;0; 'clone_resource.migration.failed.count'=30;;;0; 
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_pacemaker_ssh.pl \
	--plugin=apps::pacemaker::local::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode        | Linked service template              |
|:------------|:-------------------------------------|
| clustat     | App-Pacemaker-Clustat-SSH-custom     |
| constraints | App-Pacemaker-Constraints-SSH-custom |
| crm         | App-Pacemaker-CRM-SSH-custom         |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type           |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global         |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global         |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global         |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global         |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global         |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get the an information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Global         |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global         |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global         |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output         |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output         |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output         |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output         |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output         |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output         |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output         |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output         |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output         |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output         |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output         |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output         |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output         |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output         |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output         |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output         |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output         |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output         |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output         |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output         |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output         |
| --hostname                                 | Hostname to query in ssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Cli            |
| --timeout                                  | Timeout in seconds for the command (Default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Cli            |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Cli            |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Cli            |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Cli            |
| --sudo  sudo command                       | .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Cli            |
| --ssh-backend                              | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Ssh global     |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Ssh global     |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Ssh global     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Ssh global     |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Ssh global     |
| --sshcli-command                           | ssh command (default: 'ssh').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Backend sshcli |
| --sshcli-path                              | ssh command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Backend sshcli |
| --sshcli-option                            | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Backend sshcli |
| --plink-command                            | plink command (default: 'plink').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Backend plink  |
| --plink-path                               | plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Backend plink  |
| --plink-option                             | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Backend plink  |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Backend libssh |

#### Modes options

All modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="CRM" label="CRM">

| Option                           | Description                                                                                                                                                                                                                    | Type |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-resource-name           | Filter resource (also clone resource) by name (can be a regexp).                                                                                                                                                               | Mode |
| --warning-connection-status      | Set warning threshold for status. You can use the following variables: %{connection\_status}, %{connection\_error}                                                                                                             | Mode |
| --critical-connection-status     | Set critical threshold for status (Default: '%{connection\_status} =~ /failed/i'). You can use the following variables: %{connection\_status}, %{connection\_error}                                                            | Mode |
| --warning-quorum-status          | Set warning threshold for status. You can use the following variables: %{quorum\_status}                                                                                                                                       | Mode |
| --critical-quorum-status         | Set critical threshold for status (Default: '%{quorum\_status} =~ /noQuorum/i'). You can use the following variables: %{quorum\_status}                                                                                        | Mode |
| --warning-resource-status        | Set warning threshold for status. You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                                                                                           | Mode |
| --critical-resource-status       | Set critical threshold for status (Default: '%{status} =~ /stopped\|failed/i'). You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                                             | Mode |
| --warning-clone-resource-status  | Set warning threshold for status. You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged}                                                                   | Mode |
| --critical-clone-resource-status | Set critical threshold for status (Default: '%{status} =~ /failed/i'). You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged}                              | Mode |
| --ignore-failed-actions          | Failed actions errors (that match) are skipped.                                                                                                                                                                                | Mode |
| --resources                      | If resources not started on the node specified, send a warning message: (format: \<rsc\_name\>:\<node\>,\<rsc\_name\>:\<node\>,...)                                                                                            | Mode |
| --warning-* --critical-*         | Thresholds. Can be: 'cluster-actions-failed', 'clone-resource-actions-failed', 'clone-resource-migration-failed', 'nodes-online', 'nodes-offline', 'nodes-standby', 'resource-actions-failed', 'resource-migration-failed'.    | Mode |

</TabItem>
<TabItem value="Clustat" label="Clustat">

| Option       | Description                                                                                                                                                       | Type |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-*  | Can be ('group','node') Warning threshold for status.                                                                                                             | Mode |
| --critical-* | Can be ('group','node') Critical threshold for status. (Default: --critical-node '%{state} !~ /up\|clean/' --critical-group '%{state} !~ /started\|starting/')    | Mode |

</TabItem>
<TabItem value="Constraints" label="Constraints">

| Option     | Description                               | Type |
|:-----------|:------------------------------------------|:-----|
| --resource | Set the resource name you want to check   | Mode |
| --warning  | Return a warning instead of a critical    | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_pacemaker_ssh.pl \
	--plugin=apps::pacemaker::local::plugin \
	--mode=crm \
    --help
```
