---
title: "Muscle Memory Muscle Memory"
date: "2024-01-01 00:00:00+08:00"
description: 'Muscle Memory  Muscle Memory: Muscle Memory '
slug: muscle-memory-trajectory-llm
tags:
- agent
- muscle
- trajectory
- llm
- api
draft: false
related_tools:
- oliva multi-agent assistant
- openai agents sdk
- computer using agent sample app
- cloudflare agents
- theoremexplainagent
---

## Muscle Memory

**总结性介绍 Muscle Memory:**

Muscle Memory 是一个为AI代理设计的行为缓存工具。它的核心思想是记录AI代理在解决任务时的工具调用模式（trajectory），并在再次遇到相同任务时，直接重放这些已学习的轨迹，避免每次都调用大型语言模型(LLM)，从而提高速度、降低成本并减少输出结果的变异性。如果遇到边缘情况，则会回退到原始的agent模式。它并不是另一个agent框架，而是可以让你将现有的agent集成进去，重点在于缓存验证，通过定义Check来判断在什么情况下可以安全地重用缓存的工具调用序列。

**Muscle Memory 的使用场景:**

Muscle Memory 适用于以下场景：

* **重复性任务:** 当AI代理需要多次执行相同或相似的任务时，例如：根据用户输入来查找数据库或调用API接口，通过Muscle Memory 可以避免重复调用LLM，从而节省计算资源。
* **需要固定行为模式的任务:** 对于某些任务，希望AI代理的行为模式保持一致，避免每次调用LLM 结果的随机性，通过Muscle Memory，可以保证AI代理在相同任务下执行相同的工具调用序列。
* **对速度和成本敏感的任务:** 在需要快速响应或降低成本的场景下，Muscle Memory 可以通过重用缓存的工具调用序列，显著提高响应速度并降低 token 消耗。
* **已验证过的安全操作:** 在一些已验证过的安全操作的情况下，可以将其添加到缓存中，避免LLM生成错误指令的可能性。