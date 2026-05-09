---
title: "LMM-R1"
date: "2024-01-01 00:00:00+08:00"
description: 'LMM-R1 LMM-R1  OpenRLHF '
slug: lmm-r1-openrlhf-lmm-deepseek-r1-ppo
tags:
- deepseek-r1
- lora
- openrlhf
- rloo
- qwen2.5-vl
draft: false
related_tools:
- train-deepseek-r1
- deepseek-r1
- index-tts-lora
- comfyui-b-lora
- qwen2
---

## LMM-R1

LMM-R1 是 OpenRLHF 项目的一个分支，旨在为多模态任务提供高性能的 LMM 强化学习基础设施，以便能够重现 DeepSeek-R1 的成果。LMM-R1 支持使用 PPO、REINFORCE++ 和 RLOO 算法进行 LMM 训练，并相较于 R1-V 实现了 4.7 倍的速度提升（RLOO）。

##### 主要特点：

1. **多模型支持** ：LMM-R1 支持多种模型的训练，包括 Qwen2-VL 和 Qwen2.5-VL。
2. **高效训练** ：基于 Ray 的分布式 PPO 和 REINFORCE++ 及 RLOO 实现，能够加速训练过程。
3. **丰富功能** ：支持 RLHF 完全微调、远程奖励模型、多种奖励模型、FlashAttention2、QLoRA 以及 LoRA 等多种功能。
4. **数据准备** ：支持多模态提示数据集，兼容 OpenAI 的消息格式。


##### 使用场景：

* **教育和研究** ：可用于开发和测试多模态任务的模型，例如在数学和图像识别领域的应用。
* **实际应用** ：适用于需要深度推理和多模态理解的工业场景，如自动化问答系统、智能助手、数据分析等。
* **高效模型训练** ：对大型模型（如超70亿参数的模型）进行高效的微调和优化，适合大规模部署的需求。


LMM-R1 结合了最新的强化学习技术与多模态处理能力，是进行深度学习研究和应用开发的优秀选项。