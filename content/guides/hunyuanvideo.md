---
title: "HunyuanVideo"
date: "2024-01-01 00:00:00+08:00"
description: HunyuanVideo HunyuanVideo HunyuanVideo
slug: hunyuanvideo
tags:
- mllm
- transformer
- hunyuanvideo
- vae
draft: false
related_tools:
- ktransformers
- transformer debugger
- ssm-transformer
- hunyuanvideo-i2v
- hunyuanvideo-avatar
---

## HunyuanVideo

HunyuanVideo是一个开源的视频生成基础模型，旨在提供一种系统化的框架，用于大规模视频生成模型的训练。该模型具有超过130亿个参数，能够生成高质量的视频并在文本与视频之间实现良好的对齐。HunyuanVideo的架构集成了多项关键贡献，包括数据收集图、图像与视频联合模型训练，以及高效的基础设施，以支持大规模模型的训练和推理。

##### HunyuanVideo的主要功能特点：

1. **统一的图像和视频生成架构** ：采用Transformer设计，通过双流与单流混合模型提高视频生成性能。
2. **多模态大语言模型（MLLM）文本编码器** ：使用经过训练的MLLM作为文本编码器，增强了图像与文本的对齐性与复杂推理能力。
3. **3D变分自编码器（3D VAE）** ：将视频和图像压缩到一个紧凑的潜在空间，支持更高质量的生成。
4. **提示重写功能** ：根据用户提供的提示，调整内容以提高模型理解用户意图的准确性。


##### 使用场景：

* **电影与动画制作** ：用于生成特定场景或角色的动态视频。
* **广告制作** ：根据市场营销需求快速生成与品牌相关的视听内容。
* **教育与培训** ：制作教程视频，帮助学生理解复杂概念或操作。
* **游戏开发** ：提供游戏中的过场动画或宣传视频。
* **社交媒体内容创作** ：为个人创作者或企业提供动态视频生成工具以增强在线影响力。


HunyuanVideo希望通过开放源码和模型权重的发布，缩小开源与闭源视频生成模型之间的差距，鼓励社区进行多样化的实验与探索。