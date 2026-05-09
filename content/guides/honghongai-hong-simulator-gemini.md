---
title: "HongHongAI"
date: "2024-01-01 00:00:00+08:00"
description: HongHongAI HongHongAI Hong Hong Simulator)
slug: honghongai-hong-simulator-gemini
tags:
- hong
- css
- tailwindcss
- serverless
- honghongai
draft: false
related_tools:
- honghongai - honghongai是一个基于google的gemini大模型、借鉴哄哄模拟器概念的开源免费版本，通过原始提示实现功能，技术栈包括next.js、vercel
  ai sdk、tailwindcss等，支持通过环境变量配置，鼓励社区贡献，并基于mit许可证开源。
- next.js ai chatbot x supabase
- vercel ai sdk 3.0
- ios simulator mcp server
- sitcom simulator
---

## HongHongAI

HongHongAI是一个由开源社区开发的，旨在模仿和改进原有的哄哄模拟器(Hong Hong Simulator)的工具。本质上，它是一个使用谷歌的Gemini语言模型来生成回复的聊天机器人。以下是对其主要功能、技术栈、使用场景以及如何参与贡献的通俗概述。

### 主要功能

* **免费使用** ：HongHongAI的一大亮点是用户可以免费使用，每分钟允许调用60次，这使得它对于个人用户和开发者来说更加亲民和可接近。
* **基于Gemini模型** ：它使用谷歌的Gemini模型作为底层语言模型。虽然Gemini模型目前没有经过训练和微调，但HongHongAI通过使用原始提示来生成回应。
* **开源** ：HongHongAI是一个开源项目，这意味着任何人都可以查看其代码、提出问题或改进并为其贡献。


##### 技术栈

* 使用**Next.js** 构建，这是一个流行的React框架，提供了灵活的路由、预渲染等功能。
* 集成**Vercel AI SDK** 以获取AI完成的任务。
* 使用**Vercel** 进行部署，是一个优秀的静态站点和Serverless函数的托管平台。
* 使用**TailwindCSS** 进行样式设计，这是一个实用的CSS框架，便于快速设计响应式布局。


##### 环境变量

环境变量用于控制网站的某些设置。例如，`GEMINI_API_KEY`是进行API调用所必需的，而`API_BASE_URL`则是在某些情况下用于指定自定义的Gemini API基础URL。

##### 使用场景

HongHongAI主要用于为需要生成文本回复的场合提供服务。例如，可以用于开发聊天机器人、自动回复系统，或者任何需要模拟人工智能对话的应用。其免费和开源的特性使它成为学习、实验或个人项目的不错选择。