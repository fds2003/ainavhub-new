---
title: "Create LlamaIndex App Create LlamaIndex App Create LlamaIndex App Create LlamaIn"
date: "2024-01-01 00:00:00+08:00"
description: Create LlamaIndex App Create LlamaIndex App Create LlamaIndex App  CLI
slug: create-llamaindex-app-cli-npx
tags:
- latest
- http
- llamaindex.ts
- llamaindex
- app
draft: false
related_tools:
- index
- ama
- building agentic rag with llamaindex
- whatsapp mcp server
- computer using agent sample app
---

## Create LlamaIndex App

# Create LlamaIndex App

`Create LlamaIndex App` 是一个命令行工具（CLI），让你可以快速开始构建新的 LlamaIndex 应用程序，并且提供了所有必要的设置。你只需运行以下命令：


npx create-llama@latest


生成应用后，运行


npm run dev


即可启动开发服务器。然后访问 <http://localhost:3000> 查看你的应用。

## 你将得到什么

* 一个由 Next.js 驱动的前端，使用了 [shadcn/ui](<https://ui.shadcn.com/>) 组件。应用设置为一个聊天界面，可以回答关于你数据的问题。
* 你可以选择以下三种后端：
* **Next.js** : 生成一个全栈的 Next.js 应用，能轻松部署到 Vercel 等主机。这使用了 LlamaIndex.TS (TypeScript库)。
* **Express** : 如果你想要传统的 Node.js 应用，可以选择这项，仍然使用 LlamaIndex.TS。
* **Python FastAPI** : 生成一个由 llama-index Python 包驱动的后端，能部署到 Render 或 fly.io。
* 后端有两个端点（一个是流式，另一个是非流式），允许你发送聊天状态并接收额外响应。
* 你可以添加任意数据源，如本地文件、网站或从数据库检索的数据。
* 可以通过添加工具（由 LLM 调用的函数）将聊天变成 AI 代理。
* 默认使用 OpenAI，所以你需要一个 OpenAI API 密钥，或者可以自定义使用其他支持的大量 LLM。


## 使用你的数据

你可以提供自己的数据，应用会索引它并回答相关问题。生成的应用会有一个叫 `data` 的文件夹（Express 或 Python 后端生成的前端则在 `./backend/data`）。

将支持的文件放入此目录。Next.js 和 Express 应用使用 LlamaIndex.TS，可以处理 PDF、文本、CSV、Markdown、Word 和 HTML 文件。Python 后端可以处理更多类型，包括视频和音频文件。

## 使用场景

1. **知识问答系统** ：为公司资料或文档建立一个内部知识问答系统，员工可以用来快速查询信息。
2. **智能客服** ：构建一个支持多种数据源的智能客服系统，能够从产品手册、用户手册等多种数据源中找出答案。
3. **教育辅导工具** ：为教育机构开发一个智能辅导工具，可以根据教材回答学生的问题。
4. **内部数据解析工具** ：为企业内部员工提供一个搜索工具，能够解析公司内部的各种文档和数据文件。
5. **客户支持系统** ：为各类在线服务平台提供一个客户支持系统，能够实时分析和回应客户提出的问题。


`Create LlamaIndex App` 提供了一个快速搭建复杂应用的基础框架，并支持灵活的自定义和扩展，适合各种需要数据处理和问答功能的应用场景。