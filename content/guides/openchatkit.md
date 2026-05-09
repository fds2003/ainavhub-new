---
title: "OpenChatKit"
date: "2024-01-01 00:00:00+08:00"
description: OpenChatKit  OpenChatKit
slug: openchatkit
tags:
- gpt-neoxt-chat-base-20b
- openchatkit
- laion
- docs
- pythia-chat-base-7b
draft: false
related_tools:
- neo
- openchat
- docs
- autodocs
- docstrange
---

#### 产品介绍

![Image](/images/screenshots/OpenChatKit.jpg)

#### [OpenChatKit](<https://github.com/togethercomputer/OpenChatKit>)

为各种应用程序创建专用和通用聊天机器人

#### 特性

`OpenChatKit`提供了一个强大的开源基础，可以为各种应用程序创建专用和通用聊天机器人。

该工具包包括一个指令调优的语言模型、一个审核模型和一个可扩展的检索系统，用于包含来自自定义存储库的最新响应。OpenChatKit模型在OIG-43M训练数据集上进行训练，该数据集是Together、LAION和Ontocord.ai之间的合作。

功能包含：

* 训练GPT-NeoXT-Chat-Base-20B，一个20B参数聊天模型（请参阅docs/GPT-NeoXT-Chat-Base-20B.md）

* 训练Pythia-Chat-Base-7B，一个7B参数聊天模型

* 使用任一聊天模型测试推理

* 使用检索索引中的附加上下文扩充模型