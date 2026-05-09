---
title: "Structured Outputs in the API Structured Outputs in the API openai"
date: "2024-01-01 00:00:00+08:00"
description: Structured Outputs in the API openai API
slug: structured-outputs-api-openai-json
tags:
- structured
- tokens
- gpt-4o-mini-2024-07-18
- const
- gitalk
draft: false
related_tools:
- structured outputs sample apps
- structured outputs in the api
- gpt-4o
- graph-constrained reasoning
- awesome gpt-4o images
---

## Structured Outputs in the API

openai正在API中引入了Structured Outputs。这是一项新功能，旨在确保模型生成的输出能够准确匹配由开发人员提供的JSON模式。这对于以API构建可靠应用程序的开发人员来说是一个重要的里程碑，因为此功能将提高模型的可靠性。Structured Outputs 可以通过函数调用或在响应格式中使用 JSON Schema。

除了可以通过函数调用 Structured Outputs，还可以通过响应格式参数中的 JSON Schema 使用。这对于最新发布的 GPT-4o 型号适用，包括 gpt-4o-2024-08-06 和 gpt-4o-mini-2024-07-18。开发人员在使用此功能时需要注意以下几点限制和限制条件，包括只允许使用一部分JSON模式，对新模式的第一次请求可能会产生额外延迟，以及模型拒绝请求或在生成一定数量的 tokens 后结束可能会导致模型无法按模式执行。Structured Outputs 在 API 中已经发布，并且支持函数调用和响应格式两种使用方式。