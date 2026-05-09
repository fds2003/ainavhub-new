---
title: "codemcp"
date: "2024-01-01 00:00:00+08:00"
description: 'codemcp codemcp  Anthropic '
slug: codemcp-anthropic-claude-desktop-bug
tags:
- bug
- claude
- git
- ide
- agentic
draft: false
related_tools:
- transformer debugger
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
---

## codemcp

codemcp 是一款旨在将 Anthropic 的 Claude Desktop 应用打造成更高效的结对编程助手工具。它允许 Claude 直接在您的本地代码库上实现功能、修复bug 和进行重构，而无需频繁地在聊天窗口和 IDE 之间复制粘贴代码。

**主要特点：**

* **成本效益:** 依赖于 Claude Pro 订阅，避免了使用 API 密钥产生的高昂费用。
* **安全 Agentic AI:** 通过提供有限且安全的工具集，并强制执行 Git 版本控制等最佳实践，最大限度地减少了 AI 的误用风险，允许用户放心地让 AI 工作，并在最后评估并决定是否接受更改。
* **IDE 不可知:** 与您现有的 IDE 无缝集成，Claude 修改代码后，您可以在喜欢的 IDE 中审查更改和进行进一步编辑。


**使用场景：**

1. **功能开发:** 让 Claude 协助您实现新的功能，例如增加新的 API 接口、添加用户界面组件等。
2. **Bug修复:** 指导 Claude 修复代码中的缺陷，比如程序崩溃、数据错误等。
3. **代码重构:** 委托 Claude 进行代码重构，例如提取重复代码、优化算法逻辑等。


**如何使用:**

1. 安装 `uv`。
2. 配置 `claude_desktop_config.json`，添加 codemcp 服务器配置。
3. 在您的 Git 仓库中创建 `codemcp.toml` 文件，配置格式化和测试命令。
4. 在 Claude Desktop 中，创建一个项目并在项目说明中初始化项目目录。
5. 与 Claude 交流您希望对项目进行的更改。codemcp 每次更改代码时都会生成一个 commit。


通过 codemcp, 用户可以更便捷地与 Claude 协同开发，提高开发效率，并且无需担心产生过高的 API 费用，同时保证代码的安全性和可控性。