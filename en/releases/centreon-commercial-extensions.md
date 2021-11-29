---
id: centreon-commercial-extensions
title: Commercial Extensions
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Commercial Extension**.

> It is very important when you update your system to refer to this section in order to learn about behavior changes or
> major changes that have been made on this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please contact support.

## Centreon MAP

### 21.10.0

- Compatibility with other 21.10 components.

## Centreon BAM

### 21.10.0

- [Configuration] Warn the user for unsaved changes on BA/BV

## Centreon MBI

### 21.10.0

- Compatibility with other 21.10 components.

## Centreon Auto Discovery

### 21.10.1

Release date: `November 19, 2021`

#### Bug fixes

- An invalid path in upgrade.php caused PHP errors in the update process


### 21.10.0

- Host discovery now handles arrays of objects (Advanced Attributes) in the discovery results
  - Can be used in conditions for every kind of mappers
  - Can be used to name hostgoups, hostcategories
  - Use cases: Cloud tags (Azure, AWS), network services discovered by Nmap, VMware IP addresses
- A warning sign appears with a tooltip in front of the discovered hosts that could not be added by the discovery job because they already existed

## Centreon Plugin Packs Manager

### 21.10.0

- An "Update all" button has been added to update all the installed Plugin Packs in one click

## Centreon License Manager

### 21.10.0

- Compatibility with other 21.10 components.