---
title: "ai-fleet ai-fleet"
date: "2024-01-01 00:00:00+08:00"
description: ai-fleet ， README.md ， ai-fleet 、： AI ： ai-fleet AI ，。 ： .aifleet/config.toml
  ...
slug: ai-fleet-readme.md-aifleet-config.toml
tags:
- glob
- git
- branch
- ai-fleet
- readme.md
draft: false
related_tools:
- globe explorer - 新型的ai搜索引擎自动整理成思维导图
- 'graphrag: improving global search via dynamic community selection'
- vibegit
- gitfriend
- gitagent
---

## ai-fleet

好的，根据您提供的 `README.md` 内容，以下是 `ai-fleet` 项目的主要功能、核心要点和关键特性：

* **AI 代理集群管理：** `ai-fleet` 允许用户从终端启动和管理多个 AI 开发者代理，用于执行代码相关的任务。
* **项目级配置：** 通过项目内的 `.aifleet/config.toml` 文件进行配置，确保团队协作和项目隔离。
* **单代理管理：** 创建带有自定义提示词的独立代理，每个代理在隔离的 git 工作区中运行，支持 tmux 会话管理和实时 CPU/内存监控。
* **并行代理编排：**
* **Fanout：** 使用相同的提示词启动 N 个代理。
* **Multi：** 启动多个具有不同任务的代理。
* 支持批量管理和清理，以及基于模式的操作（支持 glob）。
* **项目集成：** 自动复制凭据文件，为每个项目定义自定义设置命令，通过 Git 工作区隔离，以及分支命名约定。
* **监控与控制：** 实时代理状态显示 CPU/RAM 使用情况，日志跟踪和会话连接，交互式提示发送，以及批量操作。
* **核心命令：**
* `fleet create <branch> [--prompt PROMPT]`：在特定分支上创建新代理。
* `fleet list [--grouped]`：列出所有正在运行的代理及其状态。
* `fleet prompt <branch> "<message>"`：向正在运行的代理发送附加指令。
* `fleet attach <branch>`：以交互方式连接到代理的 tmux 会话。
* `fleet logs <branch> [-n LINES]`：查看代理的输出日志。
* `fleet kill <pattern>`：终止与模式匹配的代理。
* `fleet fanout <count> [prefix] --prompt PROMPT`：创建多个具有相同提示词的代理。
* `fleet multi <branch:prompt> [branch:prompt ...]`：创建多个具有不同提示词的代理。
* **配置命令：**
* `fleet init [--type TYPE] [--migrate-legacy]`：在当前项目中初始化 AI Fleet。
* `fleet config [--edit] [--validate] [--show-origin]`：管理 AI Fleet 配置。
* `fleet update [--check] [--force]`：检查并安装 AI Fleet 的更新。
* **灵活的配置：** 可以为 Rails、Node.js 和 Python 项目设置特定的凭据文件和命令。


总结：该项目通过命令行界面，旨在简化和自动化管理多个AI代理完成开发任务流程，通过隔离的工作区，实现并行开发，并提供监控和控制功能。