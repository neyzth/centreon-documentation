---
id: cloud-aws-ec2
title: Amazon EC2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Amazon EC2** brings 3 host templates:

* **Cloud-Aws-Ec2-Asg-custom**
* **Cloud-Aws-Ec2-Instance-custom**
* **Cloud-Aws-Ec2-Spot-Fleet-Request-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-Ec2-Asg-custom" label="Cloud-Aws-Ec2-Asg-custom">

| Service Alias  | Service Template                    | Service Description          |
|:---------------|:------------------------------------|:-----------------------------|
| Ec2-Cpu-Credit | Cloud-Aws-Ec2-Cpu-Credit-Api-custom | Check CPU credits usage      |
| Ec2-Cpu-Usage  | Cloud-Aws-Ec2-Cpu-Usage-Api-custom  | Check CPU usage              |
| Ec2-Network    | Cloud-Aws-Ec2-Network-Api-custom    | Check network usage          |
| Ec2-Status     | Cloud-Aws-Ec2-Status-Api-custom     | Check internal checks status |

> The services listed above are created automatically when the **Cloud-Aws-Ec2-Asg** host template is used.

</TabItem>
<TabItem value="Cloud-Aws-Ec2-Instance-custom" label="Cloud-Aws-Ec2-Instance-custom">

| Service Alias  | Service Template                    | Service Description          |
|:---------------|:------------------------------------|:-----------------------------|
| Ec2-Cpu-Credit | Cloud-Aws-Ec2-Cpu-Credit-Api-custom | Check CPU credits usage      |
| Ec2-Cpu-Usage  | Cloud-Aws-Ec2-Cpu-Usage-Api-custom  | Check CPU usage              |
| Ec2-Diskio     | Cloud-Aws-Ec2-Diskio-Api-custom     | Check disks I                |
| Ec2-Network    | Cloud-Aws-Ec2-Network-Api-custom    | Check network usage          |
| Ec2-Status     | Cloud-Aws-Ec2-Status-Api-custom     | Check internal checks status |

> The services listed above are created automatically when the **Cloud-Aws-Ec2-Instance** host template is used.

</TabItem>
<TabItem value="Cloud-Aws-Ec2-Spot-Fleet-Request-custom" label="Cloud-Aws-Ec2-Spot-Fleet-Request-custom">

| Service Alias            | Service Template                    | Service Description                                                 |
|:-------------------------|:------------------------------------|:--------------------------------------------------------------------|
| EC2Spot-Active-Instances | Cloud-Aws-Ec2-Spot-Instances-custom | Check number of active instances associated to a Spot fleet request |

> The services listed above are created automatically when the **Cloud-Aws-Ec2-Spot-Fleet-Request** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias               | Service Template                                 | Service Description         |
|:----------------------------|:-------------------------------------------------|:----------------------------|
| Ec2-Asg-Status-Global       | Cloud-Aws-Ec2-Asg-Status-Global-Api-custom       | Check ASG status            |
| Ec2-Instances-Status-Global | Cloud-Aws-Ec2-Instances-Status-Global-Api-custom | Check instances status      |
| Ec2-Instances-Types-Global  | Cloud-Aws-Ec2-Instances-Types-Global-Api-custom  | Check instances types count |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then appy the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                             |
|:----------------|:----------------------------------------|
| Amazon AWS EC2  | Discover Amazon AWS EC2 instances       |
| Amazon AWS ASG  | Discover Amazon AWS Auto Scaling Groups |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="EC2Spot-Active-Instances" label="EC2Spot-Active-Instances">

| Metric name                        | Unit  |
|:-----------------------------------|:------|
| ec2.spot.instances.active.count    | count |
| ec2.spot.instances.healthy.count   | count |
| ec2.spot.instances.unhealthy.count | count |

</TabItem>
<TabItem value="Ec2-Asg-Status-Global" label="Ec2-Asg-Status-Global">

| Metric name                            | Unit  |
|:---------------------------------------|:------|
| aws_asg#ec2.asg.instance.current.count | count |
| aws_instances#instances                |       |

</TabItem>
<TabItem value="Ec2-Cpu-Credit" label="Ec2-Cpu-Credit">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| ec2.cpu.utilization.percentage       |       |
| ec2.cpu.credit.balance.count         | count |
| ec2.cpu.credit.usage.count           | count |
| ec2.cpu.credit.surplus.balance.count | count |
| ec2.cpu.credit.surplus.charged.count | count |

</TabItem>
<TabItem value="Ec2-Cpu-Usage" label="Ec2-Cpu-Usage">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| ec2.cpu.utilization.percentage       |       |
| ec2.cpu.credit.balance.count         | count |
| ec2.cpu.credit.usage.count           | count |
| ec2.cpu.credit.surplus.balance.count | count |
| ec2.cpu.credit.surplus.charged.count | count |

</TabItem>
<TabItem value="Ec2-Diskio" label="Ec2-Diskio">

| Metric name                | Unit  |
|:---------------------------|:------|
| ec2.disk.bytes.read.bytes  | B     |
| ec2.disk.bytes.write.bytes | B     |
| ec2.disk.ops.read.count    | count |
| ec2.disk.ops.write.count   | count |
| ec2.disk.bytes.read.bytes  | B     |
| ec2.ebs.bytes.write.bytes  | B     |
| ec2.ebs.ops.read.count     | count |
| ec2.ebs.ops.write.count    | count |

</TabItem>
<TabItem value="Ec2-Instances-Status-Global" label="Ec2-Instances-Status-Global">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| ec2.instances.status.pending.count      | count |
| ec2.instances.status.running.count      | count |
| ec2.instances.status.shuttingdown.count | count |
| ec2.instances.status.terminated.count   | count |
| ec2.instances.status.stopping.count     | count |
| ec2.instances.status.stopped.count      | count |
| aws_instances#status                    | N/A   |
| aws_instances#ec2.uptime.days           | d     |

</TabItem>
<TabItem value="Ec2-Instances-Types-Global" label="Ec2-Instances-Types-Global">

Coming soon

</TabItem>
<TabItem value="Ec2-Network" label="Ec2-Network">

| Metric name                   | Unit  |
|:------------------------------|:------|
| ec2.network.in.bytes          | B     |
| ec2.network.out.bytes         | B     |
| ec2.network.packets.in.count  | count |
| ec2.network.packets.out.count | count |

</TabItem>
<TabItem value="Ec2-Status" label="Ec2-Status">

Coming soon

</TabItem>
</Tabs>

## Prerequisites

### AWS Configuration

Configure a service account (access/secret key combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| XXXXX:XXXXXXXXXXXXXXXX         | Get XXXXX.                                                      |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EC2 namespace on Cloudwatch.           |

### Plugin dependencies

To interact with the Amazon APIs, you can use either use the *awscli* binary provided by Amazon or *paws*, a Perl AWS SDK (recommended). You must install it on every poller expected to monitor AWS resources.

> For now, it is not possible to use *paws* if you are using a proxy to reach the AWS Cloudwatch APIs.

<Tabs groupId="sync">
<TabItem value="perl-Paws-installation" label="perl-Paws-installation">

```bash
yum install perl-Paws
```

</TabItem>
<TabItem value="aws-cli-installation" label="aws-cli-installation">

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

</TabItem>
</Tabs>

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
dnf install centreon-pack-cloud-aws-ec2
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-aws-ec2
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-aws-ec2
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-ec2
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Amazon EC2** connector through
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
dnf install centreon-plugin-Cloud-Aws-Ec2-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Aws-Ec2-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-aws-ec2-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Ec2-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-Ec2-Asg-custom" label="Cloud-Aws-Ec2-Asg-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-Ec2-Asg-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                   | Default value     | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| AWSACCESSKEY    | Set AWS access key                                                                                            |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                             |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways  to get the an information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name                                                                                         |                   |             |
| AWSINSTANCETYPE | Set the instance type                                                                                         | asg               |             |
| AWSREGION       | Set the region name                                                                                           |                   |             |
| AWSSECRETKEY    | Set AWS secret key                                                                                            |                   |             |
| PROXYURL        | Proxy URL if any                                                                                              |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)         |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Aws-Ec2-Instance-custom" label="Cloud-Aws-Ec2-Instance-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-Ec2-Instance-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                   | Default value     | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| AWSACCESSKEY    | Set AWS access key                                                                                            |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                             |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways  to get the an information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name                                                                                         |                   |             |
| AWSINSTANCETYPE | Set the instance type                                                                                         | instance          |             |
| AWSREGION       | Set the region name                                                                                           |                   |             |
| AWSSECRETKEY    | Set AWS secret key                                                                                            |                   |             |
| PROXYURL        | Proxy URL if any                                                                                              |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)         |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Aws-Ec2-Spot-Fleet-Request-custom" label="Cloud-Aws-Ec2-Spot-Fleet-Request-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-Ec2-Spot-Fleet-Request-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro              | Description                                                                                                   | Default value     | Mandatory   |
|:-------------------|:--------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| AWSACCESSKEY       | Set AWS access key                                                                                            |                   |             |
| AWSCUSTOMMODE      | When a plugin offers several ways  to get the an information the desired one must be defined with this option | awscli            |             |
| AWSREGION          | Set the region name                                                                                           |                   |             |
| AWSSECRETKEY       | Set AWS secret key                                                                                            |                   |             |
| PROXYURL           |                                                                                                               |                   |             |
| SPOTFLEETREQUESTID |                                                                                                               |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)         |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="EC2Spot-Active-Instances" label="EC2Spot-Active-Instances">

| Macro             | Description                                                                                         | Default value     | Mandatory   |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGACTIVE     | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'                       |                   |             |
| CRITICALACTIVE    | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'                       |                   |             |
| WARNINGHEALTHY    | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'                       |                   |             |
| CRITICALHEALTHY   | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'                       |                   |             |
| WARNINGUNHEALTHY  | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'                       |                   |             |
| CRITICALUNHEALTHY | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'                       |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Ec2-Asg-Status-Global" label="Ec2-Asg-Status-Global">

| Macro             | Description                                                                                                                                                             | Default value                                         | Mandatory   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:------------|
| FILTERASG         | Filter by autoscaling group name (can be a regexp)                                                                                                                      | .*                                                    |             |
| WARNINGCOUNT      | Threshold warning about number of instances in the autoscaling group                                                                                                    |                                                       |             |
| CRITICALCOUNT     | Threshold critical about number of instances in the autoscaling group                                                                                                   |                                                       |             |
| CRITICALINSTANCES | Set critical threshold for instances states (Default: '%{health} =~ /Healthy/ && %{lifecycle} !~ /InService/'). Can use special variables like: %{health}, %{lifecycle} | %{health} =~ /Healthy/ && %{lifecycle} !~ /InService/ |             |
| WARNINGINSTANCES  | Set warning threshold for status (Default: ''). Can use special variables like: %{health}, %{lifecycle}                                                                 |                                                       |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                     | --verbose                                             |             |

</TabItem>
<TabItem value="Ec2-Cpu-Credit" label="Ec2-Cpu-Credit">

| Macro                           | Description                                                                                                                                              | Default value     | Mandatory   |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERMETRIC                    | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', 'CPUSurplusCreditBalance', 'CPUSurplusCreditsCharged', 'CPUUtilization') (Can be a regexp) | Credit            |             |
| STATISTIC                       |                                                                                                                                                          | average           |             |
| TIMEFRAME                       |                                                                                                                                                          | 600               |             |
| PERIOD                          |                                                                                                                                                          | 60                |             |
| WARNINGCPUCREDITBALANCE         | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITBALANCE        | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITSURPLUSBALANCE  | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITSURPLUSBALANCE | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITSURPLUSCHARGED  | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITSURPLUSCHARGED | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITUSAGE           | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITUSAGE          | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUUTILIZATION           | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUUTILIZATION          | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                      | --verbose         |             |

</TabItem>
<TabItem value="Ec2-Cpu-Usage" label="Ec2-Cpu-Usage">

| Macro                               | Description                                                                                                                                              | Default value     | Mandatory   |
|:------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERMETRIC                        | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', 'CPUSurplusCreditBalance', 'CPUSurplusCreditsCharged', 'CPUUtilization') (Can be a regexp) | Utilization       |             |
| STATISTIC                           |                                                                                                                                                          | average           |             |
| TIMEFRAME                           |                                                                                                                                                          | 600               |             |
| PERIOD                              |                                                                                                                                                          | 60                |             |
| WARNINGCPUCREDITBALANCE             | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITBALANCE            | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITSURPLUSBALANCE      | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITSURPLUSBALANCE     | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITSURPLUSCHARGED      | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITSURPLUSCHARGED     | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITUSAGE               | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITUSAGE              | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITUTILIZATIONAVERAGE  |                                                                                                                                                          | 80                |             |
| CRITICALCPUCREDITUTILIZATIONAVERAGE |                                                                                                                                                          | 90                |             |
| WARNINGCPUUTILIZATION               | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUUTILIZATION              | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                      | --verbose         |             |

</TabItem>
<TabItem value="Ec2-Diskio" label="Ec2-Diskio">

| Macro                  | Description                                                                                                                                                        | Default value       | Mandatory   |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:------------|
| STATISTIC              |                                                                                                                                                                    | average             |             |
| TIMEFRAME              |                                                                                                                                                                    | 600                 |             |
| PERIOD                 |                                                                                                                                                                    | 60                  |             |
| FILTERMETRIC           | Filter metrics (Can be: 'DiskReadBytes', 'DiskWriteBytes', 'DiskReadOps', 'DiskWriteOps') (Can be a regexp)                                                        |                     |             |
| WARNINGDISKBYTESREAD   | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| CRITICALDISKBYTESREAD  | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| WARNINGDISKBYTESWRITE  | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| CRITICALDISKBYTESWRITE | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| WARNINGDISKOPSREAD     | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| CRITICALDISKOPSREAD    | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| WARNINGDISKOPSWRITE    | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| CRITICALDISKOPSWRITE   | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                | --per-sec --verbose |             |

</TabItem>
<TabItem value="Ec2-Instances-Status-Global" label="Ec2-Instances-Status-Global">

| Macro                | Description                                                                                         | Default value     | Mandatory   |
|:---------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERINSTANCEID     | Filter by instance id (can be a regexp)                                                             | .*                |             |
| WARNINGPENDING       | Thresholds                                                                                          |                   |             |
| CRITICALPENDING      | Thresholds                                                                                          |                   |             |
| WARNINGRUNNING       | Thresholds                                                                                          |                   |             |
| CRITICALRUNNING      | Thresholds                                                                                          |                   |             |
| WARNINGSHUTTINGDOWN  | Thresholds                                                                                          |                   |             |
| CRITICALSHUTTINGDOWN | Thresholds                                                                                          |                   |             |
| WARNINGSTATUS        | Set warning threshold for status. You can use the following variables: %{state}, %{display}         |                   |             |
| CRITICALSTATUS       | Set critical threshold for status. You can use the following variables: %{state}, %{display}        |                   |             |
| WARNINGSTOPPED       | Thresholds                                                                                          |                   |             |
| CRITICALSTOPPED      | Thresholds                                                                                          |                   |             |
| WARNINGSTOPPING      | Thresholds                                                                                          |                   |             |
| CRITICALSTOPPING     | Thresholds                                                                                          |                   |             |
| WARNINGTERMINATED    | Thresholds                                                                                          |                   |             |
| CRITICALTERMINATED   | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Ec2-Instances-Types-Global" label="Ec2-Instances-Types-Global">

| Macro        | Description                                                                                           | Default value     | Mandatory   |
|:-------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERFAMILY | Filter by instance family (regexp) (Can be: 'general', 'compute', 'memory', 'storage', 'accelerated') | .*                |             |
| FILTERTYPE   | Filter by instance type (regexp)                                                                      | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)   | --verbose         |             |

</TabItem>
<TabItem value="Ec2-Network" label="Ec2-Network">

| Macro                     | Description                                                                                                   | Default value       | Mandatory   |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------|:--------------------|:------------|
| STATISTIC                 |                                                                                                               | average             |             |
| TIMEFRAME                 |                                                                                                               | 600                 |             |
| PERIOD                    |                                                                                                               | 60                  |             |
| FILTERMETRIC              | Filter metrics (Can be: 'NetworkIn', 'NetworkOut', 'NetworkPacketsIn', 'NetworkPacketsOut') (Can be a regexp) |                     |             |
| WARNINGNETWORKIN          | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| CRITICALNETWORKIN         | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| WARNINGNETWORKOUT         | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| CRITICALNETWORKOUT        | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| WARNINGNETWORKPACKETSIN   | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| CRITICALNETWORKPACKETSIN  | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| WARNINGNETWORKPACKETSOUT  | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| CRITICALNETWORKPACKETSOUT | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)           | --per-sec --verbose |             |

</TabItem>
<TabItem value="Ec2-Status" label="Ec2-Status">

| Macro          | Description                                                                                                                                                | Default value     | Mandatory   |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGSTATUS  | Set warning threshold for status. You can use the following variables: %{status}. 'status' can be: 'passed', 'failed'                                      |                   |             |
| CRITICALSTATUS | Set critical threshold for status (Default: '%{status} =~ /failed/i'). You can use the following variables: %{status}. 'status' can be: 'passed', 'failed' |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                        | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor an AWS Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins//centreon_aws_ec2_api.pl \
	--plugin=cloud::aws::ec2::plugin \
	--mode=cpu \
	--custommode='awscli' \
	--aws-secret-key='' \
	--aws-access-key='' \
	--aws-role-arn='' \
	--region='' \
	--type='asg' \
	--name='' \
	--proxyurl=''  \
	--filter-metric='Credit' \
	--statistic='average' \
	--timeframe='600' \
	--period='60' \
	--warning-cpu-credit-usage='' \
	--critical-cpu-credit-usage='' \
	--warning-cpu-credit-surplus-charged='' \
	--critical-cpu-credit-surplus-charged='' \
	--warning-cpu-credit-balance='' \
	--critical-cpu-credit-balance='' \
	--warning-cpu-utilization='' \
	--critical-cpu-utilization='' \
	--warning-cpu-credit-surplus-balance='' \
	--critical-cpu-credit-surplus-balance='' \
	--verbose\
	
```

The expected command output is shown below:

```bash
OK: CPU Utilization CPU Credit Balance CPU Credit Usage CPU Surplus Credit Balance CPU Surplus Credit Charged | 'ec2.cpu.utilization.percentage'=85;;;; 'ec2.cpu.credit.balance.count'=11;;;; 'ec2.cpu.credit.usage.count'=0;;;; 'ec2.cpu.credit.surplus.balance.count'=66;;;; 'ec2.cpu.credit.surplus.charged.count'=64;;;; 
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_ec2_api.pl \
	--plugin=cloud::aws::ec2::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode                     | Linked service template                                                     |
|:-------------------------|:----------------------------------------------------------------------------|
| asg-status               | Cloud-Aws-Ec2-Asg-Status-Global-Api-custom                                  |
| cpu                      | Cloud-Aws-Ec2-Cpu-Credit-Api-custom<br />Cloud-Aws-Ec2-Cpu-Usage-Api-custom |
| discovery                | Used for host discovery                                                     |
| discovery-fleet-requests | Not used in this Monitoring Connector                                       |
| diskio                   | Cloud-Aws-Ec2-Diskio-Api-custom                                             |
| instances-status         | Cloud-Aws-Ec2-Instances-Status-Global-Api-custom                            |
| instances-types          | Cloud-Aws-Ec2-Instances-Types-Global-Api-custom                             |
| list-asg                 | Not used in this Monitoring Connector                                       |
| list-instances           | Not used in this Monitoring Connector                                       |
| list-spot-fleet-requests | Not used in this Monitoring Connector                                       |
| network                  | Cloud-Aws-Ec2-Network-Api-custom                                            |
| spot-active-instances    | Cloud-Aws-Ec2-Spot-Instances-custom                                         |
| status                   | Cloud-Aws-Ec2-Status-Api-custom                                             |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_ec2_api.pl \
	--plugin=cloud::aws::ec2::plugin \
    --list-custommode
```

The plugin brings the following custom modes:

* awscli
* paws

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

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="awscli" label="awscli">

| Option              | Description                                                                                                                                                                                                                           | Type   |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --aws-secret-key    | Set AWS secret key.                                                                                                                                                                                                                   | Awscli |
| --aws-access-key    | Set AWS access key.                                                                                                                                                                                                                   | Awscli |
| --aws-session-token | Set AWS session token.                                                                                                                                                                                                                | Awscli |
| --aws-role-arn      | Set arn of the role to be assumed.                                                                                                                                                                                                    | Awscli |
| --aws-profile       | Set AWS profile.                                                                                                                                                                                                                      | Awscli |
| --endpoint-url      | Override AWS service endpoint URL if necessary.                                                                                                                                                                                       | Awscli |
| --region            | Set the region name (Required).                                                                                                                                                                                                       | Awscli |
| --period            | Set period in seconds.                                                                                                                                                                                                                | Awscli |
| --timeframe         | Set timeframe in seconds.                                                                                                                                                                                                             | Awscli |
| --statistic         | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                                                                                                                                                           | Awscli |
| --zeroed            | Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.                                                                                                                                        | Awscli |
| --timeout           | Set timeout in seconds (Default: 50).                                                                                                                                                                                                 | Awscli |
| --sudo              | Use 'sudo' to execute the command.                                                                                                                                                                                                    | Awscli |
| --command           | Command to get information (Default: 'aws'). Can be changed if you have output in a file.                                                                                                                                             | Awscli |
| --command-path      | Command path (Default: none).                                                                                                                                                                                                         | Awscli |
| --command-options   | Command options (Default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                          | Awscli |
| --proxyurl          | Proxy URL if any                                                                                                                                                                                                                      | Awscli |
| --skip-ssl-check    | Avoid certificate issuer verification. Useful when AWS resources are hosted by a third-party.  Note that it strips all stderr from the command result. Will be enhanced someday. Debug will only display CLI instead of evreything.   | Awscli |

</TabItem>
<TabItem value="paws" label="paws">

| Option              | Description                                                                                      | Type |
|:--------------------|:-------------------------------------------------------------------------------------------------|:-----|
| --aws-secret-key    | Set AWS secret key.                                                                              | Paws |
| --aws-access-key    | Set AWS access key.                                                                              | Paws |
| --aws-session-token | Set AWS session token.                                                                           | Paws |
| --aws-role-arn      | Set arn of the role to be assumed.                                                               | Paws |
| --region            | Set the region name (Required).                                                                  | Paws |
| --period            | Set period in seconds.                                                                           | Paws |
| --timeframe         | Set timeframe in seconds.                                                                        | Paws |
| --statistic         | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                      | Paws |
| --zeroed            | Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.   | Paws |
| --proxyurl          | Proxy URL if any                                                                                 | Paws |

</TabItem>
</Tabs>

#### Modes options

All modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="EC2Spot-Active-Instances" label="EC2Spot-Active-Instances">

| Option                   | Description                                                                      | Type |
|:-------------------------|:---------------------------------------------------------------------------------|:-----|
| --warning-* --critical-* | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'    | Mode |

</TabItem>
<TabItem value="Ec2-Asg-Status-Global" label="Ec2-Asg-Status-Global">

| Option                          | Description                                                                                                                                                               | Type |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-counters               | Only display some counters (regexp can be used). Possible values: asg / instances                                                                                         | Mode |
| --filter-asg                    | Filter by autoscaling group name (can be a regexp).                                                                                                                       | Mode |
| --warning-instances             | Set warning threshold for status (Default: ''). Can use special variables like: %{health}, %{lifecycle}                                                                   | Mode |
| --critical-instances            | Set critical threshold for instances states (Default: '%{health} =~ /Healthy/ && %{lifecycle} !~ /InService/'). Can use special variables like: %{health}, %{lifecycle}   | Mode |
| --warning-asg-instance-current  | Threshold warning about number of instances in the autoscaling group                                                                                                      | Mode |
| --critical-asg-instance-current | Threshold critical about number of instances in the autoscaling group                                                                                                     | Mode |

</TabItem>
<TabItem value="Ec2-Cpu-Credit" label="Ec2-Cpu-Credit">

| Option                   | Description                                                                                                                                                 | Type |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --type                   | Set the instance type (Required) (Can be: 'asg', 'instance').                                                                                               | Mode |
| --name                   | Set the instance name (Required) (can be defined multipletimes).                                                                                            | Mode |
| --filter-metric          | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', 'CPUSurplusCreditBalance', 'CPUSurplusCreditsCharged', 'CPUUtilization') (Can be a regexp).   | Mode |
| --warning-* --critical-* | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization').        | Mode |

</TabItem>
<TabItem value="Ec2-Cpu-Usage" label="Ec2-Cpu-Usage">

| Option                   | Description                                                                                                                                                 | Type |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --type                   | Set the instance type (Required) (Can be: 'asg', 'instance').                                                                                               | Mode |
| --name                   | Set the instance name (Required) (can be defined multipletimes).                                                                                            | Mode |
| --filter-metric          | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', 'CPUSurplusCreditBalance', 'CPUSurplusCreditsCharged', 'CPUUtilization') (Can be a regexp).   | Mode |
| --warning-* --critical-* | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization').        | Mode |

</TabItem>
<TabItem value="Ec2-Diskio" label="Ec2-Diskio">

| Option                   | Description                                                                                                                                                           | Type |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --type                   | Set the instance type (Required) (Can be: 'asg', 'instance').                                                                                                         | Mode |
| --name                   | Set the instance name (Required) (can be defined multipletimes).                                                                                                      | Mode |
| --add-ebs-metrics        | Add EBS metrics ('EBSReadOps', 'EBSWriteOps', 'EBSReadBytes', 'EBSWriteBytes').                                                                                       | Mode |
| --filter-metric          | Filter metrics (Can be: 'DiskReadBytes', 'DiskWriteBytes', 'DiskReadOps', 'DiskWriteOps') (Can be a regexp).                                                          | Mode |
| --warning-* --critical-* | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write').   | Mode |
| --per-sec                | Change the data to be unit/sec.                                                                                                                                       | Mode |

</TabItem>
<TabItem value="Ec2-Instances-Status-Global" label="Ec2-Instances-Status-Global">

| Option                   | Description                                                                                                                                   | Type |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^running$'                                                       | Mode |
| --filter-instanceid      | Filter by instance id (can be a regexp).                                                                                                      | Mode |
| --add-uptime             | Monitor instances uptime.                                                                                                                     | Mode |
| --uptime-unit            | Select the unit for uptime threshold. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is days.   | Mode |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{state}, %{display}                                                   | Mode |
| --critical-status        | Set critical threshold for status. You can use the following variables: %{state}, %{display}                                                  | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'pending', 'running', 'shuttingdown', 'terminated', 'stopping', 'stopped', 'uptime'.                                      | Mode |

</TabItem>
<TabItem value="Ec2-Instances-Types-Global" label="Ec2-Instances-Types-Global">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Type |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-family          | Filter by instance family (regexp) (Can be: 'general', 'compute', 'memory', 'storage', 'accelerated')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Mode |
| --filter-type            | Filter by instance type (regexp)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Mode |
| --warning-* --critical-* | Threshold warning. Can be: 'a1.medium', 'a1.large', 'a1.xlarge', 'a1.2xlarge', 'a1.4xlarge', 'm4.large', 'm4.xlarge', 'm4.2xlarge', 'm4.4xlarge', 'm4.10xlarge', 'm4.16xlarge', 'm5.large', 'm5.xlarge', 'm5.2xlarge', 'm5.4xlarge', 'm5.8xlarge', 'm5.12xlarge', 'm5.16xlarge', 'm5.24xlarge', 'm5.metal', 'm5a.large', 'm5a.xlarge', 'm5a.2xlarge', 'm5a.4xlarge', 'm5a.8xlarge', 'm5a.12xlarge', 'm5a.16xlarge', 'm5a.24xlarge', 'm5ad.large', 'm5ad.xlarge', 'm5ad.2xlarge', 'm5ad.4xlarge', 'm5ad.12xlarge', 'm5ad.24xlarge', 'm5d.large', 'm5d.xlarge', 'm5d.2xlarge', 'm5d.4xlarge', 'm5d.8xlarge', 'm5d.12xlarge', 'm5d.16xlarge', 'm5d.24xlarge', 'm5d.metal', 't2.nano', 't2.micro', 't2.small', 't2.medium', 't2.large', 't2.xlarge', 't2.2xlarge', 't3.nano', 't3.micro', 't3.small', 't3.medium', 't3.large', 't3.xlarge', 't3.2xlarge', 't3a.nano', 't3a.micro', 't3a.small', 't3a.medium', 't3a.large', 't3a.xlarge', 't3a.2xlarge', 'c4.large', 'c4.xlarge', 'c4.2xlarge', 'c4.4xlarge', 'c4.8xlarge', 'c5.large', 'c5.xlarge', 'c5.2xlarge', 'c5.4xlarge', 'c5.9xlarge', 'c5.12xlarge', 'c5.18xlarge', 'c5.24xlarge', 'c5.metal', 'c5d.large', 'c5d.xlarge', 'c5d.2xlarge', 'c5d.4xlarge', 'c5d.9xlarge', 'c5d.18xlarge', 'c5n.large', 'c5n.xlarge', 'c5n.2xlarge', 'c5n.4xlarge', 'c5n.9xlarge', 'c5n.18xlarge', 'r4.large', 'r4.xlarge', 'r4.2xlarge', 'r4.4xlarge', 'r4.8xlarge', 'r4.16xlarge', 'r5.large', 'r5.xlarge', 'r5.2xlarge', 'r5.4xlarge', 'r5.8xlarge', 'r5.12xlarge', 'r5.16xlarge', 'r5.24xlarge', 'r5.metal', 'r5a.large', 'r5a.xlarge', 'r5a.2xlarge', 'r5a.4xlarge', 'r5a.8xlarge', 'r5a.12xlarge', 'r5a.16xlarge', 'r5a.24xlarge', 'r5ad.large', 'r5ad.xlarge', 'r5ad.2xlarge', 'r5ad.4xlarge', 'r5ad.12xlarge', 'r5ad.24xlarge', 'r5d.large', 'r5d.xlarge', 'r5d.2xlarge', 'r5d.4xlarge', 'r5d.8xlarge', 'r5d.12xlarge', 'r5d.16xlarge', 'r5d.24xlarge', 'r5d.metal', 'u-6tb1.metal', 'u-9tb1.metal', 'u-12tb1.metal', 'x1.16xlarge', 'x1.32xlarge', 'x1e.xlarge', 'x1e.2xlarge', 'x1e.4xlarge', 'x1e.8xlarge', 'x1e.16xlarge', 'x1e.32xlarge', 'z1d.large', 'z1d.xlarge', 'z1d.2xlarge', 'z1d.3xlarge', 'z1d.6xlarge', 'z1d.12xlarge', 'z1d.metal', 'd2.xlarge', 'd2.2xlarge', 'd2.4xlarge', 'd2.8xlarge', 'h1.2xlarge', 'h1.4xlarge', 'h1.8xlarge', 'h1.16xlarge', 'i3.large', 'i3.xlarge', 'i3.2xlarge', 'i3.4xlarge', 'i3.8xlarge', 'i3.16xlarge', 'i3.metal', 'i3en.large', 'i3en.xlarge', 'i3en.2xlarge', 'i3en.3xlarge', 'i3en.6xlarge', 'i3en.12xlarge', 'i3en.24xlarge','f1.2xlarge', 'f1.4xlarge', 'f1.16xlarge', 'g3s.xlarge', 'g3.4xlarge', 'g3.8xlarge', 'g3.16xlarge', 'p2.xlarge', 'p2.8xlarge', 'p2.16xlarge', 'p3.2xlarge', 'p3.8xlarge', 'p3.16xlarge', 'p3dn.24xlarge'.   | Mode |
| --running                | Only check running instances.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Mode |

</TabItem>
<TabItem value="Ec2-Network" label="Ec2-Network">

| Option                   | Description                                                                                                      | Type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------|:-----|
| --type                   | Set the instance type (Required) (Can be: 'asg', 'instance').                                                    | Mode |
| --name                   | Set the instance name (Required) (can be defined multipletimes).                                                 | Mode |
| --filter-metric          | Filter metrics (Can be: 'NetworkIn', 'NetworkOut', 'NetworkPacketsIn', 'NetworkPacketsOut') (Can be a regexp).   | Mode |
| --warning-* --critical-* | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'.             | Mode |
| --per-sec                | Change the data to be unit/sec.                                                                                  | Mode |

</TabItem>
<TabItem value="Ec2-Status" label="Ec2-Status">

| Option            | Description                                                                                                                                                    | Type |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --type            | Set the instance type (Required) (Can be: 'asg', 'instance').                                                                                                  | Mode |
| --name            | Set the instance name (Required) (can be defined multipletimes).                                                                                               | Mode |
| --warning-status  | Set warning threshold for status. You can use the following variables: %{status}. 'status' can be: 'passed', 'failed'.                                         | Mode |
| --critical-status | Set critical threshold for status (Default: '%{status} =~ /failed/i'). You can use the following variables: %{status}. 'status' can be: 'passed', 'failed'.    | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_ec2_api.pl \
	--plugin=cloud::aws::ec2::plugin \
	--mode=cpu \
    --help
```
