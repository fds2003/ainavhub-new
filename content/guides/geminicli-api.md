---
title: "GeminiCLI to API GeminiCLI to API"
date: "2024-01-01 00:00:00+08:00"
description: GeminiCLI to API  GeminiCLI to API
slug: geminicli-api
tags:
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- completions
- models
draft: false
related_tools:
- claude code but with openai models
- open driving world models
- granite code models
- generative models by stability ai - stability ai 通过其稳定性 ai 生成模型发布了多个基于深度学习的文本到图像和图像到视频的生成模型，包括sdxl-turbo等，以及提供相关的技术报告和开放获取的模型权重。
- robot utility models
---

## GeminiCLI to API

“GeminiCLI to API"项目旨在将Gemini命令行接口转换为OpenAI兼容的API，以解决Gemini API频繁中断和质量下降的问题。其核心功能在于提供标准的OpenAI API端点（`/v1/chat/completions`和`/v1/models`），支持实时流式响应和伪流式回退机制，并具备智能凭证管理能力，通过多个Google OAuth凭证实现自动轮换、冗余认证增强稳定性以及负载均衡与并发请求支持，同时还提供简化的Web认证界面。该项目支持具有1M上下文窗口和1500次请求额度的`gemini-2.5-pro`系列模型。**此工具仅供个人学习、研究和非商业用途** ，任何形式的商业使用均被严格禁止，使用者需自行承担由此产生的一切法律责任；在云服务器或其他远程环境部署时，需注意OAuth认证流程仅支持本地访问，因此需要先在本地完成认证并获取凭证文件再上传使用。