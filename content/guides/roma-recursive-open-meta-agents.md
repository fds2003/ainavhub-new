---
title: "ROMA"
date: "2024-01-01 00:00:00+08:00"
description: ROMA ROMA Recursive Open Meta-Agents
slug: roma-recursive-open-meta-agents
tags:
- open
- const
- gitalk
- roma
- agent.run
draft: false
related_tools:
- openchat
- openmanus
- openai agents sdk
- opendeepsearch
- openmanus-rl
---

## ROMA

ROMA是一个递归开放元代理（Recursive Open Meta-Agents）框架，其核心在于通过递归分层结构解决复杂问题，将大型任务分解为可并行执行的子组件，以实现高效且透明的复杂推理。该框架提供并行问题解决能力，确保代理可同时处理任务的不同部分，并通过清晰的结构简化开发与调试。ROMA在基准测试中表现出色，且作为一个开源可扩展平台，鼓励社区构建和定制代理。其运作基于一个递归的“计划-执行”循环：任务首先通过原子化器判断是否为原子性，非原子任务由规划器分解为子任务并递归处理，原子任务则由执行器（兼容各类大型语言模型、API或其他代理）处理，最终由聚合器整合子任务结果以生成父任务的最终答案。ROMA支持自顶向下任务分解、自底向上结果聚合及基于依赖的信息流，并具有代理无关性，能与任何实现`agent.run()`接口的LLM提供商协同。它还允许无缝连接外部工具，并通过E2B沙箱提供安全的沙盒代码执行和S3数据集成。项目提供了通用任务求解器、深度研究代理和加密货币分析代理等预构建示例，作为构建自定义代理的参考模板。