---
title: "ai-shell ai-shell AI Shell"
date: "2024-01-01 00:00:00+08:00"
description: 'ai-shell AI Shell  shell '
slug: ai-shell-shell
tags:
- log
- npm
- copilot
- shell
- config
draft: false
related_tools:
- logic rl
- vlogger
- add human-like narration to your blog or news site
- logo diffusion
- logocreator
---

## ai-shell

AI Shell 是一个命令行工具，通过将自然语言转换为 shell 命令，简化了命令行的使用。下面是对 AI Shell 的总结和使用场景的介绍：

##### AI Shell 概述

AI Shell 是一个开源的命令行工具，它能够将用户输入的自然语言转换为对应的 shell 命令，从而让用户即使不熟悉 shell 语法也能轻松完成命令行操作。这个工具受到 GitHub Copilot X CLI 的启发，但它是面向所有人开放的。用户可以通过安装 npm 包并配置 OpenAI API 密钥来使用 AI Shell。

##### 安装与配置步骤

1. **安装 AI Shell：**

npm install -g @builder.io/ai-shell


2. **获取 OpenAI 的 API 密钥：** 从 [OpenAI](<https://platform.openai.com/account/api-keys>) 获取 API 密钥。

3. **设置 API 密钥：**

ai config set OPENAI_KEY=<你的密钥>


##### 使用方法

用户可以通过以下命令使用 AI Shell：


ai <prompt>


例如，输入以下命令：


ai 列出所有的 log 文件


AI Shell 将会生成一个建议的命令，如下所示，用户可以选择运行、修改或取消：


◇  Your script:
│
│  find . -name "*.log"
│
◇  Explanation:
│
│  1. 搜索当前目录及其子目录中的所有 ".log" 文件。
│
◆  是否执行此脚本？
│  ● ✅ 是的（执行！）
│  ○ 📝 修改
│  ○ ❌ 取消
└


##### 特殊字符处理

对于某些特殊字符（如 `?` 或 `*`），如果出现异常行为，可以将提示包裹在引号内，例如：


ai '我的 IP 地址是什么'


##### 聊天模式

用户可以使用 `chat` 命令启动聊天模式，与 AI 进行自然、对话式的互动：


ai chat


##### 静默模式

可以通过 `-s` 或 `--silent` 标志禁用解释部分：


ai -s 列出所有 log 文件


或者通过配置永久设置：


ai config set SILENT_MODE=true


##### 自定义 API 端点

可以更改 OpenAI API 端点：


ai config set OPENAI_API_ENDPOINT=<你的代理端点>


##### 设置语言

AI Shell 默认语言为英语，但是可以通过以下指令切换为其他语言：


ai config set LANGUAGE=zh-Hans


##### 配置界面

使用交互式配置界面：


ai config


##### 升级

检查当前版本：


ai --version


如需升级到最新版本：


npm update -g @builder.io/ai-shell


或者直接使用 AI Shell 命令：


ai update


##### 常见问题

**429 错误：** 如果遇到 429 错误，可能是由于账单设置错误或配额使用过多。请前往 [OpenAI 账单页面](<https://platform.openai.com/account/billing/overview>) 激活付费计划。

##### 总结

AI Shell 是一个强大的工具，适合各类用户，尤其是那些对 shell 命令不熟悉但需要在命令行环境中完成任务的用户。它极大地简化了命令行操作的复杂度，通过自然语言处理技术让每个人都能高效使用命令行。