---
title: "Claude Customer Support Agent Claude Customer Support Agent Claude Customer"
date: "2024-01-01 00:00:00+08:00"
description: "Claude Customer Support Agent Claude Customer Support Agent Anthropic "
slug: "claude-customer-support-agent-anthropic"
draft: false
---

## Claude Customer Support Agent

Claude Customer Support Agent 是一个先进的、完全可定制的客户支持聊天界面，基于 Anthropic 的 Claude 模型，并利用 Amazon Bedrock 知识库进行知识检索。

##### 主要特点：

* **AI 驱动聊天** ：使用 Anthropic 的 Claude 模型进行对话。
* **知识检索** ：集成 Amazon Bedrock，以获取上下文知识。
* **实时思考与调试信息展示** 。
* **知识库来源可视化** 。
* **用户情绪检测及合适的代理重定向** 。
* **高度可定制的用户界面** ，采用 shadcn/ui 组件。


##### 快速入门：

1. **克隆此仓库** 。
2. **安装依赖项** ：运行 `npm install`。
3. **配置环境变量** （见配置部分）。
4. **运行开发服务器** ：运行 `npm run dev`，在浏览器中打开 `http://localhost:3000`。


##### 配置：

需要在项目根目录下创建 `.env.local` 文件，添加必要的 API 密钥和访问密钥。

##### AWS Bedrock 集成：

本项目利用 AWS Bedrock 实现增强型检索（RAG）。用户需创建知识库并在项目中配置相关知识库 ID。

##### 自定义：

支持多种 Claude 模型，可根据需要切换。界面组件和主题均可高度定制。

##### 部署：

可以通过 AWS Amplify 部署该应用，支持灵活的部署配置，以适应不同的需求。

请注意，该项目为原型版本，供开发和测试使用，可能存在错误或不一致，开发者对使用中可能出现的问题不承担责任。使用该原型的风险由用户自行承担。
