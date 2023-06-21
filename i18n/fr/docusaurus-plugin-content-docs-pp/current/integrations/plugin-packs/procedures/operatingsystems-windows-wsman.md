---
id: operatingsystems-windows-wsman
title: Windows WSMAN
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Windows WSMAN** apporte un modèle d'hôte :

* **OS-Windows-WSMAN-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-Windows-WSMAN-custom" label="OS-Windows-WSMAN-custom">

| Alias         | Modèle de service                     | Description                                                                                                                                                                  |
|:--------------|:--------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu           | OS-Windows-Cpu-WSMAN-custom           | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |
| Memory        | OS-Windows-Memory-WSMAN-custom        | Contrôle du taux d'utilisation de la mémoire vive                                                                                                                            |
| Services-Auto | OS-Windows-Services-Auto-WSMAN-custom | Contrôle permettant de vérifier si les services Windows sont démarrés                                                                                                        |
| Swap          | OS-Windows-Swap-WSMAN-custom          | Contrôle du taux d'utilisation de la mémoire virtuelle                                                                                                                       |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-Windows-WSMAN** est utilisé.

</TabItem>
<TabItem value="Not attached to a host template-custom" label="Not attached to a host template-custom">

| Alias              | Modèle de service                          | Description                                                                                                                                                 | Découverte |
|:-------------------|:-------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
| Disk-Global        | OS-Windows-Disk-Global-WSMAN-custom        | Contrôle du taux d'espace libre disponible du disque. Pour chaque contrôle apparaîtra le nom du disque                                                      | X          |
| Files-Date-Generic | OS-Windows-Files-Date-Generic-WSMAN-custom | Contrôle le temps                                                                                                                                           |            |
| Files-Size-Generic | OS-Windows-Files-Size-Generic-WSMAN-custom | Contrôle la taille des fichiers                                                                                                                             |            |
| Ntp                | OS-Windows-Ntp-WSMAN-custom                | Contrôle la synchronisation avec un serveur NTP                                                                                                             |            |
| Pending-Reboot     | OS-Windows-Pending-Reboot-WSMAN-custom     | Contrôle si Windows nécessite un redémarrage                                                                                                                |            |
| Process-Global     | OS-Windows-Process-Global-WSMAN-custom     | Contrôle permettant de vérifier que les processus Windows sont démarrés                                                                                     | X          |
| Service-Generic    | OS-Windows-Service-Generic-WSMAN-custom    | Contrôle permettant de vérifier si les services Windows sont démarrés                                                                                       | X          |
| Sessions           | OS-Windows-Sessions-WSMAN-custom           | Contrôle les sessions utilisateurs Windows                                                                                                                  |            |
| Traffic-Global     | OS-Windows-Traffic-Global-WSMAN-custom     | Contrôle de la bande passante de l'interface. Pour chaque contrôle apparaîtra le nom de l'interface                                                         | X          |
| Updates            | OS-Windows-Updates-WSMAN-custom            | Contrôle si Windows a des mises à jour en attente                                                                                                           |            |
| Uptime             | OS-Windows-Uptime-WSMAN-custom             | Contrôle permettant de vérifier la disponibilité du serveur Windows depuis le dernier redémarrage. Il s'agit d'une indication, il n'y a pas de seuil défini |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                 | Description                                                   |
|:--------------------------------|:--------------------------------------------------------------|
| OS-Windows-WSMAN-Disk-Name      | Discover the disk partitions and monitor space occupation     |
| OS-Windows-WSMAN-Processes-Name | Discover processes and monitor their system usage             |
| OS-Windows-WSMAN-Services-Name  | Discover services and monitor their system usage              |
| OS-Windows-WSMAN-Traffic-Name   | Discover network interfaces and monitor bandwidth utilization |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| cpu.utilization.percentage               | %     |
| cpu_core#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| storages.detected.count                 | count |
| storages#storage.space.usage.bytes      | B     |
| storages#storage.space.free.bytes       | B     |
| storages#storage.space.usage.percentage | %     |

</TabItem>
<TabItem value="Files-Date-Generic" label="Files-Date-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| file.mtime.last.seconds | s     |

</TabItem>
<TabItem value="Files-Size-Generic" label="Files-Size-Generic">

| Métrique         | Unité |
|:-----------------|:------|
| file.size.bytes  | B     |
| files.size.bytes | B     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Métrique            | Unité |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Métrique    | Unité |
|:------------|:------|
| status      | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Process-Global" label="Process-Global">

| Métrique                 | Unité |
|:-------------------------|:------|
| processes.detected.count | count |

</TabItem>
<TabItem value="Service-Generic" label="Service-Generic">

Coming soon

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

Coming soon

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Métrique                            | Unité |
|:------------------------------------|:------|
| sessions.created.total.count        | count |
| sessions.disconnected.total.count   | count |
| sessions.reconnected.total.count    | count |
| sessions.active.current.count       | count |
| sessions.disconnected.current.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique                          | Unité |
|:----------------------------------|:------|
| files#page.space.usage.bytes      | B     |
| files#page.space.free.bytes       | B     |
| files#page.space.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| interfaces#interface.traffic.in.bitspersecond  |       |
| interfaces#interface.traffic.out.bitspersecond |       |
| interfaces#interface.packets.in.discard.count  | count |
| interfaces#interface.packets.in.error.count    | count |
| interfaces#interface.packets.out.discard.count | count |
| interfaces#interface.packets.out.error.count   | count |

</TabItem>
<TabItem value="Updates" label="Updates">

| Métrique                      | Unité |
|:------------------------------|:------|
| windows.pending.updates.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique              | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

Pour superviser les serveurs Windows via WSMAN, merci de suivre notre [documentation officielle](../getting-started/how-to-guides/windows-winrm-wsman-tutorial.md) et de vous assurer que WinRM et vos droits sont correctement configurés.

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
dnf install centreon-pack-operatingsystems-windows-wsman
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-wsman
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-operatingsystems-windows-wsman
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-windows-wsman
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Windows WSMAN**
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
dnf install centreon-plugin-Operatingsystems-Windows-Wsman
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Wsman
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-operatingsystems-windows-wsman
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Windows-Wsman
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-Windows-WSMAN-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro             | Description                                                                                           | Valeur par défaut | Obligatoire |
|:------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| WSMANPASSWORD     | Define the password associated with the user name                                                     |                   |             |
| WSMANPORT         | Define the port to connect to                                                                         | 5985              |             |
| WSMANPROTO        | Define the transport scheme                                                                           | http              |             |
| WSMANUSERNAME     | Define the username for authentication                                                                |                   |             |
| WSMANEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro           | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGAVERAGE  | Warning threshold average CPU utilization                                                           | 80                |             |
| CRITICALAVERAGE | Critical threshold average CPU utilization                                                          | 90                |             |
| WARNINGCORE     | Warning thresholds for each CPU core                                                                |                   |             |
| CRITICALCORE    | Critical thresholds for each CPU core                                                               |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Macro         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| STORAGE       | Filter storages by name (can be a regexp)                                                           |                   |             |
| WARNINGUSAGE  | Thresholds                                                                                          | 80                |             |
| CRITICALUSAGE | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Files-Date-Generic" label="Files-Date-Generic">

| Macro          | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FOLDER         | Folder to check. (No WQL wildcard allowed) Ex: 'C:/Users/Administrator/'                            |                   |             |
| FILTERFILENAME | Filter files by name                                                                                |                   |             |
| WARNING        | Threshold warning in seconds for each files (diff time)                                             |                   |             |
| CRITICAL       | Threshold critical in seconds for each files (diff time)                                            |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Files-Size-Generic" label="Files-Size-Generic">

| Macro          | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FOLDER         | Folder to check. (No WQL wildcard allowed) Ex: 'C:/Users/Administrator/'                            |                   |             |
| FILTERFILENAME | Filter files by name                                                                                |                   |             |
| WARNINGONE     | Threshold warning in bytes for each files/directories                                               |                   |             |
| CRITICALONE    | Threshold critical in bytes for each files/directories                                              |                   |             |
| WARNINGTOTAL   | Threshold warning in bytes for all files/directories                                                |                   |             |
| CRITICALTOTAL  | Threshold critical in bytes for all files/directories                                               |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro             | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGUSAGEPRCT  | Thresholds                                                                                          | 80                |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro        | Description                                                                                                     | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| NTPADDR      | Set the ntp hostname (if not set, localtime is used)                                                            |                   |             |
| NTPPORT      | Set the ntp port (Default: 123)                                                                                 |                   |             |
| TIMEZONE     | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100' |                   |             |
| WARNING      | Time offset warning threshold (in seconds)                                                                      | -1:1              |             |
| CRITICAL     | Time offset critical Threshold (in seconds)                                                                     | -2:2              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)             |                   |             |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Macro         | Description                                                                                         | Valeur par défaut           | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| WARNINGSTATUS |                                                                                                     | %{RebootPending} =~ /true/i |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                             |             |

</TabItem>
<TabItem value="Process-Global" label="Process-Global">

| Macro         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| PROCESSNAME   | Filter process name                                                                                 |                   |             |
| CRITICALCOUNT | Threshold critical of matching processes detected                                                   | 1:                |             |
| WARNINGCOUNT  | Threshold warning of matching processes detected                                                    |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Service-Generic" label="Service-Generic">

| Macro        | Description                                                                                                                                                                                         | Valeur par défaut    | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:------------|
| SERVICENAME  | Services to monitor. Syntax: \[service\_name\[\[=\|!=\]state\]\],... Available states are: - Stopped - Start Pending - Stop Pending - Running - Continue Pending - Pause Pending - Paused - Unknown | SERVICE!=Running     |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                 | --critical --verbose |             |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXCLUDE      | Exclude some services for --auto option (Can be a regexp)                                           |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| LANGUAGE                     | Set the language used in config file (default: 'en')                                                                                             | en                |             |
| FILTERSESSIONNAME            | Filter session name (can be a regexp)                                                                                                            |                   |             |
| CONFIG                       | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file |                   |             |
| WARNINGSESSIONSACTIVE        | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSACTIVE       | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSCREATED       | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSCREATED      | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSDISCONNECTED  | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSDISCONNECTED | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSRECONNECTED   | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSRECONNECTED  | Thresholds                                                                                                                                       |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                              |                   |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| CRITICALPRCT | Thresholds                                                                                          | 20                |             |
| WARNINGPRCT  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTER       | Filter interface name (regexp can be used)                                                          | .*                |             |
| WARNINGIN    | Thresholds                                                                                          | 80                |             |
| CRITICALIN   | Thresholds                                                                                          | 90                |             |
| WARNINGOUT   | Thresholds                                                                                          | 80                |             |
| CRITICALOUT  | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                  | Description                                                                                         | Valeur par défaut           | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| FILTERTITLE            | Filter windows updates by title (can be a regexp)                                                   |                             |             |
| EXCLUDETITLE           | Exclude windows updates by title (regexp can be used)                                               |                             |             |
| FILTERMANDATORY        |                                                                                                     |                             |             |
| WARNINGPENDINGUPDATES  | Thresholds                                                                                          |                             |             |
| CRITICALPENDINGUPDATES | Thresholds                                                                                          |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose --display-updates |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning                                                                                   |                   |             |
| CRITICAL     | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

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
/usr/lib/centreon/plugins//centreon_windows_wsman.pl \
	--plugin=os::windows::wsman::plugin \
	--mode=cpu \
	--hostname=10.0.0.1 \
	--wsman-scheme=http \
	--wsman-port=5985 \
	--wsman-username='' \
	--wsman-password=''  \
	--warning-core='' \
	--critical-core='' \
	--warning-average='80' \
	--critical-average='90' \
	--verbose\
	
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:   | 'cpu.utilization.percentage'=37%;;;0;100 'core.cpu.utilization.percentage'=80%;;;0;100 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_windows_wsman.pl \
	--plugin=os::windows::wsman::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode            | Modèle de service associé                                                          |
|:----------------|:-----------------------------------------------------------------------------------|
| cpu             | OS-Windows-Cpu-WSMAN-custom                                                        |
| eventlog        | Not used in this Monitoring Connector                                              |
| files-date      | OS-Windows-Files-Date-Generic-WSMAN-custom                                         |
| files-size      | OS-Windows-Files-Size-Generic-WSMAN-custom                                         |
| interfaces      | OS-Windows-Traffic-Global-WSMAN-custom                                             |
| list-interfaces | Used for service discovery                                                         |
| list-processes  | Used for service discovery                                                         |
| list-services   | Used for service discovery                                                         |
| list-storages   | Used for service discovery                                                         |
| memory          | OS-Windows-Memory-WSMAN-custom                                                     |
| pages           | OS-Windows-Swap-WSMAN-custom                                                       |
| pending-reboot  | OS-Windows-Pending-Reboot-WSMAN-custom                                             |
| processes       | OS-Windows-Process-Global-WSMAN-custom                                             |
| services        | OS-Windows-Service-Generic-WSMAN-custom<br />OS-Windows-Services-Auto-WSMAN-custom |
| sessions        | OS-Windows-Sessions-WSMAN-custom                                                   |
| storages        | OS-Windows-Disk-Global-WSMAN-custom                                                |
| time            | OS-Windows-Ntp-WSMAN-custom                                                        |
| updates         | OS-Windows-Updates-WSMAN-custom                                                    |
| uptime          | OS-Windows-Uptime-WSMAN-custom                                                     |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Need at least openwsman-perl version \>= 2.4.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --hostname                                 | Define the hostname to query (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Wsman  |
| --wsman-port                               | Define the port to connect to (default: 5985).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Wsman  |
| --wsman-path                               | Define the path of the WSMAN URL if it has been customized (default: '/wsman').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Wsman  |
| --wsman-scheme                             | Define the transport scheme (default: 'http').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Wsman  |
| --wsman-username                           | Define the username for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Wsman  |
| --wsman-password                           | Define the password associated with the user name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Wsman  |
| --wsman-timeout                            | Define the HTTP transport timeout in seconds (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Wsman  |
| --wsman-auth-method                        | Define the authentication method. Available methods: noauth, basic (default), pass, digest, ntlm, gssnegotiate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Wsman  |
| --wsman-proxy-url                          | Define the URL of the HTTP proxy to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Wsman  |
| --wsman-proxy-username                     | Define the user name to authenticate to the proxy server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Wsman  |
| --wsman-proxy-password                     | Define the password to authenticate to the proxy server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Wsman  |
| --wsman-debug                              | Define the openwsman log level. Available levels: error, critical, warning, message, info (default), debug.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Wsman  |
| --wsman-errors-exit                        | Define the expected exit code when wsman errors occur (default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Wsman  |

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
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
<TabItem value="Disk-Global" label="Disk-Global">

| Option                   | Description                                                                           | Type |
|:-------------------------|:--------------------------------------------------------------------------------------|:-----|
| --filter-name            | Filter storages by name (can be a regexp).                                            | Mode |
| --filter-type            | Filter storages by type (can be a regexp) (Default: 'localDisk').                     | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B), 'space-usage-free' (B), 'space-usage-prct'.    | Mode |

</TabItem>
<TabItem value="Files-Date-Generic" label="Files-Date-Generic">

| Option            | Description                                                                 | Type |
|:------------------|:----------------------------------------------------------------------------|:-----|
| --folder          | Folder to check. (No WQL wildcard allowed) Ex: 'C:/Users/Administrator/'.   | Mode |
| --filter-filename | Filter files by name.                                                       | Mode |
| --warning         | Threshold warning in seconds for each files (diff time).                    | Mode |
| --critical        | Threshold critical in seconds for each files (diff time).                   | Mode |

</TabItem>
<TabItem value="Files-Size-Generic" label="Files-Size-Generic">

| Option            | Description                                                                 | Type |
|:------------------|:----------------------------------------------------------------------------|:-----|
| --folder          | Folder to check. (No WQL wildcard allowed) Ex: 'C:/Users/Administrator/'.   | Mode |
| --filter-filename | Filter files by name.                                                       | Mode |
| --warning-one     | Threshold warning in bytes for each files/directories.                      | Mode |
| --critical-one    | Threshold critical in bytes for each files/directories.                     | Mode |
| --warning-total   | Threshold warning in bytes for all files/directories.                       | Mode |
| --critical-total  | Threshold critical in bytes for all files/directories.                      | Mode |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                         | Type |
|:-------------------------|:--------------------------------------------------------------------|:-----|
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct'.    | Mode |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option            | Description                                                                                                         | Type |
|:------------------|:--------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-offset  | Time offset warning threshold (in seconds).                                                                         | Mode |
| --critical-offset | Time offset critical Threshold (in seconds).                                                                        | Mode |
| --ntp-hostname    | Set the ntp hostname (if not set, localtime is used).                                                               | Mode |
| --ntp-port        | Set the ntp port (Default: 123).                                                                                    | Mode |
| --timezone        | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100'.    | Mode |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Option            | Description                                                                                                                                                                                                                      | Type |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --ps-display      | Display powershell script.                                                                                                                                                                                                       | Mode |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                                                         | Mode |
| --warning-status  | Set warning threshold for status (Default: '%{RebootPending} =~ /true/i'). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}.   | Mode |
| --critical-status | Set critical threshold for status (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}.                             | Mode |

</TabItem>
<TabItem value="Process-Global" label="Process-Global">

| Option           | Description                                                                       | Type |
|:-----------------|:----------------------------------------------------------------------------------|:-----|
| --process-status | Filter process status. Can be a regexp. (Default: 'running').                     | Mode |
| --process-name   | Filter process name.                                                              | Mode |
| --regexp-name    | Allows to use WQL wildcard to filter process name (with option --process-name).   | Mode |
| --warning        | Threshold warning of matching processes detected.                                 | Mode |
| --critical       | Threshold critical of matching processes detected.                                | Mode |

</TabItem>
<TabItem value="Service-Generic" label="Service-Generic">

| Option     | Description                                                                                                                                                                                           | Type |
|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning  | Return warning.                                                                                                                                                                                       | Mode |
| --critical | Return critical.                                                                                                                                                                                      | Mode |
| --services | Services to monitor. Syntax: \[service\_name\[\[=\|!=\]state\]\],... Available states are: - Stopped - Start Pending - Stop Pending - Running - Continue Pending - Pause Pending - Paused - Unknown   | Mode |
| --auto     | Return threshold for auto services not running.                                                                                                                                                       | Mode |
| --exclude  | Exclude some services for --auto option (Can be a regexp).                                                                                                                                            | Mode |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

| Option     | Description                                                                                                                                                                                           | Type |
|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning  | Return warning.                                                                                                                                                                                       | Mode |
| --critical | Return critical.                                                                                                                                                                                      | Mode |
| --services | Services to monitor. Syntax: \[service\_name\[\[=\|!=\]state\]\],... Available states are: - Stopped - Start Pending - Stop Pending - Running - Continue Pending - Pause Pending - Paused - Unknown   | Mode |
| --auto     | Return threshold for auto services not running.                                                                                                                                                       | Mode |
| --exclude  | Exclude some services for --auto option (Can be a regexp).                                                                                                                                            | Mode |

</TabItem>
<TabItem value="Sessions" label="Sessions">

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
| --config                 | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file                                                                                              | Mode      |
| --language               | Set the language used in config file (default: 'en').                                                                                                                                                                                         | Mode      |
| --command                | Command to get information (Default: 'qwinsta'). Can be changed if you have output in a file.                                                                                                                                                 | Mode      |
| --command-path           | Command path (Default: none).                                                                                                                                                                                                                 | Mode      |
| --command-options        | Command options (Default: '/COUNTER').                                                                                                                                                                                                        | Mode      |
| --timeout                | Timeout in seconds for the command (Default: 30).                                                                                                                                                                                             | Mode      |
| --filter-sessionname     | Filter session name (can be a regexp).                                                                                                                                                                                                        | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'sessions-created', 'sessions-disconnected', 'sessions-reconnected', 'sessions-active', 'sessions-disconnected-current'.                                                                                                  | Mode      |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                                           | Type |
|:-------------------------|:--------------------------------------------------------------------------------------|:-----|
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B), 'space-usage-free' (B), 'space-usage-prct'.    | Mode |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

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
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                      | Mode      |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                       | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard',                                                                                                                                        | Mode      |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                         | Mode      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                        | Mode      |
| --filter-interface       | Filter interface name (regexp can be used).                                                                                                                                                                                                   | Mode      |
| --exclude-interface      | Exclude interface name (regexp can be used).                                                                                                                                                                                                  | Mode      |
| --speed                  | Set interface speed (in Mb).                                                                                                                                                                                                                  | Mode      |

</TabItem>
<TabItem value="Updates" label="Updates">

| Option                   | Description                                              | Type |
|:-------------------------|:---------------------------------------------------------|:-----|
| --ps-display             | Display powershell script.                               | Mode |
| --ps-exec-only           | Print powershell output.                                 | Mode |
| --filter-title           | Filter windows updates by title (can be a regexp).       | Mode |
| --exclude-title          | Exclude windows updates by title (regexp can be used).   | Mode |
| --display-updates        | Display updates in verbose output.                       | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'pending-updates'.                   | Mode |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                                    | Type |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-uptime  | Threshold warning.                                                                                                                                             | Mode |
| --critical-uptime | Threshold critical.                                                                                                                                            | Mode |
| --unit            | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds    | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_windows_wsman.pl \
	--plugin=os::windows::wsman::plugin \
	--mode=cpu \
    --help
```
