---
title: "Light-R1 Light-R1 Light-R1-32B"
date: "2024-01-01 00:00:00+08:00"
description: 'Light-R1 Light-R1-32B  Qwen2.5-32B-Instruct '
slug: light-r1-light-r1-32b-qwen2.5-32b-instruct-aime24-aime25
tags:
- dpo
- think
- deepseek-r1-distill-qwen-32b
- aime25
- sft
draft: false
related_tools:
- seed-thinking-v1.5
- rex-thinker
- mirothinker
- thinkchain
- thinking claude
---

## Light-R1

Light-R1-32B 是一个基于 Qwen2.5-32B-Instruct 模型，经过特别训练，专门解决数学问题的语言模型。 它的主要特点和亮点包括：

* **卓越的数学解题能力:** 在 AIME24 和 AIME25 等数学竞赛中取得了比 DeepSeek-R1-Distill-Qwen-32B 更好的成绩，尤其是在从零开始（即使用没有长链思维能力的模型）训练的情况下。
* **低成本和可复现性:** 训练成本低廉，仅需约 1000 美元，并且公开了所有训练数据、代码和训练流程，便于复现和进一步研究。
* **课程学习 SFT 和 DPO:** 采用了课程学习的方式，通过监督微调（SFT）和直接偏好优化（DPO）逐步提升模型性能。
* **着重思维链：**训练过程中强化模型的思考能力，通过在提示词中强制加入 `<think>` 提示词，来鼓励模型产生推理过程。
* **数据清洗:** 对训练数据进行了彻底的清洗，以避免数据污染影响评测的公正性。


**主要应用场景：**

* **数学问题求解:** 解决各种数学问题，特别是需要复杂推理的竞赛题目。
* **数学教育辅助:** 辅助学生学习数学，提供解题思路和答案验证。
* **数学研究工具:** 为数学研究人员提供强大的计算和推理工具。
* **长链思维能力研究:** 作为一个研究案例，供研究人员参考如何从零开始训练具有长链思维能力的模型。


总的来说，Light-R1-32B 在有限的资源下，成功训练出一个擅长数学解题的语言模型，并且公开了所有训练细节，为社区提供了一个有价值的参考，旨在推动成本更低、更易获得的AI模型发展。