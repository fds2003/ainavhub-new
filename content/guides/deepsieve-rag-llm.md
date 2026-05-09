---
title: "DeepSieve"
date: "2024-01-01 00:00:00+08:00"
description: DeepSieve DeepSieve RAG
slug: deepsieve-rag-llm
tags:
- id
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- location.pathname
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## DeepSieve

DeepSieve是一个创新的检索增强生成（RAG）框架，它将大型语言模型（LLM）作为知识路由器，专为处理结构异构知识、需要多步推理的复合查询以及注重隐私的数据源而设计。其核心功能围绕一个“信息筛选”流程展开：首先将复杂查询分解为独立的子问题，随后智能地将每个子问题路由至最匹配的工具与知识库，并通过反射机制重试失败的检索，最终将所有分步答案融合形成最终响应。该框架提供了灵活的模块化设计，支持查询分解、基于子问题的路由和反射功能，并可选择“朴素”或“图”两种RAG后端模式。