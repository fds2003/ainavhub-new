---
title: "Claude Code MCP Server Claude Code MCP Server"
date: "2024-01-01 00:00:00+08:00"
description: Claude Code MCP Server  Claude Code MCP Server
slug: claude-code-mcp-server-llm
tags:
- server
- claude
- bypass
- windsurf
- cursor
draft: false
related_tools:
- firecrawl mcp server
- whatsapp mcp server
- android mcp server
- playwright mcp server
- mtranserver
---

## Claude Code MCP Server

这段文本介绍了 Claude Code MCP Server，一个允许在单次模式下运行 Claude Code 的服务器，它自动绕过权限限制。

**总结性介绍:**

* **核心功能：** 该服务器提供了一个强大的 `claude_code` 工具，允许LLM直接与 Claude Code CLI 交互，无需每次都请求授权。
* **主要优势：**
* 更高效的文件编辑：Claude Code 在编辑文件方面比 Claude/Windsurf 更强大和快捷。
* 节省上下文空间：可以将多个命令排队执行，而不是直接执行，从而节省上下文空间。
* 成本效益：通过将任务分流到更便宜的模型，可以降低成本。
* 解决“卡住”问题：Claude 拥有更广泛的系统访问权限，可以完成 Cursor/Windsurf 无法完成的任务。
* 代理中的代理：在代理规则中的应用。
* **关键特性：** 可以 bypass 权限，直接执行 Claude Code，允许LLM访问文件编辑能力，默认启用特定工具。


**使用场景：**

该服务器通过 `claude_code` 工具，解锁了广泛的应用场景，包括：

* **代码生成、分析和重构：** 生成代码脚本，分析代码错误，并提供改进建议。
* **文件系统操作：** 创建、读取、编辑和管理文件。
* **版本控制（Git）：** 执行 Git 命令，如暂存、提交和推送更改。
* **运行终端命令：** 运行 shell 命令。
* **网络搜索和摘要：** 搜索网络信息并提供简洁摘要。
* **复杂的多步骤工作流：** 自动化版本更新、更新更新日志、打标签发布等。
* **修复具有语法错误的文件：** 分析并更正文件中的语法错误。
* **与 GitHub 交互：** 创建 Pull Request，检查 PR CI 状态等。
* **修复 GitHub Actions 工作流。**


**重要提示：**

* **首次设置：** 必须首先手动运行 Claude CLI 一次，使用 `--dangerously-skip-permissions` 标志，登录并接受条款。
* **上下文：** 在提示中提供当前工作目录 (CWD) 上下文，以便进行文件系统或 Git 操作。


**配置:**

* **环境变量:**
* `CLAUDE_CLI_NAME`：覆盖 Claude CLI 二进制文件的名称或提供绝对路径。
* `MCP_CLAUDE_DEBUG`：启用调试日志记录。


**安装和使用:**

推荐使用 `npx` 安装。需要在 MCP 客户端（如 Cursor 或 Windsurf）中配置 `mcp.json` 或 `mcp_config.json` 文件，以便与服务器连接。

**故障排除：**

文章还提供了常见的故障排除方法，例如“命令未找到”错误、权限问题、JSON 错误以及 ESM/导入错误。

**贡献:**

欢迎贡献代码，可以查看本地安装和开发设置指南。

总而言之，Claude Code MCP Server 是一个强大的工具，它扩展了 LLM 的能力，使它们能够以更直接、更有效的方式与代码库和系统交互。 它提供了一种绕过权限限制的方法，使 AI 能够执行各种任务，从简单的代码编辑到复杂的多步骤工作流程。