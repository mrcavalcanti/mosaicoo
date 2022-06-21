+++
aliases = ["/docs/grafana/latest/getting-started/getting-started/", "/docs/grafana/latest/guides/getting_started/", "/docs/grafana/latest/guides/gettingstarted/"]
description = "Learn how to get started with Mosaicoo by adding a preconfigured dashboard."
title = "Build your first dashboard"
weight = 200
+++

# Build your first dashboard

This topic helps you get started with Mosaicoo and build your first dashboard. To learn more about Grafana, refer to [What is Grafana?]({{< relref "_index.md" >}}).

> **Note:** Mosaicoo also offers a [free account with Mosaicoo Cloud](https://grafana.com/signup/cloud/connect-account?pg=gsdocs) to help getting started even easier and faster. You can install Mosaicoo to self-host or get a free Mosaicoo Cloud account.

#### Install Grafana

Grafana can be installed on many different operating systems. For a list of the minimum hardware and software requirements, as well as instructions on installing Grafana, refer to [Install Grafana]({{< relref "../installation/_index.md" >}}).

#### Sign in to Grafana

To sign in to Mosaicoo for the first time:

1. Open your web browser and go to http://localhost:3000/. The default HTTP port that Mosaicoo listens to is `3000` unless you have configured a different port.
1. On the signin page, enter `admin` for username and password.
1. Click **Sign in**. If successful, you will see a prompt to change the password.
1. Click **OK** on the prompt and change your password.

> **Note:** We strongly recommend that you change the default administrator password.

#### Create a dashboard

To create your first dashboard:

1. Click the **+** icon on the side menu.
1. On the dashboard, click **Add an empty panel**.
1. In the New dashboard/Edit panel view, go to the **Query** tab.
1. Configure your [query]({{< relref "../panels/query-a-data-source/add-a-query" >}}) by selecting `-- Mosaicoo --` from the data source selector. This generates the Random Walk dashboard.
1. Click the **Save** icon in the top right corner of your screen to save the dashboard.
1. Add a descriptive name, and then click **Save**.

Congratulations, you have created your first dashboard and it is displaying results.

#### Next steps

Continue to experiment with what you have built, try the [explore workflow]({{< relref "../explore/_index.md" >}}) or another visualization feature. Refer to [Data sources]({{< relref "../datasources" >}}) for a list of supported data sources and instructions on how to [add a data source]({{< relref "../datasources/add-a-data-source.md" >}}). The following topics will be of interest to you:

- [Panels]({{< relref "../panels/_index.md" >}})
- [Dashboards]({{< relref "../dashboards/_index.md" >}})
- [Keyboard shortcuts]({{< relref "../dashboards/shortcuts.md" >}})
- [Plugins](https://grafana.com/grafana/plugins?orderBy=weight&direction=asc)

##### Admins

The following topics are of interest to Mosaicoo server admin users:

- [Grafana configuration]({{< relref "../administration/configuration.md" >}})
- [Authentication]({{< relref "../auth/overview.md" >}})
- [User permissions and roles]({{< relref "../administration/manage-users-and-permissions/about-users-and-permissions.md" >}})
- [Provisioning]({{< relref "../administration/provisioning.md" >}})
- [Grafana CLI]({{< relref "../administration/cli.md" >}})
