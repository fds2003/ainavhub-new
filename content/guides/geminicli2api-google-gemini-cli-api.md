---
title: "GeminiCli2API"
date: "2024-01-01 00:00:00+08:00"
description: GeminiCli2API GeminiCli2API Google Gemini CLI
slug: geminicli2api-google-gemini-cli-api
tags:
- gemini-core.js
- cloud
- openai-api-server.js
- http
- nextchat
draft: false
related_tools:
- cloudflare agents
- cloudflare rag
- pi
- codemcp
- code runner mcp server
---

## GeminiCli2API

GeminiCli2API项目是一个旨在将Google Gemini CLI封装为本地API服务的强大代理，其核心功能在于通过独立的Node.js HTTP服务器（`gemini-api-server.js`）提供对Google Cloud Code Assist API的原生代理，并实现全面的日志监控以增强可控性。该项目最关键的特性是其`openai-api-server.js`组件，它构建在原生代理之上，对外暴露了一个与OpenAI API完全兼容的接口，使得用户能够利用现有的OpenAI客户端（如LobeChat、NextChat等）无缝接入并使用Gemini模型，从而有效地突破了Gemini官方免费API的配额限制，并支持更高的请求量。项目还提供自动化的Google账户认证与令牌续期、灵活的API密钥验证、请求格式的自动转换以及对OpenAI流式传输的完整支持。其清晰的模块化代码结构（通过`gemini-core.js`共享核心逻辑）也极大地便利了二次开发，允许用户轻松实现统一系统提示、响应缓存或自定义内容过滤等高级功能，尽管目前仍有部分原生CLI功能和多模态能力尚待实现。