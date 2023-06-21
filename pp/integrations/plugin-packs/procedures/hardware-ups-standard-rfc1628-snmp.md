---
id: hardware-ups-standard-rfc1628-snmp
title: UPS Standard SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **UPS Standard** brings a host template:

* **HW-UPS-Standard-Rfc1628-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-UPS-Standard-Rfc1628-SNMP-custom" label="HW-UPS-Standard-Rfc1628-SNMP-custom">

| Service Alias  | Service Template                                   | Service Description                               |
|:---------------|:---------------------------------------------------|:--------------------------------------------------|
| Alarms         | HW-UPS-Standard-Rfc1628-Alarms-SNMP-custom         | Check if alarms present                           |
| Battery-Status | HW-UPS-Standard-Rfc1628-Battery-Status-SNMP-custom | Check battery status and battery charge remaining |
| Input-Lines    | HW-UPS-Standard-Rfc1628-Input-Lines-SNMP-custom    | Check input lines metrics                         |
| Output-Lines   | HW-UPS-Standard-Rfc1628-Output-Lines-SNMP-custom   | Check output lines metrics                        |
| Output-Source  | HW-UPS-Standard-Rfc1628-Output-Source-SNMP-custom  | Check output source status                        |

> The services listed above are created automatically when the **HW-UPS-Standard-Rfc1628-SNMP** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Metric name          | Unit  |
|:---------------------|:------|
| alarms.current.count | count |

</TabItem>
<TabItem value="Battery-Status" label="Battery-Status">

| Metric name                      | Unit    |
|:---------------------------------|:--------|
| status                           | N/A     |
| battery.charge.remaining.percent | %       |
| battery.charge.remaining.minutes | minutes |
| battery.current.ampere           | A       |
| battery.voltage.volt             | V       |
| battery.temperature.celsius      | C       |

</TabItem>
<TabItem value="Input-Lines" label="Input-Lines">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| line#line.input.frequence.hertz | Hz    |
| line#line.input.voltage.volt    | V     |
| line#line.input.current.ampere  | A     |
| line#line.input.power.watt      | W     |

</TabItem>
<TabItem value="Output-Lines" label="Output-Lines">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| output.3phases.stdev.gauge        |       |
| oline#line.output.load.percentage | %     |
| oline#line.output.current.ampere  | A     |
| oline#line.output.voltage.volt    | V     |
| oline#line.output.power.watt      | W     |

</TabItem>
<TabItem value="Output-Source" label="Output-Source">

| Metric name   | Unit  |
|:--------------|:------|
| source-status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **UPS Standard** equipment.

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

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
dnf install centreon-pack-hardware-ups-standard-rfc1628-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-ups-standard-rfc1628-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-ups-standard-rfc1628-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-ups-standard-rfc1628-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **UPS Standard** connector through
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
dnf install centreon-plugin-Hardware-Ups-Standard-Rfc1628-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Ups-Standard-Rfc1628-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-ups-standard-rfc1628-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Ups-Standard-Rfc1628-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **HW-UPS-Standard-Rfc1628-SNMP-custom** template to the host. 

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
<TabItem value="Alarms" label="Alarms">

| Macro                 | Description                                                                                         | Default value     | Mandatory   |
|:----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGALARMSCURRENT  | Thresholds                                                                                          |                   |             |
| CRITICALALARMSCURRENT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Battery-Status" label="Battery-Status">

| Macro               | Description                                                                                                             | Default value            | Mandatory   |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------|:-------------------------|:------------|
| UNKNOWNSTATUS       | Set unknown threshold for status (Default: '%{status} =~ /unknown/i'). You can use the following variables: %{status}   | %{status} =~ /unknown/i  |             |
| WARNING             | Thresholds                                                                                                              |                          |             |
| CRITICAL            | Thresholds                                                                                                              |                          |             |
| WARNINGCURRENT      | Thresholds                                                                                                              |                          |             |
| CRITICALCURRENT     | Thresholds                                                                                                              |                          |             |
| WARNINGSTATUS       | Set warning threshold for status (Default: '%{status} =~ /low/i'). You can use the following variables: %{status}       | %{status} =~ /low/i      |             |
| CRITICALSTATUS      | Set critical threshold for status (Default: '%{status} =~ /depleted/i'). You can use the following variables: %{status} | %{status} =~ /depleted/i |             |
| WARNINGTEMPERATURE  | Thresholds                                                                                                              |                          |             |
| CRITICALTEMPERATURE | Thresholds                                                                                                              |                          |             |
| WARNINGVOLTAGE      | Thresholds                                                                                                              |                          |             |
| CRITICALVOLTAGE     | Thresholds                                                                                                              |                          |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                     |                          |             |

</TabItem>
<TabItem value="Input-Lines" label="Input-Lines">

| Macro             | Description                                                                                         | Default value     | Mandatory   |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGCURRENT    | Thresholds                                                                                          |                   |             |
| CRITICALCURRENT   | Thresholds                                                                                          |                   |             |
| WARNINGFREQUENCE  | Thresholds                                                                                          |                   |             |
| CRITICALFREQUENCE | Thresholds                                                                                          |                   |             |
| WARNINGPOWER      | Thresholds                                                                                          |                   |             |
| CRITICALPOWER     | Thresholds                                                                                          |                   |             |
| WARNINGVOLTAGE    | Thresholds                                                                                          |                   |             |
| CRITICALVOLTAGE   | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Output-Lines" label="Output-Lines">

| Macro           | Description                                                                                         | Default value     | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGCURRENT  | Threshold warning                                                                                   |                   |             |
| CRITICALCURRENT | Threshold critical                                                                                  |                   |             |
| WARNINGLOAD     | Threshold warning                                                                                   |                   |             |
| CRITICALLOAD    | Threshold critical                                                                                  |                   |             |
| WARNINGPOWER    | Threshold warning                                                                                   |                   |             |
| CRITICALPOWER   | Threshold critical                                                                                  |                   |             |
| WARNINGVOLTAGE  | Threshold warning                                                                                   |                   |             |
| CRITICALVOLTAGE | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Output-Source" label="Output-Source">

| Macro                | Description                                                                                                                                   | Default value                                 | Mandatory   |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|:------------|
| UNKNOWNSOURCESTATUS  | Set unknown threshold for status (Default: '%{status} =~ /other/') You can use the following variables: %{status}                             | %{status} =~ /other/                          |             |
| WARNINGSOURCESTATUS  | Set warning threshold for status (Default: '%{status} =~ /bypass\|battery\|booster\|reducer/') You can use the following variables: %{status} | %{status} =~ /bypass|battery|booster|reducer/ |             |
| CRITICALSOURCESTATUS | Set critical threshold for status (Default: '%{status} =~ /none/') You can use the following variables: %{status}                             | %{status} =~ /none/                           |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                           |                                               |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_ups_standard_rfc1628_snmp.pl \
	--plugin=hardware::ups::standard::rfc1628::snmp::plugin \
	--mode=alarms \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'   \
	--warning-alarms-current='' \
	--critical-alarms-current='' \
	
```

The expected command output is shown below:

```bash
OK:  | 'alarms.current.count'=94;;;0; 
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_ups_standard_rfc1628_snmp.pl \
	--plugin=hardware::ups::standard::rfc1628::snmp::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode           | Linked service template                            |
|:---------------|:---------------------------------------------------|
| alarms         | HW-UPS-Standard-Rfc1628-Alarms-SNMP-custom         |
| battery-status | HW-UPS-Standard-Rfc1628-Battery-Status-SNMP-custom |
| input-lines    | HW-UPS-Standard-Rfc1628-Input-Lines-SNMP-custom    |
| output-lines   | HW-UPS-Standard-Rfc1628-Output-Lines-SNMP-custom   |
| output-source  | HW-UPS-Standard-Rfc1628-Output-Source-SNMP-custom  |

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
<TabItem value="Alarms" label="Alarms">

| Option                   | Description                              | Type |
|:-------------------------|:-----------------------------------------|:-----|
| --warning-* --critical-* | Thresholds. Can be: 'alarms-current'.    | Mode |

</TabItem>
<TabItem value="Battery-Status" label="Battery-Status">

| Option                   | Description                                                                                                                 | Type |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-status         | Set unknown threshold for status (Default: '%{status} =~ /unknown/i'). You can use the following variables: %{status}       | Mode |
| --warning-status         | Set warning threshold for status (Default: '%{status} =~ /low/i'). You can use the following variables: %{status}           | Mode |
| --critical-status        | Set critical threshold for status (Default: '%{status} =~ /depleted/i'). You can use the following variables: %{status}     | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'charge-remaining' (%), 'charge-remaining-minutes', 'current' (A), 'voltage' (V), 'temperature' (C).    | Mode |

</TabItem>
<TabItem value="Input-Lines" label="Input-Lines">

| Option                   | Description                                                                             | Type |
|:-------------------------|:----------------------------------------------------------------------------------------|:-----|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^power$'   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'frequence', 'voltage', 'current', 'power'.                         | Mode |

</TabItem>
<TabItem value="Output-Lines" label="Output-Lines">

| Option                   | Description                                                          | Type |
|:-------------------------|:---------------------------------------------------------------------|:-----|
| --ignore-zero-counters   | Ignore counters equals to 0.                                         | Mode |
| --warning-*              | Threshold warning. Can be: 'load', 'voltage', 'current', 'power'.    | Mode |
| --critical-*             | Threshold critical. Can be: 'load', 'voltage', 'current', 'power'.   | Mode |
| --warning-stdev-3phases  | Threshold warning for standard deviation of 3 phases.                | Mode |
| --critical-stdev-3phases | Threshold critical for standard deviation of 3 phases.               | Mode |

</TabItem>
<TabItem value="Output-Source" label="Output-Source">

| Option                   | Description                                                                                                                                     | Type |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-source-status  | Set unknown threshold for status (Default: '%{status} =~ /other/') You can use the following variables: %{status}                               | Mode |
| --warning-source-status  | Set warning threshold for status (Default: '%{status} =~ /bypass\|battery\|booster\|reducer/') You can use the following variables: %{status}   | Mode |
| --critical-source-status | Set critical threshold for status (Default: '%{status} =~ /none/') You can use the following variables: %{status}                               | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_ups_standard_rfc1628_snmp.pl \
	--plugin=hardware::ups::standard::rfc1628::snmp::plugin \
	--mode=alarms \
    --help
```
