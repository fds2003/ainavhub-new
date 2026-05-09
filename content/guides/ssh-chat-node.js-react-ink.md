---
title: "SSH AI Chat SSH AI Chat"
date: "2024-01-01 00:00:00+08:00"
description: SSH AI Chat  SSH AI Chat
slug: ssh-chat-node.js-react-ink
tags:
- url
- docker
- redis
- macos
- iterm2
draft: false
related_tools:
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- macos-style react desktop environment
- smart composer
---

## SSH AI Chat

该项目名为 SSH AI Chat，允许用户通过 SSH 与 AI 进行聊天。它是一个基于 Node.js、React 和 Ink 构建的命令行界面 (CLI) 应用程序，并使用 PostgreSQL 和 Redis 作为数据库。核心功能和关键特性如下：

1. **SSH AI 聊天:** 用户可以通过 SSH 连接到服务器，并与 AI 模型进行交互，从而提供了一种便捷的访问 AI 服务的途径。
2. **多种终端支持:** 支持 macOS 上的 iTerm2 和 Ghostty 等终端。
3. **灵活的部署方式:** 支持使用 Docker 进行部署，同时也提供了详细的 Docker Compose 配置示例。
4. **.env 文件配置:** 提供了详细的 `.env` 文件配置说明，允许用户自定义服务器名称、是否为公共服务器、速率限制设置、黑白名单、Redis 和数据库 URL、Umami 分析配置、系统提示词以及 AI 模型列表等。
5. **本地开发支持:** 提供了本地开发环境搭建的步骤，包括安装依赖和运行 CLI 界面及 SSH 服务器。
6. **多种AI模型支持:** 支持配置多个AI模型，并可以为不同的模型配置不同的API调用信息。同时，还支持配置特定的模型用于生成对话标题。
7. **公共/私有服务器设置:** 可以配置为公共服务器或者私有服务器，私有服务器需要配置白名单才能访问。
8. **速率限制:** 可以配置速率限制，防止滥用。