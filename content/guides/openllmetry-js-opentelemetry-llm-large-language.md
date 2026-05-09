---
title: "OpenLLMetry-JS"
date: "2024-01-01 00:00:00+08:00"
description: OpenLLMetry-JS OpenLLMetry-JS OpenTelemetry
slug: openllmetry-js-opentelemetry-llm-large-language
tags:
- dynatrace
- language
- datadog
- honeycomb
- dbs
draft: false
related_tools:
- rllm
- onefilellm
- llmanager
- llm.pdf
- translatebookwithllm
---

## OpenLLMetry-JS

OpenLLMetry-JS是一套基于OpenTelemetry之上构建的扩展工具，它为你的LLM（Large Language Models，大型语言模型）应用提供了全面的可观测性。由于它是在OpenTelemetry的基础上实现的，所以你可以将其连接到现有的可观测性解决方案中，如Datadog、Honeycomb等。

它由Traceloop在Apache 2.0许可下维护。

该项目包含针对LLM提供商和Vector DBs的标准OpenTelemetry工具，以及一个Traceloop SDK，这使得开始使用OpenLLMetry-JS变得非常简单，同时仍然输出标准的OpenTelemetry数据，可以连接到你的可观测性堆栈中。如果你已经使用了OpenTelemetry，直接添加任何我们的工具即可。

##### 开始使用

最简单的开始方式是使用我们的SDK。你只需要安装SDK，然后在你的代码中添加几行代码即可开始对你的代码进行跟踪。如果你在本地运行，可能需要禁用批处理发送，以便立即看到跟踪信息。

##### 支持的目的地

* Traceloop
* Dynatrace
* Datadog
* New Relic
* Honeycomb
* Grafana Tempo
* HyperDX
* SigNoz
* Splunk
* OpenTelemetry Collector


##### 我们可以做什么？

OpenLLMetry-JS能够对你的数据库、API调用等已经被OpenTelemetry支持的事务进行跟踪。此外，我们还构建了一组自定义扩展，用于跟踪像OpenAI或Anthropic这样的LLM提供商，或如Pinecone、Chroma或Weaviate这样的Vector DB的调用。

##### LLM提供商

* OpenAI
* Azure OpenAI
* Anthropic
* Cohere
* Replicate
* HuggingFace
* Vertex AI (GCP)
* Bedrock (AWS)


##### Vector DBs

* Pinecone
* Chroma
* Weaviate
* Milvus


##### 框架

* LangChain
* LlamaIndex


##### 在什么情况下使用OpenLLMetry-JS？

当你在开发一个利用大型语言模型（如GPT-3等）提供的服务时，比如自然语言处理、语音识别或其他基于AI的功能，你希望对这些外部调用及其性能有更好的可观测性和控制。这包括跟踪API调用的性能、了解错误率、监控延迟和查看各种指标以优化用户体验。

使用OpenLLMetry-JS的好处在于，它提供了一种标准化的方式来跟踪这些调用，并且可以轻松地与现有的监控和可观测性工具链集成，无论是进行性能监控、故障分析还是优化资源使用，OpenLLMetry-JS都能提供所需的信息和洞察。