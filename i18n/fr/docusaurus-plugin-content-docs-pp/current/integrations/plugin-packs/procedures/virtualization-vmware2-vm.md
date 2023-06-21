---
id: virtualization-vmware2-vm
title: VMware VM
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **VMware VM** apporte un modèle d'hôte :

* **Virt-VMWare2-VM-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Virt-VMWare2-VM-custom" label="Virt-VMWare2-VM-custom">

| Alias               | Modèle de service                               | Description                                                                                                  |
|:--------------------|:------------------------------------------------|:-------------------------------------------------------------------------------------------------------------|
| Vm-Limit            | Virt-VMWare2-Vm-Limit-Generic-custom            | Contrôle permettant de vérifier la définition de limites                                                     |
| Vm-Snapshot         | Virt-VMWare2-Vm-Snapshot-Generic-custom         | Contrôle permettant de vérifier l'âge des snapshosts sur la machine virtuelle                                |
| Vm-Status           | Virt-VMWare2-Vm-Status-Generic-custom           | Contrôle permettant de vérifier l'état global d'une machine virtuelle                                        |
| Vm-Thinprovisioning | Virt-VMWare2-Vm-Thinprovisioning-Generic-custom | Contrôle permettant de vérifier si une machine virtuelle possède un disque en mode 'thinprovisioning' ou non |
| Vm-Tools            | Virt-VMWare2-Vm-Tools-Generic-custom            | Contrôle permettant de vérifier l'état des vmtools d'une machine virtuelle                                   |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-VMWare2-VM** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias              | Modèle de service                              | Description                                                                                               |
|:-------------------|:-----------------------------------------------|:----------------------------------------------------------------------------------------------------------|
| Vm-Cpu             | Virt-VMWare2-Vm-Cpu-Generic-custom             | Contrôle permettant de vérifier le taux d'utilisation CPU d'une machine virtuelle                         |
| Vm-Datastores-Iops | Virt-VMWare2-Vm-Datastores-Iops-Generic-custom | Contrôle permettant de vérifier le taux d'utilisation des datastores rattachées à une machine virtuelle.  |
| Vm-Device          | Virt-VMWare2-Vm-Device-Generic-custom          | Contrôle permettant de vérifier le taux d'utilisation CPU d'une machine virtuelle                         |
| Vm-Memory          | Virt-VMWare2-Vm-Memory-Generic-custom          | Contrôle permettant de vérifier le taux d'utilisation mémoire d'une machine virtuelle                     |
| Vm-Swap            | Virt-VMWare2-Vm-Swap-Generic-custom            | Contrôle permettant de vérifier si une machine virtuelle swappe                                           |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                     |
|:----------------|:--------------------------------|
| VMWare VM       | Discover VMWare Virtual Machine |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| vm~status                                 | N/A   |
| vm~vm.cpu.utilization.percentage          | %     |
| vm~vm.cpu.utilization.mhz                 | MHz   |
| vm~vm.cpu.ready.percentage                | %     |
| vm~cpu#vm.core.cpu.utilization.percentage | MHz   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Datastores-Iops" label="Vm-Datastores-Iops">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| vm~status                                  | N/A   |
| vm~vm.datastore.latency.max.milliseconds   | ms    |
| vm~datastore#vm.datastore.read.usage.iops  | iops  |
| vm~datastore#vm.datastore.write.usage.iops | iops  |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Device" label="Vm-Device">

| Métrique                      | Unité |
|:------------------------------|:------|
| vm.devices.connected.count    | count |
| vm#status                     | N/A   |
| vm#vm.devices.connected.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Limit" label="Vm-Limit">

| Métrique      | Unité |
|:--------------|:------|
| cpu-status    | N/A   |
| memory-status | N/A   |
| disk-status   | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Métrique                          | Unité |
|:----------------------------------|:------|
| vm~status                         | N/A   |
| vm~vm.memory.consumed.usage.bytes |       |
| vm~vm.memory.active.usage.bytes   |       |
| vm~vm.memory.overhead.bytes       | B     |
| vm~vm.memory.ballooning.bytes     | B     |
| vm~vm.memory.shared.bytes         | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Snapshot" label="Vm-Snapshot">

Coming soon

</TabItem>
<TabItem value="Vm-Status" label="Vm-Status">

| Métrique          | Unité |
|:------------------|:------|
| vm#status         | N/A   |
| vm#overall-status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Swap" label="Vm-Swap">

| Métrique                            | Unité |
|:------------------------------------|:------|
| vm#status                           | N/A   |
| vm#vm.swap.in.usage.bytespersecond  | B/s   |
| vm#vm.swap.out.usage.bytespersecond | B/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Thinprovisioning" label="Vm-Thinprovisioning">

Coming soon

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

Coming soon

</TabItem>
</Tabs>

## Prérequis

### Configuration du connecteur Centreon VMWare

Pour la supervision VMWare, centreon utlise un daemon pour se connecter et requêter le vCenter.

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

- _ip\_hostname_: Adresse IP ou nom d'hôte du vCenter ou de l'ESX (Si il est en mode standalone),
- _username_: utilisateur avec un accès "lecture seul" au vCenter ou à l'ESX (Vous pouvez utilisez un utilisateur du domaine),
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

Vous pouvez vérifiez que votre configuration est fonctionelle en consultant les journaux dans :
"/var/log/centreon/centreon\_vmware.log".

### Balises et Attributs personnalisés

Pour découvrir les balises et les attributs personnalisés, vous devez : 

* utiliser la version **3.2.5** de **centreon-vmware-daemon**
* ajouter **--tags** dans les options supplémentaires de découverte : allez à la page **Configuration > Hôtes > Découverte**, et à la 3ème étape (**Définir les paramètres de découverte**), dans la section **Paramètres supplémentaires**, dans le champ **Options supplémentaires**, saisissez **--tags**.

### Flux réseau

Le Collecteur Centreon avec le connecteur VMWare d'installé doit accéder en HTTPS (TCP/443) au vCenter.

Les Collecteurs requêtant le Collecteur avec le connecteur VMWare doit accéder en TCP/5700 au Collecteur avec le Connecteur VMWare.

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

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **VMware VM**
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
3. Appliquez le modèle d'hôte **Virt-VMWare2-VM-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                      | Description                                                                                           | Valeur par défaut | Obligatoire |
|:---------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| CENTREONVMWARECONTAINER    | Container to use                                                                                      | default           |             |
| CENTREONVMWAREHOST         | Connector hostname                                                                                    | localhost         |             |
| CENTREONVMWAREPORT         | Connector port                                                                                        | 5700              |             |
| VMNAME                     | VM hostname to check. If not set, we check all VMs                                                    |                   |             |
| VMUUID                     |                                                                                                       |                   |             |
| CENTREONVMWAREEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Macro            | Description                                                                                                                                                                                           | Valeur par défaut                                                          | Obligatoire |
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
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                   |                                                                            |             |

</TabItem>
<TabItem value="Vm-Datastores-Iops" label="Vm-Datastores-Iops">

| Macro                   | Description                                                                                                                                                                                           | Valeur par défaut                                                          | Obligatoire |
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
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                   | --verbose                                                                  |             |

</TabItem>
<TabItem value="Vm-Device" label="Vm-Device">

| Macro                        | Description                                                                                                                                     | Valeur par défaut                     | Obligatoire |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|:------------|
| UNKNOWNSTATUS                | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state} | %{connection_state} !~ /^connected$/i |             |
| FILTERDEVICE                 | Device to check (Required) (Example: --device='VirtualCdrom')                                                                                   |                                       |             |
| WARNINGSTATUS                | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}                                       |                                       |             |
| CRITICALSTATUS               | Set critical threshold for status (Default: ''). You can use the following variables: %{connection\_state}                                      |                                       |             |
| WARNINGTOTALDEVICECONNECTED  | Threshold warning                                                                                                                               |                                       |             |
| CRITICALTOTALDEVICECONNECTED | Threshold critical                                                                                                                              |                                       |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                             |                                       |             |

</TabItem>
<TabItem value="Vm-Limit" label="Vm-Limit">

| Macro                | Description                                                                                                                                                                                     | Valeur par défaut                                       | Obligatoire |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|:------------|
| CRITICALCPUSTATUS    | Set critical threshold for status (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{connection_state} !~ /^connected$/i || %{limit} != -1 |             |
| WARNINGCPUSTATUS     | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                                                         |             |
| CRITICALDISKSTATUS   | Set critical threshold for status (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{connection_state} !~ /^connected$/i || %{limit} != -1 |             |
| WARNINGDISKSTATUS    | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                                                         |             |
| CRITICALMEMORYSTATUS | Set critical threshold for status (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{connection_state} !~ /^connected$/i || %{limit} != -1 |             |
| WARNINGMEMORYSTATUS  | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                                                         |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                             | --verbose                                               |             |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Macro              | Description                                                                                                                                                                                           | Valeur par défaut                                                          | Obligatoire |
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
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                   |                                                                            |             |

</TabItem>
<TabItem value="Vm-Snapshot" label="Vm-Snapshot">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Warning threshold for snapshot's age                                                                | 259200            |             |
| CRITICAL     | Critical threshold for snapshot's age                                                               | 432000            |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Vm-Status" label="Vm-Status">

| Macro                 | Description                                                                                                                                                      | Valeur par défaut                     | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|:------------|
| UNKNOWNSTATUS         | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection_state} !~ /^connected$/i |             |
| UNKNOWNOVERALLSTATUS  | Set unknown threshold for status (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}                             | %{overall_status} =~ /gray/i          |             |
| WARNINGOVERALLSTATUS  | Set warning threshold for status (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}                           | %{overall_status} =~ /yellow/i        |             |
| CRITICALOVERALLSTATUS | Set critical threshold for status (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}                             | %{overall_status} =~ /red/i           |             |
| WARNINGSTATUS         | Set warning threshold for status. You can use the following variables: %{connection\_state}                                                                      |                                       |             |
| CRITICALSTATUS        | Set critical threshold for status. You can use the following variables: %{connection\_state}, %{power\_state}                                                    |                                       |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                              | --verbose                             |             |

</TabItem>
<TabItem value="Vm-Swap" label="Vm-Swap">

| Macro           | Description                                                                                                                                                                                           | Valeur par défaut                                                          | Obligatoire |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------|:------------|
| UNKNOWNSTATUS   | Set unknown threshold for status (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection_state} !~ /^connected$/i or %{power_state}  !~ /^poweredOn$/i |             |
| WARNINGSTATUS   | Set warning threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                            |             |
| CRITICALSTATUS  | Set critical threshold for status (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                            |             |
| WARNINGSWAPIN   | Threshold warning                                                                                                                                                                                     |                                                                            |             |
| CRITICALSWAPIN  | Threshold critical                                                                                                                                                                                    |                                                                            |             |
| WARNINGSWAPOUT  | Threshold warning                                                                                                                                                                                     |                                                                            |             |
| CRITICALSWAPOUT | Threshold critical                                                                                                                                                                                    |                                                                            |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                   |                                                                            |             |

</TabItem>
<TabItem value="Vm-Thinprovisioning" label="Vm-Thinprovisioning">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| STATUS       | Thinprovisioning status (default: none) Example: 'active,CRITICAL' or 'notactive,WARNING'           | active,WARNING    |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Macro              | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| NOTINSTALLEDSTATUS | Status if vmtools is not installed (default: critical)                                              | critical          |             |
| NOTRUNNINGSTATUS   | Status if vmtools is not running (default: critical)                                                | critical          |             |
| NOTUP2DATESTATUS   | Status if vmtools is not upd2date (default: warning)                                                | warning           |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

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

La commande devrait retourner un message de sortie similaire à :

```bash
OK:      | 'vm.cpu.utilization.percentage'=18%;;;0;100 'vm.cpu.utilization.mhz'=98MHz;;;0; 'vm.cpu.ready.percentage'=44%;;;0;100 'vm.core.cpu.utilization.percentage'=53MHz;;;0; 
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

| Mode                | Modèle de service associé                       |
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

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=cpu-vm \
    --help
```
