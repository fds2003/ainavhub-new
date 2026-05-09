---
title: "MCPJungle"
date: "2024-01-01 00:00:00+08:00"
description: 'MCPJungle MCPJungle Model Context Protocol (MCP) '
slug: mcpjungle-model-context-protocol-mcp
tags:
- id
- clientsecret
- clientid
- http
- ba3af7dcb9cbfcf08
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## MCPJungle

MCPJungle是一个自托管的Model Context Protocol (MCP) 网关，作为组织内所有MCP服务器及其工具的统一注册中心和单一入口，旨在简化AI代理对工具的发现和使用。它允许开发者集中管理多种MCP服务器（支持Streamable HTTP和STDIO传输协议），并通过创建工具组精确控制向不同AI客户端暴露的工具集合，有效提升客户端性能和安全性。此外，MCPJungle在生产模式下提供企业级功能，包括严格的访问控制机制来管理AI客户端对MCP服务器的权限，以及通过OpenTelemetry实现可观测性，从而确保AI代理工具交互的安全性、隐私性和可管理性。