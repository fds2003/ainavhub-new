---
title: "Workflow Use Workflow Use Workflow Use"
date: "2024-01-01 00:00:00+08:00"
description: Workflow Use Workflow Use  RPA 2.0
slug: workflow-rpa
tags:
- browser
- workflow
- rpa
draft: false
related_tools:
- nanobrowser
- browserbase mcp server
- browserbee
- puppeteer real browser
- your open-source browser operator
---

## Workflow Use

Workflow Use 是一个旨在创建和执行**确定性、自愈合工作流程** 的工具，也可以理解为 **RPA 2.0** 。

**核心思想：**通过一次性录制用户的浏览器操作，Workflow Use 可以将这些操作转化为结构化的、可执行的工作流程。如果工作流程中的某个步骤失败，它可以自动回退到 Browser Use，利用 AI 来完成任务，从而提高可靠性。

**主要功能：**

* **一次录制，永久复用：** 只需录制一次浏览器交互，即可无限次重放。
* **展示，而非提示：** 无需花费大量时间提示 Browser Use 反复执行相同的操作。
* **结构化和可执行的工作流程：** 将录制转化为确定、快速和可靠的工作流程，自动从表单中提取变量。
* **类似人类的交互理解：** 智能地过滤录音中的噪声，以创建有意义的工作流程。
* **企业级基础：** 内置自愈合和工作流程差异等功能，专为未来的可扩展性而设计。


**使用场景：**

* **自动化重复性任务：** 适用于任何需要在浏览器中重复执行的任务，例如数据录入、表单填写、网页抓取等。
* **提高任务的可靠性：** 通过在工作流程失败时回退到 Browser Use，确保任务能够顺利完成。
* **简化自动化流程：** 无需编写复杂的脚本，只需录制用户的操作即可创建自动化流程。
* **AI辅助的自动化:** 当工作流程中的步骤执行失败时，可以自动调用LLM（语言模型）进行干预和修正，使工作流程可以继续执行。
* **集成到Agent中作为工具:** 将创建好的工作流集成到大型语言模型（LLM）驱动的Agent中，作为Agent解决特定任务的工具，提升Agent处理复杂任务的能力。


**总而言之，Workflow Use旨在通过简单的录制方式，创建可以自动执行、可靠性高，并具有AI辅助修正能力的浏览器自动化工作流程。**