---
title: "speakr speakr Speakr"
date: "2024-01-01 00:00:00+08:00"
description: speakr Speakr 、 Web ，（），，。。 ： ： 。 ： ，...
slug: speakr-web
tags:
- sqlalchemy
- python
- flask
- llm
- whisper
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## speakr

Speakr 是一个私有的、自托管的 Web 应用程序，旨在转录音频录音（如会议），生成简洁的摘要和标题，并通过聊天界面与内容进行交互。它可以将您的所有会议记录和见解安全地保存在您自己的服务器上。

**主要功能包括：**

* **音频上传：** 通过拖放或文件选择上传音频文件。
* **后台处理：** 转录和摘要在后台进行，不会阻塞 UI。
* **转录：** 使用兼容 OpenAI 的语音转文本 (STT) API（可配置，例如自托管 Whisper）。
* **AI 摘要和标题：** 使用兼容 OpenAI 的 API（如 OpenRouter）通过可配置的 LLM 生成简洁的标题和摘要。
* **互动聊天：** 使用 AI 模型提问并与转录内容互动。
* **搜索、收件箱和高亮显示：** 用于高亮显示和轻松处理。
* **元数据编辑：** 编辑与录音相关的标题、参与者、会议日期、摘要和笔记。
* **用户身份验证：** 安全的用户注册和登录系统。
* **账户管理：** 用户可以更改密码。
* **录音库：** 查看、管理和访问所有个人录音。
* **黑暗模式：** 在浅色和深色主题之间切换。
* **管理面板：** 用于用户管理、系统统计等。


**技术栈包括：** Python、Flask、SQLAlchemy、Gunicorn、Jinja2、Tailwind CSS、Vue.js 等。

**安装和部署：**

目前推荐使用 Docker 进行安装，并提供了详细的 Docker 安装步骤，以及使用 docker-compose 的方式。 此外还提供了 Docker 镜像的构建和启动，以及创建管理用户的选项。 虽然项目文档描述了本地开发和部署方法，但目前这些方法并不工作。

**总而言之，Speakr 是一个旨在帮助用户管理和分析音频录音的强大的自托管工具，它通过转录、总结和交互式聊天等功能，提高了生产力，而且能确保数据安全** 。