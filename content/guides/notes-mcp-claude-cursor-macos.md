---
title: "Notes MCP Notes MCP Notes MCP"
date: "2024-01-01 00:00:00+08:00"
description: 'Notes MCP Notes MCP  Claude '
slug: notes-mcp-claude-cursor-macos
tags:
- id
- claude
- notes
- macos
- cursor
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## Notes MCP

**Notes MCP 是一个允许其他应用程序（比如 Claude 和 Cursor）访问和操作 macOS 上的 Apple Notes 应用程序的服务器。**

**总结来说，Notes MCP 就像一个桥梁，让 AI 工具或其他程序可以：**

* **读取你的 Notes 数据：** 获取所有文件夹和笔记信息，包括笔记内容和标题。
* **创建新的 Notes：** 根据需要创建新的笔记，并设置标题和内容。
* **查找特定的 Notes：** 通过 ID 或精确的标题来查找指定的笔记。
* **获取笔记总数:** 了解总共有多少笔记。


**使用场景：**

Notes MCP 主要用于将 Apple Notes 的功能集成到其他应用程序中，例如：

* **AI 助手 (Claude, Cursor)：** 允许 AI 助手访问你的笔记，以便进行总结、搜索、修改或基于笔记内容提供相关建议。 例如，让 Claude 总结某个笔记的内容，或者根据你的笔记创建一个新的任务列表。
* **其他需要访问和操作 Apple Notes 的应用程序：** 为开发者提供了一种标准化的方式来访问和管理 Notes 数据，而无需直接操作复杂的 Apple Notes API。
* **自动化工作流：** 可以与其他自动化工具配合使用，例如根据特定事件自动创建笔记，或者将笔记内容同步到其他平台。


**使用方式：**

1. **安装构建:** 使用 `npm install && npm run build` 安装依赖并构建项目。
2. **配置：** 在需要使用 Notes MCP 的应用程序（如 Claude 或 Cursor）的配置文件中添加 MCP 服务器的配置，指定 `node dist/index.js` 作为启动命令。
3. **运行：** 启动 MCP 服务器，使其与 Apple Notes 应用程序连接。


总的来说，Notes MCP 提供了一个方便且安全的方式，让其他应用程序能够与 Apple Notes 应用程序进行交互，从而扩展了 Notes 的功能和使用场景。