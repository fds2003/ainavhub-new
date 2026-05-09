---
title: "agentic-cursorrules agentic-cursorrules Agentic-cursorrules"
date: "2024-01-01 00:00:00+08:00"
description: 'agentic-cursorrules Agentic-cursorrules  Agentic-cursorrules '
slug: agentic-cursorrules-python-api-markdown
tags:
- cursor-boost
- python
- agentic-cursorrules
- markdown
- api
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## agentic-cursorrules

**Agentic-cursorrules 简介**

Agentic-cursorrules 是一个基于 Python 的工具，旨在有效管理大型代码库中的多个 AI 代理，防止冲突并维护代码的一致性。该工具的核心思想是通过严格的文件树分区，将代码库划分为逻辑域（如前端、API、数据库），并生成特定于域的 Markdown 文件，以明确文件树的边界，提供给 AI 助手清晰的上下文和访问规则。这一方案受到 cursor-boost 项目的启发。

**使用场景**

1. **复杂项目中的团队协作** ：在多人开发的情况下，通过对不同模块（如前端和后端）进行明确的分区，避免因修改相同文件导致的合并冲突。

2. **AI 助手针对特定功能模块的工作** ：例如，可以为表单组件和身份验证中间件等特定子系统创建专门的 AI 代理，确保它们的改动不会干扰其他部分的开发。

3. **项目架构清晰化** ：适用于需要严格管理代码架构的项目，清晰的边界和责任划分有助于提高团队的工作效率。

4. **持续集成与更新** ：支持定期更新的生成器，便于在开发过程中不断调整和优化代理的工作范围和权限。


通过这些功能，Agentic-cursorrules 大大降低了在 AI 辅助开发时代码库混乱和冲突的风险，使得大型项目的管理变得更加高效和有序。