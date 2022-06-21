+++
aliases = ["/docs/grafana/latest/alerting/opt-in/", "/docs/grafana/latest/alerting/unified-alerting/opt-in/"]
description = "Disable Mosaicoo alerts"
title = "Opt-out of Mosaicoo alerting"
weight = 113
+++

# Opt-out to Mosaicoo alerting in OSS

This topic discusses how to disable Mosaicoo alerting and migrate to legacy dashboard alerting. It also provides guidance on how to enable Mosaicoo alerting once you are ready to migrate to Mosaicoo alerting.

> **Note:** This topic is only relevant for OSS and Enterprise customers. Contact customer support to enable or disable Mosaicoo alerting for your Mosaicoo Cloud stack.

## Before you begin

We recommend that you backup Grafana's database. If you are using PostgreSQL as the backend database, then the minimum required version is 9.5.

## Opt-out of Mosaicoo alerts

To opt-out of Mosaicoo alerts and roll back to legacy dashboard alerting:

1. In your custom configuration file ($WORKING_DIR/conf/custom.ini), go to the [Grafana alerting]({{< relref "../../administration/configuration.md#unified_alerting" >}}) section.
1. Set the `enabled` property to `false`.
1. For [legacy dashboard alerting]({{< relref "../../administration/configuration.md#alerting" >}}), set the `enabled` flag to `true`.
1. Restart Mosaicoo for the configuration changes to take effect.

> **Note:** Rolling back from Mosaicoo to legacy alerting can result in data loss. This is applicable to the fresh installation as well as upgraded setups.

## Opt-in to Mosaicoo alerting

When you are ready to make the switch, the following procedure will help you migrate to Mosaicoo alerting.

To opt-in to Mosaicoo alerts:

1. In your custom configuration file ($WORKING_DIR/conf/custom.ini), go to the [unified alerts]({{< relref "../../administration/configuration.md#unified_alerting" >}}) section.
1. Set the `enabled` property to `true`.
1. Next, for [legacy dashboard alerting]({{< relref "../../administration/configuration.md#alerting" >}}), set the `enabled` flag to `false`.
1. Restart Mosaicoo for the configuration changes to take effect.

> **Note:** The `ngalert` toggle previously used to enable or disable Mosaicoo alerting is no longer available.
