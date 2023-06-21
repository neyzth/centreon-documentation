---
id: virtualization-vmware2-vm
title: VMware VM
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **VMware VM** brings a host template:

* **Virt-VMWare2-VM-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Virt-VMWare2-VM-custom" label="Virt-VMWare2-VM-custom">

| Service Alias       | Service Template                                | Service Description                                                     |
|:--------------------|:------------------------------------------------|:------------------------------------------------------------------------|
| Vm-Limit            | Virt-VMWare2-Vm-Limit-Generic-custom            | Check limit definition                                                  |
| Vm-Snapshot         | Virt-VMWare2-Vm-Snapshot-Generic-custom         | Check snapshot age of a virtual machine                                 |
| Vm-Status           | Virt-VMWare2-Vm-Status-Generic-custom           | Check global status of a virtual machine                                |
| Vm-Thinprovisioning | Virt-VMWare2-Vm-Thinprovisioning-Generic-custom | Check if a virtual machine has a disk in mode 'thinprovisioning' or not |
| Vm-Tools            | Virt-VMWare2-Vm-Tools-Generic-custom            | Check vmtools state of a virtual machine                                |

> The services listed above are created automatically when the **Virt-VMWare2-VM** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias      | Service Template                               | Service Description                                   |
|:-------------------|:-----------------------------------------------|:------------------------------------------------------|
| Vm-Cpu             | Virt-VMWare2-Vm-Cpu-Generic-custom             | Check CPU usage of a virtual machine                  |
| Vm-Datastores-Iops | Virt-VMWare2-Vm-Datastores-Iops-Generic-custom | Check datastores IOPS linked to the virtual machine.  |
| Vm-Device          | Virt-VMWare2-Vm-Device-Generic-custom          | Check CPU usage of a virtual machine                  |
| Vm-Memory          | Virt-VMWare2-Vm-Memory-Generic-custom          | Check memory usage of a virtual machine               |
| Vm-Swap            | Virt-VMWare2-Vm-Swap-Generic-custom            | Check if a virtual machine is swapping                |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then appy the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                     |
|:----------------|:--------------------------------|
| VMWare VM       | Discover VMWare Virtual Machine |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Metric name                               | Unit  |
|:------------------------------------------|:------|
| vm~status                                 | N/A   |
| vm~vm.cpu.utilization.percentage          | %     |
| vm~vm.cpu.utilization.mhz                 | MHz   |
| vm~vm.cpu.ready.percentage                | %     |
| vm~cpu#vm.core.cpu.utilization.percentage | MHz   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Datastores-Iops" label="Vm-Datastores-Iops">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| vm~status                                  | N/A   |
| vm~vm.datastore.latency.max.milliseconds   | ms    |
| vm~datastore#vm.datastore.read.usage.iops  | iops  |
| vm~datastore#vm.datastore.write.usage.iops | iops  |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Device" label="Vm-Device">

| Metric name                   | Unit  |
|:------------------------------|:------|
| vm.devices.connected.count    | count |
| vm#status                     | N/A   |
| vm#vm.devices.connected.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Limit" label="Vm-Limit">

| Metric name   | Unit  |
|:--------------|:------|
| cpu-status    | N/A   |
| memory-status | N/A   |
| disk-status   | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| vm~status                         | N/A   |
| vm~vm.memory.consumed.usage.bytes |       |
| vm~vm.memory.active.usage.bytes   |       |
| vm~vm.memory.overhead.bytes       | B     |
| vm~vm.memory.ballooning.bytes     | B     |
| vm~vm.memory.shared.bytes         | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Snapshot" label="Vm-Snapshot">

Coming soon

</TabItem>
<TabItem value="Vm-Status" label="Vm-Status">

| Metric name       | Unit  |
|:------------------|:------|
| vm#status         | N/A   |
| vm#overall-status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Swap" label="Vm-Swap">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| vm#status                           | N/A   |
| vm#vm.swap.in.usage.bytespersecond  | B/s   |
| vm#vm.swap.out.usage.bytespersecond | B/s   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Thinprovisioning" label="Vm-Thinprovisioning">

Coming soon

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

Coming soon

</TabItem>
</Tabs>

## Prerequisites

### Centreon VMWare Connector

For the VMWare monitoring, Centreon use daemon to connect and request the vCenter.

Install this daemon on each needed poller:

```
yum install centreon-plugin-Virtualization-VMWare-daemon
```

To configure the access to your infrastructure, edit the
"/etc/centreon/centreon\_vmware.pm" configuration file:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        default => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        }
    }
);

1;
```

Make sure to replace variables with needed information:

- _ip\_hostname_: IP address or hostname of the vCenter or ESX (if standalone),
- _username_: username with at least "read only" access to the vCenter or ESX (you can use domain user),
- _password_: password of the username.

You can configure multiple vCenter or ESXi connections using this
structure:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        'my_first_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        },
        'my_other_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<DOMAIN>\<username>',
            password => '<password>'
        },
    },
    port => 5700
);

1;
```

Each entry is called a **container**.

> You can also define the "port" attribute to change listening port.

Then start the daemon and make sure it is configured to start at server boot:

``` bash
systemctl start centreon_vmware
systemctl enable centreon_vmware
```

Make sure that the daemon configuration works fine by looking for errors in
"/var/log/centreon/centreon\_vmware.log".

### Tags and Custom Attributes

To discover Tags and Custom Attributes, you must : 

* use version **3.2.5** of **centreon-vmware-daemon**
* add **--tags** in the additional discovery options: go to the **Configuration > Hosts > Discovery** page, and to the 3rd step (**Set discovery parameters**), in the section **Additional parameters**, in the **Additional options** field, type **--tags**.

### Network flows

The Poller with the Centreon VMware Connector installed need to access in TCP/443 HTTPS to the Vcenter.

The Pollers that request the Centreon VMWare Connector host need to access in TCP/5700 to the Centreon VMWare Connector host.

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
dnf install centreon-pack-virtualization-vmware2-vm
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-vmware2-vm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-virtualization-vmware2-vm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-vmware2-vm
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **VMware VM** connector through
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
dnf install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-virtualization-vmware2-connector-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Virt-VMWare2-VM-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                      | Description                                                                                           | Default value     | Mandatory   |
|:---------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| CENTREONVMWARECONTAINER    | Container to use                                                                                      | default           |             |
| CENTREONVMWAREHOST         | Connector hostname                                                                                    | localhost         |             |
| CENTREONVMWAREPORT         | Connector port                                                                                        | 5700              |             |
| VMNAME                     | VM hostname to check. If not set, we check all VMs                                                    |                   |             |
| VMUUID                     |                                                                                                       |                   |             |
| CENTREONVMWAREEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Macro            | Description                                                                                                                                                                                           | Default value                                                              | Mandatory   |
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------|:------------|
| UNKNOWNSTATUS    | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection_state} !~ /^connected$/i or %{power_state}  !~ /^poweredOn$/i |             |
| WARNINGCPU       | Threshold warning                                                                                                                                                                                     |                                                                            |             |
| CRITICALCPU      | Threshold critical                                                                                                                                                                                    |                                                                            |             |
| WARNINGREADY     | Threshold warning                                                                                                                                                                                     | 5                                                                          |             |
| CRITICALREADY    | Threshold critical                                                                                                                                                                                    | 10                                                                         |             |
| WARNINGSTATUS    | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                            |             |
| CRITICALSTATUS   | Set critical threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                            |             |
| WARNINGUSAGE     | Threshold warning                                                                                                                                                                                     | 80                                                                         |             |
| CRITICALUSAGE    | Threshold critical                                                                                                                                                                                    | 90                                                                         |             |
| WARNINGUSAGEMHZ  | Threshold warning                                                                                                                                                                                     |                                                                            |             |
| CRITICALUSAGEMHZ | Threshold critical                                                                                                                                                                                    |                                                                            |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                   |                                                                            |             |

</TabItem>
<TabItem value="Vm-Datastores-Iops" label="Vm-Datastores-Iops">

| Macro                   | Description                                                                                                                                                                                           | Default value                                                              | Mandatory   |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------|:------------|
| FILTERDATASTORENAME     | Datastore to check. If not set, we check all datastores                                                                                                                                               | .*                                                                         |             |
| UNKNOWNSTATUS           | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection_state} !~ /^connected$/i or %{power_state}  !~ /^poweredOn$/i |             |
| WARNINGMAXTOTALLATENCY  | Thresholds                                                                                                                                                                                            |                                                                            |             |
| CRITICALMAXTOTALLATENCY | Thresholds                                                                                                                                                                                            |                                                                            |             |
| WARNINGREAD             | Thresholds                                                                                                                                                                                            |                                                                            |             |
| CRITICALREAD            | Thresholds                                                                                                                                                                                            |                                                                            |             |
| WARNINGSTATUS           | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                            |             |
| CRITICALSTATUS          | Set critical threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                            |             |
| WARNINGWRITE            | Thresholds                                                                                                                                                                                            |                                                                            |             |
| CRITICALWRITE           | Thresholds                                                                                                                                                                                            |                                                                            |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                   | --verbose                                                                  |             |

</TabItem>
<TabItem value="Vm-Device" label="Vm-Device">

| Macro                        | Description                                                                                                                                     | Default value                         | Mandatory   |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|:------------|
| UNKNOWNSTATUS                | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state} | %{connection_state} !~ /^connected$/i |             |
| FILTERDEVICE                 | Device to check (Required) (Example: --device='VirtualCdrom')                                                                                   |                                       |             |
| WARNINGSTATUS                | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}                                       |                                       |             |
| CRITICALSTATUS               | Set critical threshold for status (Default: ''). You can use the following variables: %{connection\_state}                                      |                                       |             |
| WARNINGTOTALDEVICECONNECTED  | Threshold warning                                                                                                                               |                                       |             |
| CRITICALTOTALDEVICECONNECTED | Threshold critical                                                                                                                              |                                       |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                             |                                       |             |

</TabItem>
<TabItem value="Vm-Limit" label="Vm-Limit">

| Macro                | Description                                                                                                                                                                                     | Default value                                           | Mandatory   |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|:------------|
| CRITICALCPUSTATUS    | Set critical threshold for status (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{connection_state} !~ /^connected$/i || %{limit} != -1 |             |
| WARNINGCPUSTATUS     | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                                                         |             |
| CRITICALDISKSTATUS   | Set critical threshold for status (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{connection_state} !~ /^connected$/i || %{limit} != -1 |             |
| WARNINGDISKSTATUS    | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                                                         |             |
| CRITICALMEMORYSTATUS | Set critical threshold for status (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{connection_state} !~ /^connected$/i || %{limit} != -1 |             |
| WARNINGMEMORYSTATUS  | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                                                         |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                             | --verbose                                               |             |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Macro              | Description                                                                                                                                                                                           | Default value                                                              | Mandatory   |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------|:------------|
| UNKNOWNSTATUS      | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection_state} !~ /^connected$/i or %{power_state}  !~ /^poweredOn$/i |             |
| WARNING            | Threshold warning                                                                                                                                                                                     |                                                                            |             |
| CRITICAL           | Threshold critical                                                                                                                                                                                    |                                                                            |             |
| WARNINGACTIVE      | Threshold warning                                                                                                                                                                                     |                                                                            |             |
| CRITICALACTIVE     | Threshold critical                                                                                                                                                                                    |                                                                            |             |
| WARNINGBALLOONING  | Threshold warning                                                                                                                                                                                     |                                                                            |             |
| CRITICALBALLOONING | Threshold critical                                                                                                                                                                                    |                                                                            |             |
| WARNINGOVERHEAD    | Threshold warning                                                                                                                                                                                     |                                                                            |             |
| CRITICALOVERHEAD   | Threshold critical                                                                                                                                                                                    |                                                                            |             |
| WARNINGSHARED      | Threshold warning                                                                                                                                                                                     |                                                                            |             |
| CRITICALSHARED     | Threshold critical                                                                                                                                                                                    |                                                                            |             |
| WARNINGSTATUS      | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                            |             |
| CRITICALSTATUS     | Set critical threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                            |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                   |                                                                            |             |

</TabItem>
<TabItem value="Vm-Snapshot" label="Vm-Snapshot">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Warning threshold for snapshot's age                                                                | 259200            |             |
| CRITICAL     | Critical threshold for snapshot's age                                                               | 432000            |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Vm-Status" label="Vm-Status">

| Macro                 | Description                                                                                                                                                      | Default value                         | Mandatory   |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|:------------|
| UNKNOWNSTATUS         | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection_state} !~ /^connected$/i |             |
| UNKNOWNOVERALLSTATUS  | Set unknown threshold for status (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}                             | %{overall_status} =~ /gray/i          |             |
| WARNINGOVERALLSTATUS  | Set warning threshold for status (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}                           | %{overall_status} =~ /yellow/i        |             |
| CRITICALOVERALLSTATUS | Set critical threshold for status (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}                             | %{overall_status} =~ /red/i           |             |
| WARNINGSTATUS         | Set warning threshold for status. You can use the following variables: %{connection\_state}                                                                      |                                       |             |
| CRITICALSTATUS        | Set critical threshold for status. You can use the following variables: %{connection\_state}, %{power\_state}                                                    |                                       |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                              | --verbose                             |             |

</TabItem>
<TabItem value="Vm-Swap" label="Vm-Swap">

| Macro           | Description                                                                                                                                                                                           | Default value                                                              | Mandatory   |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------|:------------|
| UNKNOWNSTATUS   | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection_state} !~ /^connected$/i or %{power_state}  !~ /^poweredOn$/i |             |
| WARNINGSTATUS   | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                            |             |
| CRITICALSTATUS  | Set critical threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                            |             |
| WARNINGSWAPIN   | Threshold warning                                                                                                                                                                                     |                                                                            |             |
| CRITICALSWAPIN  | Threshold critical                                                                                                                                                                                    |                                                                            |             |
| WARNINGSWAPOUT  | Threshold warning                                                                                                                                                                                     |                                                                            |             |
| CRITICALSWAPOUT | Threshold critical                                                                                                                                                                                    |                                                                            |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                   |                                                                            |             |

</TabItem>
<TabItem value="Vm-Thinprovisioning" label="Vm-Thinprovisioning">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| STATUS       | Thinprovisioning status (default: none) Example: 'active,CRITICAL' or 'notactive,WARNING'           | active,WARNING    |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Macro              | Description                                                                                         | Default value     | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| NOTINSTALLEDSTATUS | Status if vmtools is not installed (default: critical)                                              | critical          |             |
| NOTRUNNINGSTATUS   | Status if vmtools is not running (default: critical)                                                | critical          |             |
| NOTUP2DATESTATUS   | Status if vmtools is not upd2date (default: warning)                                                | warning           |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=cpu-vm \
	--custommode=connector \
	--connector-hostname='localhost' \
	--connector-port='5700' \
	--container='default'  \
	--vm-hostname='' \
	--filter-uuid='' \
	--unknown-status='%{connection_state} !~ /^connected$/i or %{power_state}  !~ /^poweredOn$/i' \
	--warning-status='' \
	--critical-status='' \
	--warning-total-cpu='80' \
	--critical-total-cpu='90' \
	--warning-total-cpu-mhz='' \
	--critical-total-cpu-mhz='' \
	--warning-cpu-ready='5' \
	--critical-cpu-ready='10' \
	--warning-cpu='' \
	--critical-cpu='' \
	
```

The expected command output is shown below:

```bash
OK:      | 'vm.cpu.utilization.percentage'=18%;;;0;100 'vm.cpu.utilization.mhz'=98MHz;;;0; 'vm.cpu.ready.percentage'=44%;;;0;100 'vm.core.cpu.utilization.percentage'=53MHz;;;0; 
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode                | Linked service template                         |
|:--------------------|:------------------------------------------------|
| alarm-datacenter    | Not used in this Monitoring Connector           |
| alarm-host          | Not used in this Monitoring Connector           |
| countvm-host        | Not used in this Monitoring Connector           |
| cpu-cluster         | Not used in this Monitoring Connector           |
| cpu-host            | Not used in this Monitoring Connector           |
| cpu-vm              | Virt-VMWare2-Vm-Cpu-Generic-custom              |
| datastore-countvm   | Not used in this Monitoring Connector           |
| datastore-host      | Not used in this Monitoring Connector           |
| datastore-io        | Not used in this Monitoring Connector           |
| datastore-iops      | Not used in this Monitoring Connector           |
| datastore-snapshot  | Not used in this Monitoring Connector           |
| datastore-usage     | Not used in this Monitoring Connector           |
| datastore-vm        | Virt-VMWare2-Vm-Datastores-Iops-Generic-custom  |
| device-vm           | Virt-VMWare2-Vm-Device-Generic-custom           |
| discovery           | Used for host discovery                         |
| getmap              | Not used in this Monitoring Connector           |
| health-host         | Not used in this Monitoring Connector           |
| licenses            | Not used in this Monitoring Connector           |
| limit-vm            | Virt-VMWare2-Vm-Limit-Generic-custom            |
| list-clusters       | Not used in this Monitoring Connector           |
| list-datacenters    | Not used in this Monitoring Connector           |
| list-datastores     | Not used in this Monitoring Connector           |
| list-nichost        | Not used in this Monitoring Connector           |
| maintenance-host    | Not used in this Monitoring Connector           |
| memory-host         | Not used in this Monitoring Connector           |
| memory-vm           | Virt-VMWare2-Vm-Memory-Generic-custom           |
| net-host            | Not used in this Monitoring Connector           |
| net-vm              | Not used in this Monitoring Connector           |
| service-host        | Not used in this Monitoring Connector           |
| snapshot-vm         | Virt-VMWare2-Vm-Snapshot-Generic-custom         |
| stat-connectors     | Not used in this Monitoring Connector           |
| status-cluster      | Not used in this Monitoring Connector           |
| status-host         | Not used in this Monitoring Connector           |
| status-vm           | Virt-VMWare2-Vm-Status-Generic-custom           |
| storage-host        | Not used in this Monitoring Connector           |
| swap-host           | Not used in this Monitoring Connector           |
| swap-vm             | Virt-VMWare2-Vm-Swap-Generic-custom             |
| thinprovisioning-vm | Virt-VMWare2-Vm-Thinprovisioning-Generic-custom |
| time-host           | Not used in this Monitoring Connector           |
| tools-vm            | Virt-VMWare2-Vm-Tools-Generic-custom            |
| uptime-host         | Not used in this Monitoring Connector           |
| vmoperation-cluster | Not used in this Monitoring Connector           |
| vsan-cluster-usage  | Not used in this Monitoring Connector           |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type      |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global    |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global    |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global    |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get the an information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Global    |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global    |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global    |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output    |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output    |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output    |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output    |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output    |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output    |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output    |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output    |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output    |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output    |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output    |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output    |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output    |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output    |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output    |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output    |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output    |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output    |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output    |
| --connector-hostname                       | Connector hostname (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Connector |
| --connector-port                           | Connector port (default: 5700).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Connector |
| --container                                | Container to use (it depends of the connector configuration).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Connector |
| --vsphere-address                          | Address of vpshere/ESX to connect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Connector |
| --vsphere-username                         | Username of vpshere/ESX connection (with --vsphere-address).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Connector |
| --vsphere-password                         | Password of vpshere/ESX connection (with --vsphere-address).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Connector |
| --timeout                                  | Set global execution timeout (Default: 50)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Connector |
| --sampling-period                          | Choose the sampling period (can change the default sampling for counters). Should be not different than 300 or 20.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Connector |
| --time-shift                               | Can shift the time. We the following option you can average X counters values (default: 0).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Connector |
| --case-insensitive                         | Searchs are case insensitive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Connector |
| --unknown-connector-status                 | Set unknown threshold for connector status (Default: '%{code} \< 0 \|\| (%{code} \> 0 && %{code} \< 200)'). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Connector |
| --warning-connector-status                 | Set warning threshold for connector status (Default: ''). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Connector |
| --critical-connector-status                | Set critical threshold for connector status (Default: ''). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Connector |

#### Modes options

All modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Option               | Description                                                                                                                                                                                             | Type |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --vm-hostname        | VM hostname to check. If not set, we check all VMs.                                                                                                                                                     | Mode |
| --filter             | VM hostname is a regexp. Exemple : --vm-hostname='^((VM-PROD-*))' --filter                                                                                                                              | Mode |
| --filter-description | Filter also virtual machines description (can be a regexp).                                                                                                                                             | Mode |
| --filter-os          | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                 | Mode |
| --scope-datacenter   | Search in following datacenter(s) (can be a regexp).                                                                                                                                                    | Mode |
| --scope-cluster      | Search in following cluster(s) (can be a regexp).                                                                                                                                                       | Mode |
| --scope-host         | Search in following host(s) (can be a regexp).                                                                                                                                                          | Mode |
| --unknown-status     | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   | Mode |
| --warning-status     | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              | Mode |
| --critical-status    | Set critical threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             | Mode |
| --warning-*          | Threshold warning. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu-ready', 'cpu'.                                                                                                                            | Mode |
| --critical-*         | Threshold critical. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu-ready', 'cpu'.                                                                                                                           | Mode |

</TabItem>
<TabItem value="Vm-Datastores-Iops" label="Vm-Datastores-Iops">

| Option                   | Description                                                                                                                                                                                             | Type |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --vm-hostname            | VM hostname to check. If not set, we check all VMs.                                                                                                                                                     | Mode |
| --filter                 | VM hostname is a regexp.                                                                                                                                                                                | Mode |
| --filter-description     | Filter also virtual machines description (can be a regexp).                                                                                                                                             | Mode |
| --filter-os              | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                 | Mode |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                                                                    | Mode |
| --scope-cluster          | Search in following cluster(s) (can be a regexp).                                                                                                                                                       | Mode |
| --scope-host             | Search in following host(s) (can be a regexp).                                                                                                                                                          | Mode |
| --datastore-name         | Datastore to check. If not set, we check all datastores.                                                                                                                                                | Mode |
| --filter-datastore       | Datastore name is a regexp.                                                                                                                                                                             | Mode |
| --display-description    | Display virtual machine description.                                                                                                                                                                    | Mode |
| --unknown-status         | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   | Mode |
| --warning-status         | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              | Mode |
| --critical-status        | Set critical threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'max-total-latency', 'read', 'write'.                                                                                                                                               | Mode |

</TabItem>
<TabItem value="Vm-Device" label="Vm-Device">

| Option                | Description                                                                                                                                       | Type |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --vm-hostname         | VM hostname to check. If not set, we check all VMs.                                                                                               | Mode |
| --filter              | VM hostname is a regexp.                                                                                                                          | Mode |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                       | Mode |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                           | Mode |
| --scope-datacenter    | Search in following datacenter(s) (can be a regexp).                                                                                              | Mode |
| --scope-cluster       | Search in following cluster(s) (can be a regexp).                                                                                                 | Mode |
| --scope-host          | Search in following host(s) (can be a regexp).                                                                                                    | Mode |
| --display-description | Display virtual machine description.                                                                                                              | Mode |
| --device              | Device to check (Required) (Example: --device='VirtualCdrom').                                                                                    | Mode |
| --unknown-status      | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}   | Mode |
| --warning-status      | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}                                         | Mode |
| --critical-status     | Set critical threshold for status (Default: ''). You can use the following variables: %{connection\_state}                                        | Mode |
| --warning-*           | Threshold warning. Can be: 'total-device-connected', 'device-connected'.                                                                          | Mode |
| --critical-*          | Threshold critical. Can be: 'total-device-connected', 'device-connected'.                                                                         | Mode |

</TabItem>
<TabItem value="Vm-Limit" label="Vm-Limit">

| Option                   | Description                                                                                                                                                                                        | Type |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --vm-hostname            | VM hostname to check. If not set, we check all VMs.                                                                                                                                                | Mode |
| --filter                 | VM hostname is a regexp.                                                                                                                                                                           | Mode |
| --filter-description     | Filter also virtual machines description (can be a regexp).                                                                                                                                        | Mode |
| --filter-os              | Filter also virtual machines OS name (can be a regexp).                                                                                                                                            | Mode |
| --display-description    | Display virtual machine description.                                                                                                                                                               | Mode |
| --check-disk-limit       | Check disk limits (since vsphere 5.0).                                                                                                                                                             | Mode |
| --warning-disk-status    | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                               | Mode |
| --critical-disk-status   | Set critical threshold for status (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}    | Mode |
| --warning-cpu-status     | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                               | Mode |
| --critical-cpu-status    | Set critical threshold for status (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}    | Mode |
| --warning-memory-status  | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                               | Mode |
| --critical-memory-status | Set critical threshold for status (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}    | Mode |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Option                | Description                                                                                                                                                                                             | Type |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --vm-hostname         | VM hostname to check. If not set, we check all VMs.                                                                                                                                                     | Mode |
| --filter              | VM hostname is a regexp.                                                                                                                                                                                | Mode |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                                                                             | Mode |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                 | Mode |
| --scope-datacenter    | Search in following datacenter(s) (can be a regexp).                                                                                                                                                    | Mode |
| --scope-cluster       | Search in following cluster(s) (can be a regexp).                                                                                                                                                       | Mode |
| --scope-host          | Search in following host(s) (can be a regexp).                                                                                                                                                          | Mode |
| --display-description | Display virtual machine description.                                                                                                                                                                    | Mode |
| --unknown-status      | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   | Mode |
| --warning-status      | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              | Mode |
| --critical-status     | Set critical threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             | Mode |
| --units               | Units of thresholds (Default: '%') ('%', 'B').                                                                                                                                                          | Mode |
| --free                | Thresholds are on free space left.                                                                                                                                                                      | Mode |
| --warning-*           | Threshold warning. Can be: 'consumed', 'active', 'overhead', 'ballooning', 'shared'.                                                                                                                    | Mode |
| --critical-*          | Threshold critical. Can be: 'consumed', 'active', 'overhead', 'ballooning', 'shared'.                                                                                                                   | Mode |

</TabItem>
<TabItem value="Vm-Snapshot" label="Vm-Snapshot">

| Option                | Description                                                                                                                                                   | Type |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --vm-hostname         | VM hostname to check. If not set, we check all VMs.                                                                                                           | Mode |
| --filter              | VM hostname is a regexp.                                                                                                                                      | Mode |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                                   | Mode |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                                       | Mode |
| --scope-datacenter    | Search in following datacenter(s) (can be a regexp).                                                                                                          | Mode |
| --scope-cluster       | Search in following cluster(s) (can be a regexp).                                                                                                             | Mode |
| --scope-host          | Search in following host(s) (can be a regexp).                                                                                                                | Mode |
| --display-description | Display virtual machine description.                                                                                                                          | Mode |
| --check-consolidation | Check if VM needs consolidation (since vsphere 5.0).                                                                                                          | Mode |
| --disconnect-status   | Status if VM disconnected (default: 'unknown').                                                                                                               | Mode |
| --nopoweredon-skip    | Skip check if VM is not poweredOn.                                                                                                                            | Mode |
| --empty-continue      | Ask to the connector that an empty response is ok.                                                                                                            | Mode |
| --unit                | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds   | Mode |
| --warning             | Warning threshold for snapshot's age.                                                                                                                         | Mode |
| --critical            | Critical threshold for snapshot's age.                                                                                                                        | Mode |

</TabItem>
<TabItem value="Vm-Status" label="Vm-Status">

| Option                    | Description                                                                                                                                                        | Type |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --vm-hostname             | VM hostname to check. If not set, we check all VMs.                                                                                                                | Mode |
| --filter                  | VM hostname is a regexp.                                                                                                                                           | Mode |
| --filter-description      | Filter also virtual machines description (can be a regexp).                                                                                                        | Mode |
| --filter-os               | Filter also virtual machines OS name (can be a regexp).                                                                                                            | Mode |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                                                                                               | Mode |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                                                                                                  | Mode |
| --scope-host              | Search in following host(s) (can be a regexp).                                                                                                                     | Mode |
| --unknown-status          | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   | Mode |
| --warning-status          | Set warning threshold for status. You can use the following variables: %{connection\_state}                                                                        | Mode |
| --critical-status         | Set critical threshold for status. You can use the following variables: %{connection\_state}, %{power\_state}                                                      | Mode |
| --unknown-overall-status  | Set unknown threshold for status (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}                               | Mode |
| --warning-overall-status  | Set warning threshold for status (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}                             | Mode |
| --critical-overall-status | Set critical threshold for status (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}                               | Mode |

</TabItem>
<TabItem value="Vm-Swap" label="Vm-Swap">

| Option                | Description                                                                                                                                                                                             | Type |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --vm-hostname         | VM hostname to check. If not set, we check all VMs.                                                                                                                                                     | Mode |
| --filter              | VM hostname is a regexp.                                                                                                                                                                                | Mode |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                                                                             | Mode |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                 | Mode |
| --scope-datacenter    | Search in following datacenter(s) (can be a regexp).                                                                                                                                                    | Mode |
| --scope-cluster       | Search in following cluster(s) (can be a regexp).                                                                                                                                                       | Mode |
| --scope-host          | Search in following host(s) (can be a regexp).                                                                                                                                                          | Mode |
| --display-description | Display virtual machine description.                                                                                                                                                                    | Mode |
| --unknown-status      | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   | Mode |
| --warning-status      | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              | Mode |
| --critical-status     | Set critical threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             | Mode |
| --warning-*           | Threshold warning. Can be: 'swap-in', 'swap-out'.                                                                                                                                                       | Mode |
| --critical-*          | Threshold critical. Can be: 'swap-in', 'swap-out'.                                                                                                                                                      | Mode |

</TabItem>
<TabItem value="Vm-Thinprovisioning" label="Vm-Thinprovisioning">

| Option                    | Description                                                                                  | Type |
|:--------------------------|:---------------------------------------------------------------------------------------------|:-----|
| --vm-hostname             | VM hostname to check. If not set, we check all VMs.                                          | Mode |
| --filter                  | VM hostname is a regexp.                                                                     | Mode |
| --filter-description      | Filter also virtual machines description (can be a regexp).                                  | Mode |
| --filter-os               | Filter also virtual machines OS name (can be a regexp).                                      | Mode |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                         | Mode |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                            | Mode |
| --scope-host              | Search in following host(s) (can be a regexp).                                               | Mode |
| --disconnect-status       | Status if VM disconnected (default: 'unknown').                                              | Mode |
| --nopoweredon-skip        | Skip check if VM is not poweredOn.                                                           | Mode |
| --display-description     | Display virtual machine description.                                                         | Mode |
| --thinprovisioning-status | Thinprovisioning status (default: none) Example: 'active,CRITICAL' or 'notactive,WARNING'    | Mode |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Option                      | Description                                                   | Type |
|:----------------------------|:--------------------------------------------------------------|:-----|
| --vm-hostname               | VM hostname to check. If not set, we check all VMs.           | Mode |
| --filter                    | VM hostname is a regexp.                                      | Mode |
| --filter-description        | Filter also virtual machines description (can be a regexp).   | Mode |
| --filter-os                 | Filter also virtual machines OS name (can be a regexp).       | Mode |
| --scope-datacenter          | Search in following datacenter(s) (can be a regexp).          | Mode |
| --scope-cluster             | Search in following cluster(s) (can be a regexp).             | Mode |
| --scope-host                | Search in following host(s) (can be a regexp).                | Mode |
| --disconnect-status         | Status if VM disconnected (default: 'unknown').               | Mode |
| --nopoweredon-skip          | Skip check if VM is not poweredOn.                            | Mode |
| --empty-continue            | Ask to the connector that an empty response is ok.            | Mode |
| --display-description       | Display virtual machine description.                          | Mode |
| --tools-notinstalled-status | Status if vmtools is not installed (default: critical).       | Mode |
| --tools-notrunning-status   | Status if vmtools is not running (default: critical).         | Mode |
| --tools-notup2date-status   | Status if vmtools is not upd2date (default: warning).         | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=cpu-vm \
    --help
```
