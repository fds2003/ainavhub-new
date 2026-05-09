---
title: "Adapter for ChatGPT Adapter for ChatGPT Adapter for ChatGPT"
date: "2024-01-01 00:00:00+08:00"
description: Adapter for ChatGPT Adapter for ChatGPT  AI
slug: adapter-chatgpt-bing-claude-2-gemini
tags:
- claude-2
- bing
- chatgpt
- proxies
- adapter
draft: false
related_tools:
- binglish
- linly-dubbing
- chatgpt conversation timeline extension
- chatgpt-plus
- seekout assist-seekout assist 使用 chatgpt 助力招聘者提高招聘效率。
---

## Adapter for ChatGPT

**Adapter for ChatGPT** 是一个将多种免费的AI服务整合在一起的接口服务。它支持通过统一的接口规范调用包括Bing、Claude-2、Gemini等在内的多个AI模型。此外，该Adapter也加入了实验性的toolCall能力，尝试让没有toolCall能力的AI也能执行任务。

##### 使用场景

Adapter for ChatGPT适用于需要集成和调用多个AI模型的一些场景，例如：

1. **跨平台的AI应用开发** ：开发人员可以使用该Adapter轻松调用不同的AI模型，以选择最佳的模型来完成任务。
2. **实验和研究** ：研究人员可以方便地比较各个AI模型的性能和效果。
3. **多功能对话系统** ：通过集成多种AI模型，可以构建具有多样化功能的智能对话系统。
4. **绘图和生成服务** ：通过集成的免费画图接口，可以实现图像生成功能。


##### 使用指南

1. **运行服务**

./linux-server --port 8080 --proxies socks5://127.0.0.1:7890


2. **查看模型列表**

GET http://127.0.0.1:8080/v1/models


3. **发送对话请求**

curl -i -X POST \
-H "Content-Type:application/json" \
-H "Authorization: YOUR_AUTH_TOKEN" \
-d '{"stream": true, "model": "coze", "messages": [{"role": "user", "content": "hi"}]}' \
'http://127.0.0.1:8080/v1/chat/completions'


4. **生成图像**

curl -i -X POST \
-H "Content-Type:application/json" \
-H "Authorization: YOUR_AUTH_TOKEN" \
-d '{"prompt":"一个二次元少女", "style":"", "model":"dall-e-3", "n":1}' \
'http://127.0.0.1:8080/v1/chat/generations'


##### 获取Authorization

每个模型需要不同的Authorization参数，可通过以下步骤获取：

* **Claude** : 在 `claude.ai` 网站登录后，从浏览器 `cookies` 中获取 `sessionKey`。
* **Bing** : 在 `www.bing.com` 网站登录后，从浏览器 `cookies` 中获取 `_U`。
* **Gemini** : 在 `ai.google.dev` 获取 token。
* **Coze** : 在 `www.coze.com` 登录后，复制浏览器 `cookies` 中完整的 `cookie`。


通过这些便捷的接口，用户可以将多个AI服务集成到一个统一的平台，方便管理和调用。