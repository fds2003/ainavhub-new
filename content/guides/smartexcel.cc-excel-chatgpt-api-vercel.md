---
title: "SmartExcel.cc"
date: "2024-01-01 00:00:00+08:00"
description: SmartExcel.cc SmartExcel.cc  AI
slug: smartexcel.cc-excel-chatgpt-api-vercel
tags:
- edge
- chatgpt
- smartexcel.cc
- vercel
- api
draft: false
related_tools:
- knowledge graph
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- knowledge graph builder app
- knowledge graphs for rag
- local knowledge graph
---

## SmartExcel.cc

SmartExcel.cc 是一个利用AI快速生成Excel公式的工具。这个项目使用了ChatGPT API和Vercel AI SDK，通过构建基于用户输入的提示信息，发送至ChatGPT API，并通过Vercel Edge函数处理，最后将处理结果实时反馈至应用界面。简单来说，如果你需要在Excel中完成一些复杂的计算或操作，而你又不完全确定如何编写正确的公式，SmartExcel.cc可以帮助你通过简单描述你的需求来生成所需的Excel公式。

##### 使用场景概述

1. **公式生成** : 当你处理Excel表格时，经常会遇到需要使用公式来计算数据、筛选数据或进行其他逻辑操作。如果你不是很熟悉Excel公式，或者需要处理一些比较复杂的数据操作，SmartExcel.cc可以帮助你快速生成所需的公式。

2. **学习和提高** : 对于刚开始学习Excel或希望提高Excel水平的用户，通过SmartExcel.cc可以学习到如何使用各种Excel公式来处理数据，从而加深对Excel功能的理解和应用。

3. **节省时间** : 对于业务人员或数据分析人员，经常要处理大量数据和复杂运算，通过SmartExcel.cc自动生成公式可以大大减少手动编写公式的时间，提高工作效率。

4. **错误校正** : 如果你在编写公式时遇到错误，SmartExcel.cc还可以通过分析你的需求来帮助你找出并纠正错误，避免手动检查公式所需的时间和精力。


##### 技术栈

SmartExcel.cc构建在以下技术栈之上：

* **前端/后端** : Next.js
* **样式** : TailwindCSS
* **数据库和存储** : Postgres 和 Prisma
* **认证** : Next-auth
* **生成Excel公式** : ChatGPT
* **缓存** : Upstash (Redis)
* **支付** : Lemon Squeezy
* **分析** : Google Analytics
* **开发存储** : Docker
* **托管** : Vercel


##### 运行和部署

要在本地运行SmartExcel.cc, 你需要克隆仓库，创建并填写 `.env` 文件所需的字段，安装依赖并运行。SmartExcel.cc也支持通过Vercel一键部署，简化了部署过程。

无论是需要处理复杂的Excel操作、学习Excel公式、提高工作效率，还是错误校正，SmartExcel.cc都能通过AI的力量简化这些过程，让你更轻松地应对各种Excel挑战。