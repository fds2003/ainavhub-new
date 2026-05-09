---
title: "AI Artifacts AI Artifacts AI Artifacts"
date: "2024-01-01 00:00:00+08:00"
description: 'AI Artifacts AI Artifacts  Anthropic '
slug: artifacts-anthropic-ui-claude-e2b
tags:
- vanilla
- javascri
- ts
- code
- jupyter
draft: false
related_tools:
- whatsapp mcp server
- openai agents sdk
- cloudflare agents
- mcp-server-chatsum
- orpheus tts
---

## AI Artifacts

AI Artifacts 是一个开源应用程序，模仿了 [Anthropic 的 Artifacts UI](<https://www.anthropic.com/news/claude-3-5-sonnet>) 和其 [Claude 聊天应用程序](<https://claude.ai/>) 的功能。这个应用程序使用了 [E2B](<https://e2b.dev/docs>) 提供的 [Code Interpreter SDK](<https://github.com/e2b-dev/code-interpreter>) 来进行 AI 代码的安全执行。E2B 提供了一个云沙盒环境，能够安全地运行 AI 生成的代码，并支持安装库、运行 shell 命令、运行 Python、JavaScript、R 和 Next.js 应用程序等。

## 功能

* 使用 [Anthropic Claude Sonnet 3.5](<https://www.anthropic.com/>) 模型进行 AI 代码生成
* 使用 [E2B](<https://e2b.dev>) 提供的 [Code Interpreter SDK](<https://github.com/e2b-dev/code-interpreter>) 进行安全的 AI 代码执行
* 使用 [Vercel AI SDK](<https://sdk.vercel.ai/docs/introduction>) 进行工具调用和模型的流响应
* 支持的 AI 生成代码：
* 支持在 Jupyter notebook 中运行 AI 生成的 Python 代码
* 支持 AI 生成的 Next.js 应用程序
* 未来支持：vanilla JS/TS 和 R
* 未来支持：流式 AI 生成代码


## 使用场景

1. **科研与教育** ：可以用于在 Jupyter notebook 中执行 AI 生成的 Python 代码，以进行数据分析和科研实验。
2. **Web 开发** ：支持生成和运行 Next.js 应用，这对于快速生成和测试 web 应用程序非常有用。
3. **软件开发** ：能够运行多种编程语言（如 JavaScript、Python、R 等）的代码，有助于不同领域的开发者进行项目开发和测试。
4. **安全环境测试** ：利用云沙盒环境，可以安全地安装库和运行可能未知和未验证的代码。


## 快速开始

1. **安装依赖**


npm i


2. **设置 API 密钥** 创建 `.env.local` 文件并设置以下内容：


E2B_API_KEY="your-e2b-api-key"
ANTHROPIC_API_KEY="your-anthropic-api-key"


3. **运行**


npm run dev


通过这些步骤，用户可以快速启动并使用 AI Artifacts，通过一个统一的界面生成和执行 AI 代码。