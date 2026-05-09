---
title: "Fire Enrich Fire Enrich"
date: "2024-01-01 00:00:00+08:00"
description: 'Fire Enrich  README.md '
slug: fire-enrich-readme.md-firecrawl
tags:
- agent
- readme.md
- firecrawl
- gpt-4o
- fire
draft: false
related_tools:
- oliva multi-agent assistant
- openai agents sdk
- computer using agent sample app
- cloudflare agents
- theoremexplainagent
---

## Fire Enrich

好的，我将根据提供的 `README.md` 内容，总结 Fire Enrich 项目的主要功能、核心要点和关键特性，并以清晰的列表形式呈现。

Fire Enrich 是一个 AI 驱动的数据增强工具，它主要用于将简单的电子邮件列表转换为包含公司概况、融资数据和技术栈等信息的丰富数据集。它利用 Firecrawl 的网络抓取和内容聚合能力，以及 OpenAI 的智能数据提取和合成能力。 主要功能、核心要点和关键特性如下：

1. **数据增强** ：将简单的电子邮件列表转换为富含公司信息的结构化数据集。

2. **多Agent架构** ：通过多个专业化的 Agent (发现 Agent、公司概况 Agent、财务情报 Agent、技术栈 Agent 和通用 Agent) 协同工作，提取和验证数据，保证数据准确性。

3. **Firecrawl集成** ： 利用Firecrawl进行网络抓取，从互联网上收集信息。

4. **OpenAI集成** ：利用 OpenAI （GPT-4o）进行智能数据提取和内容合成。

5. **分阶段提取系统** ：采用分阶段的数据提取方法，每个阶段都建立在前一个阶段的基础上，以实现更准确的结果。

6. **自定义字段** ：支持自定义字段，允许用户根据需要选择或创建特定的数据点。

7. **实时流式传输** ：通过服务器发送事件实时更新数据。

8. **完整的来源引用** ：为每个数据点提供来源链接，确保数据的透明性和可追溯性。

9. **跳过常用服务商** ：自动跳过个人电子邮件（Gmail、Yahoo 等），以节省 API 调用并专注于公司数据。

10. **可扩展性** ：通过 Zod schema 确保类型安全，系统易于扩展，允许添加新的 Agent 或修改现有 Agent 的 schema。

11. **开源** ：作为一个开源项目，鼓励社区参与，贡献代码、改进提示语和提出新功能建议。


总结来说，Fire Enrich 的核心在于通过多 Agent 系统和 AI 技术，自动从网络上提取和整合公司信息，帮助用户快速构建丰富的数据集。其开源特性使其具有很强的可扩展性和适应性。