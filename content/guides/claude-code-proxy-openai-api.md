---
title: "Claude Code Proxy Claude Code Proxy Claude Code Proxy"
date: "2024-01-01 00:00:00+08:00"
description: Claude Code Proxy Claude Code Proxy Claude Code
slug: claude-code-proxy-openai-api
tags:
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- azure
- const
draft: false
related_tools:
- azure devops mcp server
- graph-constrained reasoning
- gemini cli to api proxy
- claude code proxy
- ai proxy worker
---

## Claude Code Proxy

Claude Code Proxy是一个至关重要的代理服务器，其核心功能是实现Claude Code命令行工具与任何OpenAI兼容的API提供商的无缝对接。该项目通过实时转换Claude API请求（尤其是`/v1/messages`接口）为OpenAI API调用来达成这一目标，从而使用户能够灵活利用包括OpenAI、Azure OpenAI、本地Ollama模型以及其他通用OpenAI兼容服务。其关键特性包括智能模型映射，可根据Claude模型的类型（如“haiku”、“sonnet”或“opus”）自动路由到用户配置的“大模型”或“小模型”；此外，它还提供了全面的函数调用（工具使用）支持、实时流式响应能力以及对Base64编码图像输入的处理，所有这些都通过简洁的环境变量配置，确保了高度的灵活性和便捷的集成体验。