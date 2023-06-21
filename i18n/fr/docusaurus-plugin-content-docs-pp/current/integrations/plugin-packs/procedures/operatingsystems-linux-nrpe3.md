---
id: operatingsystems-linux-nrpe3
title: Linux NRPE3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Linux NRPE3** apporte un modèle d'hôte :

* **OS-Linux-NRPE3-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-Linux-NRPE3-custom" label="OS-Linux-NRPE3-custom">

| Alias  | Modèle de service            | Description                                                                                                                                                               |
|:-------|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu    | OS-Linux-Cpu-NRPE3-custom    | Contrôle du taux d'utilisation CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |
| Load   | OS-Linux-Load-NRPE3-custom   | Contrôle de la charge serveur                                                                                                                                             |
| Memory | OS-Linux-Memory-NRPE3-custom | Contrôle du taux d'utilisation de la mémoire vive                                                                                                                         |
| Swap   | OS-Linux-Swap-NRPE3-custom   | Contrôle du taux d'utilisation de la mémoire virtuelle                                                                                                                    |
| Uptime | OS-Linux-Uptime-NRPE3-custom | Durée depuis laquelle le serveur tourne sans interruption                                                                                                                 |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-Linux-NRPE3** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias               | Modèle de service                         | Description                                                                                                                                                                           | Découverte |
|:--------------------|:------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
| Cmd-Generic         | OS-Linux-Cmd-Generic-NRPE3-custom         | Permet de vérifier le code retour de commandes Linux                                                                                                                                  |            |
| Connections-Generic | OS-Linux-Connections-Generic-NRPE3-custom | Contrôle les connexions tcp                                                                                                                                                           |            |
| Cpu-Detailed        | OS-Linux-Cpu-Detailed-NRPE3-custom        | Contrôle du taux d'utilisation détaillé du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |            |
| Disk-IO             | OS-Linux-Disk-IO-NRPE3-custom             | Contrôle les compteurs I                                                                                                                                                              |            |
| Disks               | OS-Linux-Disks-NRPE3-custom               | Contrôle du taux d'espace libre disponible des disques. Pour chaque contrôle apparaîtra le point de montage des disques                                                               | X          |
| File-Date-Generic   | OS-Linux-File-Date-Generic-NRPE3-custom   | Permet de vérifier le temps de modification                                                                                                                                           |            |
| File-Size-Generic   | OS-Linux-File-Size-Generic-NRPE3-custom   | Permet de vérifier la taille de fichiers et                                                                                                                                           |            |
| Inodes              | OS-Linux-Inodes-NRPE3-custom              | Contrôle du taux d'inodes disponible des disques                                                                                                                                      |            |
| Is-File-Generic     | OS-Linux-Is-File-Generic-NRPE3-custom     | Permet de vérifier si le fichier 'xxx' est présent                                                                                                                                    |            |
| Is-Not-File-Generic | OS-Linux-Is-Not-File-Generic-NRPE3-custom | Permet de vérifier si le fichier 'xxx' n'est pas présent                                                                                                                              |            |
| Ntp                 | OS-Linux-Ntp-NRPE3-custom                 | Contrôle la synchronisation du système avec un serveur de temps                                                                                                                       |            |
| Packet-Errors       | OS-Linux-Packet-Errors-NRPE3-custom       | Contrôle le pourcentage de paquets en erreur                                                                                                                                          |            |
| Process-Generic     | OS-Linux-Process-Generic-NRPE3-custom     | Contrôle permettant de vérifier des processus Linux                                                                                                                                   |            |
| Systemd-Sc-Status   | OS-Linux-Systemd-Sc-Status-NRPE3-custom   | Contrôle le statut des services systemd                                                                                                                                               |            |
| Traffic             | OS-Linux-Traffic-NRPE3-custom             | Contrôle de la bande passante des interfaces. Pour chaque contrôle apparaîtra le nom de l'interface                                                                                   | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle            | Description                                                   |
|:---------------------------|:--------------------------------------------------------------|
| OS-Linux-NRPE-Disk-Name    | Discover the disk partitions and monitor space occupation     |
| OS-Linux-NRPE-Traffic-Name | Discover network interfaces and monitor bandwidth utilization |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Métrique    | Unité |
|:------------|:------|
|             |       |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| cpu.utilization.percentage               | %     |
| cpu_core#core.cpu.utilization.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

Coming soon

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| device#device.io.read.usage.bytespersecond  | B/s   |
| device#device.io.write.usage.bytespersecond | B/s   |
| device#device.io.read.wait.milliseconds     | ms    |
| device#device.io.write.wait.milliseconds    | ms    |
| device#device.io.servicetime.count          | count |
| device#device.io.utils.percentage           | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Disks" label="Disks">

| Métrique    | Unité |
|:------------|:------|
| disks#usage | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Métrique    | Unité |
|:------------|:------|
|             | s     |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Métrique    | Unité |
|:------------|:------|
|             | B     |
| total       | B     |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Métrique     | Unité |
|:-------------|:------|
| inodes#usage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Load" label="Load">

| Métrique    | Unité |
|:------------|:------|
| avg_load1   |       |
| avg_load5   |       |
| avg_load15  |       |
| load1       |       |
| load5       |       |
| load15      |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                    | Unité |
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

| Métrique                            | Unité |
|:------------------------------------|:------|
| peers.detected.count                | count |
| peers#status                        | N/A   |
| peers#peer.time.offset.milliseconds | ms    |
| peers#peer.stratum.count            | count |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Métrique              | Unité |
|:----------------------|:------|
| interface#status      | N/A   |
| interface#in-discard  | %     |
| interface#out-discard | %     |
| interface#in-error    | %     |
| interface#out-error   | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Métrique                                      | Unité |
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

| Métrique              | Unité |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Métrique                       | Unité |
|:-------------------------------|:------|
| systemd.services.running.count | count |
| systemd.services.failed.count  | count |
| systemd.services.dead.count    | count |
| systemd.services.exited.count  | count |
| sc#status                      | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Métrique         | Unité |
|:-----------------|:------|
| interface#status | N/A   |
| interface#in     |       |
| interface#out    |       |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique    | Unité |
|:------------|:------|
| uptime      | s     |

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour surveiller les ressources *Windows* via NRPE, installez la version Centreon
de l'agent NSClient++. Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur NRPE** est correcte.

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

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Linux NRPE3**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

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

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-Linux-NRPE3-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro            | Description                                                                                           | Valeur par défaut    | Obligatoire |
|:-----------------|:------------------------------------------------------------------------------------------------------|:---------------------|:------------|
| NRPECLIENT       |                                                                                                       | check_centreon_nrpe3 |             |
| NRPEPORT         |                                                                                                       | 5666                 |             |
| NRPETIMEOUT      |                                                                                                       | 5                    |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                      |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                         | Valeur par défaut                         | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------------------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --statefile-dir=/var/log/nrpe/centplugins |             |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Macro        | Description                                                                                         | Valeur par défaut                         | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------------------------------|:------------|
| WARNINGIDLE  | Threshold warning in percent                                                                        |                                           |             |
| CRITICALIDLE | Threshold critical in percent                                                                       |                                           |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --statefile-dir=/var/log/nrpe/centplugins |             |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Macro        | Description                                                                                         | Valeur par défaut                                          | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose --skip --statefile-dir=/var/log/nrpe/centplugins |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| COMMAND      |                                                                                                     | test              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| COMMAND      |                                                                                                     | test              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Load" label="Load">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning (1min,5min,15min)                                                                 |                   |             |
| CRITICAL     | Threshold critical (1min,5min,15min)                                                                |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro           | Description                                                                                         | Valeur par défaut            | Obligatoire |
|:----------------|:----------------------------------------------------------------------------------------------------|:-----------------------------|:------------|
| NTPCOMMAND      |                                                                                                     | ntpq                         |             |
| FILTERPEERNAME  |                                                                                                     | .*                           |             |
| FILTERPEERSTATE |                                                                                                     | .*                           |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --use-new-perfdata --verbose |             |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Macro        | Description                                                                                         | Valeur par défaut                                                 | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose --statefile-dir=/var/log/nrpe/centplugins --no-loopback |             |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Macro         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGTIME   | Thresholds                                                                                          |                   |             |
| CRITICALTIME  | Thresholds                                                                                          |                   |             |
| WARNINGTOTAL  | Thresholds                                                                                          |                   |             |
| CRITICALTOTAL | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%)                     |                   |             |
| CRITICAL     | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%)                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Macro          | Description                                                                                         | Valeur par défaut            | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------|:-----------------------------|:------------|
| FILTERNAME     |                                                                                                     | .*                           |             |
| CRITICALSTATUS |                                                                                                     | %{active} =~ /failed/i       |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --use-new-perfdata --verbose |             |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Macro        | Description                                                                                         | Valeur par défaut                         | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------------------------------|:------------|
| FILTERSTATE  |                                                                                                     | RU                                        |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --statefile-dir=/var/log/nrpe/centplugins |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING      | Threshold warning in seconds                                                                        |                   |             |
| CRITICAL     | Threshold critical in seconds                                                                       |                   |             |
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
/usr/lib64/nagios/plugins//check_centreon_nrpe3 -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::linux::local::plugin' 'cmd-return'  '  \
	--exec-command=""  \
	--exec-command-options="" \
	--manage-returns=""  '\
	
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:  | 'command.exit.code.count'=20;;;; 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib64/nagios/plugins//check_centreon_nrpe3 -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::linux::local::plugin' 'cmd-return'  '  \
	--exec-command=""  \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode              | Modèle de service associé                                                                                                   |
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

### Options disponibles

#### Options génériques

Les options génériques aux modes sont listées ci-dessous :

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

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

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

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib64/nagios/plugins//check_centreon_nrpe3 -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::linux::local::plugin' 'cmd-return'  '  \
	--exec-command=""  \
	--exec-command-options="" \
    --help
```
