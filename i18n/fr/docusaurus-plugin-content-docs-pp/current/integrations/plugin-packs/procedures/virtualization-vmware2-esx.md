---
id: virtualization-vmware2-esx
title: VMware ESX
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **VMware ESX** apporte un modèle d'hôte :

* **Virt-VMWare2-ESX-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Virt-VMWare2-ESX-custom" label="Virt-VMWare2-ESX-custom">

| Alias        | Modèle de service                        | Description                                                                          |
|:-------------|:-----------------------------------------|:-------------------------------------------------------------------------------------|
| Esx-Cpu      | Virt-VMWare2-ESX-Cpu-Generic-custom      | Contrôle permettant de vérifier le taux d'utilisation CPU d'un serveur ESX           |
| Esx-Health   | Virt-VMWare2-ESX-Health-Generic-custom   | Contrôle permettant de vérifier les sondes matériels et processeurs d'un serveur ESX |
| Esx-Memory   | Virt-VMWare2-ESX-Memory-Generic-custom   | Contrôle permettant de vérifier le taux d'utilisation mémoire d'un serveur ESX       |
| Esx-Status   | Virt-VMWare2-ESX-Status-Generic-custom   | Contrôle permettant de vérifier l'état global d'un serveur ESX                       |
| Esx-Swap     | Virt-VMWare2-ESX-Swap-Generic-custom     | Contrôle permettant de vérifier si une machine virtuelle swappe sur le serveur ESX   |
| Esx-Vm-Count | Virt-VMWare2-ESX-Vm-Count-Generic-custom | Contrôle permettant de vérifier le nombre de machines virtuelles allumées            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-VMWare2-ESX** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                  | Modèle de service                                  | Description                                                                                                                          | Découverte |
|:-----------------------|:---------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:-----------|
| Datastore-Io           | Virt-VMWare2-Datastore-Io-Generic-custom           | Contrôle permettant de vérifier le taux d'utilisation en Kbps d'un datastore                                                         |            |
| Datastore-Iops         | Virt-VMWare2-Datastore-Iops-Generic-custom         | Contrôle permettant de vérifier les IOPs moyens d'un datastore                                                                       |            |
| Datastore-Snapshots    | Virt-VMWare2-Datastore-Snapshots-Generic-custom    | Contrôle permettant de vérifier le taux d'utilisation des snapshots sur un datastore                                                 |            |
| Datastore-Usage        | Virt-VMWare2-Datastore-Usage-Generic-custom        | Contrôle permettant de vérifier le taux d'utilisation d'un datastore                                                                 |            |
| Datastore-Vm-Count     | Virt-VMWare2-Datastore-Vm-Count-Generic-custom     | Contrôle permettant de vérifier le nombre de machines virtuelles allumées                                                            |            |
| ESX-Alarms             | Virt-VMWare2-ESX-Alarms-Generic-custom             | Contrôle permettant de vérifier les alarmes d'un ESX                                                                                 |            |
| Esx-Datastores-Latency | Virt-VMWare2-ESX-Datastores-Latency-Generic-custom | Contrôle permettant de vérifier la latence rencontré par le serveur ESX sur ses datastores                                           | X          |
| Esx-Service            | Virt-VMWare2-ESX-Service-Generic-custom            | Contrôle permettant de vérifier l'état des services d'un serveur ESX                                                                 |            |
| Esx-Storage            | Virt-VMWare2-ESX-Storage-Generic-custom            | Contrôle permettant de vérifier les informations de stockage                                                                         |            |
| Esx-Time               | Virt-VMWare2-ESX-Time-Generic-custom               | Contrôle permettant de vérifier le décalage de temps d'un serveur ESX                                                                |            |
| Esx-Traffic            | Virt-VMWare2-ESX-Traffic-Generic-custom            | Contrôle permettant de vérifier le taux d'utilisation des interfaces réseaux physiques d'un serveur ESX. Les seuils sont en pourcent | X          |
| Esx-Uptime             | Virt-VMWare2-ESX-Uptime-Generic-custom             | Contrôle permettant de récuperer l'uptime en jours d'un serveur ESX                                                                  |            |
| Esx-is-Maintenance     | Virt-VMWare2-ESX-Maintenance-Generic-custom        | Contrôle permettant de vérifier le mode de maintenance d'un serveur ESX                                                              |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description         |
|:----------------|:--------------------|
| VMWare ESX      | Discover VMWare ESX |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de service

| Nom de la règle                          | Description                                                   |
|:-----------------------------------------|:--------------------------------------------------------------|
| Virt-VMWare2-Esx-Datastores-Latency-Name |                                                               |
| Virt-VMWare2-Esx-Nics-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Datastore-Io" label="Datastore-Io">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| datastore.read.usage.bytespersecond            | B/s   |
| datastore.write.usage.bytespersecond           | B/s   |
| datastore#status                               | N/A   |
| datastore#datastore.read.usage.bytespersecond  | B/s   |
| datastore#datastore.write.usage.bytespersecond | B/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Datastore-Iops" label="Datastore-Iops">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| datastores.read.usage.iops                 | iops  |
| datastores.write.usage.iops                | iops  |
| datastore~status                           | N/A   |
| datastore~datastore.read.usage.iops        | iops  |
| datastore~datastore.write.usage.iops       | iops  |
| datastore~vm#datastore.vm.read.usage.iops  | iops  |
| datastore~vm#datastore.vm.write.usage.iops | iops  |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Datastore-Snapshots" label="Datastore-Snapshots">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| datastore~status                               | N/A   |
| datastore~datastore.snapshots.usage.bytes      | B     |
| datastore~files#datastore.snapshot.usage.bytes |       |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Datastore-Usage" label="Datastore-Usage">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| datastore#status                            | N/A   |
| datastore#datastore.space.usage.bytes       | B     |
| datastore#datastore.space.free.bytes        | B     |
| datastore#datastore.space.usage.percentage  | %     |
| datastore#datastore.space.provisioned.bytes | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Datastore-Vm-Count" label="Datastore-Vm-Count">

| Métrique                                        | Unité |
|:------------------------------------------------|:------|
| datastore.vm.poweredon.current.count            | count |
| datastore.vm.poweredoff.current.count           | count |
| datastore.vm.suspended.current.count            | count |
| datastore#status                                | N/A   |
| datastore#datastore.vm.poweredon.current.count  | count |
| datastore#datastore.vm.poweredoff.current.count | count |
| datastore#datastore.vm.suspended.current.count  | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="ESX-Alarms" label="ESX-Alarms">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| host.alarms.warning.current.count  | count |
| host.alarms.critical.current.count | count |
| status                             | N/A   |
| alarm-warning                      | N/A   |
| alarm-critical                     | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Cpu" label="Esx-Cpu">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| host~status                                   | N/A   |
| host~host.cpu.utilization.percentage          | %     |
| host~host.cpu.utilization.mhz                 | MHz   |
| host~cpu#host.core.cpu.utilization.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Datastores-Latency" label="Esx-Datastores-Latency">

| Métrique                                                 | Unité |
|:---------------------------------------------------------|:------|
| host~status                                              | N/A   |
| host~datastore#host.datastore.latency.read.milliseconds  | ms    |
| host~datastore#host.datastore.latency.write.milliseconds | ms    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Health" label="Esx-Health">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| host.health.problems.current.count                | count |
| host~status                                       | N/A   |
| host~ok                                           |       |
| host~host.health.problems.current.count           | count |
| host~host.health.yellow.current.count             | count |
| host~host.health.red.current.count                | count |
| host~global_summary#global-summary                |       |
| host~sensors_temp#host.sensor.temperature.celsius | C     |
| host~sensors_fan#host.sensor.fan.speed.rpm        | rpm   |
| host~sensors_voltage#host.sensor.voltage.volt     | V     |
| host~sensors_power#host.sensor.power.watt         | W     |

</TabItem>
<TabItem value="Esx-Memory" label="Esx-Memory">

| Métrique                        | Unité |
|:--------------------------------|:------|
| host#status                     | N/A   |
| host#host.memory.usage.bytes    | B     |
| host#host.memory.overhead.bytes | B     |
| host#host.memory.state.count    | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Service" label="Esx-Service">

| Métrique                    | Unité |
|:----------------------------|:------|
| host~status                 | N/A   |
| host~service#service-status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Status" label="Esx-Status">

| Métrique            | Unité |
|:--------------------|:------|
| host#status         | N/A   |
| host#overall-status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Storage" label="Esx-Storage">

| Métrique                     | Unité |
|:-----------------------------|:------|
| host~status                  | N/A   |
| host~adapters#adapter-status | N/A   |
| host~luns#lun-status         | N/A   |
| host~paths#path-status       | N/A   |

</TabItem>
<TabItem value="Esx-Swap" label="Esx-Swap">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| host#status                             | N/A   |
| host#host.swap.in.usage.bytespersecond  | B/s   |
| host#host.swap.out.usage.bytespersecond | B/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Time" label="Esx-Time">

| Métrique                      | Unité |
|:------------------------------|:------|
| host#status                   | N/A   |
| host#host.time.offset.seconds | s     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Traffic" label="Esx-Traffic">

| Métrique                                             | Unité |
|:-----------------------------------------------------|:------|
| host~status                                          | N/A   |
| host~host.traffic.in.bitsperseconds                  | b/s   |
| host~host.traffic.out.bitsperseconds                 | b/s   |
| host~pnic#link-status                                | N/A   |
| host~pnic#host.traffic.in.bitsperseconds             | b/s   |
| host~pnic#host.traffic.out.bitsperseconds            | b/s   |
| host~pnic#host.packets.in.dropped.percentage         | %     |
| host~pnic#host.packets.out.dropped.percentage        | %     |
| host~vswitch#host.vswitch.traffic.in.bitsperseconds  | b/s   |
| host~vswitch#host.vswitch.traffic.out.bitsperseconds | b/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Uptime" label="Esx-Uptime">

| Métrique                        | Unité |
|:--------------------------------|:------|
| host#status                     | N/A   |
| host#host.uptime.offset.seconds | s     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Vm-Count" label="Esx-Vm-Count">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| host.vm.poweredon.current.count       | count |
| host.vm.poweredoff.current.count      | count |
| host.vm.suspended.current.count       | count |
| host#status                           | N/A   |
| host#host.vm.poweredon.current.count  | count |
| host#host.vm.poweredoff.current.count | count |
| host#host.vm.suspended.current.count  | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-is-Maintenance" label="Esx-is-Maintenance">

| Métrique                | Unité |
|:------------------------|:------|
| host#status             | N/A   |
| host#maintenance-status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Configuration du connecteur Centreon VMWare

Pour la supervision VMWare, centreon utilise un daemon pour se connecter et requêter le vCenter.

Installer le daemon sur tous les pollers :

```
yum install centreon-plugin-Virtualization-VMWare-daemon
```

Pour configurer les accès à votre infrastructure, éditer le fichier
"/etc/centreon/centreon\_vmware.pm" :

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

Assurez vous d'avoir remplacé toutes les variables avec les informations nécessaires :

- _ip\_hostname_: Adresse IP ou nom d'hôte du vCenter ou de l'ESX (s'il est en mode standalone),
- _username_: utilisateur avec un accès "lecture seule" au vCenter ou à l'ESX (vous pouvez utiliser un utilisateur du domaine),
- _password_: le mot de passe de l'utilisateur.

Vous pouvez configurer plusieurs connexions à différents vCenter ou ESX
en utilisant cette structure:

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

Chaque entrée est un **container**.

Pour démarrer le daemon et l'activer au démarrage :

``` bash
systemctl start centreon_vmware
systemctl enable centreon_vmware
```

Vous pouvez vérifiez que votre configuration est fonctionelle en consultant les journaux dans **/var/log/centreon/centreon\_vmware.log**.

### Balises et Attributs personnalisés

> Pour découvrir les balises et les attributs personnalisés, vous devez utiliser la version 3.2.5 de **centreon-vmware-daemon** et ajouter **--tags** dans les options supplémentaires de découverte.             
>Allez à la page **Configuration > Hôtes > Découverte**, et à la 3ème étape (**Définir les paramètres de découverte**), dans la section **Paramètres supplémentaires**, dans le champ **Options supplémentaires**, saisissez **--tags**.

### Flux réseau

Le Collecteur Centreon avec le connecteur VMWare d'installé doit accéder en HTTPS (TCP/443) au vCenter.

Les Collecteurs requêtant le Collecteur avec le connecteur VMWare doivent accéder en TCP/5700 au Collecteur avec le Connecteur VMWare.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-virtualization-vmware2-esx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-vmware2-esx
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-virtualization-vmware2-esx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-vmware2-esx
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **VMware ESX**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

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

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-VMWare2-ESX-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                      | Description                                                                                           | Valeur par défaut | Obligatoire |
|:---------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| CENTREONVMWARECONTAINER    | Container to use                                                                                      | default           |             |
| CENTREONVMWAREHOST         | Connector hostname                                                                                    | localhost         |             |
| CENTREONVMWAREPORT         | Connector port                                                                                        | 5700              |             |
| ESXNAME                    | ESX hostname to check. If not set, we check all ESX                                                   |                   |             |
| CENTREONVMWAREEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Datastore-Io" label="Datastore-Io">

| Macro              | Description                                                                                                                     | Valeur par défaut            | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:------------|
| UNKNOWNSTATUS      | Set unknown threshold for status (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} | %{accessible} !~ /^true|1$/i |             |
| DATASTORENAME      | datastore name to list                                                                                                          |                              |             |
| WARNINGREAD        | Threshold warning                                                                                                               |                              |             |
| CRITICALREAD       | Threshold critical                                                                                                              |                              |             |
| WARNINGSTATUS      | Set warning threshold for status (Default: ''). You can use the following variables: %{accessible}                              |                              |             |
| CRITICALSTATUS     | Set critical threshold for status (Default: ''). You can use the following variables: %{accessible}                             |                              |             |
| WARNINGTOTALREAD   | Threshold warning                                                                                                               |                              |             |
| CRITICALTOTALREAD  | Threshold critical                                                                                                              |                              |             |
| WARNINGTOTALWRITE  | Threshold warning                                                                                                               |                              |             |
| CRITICALTOTALWRITE | Threshold critical                                                                                                              |                              |             |
| WARNINGWRITE       | Threshold warning                                                                                                               |                              |             |
| CRITICALWRITE      | Threshold critical                                                                                                              |                              |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                             |                              |             |

</TabItem>
<TabItem value="Datastore-Iops" label="Datastore-Iops">

| Macro              | Description                                                                                                                     | Valeur par défaut            | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:------------|
| UNKNOWNSTATUS      | Set unknown threshold for status (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} | %{accessible} !~ /^true|1$/i |             |
| DATASTORENAME      | datastore name to list                                                                                                          |                              |             |
| WARNINGREAD        | Thresholds                                                                                                                      |                              |             |
| CRITICALREAD       | Thresholds                                                                                                                      |                              |             |
| WARNINGREADTOTAL   | Thresholds                                                                                                                      |                              |             |
| CRITICALREADTOTAL  | Thresholds                                                                                                                      |                              |             |
| WARNINGREADVM      | Thresholds                                                                                                                      |                              |             |
| CRITICALREADVM     | Thresholds                                                                                                                      |                              |             |
| WARNINGSTATUS      | Set warning threshold for status (Default: ''). You can use the following variables: %{accessible}                              |                              |             |
| CRITICALSTATUS     | Set critical threshold for status (Default: ''). You can use the following variables: %{accessible}                             |                              |             |
| WARNINGWRITE       | Thresholds                                                                                                                      |                              |             |
| CRITICALWRITE      | Thresholds                                                                                                                      |                              |             |
| WARNINGWRITETOTAL  | Thresholds                                                                                                                      |                              |             |
| CRITICALWRITETOTAL | Thresholds                                                                                                                      |                              |             |
| WARNINGWRITEVM     | Thresholds                                                                                                                      |                              |             |
| CRITICALWRITEVM    | Thresholds                                                                                                                      |                              |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                             |                              |             |

</TabItem>
<TabItem value="Datastore-Snapshots" label="Datastore-Snapshots">

| Macro            | Description                                                                                                                     | Valeur par défaut            | Obligatoire |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:------------|
| UNKNOWNSTATUS    | Set unknown threshold for status (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} | %{accessible} !~ /^true|1$/i |             |
| DATASTORENAME    | datastore name to list                                                                                                          |                              |             |
| WARNINGSNAPSHOT  | Threshold warning                                                                                                               |                              |             |
| CRITICALSNAPSHOT | Threshold critical                                                                                                              |                              |             |
| WARNINGSTATUS    | Set warning threshold for status (Default: ''). You can use the following variables: %{accessible}                              |                              |             |
| CRITICALSTATUS   | Set critical threshold for status (Default: ''). You can use the following variables: %{accessible}                             |                              |             |
| WARNINGTOTAL     | Threshold warning                                                                                                               |                              |             |
| CRITICALTOTAL    | Threshold critical                                                                                                              |                              |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                             |                              |             |

</TabItem>
<TabItem value="Datastore-Usage" label="Datastore-Usage">

| Macro               | Description                                                                                                                     | Valeur par défaut            | Obligatoire |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:------------|
| UNKNOWNSTATUS       | Set unknown threshold for status (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} | %{accessible} !~ /^true|1$/i |             |
| UNIT                |                                                                                                                                 | %                            |             |
| DATASTORENAME       | datastore name to list                                                                                                          |                              |             |
| WARNINGPROVISIONED  | Thresholds. : 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'                                                    |                              |             |
| CRITICALPROVISIONED | Thresholds. : 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'                                                    |                              |             |
| WARNINGSTATUS       | Set warning threshold for status (Default: ''). You can use the following variables: %{accessible}                              |                              |             |
| CRITICALSTATUS      | Set critical threshold for status (Default: ''). You can use the following variables: %{accessible}                             |                              |             |
| WARNINGUSAGE        | Thresholds. : 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'                                                    | 80                           |             |
| CRITICALUSAGE       | Thresholds. : 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'                                                    | 90                           |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                             |                              |             |

</TabItem>
<TabItem value="Datastore-Vm-Count" label="Datastore-Vm-Count">

| Macro                  | Description                                                                                                                     | Valeur par défaut            | Obligatoire |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:------------|
| UNKNOWNSTATUS          | Set unknown threshold for status (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} | %{accessible} !~ /^true|1$/i |             |
| DATASTORENAME          | datastore name to check                                                                                                         |                              |             |
| WARNINGOFF             | Threshold warning                                                                                                               |                              |             |
| CRITICALOFF            | Threshold critical                                                                                                              |                              |             |
| WARNINGON              | Threshold warning                                                                                                               |                              |             |
| CRITICALON             | Threshold critical                                                                                                              |                              |             |
| WARNINGSTATUS          | Set warning threshold for status (Default: ''). You can use the following variables: %{accessible}                              |                              |             |
| CRITICALSTATUS         | Set critical threshold for status (Default: ''). You can use the following variables: %{accessible}                             |                              |             |
| WARNINGSUSPENDED       | Threshold warning                                                                                                               |                              |             |
| CRITICALSUSPENDED      | Threshold critical                                                                                                              |                              |             |
| WARNINGTOTALOFF        | Threshold warning                                                                                                               |                              |             |
| CRITICALTOTALOFF       | Threshold critical                                                                                                              |                              |             |
| WARNINGTOTALON         | Threshold warning                                                                                                               |                              |             |
| CRITICALTOTALON        | Threshold critical                                                                                                              |                              |             |
| WARNINGTOTALSUSPENDED  | Threshold warning                                                                                                               |                              |             |
| CRITICALTOTALSUSPENDED | Threshold critical                                                                                                              |                              |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                             |                              |             |

</TabItem>
<TabItem value="ESX-Alarms" label="ESX-Alarms">

| Macro                      | Description                                                                                                                                      | Valeur par défaut           | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| FILTERTIME                 | Don't check alarm older (value in seconds)                                                                                                       | 3600                        |             |
| WARNINGSTATUS              | Set warning threshold for status (Default: '%{status} =~ /yellow/i). You can use the following variables: %{status}, %{name}, %{entity}, %{type} | %{status} =~ /yellow/i      |             |
| CRITICALSTATUS             | Set critical threshold for status (Default: '%{status} =~ /red/i'). You can use the following variables: %{status}, %{name}, %{entity}, %{type}  | %{status} =~ /red/i         |             |
| WARNINGTOTALALARMWARNING   | Threshold warning                                                                                                                                |                             |             |
| CRITICALTOTALALARMWARNING  | Threshold critical                                                                                                                               |                             |             |
| WARNINGTOTALALARMCRITICAL  | Threshold warning                                                                                                                                |                             |             |
| CRITICALTOTALALARMCRITICAL | Threshold critical                                                                                                                               |                             |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                              | --verbose --ignore-warn-msg |             |

</TabItem>
<TabItem value="Esx-Cpu" label="Esx-Cpu">

| Macro               | Description                                                                                                               | Valeur par défaut           | Obligatoire |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| UNKNOWNSTATUS       | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNING             | Threshold warning                                                                                                         |                             |             |
| CRITICAL            | Threshold critical                                                                                                        |                             |             |
| WARNINGCPU          | Threshold warning                                                                                                         |                             |             |
| CRITICALCPU         | Threshold critical                                                                                                        |                             |             |
| WARNINGSTATUS       | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS      | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGTOTALCPUMHZ  | Threshold warning                                                                                                         |                             |             |
| CRITICALTOTALCPUMHZ | Threshold critical                                                                                                        |                             |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                       |                             |             |

</TabItem>
<TabItem value="Esx-Datastores-Latency" label="Esx-Datastores-Latency">

| Macro                | Description                                                                                                               | Valeur par défaut           | Obligatoire |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| FILTERDATASTORENAME  | Datastore to check. If not set, we check all datastores                                                                   | .*                          |             |
| UNKNOWNSTATUS        | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNINGREADLATENCY   | Threshold warning                                                                                                         |                             |             |
| CRITICALREADLATENCY  | Threshold critical                                                                                                        |                             |             |
| WARNINGSTATUS        | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS       | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGWRITELATENCY  | Threshold warning                                                                                                         |                             |             |
| CRITICALWRITELATENCY | Threshold critical                                                                                                        |                             |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                       | --verbose                   |             |

</TabItem>
<TabItem value="Esx-Health" label="Esx-Health">

| Macro                  | Description                                                                                                               | Valeur par défaut | Obligatoire |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| UNKNOWNSTATUS          | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} |                   |             |
| WARNINGPROBLEMS        | Thresholds                                                                                                                |                   |             |
| CRITICALPROBLEMS       | Thresholds                                                                                                                |                   |             |
| WARNINGPROBLEMSRED     | Thresholds                                                                                                                |                   |             |
| CRITICALPROBLEMSRED    | Thresholds                                                                                                                |                   |             |
| WARNINGPROBLEMSYELLOW  | Thresholds                                                                                                                |                   |             |
| CRITICALPROBLEMSYELLOW | Thresholds                                                                                                                |                   |             |
| WARNINGSTATUS          | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                            |                   |             |
| CRITICALSTATUS         | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                           |                   |             |
| WARNINGTOTALPROBLEMS   | Thresholds                                                                                                                |                   |             |
| CRITICALTOTALPROBLEMS  | Thresholds                                                                                                                |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                       | --verbose         |             |

</TabItem>
<TabItem value="Esx-Memory" label="Esx-Memory">

| Macro                  | Description                                                                                                               | Valeur par défaut           | Obligatoire |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| UNKNOWNSTATUS          | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNING                | Threshold warning (can use unit option)                                                                                   |                             |             |
| CRITICAL               | Threshold critical (can use unit option)                                                                                  |                             |             |
| WARNINGOVERHEADMEMORY  | Threshold overhead                                                                                                        |                             |             |
| CRITICALOVERHEADMEMORY | Threshold critical                                                                                                        |                             |             |
| WARNINGSTATEMEMORY     | Threshold warning. For state != 'high': --warning-state=0                                                                 |                             |             |
| CRITICALSTATEMEMORY    | Threshold critical. For state != 'high': --warning-state=0                                                                |                             |             |
| WARNINGSTATUS          | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS         | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                           |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                       |                             |             |

</TabItem>
<TabItem value="Esx-Service" label="Esx-Service">

| Macro                 | Description                                                                                                                                                        | Valeur par défaut                                         | Obligatoire |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|:------------|
| UNKNOWNSTATUS         | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i && %{maintenance} =~ /false/i'). You can use the following variables: %{status}            | %{status} !~ /^connected$/i && %{maintenance} =~ /false/i |             |
| FILTERSERVICES        | Filter services you want to check (can be a regexp)                                                                                                                | ^(?!(snmpd|xorg)$)                                        |             |
| CRITICALSERVICESTATUS | Set critical threshold for status (Default: '%{policy} =~ /^on\|automatic/i && !%{running}'). You can use the following variables: %{running}, %{label}, %{policy} | %{policy} =~ /^on|automatic/i && !%{running}              |             |
| WARNINGSERVICESTATUS  | Set warning threshold for status (Default: ''). You can use the following variables: %{running}, %{label}, %{policy}                                               |                                                           |             |
| WARNINGSTATUS         | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                                                                     |                                                           |             |
| CRITICALSTATUS        | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                                                                    |                                                           |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                | --verbose                                                 |             |

</TabItem>
<TabItem value="Esx-Status" label="Esx-Status">

| Macro                 | Description                                                                                                                            | Valeur par défaut              | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:------------|
| UNKNOWNSTATUS         | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}              | %{status} !~ /^connected$/i    |             |
| UNKNOWNOVERALLSTATUS  | Set warning threshold for status (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}   | %{overall_status} =~ /gray/i   |             |
| WARNINGOVERALLSTATUS  | Set warning threshold for status (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status} | %{overall_status} =~ /yellow/i |             |
| CRITICALOVERALLSTATUS | Set critical threshold for status (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}   | %{overall_status} =~ /red/i    |             |
| WARNINGSTATUS         | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                                         |                                |             |
| CRITICALSTATUS        | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                                        |                                |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                    | --verbose                      |             |

</TabItem>
<TabItem value="Esx-Storage" label="Esx-Storage">

| Macro                   | Description                                                                                                                                                             | Valeur par défaut                                         | Obligatoire |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|:------------|
| UNKNOWNSTATUS           | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i && %{maintenance} =~ /false/i'). You can use the following variables: %{status}, %{maintenance} | %{status} !~ /^connected$/i && %{maintenance} =~ /false/i |             |
| FILTERADAPTERNAME       | Filter adapters by name (can be a regexp)                                                                                                                               |                                                           |             |
| FILTERLUNNAME           | Filter luns by name (can be a regexp)                                                                                                                                   |                                                           |             |
| FILTERPATHNAME          | Filter paths by name (can be a regexp)                                                                                                                                  |                                                           |             |
| WARNINGADAPTERSFAULT    | Thresholds                                                                                                                                                              |                                                           |             |
| CRITICALADAPTERSFAULT   | Thresholds                                                                                                                                                              |                                                           |             |
| WARNINGADAPTERSOFFLINE  | Thresholds                                                                                                                                                              |                                                           |             |
| CRITICALADAPTERSOFFLINE | Thresholds                                                                                                                                                              |                                                           |             |
| WARNINGADAPTERSONLINE   | Thresholds                                                                                                                                                              |                                                           |             |
| CRITICALADAPTERSONLINE  | Thresholds                                                                                                                                                              |                                                           |             |
| CRITICALADAPTERSTATUS   | Set critical threshold for adapter status (Default: '%{status} =~ /fault/'). You can use the following variables: %{name}, %{host}, %{status}                           | %{status} =~ /fault/                                      |             |
| WARNINGADAPTERSTATUS    | Set warning threshold for adapter status. You can use the following variables: %{name}, %{host}, %{status}                                                              |                                                           |             |
| WARNINGADAPTERSTOTAL    | Thresholds                                                                                                                                                              |                                                           |             |
| CRITICALADAPTERSTOTAL   | Thresholds                                                                                                                                                              |                                                           |             |
| WARNINGADAPTERSUNKNOWN  | Thresholds                                                                                                                                                              |                                                           |             |
| CRITICALADAPTERSUNKNOWN | Thresholds                                                                                                                                                              |                                                           |             |
| WARNINGLUNSDEGRADED     |                                                                                                                                                                         |                                                           |             |
| CRITICALLUNSDEGRADED    |                                                                                                                                                                         |                                                           |             |
| WARNINGLUNSERROR        |                                                                                                                                                                         |                                                           |             |
| CRITICALLUNSERROR       |                                                                                                                                                                         |                                                           |             |
| WARNINGLUNSOFF          |                                                                                                                                                                         |                                                           |             |
| CRITICALLUNSOFF         |                                                                                                                                                                         |                                                           |             |
| WARNINGLUNSOK           |                                                                                                                                                                         |                                                           |             |
| CRITICALLUNSOK          |                                                                                                                                                                         |                                                           |             |
| WARNINGLUNSQUIESCED     |                                                                                                                                                                         |                                                           |             |
| CRITICALLUNSQUIESCED    |                                                                                                                                                                         |                                                           |             |
| WARNINGLUNSTATUS        | Set warning threshold for lun status (Default: '%{status} =~ /degraded\|quiesced/'). You can use the following variables: %{name}, %{host}, %{status}                   | %{status} =~ /degraded|quiesced/                          |             |
| CRITICALLUNSTATUS       | Set critical threshold for lun status (Default: '%{status} =~ /lostcommunication\|error/'). You can use the following variables: %{name}, %{host}, %{status}            | %{status} =~ /lostcommunication|error/                    |             |
| WARNINGLUNSTOTAL        |                                                                                                                                                                         |                                                           |             |
| CRITICALLUNSTOTAL       |                                                                                                                                                                         |                                                           |             |
| WARNINGLUNSUNKNOWN      |                                                                                                                                                                         |                                                           |             |
| CRITICALLUNSUNKNOWN     |                                                                                                                                                                         |                                                           |             |
| WARNINGPATHSACTIVE      |                                                                                                                                                                         |                                                           |             |
| CRITICALPATHSACTIVE     |                                                                                                                                                                         |                                                           |             |
| WARNINGPATHSDEAD        |                                                                                                                                                                         |                                                           |             |
| CRITICALPATHSDEAD       |                                                                                                                                                                         |                                                           |             |
| WARNINGPATHSDISABLED    |                                                                                                                                                                         |                                                           |             |
| CRITICALPATHSDISABLED   |                                                                                                                                                                         |                                                           |             |
| WARNINGPATHSSTANDBY     |                                                                                                                                                                         |                                                           |             |
| CRITICALPATHSSTANDBY    |                                                                                                                                                                         |                                                           |             |
| CRITICALPATHSTATUS      | Set critical threshold for path status (Default: '%{status} =~ /dead/'). You can use the following variables: %{name}, %{host}, %{status}                               | %{status} =~ /dead/                                       |             |
| WARNINGPATHSTATUS       | Set warning threshold for path status. You can use the following variables: %{name}, %{host}, %{status}                                                                 |                                                           |             |
| WARNINGPATHSTOTAL       |                                                                                                                                                                         |                                                           |             |
| CRITICALPATHSTOTAL      |                                                                                                                                                                         |                                                           |             |
| WARNINGPATHSUNKNOWN     |                                                                                                                                                                         |                                                           |             |
| CRITICALPATHSUNKNOWN    |                                                                                                                                                                         |                                                           |             |
| WARNINGSTATUS           | Set warning threshold for status. You can use the following variables: %{status}, %{maintenance}                                                                        |                                                           |             |
| CRITICALSTATUS          | Set critical threshold for status. You can use the following variables: %{status}, %{maintenance}                                                                       |                                                           |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                     | --verbose                                                 |             |

</TabItem>
<TabItem value="Esx-Swap" label="Esx-Swap">

| Macro           | Description                                                                                                               | Valeur par défaut           | Obligatoire |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| UNKNOWNSTATUS   | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNINGSTATUS   | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS  | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGSWAPIN   | Threshold warning                                                                                                         |                             |             |
| CRITICALSWAPIN  | Threshold critical                                                                                                        |                             |             |
| WARNINGSWAPOUT  | Threshold warning                                                                                                         |                             |             |
| CRITICALSWAPOUT | Threshold critical                                                                                                        |                             |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                       |                             |             |

</TabItem>
<TabItem value="Esx-Time" label="Esx-Time">

| Macro          | Description                                                                                                               | Valeur par défaut           | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| UNKNOWNSTATUS  | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNINGSTATUS  | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGTIME    | Threshold warning in seconds                                                                                              | -2:2                        |             |
| CRITICALTIME   | Threshold critical in seconds                                                                                             | -5:5                        |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                       |                             |             |

</TabItem>
<TabItem value="Esx-Traffic" label="Esx-Traffic">

| Macro                  | Description                                                                                                                              | Valeur par défaut           | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| FILTERNICNAME          | ESX nic to check. If not set, we check all nics                                                                                          | .*                          |             |
| UNKNOWNSTATUS          | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}                | %{status} !~ /^connected$/i |             |
| UNKNOWNLINKSTATUS      | Set warning threshold for status. You can use the following variables: %{link\_status}, %{display}                                       |                             |             |
| WARNINGDROPPEDIN       | Thresholds                                                                                                                               |                             |             |
| CRITICALDROPPEDIN      | Thresholds                                                                                                                               |                             |             |
| WARNINGDROPPEDOUT      | Thresholds                                                                                                                               |                             |             |
| CRITICALDROPPEDOUT     | Thresholds                                                                                                                               |                             |             |
| WARNINGHOSTTRAFFICIN   | Thresholds                                                                                                                               |                             |             |
| CRITICALHOSTTRAFFICIN  | Thresholds                                                                                                                               |                             |             |
| WARNINGHOSTTRAFFICOUT  | Thresholds                                                                                                                               |                             |             |
| CRITICALHOSTTRAFFICOUT | Thresholds                                                                                                                               |                             |             |
| WARNINGIN              | Thresholds                                                                                                                               | 80                          |             |
| CRITICALIN             | Thresholds                                                                                                                               | 90                          |             |
| CRITICALLINKSTATUS     | Set critical threshold for status (Default: '%{link\_status} !~ /up/'). You can use the following variables: %{link\_status}, %{display} | %{link_status} !~ /up/      |             |
| WARNINGLINKSTATUS      | Set warning threshold for status. You can use the following variables: %{link\_status}, %{display}                                       |                             |             |
| WARNINGOUT             | Thresholds                                                                                                                               | 80                          |             |
| CRITICALOUT            | Thresholds                                                                                                                               | 90                          |             |
| WARNINGSTATUS          | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                                           |                             |             |
| CRITICALSTATUS         | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                                          |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                      | --verbose                   |             |

</TabItem>
<TabItem value="Esx-Uptime" label="Esx-Uptime">

| Macro          | Description                                                                                                               | Valeur par défaut           | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| UNKNOWNSTATUS  | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNINGSTATUS  | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGTIME    | Threshold warning in seconds                                                                                              |                             |             |
| CRITICALTIME   | Threshold critical in seconds                                                                                             |                             |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                       |                             |             |

</TabItem>
<TabItem value="Esx-Vm-Count" label="Esx-Vm-Count">

| Macro                  | Description                                                                                                               | Valeur par défaut           | Obligatoire |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| UNKNOWNSTATUS          | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNINGOFF             | Threshold warning                                                                                                         |                             |             |
| CRITICALOFF            | Threshold critical                                                                                                        |                             |             |
| WARNINGON              | Threshold warning                                                                                                         |                             |             |
| CRITICALON             | Threshold critical                                                                                                        |                             |             |
| WARNINGSTATUS          | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS         | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGSUSPENDED       | Threshold warning                                                                                                         |                             |             |
| CRITICALSUSPENDED      | Threshold critical                                                                                                        |                             |             |
| WARNINGTOTALOFF        | Threshold warning                                                                                                         |                             |             |
| CRITICALTOTALOFF       | Threshold critical                                                                                                        |                             |             |
| WARNINGTOTALON         | Threshold warning                                                                                                         |                             |             |
| CRITICALTOTALON        | Threshold critical                                                                                                        |                             |             |
| WARNINGTOTALSUSPENDED  | Threshold warning                                                                                                         |                             |             |
| CRITICALTOTALSUSPENDED | Threshold critical                                                                                                        |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                       |                             |             |

</TabItem>
<TabItem value="Esx-is-Maintenance" label="Esx-is-Maintenance">

| Macro                     | Description                                                                                                                   | Valeur par défaut           | Obligatoire |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| UNKNOWNSTATUS             | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}     | %{status} !~ /^connected$/i |             |
| CRITICALMAINTENANCESTATUS | Set critical threshold for status (Default: '%{maintenance} !~ /false/'). You can use the following variables: %{maintenance} | %{maintenance} !~ /false/   |             |
| WARNINGMAINTENANCESTATUS  | Set warning threshold for status (Default: ''). You can use the following variables: %{maintenance}                           |                             |             |
| WARNINGSTATUS             | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                                |                             |             |
| CRITICALSTATUS            | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                               |                             |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                           |                             |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser un serveur en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=datastore-io \
	--custommode=connector \
	--connector-hostname='localhost' \
	--connector-port='5700' \
	--container='default'  \
	--datastore-name='' \
	--unknown-status='%{accessible} !~ /^true|1$/i' \
	--warning-status='' \
	--critical-status='' \
	--warning-total-read='' \
	--critical-total-read='' \
	--warning-total-write='' \
	--critical-total-write='' \
	--warning-read='' \
	--critical-read='' \
	--warning-write='' \
	--critical-write='' \
	
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:      | 'datastore.read.usage.bytespersecond'=38B/s;;;0; 'datastore.write.usage.bytespersecond'=83B/s;;;0; 'datastore.read.usage.bytespersecond'=44B/s;;;0; 'datastore.write.usage.bytespersecond'=5B/s;;;0; 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode                | Modèle de service associé                          |
|:--------------------|:---------------------------------------------------|
| alarm-datacenter    | Not used in this Monitoring Connector              |
| alarm-host          | Virt-VMWare2-ESX-Alarms-Generic-custom             |
| countvm-host        | Virt-VMWare2-ESX-Vm-Count-Generic-custom           |
| cpu-cluster         | Not used in this Monitoring Connector              |
| cpu-host            | Virt-VMWare2-ESX-Cpu-Generic-custom                |
| cpu-vm              | Not used in this Monitoring Connector              |
| datastore-countvm   | Virt-VMWare2-Datastore-Vm-Count-Generic-custom     |
| datastore-host      | Virt-VMWare2-ESX-Datastores-Latency-Generic-custom |
| datastore-io        | Virt-VMWare2-Datastore-Io-Generic-custom           |
| datastore-iops      | Virt-VMWare2-Datastore-Iops-Generic-custom         |
| datastore-snapshot  | Virt-VMWare2-Datastore-Snapshots-Generic-custom    |
| datastore-usage     | Virt-VMWare2-Datastore-Usage-Generic-custom        |
| datastore-vm        | Not used in this Monitoring Connector              |
| device-vm           | Not used in this Monitoring Connector              |
| discovery           | Used for host discovery                            |
| getmap              | Not used in this Monitoring Connector              |
| health-host         | Virt-VMWare2-ESX-Health-Generic-custom             |
| licenses            | Not used in this Monitoring Connector              |
| limit-vm            | Not used in this Monitoring Connector              |
| list-clusters       | Not used in this Monitoring Connector              |
| list-datacenters    | Not used in this Monitoring Connector              |
| list-datastores     | Used for service discovery                         |
| list-nichost        | Used for service discovery                         |
| maintenance-host    | Virt-VMWare2-ESX-Maintenance-Generic-custom        |
| memory-host         | Virt-VMWare2-ESX-Memory-Generic-custom             |
| memory-vm           | Not used in this Monitoring Connector              |
| net-host            | Virt-VMWare2-ESX-Traffic-Generic-custom            |
| net-vm              | Not used in this Monitoring Connector              |
| service-host        | Virt-VMWare2-ESX-Service-Generic-custom            |
| snapshot-vm         | Not used in this Monitoring Connector              |
| stat-connectors     | Not used in this Monitoring Connector              |
| status-cluster      | Not used in this Monitoring Connector              |
| status-host         | Virt-VMWare2-ESX-Status-Generic-custom             |
| status-vm           | Not used in this Monitoring Connector              |
| storage-host        | Virt-VMWare2-ESX-Storage-Generic-custom            |
| swap-host           | Virt-VMWare2-ESX-Swap-Generic-custom               |
| swap-vm             | Not used in this Monitoring Connector              |
| thinprovisioning-vm | Not used in this Monitoring Connector              |
| time-host           | Virt-VMWare2-ESX-Time-Generic-custom               |
| tools-vm            | Not used in this Monitoring Connector              |
| uptime-host         | Virt-VMWare2-ESX-Uptime-Generic-custom             |
| vmoperation-cluster | Not used in this Monitoring Connector              |
| vsan-cluster-usage  | Not used in this Monitoring Connector              |

### Options disponibles

#### Options génériques

Les options génériques aux modes sont listées ci-dessous :

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

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Datastore-Io" label="Datastore-Io">

| Option             | Description                                                                                                                       | Type |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------|:-----|
| --datastore-name   | datastore name to list.                                                                                                           | Mode |
| --filter           | Datastore name is a regexp.                                                                                                       | Mode |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                              | Mode |
| --unknown-status   | Set unknown threshold for status (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   | Mode |
| --warning-status   | Set warning threshold for status (Default: ''). You can use the following variables: %{accessible}                                | Mode |
| --critical-status  | Set critical threshold for status (Default: ''). You can use the following variables: %{accessible}                               | Mode |
| --warning-*        | Threshold warning. Can be: 'total-read', 'total-write', 'read', 'write'.                                                          | Mode |
| --critical-*       | Threshold critical. Can be: 'total-read', 'total-write', 'read', 'write'.                                                         | Mode |

</TabItem>
<TabItem value="Datastore-Iops" label="Datastore-Iops">

| Option                   | Description                                                                                                                       | Type |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------|:-----|
| --datastore-name         | datastore name to list.                                                                                                           | Mode |
| --filter                 | Datastore name is a regexp.                                                                                                       | Mode |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                              | Mode |
| --detail-iops-min        | Only display VMs with iops higher value (default: 50).                                                                            | Mode |
| --unknown-status         | Set unknown threshold for status (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   | Mode |
| --warning-status         | Set warning threshold for status (Default: ''). You can use the following variables: %{accessible}                                | Mode |
| --critical-status        | Set critical threshold for status (Default: ''). You can use the following variables: %{accessible}                               | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'read-total', 'write-total', 'read', 'write', 'read-vm', 'write-vm'.                                          | Mode |

</TabItem>
<TabItem value="Datastore-Snapshots" label="Datastore-Snapshots">

| Option             | Description                                                                                                                       | Type |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------|:-----|
| --datastore-name   | datastore name to list.                                                                                                           | Mode |
| --filter           | Datastore name is a regexp.                                                                                                       | Mode |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                              | Mode |
| --unknown-status   | Set unknown threshold for status (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   | Mode |
| --warning-status   | Set warning threshold for status (Default: ''). You can use the following variables: %{accessible}                                | Mode |
| --critical-status  | Set critical threshold for status (Default: ''). You can use the following variables: %{accessible}                               | Mode |
| --warning-*        | Threshold warning. Can be: 'total', 'snapshot'.                                                                                   | Mode |
| --critical-*       | Threshold critical. Can be: 'total', 'snapshot'.                                                                                  | Mode |

</TabItem>
<TabItem value="Datastore-Usage" label="Datastore-Usage">

| Option                   | Description                                                                                                                       | Type |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------|:-----|
| --datastore-name         | datastore name to list.                                                                                                           | Mode |
| --filter                 | Datastore name is a regexp.                                                                                                       | Mode |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                              | Mode |
| --filter-host            | Filter datastores attached to hosts (can be a regexp).                                                                            | Mode |
| --refresh                | Explicitly ask vmware to refreshes free-space and capacity values (slower).                                                       | Mode |
| --unknown-status         | Set unknown threshold for status (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   | Mode |
| --warning-status         | Set warning threshold for status (Default: ''). You can use the following variables: %{accessible}                                | Mode |
| --critical-status        | Set critical threshold for status (Default: ''). You can use the following variables: %{accessible}                               | Mode |
| --warning-* --critical-* | Thresholds. Can be: Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'.                                       | Mode |

</TabItem>
<TabItem value="Datastore-Vm-Count" label="Datastore-Vm-Count">

| Option             | Description                                                                                                                       | Type |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------|:-----|
| --datastore-name   | datastore name to check.                                                                                                          | Mode |
| --filter           | Datastore name is a regexp.                                                                                                       | Mode |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                              | Mode |
| --unknown-status   | Set unknown threshold for status (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   | Mode |
| --warning-status   | Set warning threshold for status (Default: ''). You can use the following variables: %{accessible}                                | Mode |
| --critical-status  | Set critical threshold for status (Default: ''). You can use the following variables: %{accessible}                               | Mode |
| --warning-*        | Threshold warning. Can be: 'total-on', 'total-off', 'total-suspended', 'on', 'off', 'suspended'.                                  | Mode |
| --critical-*       | Threshold critical. Can be: 'total-on', 'total-off', 'total-suspended', 'on', 'off', 'suspended'.                                 | Mode |

</TabItem>
<TabItem value="ESX-Alarms" label="ESX-Alarms">

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
| --esx-hostname         | ESX hostname to check. If not set, we check all ESX.                                                                                                                                                                                          | Mode      |
| --filter               | Datacenter is a regexp.                                                                                                                                                                                                                       | Mode      |
| --scope-datacenter     | Search in following datacenter(s) (can be a regexp).                                                                                                                                                                                          | Mode      |
| --scope-cluster        | Search in following cluster(s) (can be a regexp).                                                                                                                                                                                             | Mode      |
| --filter-time          | Don't check alarm older (value in seconds).                                                                                                                                                                                                   | Mode      |
| --memory               | Check new alarms only.                                                                                                                                                                                                                        | Mode      |
| --warning-status       | Set warning threshold for status (Default: '%{status} =~ /yellow/i). You can use the following variables: %{status}, %{name}, %{entity}, %{type}.                                                                                             | Mode      |
| --critical-status      | Set critical threshold for status (Default: '%{status} =~ /red/i'). You can use the following variables: %{status}, %{name}, %{entity}, %{type}.                                                                                              | Mode      |
| --warning-*            | Threshold warning. Can be: 'total-alarm-warning', 'total-alarm-critical'.                                                                                                                                                                     | Mode      |
| --critical-*           | Threshold critical. Can be: 'total-alarm-warning', 'total-alarm-critical'.                                                                                                                                                                    | Mode      |

</TabItem>
<TabItem value="Esx-Cpu" label="Esx-Cpu">

| Option             | Description                                                                                                                 | Type |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname     | ESX hostname to check. If not set, we check all ESX.                                                                        | Mode |
| --filter           | ESX hostname is a regexp.                                                                                                   | Mode |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                        | Mode |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                           | Mode |
| --unknown-status   | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   | Mode |
| --warning-status   | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                              | Mode |
| --critical-status  | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                             | Mode |
| --warning-*        | Threshold warning. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu'.                                                             | Mode |
| --critical-*       | Threshold critical. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu'.                                                            | Mode |

</TabItem>
<TabItem value="Esx-Datastores-Latency" label="Esx-Datastores-Latency">

| Option             | Description                                                                                                                 | Type |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname     | ESX hostname to check. If not set, we check all ESX.                                                                        | Mode |
| --filter           | ESX hostname is a regexp.                                                                                                   | Mode |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                        | Mode |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                           | Mode |
| --datastore-name   | Datastore to check. If not set, we check all datastores.                                                                    | Mode |
| --filter-datastore | Datastore name is a regexp.                                                                                                 | Mode |
| --unknown-status   | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   | Mode |
| --warning-status   | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                              | Mode |
| --critical-status  | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                             | Mode |
| --warning-*        | Threshold warning. Can be: 'read-latency', 'write-latency'.                                                                 | Mode |
| --critical-*       | Threshold critical. Can be: 'read-latency', 'write-latency'.                                                                | Mode |

</TabItem>
<TabItem value="Esx-Health" label="Esx-Health">

| Option                   | Description                                                                                                                                                   | Type |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname           | ESX hostname to check. If not set, we check all ESX.                                                                                                          | Mode |
| --filter                 | ESX hostname is a regexp.                                                                                                                                     | Mode |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                          | Mode |
| --scope-cluster          | Search in following cluster(s) (can be a regexp).                                                                                                             | Mode |
| --storage-status         | Check storage(s) status.                                                                                                                                      | Mode |
| --unknown-status         | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}                                     | Mode |
| --warning-status         | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                                                                | Mode |
| --critical-status        | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                                                               | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'total-problems', 'problems', 'problems-yellow', 'problems-red', 'sensor-temperature', 'sensor-fan', 'sensor-voltage', 'sensor-power'.    | Mode |

</TabItem>
<TabItem value="Esx-Memory" label="Esx-Memory">

| Option                     | Description                                                                                                                 | Type |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname             | ESX hostname to check. If not set, we check all ESX.                                                                        | Mode |
| --filter                   | ESX hostname is a regexp.                                                                                                   | Mode |
| --scope-datacenter         | Search in following datacenter(s) (can be a regexp).                                                                        | Mode |
| --scope-cluster            | Search in following cluster(s) (can be a regexp).                                                                           | Mode |
| --units                    | Units of thresholds (Default: '%') ('%', 'B').                                                                              | Mode |
| --free                     | Thresholds are on free space left.                                                                                          | Mode |
| --unknown-status           | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   | Mode |
| --warning-status           | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                              | Mode |
| --critical-status          | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                             | Mode |
| --warning-consumed-memory  | Threshold warning (can use unit option).                                                                                    | Mode |
| --critical-consumed-memory | Threshold critical (can use unit option).                                                                                   | Mode |
| --warning-overhead-memory  | Threshold overhead.                                                                                                         | Mode |
| --critical-overhead-memory | Threshold critical.                                                                                                         | Mode |
| --warning-state-memory     | Threshold warning. For state != 'high': --warning-state=0                                                                   | Mode |
| --critical-state-memory    | Threshold critical. For state != 'high': --warning-state=0                                                                  | Mode |
| --no-memory-state          | Don't check memory state.                                                                                                   | Mode |

</TabItem>
<TabItem value="Esx-Service" label="Esx-Service">

| Option                    | Description                                                                                                                                                           | Type |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname            | ESX hostname to check. If not set, we check all ESX.                                                                                                                  | Mode |
| --filter                  | ESX hostname is a regexp.                                                                                                                                             | Mode |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                                                                                                  | Mode |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                                                                                                     | Mode |
| --filter-services         | Filter services you want to check (can be a regexp).                                                                                                                  | Mode |
| --unknown-status          | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i && %{maintenance} =~ /false/i'). You can use the following variables: %{status}               | Mode |
| --warning-status          | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                                                                        | Mode |
| --critical-status         | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                                                                       | Mode |
| --warning-service-status  | Set warning threshold for status (Default: ''). You can use the following variables: %{running}, %{label}, %{policy}                                                  | Mode |
| --critical-service-status | Set critical threshold for status (Default: '%{policy} =~ /^on\|automatic/i && !%{running}'). You can use the following variables: %{running}, %{label}, %{policy}    | Mode |

</TabItem>
<TabItem value="Esx-Status" label="Esx-Status">

| Option                    | Description                                                                                                                              | Type |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname            | ESX hostname to check. If not set, we check all ESX.                                                                                     | Mode |
| --filter                  | ESX hostname is a regexp.                                                                                                                | Mode |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                                                                     | Mode |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                                                                        | Mode |
| --unknown-status          | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}                | Mode |
| --warning-status          | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                                           | Mode |
| --critical-status         | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                                          | Mode |
| --unknown-overall-status  | Set warning threshold for status (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}     | Mode |
| --warning-overall-status  | Set warning threshold for status (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}   | Mode |
| --critical-overall-status | Set critical threshold for status (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}     | Mode |

</TabItem>
<TabItem value="Esx-Storage" label="Esx-Storage">

| Option                    | Description                                                                                                                                                               | Type |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname            | ESX hostname to check. If not set, we check all ESX.                                                                                                                      | Mode |
| --filter                  | ESX hostname is a regexp.                                                                                                                                                 | Mode |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                                                                                                      | Mode |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                                                                                                         | Mode |
| --filter-adapter-name     | Filter adapters by name (can be a regexp).                                                                                                                                | Mode |
| --filter-lun-name         | Filter luns by name (can be a regexp).                                                                                                                                    | Mode |
| --filter-path-name        | Filter paths by name (can be a regexp).                                                                                                                                   | Mode |
| --unknown-status          | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i && %{maintenance} =~ /false/i'). You can use the following variables: %{status}, %{maintenance}   | Mode |
| --warning-status          | Set warning threshold for status. You can use the following variables: %{status}, %{maintenance}                                                                          | Mode |
| --critical-status         | Set critical threshold for status. You can use the following variables: %{status}, %{maintenance}                                                                         | Mode |
| --warning-adapter-status  | Set warning threshold for adapter status. You can use the following variables: %{name}, %{host}, %{status}                                                                | Mode |
| --critical-adapter-status | Set critical threshold for adapter status (Default: '%{status} =~ /fault/'). You can use the following variables: %{name}, %{host}, %{status}                             | Mode |
| --warning-lun-status      | Set warning threshold for lun status (Default: '%{status} =~ /degraded\|quiesced/'). You can use the following variables: %{name}, %{host}, %{status}                     | Mode |
| --critical-lun-status     | Set critical threshold for lun status (Default: '%{status} =~ /lostcommunication\|error/'). You can use the following variables: %{name}, %{host}, %{status}              | Mode |
| --warning-path-status     | Set warning threshold for path status. You can use the following variables: %{name}, %{host}, %{status}                                                                   | Mode |
| --critical-path-status    | Set critical threshold for path status (Default: '%{status} =~ /dead/'). You can use the following variables: %{name}, %{host}, %{status}                                 | Mode |
| --warning-* --critical-*  | Thresholds. Can be: 'adapters-total', 'adapters-online', 'adapters-offline', 'adapters-fault', 'adapters-unknown',                                                        | Mode |

</TabItem>
<TabItem value="Esx-Swap" label="Esx-Swap">

| Option             | Description                                                                                                                 | Type |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname     | ESX hostname to check. If not set, we check all ESX.                                                                        | Mode |
| --filter           | ESX hostname is a regexp.                                                                                                   | Mode |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                        | Mode |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                           | Mode |
| --unknown-status   | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   | Mode |
| --warning-status   | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                              | Mode |
| --critical-status  | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                             | Mode |
| --warning-*        | Threshold warning. Can be: 'swap-in', 'swap-out'.                                                                           | Mode |
| --critical-*       | Threshold critical. Can be: 'swap-in', 'swap-out'.                                                                          | Mode |

</TabItem>
<TabItem value="Esx-Time" label="Esx-Time">

| Option             | Description                                                                                                                 | Type |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname     | ESX hostname to check. If not set, we check all ESX.                                                                        | Mode |
| --filter           | ESX hostname is a regexp.                                                                                                   | Mode |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                        | Mode |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                           | Mode |
| --unknown-status   | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   | Mode |
| --warning-status   | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                              | Mode |
| --critical-status  | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                             | Mode |
| --warning-time     | Threshold warning in seconds.                                                                                               | Mode |
| --critical-time    | Threshold critical in seconds.                                                                                              | Mode |

</TabItem>
<TabItem value="Esx-Traffic" label="Esx-Traffic">

| Option                   | Description                                                                                                                                                                                                             | Type |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname           | ESX hostname to check. If not set, we check all ESX.                                                                                                                                                                    | Mode |
| --filter                 | ESX hostname is a regexp.                                                                                                                                                                                               | Mode |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                                                                                    | Mode |
| --scope-cluster          | Search in following cluster(s) (can be a regexp).                                                                                                                                                                       | Mode |
| --nic-name               | ESX nic to check. If not set, we check all nics.                                                                                                                                                                        | Mode |
| --filter-vswitch-name    | Filter vswitch by name. It monitors only ESX nic that belongs to the filtered vswitches.                                                                                                                                | Mode |
| --unknown-status         | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}                                                                                               | Mode |
| --warning-status         | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                                                                                                                          | Mode |
| --critical-status        | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                                                                                                                         | Mode |
| --unknown-link-status    | Set warning threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                                                      | Mode |
| --warning-link-status    | Set warning threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                                                      | Mode |
| --critical-link-status   | Set critical threshold for status (Default: '%{link\_status} !~ /up/'). You can use the following variables: %{link\_status}, %{display}                                                                                | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'host-traffic-in' (b/s), 'host-traffic-out' (b/s), 'vswitch-traffic-in' (b/s), 'vswitch-traffic-out' (b/s), 'link-traffic-in' (%), 'link-traffic-out' (%), 'link-dropped-in', 'link-dropped-out'.   | Mode |
| --no-proxyswitch         | Use the following option if you are checking an ESX 3.x version (it's mandatory).                                                                                                                                       | Mode |

</TabItem>
<TabItem value="Esx-Uptime" label="Esx-Uptime">

| Option             | Description                                                                                                                 | Type |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname     | ESX hostname to check. If not set, we check all ESX.                                                                        | Mode |
| --filter           | ESX hostname is a regexp.                                                                                                   | Mode |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                        | Mode |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                           | Mode |
| --unknown-status   | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   | Mode |
| --warning-status   | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                              | Mode |
| --critical-status  | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                             | Mode |
| --warning-time     | Threshold warning in seconds.                                                                                               | Mode |
| --critical-time    | Threshold critical in seconds.                                                                                              | Mode |

</TabItem>
<TabItem value="Esx-Vm-Count" label="Esx-Vm-Count">

| Option             | Description                                                                                                                 | Type |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname     | ESX hostname to check. If not set, we check all ESX.                                                                        | Mode |
| --filter           | ESX hostname is a regexp.                                                                                                   | Mode |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                        | Mode |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                           | Mode |
| --unknown-status   | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   | Mode |
| --warning-status   | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                              | Mode |
| --critical-status  | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                             | Mode |
| --warning-*        | Threshold warning. Can be: 'total-on', 'total-off', 'total-suspended', 'on', 'off', 'suspended'.                            | Mode |
| --critical-*       | Threshold critical. Can be: 'total-on', 'total-off', 'total-suspended', 'on', 'off', 'suspended'.                           | Mode |

</TabItem>
<TabItem value="Esx-is-Maintenance" label="Esx-is-Maintenance">

| Option                        | Description                                                                                                                      | Type |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|:-----|
| --esx-hostname                | ESX hostname to check. If not set, we check all ESX.                                                                             | Mode |
| --filter                      | ESX hostname is a regexp.                                                                                                        | Mode |
| --scope-datacenter            | Search in following datacenter(s) (can be a regexp).                                                                             | Mode |
| --scope-cluster               | Search in following cluster(s) (can be a regexp).                                                                                | Mode |
| --unknown-status              | Set unknown threshold for status (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}        | Mode |
| --warning-status              | Set warning threshold for status (Default: ''). You can use the following variables: %{status}                                   | Mode |
| --critical-status             | Set critical threshold for status (Default: ''). You can use the following variables: %{status}                                  | Mode |
| --warning-maintenance-status  | Set warning threshold for status (Default: ''). You can use the following variables: %{maintenance}                              | Mode |
| --critical-maintenance-status | Set critical threshold for status (Default: '%{maintenance} !~ /false/'). You can use the following variables: %{maintenance}    | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=datastore-io \
    --help
```
