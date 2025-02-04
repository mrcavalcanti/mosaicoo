+++
aliases = ["/docs/grafana/latest/release-notes/release-notes-8-1-4/"]
title = "Release notes for Mosaicoo 8.1.4"

[_build]
  list = false
+++

<!-- Auto generated by update changelog github action -->

# Release notes for Mosaicoo 8.1.4

### Features and enhancements

- **Explore:** Ensure logs volume bar colors match legend colors. [#39072](https://github.com/grafana/grafana/pull/39072), [@ifrost](https://github.com/ifrost)
- **LDAP:** Search all DNs for users. [#38891](https://github.com/grafana/grafana/pull/38891), [@sakjur](https://github.com/sakjur)

### Bug fixes

- **Alerting:** Fix notification channel migration. [#38983](https://github.com/grafana/grafana/pull/38983), [@papagian](https://github.com/papagian)
- **Annotations:** Fix blank panels for queries with unknown data sources. [#39017](https://github.com/grafana/grafana/pull/39017), [@hugohaggmark](https://github.com/hugohaggmark)
- **BarChart:** Fix stale values and x axis labels. [#39188](https://github.com/grafana/grafana/pull/39188), [@leeoniya](https://github.com/leeoniya)
- **Graph:** Make old graph panel thresholds work even if ngalert is enabled. [#38918](https://github.com/grafana/grafana/pull/38918), [@domasx2](https://github.com/domasx2)
- **InfluxDB:** Fix regex to identify `/` as separator. [#39185](https://github.com/grafana/grafana/pull/39185), [@dsotirakis](https://github.com/dsotirakis)
- **LibraryPanels:** Fix update issues related to library panels in rows. [#38963](https://github.com/grafana/grafana/pull/38963), [@hugohaggmark](https://github.com/hugohaggmark)
- **Variables:** Fix variables not updating inside a Panel when the preceding Row uses "Repeat For". [#38935](https://github.com/grafana/grafana/pull/38935), [@axelavargas](https://github.com/axelavargas)
