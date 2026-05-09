---
title: "dropbase dropbase Dropbase"
date: "2024-01-01 00:00:00+08:00"
description: 'dropbase Dropbase  Python Web '
slug: dropbase-python-web
tags:
- python
- slack
- ui
- web
- dropbase
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## dropbase

Dropbase 是一个基于提示的 Python Web 应用程序构建工具，使用人工智能帮助开发人员快速构建和原型化 Web 应用。通过 Dropbase，开发人员可以快速构建各种应用，如管理面板、后台工具、计费仪表盘和内部工程工具，这些工具能够获取数据并触发内部或外部服务的操作。

##### 主要特点

1. **自定义业务逻辑** ：开发人员可以用代码编写任何自定义业务逻辑。
2. **内置 Web 框架** ：提供预构建的 UI 组件，无需处理前端库或代码。
3. **本地优先，自托管** ：无需分享凭据给第三方。
4. **深度集成代码库** ：Dropbase 直接运行在你的代码库中，方便导入或重用自定义脚本和库。
5. **基于 Python** ：可以导入任何 PyPI 包。


##### 使用场景

1. **构建后台管理系统** ：通过自定义业务逻辑和内置的 UI 组件，快速搭建高效的后台管理系统。
2. **数据处理工具** ：创建用于处理和展示数据的内部工具，如数据查看器、分析仪表盘等。
3. **消息推送系统** ：例如，通过构建一个订单搜索应用并发送消息至 Slack 来通知团队。
4. **可视化报表工具** ：简便地创建包括图表和分析功能的订单应用。


##### 快速开始指南

1. **安装 Docker** ：建议使用 Docker Desktop。
2. **克隆 Dropbase 仓库** ：

git clone https://github.com/DropbaseHQ/dropbase.git


3. **启动服务器** ：
* 首次启动前使 `start.sh` 可执行：

chmod +x start.sh


* 启动服务器：

./start.sh


4. **创建第一个 Dropbase 应用** ：在浏览器中访问 `http://localhost:3030/apps`，点击 `Create app` 按钮来创建应用。


##### 启用 AI 功能

Dropbase 使用 LLM（如 GPT 或 Sonnet）提供 AI 开发者功能，可通过在 `server.toml` 文件中添加 OpenAI 或 Anthropic 的 API 密钥来启用：


[llm.openai]
api_key = "YOUR_API_KEY"
model = "gpt-4o"


##### 配置 Worker

在 `worker.toml` 中配置环境变量，可以包括数据库源、API 密钥或第三方服务的访问令牌。例如，添加 PostgreSQL 数据库：


[database.postgres.my_source]
host = "localhost"
database = "postgres"
username = "username"
password = "password"
port = 5432


Dropbase 通过简洁灵活的代码生成和配置方式，使开发人员能高效创建和定制 Web 应用，以满足各种业务需求。