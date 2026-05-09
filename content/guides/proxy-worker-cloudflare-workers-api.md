---
title: "AI Proxy Worker AI Proxy Worker AI Proxy Worker"
date: "2024-01-01 00:00:00+08:00"
description: 'AI Proxy Worker AI Proxy Worker  Cloudflare Workers '
slug: proxy-worker-cloudflare-workers-api
tags:
- const
- clientsecret
- claude
- ddefeac06598c65895743c01b9c180691d84c
- workers
draft: false
related_tools:
- graph-constrained reasoning
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
---

## AI Proxy Worker

AI Proxy Worker 是一个基于 Cloudflare Workers 的企业级 AI API 安全代理服务，其核心功能在于为前端应用程序提供一个安全调用各种 AI 服务（目前已支持 DeepSeek，并计划扩展到 OpenAI、Claude、Gemini 等）的途径，避免直接暴露 API 密钥。该项目主要特点包括：API 密钥只存储在服务端，确保了高安全性；利用 Cloudflare 全球边缘网络实现毫秒级的极速响应；全面支持 SSE 流式传输，提供实时的对话体验；架构设计具备良好的扩展性，可轻松集成更多 AI 模型；同时，它也达到了生产级就绪标准，拥有完善的错误处理和安全防护机制，并且个人用户可以借助 Cloudflare Workers 的免费额度零成本部署使用。