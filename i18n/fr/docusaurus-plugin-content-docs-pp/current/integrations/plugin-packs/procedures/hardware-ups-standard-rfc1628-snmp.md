---
id: hardware-ups-standard-rfc1628-snmp
title: UPS Standard SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **UPS Standard** apporte un modèle d'hôte :

* **HW-UPS-Standard-Rfc1628-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-UPS-Standard-Rfc1628-SNMP-custom" label="HW-UPS-Standard-Rfc1628-SNMP-custom">

| Alias          | Modèle de service                                  | Description                                          |
|:---------------|:---------------------------------------------------|:-----------------------------------------------------|
| Alarms         | HW-UPS-Standard-Rfc1628-Alarms-SNMP-custom         | Contrôle la présence d'alarmes                       |
| Battery-Status | HW-UPS-Standard-Rfc1628-Battery-Status-SNMP-custom | Contrôle l'état de la batterie et la charge restante |
| Input-Lines    | HW-UPS-Standard-Rfc1628-Input-Lines-SNMP-custom    | Contrôle les métriques de l'alimentation             |
| Output-Lines   | HW-UPS-Standard-Rfc1628-Output-Lines-SNMP-custom   | Contrôle les métriques de la source d'alimentation   |
| Output-Source  | HW-UPS-Standard-Rfc1628-Output-Source-SNMP-custom  | Contrôle l'état de la source d'alimentation          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-UPS-Standard-Rfc1628-SNMP** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Métrique             | Unité |
|:---------------------|:------|
| alarms.current.count | count |

</TabItem>
<TabItem value="Battery-Status" label="Battery-Status">

| Métrique                         | Unité   |
|:---------------------------------|:--------|
| status                           | N/A     |
| battery.charge.remaining.percent | %       |
| battery.charge.remaining.minutes | minutes |
| battery.current.ampere           | A       |
| battery.voltage.volt             | V       |
| battery.temperature.celsius      | C       |

</TabItem>
<TabItem value="Input-Lines" label="Input-Lines">

| Métrique                        | Unité |
|:--------------------------------|:------|
| line#line.input.frequence.hertz | Hz    |
| line#line.input.voltage.volt    | V     |
| line#line.input.current.ampere  | A     |
| line#line.input.power.watt      | W     |

</TabItem>
<TabItem value="Output-Lines" label="Output-Lines">

| Métrique                          | Unité |
|:----------------------------------|:------|
| output.3phases.stdev.gauge        |       |
| oline#line.output.load.percentage | %     |
| oline#line.output.current.ampere  | A     |
| oline#line.output.voltage.volt    | V     |
| oline#line.output.power.watt      | W     |

</TabItem>
<TabItem value="Output-Source" label="Output-Source">

| Métrique      | Unité |
|:--------------|:------|
| source-status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement **UPS Standard** en SNMP, il est nécessaire de configurer l'agent sur l'équipement.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

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

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **UPS Standard**
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

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-UPS-Standard-Rfc1628-SNMP-custom**.

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
<TabItem value="Alarms" label="Alarms">

| Macro                 | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGALARMSCURRENT  | Thresholds                                                                                          |                   |             |
| CRITICALALARMSCURRENT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Battery-Status" label="Battery-Status">

| Macro               | Description                                                                                                             | Valeur par défaut        | Obligatoire |
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
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                     |                          |             |

</TabItem>
<TabItem value="Input-Lines" label="Input-Lines">

| Macro             | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGCURRENT    | Thresholds                                                                                          |                   |             |
| CRITICALCURRENT   | Thresholds                                                                                          |                   |             |
| WARNINGFREQUENCE  | Thresholds                                                                                          |                   |             |
| CRITICALFREQUENCE | Thresholds                                                                                          |                   |             |
| WARNINGPOWER      | Thresholds                                                                                          |                   |             |
| CRITICALPOWER     | Thresholds                                                                                          |                   |             |
| WARNINGVOLTAGE    | Thresholds                                                                                          |                   |             |
| CRITICALVOLTAGE   | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Output-Lines" label="Output-Lines">

| Macro           | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGCURRENT  | Threshold warning                                                                                   |                   |             |
| CRITICALCURRENT | Threshold critical                                                                                  |                   |             |
| WARNINGLOAD     | Threshold warning                                                                                   |                   |             |
| CRITICALLOAD    | Threshold critical                                                                                  |                   |             |
| WARNINGPOWER    | Threshold warning                                                                                   |                   |             |
| CRITICALPOWER   | Threshold critical                                                                                  |                   |             |
| WARNINGVOLTAGE  | Threshold warning                                                                                   |                   |             |
| CRITICALVOLTAGE | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Output-Source" label="Output-Source">

| Macro                | Description                                                                                                                                   | Valeur par défaut                             | Obligatoire |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|:------------|
| UNKNOWNSOURCESTATUS  | Set unknown threshold for status (Default: '%{status} =~ /other/') You can use the following variables: %{status}                             | %{status} =~ /other/                          |             |
| WARNINGSOURCESTATUS  | Set warning threshold for status (Default: '%{status} =~ /bypass\|battery\|booster\|reducer/') You can use the following variables: %{status} | %{status} =~ /bypass|battery|booster|reducer/ |             |
| CRITICALSOURCESTATUS | Set critical threshold for status (Default: '%{status} =~ /none/') You can use the following variables: %{status}                             | %{status} =~ /none/                           |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                           |                                               |             |

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
/usr/lib/centreon/plugins//centreon_ups_standard_rfc1628_snmp.pl \
	--plugin=hardware::ups::standard::rfc1628::snmp::plugin \
	--mode=alarms \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'   \
	--warning-alarms-current='' \
	--critical-alarms-current='' \
	
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:  | 'alarms.current.count'=12;;;0; 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ups_standard_rfc1628_snmp.pl \
	--plugin=hardware::ups::standard::rfc1628::snmp::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode           | Modèle de service associé                          |
|:---------------|:---------------------------------------------------|
| alarms         | HW-UPS-Standard-Rfc1628-Alarms-SNMP-custom         |
| battery-status | HW-UPS-Standard-Rfc1628-Battery-Status-SNMP-custom |
| input-lines    | HW-UPS-Standard-Rfc1628-Input-Lines-SNMP-custom    |
| output-lines   | HW-UPS-Standard-Rfc1628-Output-Lines-SNMP-custom   |
| output-source  | HW-UPS-Standard-Rfc1628-Output-Source-SNMP-custom  |

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

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ups_standard_rfc1628_snmp.pl \
	--plugin=hardware::ups::standard::rfc1628::snmp::plugin \
	--mode=alarms \
    --help
```
