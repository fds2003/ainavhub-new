---
title: "OpenLLMetry"
date: "2024-01-01 00:00:00+08:00"
description: OpenLLMetry OpenLLMetry OpenTelemetry
slug: openllmetry-opentelemetry-llm-datadog-ho
tags:
- ho
- pinecone
- datadog
- honeycomb
- apache
draft: false
related_tools:
- archon
- groundhog ai coding assistant
- python a2a
- hospital_multiagent_system
- phone mcp plugin
---

## OpenLLMetry

OpenLLMetry是基于OpenTelemetry建立的一套扩展工具，它为你的LLM（大型语言模型）应用程序提供全面的可观测性。由于它使用了OpenTelemetry，因此你可以将它连接到现有的可观测性解决方案，如Datadog、Honeycomb等。

这个工具由Traceloop维护，并且是在Apache 2.0许可下发布的。它包含了针对LLM提供商和向量数据库的标准OpenTelemetry工具，以及一个易于开始使用OpenLLMetry的Traceloop SDK，同时仍然输出可以连接到你的可观测性堆栈的标准OpenTelemetry数据。如果你已经使用OpenTelemetry，只需直接添加我们的任意一种工具即可。

##### 使用场景

OpenLLMetry适用的情况包括：

* 当你需要对你的LLM应用程序进行性能监测、错误追踪和调试时。
* 当你希望将你的LLM应用程序的监控数据集成进现有的可观测性解决方案（比如Datadog、Splunk等）。
* 当你在使用LLM服务（如OpenAI、Azure OpenAI、Anthropic等）或向量数据库（如Pinecone、Qdrant等）并希望对这些服务的请求和响应进行监控。
* 在开发阶段，帮助开发人员理解应用程序的行为，以及在生产环境中进行性能监控，以确保服务的稳定性和可靠性。


##### 如何开始

要开始使用OpenLLMetry，最简单的方式是通过安装Traceloop SDK。

安装SDK：


pip install traceloop-sdk


然后，在你的代码中添加以下代码行来开始监测：


from traceloop.sdk import Traceloop

Traceloop.init()


这样，你就可以开始使用OpenLLMetry来跟踪你的代码了。如果你在本地运行，你可能想要禁用批处理发送，这样你可以立即看到跟踪信息。

##### 支持的目标系统

OpenLLMetry支持并已测试连接到多个目标系统，包括但不限于Traceloop、Dynatrace、Datadog、New Relic、Honeycomb、Grafana Tempo、HyperDX、SigNoz、Splunk、OpenTelemetry Collector、IBM Instana等。

##### 被监控的内容

OpenLLMetry可以监控OpenTelemetry已经能够监控的所有内容，例如数据库、API调用等。此外，OpenLLMetry还提供了自定义的扩展，用于监控例如OpenAI、Anthropic等LLM提供商的调用，或是Chroma、Pinecone、Qdrant和Weaviate等向量数据库的使用。

OpenLLMetry是面向需要深度监控其LLM应用程序性能和行为的开发人员和团队的强大工具。提供了一种易于使用且与现有监控解决方案无缝集成的方法，有助于提高应用程序的稳定性、性能和用户体验。