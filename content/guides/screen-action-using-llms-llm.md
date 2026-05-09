---
title: "Screen to action using LLMs Screen to action using LLMs Screen to action using"
date: "2024-01-01 00:00:00+08:00"
description: "Screen to action using LLMs Screen to action using LLMs ( Screen to action"
slug: "screen-action-using-llms-llm"
draft: false
---

## Screen to action using LLMs

##### Screen to action using LLMs (大语言模型进行屏幕到动作转换)

**概述：** “Screen to action using LLMs” 是一个通过大语言模型（LLM）将屏幕内容转换为具体动作的创新项目。此项目受`adept.ai`、`rewind.ai`和`Apple Shortcut`等灵感启发，使用Rust和WASM技术构建。

**核心功能：** 该项目的核心功能是通过录制屏幕内容并利用OCR技术进行文本提取，将这些文本信息通过LLM进行处理，从而执行特定的操作。例如，从屏幕内容中提取销售对话记录并自动填充到CRM（客户关系管理系统）中。

**使用场景：**

1. **自动CRM填充** ：录制销售人员的屏幕内容，提取销售对话记录，并自动填充到CRM系统中，提升工作效率。
2. **自动摘要生成** ：对屏幕内容进行实时文本提取，并通过LLM生成相应的摘要，方便回顾和整理信息。
3. **自动动作触发** ：基于屏幕内容进行特定关键词或图像的识别，触发自动化操作（例如，每次看到狗的图片时自动发送推文）。
4. **记忆扩展应用** ：利用LLM对记录的屏幕内容进行分析和处理，扩展个人记忆能力。


**项目状态：** 目前项目处于Alpha阶段，已经实现如下功能：

* 屏幕截图
* mp4编码存储（30 GB / 月）
* 本地SQLite数据库
* OCR（光学字符识别）


计划实现的功能包括：

* 音频录制与语音转文字
* 云端存储选项（如S3，PostgreSQL等）
* 云计算选项


**使用方法：** 当前版本可以通过安装ffmpeg工具、克隆项目代码库并运行API进行尝试，该API能够抓取屏幕内容并提取其中的文本信息。

**为何开源？** 该项目旨在通过开源的方式，让更多开发者可以利用AI的最新突破进行个性化开发，加快技术应用和进化的步伐。

如果你对这个项目感兴趣，可以通过public Discord channel进行交流，欢迎提出贡献和改进建议。

**许可：** 该项目代码基于MIT许可证开源发布，详细信息请参看LICENSE文件。
