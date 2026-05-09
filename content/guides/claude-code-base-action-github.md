---
title: "Claude Code Base Action Claude Code Base Action"
date: "2024-01-01 00:00:00+08:00"
description: 'Claude Code Base Action  Claude Code Base Action '
slug: claude-code-base-action-github
tags:
- github
- review
- oidc
- actions
- code
draft: false
related_tools:
- claude github webhook
- github copilot
- github copilot workspace
- github copilot for xcode
- github spark
---

## Claude Code Base Action

**总结：**

Claude Code Base Action 是一个 GitHub Action，它允许你在 GitHub Actions 工作流中运行 Claude Code，你可以使用它来构建自定义的工作流程。它能通过直接 prompt 或 prompt 文件的方式调用 Claude Code，并能限制对话轮数，并能控制Claude Code使用的工具。你可以使用 Anthropic API 密钥，或者通过 Amazon Bedrock 或 Google Vertex AI 使用 OIDC 身份验证与 Claude 进行身份验证。

**使用场景：**

* **代码审查 (Code Review):** 自动审查代码，提供代码质量、潜在 Bug、性能问题改进建议，并把审查结果作为评论发布到 Pull Request 中。
* **自定义 Workflow:** 可以根据你的需求，结合 Claude Code 和其他工具，构建各种自动化的工作流程，比如自动文档生成、问题诊断、代码修复等。
* **集成 MCP (MCP Config):** 使用自定义 MCP 配置，动态加载 MCP 服务器，实现更灵活的工具集成。
* **利用云服务 (Cloud Providers):** 通过 Amazon Bedrock 或 Google Vertex AI，利用云服务商提供的计算资源和身份验证机制，运行 Claude Code。


**需要注意的点：**

* **API Key 安全：** 绝对不要将 API Key 直接提交到代码仓库，务必使用 GitHub Actions Secrets 来安全地存储和引用 API Key。
* **选择验证方式：** 可以直接使用 Anthropic API Key，也可以使用 Amazon Bedrock 或 Google Vertex AI 与 Claude 进行身份验证.
* **配置 Model：** 根据你选择的验证方式，配置相应的模型。


总而言之，Claude Code Base Action 提供了一个强大的框架，你可以使用它将 Claude Code 集成到你的 GitHub Actions 工作流中，实现各种自定义的自动化任务。