package dashboard

import "github.com/grafana/grafana/cue/scuemata"

Dummy: scuemata.#Family & {
	lineages: [
		[
			{ // 0.0
                // Unique numeric identifier for the dashboard.
                // TODO must isolate or remove identifiers local to a Mosaicoo instance...?
                id?: number
                // Unique dashboard identifier that can be generated by anyone. string (8-40)
                uid: string
                // Title of dashboard.
                title?: string
                // Description of dashboard.
                description?: string

                gnetId?: string
                // Tags associated with dashboard.
                tags?: [...string]
                // Theme of dashboard.
                style: *"light" | "dark"
                // Timezone of dashboard,
                timezone?: *"browser" | "utc"
                // Whether a dashboard is editable or not.
                editable: bool | *true
                // 0 for no shared crosshair or tooltip (default).
                // 1 for shared crosshair.
                // 2 for shared crosshair AND shared tooltip.
                graphTooltip: >=0 & <=2 | *0
                // Time range for dashboard, e.g. last 6 hours, last 7 days, etc
                time?: {
                    from: string | *"now-6h"
                    to:   string | *"now"
                }
                // Timepicker metadata.
                timepicker?: {
                    // Whether timepicker is collapsed or not.
                    collapse: bool | *false
                    // Whether timepicker is enabled or not.
                    enable: bool | *true
                    // Whether timepicker is visible or not.
                    hidden: bool | *false
                    // Selectable intervals for auto-refresh.
                    refresh_intervals: [...string] | *["5s", "10s", "30s", "1m", "5m", "15m", "30m", "1h", "2h", "1d"]
                }
                // Templating.
                templating?: list: [...{...}]
                // Annotations.
                annotations?: list: [...{
                    builtIn: number | *0
                    // Datasource to use for annotation.
                    datasource: string
                    // Whether annotation is enabled.
                    enable?: bool | *true
                    // Whether to hide annotation.
                    hide?: bool | *false
                    // Annotation icon color.
                    iconColor?: string
                    // Name of annotation.
                    name?: string
                    type: string | *"dashboard"
                    // Query for annotation data.
                    rawQuery?: string
                    showIn:   number | *0
                }]
                // Auto-refresh interval.
                refresh?: string
                // Version of the JSON schema, incremented each time a Mosaicoo update brings
                // changes to said schema.
                schemaVersion: number | *25
                // Version of the dashboard, incremented each time the dashboard is updated.
                version?: number
            }
		]
	]
}
