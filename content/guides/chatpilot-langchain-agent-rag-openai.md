---
title: "ChatPilot"
date: "2024-01-01 00:00:00+08:00"
description: 'ChatPilot ChatPilot  ChatPilot '
slug: chatpilot-langchain-agent-rag-openai
tags:
- kimi
- svelte
- chatpilot
- azure
- langchain
draft: false
related_tools:
- kimi-audio
- kimi k2
- kimi cc
- kimi-dev-72b
- kimi chat - 一个有着超大 内存 的智能助手，可以一口气读完二十万字的小说，还会上网冲浪，快来跟他聊聊吧
---

## ChatPilot

##### ChatPilot 简介

**ChatPilot** 是一款基于LangChain框架实现的对话代理（Agent）。它能够实现复杂的对话功能，包括联网搜索、文件和网址的解析对话（RAG）以及代码解释器等功能。主要支持OpenAI/Azure API接口，用户可以通过前端界面或命令行进行交互。

##### 主要功能

1. **ReAct和OpenAI Function Call支持的Agent对话** ：

* **联网搜索工具** ：如Google Search API（包括Serper和DuckDuckGo）。
* **URL自动解析工具** ：复现Kimi Chat的“网址发出来”功能。
* **Python代码解释器** ：支持E2B虚拟环境和本地python编译器环境运行代码。
2. **查询改写的检索增强（RAG）文件问答** ：基于LangChain进行实现。

3. **前后端服务分离** ：前端使用Svelte框架，后端使用FastAPI框架。

4. **多媒体支持** ：支持语音输入输出和图像生成。

5. **用户管理和权限控制** ：支持聊天记录的导入导出。


##### 使用场景

1. **信息检索与问答** ：

* 用户可以通过对话方式进行查询，并由系统自动调用相应的工具进行信息检索和解析。
* 适用于需要实时获取信息的场景，如新闻搜索、学术资料查询等。
2. **文件和网址解析** ：

* 用户可以输入文件或网址，系统会自动解析并返回相关信息。
* 适用于需要快速了解文档内容或网站信息的场景。
3. **编程与代码解释** ：

* 系统支持Python代码的解释和执行，可用于学习或工作中的代码调试和执行等场景。
4. **多媒体交互** ：

* 支持语音和图像的输入输出，适用于多模态交互的场景，如语音问答、图片生成等。
5. **企业内部应用** ：

* 支持用户管理和权限控制，适用于公司内部的知识管理系统或客户服务系统。


##### 部署与使用

1. **本地部署** ：

* 构建前端：可以下载已编译好的前端包，或自行使用npm构建前端。
* 启动后端服务：安装相关依赖并运行启动脚本。
2. **命令行模式（CLI）** ：

* 支持在命令行中与ChatPilot进行对话，提供简单易用的交互方式。


##### 示例代码

要在本地部署ChatPilot，可以按照以下步骤操作：


# 构建前端
cd web
npm install
npm run build

# 启动后端服务
cd ..
pip install -r requirements.txt -U
cp .env.example .env
bash start.sh


启动后，访问 <http://0.0.0.0:8080> 即可体验ChatPilot的功能。

ChatPilot是一款功能强大且易于使用的对话代理工具，其多样化的功能能够适用多种实际应用场景。无论是个人使用还是企业内部应用，ChatPilot都提供了解决方案，让信息获取和交互变得更加智能和高效。