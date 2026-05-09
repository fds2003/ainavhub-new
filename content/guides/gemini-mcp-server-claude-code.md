---
title: "Gemini MCP Server for Claude Code Gemini MCP Server for Claude Code"
date: "2024-01-01 00:00:00+08:00"
description: 'Gemini MCP Server for Claude Code  README.md '
slug: gemini-mcp-server-claude-code
tags:
- server
- claude
- think
- git
- deeper
draft: false
related_tools:
- firecrawl mcp server
- whatsapp mcp server
- android mcp server
- playwright mcp server
- mtranserver
---

## Gemini MCP Server for Claude Code

好的，根据提供的 README.md 内容，我对 Gemini MCP Server for Claude Code 项目的主要功能、核心要点和关键特性进行总结，如下：

该项目旨在构建一个Claude的终极开发伙伴，该伙伴通过模型上下文协议（MCP）服务器使Claude能够访问Google的Gemini 2.5 Pro，从而进行扩展的思考、代码分析和问题解决。它能自动读取文件和目录，并将内容传递给Gemini，在其百万token的上下文中进行分析。

**主要功能：**

1. **`chat`** : 提供通用开发聊天和协作思考，作为想法碰撞、获得第二意见和集体讨论的伙伴。
2. **`think_deeper`** : 扩展Claude的推理能力，利用Gemini的视角进行更深入的思考，发现Claude可能忽略的边界情况。
3. **`review_code`** : 提供专业的代码审查，能够发现代码中的bug、安全和性能问题，并根据严重程度进行优先级排序。
4. **`review_changes`** : 在提交前验证git变更，确保实现与意图匹配，检测不完整的变更，并支持多仓库审查。
5. **`debug_issue`** : 作为专业的调试助手，帮助分析复杂问题的根本原因，支持错误上下文、堆栈跟踪和日志。
6. **`analyze`** : 提供智能文件分析，可以分析单个文件或整个目录，支持架构、性能、安全和质量等专业分析类型。
7. **`get_version`** : 获取服务器版本和配置信息。


**核心要点和关键特性：**

* **Gemini + Claude 协作** : 将Claude的优势与Gemini的深度分析相结合，提供更全面的开发辅助。
* **大型上下文窗口** : 利用Gemini 2.5 Pro的100万token上下文窗口，分析大型代码库。
* **智能文件处理** : 自动展开目录，过滤不相关的文件，并管理token限制。
* **多种思考模式** : 允许用户控制Gemini分析的深度，以管理token成本和质量。
* **动态上下文请求** : Gemini可以在分析过程中向Claude请求额外的上下文，以获得更全面的见解。
* **Docker支持** : 提供Docker配置，简化安装和部署，实现跨平台一致性。
* **可配置性** : 允许用户配置模型、温度、文件路径限制等，以满足不同的需求。


总体而言，该项目通过提供 Gemini MCP Server，旨在增强 Claude 的能力，使其能够处理更复杂、需要更深入分析的任务，并为开发者提供更全面的开发辅助工具。它强调了 Gemini 和 Claude 的协同工作，以及灵活的配置和使用方式，以适应不同的开发场景和需求。