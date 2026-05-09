---
title: "Mevzuat MCP Mevzuat MCP"
date: "2024-01-01 00:00:00+08:00"
description: 'Mevzuat MCP  FastMCP '
slug: mevzuat-mcp-fastmcp-mevzuat.gov.tr-llm
tags:
- claude
- const
- gitalk
- clientsecret
- mevzuat.gov.tr
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## Mevzuat MCP

该项目是一个 FastMCP 服务器，旨在简化对土耳其司法部立法信息系统（mevzuat.gov.tr）的访问。它可以被 LLM（大型语言模型）应用程序（例如 Claude Desktop 或 5ire）和其他客户端用作工具，以执行以下主要功能：

1. **详细的法规搜索：** 允许根据各种过滤器搜索法规，例如法规名称/内容、法规编号、官方公报编号、法规类型和排序标准。
2. **列出条款树：** 以分层结构获取特定法规的内容表（章节、条款标题等）。
3. **获取条款内容：** 以处理过的和清理过的 Markdown 格式获取特定条款的全文内容。


总而言之，该项目提供了一个标准的 MCP 接口，用于以编程方式访问司法部立法信息系统，并将其转换为 LLM 更容易处理的 Markdown 格式，从而简化与各种 LLM 客户端的集成。