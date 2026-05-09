---
title: "Computer Using Agent Sample App Computer Using Agent Sample App"
date: "2024-01-01 00:00:00+08:00"
description: 'Computer Using Agent Sample App  OpenAI API '
slug: computer-using-agent-sample-app
tags:
- playwright
- type
- scrapybara
- agent
- app
draft: false
related_tools:
- playwright mcp server
- playwright mcp
- playwrightess mcp
- typeagent
- virtual try-on prototype with flask
---

## Computer Using Agent Sample App

这个文档介绍了如何使用 OpenAI API 构建一个 “Computer Using Agent (CUA)” 的示例应用程序。CUA 是一种能够理解计算机屏幕截图并执行相应操作的智能体，比如点击、输入文字等。

**主要内容包括：**

* **基本概念:** 介绍了CUA的工作原理：通过观察屏幕截图，模型会建议相应的操作 (如`click`, `type`)，你需要在环境中执行这些操作，并提供新的屏幕截图给模型继续决策。
* **代码结构:** 介绍了 `Computer` 和 `Agent` 这两个主要抽象类，`Computer` 负责执行 CUA 发出的操作 (例如点击屏幕)，`Agent` 负责循环调用模型，直到所有计算机操作和函数调用都被处理完毕。
* **运行方式:** 提供了通过命令行界面 (CLI) 运行 CUA 的方法，可以使用本地浏览器 (通过 Playwright)、Docker 容器，或者远程浏览器服务 (Browserbase, Scrapybara) 等不同的“计算机”环境。
* **计算机环境:** 详细说明了各种“计算机”环境的配置和运行方式，包括所需的依赖和API密钥等。
* **函数调用:** CUA Agent 可以调用函数，如果函数在 `Computer` 类中定义，调用会被路由到 `Computer` 执行，这允许你扩展 CUA 的功能，例如提供 `back()` 或 `goto(url)` 函数来帮助 CUA 导航。
* **安全风险:** 强调了使用 CUA 的风险，并建议参考官方文档了解相关的安全措施。


**使用场景：**

CUA 可以应用于自动化执行计算机任务，例如：

* **网页浏览自动化:** 自动搜索信息、填写表单、进行在线购物等。
* **软件操作自动化:** 自动执行软件中的特定流程，例如数据录入、文件管理等。
* **辅助残障人士:** 帮助行动不便的人使用电脑。
* **流程自动化和RPA（机器人流程自动化）：**代替人工进行重复性的电脑操作，提高效率。
* **自动化测试:** 模拟用户行为，对软件进行自动化测试。


**简而言之，这个示例应用提供了一个起点，让开发者可以构建一个能够像人类一样使用电脑的智能代理。 但需要注意的是，该技术尚处于预览阶段，存在潜在的安全风险，应谨慎使用。**