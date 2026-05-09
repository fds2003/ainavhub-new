---
title: "ARC-AGI"
date: "2024-01-01 00:00:00+08:00"
description: ARC-AGI ARC-AGI Abstraction and Reasoning Corpus for Artificial General
  Intelligence
slug: arc-agi-abstraction-reasoning-corpus-artificial
tags:
- abstraction
- corpus
- ar
- artificial
- general
draft: false
related_tools:
- archon
- ii-researcher
- ai-researcher
- cloudflare agents
- research
---

## ARC-AGI

ARC-AGI（Abstraction and Reasoning Corpus for Artificial General Intelligence）是一个用于测试人工通用智能的基准数据集和工具平台。它可以被看作是一个程序合成基准或心理测量智力测试，目标是在模拟人类流体智力方面对人类和人工智能系统进行评估。

ARC-AGI数据集包括两部分内容：训练任务和评估任务，各有400个任务。这些任务以JSON格式存储，每个任务包括多个输入输出的示例对（训练对）和测试对。每个“对”都包含一个输入网格和一个对应的输出网格，这些网格由矩形的整数矩阵构成，整数值范围从0到9。任务要求测试者在3次尝试内构建正确的输出网格。

使用场景包括但不限于：

1. **人工智能研究** ：可以用于开发和评估新的人工智能算法，挑战AI在通用认知任务上的表现。
2. **心理学和认知科学** ：通过对比人类和AI在这些任务上的表现，深入研究人类认知与智能。
3. **教育和培训** ：作为一种工具来训练和提高逻辑推理与问题解决能力。


为了便于用户解决这些任务，该平台还提供了一个基于浏览器的交互界面，允许用户手动尝试解决任务，界面上允许用户调整网格大小、选择颜色、复制粘贴等操作，并提供提交答案的功能。

更多详细信息可以参考论文 [On the Measure of Intelligence](<https://arxiv.org/abs/1911.01547>)。