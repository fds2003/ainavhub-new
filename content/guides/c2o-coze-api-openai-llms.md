---
title: "C2O"
date: "2024-01-01 00:00:00+08:00"
description: C2O C2OCoze APIOpenAI API，OpenAICoze（LLMs）、、。，C2OCozeOpenAI。 C2O： Coze
  APIOpenAI...
slug: c2o-coze-api-openai-llms
tags:
- id
- c2o
- streaming
- llms
- api
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## C2O

C2O是一个将Coze API转换为OpenAI API格式的项目，这样你就可以在你喜欢的OpenAI客户端中使用[Coze](<https://www.coze.com>)的语言模型（LLMs）、知识库、插件和工作流程。简而言之，C2O使得Coze的功能能够被OpenAI的客户端所接入和使用。

##### C2O的主要功能包括：

* 将Coze API转换为OpenAI API格式，让开发者可以在OpenAI客户端中直接调用Coze的能力。
* 支持流式（streaming）和阻塞（blocking）两种调用方式。
* 支持Coze上的聊天机器人API。


##### 使用C2O的情况：

1. **开发者或企业已经在使用OpenAI的客户端** ，但想要访问Coze提供的特定语言模型、知识库、插件或工作流程。
2. **想要通过一个统一的接口** 来设计和部署基于Coze和OpenAI能力的应用程序，而无需单独处理两个不同的API调用方式。
3. **需要在现有的OpenAI应用中集成更高级的功能** ，比如Coze提供的某些特定行业解决方案，或者是需要优化的聊天体验。


##### 实际部署和使用C2O：

要使用C2O，首先需要在Coze官网注册并获取API密钥，然后创建并发布你的机器人到API中。获取到机器人ID后，通过环境变量进行配置，以便C2O能够调用你的Coze机器人。

C2O支持多种部署方式，包括但不限于Zeabur、Vercel、Railway或本地部署。这样，开发者可以根据自己的喜好和需求，选择最适合的部署方式。

在代码层面，你可以很容易地通过发送HTTP请求来使用C2O提供的转换API。这样，就可以在你的OpenAI客户端中实现和Coze交互的功能，无论是发送文本消息，还是处理来自Coze的响应。

在你想要将Coze的强大功能和OpenAI客户端结合起来时，C2O是一个非常实用的工具。通过简化接口的使用，它让开发者可以更加专注于创造有趣和高效的用户体验。