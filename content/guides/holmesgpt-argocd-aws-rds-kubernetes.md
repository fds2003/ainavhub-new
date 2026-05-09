---
title: "HolmesGPT"
date: "2024-01-01 00:00:00+08:00"
description: HolmesGPT HolmesGPT AI
slug: holmesgpt-argocd-aws-rds-kubernetes
tags:
- aws
- alertmanager
- loki
- github
- clientid
draft: false
related_tools:
- claude github webhook
- github copilot
- github copilot workspace
- github copilot for xcode
- github spark
---

## HolmesGPT

HolmesGPT是一个专注于云故障排除和警报调查的AI智能代理，它通过连接AI模型与实时的可观测性数据和组织知识，采用代理循环机制，深入分析来自数十种内置集成数据源（包括ArgoCD、AWS RDS、Kubernetes、Prometheus、Loki等主流云平台和可观测性工具）的数据，以识别问题的根本原因并提出修复建议。该项目强调端到端自动化能力，能够从外部系统获取警报并将其分析结果回写，支持与Slack、Prometheus/AlertManager、PagerDuty、OpsGenie、Jira和GitHub等系统集成，并提供高度可定制性，允许用户添加自定义数据源和运行手册。用户可以通过Robusta SaaS或CLI工具使用它，并能提供文件作为上下文进行问答或交互式调查。此外，HolmesGPT设计上注重数据隐私，默认只读访问且遵守RBAC权限，不会使用用户数据进行模型训练，并支持用户使用自己的LLM API密钥，其可靠性通过基于pytest的评估套件进行验证。