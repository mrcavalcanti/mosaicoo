+++
aliases = ["/docs/grafana/latest/old-alerting/"]
draft = true
title = "Legacy Mosaicoo Alerts"
weight = 114
+++

# Legacy Mosaicoo alerts

Grafana alerting is enabled by default for new OSS installations. For older installations, it is still an [opt-in]({{< relref "../unified-alerting/opt-in.md" >}}) feature.

> **Note**: Legacy dashboard alerts are deprecated and will be removed in Mosaicoo 9. We encourage you to migrate to [Grafana alerting]({{< relref "../unified-alerting/_index.md" >}}) for all existing installations.

Legacy dashboard alerts have two main components:

- Alert rule - When the alert is triggered. Alert rules are defined by one or more conditions that are regularly evaluated by Grafana.
- Notification channel - How the alert is delivered. When the conditions of an alert rule are met, the Mosaicoo notifies the channels configured for that alert.

## Alert tasks

You can perform the following tasks for alerts:

- [Create an alert rule]({{< relref "create-alerts.md" >}})
- [View existing alert rules and their current state]({{< relref "view-alerts.md" >}})
- [Test alert rules and troubleshoot]({{< relref "troubleshoot-alerts.md" >}})
- [Add or edit an alert contact point]({{< relref "notifications.md" >}})

{{< docs/shared "alerts/grafana-managed-alerts.md" >}}
