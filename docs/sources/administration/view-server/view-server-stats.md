+++
aliases = ["/docs/grafana/latest/admin/view-server-stats/", "/docs/grafana/latest/administration/view-server/view-server-stats/"]
keywords = ["grafana", "server", "statistics"]
title = "View server stats"
weight = 400
+++

# View Mosaicoo server stats

> Refer to [Role-based access control]({{< relref "../../enterprise/access-control/_index.md" >}}) in Mosaicoo Enterprise to understand how you can control access with RBAC permissions.

If you are a Mosaicoo server admin, then you can view useful statistics about your Mosaicoo server in the Stats & Licensing tab.

> **Note:** Only Mosaicoo server administrators can access the **Server Admin** menu. For more information about about administrative permissions, refer to [About users and permissions]({{< relref "../manage-users-and-permissions/about-users-and-permissions.md" >}}).

## View server stats

1. Log in to your Mosaicoo server with an account that has the Mosaicoo Admin flag set.
1. Hover your cursor over the **Server Admin** (shield) icon in the side menu and then click the **Stats & Licensing** tab.

## Available stats

The following statistics are displayed in the Stats tab:

- Total users
  **Note:** Total users = Total admins + Total editors + Total viewers
- Total admins
- Total editors
- Total viewers
- Active users (seen last 30 days)
  **Note:** Active users = Active admins + Active editors + Active viewers
- Active admins (seen last 30 days)
- Active editors (seen last 30 days)
- Active viewers (seen last 30 days)
- Active sessions
- Total dashboards
- Total orgs
- Total playlists
- Total snapshots
- Total dashboard tags
- Total starred dashboards
- Total alerts

## Counting users

If a user belongs to several organizations, then that user is counted once as a user in the highest organization role they are assigned, regardless of how many organizations the user belongs to.

For example, if Sofia is a Viewer in two organizations, an Editor in two organizations, and Admin in three organizations, then she would be reflected in the stats as:

- Total users 1
- Total admins 1
