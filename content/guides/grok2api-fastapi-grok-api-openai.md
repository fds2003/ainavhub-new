---
title: "Grok2API"
date: "2024-01-01 00:00:00+08:00"
description: Grok2API Grok2API FastAPI
slug: grok2api-fastapi-grok-api-openai
tags:
- id
- url
- clientsecret
- const
- ddefeac06598c65895743c01b9c180691d84c
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## Grok2API

Grok2API是一个基于FastAPI重构的Grok API接口项目，其核心功能在于提供与OpenAI官方接口完全兼容的AI服务，包括流式对话、通过自然语言提示进行图像生成与编辑、联网搜索、深度思考以及结合图像和文本的视频生成。该项目通过号池并发和自动负载均衡机制高效管理不同账户类型的Grok API调用配额，并支持在管理页面实时监控使用情况。为解决Grok图片和视频直链的403限制，项目实现了自动本地缓存功能，并强调了`Base Url`配置的重要性。同时，它处理了Grok的反机器人机制`x_statsig_id`，并提供了一个可配置的管理后台，用户可通过该界面灵活设置各项参数，如缓存大小、代理地址及API密钥等，且支持多种Grok模型，每种模型拥有不同的能力和调用成本，部署过程也通过Docker进行了简化。