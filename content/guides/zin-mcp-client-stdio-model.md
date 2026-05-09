---
title: "ZIN MCP Client ZIN MCP Client ZIN MCP Client"
date: "2024-01-01 00:00:00+08:00"
description: 'ZIN MCP Client ZIN MCP Client  STDIO '
slug: zin-mcp-client-stdio-model
tags:
- clientsecret
- langchain
- const
- client
- model
draft: false
related_tools:
- langchain-searxng
- langchain swift
- langchain
- graph-constrained reasoning
- xiaozhi client
---

## ZIN MCP Client

ZIN MCP Client 是一个轻量级、快速、简单的命令行客户端，用于与基于 STDIO 的 MCP (Model Context Protocol) 服务器进行交互，并桥接本地运行的 LLM (通过 Ollama) 和 MCP 服务器。它主要功能包括：

* **多服务器支持：** 同时连接到多个 MCP 服务器。
* **本地 LLM 集成：** 通过 Ollama 使用本地 LLM，以保障隐私和控制。
* **交互式 CLI：** 提供清晰、直观、格式丰富的命令行界面。
* **完整日志记录：** 提供详细的日志，方便调试和故障排除。
* **ReAct 代理框架：** 利用 LangChain 的 ReAct 代理模式智能地调用工具。
* **跨平台支持：** 支持多种操作系统平台。


该项目主要为 Zin MCP 套件的服务器开发，但也理论上支持其他基于 STDIO 的 MCP 服务器。