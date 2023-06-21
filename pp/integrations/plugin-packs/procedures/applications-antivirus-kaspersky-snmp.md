---
id: applications-antivirus-kaspersky-snmp
title: Kaspersky
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Kaspersky** brings a host template:

* **App-Antivirus-Kaspersky-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Antivirus-Kaspersky-SNMP-custom" label="App-Antivirus-Kaspersky-SNMP-custom">

| Service Alias   | Service Template                                    | Service Description                                                     |
|:----------------|:----------------------------------------------------|:------------------------------------------------------------------------|
| Deployment      | App-Antivirus-Kaspersky-Deployment-SNMP-custom      | Check deployment status                                                 |
| Events          | App-Antivirus-Kaspersky-Events-SNMP-custom          | Check events status                                                     |
| Full-Scan       | App-Antivirus-Kaspersky-Full-Scan-SNMP-custom       | Check full scan status                                                  |
| Logical-Network | App-Antivirus-Kaspersky-Logical-Network-SNMP-custom | Check logical network status                                            |
| Protection      | App-Antivirus-Kaspersky-Protection-SNMP-custom      | Check protection status                                                 |
| Updates         | App-Antivirus-Kaspersky-Updates-SNMP-custom         | Check delay since last server update and number of not up to date hosts |

> The services listed above are created automatically when the **App-Antivirus-Kaspersky-SNMP** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Deployment" label="Deployment">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| status                               | N/A   |
| hosts.antivirus.installed.count      | count |
| hosts.antivirus.install.failed.count | count |
| hosts.expiring.licence.count         | count |
| hosts.expired.licence.count          | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Events" label="Events">

| Metric name           | Unit  |
|:----------------------|:------|
| status                | N/A   |
| events.critical.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Full-Scan" label="Full-Scan">

| Metric name           | Unit  |
|:----------------------|:------|
| status                | N/A   |
| hosts.unscanned.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Logical-Network" label="Logical-Network">

| Metric name              | Unit  |
|:-------------------------|:------|
| status                   | N/A   |
| hosts.new.count          | count |
| groups.total.count       | count |
| hosts.notconnected.count | count |
| hosts.uncontrolled.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Protection" label="Protection">

| Metric name                                        | Unit  |
|:---------------------------------------------------|:------|
| status                                             | N/A   |
| protection.hosts.antivirus.notrunning.count        | count |
| protection.hosts.realtime.notrunning.count         | count |
| protection.hosts.realtime.unacceptable.level.count | count |
| protection.hosts.uncured.objects.count             | count |
| protection.hosts.toomanythreats.count              | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Updates" label="Updates">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| status                          | N/A   |
| update.server.freshness.seconds | s     |
| update.hosts.outdated.count     | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

### Kasperky Security Center configuration

To use this pack, the SNMP service must be properly configured on your 
Kaspersky Security Center. Kaspersky provides an official documentation
to achieve this: https://support.kaspersky.com/12603#block3

### Network flow

The Kaspersky Security Center must be reachable from the Centreon Poller on the 
UDP/161 SNMP port.

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
dnf install centreon-pack-applications-antivirus-kaspersky-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-antivirus-kaspersky-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-antivirus-kaspersky-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-antivirus-kaspersky-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Kaspersky** connector through
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
dnf install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-antivirus-kaspersky-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Antivirus-Kaspersky-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                           | Default value     | Mandatory   |
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Deployment" label="Deployment">

| Macro            | Description                                                                                                         | Default value            | Mandatory   |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------|:-------------------------|:------------|
| CRITICEXPIRING   | Threshold critical                                                                                                  |                          |             |
| WARNINGEXPIRED   | Threshold warning                                                                                                   | 0                        |             |
| CRITICALEXPIRED  | Threshold critical                                                                                                  |                          |             |
| WARNINGEXPIRING  | Threshold warning                                                                                                   | 0                        |             |
| WARNINGFAILED    | Threshold warning                                                                                                   | 0                        |             |
| CRITICALFAILED   | Threshold critical                                                                                                  |                          |             |
| WARNINGPROGRESS  | Threshold warning                                                                                                   | 100:                     |             |
| CRITICALPROGRESS | Threshold critical                                                                                                  | 95:                      |             |
| WARNINGSTATUS    | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}   | %{status} =~ /Warning/i  |             |
| CRITICALSTATUS   | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status} | %{status} =~ /Critical/i |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                 |                          |             |

</TabItem>
<TabItem value="Events" label="Events">

| Macro          | Description                                                                                                         | Default value            | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------|:-------------------------|:------------|
| WARNINGEVENTS  | Threshold warning                                                                                                   | 0                        |             |
| CRITICALEVENTS | Threshold critical                                                                                                  |                          |             |
| WARNINGSTATUS  | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}   | %{status} =~ /Warning/i  |             |
| CRITICALSTATUS | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status} | %{status} =~ /Critical/i |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                 |                          |             |

</TabItem>
<TabItem value="Full-Scan" label="Full-Scan">

| Macro              | Description                                                                                                         | Default value            | Mandatory   |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------|:-------------------------|:------------|
| WARNINGNOTSCANNED  | Threshold warning                                                                                                   | 0                        |             |
| CRITICALNOTSCANNED | Threshold critical                                                                                                  |                          |             |
| WARNINGSTATUS      | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}   | %{status} =~ /Warning/i  |             |
| CRITICALSTATUS     | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status} | %{status} =~ /Critical/i |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                 |                          |             |

</TabItem>
<TabItem value="Logical-Network" label="Logical-Network">

| Macro                        | Description                                                                                                         | Default value            | Mandatory   |
|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------|:-------------------------|:------------|
| WARNINGGROUPS                | Threshold warning                                                                                                   |                          |             |
| CRITICALGROUPS               | Threshold critical                                                                                                  |                          |             |
| WARNINGNEWHOSTS              | Threshold warning                                                                                                   |                          |             |
| CRITICALNEWHOSTS             | Threshold critical                                                                                                  |                          |             |
| WARNINGNOTCONNECTEDLONGTIME  | Threshold warning                                                                                                   | 0                        |             |
| CRITICALNOTCONNECTEDLONGTIME | Threshold critical                                                                                                  |                          |             |
| WARNINGNOTCONTROLLED         | Threshold warning                                                                                                   | 0                        |             |
| CRITICALNOTCONTROLLED        | Threshold critical                                                                                                  |                          |             |
| WARNINGSTATUS                | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}   | %{status} =~ /Warning/i  |             |
| CRITICALSTATUS               | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status} | %{status} =~ /Critical/i |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                 |                          |             |

</TabItem>
<TabItem value="Protection" label="Protection">

| Macro                      | Description                                                                                                         | Default value            | Mandatory   |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------|:-------------------------|:------------|
| WARNINGNOANTIVIRUS         | Threshold warning                                                                                                   | 0                        |             |
| CRITICALNOANTIVIRUS        | Threshold critical                                                                                                  |                          |             |
| WARNINGNOREALTIME          | Threshold warning                                                                                                   | 0                        |             |
| CRITICALNOREALTIME         | Threshold critical                                                                                                  |                          |             |
| WARNINGNOTACCEPTABLELEVEL  | Threshold warning                                                                                                   | 0                        |             |
| CRITICALNOTACCEPTABLELEVEL | Threshold critical                                                                                                  |                          |             |
| WARNINGNOTCUREDOBJECTS     | Threshold warning                                                                                                   | 0                        |             |
| CRITICALNOTCUREDOBJECTS    | Threshold critical                                                                                                  |                          |             |
| WARNINGSTATUS              | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}   | %{status} =~ /Warning/i  |             |
| CRITICALSTATUS             | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status} | %{status} =~ /Critical/i |             |
| WARNINGTOOMANYTHREATS      | Threshold warning                                                                                                   | 0                        |             |
| CRITICALTOOMANYTHREATS     | Threshold critical                                                                                                  |                          |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                 |                          |             |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                    | Description                                                                                                         | Default value            | Mandatory   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------|:-------------------------|:------------|
| WARNINGLASTSERVERUPDATE  | Threshold warning                                                                                                   | 120                      |             |
| CRITICALLASTSERVERUPDATE | Threshold critical                                                                                                  | 240                      |             |
| WARNINGNOTUPDATED        | Threshold warning                                                                                                   | 0                        |             |
| CRITICALNOTUPDATED       | Threshold critical                                                                                                  |                          |             |
| WARNINGSTATUS            | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}   | %{status} =~ /Warning/i  |             |
| CRITICALSTATUS           | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status} | %{status} =~ /Critical/i |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                 |                          |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
	--plugin=apps::antivirus::kaspersky::snmp::plugin \
	--mode=deployment \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--warning-status='%{status} =~ /Warning/i' \
	--critical-status='%{status} =~ /Critical/i' \
	--warning-progress='100:' \
	--critical-progress='95:' \
	--warning-failed='0' \
	--critical-failed='' \
	--warning-expiring='0' \
	--critical-expiring='' \
	--warning-expired='0' \
	--critical-expired='' \
	
```

The expected command output is shown below:

```bash
OK:      | 'hosts.antivirus.installed.count'=92;;;0; 'hosts.antivirus.install.failed.count'=92;;;0; 'hosts.expiring.licence.count'=20;;;0; 'hosts.expired.licence.count'=79;;;0; 
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
	--plugin=apps::antivirus::kaspersky::snmp::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode            | Linked service template                             |
|:----------------|:----------------------------------------------------|
| deployment      | App-Antivirus-Kaspersky-Deployment-SNMP-custom      |
| events          | App-Antivirus-Kaspersky-Events-SNMP-custom          |
| full-scan       | App-Antivirus-Kaspersky-Full-Scan-SNMP-custom       |
| logical-network | App-Antivirus-Kaspersky-Logical-Network-SNMP-custom |
| protection      | App-Antivirus-Kaspersky-Protection-SNMP-custom      |
| updates         | App-Antivirus-Kaspersky-Updates-SNMP-custom         |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
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
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | SNMP   |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --subsetleef                               | How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --snmp-autoreduce                          | Progressively reduce the number requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-force-getnext                       | Use snmp getnext function in snmp v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | SNMP   |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | SNMP   |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | SNMP   |

#### Modes options

All modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Deployment" label="Deployment">

| Option            | Description                                                                                                           | Type |
|:------------------|:----------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-status  | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}     | Mode |
| --critical-status | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status}   | Mode |
| --warning-*       | Threshold warning. Can be: 'progress' (counter or %), 'failed', 'expiring', 'expired'.                                | Mode |
| --critical-*      | Threshold critical. Can be: 'progress' (counter or %), 'failed', 'expiring', 'expired'.                               | Mode |
| --percent         | Set this option if you want to use percent on progress thresholds.                                                    | Mode |

</TabItem>
<TabItem value="Events" label="Events">

| Option            | Description                                                                                                           | Type |
|:------------------|:----------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-status  | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}     | Mode |
| --critical-status | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status}   | Mode |
| --warning-*       | Threshold warning. Can be: 'events'.                                                                                  | Mode |
| --critical-*      | Threshold critical. Can be: 'events'.                                                                                 | Mode |

</TabItem>
<TabItem value="Full-Scan" label="Full-Scan">

| Option            | Description                                                                                                           | Type |
|:------------------|:----------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-status  | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}     | Mode |
| --critical-status | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status}   | Mode |
| --warning-*       | Threshold warning. Can be: 'not-scanned'.                                                                             | Mode |
| --critical-*      | Threshold critical. Can be: 'not-scanned'.                                                                            | Mode |

</TabItem>
<TabItem value="Logical-Network" label="Logical-Network">

| Option            | Description                                                                                                           | Type |
|:------------------|:----------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-status  | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}     | Mode |
| --critical-status | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status}   | Mode |
| --warning-*       | Threshold warning. Can be: 'new-hosts', 'groups', 'not-connected-long-time', 'not-controlled'.                        | Mode |
| --critical-*      | Threshold critical. Can be: 'new-hosts', 'groups', 'not-connected-long-time', 'not-controlled'.                       | Mode |

</TabItem>
<TabItem value="Protection" label="Protection">

| Option            | Description                                                                                                                     | Type |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-status  | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}               | Mode |
| --critical-status | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status}             | Mode |
| --warning-*       | Threshold warning. Can be: 'no-antivirus', 'no-real-time', 'not-acceptable-level', 'not-cured-objects', 'too-many-threats'.     | Mode |
| --critical-*      | Threshold critical. Can be: 'no-antivirus', 'no-real-time', 'not-acceptable-level', 'not-cured-objects', 'too-many-threats'.    | Mode |

</TabItem>
<TabItem value="Updates" label="Updates">

| Option            | Description                                                                                                           | Type |
|:------------------|:----------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-status  | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}     | Mode |
| --critical-status | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status}   | Mode |
| --warning-*       | Threshold warning. Can be: 'last-server-update', 'not-updated'.                                                       | Mode |
| --critical-*      | Threshold critical. Can be: 'last-server-update', 'not-updated'.                                                      | Mode |
| --timezone        | Timezone options. Default is 'GMT'.                                                                                   | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
	--plugin=apps::antivirus::kaspersky::snmp::plugin \
	--mode=deployment \
    --help
```
