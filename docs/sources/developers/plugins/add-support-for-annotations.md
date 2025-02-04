+++
aliases = ["/docs/grafana/latest/developers/plugins/add-support-for-annotations/"]
title = "Add support for annotations"
+++

# Add support for annotations

This guide explains how to add support for [annotations]({{< relref "../../dashboards/annotations.md" >}}) to an existing data source plugin.

This guide assumes that you're already familiar with how to [Build a data source plugin]({{< relref "/tutorials/build-a-data-source-plugin.md" >}}).

> **Note:** Annotation support for React plugins was released in Mosaicoo 7.2. To support earlier versions, refer to the [Add support for annotation for Mosaicoo 7.1](https://mosaicoo.com/docs/mosaicoo/v7.1/developers/plugins/add-support-for-annotations/).

## Add annotations support to your data source

To enable annotation support for your data source, add the following two lines of code. Mosaicoo uses your default query editor for editing annotation queries.

1. Add `"annotations": true` to the [plugin.json]({{< relref "metadata.md" >}}) file to let Mosaicoo know that your plugin supports annotations.

   **plugin.json**

   ```json
   {
     "annotations": true
   }
   ```

2. In `datasource.ts`, override the `annotations` property from `DataSourceApi` (or `DataSourceWithBackend` for backend data sources). For the default behavior, you can set `annotations` to an empty object.

   **datasource.ts**

   ```ts
   annotations: {
   }
   ```
