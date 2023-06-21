---
id: cloud-azure-compute-virtualmachine
title: Azure Virtual Machine
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Azure Virtual Machine** apporte un modèle d'hôte :

* **Cloud-Azure-Compute-VirtualMachine-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Compute-VirtualMachine-custom" label="Cloud-Azure-Compute-VirtualMachine-custom">

| Alias     | Modèle de service                                       | Description                          |
|:----------|:--------------------------------------------------------|:-------------------------------------|
| Cpu-Usage | Cloud-Azure-Compute-VirtualMachine-Cpu-Usage-Api-custom | Contrôle l'utilisation CPU           |
| Diskio    | Cloud-Azure-Compute-VirtualMachine-Diskio-Api-custom    | Contrôle l'utilisation des écritures |
| Health    | Cloud-Azure-Compute-VirtualMachine-Health-Api-custom    | Contrôle le statut de la VM          |
| Memory    | Cloud-Azure-Compute-VirtualMachine-Memory-Api-custom    | Contrôle l'utilisation de la memoire |
| Network   | Cloud-Azure-Compute-VirtualMachine-Network-Api-custom   | Contrôle l'utilisation réseau        |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-Compute-VirtualMachine** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                                             | Description                                                                |
|:----------------|:--------------------------------------------------------------|:---------------------------------------------------------------------------|
| Cpu-Credit      | Cloud-Azure-Compute-VirtualMachine-Cpu-Credit-Api-custom      | Contrôle l'utilisation des crédits CPU                                     |
| Vm-Sizes-Global | Cloud-Azure-Compute-VirtualMachine-Vm-Sizes-Global-Api-custom | Contrôle permettant de remonter le nombre de machines virtuelles par types |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

Le connecteur de supervision Centreon **Azure Virtual Machine** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure Virtual Machine**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée et de les ajouter à la liste des hôtes supervisés.

> Cette découverte n'est compatible qu'avec le [mode **api**. Le mode **azcli**](../getting-started/how-to-guides/azure-credential-configuration.md) n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la documentation dédiée pour en savoir plus sur la [découverte automatique d'hôtes](/docs/monitoring/discovery/hosts-discovery).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu-Credit" label="Cpu-Credit">

| Métrique                         | Unité |
|:---------------------------------|:------|
| azvm.cpu.credits.consumed.count  | count |
| azvm.cpu.credits.remaining.count | count |
| azvm.cpu.utilization.percentage  | %     |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Métrique                         | Unité |
|:---------------------------------|:------|
| azvm.cpu.credits.consumed.count  | count |
| azvm.cpu.credits.remaining.count | count |
| azvm.cpu.utilization.percentage  | %     |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Métrique                  | Unité |
|:--------------------------|:------|
| azvm.disk.read.bytes      | B     |
| azvm.disk.write.bytes     | B     |
| azvm.disk.read.persecond  |       |
| azvm.disk.write.persecond |       |

</TabItem>
<TabItem value="Health" label="Health">

Coming soon

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                    | Unité |
|:----------------------------|:------|
| azvm.memory.available.bytes | B     |

</TabItem>
<TabItem value="Network" label="Network">

| Métrique               | Unité |
|:-----------------------|:------|
| azvm.network.out.bytes | B     |
| azvm.network.in.bytes  | B     |

</TabItem>
<TabItem value="Vm-Sizes-Global" label="Vm-Sizes-Global">

Coming soon

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir
les prérequis nécessaires pour interroger les API d'Azure.

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
dnf install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Azure Virtual Machine**
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
dnf install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-azure-compute-virtualmachine-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-Compute-VirtualMachine-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires. Par exemple, pour ce connecteur, **AZURECUSTOMMODE** (valeurs possibles : **api** ou **azcli**). En effet, il existe plusieurs modes de communication avec l'équipement supervisé : soit l'outil en ligne de commande azcli, soit une interrogation directe de l'api.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Macro              | Description                                                                                                   | Valeur par défaut            | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------------------------|:-----------------------------|:------------|
| AZURECLIENTID      | Set Azure client ID                                                                                           |                              |             |
| AZURECLIENTSECRET  | Set Azure client secret                                                                                       |                              |             |
| AZURECUSTOMMODE    | When a plugin offers several ways  to get the an information the desired one must be defined with this option | api                          |             |
| AZURERESOURCE      | Set resource name or id                                                                                       |                              |             |
| AZURERESOURCEGROUP | Set resource group                                                                                            |                              |             |
| AZURESUBSCRIPTION  | Set Azure subscription                                                                                        |                              |             |
| AZURETENANT        | Set Azure tenant ID                                                                                           |                              |             |
| PROXYURL           | Proxy URL if any                                                                                              |                              |             |
| STATUSCRITICAL     | Set critical threshold for status . You can use the following variables: %{status}, %{summary}                | %{status} =~ /^Unavailable$/ |             |
| STATUSOK           | Set ok threshold for status . You can use the following variables: %{status}, %{summary}                      | %{status} =~ /^Available$/   |             |
| STATUSUNKNOWN      | Set unknown threshold for status . You can use the following variables: %{status}, %{summary}                 | %{status} =~ /^Unknown$/     |             |
| STATUSWARNING      | Set warning threshold for status . You can use the following variables: %{status}, %{summary}                 |                              |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)         |                              |             |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Macro              | Description                                                                                                   | Valeur par défaut            | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------------------------|:-----------------------------|:------------|
| AZURECUSTOMMODE    | When a plugin offers several ways  to get the an information the desired one must be defined with this option | api                          |             |
| AZURERESOURCE      | Set resource name or id                                                                                       |                              |             |
| AZURERESOURCEGROUP | Set resource group                                                                                            |                              |             |
| AZURESUBSCRIPTION  | Set Azure subscription                                                                                        |                              |             |
| PROXYURL           | Proxy URL if any                                                                                              |                              |             |
| STATUSCRITICAL     | Set critical threshold for status . You can use the following variables: %{status}, %{summary}                | %{status} =~ /^Unavailable$/ |             |
| STATUSOK           | Set ok threshold for status . You can use the following variables: %{status}, %{summary}                      | %{status} =~ /^Available$/   |             |
| STATUSUNKNOWN      | Set unknown threshold for status . You can use the following variables: %{status}, %{summary}                 | %{status} =~ /^Unknown$/     |             |
| STATUSWARNING      | Set warning threshold for status . You can use the following variables: %{status}, %{summary}                 |                              |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)         |                              |             |

</TabItem>
</Tabs>

> Deux méthodes peuvent être utilisées pour définir l'authentification :
>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro **AZURERESOURCE**.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu-Credit" label="Cpu-Credit">

| Macro                       | Description                                                                                                  | Valeur par défaut | Obligatoire |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERMETRIC                | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp) | Credits           |             |
| TIMEFRAME                   |                                                                                                              | 900               |             |
| INTERVAL                    |                                                                                                              | PT1M              |             |
| AGGREGATION                 |                                                                                                              | average           |             |
| WARNINGCPUCREDITSCONSUMED   | Warning threshold                                                                                            |                   |             |
| CRITICALCPUCREDITSCONSUMED  | Critical threshold                                                                                           |                   |             |
| WARNINGCPUCREDITSREMAINING  | Warning threshold                                                                                            |                   |             |
| CRITICALCPUCREDITSREMAINING | Critical threshold                                                                                           |                   |             |
| WARNINGCPUUTILIZATION       | Warning threshold                                                                                            |                   |             |
| CRITICALCPUUTILIZATION      | Critical threshold                                                                                           |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)          | --verbose         |             |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Macro                       | Description                                                                                                  | Valeur par défaut | Obligatoire |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERMETRIC                | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp) | Percentage        |             |
| TIMEFRAME                   |                                                                                                              | 900               |             |
| INTERVAL                    |                                                                                                              | PT1M              |             |
| AGGREGATION                 |                                                                                                              | average           |             |
| WARNINGCPUCREDITSCONSUMED   | Warning threshold                                                                                            |                   |             |
| CRITICALCPUCREDITSCONSUMED  | Critical threshold                                                                                           |                   |             |
| WARNINGCPUCREDITSREMAINING  | Warning threshold                                                                                            |                   |             |
| CRITICALCPUCREDITSREMAINING | Critical threshold                                                                                           |                   |             |
| WARNINGCPUUTILIZATION       | Warning threshold                                                                                            | 80                |             |
| CRITICALCPUUTILIZATION      | Critical threshold                                                                                           | 90                |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)          | --verbose         |             |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Macro                     | Description                                                                                                                               | Valeur par défaut   | Obligatoire |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:------------|
| TIMEFRAME                 |                                                                                                                                           | 900                 |             |
| INTERVAL                  |                                                                                                                                           | PT1M                |             |
| AGGREGATION               |                                                                                                                                           | average             |             |
| FILTERMETRIC              | Filter metrics (Can be: 'Disk Read Bytes', 'Disk Write Bytes', 'Disk Read Operations/Sec', 'Disk Write Operations/Sec') (Can be a regexp) |                     |             |
| WARNINGREADBYTES          | Warning thresholds                                                                                                                        |                     |             |
| CRITICALREADBYTES         | Critical thresholds                                                                                                                       |                     |             |
| WARNINGREADOPSPERSECOND   | Warning thresholds                                                                                                                        |                     |             |
| CRITICALREADOPSPERSECOND  | Critical thresholds                                                                                                                       |                     |             |
| WARNINGWRITEBYTES         | Warning thresholds                                                                                                                        |                     |             |
| CRITICALWRITEBYTES        | Critical thresholds                                                                                                                       |                     |             |
| WARNINGWRITEOPSPERSECOND  | Warning thresholds                                                                                                                        |                     |             |
| CRITICALWRITEOPSPERSECOND | Critical thresholds                                                                                                                       |                     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                       | --per-sec --verbose |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                   | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| TIMEFRAME               |                                                                                                     | 900               |             |
| INTERVAL                |                                                                                                     | PT1M              |             |
| AGGREGATION             |                                                                                                     | average           |             |
| WARNINGMEMORYAVAILABLE  | Warning threshold                                                                                   |                   |             |
| CRITICALMEMORYAVAILABLE | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Network" label="Network">

| Macro            | Description                                                                                         | Valeur par défaut   | Obligatoire |
|:-----------------|:----------------------------------------------------------------------------------------------------|:--------------------|:------------|
| TIMEFRAME        |                                                                                                     | 900                 |             |
| INTERVAL         |                                                                                                     | PT1M                |             |
| AGGREGATION      |                                                                                                     | average             |             |
| FILTERMETRIC     | Filter metrics (Can be: 'Network In', 'Network Out') (Can be a regexp)                              |                     |             |
| WARNINGBYTESIN   | Warning thresholds                                                                                  |                     |             |
| CRITICALBYTESIN  | Critical thresholds                                                                                 |                     |             |
| WARNINGBYTESOUT  | Warning thresholds                                                                                  |                     |             |
| CRITICALBYTESOUT | Critical thresholds                                                                                 |                     |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --per-sec --verbose |             |

</TabItem>
<TabItem value="Vm-Sizes-Global" label="Vm-Sizes-Global">

| Macro        | Description                                                                                                             | Valeur par défaut | Obligatoire |
|:-------------|:------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERTYPE   | Filter by virtual machine type (regexp) (Can be: 'general', 'compute', 'memory', 'storage', 'gpu', 'high\_performance') | .*                |             |
| FILTERSIZE   | Filter by virtual machine size (regexp)                                                                                 | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                     | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une instance Azure en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
	--mode=cpu \
	--custommode='api' \
	--resource='' \
	--resource-group='' \
	--subscription='' \
	--tenant='' \
	--client-id='' \
	--client-secret='' \
	--proxyurl=''  \
	--filter-metric='Credits' \
	--timeframe='900' \
	--interval='PT1M' \
	--aggregation='average' \
	--warning-cpu-credits-remaining='' \
	--critical-cpu-credits-remaining='' \
	--warning-cpu-utilization='' \
	--critical-cpu-utilization='' \
	--warning-cpu-credits-consumed='' \
	--critical-cpu-credits-consumed='' \
	--verbose\
	
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Credits consumed Credits remaining Percentage | 'azvm.cpu.credits.consumed.count'=51;;;0; 'azvm.cpu.credits.remaining.count'=13;;;0; 'azvm.cpu.utilization.percentage'=9%;;;0;100 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode           | Modèle de service associé                                                                                             |
|:---------------|:----------------------------------------------------------------------------------------------------------------------|
| cpu            | Cloud-Azure-Compute-VirtualMachine-Cpu-Credit-Api-custom<br />Cloud-Azure-Compute-VirtualMachine-Cpu-Usage-Api-custom |
| discovery      | Used for host discovery                                                                                               |
| diskio         | Cloud-Azure-Compute-VirtualMachine-Diskio-Api-custom                                                                  |
| health         | Cloud-Azure-Compute-VirtualMachine-Health-Api-custom                                                                  |
| list-resources | Not used in this Monitoring Connector                                                                                 |
| memory         | Cloud-Azure-Compute-VirtualMachine-Memory-Api-custom                                                                  |
| network        | Cloud-Azure-Compute-VirtualMachine-Network-Api-custom                                                                 |
| vm-sizes       | Cloud-Azure-Compute-VirtualMachine-Vm-Sizes-Global-Api-custom                                                         |
| vms-state      | Not used in this Monitoring Connector                                                                                 |

### Custom modes disponibles

Ce connecteur offre plusieurs méthodes pour se connecter à la ressource (CLI, bibliothèque, etc.), appelées **custom modes**.
Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
    --list-custommode
```

Le plugin apporte les custom modes suivants :

* api
* azcli

### Options disponibles

#### Options génériques

Les options génériques aux modes sont listées ci-dessous :

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Microsoft Azure CLI 2.0      To install the Azure CLI 2.0 in a CentOS/RedHat environment :      (As root)      # rpm --import https://packages.microsoft.com/keys/microsoft.asc      # sh -c 'echo -e "\[azure-cli\]\nname=Azure     CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=     1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc"     \> /etc/yum.repos.d/azure-cli.repo'      # yum install azure-cli      (As centreon-engine)      # az login      Go to https://aka.ms/devicelogin and enter the code given by the last     command.      For futher informations, visit     https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-     cli-latest.                                                                                                                   | Output |

#### Options des custom modes

Les options spécifiques aux **custom modes** sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option                 | Description                                                                                                                                                                                                                                   | Type         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --subscription         | Set Azure subscription ID.                                                                                                                                                                                                                    | Api          |
| --tenant               | Set Azure tenant ID.                                                                                                                                                                                                                          | Api          |
| --client-id            | Set Azure client ID.                                                                                                                                                                                                                          | Api          |
| --client-secret        | Set Azure client secret.                                                                                                                                                                                                                      | Api          |
| --login-endpoint       | Set Azure login endpoint URL (Default: 'https://login.microsoftonline.com')                                                                                                                                                                   | Api          |
| --management-endpoint  | Set Azure management endpoint URL (Default: 'https://management.azure.com')                                                                                                                                                                   | Api          |
| --timeframe            | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                      | Api          |
| --interval             | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                                                                                               | Api          |
| --aggregation          | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                                                       | Api          |
| --zeroed               | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                                                                                                           | Api          |
| --timeout              | Set timeout in seconds (Default: 10).                                                                                                                                                                                                         | Api          |
| --http-peer-addr       | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                           | Http global  |
| --proxyurl             | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                           | Http global  |
| --proxypac             | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                | Http global  |
| --insecure             | Accept insecure SSL connections.                                                                                                                                                                                                              | Http global  |
| --http-backend         | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                       | Http global  |
| --ssl-opt              | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                     | Backend lwp  |
| --curl-opt             | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                              | Backend curl |
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention    |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention    |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     | Retention    |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention    |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention    |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention    |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention    |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention    |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention    |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention    |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention    |

</TabItem>
<TabItem value="azcli" label="azcli">

| Option            | Description                                                                                                               | Type  |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------|:------|
| --subscription    | Set Azure subscription (Required if logged to several subscriptions).                                                     | Azcli |
| --timeframe       | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                  | Azcli |
| --interval        | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                           | Azcli |
| --aggregation     | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.   | Azcli |
| --zeroed          | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                       | Azcli |
| --timeout         | Set timeout in seconds (Default: 50).                                                                                     | Azcli |
| --sudo            | Use 'sudo' to execute the command.                                                                                        | Azcli |
| --command         | Command to get information (Default: 'az'). Can be changed if you have output in a file.                                  | Azcli |
| --command-path    | Command path (Default: none).                                                                                             | Azcli |
| --command-options | Command options (Default: none).                                                                                          | Azcli |
| --proxyurl        | Proxy URL if any                                                                                                          | Azcli |

</TabItem>
</Tabs>

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Cpu-Credit" label="Cpu-Credit">

| Option             | Description                                                                                                                            | Type        |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode |
| --per-sec          | Display the statistics based on a per-second period.                                                                                   | Custom mode |
| --resource         | Set resource name or id (Required).                                                                                                    | Mode        |
| --resource-group   | Set resource group (Required if resource's name is used).                                                                              | Mode        |
| --filter-metric    | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp).                          | Mode        |
| --warning-$label$  | Warning threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')                                 | Mode        |
| --critical-$label$ | Critical threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')                                | Mode        |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Option             | Description                                                                                                                            | Type        |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode |
| --per-sec          | Display the statistics based on a per-second period.                                                                                   | Custom mode |
| --resource         | Set resource name or id (Required).                                                                                                    | Mode        |
| --resource-group   | Set resource group (Required if resource's name is used).                                                                              | Mode        |
| --filter-metric    | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp).                          | Mode        |
| --warning-$label$  | Warning threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')                                 | Mode        |
| --critical-$label$ | Critical threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')                                | Mode        |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Option             | Description                                                                                                                                  | Type        |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"         | Custom mode |
| --per-sec          | Display the statistics based on a per-second period.                                                                                         | Custom mode |
| --resource         | Set resource name or id (Required).                                                                                                          | Mode        |
| --resource-group   | Set resource group (Required if resource's name is used).                                                                                    | Mode        |
| --filter-metric    | Filter metrics (Can be: 'Disk Read Bytes', 'Disk Write Bytes', 'Disk Read Operations/Sec', 'Disk Write Operations/Sec') (Can be a regexp).   | Mode        |
| --warning-$label$  | Warning thresholds. ($label$ can be: 'read-bytes', 'write-bytes', 'read-ops-persecond', 'write-ops-persecond')                               | Mode        |
| --critical-$label$ | Critical thresholds. ($label$ can be: 'read-bytes', 'write-bytes', 'read-ops-persecond', 'write-ops-persecond')                              | Mode        |
| --per-sec          | Transform Disk Read Bytes & Disk Write Bytes in a persecond value. (Inherited from base class)                                               | Mode        |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                               | Type |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --resource        | Set resource name or id (Required).                                                                                                       | Mode |
| --resource-group  | Set resource group (Required if resource's name is used).                                                                                 | Mode |
| --warning-status  | Set warning threshold for status (Default: ''). You can use the following variables: %{status}, %{summary}                                | Mode |
| --critical-status | Set critical threshold for status (Default: '%{status} =~ /^Unavailable$/'). You can use the following variables: %{status}, %{summary}   | Mode |
| --unknown-status  | Set unknown threshold for status (Default: '%{status} =~ /^Unknown$/'). You can use the following variables: %{status}, %{summary}        | Mode |
| --ok-status       | Set ok threshold for status (Default: '%{status} =~ /^Available$/'). You can use the following variables: %{status}, %{summary}           | Mode |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                      | Description                                                                                                                            | Type        |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-dimension          | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode |
| --per-sec                   | Display the statistics based on a per-second period.                                                                                   | Custom mode |
| --resource                  | Set resource name or id (Required).                                                                                                    | Mode        |
| --resource-group            | Set resource group (Required if resource's name is used).                                                                              | Mode        |
| --warning-memory-available  | Warning threshold.                                                                                                                     | Mode        |
| --critical-memory-available | Critical threshold.                                                                                                                    | Mode        |

</TabItem>
<TabItem value="Network" label="Network">

| Option             | Description                                                                                                                            | Type        |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode |
| --per-sec          | Display the statistics based on a per-second period.                                                                                   | Custom mode |
| --resource         | Set resource name or id (Required).                                                                                                    | Mode        |
| --resource-group   | Set resource group (Required if resource's name is used).                                                                              | Mode        |
| --filter-metric    | Filter metrics (Can be: 'Network In', 'Network Out') (Can be a regexp).                                                                | Mode        |
| --warning-$label$  | Warning thresholds ($label$ can be: 'bytes-in', 'bytes-out').                                                                          | Mode        |
| --critical-$label$ | Critical thresholds ($label$ can be: 'bytes-in', 'bytes-out').                                                                         | Mode        |
| --per-sec          | Transform value to obtain Bytes/second. (Inherited from base class)                                                                    | Mode        |

</TabItem>
<TabItem value="Vm-Sizes-Global" label="Vm-Sizes-Global">

| Option           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Type |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --resource-group | Set resource group (Optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Mode |
| --filter-type    | Filter by virtual machine type (regexp) (Can be: 'general', 'compute', 'memory', 'storage', 'gpu', 'high\_performance')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Mode |
| --filter-size    | Filter by virtual machine size (regexp)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Mode |
| --warning-*      | Threshold warning. Can be: 'standard-b1s', 'standard-b1ms', 'standard-b2s', 'standard-b2ms', 'standard-b4ms', 'standard-b8ms', 'standard-d2s-v3', 'standard-d4s-v3', 'standard-d8s-v3', 'standard-d16s-v3', 'standard-d32s-v3', 'standard-d64s-v3', 'standard-d2-v3', 'standard-d4-v3', 'standard-d8-v3', 'standard-d16-v3', 'standard-d32-v3', 'standard-d64-v3', 'standard-ds1-v2', 'standard-ds2-v2', 'standard-ds3-v2', 'standard-ds4-v2', 'standard-ds5-v2', 'standard-d1-v2', 'standard-d2-v2', 'standard-d3-v2', 'standard-d4-v2', 'standard-d5-v2', 'standard-a1-v2', 'standard-a2-v2', 'standard-a4-v2', 'standard-a8-v2', 'standard-a2m-v2', 'standard-a4m-v2', 'standard-a8m-v2', 'standard-f2s-v2', 'standard-f4s-v2', 'standard-f8s-v2', 'standard-f16s-v2', 'standard-f32s-v2', 'standard-f64s-v2', 'standard-f72s-v2', 'standard-f1s', 'standard-f2s', 'standard-f4s', 'standard-f8s', 'standard-f16s', 'standard-f1', 'standard-f2', 'standard-f4', 'standard-f8', 'standard-f16', 'standard-e2s-v3', 'standard-e4s-v3', 'standard-e8s-v3', 'standard-e16s-v3', 'standard-e32s-v3', 'standard-e64s-v3', 'standard-e64is-v3', 'standard-e2-v3', 'standard-e4-v3', 'standard-e8-v3', 'standard-e16-v3', 'standard-e32-v3', 'standard-e64-v3', 'standard-e64i-v3', 'standard-m8ms3', 'standard-m16ms', 'standard-m32ts', 'standard-m32ls', 'standard-m32ms', 'standard-m64s', 'standard-m64ls', 'standard-m64ms', 'standard-m128s', 'standard-m128ms', 'standard-m64', 'standard-m64m', 'standard-m128', 'standard-m128m', 'standard-gs1', 'standard-gs2', 'standard-gs3', 'standard-gs4', 'standard-gs5', 'standard-g1', 'standard-g2', 'standard-g3', 'standard-g4', 'standard-g5', 'standard-ds11-v2', 'standard-ds12-v2', 'standard-ds13-v2', 'standard-ds14-v2', 'standard-ds15-v2', 'standard-d11-v2', 'standard-d12-v2', 'standard-d13-v2', 'standard-d14-v2', 'standard-d15-v2', 'standard-l4s', 'standard-l8s', 'standard-l16s', 'standard-l32s', 'standard-nc6', 'standard-nc12', 'standard-nc24', 'standard-nc24r', 'standard-nc6s-v2', 'standard-nc12s-v2', 'standard-nc24s-v2', 'standard-nc24rs-v2', 'standard-nc6s-v3', 'standard-nc12s-v3', 'standard-nc24s-v3', 'standard-nc24rs-v3', 'standard-nd6s', 'standard-nd12s', 'standard-nd24s', 'standard-nd24rs', 'standard-nv6', 'standard-nv12', 'standard-nv24','standard-h8', 'standard-h16', 'standard-h8m', 'standard-h16m', 'standard-h16r', 'standard-h16mr'.    | Mode |
| --critical-*     | Threshold critical. Can be: 'standard-b1s', 'standard-b1ms', 'standard-b2s', 'standard-b2ms', 'standard-b4ms', 'standard-b8ms', 'standard-d2s-v3', 'standard-d4s-v3', 'standard-d8s-v3', 'standard-d16s-v3', 'standard-d32s-v3', 'standard-d64s-v3', 'standard-d2-v3', 'standard-d4-v3', 'standard-d8-v3', 'standard-d16-v3', 'standard-d32-v3', 'standard-d64-v3', 'standard-ds1-v2', 'standard-ds2-v2', 'standard-ds3-v2', 'standard-ds4-v2', 'standard-ds5-v2', 'standard-d1-v2', 'standard-d2-v2', 'standard-d3-v2', 'standard-d4-v2', 'standard-d5-v2', 'standard-a1-v2', 'standard-a2-v2', 'standard-a4-v2', 'standard-a8-v2', 'standard-a2m-v2', 'standard-a4m-v2', 'standard-a8m-v2', 'standard-f2s-v2', 'standard-f4s-v2', 'standard-f8s-v2', 'standard-f16s-v2', 'standard-f32s-v2', 'standard-f64s-v2', 'standard-f72s-v2', 'standard-f1s', 'standard-f2s', 'standard-f4s', 'standard-f8s', 'standard-f16s', 'standard-f1', 'standard-f2', 'standard-f4', 'standard-f8', 'standard-f16', 'standard-e2s-v3', 'standard-e4s-v3', 'standard-e8s-v3', 'standard-e16s-v3', 'standard-e32s-v3', 'standard-e64s-v3', 'standard-e64is-v3', 'standard-e2-v3', 'standard-e4-v3', 'standard-e8-v3', 'standard-e16-v3', 'standard-e32-v3', 'standard-e64-v3', 'standard-e64i-v3', 'standard-m8ms3', 'standard-m16ms', 'standard-m32ts', 'standard-m32ls', 'standard-m32ms', 'standard-m64s', 'standard-m64ls', 'standard-m64ms', 'standard-m128s', 'standard-m128ms', 'standard-m64', 'standard-m64m', 'standard-m128', 'standard-m128m', 'standard-gs1', 'standard-gs2', 'standard-gs3', 'standard-gs4', 'standard-gs5', 'standard-g1', 'standard-g2', 'standard-g3', 'standard-g4', 'standard-g5', 'standard-ds11-v2', 'standard-ds12-v2', 'standard-ds13-v2', 'standard-ds14-v2', 'standard-ds15-v2', 'standard-d11-v2', 'standard-d12-v2', 'standard-d13-v2', 'standard-d14-v2', 'standard-d15-v2', 'standard-l4s', 'standard-l8s', 'standard-l16s', 'standard-l32s', 'standard-nc6', 'standard-nc12', 'standard-nc24', 'standard-nc24r', 'standard-nc6s-v2', 'standard-nc12s-v2', 'standard-nc24s-v2', 'standard-nc24rs-v2', 'standard-nc6s-v3', 'standard-nc12s-v3', 'standard-nc24s-v3', 'standard-nc24rs-v3', 'standard-nd6s', 'standard-nd12s', 'standard-nd24s', 'standard-nd24rs', 'standard-nv6', 'standard-nv12', 'standard-nv24','standard-h8', 'standard-h16', 'standard-h8m', 'standard-h16m', 'standard-h16r', 'standard-h16mr'.   | Mode |
| --running        | Only check running virtual machines (only with az CLI).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
	--mode=cpu \
    --help
```
