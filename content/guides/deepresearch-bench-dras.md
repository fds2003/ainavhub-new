---
title: "DeepResearch Bench DeepResearch Bench"
date: "2024-01-01 00:00:00+08:00"
description: DeepResearch Bench  DeepResearch Bench
slug: deepresearch-bench-dras
tags:
- framework
- criteria-driven
- abundance
- dras
- adaptive
draft: false
related_tools:
- pocket flow framework
- self-operating computer framework - 一个用多模型能够操作计算机的框架。
- microagent framework
- livemcpbench
- autocodebench
---

## DeepResearch Bench

该项目名为DeepResearch Bench，旨在为深度研究代理（DRAs）提供一个全面的评估基准。

以下是该项目的主要功能、核心要点和关键特性：

1. **综合性基准：** 提供100个博士级别的研究任务，涵盖22个不同的领域，包括科学技术、金融商业、软件以及其他领域。这些任务经过领域专家精心设计，旨在评估DRAs的深度研究能力。

2. **真实需求分析：** 通过分析来自实际用户的大量匿名网络搜索查询，确保基准任务与现实世界的研究需求保持一致。

3. **专家任务收集：** 由博士级别的专家和高级从业人员设计任务，并经过严格的人工筛选，保证任务的质量、清晰度、真实性和挑战性。

4. **双重评估方法：** 引入两种互补的评估方法，全面评估深度研究代理：

* **RACE（Reference-based Adaptive Criteria-driven Evaluation）：** 基于参考答案的自适应标准驱动评估，通过动态生成的任务特定评估标准，评估报告的生成质量，关注报告的全面性、深度、指令遵循和可读性。
* **FACT（Framework for Factual Abundance and Citation Trustworthiness）：** 用于评估信息检索和可信度，通过提取报告中的事实性陈述和引用的来源，并验证这些来源是否支持陈述，来评估模型的信息检索和依据能力。
5. **性能评估结果：** 提供不同模型架构和方法在RACE和FACT评估指标上的详细性能比较，揭示了深度研究代理和传统LLM的性能差异。

6. **易于使用的评估框架：** 提供清晰的项目结构、安装指南和快速开始流程，方便用户使用自己的模型进行评估。同时，支持自定义LLM接口，方便集成不同的模型。