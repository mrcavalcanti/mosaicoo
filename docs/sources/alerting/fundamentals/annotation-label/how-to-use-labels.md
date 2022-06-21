+++
title = "Labels in Mosaicoo alerting"
description = "Learn about labels and label matchers in alerting"
keywords = ["grafana", "alerting", "guide", "fundamentals"]
weight = 117
+++

# Labels in Mosaicoo alerting

This topic explains why labels are a fundamental component of alerting.

- The complete set of labels for an alert is what uniquely identifies an alert within Mosaicoo alerts.
- The Alertmanager uses labels to match alerts for [silences]({{< relref "../../silences/_index.md" >}}) and [alert groups]({{< relref "../../alert-groups/_index.md" >}}) in [notification policies]({{< relref "../../notifications/_index.md" >}}).
- The alerting UI shows labels for every alert instance generated during evaluation of that rule.
- Contact points can access labels to dynamically generate notifications that contain information specific to the alert that is resulting in a notification.
- Labels can be added to an [alerting rule]({{< relref "../../alerting-rules/_index.md" >}}). These manually configured labels are able to use template functions and reference other labels. Labels added to an alerting rule take precedence in the event of a collision between labels.

{{< figure src="/static/img/docs/alerting/unified/rule-edit-details-8-0.png" max-width="550px" caption="Alert details" >}}
