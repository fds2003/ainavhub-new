---
title: "LiteLLM"
date: "2024-01-01 00:00:00+08:00"
description: LiteLLM LiteLLM（LLM）API。、，。LiteLLM，AzureOpenAI。，。 Li...
slug: litellm-llm-api-azure-openai
tags:
- const
- gitalk
- clientsecr
- clientid
- openai
draft: false
related_tools:
- graph-constrained reasoning
- openai agents sdk
- claude code but with openai models
- openai.fm
- openai codex cli
---

#### LiteLLM

LiteLLM是一个管理不同大型语言模型（LLM）API的工具。它可以将输入转化为各个提供商的完成、嵌入和图像生成终端，并提供一致的输出。LiteLLM还支持在多个部署之间进行重试和回退逻辑，例如Azure和OpenAI。它还可以支持流式传输模型响应，并提供日志观测功能。

我会在以下情况下使用LiteLLM：

* 当我需要使用不同的LLM提供商的API时，我可以使用LiteLLM来管理它们，而无需分别调用每个API。

* 当我需要将输入转化为完成、嵌入和图像生成等终端时，我可以使用LiteLLM来简化这个过程。

* 当我需要在多个部署之间进行重试和回退逻辑时，我可以使用LiteLLM来确保请求的成功执行。

* 当我需要通过流式传输获取模型响应时，我可以使用LiteLLM来支持这个功能。

* 当我需要在日志中观测和记录数据时，我可以使用LiteLLM来轻松实现。 总之，LiteLLM是一个提供便利和管理大型语言模型API的工具，适用于多种使用情况。