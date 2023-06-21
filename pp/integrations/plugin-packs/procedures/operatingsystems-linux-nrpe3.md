---
id: operatingsystems-linux-nrpe3
title: Linux NRPE3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Linux NRPE3** brings a host template:

* **OS-Linux-NRPE3-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="OS-Linux-NRPE3-custom" label="OS-Linux-NRPE3-custom">

| Service Alias | Service Template             | Service Description                                                                                                                                |
|:--------------|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu           | OS-Linux-Cpu-NRPE3-custom    | Check the rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU |
| Load          | OS-Linux-Load-NRPE3-custom   | Check the server load average                                                                                                                      |
| Memory        | OS-Linux-Memory-NRPE3-custom | Check the rate of the utilization of memory                                                                                                        |
| Swap          | OS-Linux-Swap-NRPE3-custom   | Check virtual memory usage                                                                                                                         |
| Uptime        | OS-Linux-Uptime-NRPE3-custom | Time since the server has been working and available                                                                                               |

> The services listed above are created automatically when the **OS-Linux-NRPE3** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias       | Service Template                          | Service Description                                                                                                                                         | Discovery  |
|:--------------------|:------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
| Cmd-Generic         | OS-Linux-Cmd-Generic-NRPE3-custom         | Check exit code of linux commands                                                                                                                           |            |
| Connections-Generic | OS-Linux-Connections-Generic-NRPE3-custom | Check tcp                                                                                                                                                   |            |
| Cpu-Detailed        | OS-Linux-Cpu-Detailed-NRPE3-custom        | Check the detailed rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPU |            |
| Disk-IO             | OS-Linux-Disk-IO-NRPE3-custom             | Check I                                                                                                                                                     |            |
| Disks               | OS-Linux-Disks-NRPE3-custom               | Check the rate of free space on disks. For each checks the mount point of disks will appear                                                                 | X          |
| File-Date-Generic   | OS-Linux-File-Date-Generic-NRPE3-custom   | Check file or                                                                                                                                               |            |
| File-Size-Generic   | OS-Linux-File-Size-Generic-NRPE3-custom   | Check file or                                                                                                                                               |            |
| Inodes              | OS-Linux-Inodes-NRPE3-custom              | Check the rate of free inodes on disks                                                                                                                      |            |
| Is-File-Generic     | OS-Linux-Is-File-Generic-NRPE3-custom     | Check if file 'xxx' is present                                                                                                                              |            |
| Is-Not-File-Generic | OS-Linux-Is-Not-File-Generic-NRPE3-custom | Check if file 'xxx' is not present                                                                                                                          |            |
| Ntp                 | OS-Linux-Ntp-NRPE3-custom                 | Check system time synchronization with NTP server                                                                                                           |            |
| Packet-Errors       | OS-Linux-Packet-Errors-NRPE3-custom       | Check packets on errors                                                                                                                                     |            |
| Process-Generic     | OS-Linux-Process-Generic-NRPE3-custom     | Check Linux processes                                                                                                                                       |            |
| Systemd-Sc-Status   | OS-Linux-Systemd-Sc-Status-NRPE3-custom   | Check systemd services status                                                                                                                               |            |
| Traffic             | OS-Linux-Traffic-NRPE3-custom             | Check the bandwidth of interfaces. For each checks the name of the interface will appear                                                                    | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then appy the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                  | Description                                                   |
|:---------------------------|:--------------------------------------------------------------|
| OS-Linux-NRPE-Disk-Name    | Discover the disk partitions and monitor space occupation     |
| OS-Linux-NRPE-Traffic-Name | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Metric name             | Unit  |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Metric name | Unit  |
|:------------|:------|
|             |       |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| cpu.utilization.percentage               | %     |
| cpu_core#core.cpu.utilization.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

Coming soon

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Metric name                                 | Unit  |
|:--------------------------------------------|:------|
| device#device.io.read.usage.bytespersecond  | B/s   |
| device#device.io.write.usage.bytespersecond | B/s   |
| device#device.io.read.wait.milliseconds     | ms    |
| device#device.io.write.wait.milliseconds    | ms    |
| device#device.io.servicetime.count          | count |
| device#device.io.utils.percentage           | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Disks" label="Disks">

| Metric name | Unit  |
|:------------|:------|
| disks#usage | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Metric name | Unit  |
|:------------|:------|
|             | s     |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Metric name | Unit  |
|:------------|:------|
|             | B     |
| total       | B     |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Metric name  | Unit  |
|:-------------|:------|
| inodes#usage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Metric name             | Unit  |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Metric name             | Unit  |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Load" label="Load">

| Metric name | Unit  |
|:------------|:------|
| avg_load1   |       |
| avg_load5   |       |
| avg_load15  |       |
| load1       |       |
| load5       |       |
| load15      |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                 | Unit  |
|:----------------------------|:------|
| memory.usage.bytes          | B     |
| memory.free.bytes           | B     |
| memory.usage.percentage     | %     |
| memory.available.bytes      | B     |
| memory.available.percentage | %     |
| memory.buffer.bytes         | B     |
| memory.cached.bytes         | B     |
| memory.slab.bytes           | B     |
| swap.usage.bytes            | B     |
| swap.free.bytes             | B     |
| swap.usage.percentage       | %     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| peers.detected.count                | count |
| peers#status                        | N/A   |
| peers#peer.time.offset.milliseconds | ms    |
| peers#peer.stratum.count            | count |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Metric name           | Unit  |
|:----------------------|:------|
| interface#status      | N/A   |
| interface#in-discard  | %     |
| interface#out-discard | %     |
| interface#in-error    | %     |
| interface#out-error   | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| processes#time                                |       |
| processes#memory-usage                        |       |
| processes#cpu-utilization                     |       |
| processes#disks-read                          |       |
| processes#disks-write                         |       |
| processes.total.count                         | count |
| processes.memory.usage.bytes                  | B     |
| processes.cpu.utilization.percentage          | %     |
| processes.disks.io.read.usage.bytespersecond  | B/s   |
| processes.disks.io.write.usage.bytespersecond | B/s   |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name           | Unit  |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Metric name                    | Unit  |
|:-------------------------------|:------|
| systemd.services.running.count | count |
| systemd.services.failed.count  | count |
| systemd.services.dead.count    | count |
| systemd.services.exited.count  | count |
| sc#status                      | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Metric name      | Unit  |
|:-----------------|:------|
| interface#status | N/A   |
| interface#in     |       |
| interface#out    |       |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name | Unit  |
|:------------|:------|
| uptime      | s     |

</TabItem>
</Tabs>

## Prerequisites

### Centreon NSClient++

To monitor an *Active Directory* domain controller through NRPE, install the 
Centreon packaged version of the NSClient++ agent. Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md)
and make sure that the **NRPE Server** configuration is correct.

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
dnf install centreon-pack-operatingsystems-linux-nrpe3
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-linux-nrpe3
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-operatingsystems-linux-nrpe3
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-linux-nrpe3
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Linux NRPE3** connector through
the **Configuration > Monitoring Connectors Manager** menu.

### Plugin

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-nrpe3-plugin
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **OS-Linux-NRPE3-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro            | Description                                                                                           | Default value        | Mandatory   |
|:-----------------|:------------------------------------------------------------------------------------------------------|:---------------------|:------------|
| NRPECLIENT       |                                                                                                       | check_centreon_nrpe3 |             |
| NRPEPORT         |                                                                                                       | 5666                 |             |
| NRPETIMEOUT      |                                                                                                       | 5                    |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                      |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                         | Default value                             | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------------------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --statefile-dir=/var/log/nrpe/centplugins |             |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Macro        | Description                                                                                         | Default value                             | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------------------------------|:------------|
| WARNINGIDLE  | Threshold warning in percent                                                                        |                                           |             |
| CRITICALIDLE | Threshold critical in percent                                                                       |                                           |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --statefile-dir=/var/log/nrpe/centplugins |             |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Macro        | Description                                                                                         | Default value                                              | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --skip --statefile-dir=/var/log/nrpe/centplugins |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| COMMAND      |                                                                                                     | test              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| COMMAND      |                                                                                                     | test              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Load" label="Load">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning (1min,5min,15min)                                                                 |                   |             |
| CRITICAL     | Threshold critical (1min,5min,15min)                                                                |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro           | Description                                                                                         | Default value                | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------|:-----------------------------|:------------|
| NTPCOMMAND      |                                                                                                     | ntpq                         |             |
| FILTERPEERNAME  |                                                                                                     | .*                           |             |
| FILTERPEERSTATE |                                                                                                     | .*                           |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --use-new-perfdata --verbose |             |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Macro        | Description                                                                                         | Default value                                                     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --statefile-dir=/var/log/nrpe/centplugins --no-loopback |             |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Macro         | Description                                                                                         | Default value     | Mandatory   |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGTIME   | Thresholds                                                                                          |                   |             |
| CRITICALTIME  | Thresholds                                                                                          |                   |             |
| WARNINGTOTAL  | Thresholds                                                                                          |                   |             |
| CRITICALTOTAL | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%)                     |                   |             |
| CRITICAL     | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%)                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Macro          | Description                                                                                         | Default value                | Mandatory   |
|:---------------|:----------------------------------------------------------------------------------------------------|:-----------------------------|:------------|
| FILTERNAME     |                                                                                                     | .*                           |             |
| CRITICALSTATUS |                                                                                                     | %{active} =~ /failed/i       |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --use-new-perfdata --verbose |             |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Macro        | Description                                                                                         | Default value                             | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------------------------------|:------------|
| FILTERSTATE  |                                                                                                     | RU                                        |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --statefile-dir=/var/log/nrpe/centplugins |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning in seconds                                                                        |                   |             |
| CRITICAL     | Threshold critical in seconds                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib64/nagios/plugins//check_centreon_nrpe3 -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::linux::local::plugin' 'cmd-return'  '  \
	--exec-command=""  \
	--exec-command-options="" \
	--manage-returns=""  '\
	
```

The expected command output is shown below:

```bash
OK:  | 'command.exit.code.count'=20;;;; 
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib64/nagios/plugins//check_centreon_nrpe3 -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::linux::local::plugin' 'cmd-return'  '  \
	--exec-command=""  \
    --list-mode
```

The plugin brings the following modes:

| Mode              | Linked service template                                                                                                     |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------|
| check-plugin      | Not used in this Monitoring Connector                                                                                       |
| cmd-return        | OS-Linux-Cmd-Generic-NRPE3-custom<br />OS-Linux-Is-File-Generic-NRPE3-custom<br />OS-Linux-Is-Not-File-Generic-NRPE3-custom |
| connections       | OS-Linux-Connections-Generic-NRPE3-custom                                                                                   |
| cpu               | OS-Linux-Cpu-NRPE3-custom                                                                                                   |
| cpu-detailed      | OS-Linux-Cpu-Detailed-NRPE3-custom                                                                                          |
| directlvm-usage   | Not used in this Monitoring Connector                                                                                       |
| discovery-snmp    | Not used in this Monitoring Connector                                                                                       |
| discovery-snmpv3  | Not used in this Monitoring Connector                                                                                       |
| diskio            | OS-Linux-Disk-IO-NRPE3-custom                                                                                               |
| files-date        | OS-Linux-File-Date-Generic-NRPE3-custom                                                                                     |
| files-size        | OS-Linux-File-Size-Generic-NRPE3-custom                                                                                     |
| inodes            | OS-Linux-Inodes-NRPE3-custom                                                                                                |
| list-interfaces   | Used for service discovery                                                                                                  |
| list-partitions   | Not used in this Monitoring Connector                                                                                       |
| list-storages     | Used for service discovery                                                                                                  |
| load              | OS-Linux-Load-NRPE3-custom                                                                                                  |
| memory            | OS-Linux-Memory-NRPE3-custom                                                                                                |
| mountpoint        | Not used in this Monitoring Connector                                                                                       |
| ntp               | OS-Linux-Ntp-NRPE3-custom                                                                                                   |
| open-files        | Not used in this Monitoring Connector                                                                                       |
| packet-errors     | OS-Linux-Packet-Errors-NRPE3-custom                                                                                         |
| paging            | Not used in this Monitoring Connector                                                                                       |
| pending-updates   | Not used in this Monitoring Connector                                                                                       |
| process           | OS-Linux-Process-Generic-NRPE3-custom                                                                                       |
| quota             | Not used in this Monitoring Connector                                                                                       |
| storage           | OS-Linux-Disks-NRPE3-custom                                                                                                 |
| swap              | OS-Linux-Swap-NRPE3-custom                                                                                                  |
| systemd-sc-status | OS-Linux-Systemd-Sc-Status-NRPE3-custom                                                                                     |
| traffic           | OS-Linux-Traffic-NRPE3-custom                                                                                               |
| uptime            | OS-Linux-Uptime-NRPE3-custom                                                                                                |

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
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Cli            |
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
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Option                 | Description                                                                                                                                         | Type |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   | Mode |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            | Mode |
| --exec-command         | Command to test (Default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            | Mode |
| --exec-command-path    | Command path (Default: none).                                                                                                                       | Mode |
| --exec-command-options | Command options (Default: none).                                                                                                                    | Mode |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Option        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Type |
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning     | Threshold warning for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Mode |
| --critical    | Threshold critical for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Mode |
| --service     | Check tcp connections following rules: tag,\[type\],\[state\],\[port-src\],\[port-dst\],\[filter-ip-src\],\[filter -ip-dst\],\[threshold-warning\],\[threshold-critical\]  Example to test SSH connections on the server: --service="ssh,,,22,,,,10,20"  \<tag\>           Name to identify service (must be unique and     couldn't be 'total').  \<type\>          regexp - can use 'ipv4', 'ipv6', 'udp', 'udp6'.     Empty means all.  \<state\>         regexp - can use 'finWait1', 'established',...     Empty means all (minus listen). For udp     connections, there are 'established' and     'listen'.  \<filter-ip-*\>   regexp - can use to exclude or include some IPs.  \<threshold-*\>   nagios-perfdata - number of connections.   | Mode |
| --application | Check tcp connections of mutiple services: tag,\[services\],\[threshold-warning\],\[threshold-critical\]  Example: --application="web,http\|https,100,200"  \<tag\>           Name to identify application (must be unique).  \<services\>      List of services (used the tag name. Separated     by '\|').  \<threshold-*\>   nagios-perfdata - number of connections.                                                                                                                                                                                                                                                                                                                                                                             | Mode |
| --con-mode    | Default mode for parsing and command: 'netstat' (default) or 'ss'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Mode |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                 | Description                                                                                                                                                                                                                                   | Type      |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --warning-average      | Warning threshold average CPU utilization.                                                                                                                                                                                                    | Mode      |
| --critical-average     | Critical threshold average CPU utilization.                                                                                                                                                                                                   | Mode      |
| --warning-core         | Warning thresholds for each CPU core                                                                                                                                                                                                          | Mode      |
| --critical-core        | Critical thresholds for each CPU core                                                                                                                                                                                                         | Mode      |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option                 | Description                                                                                                                                                                                                                                   | Type      |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --warning-*            | Threshold warning in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                                        | Mode      |
| --critical-*           | Threshold critical in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                                       | Mode      |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Option                   | Description                                                                                                                                                                                                                                   | Type      |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --warning-* --critical-* | Thresholds. Can be: 'read-usage', 'write-usage', 'read-wait', 'write-wait', 'svctime', 'utils'.                                                                                                                                               | Mode      |
| --filter-partition-name  | Filter partition name (regexp can be used).                                                                                                                                                                                                   | Mode      |
| --exclude-partition-name | Exclude partition name (regexp can be used).                                                                                                                                                                                                  | Mode      |
| --bytes-per-sector       | Bytes per sector (Default: 512)                                                                                                                                                                                                               | Mode      |
| --interrupt-frequency    | Linux Kernel Timer Interrupt Frequency (Default: 1000)                                                                                                                                                                                        | Mode      |
| --skip                   | Skip partitions with 0 sectors read/write.                                                                                                                                                                                                    | Mode      |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option               | Description                                            | Type |
|:---------------------|:-------------------------------------------------------|:-----|
| --warning-usage      | Threshold warning.                                     | Mode |
| --critical-usage     | Threshold critical.                                    | Mode |
| --units              | Units of thresholds (Default: '%') ('%', 'B').         | Mode |
| --free               | Thresholds are on free space left.                     | Mode |
| --filter-mountpoint  | Filter filesystem mount point (regexp can be used).    | Mode |
| --exclude-mountpoint | Exclude filesystem mount point (regexp can be used).   | Mode |
| --filter-type        | Filter filesystem type (regexp can be used).           | Mode |
| --filter-fs          | Filter filesystem (regexp can be used).                | Mode |
| --exclude-fs         | Exclude filesystem (regexp can be used).               | Mode |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Option          | Description                                                                                                                                            | Type |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --files         | Files/Directories to check. (Shell expansion is ok)                                                                                                    | Mode |
| --warning       | Threshold warning in seconds for each files/directories (diff time).                                                                                   | Mode |
| --critical      | Threshold critical in seconds for each files/directories (diff time).                                                                                  | Mode |
| --separate-dirs | Do not include size of subdirectories.                                                                                                                 | Mode |
| --max-depth     | Don't check fewer levels. (can be use --separate-dirs)                                                                                                 | Mode |
| --time          | Check another time than modified time.                                                                                                                 | Mode |
| --exclude-du    | Exclude files/directories with 'du' command. Values from exclude files/directories are not counted in parent directories. Shell pattern can be used.   | Mode |
| --filter-plugin | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used.            | Mode |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Option           | Description                                                                                                                                            | Type |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --files          | Files/Directories to check. (Shell expansion is ok)                                                                                                    | Mode |
| --warning-one    | Threshold warning in bytes for each files/directories.                                                                                                 | Mode |
| --critical-one   | Threshold critical in bytes for each files/directories.                                                                                                | Mode |
| --warning-total  | Threshold warning in bytes for all files/directories.                                                                                                  | Mode |
| --critical-total | Threshold critical in bytes for all files/directories.                                                                                                 | Mode |
| --separate-dirs  | Do not include size of subdirectories.                                                                                                                 | Mode |
| --max-depth      | Don't check fewer levels. (can be use --separate-dirs)                                                                                                 | Mode |
| --all-files      | Add files when you check directories.                                                                                                                  | Mode |
| --exclude-du     | Exclude files/directories with 'du' command. Values from exclude files/directories are not counted in parent directories. Shell pattern can be used.   | Mode |
| --filter-plugin  | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used.            | Mode |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Option               | Description                                            | Type |
|:---------------------|:-------------------------------------------------------|:-----|
| --warning-usage      | Threshold warning in percent.                          | Mode |
| --critical-usage     | Threshold critical in percent.                         | Mode |
| --filter-mountpoint  | Filter filesystem mount point (regexp can be used).    | Mode |
| --exclude-mountpoint | Exclude filesystem mount point (regexp can be used).   | Mode |
| --filter-type        | Filter filesystem type (regexp can be used).           | Mode |
| --filter-fs          | Filter filesystem (regexp can be used).                | Mode |
| --exclude-fs         | Exclude filesystem (regexp can be used).               | Mode |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Option                 | Description                                                                                                                                         | Type |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   | Mode |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            | Mode |
| --exec-command         | Command to test (Default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            | Mode |
| --exec-command-path    | Command path (Default: none).                                                                                                                       | Mode |
| --exec-command-options | Command options (Default: none).                                                                                                                    | Mode |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Option                 | Description                                                                                                                                         | Type |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   | Mode |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            | Mode |
| --exec-command         | Command to test (Default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            | Mode |
| --exec-command-path    | Command path (Default: none).                                                                                                                       | Mode |
| --exec-command-options | Command options (Default: none).                                                                                                                    | Mode |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                             | Type |
|:-----------|:----------------------------------------|:-----|
| --warning  | Threshold warning (1min,5min,15min).    | Mode |
| --critical | Threshold critical (1min,5min,15min).   | Mode |
| --average  | Load average for the number of CPUs.    | Mode |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                                                                                             | Type |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --swap                   | Check swap also.                                                                                                                                                                                                                        | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'memory-usage' (B), 'memory-usage-free' (B), 'memory-usage-prct' (%), 'memory-available' (B), 'memory-available-prct' (%), 'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'slab' (B).    | Mode |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option             | Description                                                                                                                                 | Type |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --ntp-mode         | Default mode for parsing and command: 'ntpq' (default), 'chronyc' or 'all'.                                                                 | Mode |
| --filter-name      | Filter peer name (can be a regexp).                                                                                                         | Mode |
| --filter-state     | Filter peer state (can be a regexp).                                                                                                        | Mode |
| --warning-peers    | Threshold warning minimum amount of NTP-Server                                                                                              | Mode |
| --critical-peers   | Threshold critical minimum amount of NTP-Server                                                                                             | Mode |
| --warning-offset   | Threshold warning offset deviation value in milliseconds                                                                                    | Mode |
| --critical-offset  | Threshold critical offset deviation value in milliseconds                                                                                   | Mode |
| --warning-stratum  | Threshold warning.                                                                                                                          | Mode |
| --critical-stratum | Threshold critical.                                                                                                                         | Mode |
| --unknown-status   | Set unknown threshold for status. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display}     | Mode |
| --warning-status   | Set warning threshold for status. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display}     | Mode |
| --critical-status  | Set critical threshold for status. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display}    | Mode |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Option                 | Description                                                                                                                                                                                                                                   | Type      |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --warning-*            | Threshold warning in percent of total packets. Can be: in-error, out-error, in-discard, out-discard                                                                                                                                           | Mode      |
| --critical-*           | Threshold critical in percent of total packets. Can be: in-error, out-error, in-discard, out-discard                                                                                                                                          | Mode      |
| --filter-interface     | Filter interface name (regexp can be used).                                                                                                                                                                                                   | Mode      |
| --exclude-interface    | Exclude interface name (regexp can be used).                                                                                                                                                                                                  | Mode      |
| --filter-state         | Filter filesystem type (regexp can be used).                                                                                                                                                                                                  | Mode      |
| --no-loopback          | Don't display loopback interfaces.                                                                                                                                                                                                            | Mode      |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Option                   | Description                                                                                                                                                                                                                                   | Type      |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --add-cpu                | Monitor cpu usage.                                                                                                                                                                                                                            | Mode      |
| --add-memory             | Monitor memory usage. It's inaccurate but it provides a trend.                                                                                                                                                                                | Mode      |
| --add-disk-io            | Monitor disk I/O.                                                                                                                                                                                                                             | Mode      |
| --filter-command         | Filter process commands (regexp can be used).                                                                                                                                                                                                 | Mode      |
| --exclude-command        | Exclude process commands (regexp can be used).                                                                                                                                                                                                | Mode      |
| --filter-arg             | Filter process arguments (regexp can be used).                                                                                                                                                                                                | Mode      |
| --exclude-arg            | Exclude process arguments (regexp can be used).                                                                                                                                                                                               | Mode      |
| --filter-ppid            | Filter process ppid (regexp can be used).                                                                                                                                                                                                     | Mode      |
| --filter-state           | Filter process states (regexp can be used). You can use: 'zombie', 'dead', 'paging', 'stopped', 'InterrupibleSleep', 'running', 'UninterrupibleSleep'.                                                                                        | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'total-memory-usage', 'total-cpu-utilization', 'total-disks-read', 'total-disks-write', 'time', 'memory-usage', 'cpu-utilization', 'disks-read', 'disks-write'.                                                  | Mode      |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                                         | Type |
|:-------------------------|:------------------------------------------------------------------------------------|:-----|
| --no-swap                | Threshold if no active swap (default: 'critical').                                  | Mode |
| --warning-* --critical-* | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%).    | Mode |

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Option                   | Description                                                                                                                                                    | Type |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-name            | Filter service name (can be a regexp).                                                                                                                         | Mode |
| --exclude-name           | Exclude service name (can be a regexp).                                                                                                                        | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'total-running', 'total-dead', 'total-exited', 'total-failed'.                                                                             | Mode |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{display}, %{active}, %{sub}, %{load}, %{boot}                                         | Mode |
| --critical-status        | Set critical threshold for status (Default: '%{active} =~ /failed/i'). You can use the following variables: %{display}, %{active}, %{sub}, %{load}, %{boot}    | Mode |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Option                 | Description                                                                                                                                                                                                                                   | Type      |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --warning-in           | Threshold warning in percent for 'in' traffic.                                                                                                                                                                                                | Mode      |
| --critical-in          | Threshold critical in percent for 'in' traffic.                                                                                                                                                                                               | Mode      |
| --warning-out          | Threshold warning in percent for 'out' traffic.                                                                                                                                                                                               | Mode      |
| --critical-out         | Threshold critical in percent for 'out' traffic.                                                                                                                                                                                              | Mode      |
| --unknown-status       | Set unknown threshold for status (Default: ''). You can use the following variables: %{status}, %{display}                                                                                                                                    | Mode      |
| --warning-status       | Set warning threshold for status (Default: ''). You can use the following variables: %{status}, %{display}                                                                                                                                    | Mode      |
| --critical-status      | Set critical threshold for status (Default: '%{status} ne "RU"'). You can use the following variables: %{status}, %{display}                                                                                                                  | Mode      |
| --units                | Units of thresholds (Default: 'b/s') ('%', 'b/s'). Percent canbe used only if --speed is set.                                                                                                                                                 | Mode      |
| --filter-interface     | Filter interface name (regexp can be used).                                                                                                                                                                                                   | Mode      |
| --exclude-interface    | Exclude interface name (regexp can be used).                                                                                                                                                                                                  | Mode      |
| --filter-state         | Filter interfaces type (regexp can be used).                                                                                                                                                                                                  | Mode      |
| --speed                | Set interface speed (in Mb).                                                                                                                                                                                                                  | Mode      |
| --guess-speed          | Try to guess speed with commands ethtool and iwconfig.                                                                                                                                                                                        | Mode      |
| --no-loopback          | Don't display loopback interfaces.                                                                                                                                                                                                            | Mode      |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option     | Description                      | Type |
|:-----------|:---------------------------------|:-----|
| --warning  | Threshold warning in seconds.    | Mode |
| --critical | Threshold critical in seconds.   | Mode |
| --seconds  | Display uptime in seconds.       | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib64/nagios/plugins//check_centreon_nrpe3 -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::linux::local::plugin' 'cmd-return'  '  \
	--exec-command=""  \
	--exec-command-options="" \
    --help
```
