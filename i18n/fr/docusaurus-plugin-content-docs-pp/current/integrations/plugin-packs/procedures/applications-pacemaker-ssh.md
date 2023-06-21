---
id: applications-pacemaker-ssh
title: Pacemaker
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Pacemaker** apporte un modèle d'hôte :

* **App-Pacemaker-SSH-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Pacemaker-SSH-custom" label="App-Pacemaker-SSH-custom">

| Alias       | Modèle de service                    | Description                                                          |
|:------------|:-------------------------------------|:---------------------------------------------------------------------|
| CRM         | App-Pacemaker-CRM-SSH-custom         | Contrôle l'état du cluster via la commande crm_mon                   |
| Clustat     | App-Pacemaker-Clustat-SSH-custom     | Contrôle l'état du cluster via la commande clustat                   |
| Constraints | App-Pacemaker-Constraints-SSH-custom | Contrôle si une contrainte est en place sur une ressource du cluster |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Pacemaker-SSH** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="CRM" label="CRM">

| Métrique                                              | Unité |
|:------------------------------------------------------|:------|
| cluster~connection-status                             | N/A   |
| cluster~quorum-status                                 | N/A   |
| cluster~cluster.nodes.online.count                    | count |
| cluster~cluster.nodes.offline.count                   | count |
| cluster~cluster.nodes.standby.count                   | count |
| cluster~cluster.actions.failed.count                  | count |
| resources#resource-status                             | N/A   |
| resources#resource.actions.failed.count               | count |
| resources#resource.migration.failed.count             | count |
| clone_resources#clone-resource-status                 | N/A   |
| clone_resources#clone_resource.actions.failed.count   | count |
| clone_resources#clone_resource.migration.failed.count | count |

</TabItem>
<TabItem value="Clustat" label="Clustat">

| Métrique     | Unité |
|:-------------|:------|
| nodes#node   | N/A   |
| groups#group | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Constraints" label="Constraints">

Coming soon

</TabItem>
</Tabs>

## Prérequis

### Configuration SSH

L'utilisation de ce connecteur requiert la création d'un utilisateur sur le
serveur supervisé, lequel sera utilisé par le collecteur Centreon pour
s'authentifier et exécuter les requêtes SSH. Les privilèges `sudo` ou `root` ne
sont pas nécessaires, un utilisateur 'simple' est suffisant.

Deux méthodes de connexion SSH sont possibles :
* soit en échangeant la clé SSH publique de l'utilisateur `centreon-engine` du collecteur Centreon
* soit en définissant votre utilisateur et votre mot de passe directement dans les macros d'hôtes.

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
dnf install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Pacemaker**
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
dnf install centreon-plugin-Applications-Pacemaker-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Pacemaker-Ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Pacemaker-Ssh
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Pacemaker-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli , plink and libssh                                                                                            | libssh            |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                               |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="CRM" label="CRM">

| Macro                                | Description                                                                                                                                                                                       | Valeur par défaut                 | Obligatoire |
|:-------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:------------|
| FILTERRESOURCENAME                   | Filter resource (also clone resource) by name (can be a regexp)                                                                                                                                   |                                   |             |
| WARNINGCLONERESOURCEACTIONSFAILED    | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALCLONERESOURCEACTIONSFAILED   | Thresholds                                                                                                                                                                                        |                                   |             |
| WARNINGCLONERESOURCEMIGRATIONFAILED  | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALCLONERESOURCEMIGRATIONFAILED | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALCLONERESOURCESTATUS          | Set critical threshold for status (Default: '%{status} =~ /failed/i'). You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged} | %{status} =~ /failed/i            |             |
| WARNINGCLONERESOURCESTATUS           | Set warning threshold for status. You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged}                                      |                                   |             |
| CRITICALCLUSTERACTIONSFAILED         | Thresholds                                                                                                                                                                                        | 0                                 |             |
| WARNINGCLUSTERACTIONSFAILED          | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALCONNECTIONSTATUS             | Set critical threshold for status (Default: '%{connection\_status} =~ /failed/i'). You can use the following variables: %{connection\_status}, %{connection\_error}                               | %{connection_status} =~ /failed/i |             |
| WARNINGCONNECTIONSTATUS              | Set warning threshold for status. You can use the following variables: %{connection\_status}, %{connection\_error}                                                                                |                                   |             |
| CRITICALNODESOFFLINE                 | Thresholds                                                                                                                                                                                        | 0                                 |             |
| WARNINGNODESOFFLINE                  | Thresholds                                                                                                                                                                                        |                                   |             |
| WARNINGNODESONLINE                   | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALNODESONLINE                  | Thresholds                                                                                                                                                                                        |                                   |             |
| WARNINGNODESSTANDBY                  | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALNODESSTANDBY                 | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALQUORUMSTATUS                 | Set critical threshold for status (Default: '%{quorum\_status} =~ /noQuorum/i'). You can use the following variables: %{quorum\_status}                                                           | %{quorum_status} =~ /noQuorum/i   |             |
| WARNINGQUORUMSTATUS                  | Set warning threshold for status. You can use the following variables: %{quorum\_status}                                                                                                          |                                   |             |
| WARNINGRESOURCEACTIONSFAILED         | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALRESOURCEACTIONSFAILED        | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALRESOURCEMIGRATIONFAILED      | Thresholds                                                                                                                                                                                        | 0                                 |             |
| WARNINGRESOURCEMIGRATIONFAILED       | Thresholds                                                                                                                                                                                        |                                   |             |
| CRITICALRESOURCESTATUS               | Set critical threshold for status (Default: '%{status} =~ /stopped\|failed/i'). You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                | %{status} =~ /stopped|failed/i    |             |
| WARNINGRESOURCESTATUS                | Set warning threshold for status. You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                                                              |                                   |             |
| EXTRAOPTIONS                         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                               | --verbose                         |             |

</TabItem>
<TabItem value="Clustat" label="Clustat">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Constraints" label="Constraints">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| RESOURCENAME | Set the resource name you want to check                                                             | RESOURCENAME      |             |
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
/usr/lib/centreon/plugins//centreon_pacemaker_ssh.pl \
	--plugin=apps::pacemaker::local::plugin \
	--mode=crm \
	--hostname='10.0.0.1' \
	--ssh-backend='libssh' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--filter-resource-name='' \
	--warning-nodes-online='' \
	--critical-nodes-online='' \
	--warning-nodes-offline='' \
	--critical-nodes-offline='0' \
	--warning-nodes-standby='' \
	--critical-nodes-standby='' \
	--warning-clone-resource-status='' \
	--critical-clone-resource-status='%{status} =~ /failed/i' \
	--warning-clone-resource-actions-failed='' \
	--critical-clone-resource-actions-failed='' \
	--warning-clone-resource-migration-failed='' \
	--critical-clone-resource-migration-failed='' \
	--warning-connection-status='' \
	--critical-connection-status='%{connection_status} =~ /failed/i' \
	--warning-cluster-actions-failed='' \
	--critical-cluster-actions-failed='0' \
	--warning-resource-status='' \
	--critical-resource-status='%{status} =~ /stopped|failed/i' \
	--warning-resource-actions-failed='' \
	--critical-resource-actions-failed='' \
	--warning-resource-migration-failed='' \
	--critical-resource-migration-failed='0' \
	--warning-quorum-status='' \
	--critical-quorum-status='%{quorum_status} =~ /noQuorum/i' \
	--verbose\
	
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:             | 'cluster.nodes.online.count'=25;;;0; 'cluster.nodes.offline.count'=44;;;0; 'cluster.nodes.standby.count'=38;;;0; 'cluster.actions.failed.count'=65;;;0; 'resource.actions.failed.count'=30;;;0; 'resource.migration.failed.count'=23;;;0; 'clone_resource.actions.failed.count'=60;;;0; 'clone_resource.migration.failed.count'=30;;;0; 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_pacemaker_ssh.pl \
	--plugin=apps::pacemaker::local::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode        | Modèle de service associé            |
|:------------|:-------------------------------------|
| clustat     | App-Pacemaker-Clustat-SSH-custom     |
| constraints | App-Pacemaker-Constraints-SSH-custom |
| crm         | App-Pacemaker-CRM-SSH-custom         |

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
| --hostname                                 | Hostname to query in ssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Cli            |
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
<TabItem value="CRM" label="CRM">

| Option                           | Description                                                                                                                                                                                                                    | Type |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-resource-name           | Filter resource (also clone resource) by name (can be a regexp).                                                                                                                                                               | Mode |
| --warning-connection-status      | Set warning threshold for status. You can use the following variables: %{connection\_status}, %{connection\_error}                                                                                                             | Mode |
| --critical-connection-status     | Set critical threshold for status (Default: '%{connection\_status} =~ /failed/i'). You can use the following variables: %{connection\_status}, %{connection\_error}                                                            | Mode |
| --warning-quorum-status          | Set warning threshold for status. You can use the following variables: %{quorum\_status}                                                                                                                                       | Mode |
| --critical-quorum-status         | Set critical threshold for status (Default: '%{quorum\_status} =~ /noQuorum/i'). You can use the following variables: %{quorum\_status}                                                                                        | Mode |
| --warning-resource-status        | Set warning threshold for status. You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                                                                                           | Mode |
| --critical-resource-status       | Set critical threshold for status (Default: '%{status} =~ /stopped\|failed/i'). You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                                             | Mode |
| --warning-clone-resource-status  | Set warning threshold for status. You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged}                                                                   | Mode |
| --critical-clone-resource-status | Set critical threshold for status (Default: '%{status} =~ /failed/i'). You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged}                              | Mode |
| --ignore-failed-actions          | Failed actions errors (that match) are skipped.                                                                                                                                                                                | Mode |
| --resources                      | If resources not started on the node specified, send a warning message: (format: \<rsc\_name\>:\<node\>,\<rsc\_name\>:\<node\>,...)                                                                                            | Mode |
| --warning-* --critical-*         | Thresholds. Can be: 'cluster-actions-failed', 'clone-resource-actions-failed', 'clone-resource-migration-failed', 'nodes-online', 'nodes-offline', 'nodes-standby', 'resource-actions-failed', 'resource-migration-failed'.    | Mode |

</TabItem>
<TabItem value="Clustat" label="Clustat">

| Option       | Description                                                                                                                                                       | Type |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-*  | Can be ('group','node') Warning threshold for status.                                                                                                             | Mode |
| --critical-* | Can be ('group','node') Critical threshold for status. (Default: --critical-node '%{state} !~ /up\|clean/' --critical-group '%{state} !~ /started\|starting/')    | Mode |

</TabItem>
<TabItem value="Constraints" label="Constraints">

| Option     | Description                               | Type |
|:-----------|:------------------------------------------|:-----|
| --resource | Set the resource name you want to check   | Mode |
| --warning  | Return a warning instead of a critical    | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_pacemaker_ssh.pl \
	--plugin=apps::pacemaker::local::plugin \
	--mode=crm \
    --help
```
