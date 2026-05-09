---
title: "Kwai Keye-VL Kwai Keye-VL Kwai Keye-VL"
date: "2024-01-01 00:00:00+08:00"
description: Kwai Keye-VL Kwai Keye-VL Kwai Keye
slug: kwai-keye-vl-keye-qwen3-8b-siglip
tags:
- const
- cot
- gitalk
- qwen3-8b
- clientid
draft: false
related_tools:
- graph-constrained reasoning
- picotron
- qwen3
- kwai keye-vl
- comfyui-kwaikolorswrapper
---

## Kwai Keye-VL

Kwai Keye-VL是由快手Kwai Keye团队推出的一个先进的8B多模态大语言模型，其核心优势在于卓越的视频理解、视觉感知和复杂推理能力。该模型以Qwen3-8B为基础，并集成了SigLIP初始化的视觉编码器，支持原生动态分辨率和3D RoPE技术，从而能统一处理文本、图像和视频信息，并精准感知视频中的时序变化。其训练策略尤为先进，采用了一个四阶段的渐进式预训练流程，侧重于大规模高质量多模态数据的对齐与多任务学习，并通过退火训练和模型融合优化；在后训练阶段，Kwai Keye-VL更是创新性地引入了混合模式思维链（CoT）和多思考模式强化学习（RL），显著提升了模型在复杂多模态感知、推理以及“图文思考”（Think-with-Image，包含与外部沙盒代码执行交互）任务上的表现。实测结果表明，Kwai Keye-VL在视频理解和需要复杂逻辑与数学解题能力的评估基准上，均展现出超越同等规模顶尖模型的领先性能。