---
title: "SE-Agent"
date: "2024-01-01 00:00:00+08:00"
description: SE-Agent SE-Agent LLM
slug: se-agent-llm-revision
tags:
- swe-agent
- const
- verified
- gitalk
- revision
draft: false
related_tools:
- swe-agent
- agent
- graph-constrained reasoning
- se-agent
- rllm
---

## SE-Agent

SE-Agent是一个创新的自进化框架，专注于通过轨迹级进化机制，显著提升基于大型语言模型（LLM）的智能体在复杂多步推理任务中的表现。其核心优势在于打破了单一推理路径的认知限制，通过“修订”（Revision）实现失败驱动的策略生成和深层自我反思，通过“重组”（Recombination）智能地结合多条轨迹的优势以合成新方案并产生协同效应，以及通过“精炼”（Refinement）优化有前景的轨迹、消除冗余并融入风险感知。这些独特的自进化操作使得SE-Agent能够有效扩展搜索空间并避免局部最优，从而在SWE-bench Verified基准测试中达到了80%的领先性能，并为各类LLM带来高达112%的显著性能提升。该框架采用模块化架构，包括自进化核心、SWE-Agent基础层和高效的轨迹系统，支持压缩存储、跨迭代知识积累以及灵活的自定义操作符开发。