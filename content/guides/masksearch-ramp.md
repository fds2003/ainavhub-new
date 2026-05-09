---
title: "MaskSearch"
date: "2024-01-01 00:00:00+08:00"
description: MaskSearch MaskSearch  RAMP
slug: masksearch-ramp
tags:
- ramp
- qa
- zerosearch
- search-r1
- masksearch
draft: false
related_tools:
- qagent
- qanything
- zerosearch
- search-r1
- masksearch
---

## MaskSearch

MaskSearch 是一个新颖的预训练框架，旨在增强智能体的通用搜索能力。它引入了检索增强掩码预测（RAMP）任务，模型通过学习利用搜索工具填充大量的预训练数据中的掩码跨度，从而获得大型语言模型的通用检索和推理能力。该项目结合了基于代理和基于蒸馏的方法来生成训练数据，从一个由规划器、重写器和观察器组成的多代理系统开始，然后是一个自我演进的教师模型。主要功能和特点可以概括如下：

1. **通用搜索能力增强：** 专注于提升智能体在各种搜索任务中的表现，尤其是在领域内和跨领域的下游任务中。
2. **检索增强掩码预测（RAMP）任务：** 模型通过利用搜索工具，学习填充大型预训练数据中的掩码部分，从而获取检索和推理能力。
3. **多代理数据生成：** 使用由规划器、重写器和观察器组成的多代理系统，以及自我演进的教师模型，生成高质量的训练数据。
4. **与现有工具和框架的集成：** 提供了与 LLaMA-Factory、Search-R1 和 ZeroSearch 等现有工具和框架集成的方法，方便用户进行微调和强化学习训练。
5. **数据生成和预训练流程：** 提供了详细的步骤，包括使用维基百科生成 RAMP QA 数据，构建 CoT 轨迹用于 SFT 数据，以及使用生成的数据进行 SFT 和 RL 训练。