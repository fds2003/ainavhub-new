---
title: "AgentFlow"
date: "2024-01-01 00:00:00+08:00"
description: AgentFlow AgentFlow Planner
slug: agentflow-planner-executor-verifier-ge
tags:
- policy
- planner
- optimization
- verifier
- gpt-4o
draft: false
related_tools:
- oli
- awesome gpt-4o images
- sharegpt-4o-image
- gpt-4o ghibli at home
- 7 chatgpt-4o prompts
---

## AgentFlow

AgentFlow是一个可训练、工具集成的智能体框架，旨在解决现有工具增强推理方法在可扩展性和泛化能力上的局限。其核心是一个模块化智能体系统，由规划器（Planner）、执行器（Executor）、验证器（Verifier）和生成器（Generator）四个专用模块组成，这些模块通过不断演进的记忆和集成的工具进行多轮协调工作。该项目的一大亮点是引入了Flow-based Group Refined Policy Optimization (Flow-GRPO) 算法，实现了对系统内部规划器智能体的“流内（in-the-flow）”在线优化，这对于长周期推理任务尤其有效。AgentFlow无缝集成了多种工具，包括基础生成、Python代码编写、Google搜索和维基百科搜索等。经过验证，该框架（以Qwen-2.5-7B-Instruct为骨干）在10个基准测试中表现优异，在搜索、智能体推理、数学和科学等领域均有显著提升，甚至超越了如GPT-4o等参数量更大的专有模型，展现出增强的规划决策能力和工具调用可靠性。