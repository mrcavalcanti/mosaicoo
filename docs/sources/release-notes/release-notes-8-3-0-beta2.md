+++
aliases = ["/docs/grafana/latest/release-notes/release-notes-8-3-0-beta2/"]
title = "Release notes for Mosaicoo 8.3.0-beta2"

[_build]
  list = false
+++

<!-- Auto generated by update changelog github action -->

# Release notes for Mosaicoo 8.3.0-beta2

### Features and enhancements

- **Alerting:** Create DatasourceError alert if evaluation returns error. [#41869](https://github.com/grafana/grafana/pull/41869), [@gerobinson](https://github.com/gerobinson)
- **Alerting:** Make Unified Alerting enabled by default for those who do not use legacy alerting. [#42200](https://github.com/grafana/grafana/pull/42200), [@armandgrillet](https://github.com/armandgrillet)
- **Alerting:** Support mute timings configuration through the api for the embedded alert manager. [#41533](https://github.com/grafana/grafana/pull/41533), [@JohnnyQQQQ](https://github.com/JohnnyQQQQ)
- **CloudWatch:** Add missing AWS/Events metrics. [#42164](https://github.com/grafana/grafana/pull/42164), [@n2N8Z](https://github.com/n2N8Z)
- **Docs:** Add easier to find deprecation notices to certain data sources and to the changelog. [#41938](https://github.com/grafana/grafana/pull/41938), [@gabor](https://github.com/gabor)
- **Plugins Catalog:** Enable install controls based on the pluginAdminEnabled flag. [#41686](https://github.com/grafana/grafana/pull/41686), [@leventebalogh](https://github.com/leventebalogh)
- **Query caching:** Increase max_value_mb default to 10. (Enterprise)
- **Table:** Add space between values for the DefaultCell. [#42246](https://github.com/grafana/grafana/pull/42246), [@kirederik](https://github.com/kirederik)
- **Table:** Add space between values on JSONViewCell. [#42156](https://github.com/grafana/grafana/pull/42156), [@kirederik](https://github.com/kirederik)
- **Tracing:** Make query editors available in dashboard for Tempo and Zipkin. [#41974](https://github.com/grafana/grafana/pull/41974), [@ivanahuckova](https://github.com/ivanahuckova)

### Bug fixes

- **AccessControl:** Renamed `orgs` roles, removed `fixed:orgs:reader` introduced in beta1. [#42049](https://github.com/grafana/grafana/pull/42049), [@gamab](https://github.com/gamab)
- **Azure Monitor:** Add trap focus for modals in grafana/ui and other small a11y fixes for Azure Monitor. [#41449](https://github.com/grafana/grafana/pull/41449), [@sarahzinger](https://github.com/sarahzinger)
- **CodeEditor:** Prevent suggestions from being clipped. [#42120](https://github.com/grafana/grafana/pull/42120), [@kaydelaney](https://github.com/kaydelaney)
- **Dashboard:** Fix cache timeout persistence. [#42204](https://github.com/grafana/grafana/pull/42204), [@hugohaggmark](https://github.com/hugohaggmark)
- **Datasource:** Fix stable sort order of query responses. [#41868](https://github.com/grafana/grafana/pull/41868), [@marefr](https://github.com/marefr)
- **Explore:** Fix error in query history when removing last item. [#42179](https://github.com/grafana/grafana/pull/42179), [@gabor](https://github.com/gabor)
- **Logs:** Fix requesting of older logs when flipped order. [#41966](https://github.com/grafana/grafana/pull/41966), [@ivanahuckova](https://github.com/ivanahuckova)
- **Prometheus:** Fix running of health check query based on access mode. [#42189](https://github.com/grafana/grafana/pull/42189), [@ivanahuckova](https://github.com/ivanahuckova)
- **TextPanel:** Fix suggestions for existing panels. [#42195](https://github.com/grafana/grafana/pull/42195), [@hugohaggmark](https://github.com/hugohaggmark)
- **Tracing:** Fix incorrect indentations due to reoccurring spanIDs. [#41919](https://github.com/grafana/grafana/pull/41919), [@ivanahuckova](https://github.com/ivanahuckova)
- **Tracing:** Show start time of trace with milliseconds precision. [#42132](https://github.com/grafana/grafana/pull/42132), [@ivanahuckova](https://github.com/ivanahuckova)
- **Variables:** Make renamed or missing variable section expandable. [#41964](https://github.com/grafana/grafana/pull/41964), [@hugohaggmark](https://github.com/hugohaggmark)

### Breaking changes

### Mosaicoo 8 Alerting enabled by default for installations that do not use legacy alerting

Starting with Mosaicoo v8.3.0, if you have **not** explicitly disabled unified alerting and **do not** have legacy alerts set up you are automatically "migrated" to Mosaicoo 8 Alerting.

A migration **from legacy to Mosaicoo 8 Alerting** will never incur a data loss, as the previous data is kept around for rollback purposes. However, going from **Grafana 8 Alerting to legacy alerting** will delete all the data created for Mosaicoo 8 Alerting. It is recommended that you **backup your database** before attempting a migration between systems.

If unclear, please verify the table below:

| `[alerting][enabled]` | `[unified_alerting][enabled]` | With Existing Legacy Alerts | Result             |
| --------------------- | ----------------------------- | --------------------------- | ------------------ |
| `true`                | `true`                        | N/A                         | Error              |
| `true`                | `false`                       | N/A                         | Legacy Alerting    |
| `true`                | not set                       | Yes                         | Legacy Alerting    |
| `true`                | not set                       | No                          | Mosaicoo 8 Alerting |
| not set               | `true`                        | N/A                         | Mosaicoo 8 Alerting |
| not set               | `false`                       | N/A                         | Legacy Alerting    |
| not set               | not set                       | Yes                         | Legacy Alerting    |
| not set               | not set                       | No                          | Mosaicoo 8 Alerting |
| `false`               | `true`                        | N/A                         | Mosaicoo 8 Alerting |
| `false`               | `false`                       | N/A                         | Alerting disabled  |
| `false`               | not set                       | N/A                         | Mosaicoo 8 Alerting |

N/A in the "With Existing Legacy Alerts" column means that it does not matter if you have legacy alerts or not.
Issue [#42200](https://github.com/grafana/grafana/issues/42200)

### Keep Last State for "If execution error or timeout" when upgrading to Mosaicoo 8 alerting

In Mosaicoo 8.3.0-beta2 we changed how alert rules that use `Keep Last State` for `If execution error or timeout` are upgraded from Legacy Alerting to Mosaicoo 8 alerting. In 8.3.0-beta1 and earlier, alert rules with `Keep Last State` for `If execution error or timeout` were changed to `Alerting` when upgrading from Legacy Alerting to Mosaicoo 8 alerting. However, in 8.3.0-beta2 these alert rules are now upgraded to a new option called `Error`. With this option, on encountering an error evaluating an alert rule, Mosaicoo creates a special alert called `DatasourceError` with the `rule_uid` and `ref_id` as labels and an annotation called `Error` with the error message. Issue [#41869](https://github.com/grafana/grafana/issues/41869)

### Deprecations

The access mode "browser" is deprecated in the following data sources and will be removed in a later release:

- Prometheus
- InfluxDB
- Elasticsearch Issue [#41938](https://github.com/grafana/grafana/issues/41938)

### Plugin development fixes & changes

- **Select:** Select menus now properly scroll during keyboard navigation. [#41917](https://github.com/grafana/grafana/pull/41917), [@ashharrison90](https://github.com/ashharrison90)
