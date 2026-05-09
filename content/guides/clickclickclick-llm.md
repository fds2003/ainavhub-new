---
title: "clickclickclick clickclickclick ClickClickClick"
date: "2024-01-01 00:00:00+08:00"
description: clickclickclick ClickClickClick  LLM
slug: clickclickclick-llm
tags:
- clickclickclick
- clic
- usb
- lichess
- key
draft: false
related_tools:
- clickclickclick
- follow-your-click
- monkeycode
- kwai keye-vl
- monkeyocr
---

## clickclickclick

**ClickClickClick** 是一个框架，旨在通过任何大型语言模型（LLM，既可以是本地的也可以是远程的）来实现自动化的安卓手机和计算机操作。该框架的目标是提供一种便捷的方式，让用户通过自然语言指令实现复杂的任务。

##### 使用场景

1. **生成电子邮件** ：用户可以生成一封草稿邮件，例如给某个邮箱发送邀请，询问对方周六中午1点是否有空，并祝贺他们的喜事。

2. **地图查询** ：能够通过自动化操作打开浏览器并访问特定网站，例如查找某个地点的公交站。

3. **在线游戏** ：可以自动启动和参与在线游戏，如在 lichess 上开始一局国际象棋。


##### 主要特性

* 支持本地模型（如 Ollama, Gemini, GPT 4o）以进行任务规划和元素查找。
* 允许用户通过命令行接口或脚本的形式进行操作，支持不同的平台（安卓或 OSX）。
* 能够使用 API 接口接受任务指令并返回执行结果。


##### 安装和使用

* 必须安装 `adb` 工具并在安卓设备上启用 USB 调试。
* 用户需配置相关的 API 密钥（如 `OPENAI_API_KEY` 和 `GEMINI_API_KEY`）。
* 可以通过配置文件自定义任务的执行模型和平台。


ClickClickClick 提供了一个强大的自动化工具，可以在多种场景中提高工作效率，减少操作步骤，使用户能够以更自然的方式与设备交互。