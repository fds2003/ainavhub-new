---
title: "Seed-Thinking-v1.5"
date: "2024-01-01 00:00:00+08:00"
description: 'Seed-Thinking-v1.5 Seed-Thinking-v1.5  Seed-Thinking-v1.5 '
slug: seed-thinking-v1.5-stem-aime-codeforces-gpqa
tags:
- seed-thinking-v1.5
- beyondaime
- codeforces
- stem
- gpqa
draft: false
related_tools:
- seed-thinking-v1.5
- stock analysis system
- awesome ai system prompts
- hospital_multiagent_system
- n8n autoscaling system
---

## Seed-Thinking-v1.5

**Seed-Thinking-v1.5 简介:**

Seed-Thinking-v1.5 是一个使用强化学习训练的先进推理模型，其核心特点是在给出答案前先进行充分的思考，从而提升了在各种基准测试中的表现。

**性能指标:**

* 在 STEM (科学、技术、工程、数学) 和编程方面表现出色：
* AIME 2024: 86.7
* Codeforces: 55.0
* GPQA: 77.3
* 在非推理任务中也展现出良好的泛化能力，胜过 DeepSeek R1 8%的胜率。
* 采用 Mixture-of-Experts (MoE) 架构，模型相对较小，激活参数为 200 亿个，总参数为 2000 亿个。
* 提供两个内部基准测试集 BeyondAIME 和 Codeforces，以促进通用推理研究。


**主要功能:**

Seed-Thinking-v1.5 的核心能力在于其改进的推理能力，这使得它在需要逻辑分析和问题解决的场景中特别有用。

**使用场景:**

根据文档中的性能测试结果，Seed-Thinking-v1.5 适用于以下领域：

1. **数学问题解决:** 在数学竞赛问题 (AIME) 和更高级的数学推理方面表现出色，适合用于数学建模、理论研究等。

2. **科学问题解决:** 在 GPQA (通用问题回答) 等科学相关问题中表现良好，可用于科学研究、知识检索、数据分析等领域。

3. **代码生成与问题解决:** 在 Codeforces 编程竞赛和 LiveCodeBench 等基准测试中表现出色，表明其具有很强的代码生成、调试和修复能力，适合用于软件开发、代码自动化、智能编程辅助等。

4. **逻辑推理:** 在 ARC-AGI (抽象推理语料库) 上取得相对较好的成绩，这意味着它可以用于解决需要抽象思维和逻辑判断的问题。

5. **通用知识问答:** 虽然在 SimpleQA 基准测试中表现不突出，但在 IFEval 等指令跟随方面表现较好，表明它在 general instruction following task 上有潜在应用价值，可以用于知识问答、信息检索、智能助手等。


总而言之，Seed-Thinking-v1.5 适合应用于需要高度推理能力，并且对结果准确性有较高要求的场景，例如科研、教育、以及需要复杂问题解决的行业应用。