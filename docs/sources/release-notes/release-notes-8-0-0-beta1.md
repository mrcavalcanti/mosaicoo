+++
aliases = ["/docs/grafana/latest/release-notes/release-notes-8-0-0-beta1/"]
title = "Release notes for Mosaicoo 8.0.0-beta1"

[_build]
  list = false
+++

<!-- Auto generated by update changelog github action -->

# Release notes for Mosaicoo 8.0.0-beta1

### Features and enhancements

- **API**: Add org users with pagination. [#33788](https://github.com/grafana/grafana/pull/33788), [@idafurjes](https://github.com/idafurjes)
- **API**: Return 404 when deleting nonexistent API key. [#33346](https://github.com/grafana/grafana/pull/33346), [@chaudum](https://github.com/chaudum)
- **API**: Return query results as JSON rather than base64 encoded Arrow. [#32303](https://github.com/grafana/grafana/pull/32303), [@ryantxu](https://github.com/ryantxu)
- **Alerting**: Allow sending notification tags to Opsgenie as extra properties. [#30332](https://github.com/grafana/grafana/pull/30332), [@DewaldV](https://github.com/DewaldV)
- **Alerts**: Replaces all uses of InfoBox & FeatureInfoBox with Alert. [#33352](https://github.com/grafana/grafana/pull/33352), [@torkelo](https://github.com/torkelo)
- **Auth**: Add support for JWT Authentication. [#29995](https://github.com/grafana/grafana/pull/29995), [@marshall-lee](https://github.com/marshall-lee)
- **AzureMonitor**: Add support for Microsoft.SignalRService/SignalR metrics. [#33246](https://github.com/grafana/grafana/pull/33246), [@M0ns1gn0r](https://github.com/M0ns1gn0r)
- **AzureMonitor**: Azure settings in Mosaicoo server config. [#33728](https://github.com/grafana/grafana/pull/33728), [@kostrse](https://github.com/kostrse)
- **AzureMonitor**: Migrate Metrics query editor to React. [#30783](https://github.com/grafana/grafana/pull/30783), [@joshhunt](https://github.com/joshhunt)
- **BarChart panel**: enable series toggling via legend. [#33955](https://github.com/grafana/grafana/pull/33955), [@dprokop](https://github.com/dprokop)
- **BarChart panel**: Adds support for Tooltip in BarChartPanel. [#33938](https://github.com/grafana/grafana/pull/33938), [@dprokop](https://github.com/dprokop)
- **PieChart panel**: Change look of highlighted pie slices. [#33841](https://github.com/grafana/grafana/pull/33841), [@oscarkilhed](https://github.com/oscarkilhed)
- **CloudMonitoring**: Migrate config editor from angular to react. [#33645](https://github.com/grafana/grafana/pull/33645), [@sunker](https://github.com/sunker)
- **CloudWatch**: Add Amplify Console metrics and dimensions. [#33171](https://github.com/grafana/grafana/pull/33171), [@rodrigorfk](https://github.com/rodrigorfk)
- **CloudWatch**: Add missing Redshift metrics to CloudWatch data source. [#32121](https://github.com/grafana/grafana/pull/32121), [@tomdaly](https://github.com/tomdaly)
- **CloudWatch**: Add metrics for managed RabbitMQ service. [#31838](https://github.com/grafana/grafana/pull/31838), [@nirojan](https://github.com/nirojan)
- **DashboardList**: Enable templating on search tag input. [#31460](https://github.com/grafana/grafana/pull/31460), [@delta50](https://github.com/delta50)
- **Datasource config**: correctly remove single custom http header. [#32445](https://github.com/grafana/grafana/pull/32445), [@gabor](https://github.com/gabor)
- **Elasticsearch**: Add generic support for template variables. [#32762](https://github.com/grafana/grafana/pull/32762), [@Elfo404](https://github.com/Elfo404)
- **Elasticsearch**: Allow omitting field when metric supports inline script. [#32839](https://github.com/grafana/grafana/pull/32839), [@Elfo404](https://github.com/Elfo404)
- **Elasticsearch**: Allow setting a custom limit for log queries. [#32422](https://github.com/grafana/grafana/pull/32422), [@Elfo404](https://github.com/Elfo404)
- **Elasticsearch**: Guess field type from first non-empty value. [#32290](https://github.com/grafana/grafana/pull/32290), [@Elfo404](https://github.com/Elfo404)
- **Elasticsearch**: Use application/x-ndjson content type for multisearch requests. [#32282](https://github.com/grafana/grafana/pull/32282), [@Elfo404](https://github.com/Elfo404)
- **Elasticsearch**: Use semver strings to identify ES version. [#33646](https://github.com/grafana/grafana/pull/33646), [@Elfo404](https://github.com/Elfo404)
- **Explore**: Add logs navigation to request more logs. [#33259](https://github.com/grafana/grafana/pull/33259), [@ivanahuckova](https://github.com/ivanahuckova)
- **Explore**: Map Graphite queries to Loki. [#33405](https://github.com/grafana/grafana/pull/33405), [@ifrost](https://github.com/ifrost)
- **Explore**: Scroll split panes in Explore independently. [#32978](https://github.com/grafana/grafana/pull/32978), [@ivanahuckova](https://github.com/ivanahuckova)
- **Explore**: Wrap each panel in separate error boundary. [#33868](https://github.com/grafana/grafana/pull/33868), [@aocenas](https://github.com/aocenas)
- **FieldDisplay**: Smarter naming of stat values when visualising row values (all values) in stat panels. [#31704](https://github.com/grafana/grafana/pull/31704), [@torkelo](https://github.com/torkelo)
- **Graphite**: Expand metric names for variables. [#33694](https://github.com/grafana/grafana/pull/33694), [@ifrost](https://github.com/ifrost)
- **Graphite**: Handle unknown Graphite functions without breaking the visual editor. [#32635](https://github.com/grafana/grafana/pull/32635), [@ifrost](https://github.com/ifrost)
- **Graphite**: Show graphite functions descriptions. [#32305](https://github.com/grafana/grafana/pull/32305), [@ifrost](https://github.com/ifrost)
- **Graphite**: Support request cancellation properly (Uses new backendSrv.fetch Observable request API). [#31928](https://github.com/grafana/grafana/pull/31928), [@mckn](https://github.com/mckn)
- **InfluxDB**: Flux: Improve handling of complex response-structures. [#33823](https://github.com/grafana/grafana/pull/33823), [@gabor](https://github.com/gabor)
- **InfluxDB**: Support region annotations. [#31526](https://github.com/grafana/grafana/pull/31526), [@Komalis](https://github.com/Komalis)
- **Inspector**: Download logs for manual processing. [#32764](https://github.com/grafana/grafana/pull/32764), [@ivanahuckova](https://github.com/ivanahuckova)
- **Jaeger**: Add node graph view for trace. [#31521](https://github.com/grafana/grafana/pull/31521), [@aocenas](https://github.com/aocenas)
- **Jaeger**: Search traces. [#32805](https://github.com/grafana/grafana/pull/32805), [@zoltanbedi](https://github.com/zoltanbedi)
- **Loki**: Use data source settings for alerting queries. [#33942](https://github.com/grafana/grafana/pull/33942), [@ivanahuckova](https://github.com/ivanahuckova)
- **NodeGraph**: Exploration mode. [#33623](https://github.com/grafana/grafana/pull/33623), [@aocenas](https://github.com/aocenas)
- **OAuth**: Add support for empty scopes. [#32129](https://github.com/grafana/grafana/pull/32129), [@jvoeller](https://github.com/jvoeller)
- **PanelChrome**: New logic-less emotion based component with no dependency on PanelModel or DashboardModel. [#29456](https://github.com/grafana/grafana/pull/29456), [@torkelo](https://github.com/torkelo)
- **PanelEdit**: Adds a table view toggle to quickly view data in table form. [#33753](https://github.com/grafana/grafana/pull/33753), [@torkelo](https://github.com/torkelo)
- **PanelEdit**: Highlight matched words when searching options. [#33717](https://github.com/grafana/grafana/pull/33717), [@torkelo](https://github.com/torkelo)
- **PanelEdit**: UX improvements. [#32124](https://github.com/grafana/grafana/pull/32124), [@torkelo](https://github.com/torkelo)
- **Plugins**: PanelRenderer and simplified QueryRunner to be used from plugins. [#31901](https://github.com/grafana/grafana/pull/31901), [@torkelo](https://github.com/torkelo)
- **Plugins**: AuthType in route configuration and params interpolation. [#33674](https://github.com/grafana/grafana/pull/33674), [@kostrse](https://github.com/kostrse)
- **Plugins**: Enable plugin runtime install/uninstall capabilities. [#33836](https://github.com/grafana/grafana/pull/33836), [@wbrowne](https://github.com/wbrowne)
- **Plugins**: Support set body content in plugin routes. [#32551](https://github.com/grafana/grafana/pull/32551), [@marefr](https://github.com/marefr)
- **Plugins**: Introduce marketplace app. [#33869](https://github.com/grafana/grafana/pull/33869), [@jackw](https://github.com/jackw)
- **Plugins**: Moving the DataSourcePicker to grafana/runtime so it can be reused in plugins. [#31628](https://github.com/grafana/grafana/pull/31628), [@mckn](https://github.com/mckn)
- **Prometheus**: Add custom query params for alert and exemplars queries. [#32440](https://github.com/grafana/grafana/pull/32440), [@aocenas](https://github.com/aocenas)
- **Prometheus**: Use fuzzy string matching to autocomplete metric names and label. [#32207](https://github.com/grafana/grafana/pull/32207), [@ifrost](https://github.com/ifrost)
- **Routing**: Replace Angular routing with react-router. [#31463](https://github.com/grafana/grafana/pull/31463), [@dprokop](https://github.com/dprokop)
- **Slack**: Use chat.postMessage API by default. [#32511](https://github.com/grafana/grafana/pull/32511), [@aknuds1](https://github.com/aknuds1)
- **Tempo**: Search for Traces by querying Loki directly from Tempo. [#33308](https://github.com/grafana/grafana/pull/33308), [@davkal](https://github.com/davkal)
- **Themes**: Switch theme without reload using global shortcut. [#32180](https://github.com/grafana/grafana/pull/32180), [@torkelo](https://github.com/torkelo)
- **TimeSeries panel**: Add support for shared cursor. [#33433](https://github.com/grafana/grafana/pull/33433), [@dprokop](https://github.com/dprokop)
- **TimeSeries panel**: Do not crash the panel if there is no time series data in the response. [#33993](https://github.com/grafana/grafana/pull/33993), [@dprokop](https://github.com/dprokop)
- **Variables**: Do not save repeated panels, rows and scopedVars. [#32436](https://github.com/grafana/grafana/pull/32436), [@torkelo](https://github.com/torkelo)
- **Variables**: Removes experimental Tags feature. [#33361](https://github.com/grafana/grafana/pull/33361), [@hugohaggmark](https://github.com/hugohaggmark)
- **Variables**: Removes the never refresh option. [#33533](https://github.com/grafana/grafana/pull/33533), [@hugohaggmark](https://github.com/hugohaggmark)
- **Visualizations**: Unify tooltip options across visualizations. [#33892](https://github.com/grafana/grafana/pull/33892), [@dprokop](https://github.com/dprokop)
- **Visualizations**: Refactor and unify option creation between new visualizations. [#33867](https://github.com/grafana/grafana/pull/33867), [@oscarkilhed](https://github.com/oscarkilhed)
- **Visualizations**: Remove singlestat panel. [#31904](https://github.com/grafana/grafana/pull/31904), [@dprokop](https://github.com/dprokop)

### Bug fixes

- **APIKeys**: Fixes issue with adding first api key. [#32201](https://github.com/grafana/grafana/pull/32201), [@torkelo](https://github.com/torkelo)
- **Alerting**: Add checks for non supported units - disable defaulting to seconds. [#32477](https://github.com/grafana/grafana/pull/32477), [@dsotirakis](https://github.com/dsotirakis)
- **Alerting**: Fix issue where Slack notifications won't link to user IDs. [#32861](https://github.com/grafana/grafana/pull/32861), [@n-wbrown](https://github.com/n-wbrown)
- **Alerting**: Omit empty message in PagerDuty notifier. [#31359](https://github.com/grafana/grafana/pull/31359), [@pkoenig10](https://github.com/pkoenig10)
- **AzureMonitor**: Fix migration error from older versions of App Insights queries. [#32372](https://github.com/grafana/grafana/pull/32372), [@joshhunt](https://github.com/joshhunt)
- **CloudWatch**: Fix AWS/Connect dimensions. [#33736](https://github.com/grafana/grafana/pull/33736), [@sunker](https://github.com/sunker)
- **CloudWatch**: Fix broken AWS/MediaTailor dimension name. [#33271](https://github.com/grafana/grafana/pull/33271), [@sunker](https://github.com/sunker)
- **Dashboards**: Allow string manipulation as advanced variable format option. [#29754](https://github.com/grafana/grafana/pull/29754), [@rscot231](https://github.com/rscot231)
- **DataLinks**: Includes harmless extended characters like Cyrillic characters. [#33551](https://github.com/grafana/grafana/pull/33551), [@hugohaggmark](https://github.com/hugohaggmark)
- **Drawer**: Fixes title overflowing its container. [#33857](https://github.com/grafana/grafana/pull/33857), [@thisisobate](https://github.com/thisisobate)
- **Explore**: Fix issue when some query errors were not shown. [#32212](https://github.com/grafana/grafana/pull/32212), [@aocenas](https://github.com/aocenas)
- **Generic OAuth**: Prevent adding duplicated users. [#32286](https://github.com/grafana/grafana/pull/32286), [@dsotirakis](https://github.com/dsotirakis)
- **Graphite**: Handle invalid annotations. [#32437](https://github.com/grafana/grafana/pull/32437), [@ifrost](https://github.com/ifrost)
- **Graphite**: Fix autocomplete when tags are not available. [#31680](https://github.com/grafana/grafana/pull/31680), [@ifrost](https://github.com/ifrost)
- **InfluxDB**: Fix Cannot read property 'length' of undefined in when parsing response. [#32504](https://github.com/grafana/grafana/pull/32504), [@ivanahuckova](https://github.com/ivanahuckova)
- **Instrumentation**: Enable tracing when Jaeger host and port are set. [#33682](https://github.com/grafana/grafana/pull/33682), [@zserge](https://github.com/zserge)
- **Instrumentation**: Prefix metrics with `grafana`. [#33925](https://github.com/grafana/grafana/pull/33925), [@bergquist](https://github.com/bergquist)
- **MSSQL**: By default let driver choose port. [#32417](https://github.com/grafana/grafana/pull/32417), [@aknuds1](https://github.com/aknuds1)
- **OAuth**: Add optional strict parsing of role_attribute_path. [#28021](https://github.com/grafana/grafana/pull/28021), [@klausenbusk](https://github.com/klausenbusk)
- **Panel**: Fixes description markdown with inline code being rendered on newlines and full width. [#32405](https://github.com/grafana/grafana/pull/32405), [@dprokop](https://github.com/dprokop)
- **PanelChrome**: Ignore data updates & errors for non data panels. [#33477](https://github.com/grafana/grafana/pull/33477), [@torkelo](https://github.com/torkelo)
- **Permissions**: Fix inherited folder permissions can prevent new permissions being added to a dashboard. [#33329](https://github.com/grafana/grafana/pull/33329), [@marefr](https://github.com/marefr)
- **Plugins**: Remove pre-existing plugin installs when installing with grafana-cli. [#31515](https://github.com/grafana/grafana/pull/31515), [@wbrowne](https://github.com/wbrowne)
- **Plugins**: Support installing to folders with whitespace and fix pluginUrl trailing and leading whitespace failures. [#32506](https://github.com/grafana/grafana/pull/32506), [@wbrowne](https://github.com/wbrowne)
- **Postgres/MySQL/MSSQL**: Don't return connection failure details to the client. [#32408](https://github.com/grafana/grafana/pull/32408), [@marefr](https://github.com/marefr)
- **Postgres**: Fix ms precision of interval in time group macro when TimescaleDB is enabled. [#33853](https://github.com/grafana/grafana/pull/33853), [@ying-jeanne](https://github.com/ying-jeanne)
- **Provisioning**: Use dashboard checksum field as change indicator. [#29797](https://github.com/grafana/grafana/pull/29797), [@cristi-](https://github.com/cristi-)
- **SQL**: Fix so that all captured errors are returned from sql engine. [#32353](https://github.com/grafana/grafana/pull/32353), [@marefr](https://github.com/marefr)
- **Shortcuts**: Fixes panel shortcuts so they always work. [#32385](https://github.com/grafana/grafana/pull/32385), [@torkelo](https://github.com/torkelo)
- **Table**: Fixes so border is visible for cells with links. [#33160](https://github.com/grafana/grafana/pull/33160), [@hugohaggmark](https://github.com/hugohaggmark)
- **Variables**: Clear query when data source type changes. [#33924](https://github.com/grafana/grafana/pull/33924), [@hugohaggmark](https://github.com/hugohaggmark)
- **Variables**: Filters out builtin variables from unknown list. [#33933](https://github.com/grafana/grafana/pull/33933), [@hugohaggmark](https://github.com/hugohaggmark)
- **Variables**: Refreshes all panels even if panel is full screen. [#33201](https://github.com/grafana/grafana/pull/33201), [@hugohaggmark](https://github.com/hugohaggmark)

### Breaking changes

Removes the `never` refresh option for Query variables. Existing variables will be migrated and any stored options will be removed. Issue [#33533](https://github.com/grafana/grafana/issues/33533)

Removes the experimental Tags feature for Variables. Issue [#33361](https://github.com/grafana/grafana/issues/33361)

### Deprecations

The InfoBox & FeatureInfoBox are now deprecated please use the Alert component instead with severity info.
Issue [#33352](https://github.com/grafana/grafana/issues/33352)

### Plugin development fixes & changes

- **Button**: Introduce buttonStyle prop. [#33384](https://github.com/grafana/grafana/pull/33384), [@jackw](https://github.com/jackw)
- **DataQueryRequest**: Remove deprecated props showingGraph and showingTabel and exploreMode. [#31876](https://github.com/grafana/grafana/pull/31876), [@torkelo](https://github.com/torkelo)
- **grafana/ui**: Update React Hook Form to v7. [#33328](https://github.com/grafana/grafana/pull/33328), [@Clarity-89](https://github.com/Clarity-89)
- **IconButton**: Introduce variant for red and blue icon buttons. [#33479](https://github.com/grafana/grafana/pull/33479), [@jackw](https://github.com/jackw)
- **Plugins**: Expose the `getTimeZone` function to be able to get the current selected timeZone. [#31900](https://github.com/grafana/grafana/pull/31900), [@mckn](https://github.com/mckn)
- **TagsInput**: Add className to TagsInput. [#33944](https://github.com/grafana/grafana/pull/33944), [@Clarity-89](https://github.com/Clarity-89)
- **VizLegend**: Move onSeriesColorChanged to PanelContext (breaking change). [#33611](https://github.com/grafana/grafana/pull/33611), [@ryantxu](https://github.com/ryantxu)

### License update

- **AGPL License:** Update license from Apache 2.0 to the GNU Affero General Public License (AGPL). [#33184](https://github.com/grafana/grafana/pull/33184)
