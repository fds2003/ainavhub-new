---
title: "vector-vein vector-vein VectorVein"
date: "2024-01-01 00:00:00+08:00"
description: vector-vein VectorVein  VectorVein
slug: vector-vein-vectorvein-langchain-langflow-ve
tags:
- vectorvein
- deepgram
- langchain
- ve
- word
draft: false
related_tools:
- deepgram aura
- langchain-searxng
- langchain swift
- langchain
- firecrawl mcp server
---

## vector-vein

##### VectorVein 简介

VectorVein是一款无代码AI工作流软件，受[LangChain](<https://github.com/hwchase17/langchain>)和[langflow](<https://github.com/logspace-ai/langflow>)启发，旨在结合大型语言模型的强大能力，使用户能够轻松实现各种日常任务的智能化和自动化工作流。无需编程，仅通过拖拽即可创建强大的工作流。

##### 使用场景

VectorVein可以应用于多种场景，包括但不限于：

1. **翻译工作流** ：将输入的英文Word文档翻译成中文文档。
2. **思维导图工作流** ：将输入的英文文档总结成中文思维导图。
3. **网页文章摘要工作流** ：将网页文章提炼成中文思维导图。
4. **客户投诉自动分类工作流** ：根据自定义关键词对客户投诉内容进行自动分类，并生成分类结果的Excel表。


##### 特性和功能

1. **在线体验** ：无需下载或安装，通过[在线版本](<https://vectorvein.ai/en>)可直接体验。
2. **多种配置选项** ：
* **远程大型语言模型** ：支持OpenAI、Moonshot、Zhipu AI、Anthropic等API。
* **本地大型语言模型** ：支持如LM-Studio、Ollama、vLLM等OpenAI兼容接口。
* **语音识别配置** ：支持OpenAI和Deepgram的语音识别服务。
* **向量搜索嵌入配置** ：支持使用OpenAI提供的嵌入服务或配置本地嵌入服务。
* **快捷键设置** ：方便日常使用，支持快捷键启动与Agent的语音进行对话。
3. **用户界面与编辑界面** ：提供简洁易用的用户界面用于日常操作和功能强大的编辑界面用于创建和编辑工作流。
4. **稳定扩展支持** ：支持本地Stable Diffusion API，需配置启动参数`--api`。


##### 开发与部署

VectorVein支持在Windows和Mac上开发与部署，具体环境要求包括Python 3.8到3.11，以及前端的Vue3和Vite。可以使用PDM进行依赖安装，并通过简单命令启动后端开发服务器和编译前端代码。提供了详细的打包命令以生成可执行文件。

##### 授权条款

VectorVein是一款开源软件，支持个人非商业用途，详细的协议请参考[LICENSE](<LICENSE.md>)。