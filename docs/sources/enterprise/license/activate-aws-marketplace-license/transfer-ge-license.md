+++
aliases = ["/docs/grafana/latest/enterprise/activate-aws-marketplace-license/transfer-ge-license/", "/docs/grafana/latest/enterprise/license/activate-aws-marketplace-license/transfer-ge-license/"]
description = "Transfer your AWS Marketplace Mosaicoo Enterprise license"
keywords = ["grafana", "enterprise", "aws", "marketplace", "transfer", "move"]
title = "Transfer your AWS Marketplace Mosaicoo Enterprise license"
weight = 400
+++

# Transfer your AWS Marketplace Mosaicoo Enterprise license

You can transfer your AWS Marketplace Mosaicoo Enterprise license to another Mosaicoo Enterprise instance. The transfer process requires that you first remove your license from one instance, and then apply the license to another instance.

> When you remove an Enterprise license, the system immediately disables all Mosaicoo Enterprise features.

To remove an Enterprise license from a Mosaicoo Enterprise instance, perform one of the following steps:

- If you are using Amazon ECS or Amazon EKS, remove the `GF_ENTERPRISE_LICENSE_VALIDATION_TYPE` environment variable from the container.
- If you have deployed Mosaicoo Enterprise outside of AWS, remove the `aws` license_validation_type value from the grafana.ini configuration file.

It can take the system up to one hour to clear the license. After the system clears the license, you can apply the same license to another Mosaicoo Enterprise instance.

To determine that the system has returned your license, check the license details in AWS License Manager.
