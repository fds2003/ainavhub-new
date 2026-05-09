---
title: "Playwright MCP Playwright MCP Playwright MCP"
date: "2024-01-01 00:00:00+08:00"
description: 'Playwright MCP Playwright MCP  Playwright '
slug: playwright-mcp-llm
tags:
- playwright
- vision
- snapshot
- agent
- ref
draft: false
related_tools:
- playwright mcp server
- playwright mcp
- playwrightess mcp
- r1-onevision
- visionreward
---

## Playwright MCP

Playwright MCP 是一个使用 Playwright 提供的浏览器自动化能力的模型上下文协议（MCP）服务器。它的核心优势在于使大型语言模型（LLM）能够与网页进行交互，**无需依赖截图或视觉模型** ，而是通过**结构化的可访问性快照** 来实现。

**关键特性：**

* **快速轻量：** 使用 Playwright 的可访问性树，速度快，资源占用少。
* **LLM友好：** 无需视觉模型，直接处理结构化数据，降低了对LLM的视觉理解能力要求。
* **确定性的工具应用：** 避免了基于截图的方法中常见的模糊性。


**使用场景：**

* **网页导航和表单填写：** 自动浏览网页、填写表单。
* **从结构化内容中提取数据：** 抓取网页数据。
* **LLM驱动的自动化测试：** 构建基于 LLM 的自动化测试流程。
* **通用浏览器交互：** 为智能体（Agent）提供网页交互能力。


**两种工具模式：**

1. **快照模式（Snapshot Mode）：** 默认模式，使用可访问性快照，性能更好、更可靠。LLM 通过元素描述 (element) 和元素引用 (ref) 精准定位元素并执行操作。
2. **视觉模式（Vision Mode）：** 使用截图进行基于视觉的交互。LLM 需要使用 XY 坐标来定位元素，配合能够识别图像的视觉模型效果更佳。


**简而言之，Playwright MCP 提供了一种更高效、更可靠的方式，让 LLM 可以通过结构化数据理解和操作网页，从而实现各种自动化任务，而且可以根据需求选择快照模式或视觉模式。**