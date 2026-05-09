---
title: "Wan2.2"
date: "2024-01-01 00:00:00+08:00"
description: Wan2.2 Wan2.2，：（MoE），，。（T2V）、（I2V）-...
slug: wan2.2-moe
tags:
- gpu
- clientsecret
- t2v
- ti2v
- wan2.2-vae
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- wan2.2
- qwen1.5-moe
- graph-constrained reasoning
---

## Wan2.2

Wan2.2作为一个开放且先进的大规模视频生成模型，其核心功能和亮点体现在：它创新性地采用了高效的混合专家（MoE）架构，在不增加计算成本的前提下显著提升了模型容量，从而能够生成具备电影级别美学和复杂运动表现的高质量视频。项目中包含专门用于文本到视频（T2V）、图像到视频（I2V）以及高效混合文本-图像到视频（TI2V）的模型，其中TI2V-5B模型尤其突出，它通过高压缩率的Wan2.2-VAE，实现了在消费级GPU上以720P@24fps分辨率快速生成视频，是目前同类模型中的佼佼者。Wan2.2还支持通过AI模型进行智能提示词扩展，以进一步丰富生成视频的细节；并通过FSDP和DeepSpeed Ulysses技术优化了多GPU推理效率。该模型已集成到ComfyUI和Diffusers等主流平台，并在性能对比中展现出超越领先商业模型的卓越能力，全面满足工业界和学术界对先进视频生成技术的需求。