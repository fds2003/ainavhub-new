---
title: "Desktop Commander MCP Desktop Commander MCP Desktop Commander MCP"
date: "2024-01-01 00:00:00+08:00"
description: 'Desktop Commander MCP Desktop Commander MCP  Claude '
slug: desktop-commander-mcp-claude-model
tags:
- claude
- model
- mcp
- commander
- protocol
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## Desktop Commander MCP

Desktop Commander MCP 是一个 Claude 桌面应用的扩展工具，它通过 Model Context Protocol (MCP) 协议，让 Claude 能够在你电脑上执行终端命令、管理进程，以及进行文件操作和代码编辑。

**主要功能：**

* **终端命令执行：** 允许 Claude 运行终端命令，并实时获取输出，支持超时控制和后台运行。
* **进程管理：** 可以列出和结束系统进程。
* **文件系统操作：** 提供文件的读写、创建/列出目录、移动文件/目录、搜索文件、获取文件元数据等功能。
* **代码编辑：** 支持对代码进行精确的文本替换（适合小修改），以及完整的重写文件（适合大修改）。编辑操作可以基于模式匹配，并支持多个文件。


**使用场景：**

* **自动化任务：** 让 Claude 自动执行构建、测试、部署等任务。
* **代码重构：** 让 Claude 协助进行代码重构，例如批量修改变量名、更新依赖等。
* **故障排查：** 让 Claude 执行诊断命令，收集系统信息，帮助你排查问题。
* **定制开发环境：** 根据项目需要，定制 Claude 的操作，使其更适应你的开发流程。
* **需要频繁读写文件，并执行命令操作的项目：** 例如，在开发过程中，需要Claude不断从文件中读取信息，并根据读取的信息执行不同的命令。


**安装方法:**

文档中提供了四种安装方法：

1. 使用 Smithery 自动安装。
2. 使用 `npx` 命令安装。
3. 手动添加到 `claude_desktop_config.json` 文件。
4. 从 GitHub 仓库本地安装。


**总而言之，Desktop Commander MCP 扩展了 Claude 桌面应用的能力，让它不仅仅是一个聊天机器人，更成为一个强大的自动化工具，可以协助你完成各种开发和运维任务。**