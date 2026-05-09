---
title: "VimLM"
date: "2024-01-01 00:00:00+08:00"
description: VimLM VimLM Vim LLM（）， GitHub Copilot Cursor。、 AI Vim ，。 ： MLX ...
slug: vimlm-vim-llm-github-copilot
tags:
- deploy
- copilot
- github
- async
- cursor
draft: false
related_tools:
- github copilot
- pi
- microsoft copilot for finance
- github copilot workspace
- copilot+ pcs
---

## VimLM

VimLM 是一款为 Vim 用户设计的本地 LLM（大语言模型）驱动的编程助手，灵感源自 GitHub Copilot 和 Cursor。它将上下文代码理解、摘要和 AI 助手直接集成到 Vim 的工作流中，为用户提供智能化的编码支持。

##### 主要特点

* **模型兼容性** ：可以通过配置文件使用任何 MLX 兼容的模型。
* **原生 Vim 用户体验** ：提供直观的快捷键和分屏响应。
* **深度上下文理解** ：能够理解来自当前文件、可视选择、引用文件和项目目录结构的代码上下文。
* **对话式编码** ：支持通过后续查询进行迭代优化。
* **离线安全性** ：100% 离线使用，无需 API、无追踪和数据泄漏。


##### 使用场景

1. **代码补全与建议** ：用户可以在编辑代码时通过简洁的快捷键与 LLM 交互，获取代码补全或建议。
2. **代码转换** ：例如，将回调函数转换为 async/await 语法，用户只需选择代码并提出提示。
3. **文件和目录上下文包含** ：用户可以通过 `!include` 指令将额外的文件或目录上下文添加到当前会话，以帮助生成更相关的代码或摘要。
4. **生成项目文件** ：使用 `!deploy` 指令快速生成指定目录的项目文件。
5. **复杂操作的命令链** ：用户可以将多个命令组合成一个操作，例如生成单元测试或添加文档注释，极大提高工作效率。
6. **可重用的命令链** ：支持创建和执行复杂的 LLM 工作流，可以存储常用模式供后续复用。


VimLM 提供了一种高效的方式，帮助程序员在编写代码时利用 AI 的力量，提高编码效率和代码质量。