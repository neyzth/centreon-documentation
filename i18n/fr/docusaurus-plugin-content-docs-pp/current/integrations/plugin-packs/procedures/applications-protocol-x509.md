---
id: applications-protocol-x509
title: X509 Certificate
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **X509 Certificat** apporte un modèle d'hôte :

* **App-Protocol-X509-custom**

Le connecteur apporte le modèle de service suivant
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Protocol-X509-custom" label="App-Protocol-X509-custom">

| Alias            | Modèle de service                    | Description                                                               |
|:-----------------|:-------------------------------------|:--------------------------------------------------------------------------|
| X509-Certificate | App-Protocol-X509-Certificate-custom | Contrôle permettant de vérifier la date d'expiration d'un certificat X509 |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Protocol-X509** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="X509-Certificate" label="X509-Certificate">

| Métrique    | Unité |
|:------------|:------|
| status      | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

The remote server must have an X509's certificate.

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
dnf install centreon-pack-applications-protocol-x509
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-x509
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-protocol-x509
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-x509
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **X509 Certificat**
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
dnf install centreon-plugin-Applications-Protocol-X509
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Protocol-X509
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-protocol-x509
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-X509
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Protocol-X509-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="X509-Certificate" label="X509-Certificate">

| Macro          | Description                                                                                                                                                                                                                                                                                                                                                                | Valeur par défaut  | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:------------|
| CUSTOMMODE     |                                                                                                                                                                                                                                                                                                                                                                            | tcp                |             |
| PORT           |                                                                                                                                                                                                                                                                                                                                                                            | 443                |             |
| WARNINGSTATUS  | Set warning threshold for status. (Default: '%{expiration} \< 60'). Can use special variables like: %{expiration}, %{subject}, %{issuer}, %{alt\_subjects}                                                                                                                                                                                                                 | %{expiration} < 60 |             |
| CRITICALSTATUS | Set critical threshold for status. (Default: '%{expiration} \< 30'). Can use special variables like: %{expiration}, %{subject}, %{issuer}, %{alt\_subjects}.  Examples :  Raise a critical alarm if certificate expires in less than 30 days or does not cover alternative name 'my.app.com' --critical-status='%{expiration} \< 30 \|\| %{alt\_subjects} !~ /my.app.com/' | %{expiration} < 30 |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                                                                                                                                                        |                    |             |

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
/usr/lib/centreon/plugins//centreon_protocol_x509.pl \
	--plugin=apps::protocols::x509::plugin \
	--mode=certificate \
	--custommode='tcp' \
	--hostname='10.0.0.1' \
	--port=443 \
	--warning-status='%{expiration} < 60' \
	--critical-status='%{expiration} < 30' \
	
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:  | 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_protocol_x509.pl \
	--plugin=apps::protocols::x509::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode        | Modèle de service associé            |
|:------------|:-------------------------------------|
| certificate | App-Protocol-X509-Certificate-custom |

### Custom modes disponibles

Ce connecteur offre plusieurs méthodes pour se connecter à la ressource (CLI, bibliothèque, etc.), appelées **custom modes**.
Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_protocol_x509.pl \
	--plugin=apps::protocols::x509::plugin \
    --list-custommode
```

Le plugin apporte les custom modes suivants :

* file
* https
* opensslcli
* tcp

### Options disponibles

#### Options des custom modes

Les options spécifiques aux **custom modes** sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="file" label="file">

| Option        | Description                      | Type |
|:--------------|:---------------------------------|:-----|
| --certificate | Certificate file (PEM or DER).   | File |

</TabItem>
<TabItem value="https" label="https">

| Option           | Description                                                                                                                        | Type         |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --hostname       | IP Addr/FQDN of the webserver host                                                                                                 | Https        |
| --port           | Port used by Webserver (Default: 443)                                                                                              | Https        |
| --method         | Specify http method used (Default: 'GET')                                                                                          | Https        |
| --urlpath        | Set path to get webpage (Default: '/')                                                                                             | Https        |
| --timeout        | Threshold for HTTP timeout (Default: 5)                                                                                            | Https        |
| --header         | Set HTTP headers (Multiple option)                                                                                                 | Https        |
| --no-follow      | Do not follow http redirect                                                                                                        | Https        |
| --http-peer-addr | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                | Http global  |
| --proxyurl       | Proxy URL. Eg: http://my.proxy:3128                                                                                                | Http global  |
| --proxypac       | Proxy pac file (can be a URL or a local file).                                                                                     | Http global  |
| --insecure       | Accept insecure SSL connections.                                                                                                   | Http global  |
| --http-backend   | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                            | Http global  |
| --ssl-opt        | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                          | Backend lwp  |
| --curl-opt       | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).   | Backend curl |

</TabItem>
<TabItem value="opensslcli" label="opensslcli">

| Option                  | Description                                                                                                                                                            | Type           |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------|
| --hostname              | IP Addr/FQDN of the host.                                                                                                                                              | Openssl cli    |
| --port                  | Port used by host.                                                                                                                                                     | Openssl cli    |
| --ssh-backend           | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                     | Ssh global     |
| --ssh-username          | Define the user name to log in to the host.                                                                                                                            | Ssh global     |
| --ssh-password          | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.   | Ssh global     |
| --ssh-port              | Define the TCP port on which SSH is listening.                                                                                                                         | Ssh global     |
| --ssh-priv-key          | Define the private key file to use for user authentication.                                                                                                            | Ssh global     |
| --sshcli-command        | ssh command (default: 'ssh').                                                                                                                                          | Backend sshcli |
| --sshcli-path           | ssh command path (default: none)                                                                                                                                       | Backend sshcli |
| --sshcli-option         | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                      | Backend sshcli |
| --plink-command         | plink command (default: 'plink').                                                                                                                                      | Backend plink  |
| --plink-path            | plink command path (default: none)                                                                                                                                     | Backend plink  |
| --plink-option          | Specify plink options (example: --plink-option='-T').                                                                                                                  | Backend plink  |
| --libssh-strict-connect | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                    | Backend libssh |

</TabItem>
<TabItem value="tcp" label="tcp">

| Option              | Description                                                                                                                                                                                                                 | Type |
|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --hostname          | IP Addr/FQDN of the host.                                                                                                                                                                                                   | Tcp  |
| --port              | Port used by host.                                                                                                                                                                                                          | Tcp  |
| --servername        | Servername of the host for SNI support (only with IO::Socket::SSL \>= 1.56) (eg: foo.bar.com).                                                                                                                              | Tcp  |
| --ssl-opt           | Set SSL options.  Examples:  Do not verify certificate: --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE"  Verify certificate: --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_PEER" --ssl-opt="SSL\_version =\> 'TLSv1'"   | Tcp  |
| --ssl-ignore-errors | Ignore SSL handshake errors. For example: 'SSL error: SSL wants a read first'.                                                                                                                                              | Tcp  |
| --timeout           | Set timeout in seconds for SSL connection (Default: '3') (only with IO::Socket::SSL \>= 1.984).                                                                                                                             | Tcp  |
| --starttls          | Init plaintext connection and start\_SSL after. Can be: 'smtp', 'ftp'.                                                                                                                                                      | Tcp  |

</TabItem>
</Tabs>

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="X509-Certificate" label="X509-Certificate">

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
| --warning-status                           | Set warning threshold for status. (Default: '%{expiration} \< 60'). Can use special variables like: %{expiration}, %{subject}, %{issuer}, %{alt\_subjects}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Mode   |
| --critical-status                          | Set critical threshold for status. (Default: '%{expiration} \< 30'). Can use special variables like: %{expiration}, %{subject}, %{issuer}, %{alt\_subjects}.  Examples :  Raise a critical alarm if certificate expires in less than 30 days or does not cover alternative name 'my.app.com' --critical-status='%{expiration} \< 30 \|\| %{alt\_subjects} !~ /my.app.com/'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Mode   |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_protocol_x509.pl \
	--plugin=apps::protocols::x509::plugin \
	--mode=certificate \
    --help
```
