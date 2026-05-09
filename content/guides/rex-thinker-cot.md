---
title: "Rex-Thinker"
date: "2024-01-01 00:00:00+08:00"
description: Rex-Thinker Rex-Thinker CoT
slug: rex-thinker-cot
tags:
- const
- cot
- grpo
- gitalk
- clientsecret
draft: false
related_tools:
- graph-constrained reasoning
- picotron
- simple_grpo
- local grpo training
- chatterbox tts
---

## Rex-Thinker

Rex-Thinker是一个专注于对象指代任务的创新模型，其核心优势在于引入了链式思考（CoT）推理机制，旨在解决传统方法的不可解释性和无法拒绝不匹配表达的局限性。该项目通过将对象指代问题重构为分阶段的推理任务，首先将指代表达式分解为可解释的子目标（规划），然后逐步评估每个候选对象并以Box Hints进行可视化（行动），最后汇总结果并决定是否给出最终预测或拒绝（总结）。Rex-Thinker基于QwenVL-2.5开发，并采用两阶段训练：首先通过GPT-4o生成的CoT轨迹进行监督微调，随后利用基于GRPO的强化学习进一步提升其推理准确性、泛化能力和拒绝能力。此外，项目还开源了HumanRef-CoT数据集，一个包含高质量分步推理标注的大规模数据集，为模型的CoT训练提供了关键支持，使得Rex-Thinker能够提供忠实、可解释且在域外场景中表现良好的预测。