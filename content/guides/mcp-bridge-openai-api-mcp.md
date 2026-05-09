---
title: "MCP-Bridge"
date: "2024-01-01 00:00:00+08:00"
description: 'MCP-Bridge MCP-Bridge  OpenAI API '
slug: mcp-bridge-openai-api-mcp
tags:
- mcp-bridge
- sse
- api
- mcp
- web
draft: false
related_tools:
- grok2api
- gemini cli to api proxy
- geminicli2api
- geminicli to api
- kokoro-fastapi
---

## MCP-Bridge

MCP-Bridge 是一个用于将 OpenAI API 与 MCP 工具连接起来的桥接器，使得开发者可以通过 OpenAI API 接口使用 MCP 工具。它为与 MCP 工具的交互提供了一组端点，允许开发者在不需要显式支持 MCP 的情况下，使用任意客户端对接任意 MCP 工具。

##### 主要功能

* 支持与 MCP 的非流式聊天补全和流式聊天补全。
* 支持无 MCP 工具的非流式补全。
* 提供一组 MCP 工具的接口。
* 为外部客户端提供 SSE 桥接功能。


##### 使用场景

MCP-Bridge 适合用于需要集成 OpenAI API 和 MCP 工具的各种应用场景，例如：

* 开发聊天机器人，可以利用 OpenAI 的强大自然语言处理能力，并同时调用 MCP 提供的特定工具。
* 在 Web 界面或其他应用中集成和使用 MCP 工具，而不需要单独开发对这些工具的支持。
* 为使用 MCP 工具的开发者提供一个简单、统一的接口，以便快速构建和测试应用。


##### 安装和使用

MCP-Bridge 推荐使用 Docker 安装，同时也支持手动安装。安装完成后，用户可以通过 OpenAI API 进行交互，配置和管理 MCP 工具，并利用文档提供的端点进行调试和测试。

总之，MCP-Bridge 是一个非常实用的工具，能够帮助开发者高效地将 OpenAI API 与 MCP 工具整合，拓展应用场景的多样性。