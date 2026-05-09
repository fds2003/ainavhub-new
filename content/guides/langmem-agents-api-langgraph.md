---
title: "LangMem"
date: "2024-01-01 00:00:00+08:00"
description: LangMem LangMem  agents
slug: langmem-agents-api-langgraph
tags:
- api
- langmem
- agents
- langgraph
draft: false
related_tools:
- grok2api
- gemini cli to api proxy
- geminicli2api
- geminicli to api
- kokoro-fastapi
---

## LangMem

LangMem 是一款用于帮助智能代理（agents）通过与用户的互动不断学习和适应的工具。它可以从对话中提取重要信息，优化代理的行为，并维护长期记忆。LangMem 提供了可以与任何存储系统兼容的核心记忆 API，以及与 LangGraph 存储层的原生集成。这使得智能代理可以持续改进，个性化其响应，并在多个会话间保持一致的行为。

##### LangMem 的关键特性

* **核心记忆 API** ：可与任何存储系统兼容工作。
* **记忆管理工具** ：代理可以在活跃对话中记录和搜索信息。
* **后台记忆管理器** ：自动提取、整合和更新代理知识。
* **与 LangGraph 的长期记忆存储的原生集成** ：在所有 LangGraph 平台部署中默认可用。


##### 使用场景

LangMem 适用于多个场景，尤其是在需要智能代理持续学习和适应用户的情况下，例如：

1. **个性化服务** ：智能客服可以记住用户的偏好，从而提供更好的个性化体验。
2. **持续对话** ：代理在不断的对话中能够保持上下文，确保提供一致的信息。
3. **信息管理** ：代理能够有效地记录和回忆关键信息，提高交互效率。


##### 创建与使用代理

使用 LangMem 创建代理的过程相对简单，用户只需编写少量代码，代理就可以主动管理自己的长期记忆。例如，代理可以通过正常的对话来存储用户的偏好，而不需要额外的命令，方便用户与代理的交互。

总之，LangMem 是一款强大的工具，能够帮助智能代理在与用户的交互中高效地学习和适应，从而提升用户体验。