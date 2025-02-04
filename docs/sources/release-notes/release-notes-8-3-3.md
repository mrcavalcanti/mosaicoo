+++
aliases = ["/docs/grafana/latest/release-notes/release-notes-8-3-3/"]
title = "Release notes for Mosaicoo 8.3.3"

[_build]
  list = false
+++

<!-- Auto generated by update changelog github action -->

# Release notes for Mosaicoo 8.3.3

### Features and enhancements

- **BarChart:** Use new data error view component to show actions in panel edit. [#42474](https://github.com/grafana/grafana/pull/42474), [@torkelo](https://github.com/torkelo)
- **CloudMonitor:** Iterate over pageToken for resources. [#42546](https://github.com/grafana/grafana/pull/42546), [@iwysiu](https://github.com/iwysiu)
- **Macaron:** Prevent WriteHeader invalid HTTP status code panic. [#42973](https://github.com/grafana/grafana/pull/42973), [@bergquist](https://github.com/bergquist)

### Bug fixes

- **AnnoListPanel:** Fix interpolation of variables in tags. [#42318](https://github.com/grafana/grafana/pull/42318), [@francoisdtm](https://github.com/francoisdtm)
- **CloudWatch:** Allow queries to have no dimensions specified. [#42800](https://github.com/grafana/grafana/pull/42800), [@sunker](https://github.com/sunker)
- **CloudWatch:** Fix broken queries for users migrating from 8.2.4/8.2.5 to 8.3.0. [#42611](https://github.com/grafana/grafana/pull/42611), [@sunker](https://github.com/sunker)
- **CloudWatch:** Make sure MatchExact flag gets the right value. [#42621](https://github.com/grafana/grafana/pull/42621), [@sunker](https://github.com/sunker)
- **Dashboards:** Fix so that empty folders can be deleted from the manage dashboards/folders page. [#42527](https://github.com/grafana/grafana/pull/42527), [@ashharrison90](https://github.com/ashharrison90)
- **InfluxDB:** Improve handling of metadata query errors in InfluxQL. [#42500](https://github.com/grafana/grafana/pull/42500), [@gabor](https://github.com/gabor)
- **Loki:** Fix adding of ad hoc filters for queries with parser and line_format expressions. [#42590](https://github.com/grafana/grafana/pull/42590), [@ivanahuckova](https://github.com/ivanahuckova)
- **Prometheus:** Fix running of exemplar queries for non-histogram metrics. [#42749](https://github.com/grafana/grafana/pull/42749), [@ivanahuckova](https://github.com/ivanahuckova)
- **Prometheus:** Interpolate template variables in interval. [#42637](https://github.com/grafana/grafana/pull/42637), [@ivanahuckova](https://github.com/ivanahuckova)
- **StateTimeline:** Fix toolitp not showing when for frames with multiple fields. [#42741](https://github.com/grafana/grafana/pull/42741), [@dprokop](https://github.com/dprokop)
- **TraceView:** Fix virtualized scrolling when trace view is opened in right pane in Explore. [#42480](https://github.com/grafana/grafana/pull/42480), [@autoric](https://github.com/autoric)
- **Variables:** Fix repeating panels for on time range changed variables. [#42828](https://github.com/grafana/grafana/pull/42828), [@hugohaggmark](https://github.com/hugohaggmark)
- **Variables:** Fix so queryparam option works for scoped variables. [#42742](https://github.com/grafana/grafana/pull/42742), [@hugohaggmark](https://github.com/hugohaggmark)
