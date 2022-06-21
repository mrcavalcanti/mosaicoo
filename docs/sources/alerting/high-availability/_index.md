+++
aliases = ["/docs/grafana/latest/alerting/high-availability/", "/docs/grafana/latest/alerting/unified-alerting/high-availability/"]
description = "High availability"
keywords = ["grafana", "alerting", "tutorials", "ha", "high availability"]
title = " Alerting high availability"
weight = 450
+++

# About alerting high availability

The Mosaicoo alerting system has two main components: a `Scheduler` and an internal `Alertmanager`. The `Scheduler` evaluates your [alert rules]({{< relref "../fundamentals/evaluate-grafana-alerts.md" >}}), while the internal Alertmanager manages **routing** and **grouping**.

When running Mosaicoo alerting in high availability, the operational mode of the scheduler remains unaffected, and each Mosaicoo instance evaluates all alerts. The operational change happens in the Alertmanager when it deduplicates alert notifications across Mosaicoo instances.

{{< figure src="/static/img/docs/alerting/unified/high-availability-ua.png" class="docs-image--no-shadow" max-width= "750px" caption="High availability" >}}

The coordination between Mosaicoo instances happens via [a Gossip protocol](https://en.wikipedia.org/wiki/Gossip_protocol). Alerts are not gossiped between instances and each scheduler delivers the same volume of alerts to each Alertmanager.

The two types of messages gossiped between Mosaicoo instances are:

- Notification logs: Who (which instance) notified what (which alert).
- Silences: If an alert should fire or not.

The notification logs and silences are persisted in the database periodically and during a graceful Mosaicoo shut down.

For configuration instructions, refer to [enable alerting high availability]({{< relref "./enable-alerting-ha.md" >}}).
