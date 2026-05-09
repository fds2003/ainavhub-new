---
title: "Cursor Talk to Figma MCP Cursor Talk to Figma MCP Cursor Talk to Figma MCP"
date: "2024-01-01 00:00:00+08:00"
description: Cursor Talk to Figma MCP Cursor Talk to Figma MCP  Cursor AI (
slug: cursor-talk-figma-mcp-model
tags:
- typescript
- model
- cursor
- to
- talk
draft: false
related_tools:
- claude code but with openai models
- ai model comparison tool
- open driving world models
- all model chat
- granite code models
---

## Cursor Talk to Figma MCP

Cursor Talk to Figma MCP 是一个项目，旨在实现 Cursor AI (一个代码编辑器) 与 Figma (一个设计工具) 之间的集成，利用 Model Context Protocol (MCP) 实现双向通信。

**核心功能:**

* **读取Figma设计:** 允许 Cursor AI 读取 Figma 设计稿的信息，例如文档结构、图层信息、节点属性等。
* **修改Figma设计:** 允许 Cursor AI 通过编程方式修改 Figma 设计，例如创建新的元素、修改现有元素样式、移动图层、删除节点等。


**技术架构:**

* **MCP服务器 (TypeScript):** 运行在 Cursor AI 端的 TypeScript 服务器，负责处理 Cursor AI 发出的请求，并将这些请求转换成 Figma 可以理解的指令。
* **Figma插件:** 运行在 Figma 端的插件，负责接收 MCP 服务器发来的指令，并在 Figma 中执行相应的操作。
* **WebSocket 服务器:** 一个桥梁，负责在 MCP 服务器和 Figma 插件之间建立通信通道，实现数据的实时传输。


**使用方式:**

1. **安装配置:** 需要先安装 Bun 作为 JavaScript 运行时环境，然后配置 Cursor AI 的 MCP 设置，添加该项目的 MCP 服务器。
2. **启动服务:** 启动 WebSocket 服务器。
3. **安装Figma插件:** 在 Figma 中安装并启用该插件。
4. **建立连接:** 在 Figma 插件中通过指定频道 (channel) 与 WebSocket 服务器建立连接。
5. **使用Cursor操作Figma:** 在 Cursor AI 中，就可以使用 MCP 工具来与 Figma 进行交互，例如获取文档信息、创建元素、修改样式等。


**MCP工具 (API):**

项目提供了一系列 MCP 工具，用于与 Figma 进行交互，包括：

* **文档与选择:** 获取文档和选定对象的信息。
* **元素创建:** 创建矩形、框架、文本等元素。
* **文本修改:** 修改文本内容。
* **样式设置:** 设置填充颜色、描边颜色、圆角等样式。
* **布局组织:** 移动、缩放、删除、克隆节点。
* **组件与样式:** 获取本地和团队组件及样式的信息，创建组件实例。
* **导出与高级功能:** 导出节点为图片，执行任意 JavaScript 代码 (慎用)。
* **连接管理:** 加入指定频道进行通信。


**总结:**

Cursor Talk to Figma MCP 提供了一个强大的桥梁，连接了代码编辑器 Cursor AI 和设计工具 Figma，让开发者可以通过代码的方式来读取和操控 Figma 设计稿，从而提高开发效率和设计协同能力。