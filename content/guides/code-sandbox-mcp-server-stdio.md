---
title: "Code Sandbox MCP Server Code Sandbox MCP Server Code Sandbox MCP Server"
date: "2024-01-01 00:00:00+08:00"
description: Code Sandbox MCP Server Code Sandbox MCP Server STDIO
slug: code-sandbox-mcp-server-stdio
tags:
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- server
- const
draft: false
related_tools:
- firecrawl mcp server
- whatsapp mcp server
- android mcp server
- playwright mcp server
- mtranserver
---

## Code Sandbox MCP Server

Code Sandbox MCP Server是一个轻量级的、基于标准输入输出（STDIO）的模型上下文协议（MCP）服务器，其核心功能是为AI助手和大型语言模型（LLM）应用提供一个安全且隔离的环境，以便在容器化沙箱中执行Python和JavaScript代码片段。它通过启动独立的容器会话，将用户代码写入临时文件并复制到容器中执行，然后捕获并返回执行结果和错误流，确保每次执行后容器被停止并移除，从而实现安全隔离和资源的有效管理。该项目还支持高度定制化，允许用户通过环境变量传递秘密信息或自定义容器镜像，并且可以无缝集成到如Gemini SDK和Gemini CLI等MCP客户端中，作为可信赖的代码执行工具，有效解决LLM在代码执行方面的安全性与隔离性挑战。