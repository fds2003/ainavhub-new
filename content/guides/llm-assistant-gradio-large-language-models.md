---
title: "LLM-Assistant"
date: "2024-01-01 00:00:00+08:00"
description: LLM-Assistant LLM-Assistant Gradio
slug: llm-assistant-gradio-large-language-models
tags:
- gradio
- calc
- language
- 'no'
- requirements.txt
draft: false
related_tools:
- gradio webrtc
- humanomni
- nanobrowser
- local-notebooklm
- bilinote
---

## LLM-Assistant

LLM-Assistant是一个基于Gradio的浏览器界面，能够与本地的大型语言模型（Large Language Models，简称LLM）进行交互，调用其功能并充当一般助手。用通俗的语言来说，LLM-Assistant像是一个与人工智能对话的桥梁，让你可以通过浏览器与AI进行交流，并让AI执行各种任务。

##### 功能简述

* **通用性** ：可以与任何经过指令微调的LLM合作。
* **信息搜索** ：具备RAG技术，可以进行信息检索。
* **功能调用** ：知道在何时调用特定功能。
* **实时模式** ：可以跨系统实时工作。


##### 即将推出的功能

* 增加矢量数据库。
* 文件上传。
* 语音访问。


##### 当前存在的问题

* 搜索功能可能会偶尔崩溃。
* 实时模式没有停止按钮。


##### 更新内容

* 新增了语法和错误处理支持。
* 增加了基于函数执行的回复。
* 移除了`calc_no`函数。


##### 安装方法

###### 在Windows 10/11上安装

1. 将仓库克隆到虚拟环境中。
2. 安装requirements.txt里列出的要求。
3. 下载LLM模型并将其放在模型文件夹中。
4. 运行main.py文件开始使用。


##### 使用场景

* **助手模式** ：用于通用聊天，执行诸如播放音乐之类的功能调用。
* **实时模式** ：用于编辑Word文档或实时回复电子邮件，直接通过复制选择内容并等待输出，输出结果会自动粘贴到光标位置。


##### 使用场合

LLM-Assistant可以在多种情况下使用，例如：

* 当你需要信息搜索但不想跳出当前界面时。
* 当你希望通过语音或文本与AI助手直接交流，执行一些简单的操作，比如设置提醒、查询天气等。
* 在编写文档或回复电子邮件时需要智能辅助以提高效率。
* 当你在探索人工智能的最新应用，或者想要自定义一些AI的行为时。


LLM-Assistant是一个功能强大而又灵活的工具，它让人与AI间的互动更加简单直接，能够帮助完成各种任务，尤其是那些重复性或者需要智能辅助的工作。随着技术的发展，它未来的功能无疑会更加强大和多样化。