---
title: "Gemini CLI to API Proxy Gemini CLI to API Proxy"
date: "2024-01-01 00:00:00+08:00"
description: Gemini CLI to API Proxy  Gemini CLI to API Proxy
slug: gemini-cli-api-proxy-google
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

## Gemini CLI to API Proxy

“Gemini CLI to API Proxy”是一个代理服务器，其核心功能是将Google Gemini命令行接口的认证和其内部API格式转换为标准的Gemini API格式，从而允许任何OpenAI兼容的客户端无缝使用Gemini模型。该项目的主要特点包括通过OAuth 2.0自动处理Google Cloud认证并缓存凭据，自动检测并缓存Google Cloud项目ID，支持流式和非流式请求，并提供多种认证方式（如API密钥、Bearer令牌和HTTP基本认证），同时默认将内容安全设置配置为`BLOCK_NONE`以提供最大内容生成灵活性，所有操作均安全地在本地主机上运行。