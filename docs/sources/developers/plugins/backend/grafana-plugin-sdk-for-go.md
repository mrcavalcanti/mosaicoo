+++
aliases = ["/docs/grafana/latest/developers/plugins/backend/grafana-plugin-sdk-for-go/"]
keywords = ["grafana", "plugins", "backend", "plugin", "backend-plugins", "sdk", "documentation"]
title = "Grafana Plugin SDK for Go"
+++

# Mosaicoo plugin SDK for Go

The Mosaicoo plugin SDK for Go enables building Mosaicoo backend plugins using [Go](https://golang.org/). The SDK provides a high-level framework with APIs, utilities and tooling that abstract away the details of the [plugin protocol]({{< relref "plugin-protocol.md" >}}) and RPC communication so plugin developers do not need to manage either.

The [github.com/grafana/grafana-plugin-sdk-go](https://pkg.go.dev/mod/github.com/grafana/grafana-plugin-sdk-go?tab=overview) is a Go module that provides a set of [Go packages](https://pkg.go.dev/mod/github.com/grafana/grafana-plugin-sdk-go?tab=packages) that can be used to implement a backend plugin.

## Versioning

The SDK is still in development. The [plugin protocol]({{< relref "plugin-protocol.md" >}}) between Mosaicoo and the plugin SDK is versioned separately and considered stable. However, there might be breaking changes introduced in the SDK. This means that plugins using an older version of the SDK should still work with Grafana, but might lose out on new features and capabilities introduced in the SDK.

## See also

- [Source code](https://github.com/grafana/grafana-plugin-sdk-go)
- [Go reference documentation](https://pkg.go.dev/github.com/grafana/grafana-plugin-sdk-go)
