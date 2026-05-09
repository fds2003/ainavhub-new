---
title: "OpenAI Realtime API Client for Python OpenAI Realtime API Client for Python"
date: "2024-01-01 00:00:00+08:00"
description: "OpenAI Realtime API Client for Python OpenAI Realtime API Client for"
slug: "openai-realtime-api-client-python"
draft: false
---

## OpenAI Realtime API Client for Python

OpenAI Realtime API Client for Python 是一个实验性的 Python 客户端，它与 LlamaIndex 工具集成，使开发者能够快速构建自定义语音助手。该客户端支持实时交互，包括手动语音活动检测（VAD）模式和流媒体模式，后者允许用户在与聊天机器人互动时中断对话。

##### 安装

在使用该客户端之前，您需要安装一些系统依赖和 Python 依赖：

1. **系统依赖** ：

brew install ffmpeg


2. **Python 依赖** ：

pip install openai-realtime-client


您还可以选择克隆该库以运行本地示例：


git clone https://github.com/run-llama/openai_realtime_client.git
cd openai_realtime_client


然后设置您的 OpenAI API 密钥：


export OPENAI_API_KEY="sk-..."


##### 使用场景

该客户端适用于多个场景，特别是：

* **自定义语音助手** ：开发针对特定需求的语音助手。
* **实时对话应用** ：如智能客服、语音助手等需要实时互动的应用。
* **试验性项目** ：为研究或学习目的，尝试新的 API 特性和交互模式。


##### 示例

###### 手动 VAD 模式

此模式用于交互式命令行界面，您可以手动控制对话：


python ./examples/manual_cli.py


您可以尝试询问诸如“我的电话号码是什么”等问题，以查看功能调用效果。

###### 流媒体模式

此模式允许您在使用聊天机器人时中断其响应：


python ./examples/streaming_cli.py


需要注意的是，流媒体模式可能会有些不稳定，建议在安静环境中佩戴耳机使用。

通过查看示例并添加自己的工具，您可以构建出令人惊叹的应用。
