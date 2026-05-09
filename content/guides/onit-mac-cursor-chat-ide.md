---
title: "Onit Onit"
date: "2024-01-01 00:00:00+08:00"
description: Onit Onit ，。 Onit ？ Onit AI ， Mac 。 Cursor Chat，， IDE。 ： ** -&gt; Onit：**...
slug: onit-mac-cursor-chat-ide
tags:
- mac
- ide
- cursor
- gt
- onit
draft: false
related_tools:
- qwen mac menu bar
- codemachine cli
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
---

## Onit

这是对 Onit 的总结性介绍，以及它的使用场景。

**Onit 是什么？**

Onit 是一个 AI 聊天侧边栏，可以停靠在你的 Mac 上的任何应用程序中。它类似于 Cursor Chat，但适用于你电脑上的 _所有其他_ 应用程序，而不仅仅是 IDE。

**主要功能：**

* **高亮文本 -> 打开 Onit：**选择的文本会自动在 Onit 中打开。
* **将任何窗口作为上下文加载：** 无需复制粘贴，Onit 可以自动读取停靠的窗口作为上下文。
* **切换模型，不切换工作流程：** 选择最适合的模型。
* **本地模式：** 一键切换到本地模式，将一切都保留在你的机器上。
* **可定制的快捷键：** 可以自定义启动聊天窗口的热键，默认是`Command+0`。


**使用场景：**

Onit 可以用于任何需要 AI 辅助的场景，例如：

* **编程：** 代码解释、重构、生成等。
* **写作：** 文本润色、翻译、总结等。
* **研究：** 信息检索、分析、生成等。
* **学习：** 问题解答、概念解释等。
* **任何其他需要 AI 辅助的任务。** 重点在于它可以集成到任何 Mac 应用程序中，提供随处可用的 AI 助手。


**技术细节：**

* **本地模式设置：** 需要先安装 Ollama，Onit 将通过 Ollama 的 API 自动检测本地模型。
* **支持的模型：**
* **远程：**Anthropic (Claude), OpenAI (GPT-4.5, o3), GoogleAI (Gemini 2.5), Perplexity (Sonar, Sonar Deep Research), Deepseek (R1), xAI (Grok), 以及自定义提供商 (OpenRouter, Groq, 等)。
* **本地：** 任何 Ollama 支持的模型。


**数据和隐私：**

* V1 版本没有服务器组件。
* 本地请求在本地处理。
* 远程请求直接发送到模型提供商的 API。
* 自动上下文只有在点击“提交”按钮后才会上传。
* 只收集崩溃报告（通过 Firebase）和非个人分析（通过 PostHog）。


**未来发展：**

* 自动上下文
* 更多模型提供商
* 本地类型提示
* 本地 RAG
* 计算机使用和代理
* 更多平台支持 (Linux/Windows)
* 捆绑 Ollama 集成


**核心理念：**

* **通用访问：** AI 助手应该可以从电脑的任何位置访问。
* **提供商自由：** 用户应该可以在不同模型和提供商之间选择。
* **本地优先：** 在本地处理数据。
* **可定制性：** 可以根据个人喜好配置 Onit。
* **可扩展性：** 社区可以构建和分享扩展。


**授权协议和盈利模式：**

* Onit V1 根据 Creative Commons Non-Commercial 许可发布。
* V1 完全免费。未来版本可能会包含付费高级功能，但本地聊天将始终保持免费，且源代码将保持开放以供自定义。