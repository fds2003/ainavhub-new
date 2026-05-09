---
title: "create-tsi"
date: "2024-01-01 00:00:00+08:00"
description: 'create-tsi create-tsi  LlamaIndex '
slug: create-tsi-llamaindex-open-telekom-cloud
tags:
- open
- cloud
- telekom
- t-systems
- bots
draft: false
related_tools:
- openchat
- openmanus
- openai agents sdk
- opendeepsearch
- openmanus-rl
---

## create-tsi

`create-tsi` 是一个利用 `LlamaIndex` 技术生成AI应用程序的工具，特别适用于那些希望快速、灵活地创建基于AI的应用程序的开发者，而不需要深入编程或大量的代码工作。这种工具主要用于在Open Telekom Cloud上由T-Systems托管的大型语言模型（LLMs）来生成机器人（bots）、编写代理（agents），并为特定用例进行定制。

##### 使用场合

当你需要快速创建一个前端和后端都支持的AI应用，并希望这个应用能够对特定数据或内容做出智能反应时，`create-tsi`就是一个很好的选择。比如：

* **为客户服务创建聊天机器人** ：当你需要一个可以回答常见问题的聊天机器人时，`create-tsi`可以帮你快速构建起来。
* **数据分析和询问应用** ：如果你有大量数据需要快速索引并提供自然语言查询接口，`create-tsi`可以帮助你生成这样的应用。
* **个性化教育或咨询工具** ：当你想创建一个可以根据用户输入给出个性化建议或教育内容的应用时。


##### 开始前需要

你需要一个T-Systems的API钥匙来开始。可以通过填写表单获取试用访问权。

##### 创建过程

使用`create-tsi`，你可以通过几条命令就开始生成应用程序。它支持交互式生成，会询问你一些基本配置，比如项目名称、是否需要生成前端、你的API键等。

##### 生成内容包括

* **由Next.js驱动的前端** ：一个设置好的聊天界面，可以根据你的数据回答问题。
* **Python FastAPI后端** ：后端由 `llama-index python package`支持，并提供一个端点，用于发送聊天状态和接收回复。
* **数据处理** ：你可以为你的应用提供自己的数据，应用将索引此数据并能够基于这些数据回答问题。


##### 实例使用

只需要运行一条npx或npm等命令，就可以开始交互式配置并生成应用，非常适合快速原型制作和开发。

最后，`create-tsi`不仅符合REUSE软件授权标准，便于开发者理解和遵循软件授权规则，还提供了完备的文档支持，包括开发者指导和API文档，使得从项目创建到开发再到生产部署都变得简单快捷。