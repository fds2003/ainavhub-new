---
title: "LangChain.js MCP Adapters LangChain.js MCP Adapters LangChain.js MCP Adapters"
date: "2024-01-01 00:00:00+08:00"
description: 'LangChain.js MCP Adapters LangChain.js MCP Adapters  LangChain.js MCP
  Adapters '
slug: langchain.js-mcp-adapters-anthropic-model
tags:
- langchain
- model
- sse
- json
- stdio
draft: false
related_tools:
- langchain-searxng
- langchain swift
- langchain
- claude code but with openai models
- ai model comparison tool
---

## LangChain.js MCP Adapters

## LangChain.js MCP Adapters 总结

LangChain.js MCP Adapters 是一个轻量级的库，它使 Anthropic Model Context Protocol (MCP) 工具能够与 LangChain.js 和 LangGraph.js 兼容。 它的主要功能是：

* **连接到 MCP 服务器** ：支持通过 stdio（本地）或 SSE（服务器发送事件，远程）连接到 MCP 服务器。支持在 SSE 连接中设置自定义头部信息（例如用于身份验证）。
* **多服务器管理** ：可以同时连接到多个 MCP 服务器，并将它们提供的工具自动组织起来，可以按服务器名称分组访问，也可以作为一个扁平的集合访问。
* **与 LangChain/LangGraph 集成** ：可以与 LangChain.js 和 LangGraph.js 无缝集成，支持 OpenAI、Anthropic 和 Google 模型。
* **灵活配置** ：提供灵活的配置选项，包括 JSON 配置文件、环境变量替换等。
* **错误处理** ：提供强大的错误处理机制。


## 使用场景

LangChain.js MCP Adapters 主要用于以下场景：

1. **将外部工具集成到 LangChain/LangGraph 流程中** ：如果你的应用需要使用一些独立的工具，这些工具遵循 MCP 协议，那么可以使用该库将这些工具集成到 LangChain/LangGraph 流程中。
2. **构建基于多工具的智能代理** ：通过连接到多个提供不同类型工具的 MCP 服务器，可以构建功能强大的智能代理。例如，一个代理可以同时使用数学计算工具和天气查询工具。
3. **在不同的环境中部署和管理工具** ：MCP Adapters 支持通过 stdio 和 SSE 连接，使得工具可以部署在本地或远程服务器上，并可以通过简单的配置进行切换和管理。
4. **需要身份验证才能访问的工具** ：对于需要身份验证的 MCP 服务器，可以在 SSE 连接中设置自定义头部信息，例如 `Authorization` 和 `X-API-Key`。


总而言之，LangChain.js MCP Adapters 简化了 LangChain.js 和 LangGraph.js 应用集成 MCP 工具的过程，使其能够更容易地利用外部工具来增强应用的智能程度和功能范围。