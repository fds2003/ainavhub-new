---
title: "EvaLearn"
date: "2024-01-01 00:00:00+08:00"
description: EvaLearn EvaLearn LLMs
slug: evalearn-llms
tags:
- const
- sequentialeval
- gitalk
- clientsecret
- evalearn
draft: false
related_tools:
- graph-constrained reasoning
- lms
- screen to action using llms
- llms进行函数调用和数据提取的技能
---

## EvaLearn

EvaLearn是一个开创性的基准测试项目，其核心目标是通过序列问题解决任务来量化大型语言模型（LLMs）的学习能力和效率。该项目包含648个跨六种任务类型的挑战性问题，这些问题被精心组织成182个序列，每组序列专门用于一种任务类型，其独特之处在于要求模型顺序解决问题，从而利用从先前解决方案中获得的经验来提升表现，这与多数并行评估基准形成鲜明对比。EvaLearn的评估框架包括一个核心的序列评估工具及相应的问题和序列定义数据集。它提供了一套系统性的评估指标，用以衡量LLMs的性能，包括整体序列准确性、通过拟合准确度曲线斜率反映的学习速度、首次正确解决方案的平均位置、连续正确解决方案的平均数量以及排除初始问题后的“后热身”准确性，并支持按任务类型进行细致分析。项目主要通过`sequentialEval`函数实现其核心功能，能够加载数据并执行模型在序列任务上的评估。