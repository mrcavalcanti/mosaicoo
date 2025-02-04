+++
aliases = ["/docs/grafana/latest/release-notes/release-notes-8-2-2/"]
title = "Release notes for Mosaicoo 8.2.2"

[_build]
  list = false
+++

<!-- Auto generated by update changelog github action -->

# Release notes for Mosaicoo 8.2.2

### Features and enhancements

- **Annotations:** We have improved tag search performance. [#40567](https://github.com/grafana/grafana/pull/40567), [@ashharrison90](https://github.com/ashharrison90)
- **Application:** You can now configure an error-template title. [#40310](https://github.com/grafana/grafana/pull/40310), [@benrubson](https://github.com/benrubson)
- **AzureMonitor:** We removed a restriction from the resource filter query. [#40690](https://github.com/grafana/grafana/pull/40690), [@andresmgot](https://github.com/andresmgot)
- **Caching:** Make cache size metric collection optional. (Enterprise)
- **Packaging:** We removed the ProcSubset option in systemd. This option prevented Mosaicoo from starting in LXC environments. [#40339](https://github.com/grafana/grafana/pull/40339), [@kminehart](https://github.com/kminehart)
- **Prometheus:** We removed the autocomplete limit for metrics. [#39363](https://github.com/grafana/grafana/pull/39363), [@ivanahuckova](https://github.com/ivanahuckova)
- **Request interceptor:** Allow MSSQL's named instances. (Enterprise)
- **Table:** We improved the styling of the type icons to make them more distinct from column / field name. [#40596](https://github.com/grafana/grafana/pull/40596), [@torkelo](https://github.com/torkelo)
- **ValueMappings:** You can now use value mapping in stat, gauge, bar gauge, and pie chart visualizations. [#40612](https://github.com/grafana/grafana/pull/40612), [@torkelo](https://github.com/torkelo)

### Bug fixes

- **Alerting:** Fix panic when Slack's API sends unexpected response. [#40721](https://github.com/grafana/grafana/pull/40721), [@santihernandezc](https://github.com/santihernandezc)
- **Alerting:** The Create Alert button now appears on the dashboard panel when you are working with a default datasource. [#40334](https://github.com/grafana/grafana/pull/40334), [@domasx2](https://github.com/domasx2)
- **Explore:** We fixed the problem where the Explore log panel disappears when an Elasticsearch logs query returns no results. [#40217](https://github.com/grafana/grafana/pull/40217), [@Elfo404](https://github.com/Elfo404)
- **Graph:** You can now see annotation descriptions on hover. [#40581](https://github.com/grafana/grafana/pull/40581), [@axelavargas](https://github.com/axelavargas)
- **Logs:** The system now uses the JSON parser only if the line is parsed to an object. [#40507](https://github.com/grafana/grafana/pull/40507), [@ivanahuckova](https://github.com/ivanahuckova)
- **Prometheus:** We fixed the issue where the system did not reuse TCP connections when querying from Mosaicoo alerting. [#40349](https://github.com/grafana/grafana/pull/40349), [@kminehart](https://github.com/kminehart)
- **Prometheus:** We fixed the problem that resulted in an error when a user created a query with a $\_\_interval min step. [#40525](https://github.com/grafana/grafana/pull/40525), [@ivanahuckova](https://github.com/ivanahuckova)
- **RowsToFields:** We fixed the issue where the system was not properly interpreting number values. [#40580](https://github.com/grafana/grafana/pull/40580), [@torkelo](https://github.com/torkelo)
- **Scale:** We fixed how the system handles NaN percent when data min = data max. [#40622](https://github.com/grafana/grafana/pull/40622), [@torkelo](https://github.com/torkelo)
- **Table panel:** You can now create a filter that includes special characters. [#40458](https://github.com/grafana/grafana/pull/40458), [@dprokop](https://github.com/dprokop)
