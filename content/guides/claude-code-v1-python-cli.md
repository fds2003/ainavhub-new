---
title: "Claude Code"
date: "2024-01-01 00:00:00+08:00"
description: Claude Code  Claude Code
slug: claude-code-v1-python-cli
tags:
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- edit
- write
draft: false
related_tools:
- gemini 2.0 flash image generation and editing
- easyedit
- gpt-image-edit
- nano banana ai image editor
- coxl edit
---

## 手搓Claude Code

“手搓Claude Code”项目旨在以最少的代码复刻Claude Code的核心工作流，并分为两个主要版本。V1版本是一个大约400行Python代码的极简CLI实现，其核心在于验证“模型即代理”（Model as Agent）的理念，通过明确的系统角色设定和预置的`bash`、`read_file`、`write_file`、`edit_text`等核心工具，让大型模型成为唯一的行为主体，自主执行读写文件和命令行操作，同时确保了操作的可控性和安全性。V2版本则在V1的基础上进一步强化了模型的结构化规划和自我监督能力，引入了“Todo工具链”来实现任务的创建、更新和完成，并提供可视化状态追踪，以及“系统提醒”机制来引导模型在长对话中保持规划性和有序性，确保模型能够始终按照结构化、可追溯的工作流程进行操作，避免无序的“想到哪写到哪”的问题。该项目通过这两个阶段的迭代，清晰地展示了构建智能代理系统的关键要素和演进路径。