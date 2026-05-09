---
title: "Personal AI Personal AI Personal AI"
date: "2024-01-01 00:00:00+08:00"
description: Personal AI Personal AI Cloudflare Workers
slug: personal-cloudflare-workers-apple-shortcuts
tags:
- id
- deploy
- github
- apple
- cloudflare
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## Personal AI

Personal AI是一种个人智能助手，通过运行在Cloudflare Workers上并且可以与Apple Shortcuts集成使用，无需专门的硬件设备。它基于任何大型语言模型（LLM），这里以llama 3为例，提供了自定义功能，如获取天气信息。这种智能助手可以帮用户执行多种任务，提升生活和工作效率。

##### 如何使用Personal AI

1. **获取并配置软件** ：

* 先从GitHub上克隆仓库，安装必需的依赖项。
* 使用Cloudflare账号进行认证，创建并配置KV（Key-Value）命名空间。
* 配置项目，包括更新`wrangler.toml`文件中的命名空间ID，并设置API密钥。
2. **部署Cloudflare Worker** ：

* 通过运行`npx wrangler deploy`命令部署个人AI。
3. **设置Apple Shortcut** ：

* 安装并配置苹果快捷指令，包括下载快捷指令和更新其中的`URL`字段为部署的worker URL。


##### 使用场景

Personal AI能在很多场景下被使用，例如：

* **询问天气情况** ：通过集成OpenWeather API，你可以立即获取当前位置或指定地点的天气信息。
* **执行日常任务** ：通过Apple Shortcuts，你可以创建定制的任务来执行常规活动，比如设置提醒、发送消息、启动应用等。
* **获取即时信息** ：使用不同的API获取新闻、股票行情、交通信息等。
* **自动化办公任务** ：自动触发电子邮件发送、日历事件创建、文档管理等。


Personal AI可以根据你的需求定制，帮助简化和自动化日常任务，从而提高生活和工作的效率。这种智能助手特别适合希望通过技术提高生活质量的人，以及需要在工作中高效管理多任务的专业人士。