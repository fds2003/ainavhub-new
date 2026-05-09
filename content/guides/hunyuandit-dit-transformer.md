---
title: "HunyuanDiT HunyuanDiT"
date: "2024-01-01 00:00:00+08:00"
description: HunyuanDiT  HunyuanDiT
slug: hunyuandit-dit-transformer
tags:
- dit
- hunyuandit
- transformer
- vae
draft: false
related_tools:
- gemini 2.0 flash image generation and editing
- easyedit
- gpt-image-edit
- reddit ai trend reports
- nano banana ai image editor
---

## HunyuanDiT

**腾讯混元文生图模型发布1.1版本** ,同时发布了训练代码。

HunyuanDiT（混元DiT）是腾讯发布的一个多分辨率扩散Transformer，具备精细化中文理解能力。HunyuanDiT通过巧妙设计的变换器结构、文本编码器和位置编码，以及从零开始构建的数据管道，实现了对中文和英文文本的精细化理解与图像生成。该模型支持多回合的多模态对话，能够根据上下文生成和优化图像。

##### 主要特点

* **中英双语架构** ：利用预训练的变分自编码器（VAE）将图像压缩到低维潜在空间，并使用变换器参数化以训练扩散模型。
* **多回合文本到图像生成** ：支持多轮用户对话，逐步实现用户的创意。


##### 使用场景

1. **文本到图像生成** ：适用于用户通过文本输入生成图像的应用场景，支持中文与英文文本。
2. **多模态交互对话** ：支持多轮对话情况下的文本到图像生成与优化。
3. **图像创意设计** ：在绘画、设计等需要生成图像的领域，根据用户的说明生成符合需求的图片。
4. **视觉数据增强** ：在图像生成和编辑过程中，帮助进行数据增强和优化。
5. **中文处理应用** ：由于其精细化的中文理解能力，特别适用于需要中文文本和视觉数据结合处理的应用。


HunyuanDiT通过创新的模型设计和有效的数据管道，显著提升了中文文本到图像生成的效果，在多项评测中表现优异。

模型地址：https://huggingface.co/Tencent-Hunyuan/HunyuanDiT-v1.1