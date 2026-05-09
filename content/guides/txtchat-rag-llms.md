---
title: "txtchat"
date: "2024-01-01 00:00:00+08:00"
description: 'txtchat txtchat  txtchat '
slug: txtchat-rag-llms
tags:
- python
- yaml
- rag
- llms
- llm
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## txtchat

**txtchat 简介**

txtchat 是一个利用检索增强生成（RAG）和大语言模型（LLMs）构建的搜索应用程序。它不仅能够返回搜索结果，还能通过提取、总结、翻译和转换内容来提供答案。txtchat 通过集成智能代理，与消息平台进行互动。这些代理与自动化账户相关联，能够使用 AI 驱动响应来回答消息。工作流程可以使用大型或小型语言模型，又或者是两者的结合。

**主要功能和特点**

* 安装简单，可以通过 pip 直接安装。
* 支持多个消息平台，目前只支持 Rocket.Chat。
* 代理和工作流程的结合，形成独特的“人格（Persona）”响应类型。
* 可以使用 Python 创建和加载个性化的工作流程，然后保存为 YAML 文件。


**使用场景**

1. **与维基百科聊天：** 使用 Wikipedia 嵌入索引和 LLM 提示来回答问题。
2. **文本总结：** 从输入的网址读取内容并生成摘要。
3. **文本翻译：** 翻译输入的文本为法语。
4. **领域知识问答：** 定制工作流程，将数据连接到特定领域（例如 Hacker News）以生成针对性的回答，同时提供数据来源参考。


想要进一步了解和使用 txtchat，可以创建和运行自定义的 txtai 工作流程，并将其应用到不同的消息平台上，达到丰富交流和信息获取的功能。