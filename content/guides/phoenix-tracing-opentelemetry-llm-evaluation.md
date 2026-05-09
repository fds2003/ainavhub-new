---
title: "Phoenix"
date: "2024-01-01 00:00:00+08:00"
description: Phoenix Phoenix AI ，、。： (Tracing)： OpenTelemetry LLM 。 (Evaluation)：
  LLM ，...
slug: phoenix-tracing-opentelemetry-llm-evaluation
tags:
- tracing
- bedrock
- langchain
- dspy
- notebook
draft: false
related_tools:
- aci
- bedrock enginner
- langchain-searxng
- langchain swift
- langchain
---

## Phoenix

Phoenix 是一个开源的 AI 可观察性平台，旨在为实验、评估和故障排除提供支持。它的核心功能包括：

* **追踪 (Tracing)** ：使用基于 OpenTelemetry 的工具对 LLM 应用程序的运行时进行追踪。
* **评估 (Evaluation)** ：利用 LLM 对应用程序的性能进行基准测试，包括响应和检索评估。
* **数据集 (Datasets)** ：创建可版本化的示例数据集，用于实验、评估和微调。
* **实验 (Experiments)** ：跟踪和评估对提示、LLM 和检索的更改。


Phoenix 具有供应商和语言无关性，开箱即用支持流行框架（如 LlamaIndex、LangChain、Haystack、DSPy）和 LLM 提供商（如 OpenAI、Bedrock 等）。它可以在 Jupyter Notebook、本地计算机、容器化部署或云环境中运行。

##### 使用场景

1. **模型性能监控** ：开发者可以实时追踪和监控其 LLM 应用的性能，确保其在实际环境中的表现符合预期。
2. **实验管理** ：在机器学习开发中，团队可以管理不同版本的模型和数据集，快速评估不同提示或模型参数的影响。
3. **问题排查** ：在应用出现性能问题时，Phoenix 可以帮助开发者快速定位问题所在，以便于及时修复。
4. **自动化评估** ：通过自动数据集管理和模型评估，减少人工干预，提高实验效率。


通过以上功能和使用场景，Phoenix 为 AI 开发者提供了强有力的支持，提升了机器学习模型从开发到部署的整个生命周期的可见性和可管理性。