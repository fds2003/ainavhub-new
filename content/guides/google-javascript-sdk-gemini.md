---
title: "Google AI JavaScript SDK Google AI JavaScript SDK Google AI JavaScript SDK"
date: "2024-01-01 00:00:00+08:00"
description: Google AI JavaScript SDK Google AI JavaScript SDK Gemini
slug: google-javascript-sdk-gemini
tags:
- npm
- base64
- prompt
- api
- web
draft: false
related_tools:
- awesome ai system prompts
- gpt-4.1 prompting guide
- yprompt
- promptenhancer
- prompthelper
---

## Google AI JavaScript SDK

Google AI JavaScript SDK是一个由谷歌提供的开发者工具包，它让开发者能够轻松地将谷歌尖端的生成式人工智能模型（例如Gemini）应用到建立AI功能和应用中。这个SDK包含了以下一些使用案例：

* 从仅文本输入生成文本
* 从文本和图片的输入（多模态）生成文本
* 构建多轮对话（聊天）
* 对于Node.js用户，支持嵌入式


你可以在基于Node.js的应用程序或者Web应用中使用这个JavaScript SDK。

例如，仅需几行代码，你就能利用Gemini的多模态能力从文本和图片输入中生成文本。

在Node.js中，通过读取图片文件、将其转换为base64编码，并传入一个文本提示（prompt），就可以调用模型生成相应的文本内容。在Web环境中，相似地，图片数据需要预先转换为Base64编码，并与提示文本一起传给模型。

如果想尝试这个SDK的功能，可以通过克隆提供的示例应用仓库，获取API密钥，并按照指导在Node.js环境或Web环境中运行示例应用。

安装使用方面，Node.js（或使用NPM的Web项目）可以通过运行`npm install @google/generative-ai`来安装。而对于Web应用，可以通过添加`import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai"`来引入。

详细的快速开始指南分别为Node.js和Web应用提供了如何添加你的API密钥、SDK到你的应用、初始化模型以及调用API访问模型的说明。它还描述了一些额外的使用案例和功能，例如流式传输、计数令牌和控制响应。对于Node.js，还可使用嵌入功能。

这个SDK可能会在以下情况下使用：

* 在需要自动生成文本内容（如文章、描述、对话等）的应用中。
* 在需要结合文本和图片输入来生成新的文本内容的多模态应用场景中。
* 在构建可以进行自然对话的聊天机器人或虚拟助手中。
* 执行特定于Node.js环境中的高级功能，如嵌入表示。


Google AI JavaScript SDK是一个功能强大、灵活性高的工具，非常适合开发者在各种交互式和创新型应用中集成先进的AI能力。