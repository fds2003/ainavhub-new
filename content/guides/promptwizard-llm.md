---
title: "PromptWizard"
date: "2024-01-01 00:00:00+08:00"
description: 'PromptWizard PromptWizard  PromptWizard '
slug: promptwizard-llm
tags:
- const
- cot
- gitalk
- llm
- promptwizard
draft: false
related_tools:
- graph-constrained reasoning
- picotron
- rllm
- onefilellm
- llmanager
---

## PromptWizard

**PromptWizard 简介**

PromptWizard 是一个离散的提示优化框架，它采用自我演化机制，使语言模型（LLM）能够生成、评估和改进自己的提示和示例，通过迭代反馈和综合，不断提高任务性能。这种自适应方法能够实现更全面的优化，同时改进任务指令和上下文学习示例。

**主要特点：**

* **反馈驱动的优化** ：LLM 生成、评估和改进自身的提示及示例，确保不断的改进。
* **强大而多样的示例** ：生成的合成示例具有鲁棒性和多样性，以支持更好的任务理解。
* **自生成的思维链（CoT）** ：结合正面、负面及合成示例，帮助提升推理能力。


**使用场景** PromptWizard 可以应用于以下几种场景：

1. **无示例提示优化** ：仅通过优化提示指令来提高任务性能。
2. **生成合成示例** ：使用合成示例优化提示，以增强任务的有效性。
3. **利用训练数据优化提示** ：通过现有的训练数据来优化提示，使之更扎实。


通过这些场景，用户能够根据具体需要定制提示优化的流程，以实现最佳的模型表现。无论是在教育、文本生成、还是企业的客户服务领域，PromptWizard 的灵活性和自适应能力都为用户提供了强大的支持。