---
id: applications-antivirus-kaspersky-snmp
title: Kaspersky
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Kaspersky** apporte un modèle d'hôte :

* **App-Antivirus-Kaspersky-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Antivirus-Kaspersky-SNMP-custom" label="App-Antivirus-Kaspersky-SNMP-custom">

| Alias           | Modèle de service                                   | Description                                                                                   |
|:----------------|:----------------------------------------------------|:----------------------------------------------------------------------------------------------|
| Deployment      | App-Antivirus-Kaspersky-Deployment-SNMP-custom      | Contrôle le statut du déploiement                                                             |
| Events          | App-Antivirus-Kaspersky-Events-SNMP-custom          | Contrôle le statut des évènements                                                             |
| Full-Scan       | App-Antivirus-Kaspersky-Full-Scan-SNMP-custom       | Contrôle le statut des scans                                                                  |
| Logical-Network | App-Antivirus-Kaspersky-Logical-Network-SNMP-custom | Contrôle le statut de la découverte réseau                                                    |
| Protection      | App-Antivirus-Kaspersky-Protection-SNMP-custom      | Contrôle le statut de la protection                                                           |
| Updates         | App-Antivirus-Kaspersky-Updates-SNMP-custom         | Contrôle le temps depuis la dernière mise à jour du serveur et le nombre de client non à jour |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Antivirus-Kaspersky-SNMP** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Deployment" label="Deployment">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| status                               | N/A   |
| hosts.antivirus.installed.count      | count |
| hosts.antivirus.install.failed.count | count |
| hosts.expiring.licence.count         | count |
| hosts.expired.licence.count          | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Events" label="Events">

| Métrique              | Unité |
|:----------------------|:------|
| status                | N/A   |
| events.critical.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Full-Scan" label="Full-Scan">

| Métrique              | Unité |
|:----------------------|:------|
| status                | N/A   |
| hosts.unscanned.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Logical-Network" label="Logical-Network">

| Métrique                 | Unité |
|:-------------------------|:------|
| status                   | N/A   |
| hosts.new.count          | count |
| groups.total.count       | count |
| hosts.notconnected.count | count |
| hosts.uncontrolled.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Protection" label="Protection">

| Métrique                                           | Unité |
|:---------------------------------------------------|:------|
| status                                             | N/A   |
| protection.hosts.antivirus.notrunning.count        | count |
| protection.hosts.realtime.notrunning.count         | count |
| protection.hosts.realtime.unacceptable.level.count | count |
| protection.hosts.uncured.objects.count             | count |
| protection.hosts.toomanythreats.count              | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Updates" label="Updates">

| Métrique                        | Unité |
|:--------------------------------|:------|
| status                          | N/A   |
| update.server.freshness.seconds | s     |
| update.hosts.outdated.count     | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Configuration de l'équipement

Afin de superviser le serveur Kaspersky Security Center, le SNMP v2 ou v3 doit
être configuré comme indiqué sur la documentation officielle : 
https://support.kaspersky.com/fr/12603#block3

### Flux réseaux

La communication doit être possible depuis le collecteur Centreon vers le port
SNMP (UDP/161) du Kaspersky Security Center.

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

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Kaspersky**
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

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Antivirus-Kaspersky-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                           | Valeur par défaut | Obligatoire |
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Deployment" label="Deployment">

| Macro            | Description                                                                                                         | Valeur par défaut        | Obligatoire |
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
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                 |                          |             |

</TabItem>
<TabItem value="Events" label="Events">

| Macro          | Description                                                                                                         | Valeur par défaut        | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------|:-------------------------|:------------|
| WARNINGEVENTS  | Threshold warning                                                                                                   | 0                        |             |
| CRITICALEVENTS | Threshold critical                                                                                                  |                          |             |
| WARNINGSTATUS  | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}   | %{status} =~ /Warning/i  |             |
| CRITICALSTATUS | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status} | %{status} =~ /Critical/i |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                 |                          |             |

</TabItem>
<TabItem value="Full-Scan" label="Full-Scan">

| Macro              | Description                                                                                                         | Valeur par défaut        | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------|:-------------------------|:------------|
| WARNINGNOTSCANNED  | Threshold warning                                                                                                   | 0                        |             |
| CRITICALNOTSCANNED | Threshold critical                                                                                                  |                          |             |
| WARNINGSTATUS      | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}   | %{status} =~ /Warning/i  |             |
| CRITICALSTATUS     | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status} | %{status} =~ /Critical/i |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                 |                          |             |

</TabItem>
<TabItem value="Logical-Network" label="Logical-Network">

| Macro                        | Description                                                                                                         | Valeur par défaut        | Obligatoire |
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
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                 |                          |             |

</TabItem>
<TabItem value="Protection" label="Protection">

| Macro                      | Description                                                                                                         | Valeur par défaut        | Obligatoire |
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
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                 |                          |             |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                    | Description                                                                                                         | Valeur par défaut        | Obligatoire |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------|:-------------------------|:------------|
| WARNINGLASTSERVERUPDATE  | Threshold warning                                                                                                   | 120                      |             |
| CRITICALLASTSERVERUPDATE | Threshold critical                                                                                                  | 240                      |             |
| WARNINGNOTUPDATED        | Threshold warning                                                                                                   | 0                        |             |
| CRITICALNOTUPDATED       | Threshold critical                                                                                                  |                          |             |
| WARNINGSTATUS            | Set warning threshold for status. (Default: '%{status} =~ /Warning/i'). Can use special variables like: %{status}   | %{status} =~ /Warning/i  |             |
| CRITICALSTATUS           | Set critical threshold for status. (Default: '%{status} =~ /Critical/i'). Can use special variables like: %{status} | %{status} =~ /Critical/i |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                 |                          |             |

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

La commande devrait retourner un message de sortie similaire à :

```bash
OK:      | 'hosts.antivirus.installed.count'=92;;;0; 'hosts.antivirus.install.failed.count'=92;;;0; 'hosts.expiring.licence.count'=20;;;0; 'hosts.expired.licence.count'=79;;;0; 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
	--plugin=apps::antivirus::kaspersky::snmp::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode            | Modèle de service associé                           |
|:----------------|:----------------------------------------------------|
| deployment      | App-Antivirus-Kaspersky-Deployment-SNMP-custom      |
| events          | App-Antivirus-Kaspersky-Events-SNMP-custom          |
| full-scan       | App-Antivirus-Kaspersky-Full-Scan-SNMP-custom       |
| logical-network | App-Antivirus-Kaspersky-Logical-Network-SNMP-custom |
| protection      | App-Antivirus-Kaspersky-Protection-SNMP-custom      |
| updates         | App-Antivirus-Kaspersky-Updates-SNMP-custom         |

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

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

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

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
	--plugin=apps::antivirus::kaspersky::snmp::plugin \
	--mode=deployment \
    --help
```
