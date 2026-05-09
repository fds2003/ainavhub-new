---
title: "Azure OpenAI GPT-4o Audio Azure OpenAI GPT-4o Audio Azure OpenAI GPT-4o Audio"
date: "2024-01-01 00:00:00+08:00"
description: 'Azure OpenAI GPT-4o Audio Azure OpenAI GPT-4o Audio  realtime API '
slug: azure-openai-gpt-4o-audio-realtime
tags:
- gpt-4o
- rea
- api
- realtime
- azure
draft: false
related_tools:
- awesome gpt-4o images
- sharegpt-4o-image
- gpt-4o ghibli at home
- 7 chatgpt-4o prompts
- gpt-4o
---

## Azure OpenAI GPT-4o Audio

Azure OpenAI GPT-4o Audio 是基于新推出的 `/realtime` API 端点的一个公共预览功能，旨在实现低延迟的“语音输入，语音输出”对话交互。此功能主要用于支持代理、助手和翻译等需要高度响应的场景。它支持文本消息、工具调用等多种现有能力，并且可以通过 WebSocket API 实现完全异步的流式通信。

##### 功能概述

* **低延迟对话** ：支持实时语音交互，确保快速响应用户。
* **多种输入形式** ：可以接收文本、音频及命令等多重输入形式。
* **异步交互** ：通过 WebSocket 实现异步通信，适合需要实时反馈的应用场景。


##### 使用场景

* **客户支持** ：可用于客户支持代理实时解答用户问题。
* **语音助手** ：可作为智能助手与用户进行对话，提供信息或执行操作。
* **翻译服务** ：实时翻译语音内容，适合语言交流需求。
* **多模态交互应用** ：支持文本、音频等不同形式的数据处理，适用于复杂的交互应用。


##### 开始使用

* 创建 Azure OpenAI 资源，配置所需模型，并通过提供示例来体验 `/realtime` 功能。


##### 连接与认证

通过安全的 WebSocket 协议连接到 `/realtime` 端点，并使用 Microsoft Entra 或 API 密钥进行身份验证。

##### API 交互

与 `/realtime` 的交互主要通过发送和接收 JSON 命令来实现，允许同时处理多个请求和响应，确保应用的高效性和响应速度。

总结来说，Azure OpenAI GPT-4o Audio 的实时对话能力为各种需要快速响应的应用场景提供了强大的支持，尤其适合实时交流和交互式服务。