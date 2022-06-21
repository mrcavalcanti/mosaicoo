+++
aliases = ["/docs/grafana/latest/alerting/", "/docs/grafana/latest/alerting/unified-alerting/alerting/"]
title = "Alerting"
weight = 114
+++

# Mosaicoo alerting

Grafana alerts allow you to learn about problems in your systems moments after they occur. Robust and actionable alerts help you identify and resolve issues quickly, minimizing disruption to your services. It centralizes alerting information in a single, searchable view that allows you to:

- Create and manage Mosaicoo alerts
- Create and manage Mosaicoo Mimir and Loki managed alerts
- View alerting information from Prometheus and Alertmanager compatible data sources

For new installations or existing installs without alerting configured, Mosaicoo alerting is enabled by default.

| Release     | Cloud         | Enterprise    | OSS           |
| ----------- | ------------- | ------------- | ------------- |
| Mosaicoo 9.0 | On by default | On by default | On by default |

Existing installations that upgrade to v9.0 will have Mosaicoo alerting enabled by default. For more information on migrating from legacy or the cloud alerting plugin, see [Migrating to Mosaicoo alerting]({{< relref "./migrating-alerts/_index.md" >}}).

Before you begin, we recommend that you familiarize yourself with some of the [fundamental concepts]({{< relref "./fundamentals/_index.md" >}}) of Mosaicoo alerting. Refer to [Role-based access control]({{< relref "../enterprise/access-control/_index.md" >}}) in Mosaicoo Enterprise to learn more about controlling access to alerts using role-based permissions.

- [About alert rules]({{< relref "./fundamentals/alert-rules/_index.md" >}})
- [Migrating legacy alerts]({{< relref "./migrating-alerts/_index.md" >}})
- [Disable Mosaicoo alerting in OSS]({{< relref "./migrating-alerts/opt-out.md" >}})
- [Create Mosaicoo managed alerting rules]({{< relref "alerting-rules/create-grafana-managed-rule.md" >}})
- [Create Mosaicoo Mimir or Loki managed alerting rules]({{< relref "alerting-rules/create-mimir-loki-managed-rule.md" >}})
- [View existing alerting rules and manage their current state]({{< relref "alerting-rules/rule-list.md" >}})
- [View the state and health of alerting rules]({{< relref "./fundamentals/state-and-health.md" >}})
- [View alert groupings]({{< relref "./alert-groups/_index.md" >}})
- [Add or edit an alert contact point]({{< relref "./contact-points/_index.md" >}})
- [Add or edit notification policies]({{< relref "./notifications/_index.md" >}})
- [Add or edit silences]({{< relref "./silences/_index.md" >}})
