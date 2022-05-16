---
id: applications-protocol-cifs
title: Protocol CIFS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon CIFS/SMB apporte un modèle d'hôte :
* App-Protocol-Cifs-custom

Il apporte les modèles de service suivants :

| Alias          | Découverte                    | Défaut  | Découverte |
|:---------------|:------------------------------|:--------|:-----------|
| Connection     | App-Protocol-Cifs-Connection  | X       |            |
| Files-Count    | App-Protocol-Cifs-Files-Count |         |            |
| Files-Date     | App-Protocol-Cifs-Files-Date  |         |            |
| Scenario       | App-Protocol-Cifs-Scenario    |         |            |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Connection" label="Connection">

| Metric name             | Description                                     | Unit  |
| :---------------------- | :---------------------------------------------- | :---- |
| connection status       | Connection status                               |       |
| connection.time.seconds | Connection time to established the cifs session | s     |

</TabItem>
<TabItem value="Files-Count" label="Files-Count">

| Metric name          | Description              | Unit  |
| :------------------- | :----------------------- | :---- |
| files.detected.count | Number of files detected |       |

</TabItem>
<TabItem value="Files-Date" label="Files-Date">

| Metric name                        | Description        | Unit   |
| :--------------------------------- | :----------------- | :----- |
| *filename*#file.mtime.last.seconds | Last modified time | s      |

</TabItem>
<TabItem value="Scenario" label="Scenario">

| Metric name                                   | Description              | Unit  |
| :-------------------------------------------- | :----------------------- | :---- |
| scenario status                               | Global scenario status   |       |
| scenario.execution.time.milliseconds          | Scenario execution time  | ms    |
| scenario.steps.count                          | Number of scenario steps |       |
| scenario.errors.count                         | Number of steps failed   |       |
| step status                                   | Step status              |       |    
| *step_label*#step.execution.time.milliseconds | Step execution time      | ms    |

</TabItem>
</Tabs>

## Prérequis

Pour superviser votre serveur CIFS, il est possible de réaliser une authentification par : 
* utilisateur et mot de passe

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Protocol CIFS** :

```bash
yum install centreon-plugin-Applications-Protocol-Cifs
```

2. Sur l'interface web de Centreon, installer le Pack **Protocol CIFS** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Protocol CIFS** :

```bash
yum install centreon-plugin-Applications-Protocol-Cifs
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Protocol CIFS** :

```bash
yum install centreon-pack-applications-protocol-cifs
```

3. Sur l'interface web de Centreon, installer le Pack **Protocol CIFS** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre serveur **Protocol CIFS**.
* Appliquez le modèle d'hôte **App-Protocol-Cifs-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Obligatoire | Nom                      | Description                                                                |
| :---------- | :----------------------- | :------------------------------------------------------------------------- |
|             | PROTOCOLCIFSUSERNAME     | Username                                                                   |
|             | PROTOCOLCIFSPASSWORD     | Password                                                                   |
|             | PROTOCOLCIFSTIMEOUT      | Timeout (Default: 30)                                                      |
|             | PROTOCOLCIFSEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_protocol_cifs.pl \
    --plugin=apps::protocols::cifs::plugin \
    --mode=connection \
    --hostname='10.0.0.1' \
    --cifs-username='my-username' \
    --cifs-password='my-password' \
    --directory='/test' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: authentication succeeded - connection time: 1.372s | 'connection.time.seconds'=1.372s;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_protocol_cifs.pl \
    --plugin=apps::protocols::cifs::plugin \
    --mode=connection \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_protocol_cifs.pl \
    --plugin=apps::protocols::cifs::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
des plugins.