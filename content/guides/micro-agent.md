---
title: "Micro Agent Micro Agent Micro Agent"
date: "2024-01-01 00:00:00+08:00"
description: 'Micro Agent Micro Agent  AI '
slug: micro-agent
tags:
- micro
- install
- key
- micro-agent
- v14
draft: false
related_tools:
- microsandbox
- microsoft copilot for finance
- microsoft power automate
- microagent framework
- micro agent
---

## Micro Agent

Micro Agent 是一个专注于自动化编写和修复代码的 AI 代理。它通过与文件和测试（或截图）的交互，生成代码直到测试通过或更加接近设计截图。它的设计理念是减轻人工多次修复代码的负担，让 AI 处理代码生成和迭代。

##### 核心特点：

1. **明确的测试案例** ：通过明确的测试给出清晰反馈，指示代码是否符合预期。
2. **自动迭代** ：自动调整代码直到所有测试通过。


##### 使用场景：

* **单元测试匹配** ：自动生成通过特定测试脚本的代码。如果给定一个测试文件，Micro Agent 会根据测试结果不断调整代码，直至测试通过。
* **视觉匹配（实验性质）** ：根据设计图和渲染的本地URL，调整代码以使其输出与设计截图更加匹配。
* **与Figma集成** ：借助Visual Copilot实现高保真设计对代码映射，并进行最终调整确保代码符合设计规范。


##### 安装与配置：

* 需求：Node.js v14或更高版本。
* 安装命令：`npm install -g @builder.io/micro-agent`
* 设置OpenAI API键：`micro-agent config set OPENAI_KEY=<你的API密钥>`


##### 运行方式：

* **交互模式** ：`micro-agent`
* **手动运行** ：例如，指定测试脚本运行 `micro-agent ./file-to-edit.ts -t "npm test"`。


##### 其他配置：

* **最大运行次数** ：默认情况下，Micro Agent 会运行10次，如果测试未通过则停止。可以使用`-m`标志来更改，例如：`micro-agent ./file-to-edit.ts -m 20`。
* **设置配置项** ：例如设置模型类型 `micro-agent config set MODEL=gpt-3.5-turbo`。
* **环境变量** ：所有配置项都可以被环境变量覆盖，例如：`MODEL=gpt-3.5-turbo micro-agent ./file-to-edit.ts -t "npm test"`。


通过这些功能和配置，Micro Agent 是一个小而美、专注于特定任务的 AI 工具，旨在通过自动化的代码生成和迭代，帮助开发者提高生产力。