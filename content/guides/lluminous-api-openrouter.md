---
title: "lluminous"
date: "2024-01-01 00:00:00+08:00"
description: lluminous lluminous  API
slug: lluminous-api-openrouter
tags:
- go
- openai
- api
- openrouter
- anthropic
draft: false
related_tools:
- duckduckgo search mcp server
- google search console mcp server for seos
- google ads mcp
- golf
- google sheets mcp
---

## lluminous

**lluminous** 是一个完全免费的、开源的、高速的聊天机器人前端应用。简单来说，它主要有以下几个功能，可以在多种情况下使用：

##### 主要功能：

1. **支持多个提供商** ：

* 可以插入你的API密钥（这些密钥完全存储在本地），并支持多个聊天机器人模型，比如OpenRouter（可使用OpenAI, Anthropic等50多个模型）、Groq等。
* 未来还将直接支持使用OpenAI或Anthropic的API密钥。
2. **工具使用** ：

* 支持OpenAI和Groq模型的工具调用，并支持并行工具调用。
* 通过编写Go函数并同步到web界面，你可以让模型知道如何使用这些工具。
3. **多轮对话提示** ：

* 支持多轮对话，并且可以编辑、删除、重生成消息。还可以在对话中途更换模型。
4. **对话分享** ：

* 允许对话内容分享（需要将对话存储在外部服务器上，未来会支持自托管分享选项）。
5. **分支对话历史** ：

* 有类似左-右箭头的功能，可以返回之前的回复查看对话分支。


##### 即将添加的功能：

* 记忆功能
* 文件摄取/嵌入
* 多模态输入输出
* 提示模板
* 更美观的设置界面


##### 适用场景：

1. **多任务处理** ：当你需要同时调用多个工具或处理多个任务时，lluminous支持并行工具调用，极大提升工作效率。
2. **隐私优先** ：如果你特别注重隐私问题，lluminous的所有数据和API密钥都存储在本地，不会外泄。
3. **灵活性需求** ：利用其支持多种模型以及随时更换模型的功能，lluminous能满足对聊天机器人响应速度和质量有较高要求的情况。
4. **对话管理** ：它的多轮对话、对话分享和分支历史功能，特别适合需要频繁编辑、重新生成或分享对话内容的工作场景。


##### 如何安装：

1. 克隆代码库：

git clone https://github.com/your/repository.git


2. 安装并启动客户端：

cd repository
npm i && npm run dev


客户端将会在 `http://localhost:5173` 运行。

3. 安装并启动服务端：

cd server
go build
PASSWORD="chooseapassword" ./server -sandbox <sandbox_path>


服务端将会在 `http://localhost:8081` 运行。你可以在聊天UI中填入服务地址和设定的密码。


注意：当前的沙盒功能仅适用于macOS，因为它使用了macOS特定的沙盒功能。

##### 托管实例：

你也可以使用在线托管的实例：https://lluminous.chat，不过要使用工具调用，仍然需要在本地运行lluminous服务。

* * *

这个详细的总结展示了lluminous的功能和适用场景，如果你需要一款功能强大且注重隐私的聊天机器人前端应用，不妨试试lluminous。