---
title: "SpikingBrain"
date: "2024-01-01 00:00:00+08:00"
description: SpikingBrain SpikingBrain MoE
slug: spikingbrain-moe
tags:
- gpu
- const
- gitalk
- clientsecret
- metax
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- graph-constrained reasoning
- dia
- nvidia-ingest
---

## SpikingBrain

SpikingBrain项目致力于开发受大脑机制启发的神经突触大模型，通过集成混合高效注意力、MoE模块和脉冲编码等架构创新，实现了在极少量数据（少于2%）上进行持续预训练，并能达到主流开源模型的性能水平。该项目的一大核心亮点是其卓越的效率表现，例如在4M令牌序列上实现超过100倍的TTFT（首字生成时间）加速，并通过微观层面的脉冲稀疏性（超过69%）与宏观层面的MoE稀疏性结合，为下一代神经形态芯片的设计提供了重要参考。同时，SpikingBrain提供了多版本模型（如HuggingFace、vLLM推理和W8ASpike量化版），并适配了非NVIDIA（MetaX）集群进行大规模训练和推理，其vLLM-HyMeta插件还支持vLLM框架在NVIDIA GPU上的高效推理，而W8ASpike则通过伪脉冲技术探索了低精度推理的潜力，旨在降低成本并推动脉冲神经网络（SNN）的研究。