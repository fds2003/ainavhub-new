---
title: "SGDImagePrompt"
date: "2024-01-01 00:00:00+08:00"
description: 'SGDImagePrompt SGDImagePrompt  SGDImagePrompt '
slug: sgdimageprompt-stable-diffusion-clip
tags:
- sgdimageprompt
- requirements.txt
- eof
- actual
- install
draft: false
related_tools:
- make-your-anchor
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
---

## SGDImagePrompt

## SGDImagePrompt 简介

SGDImagePrompt 是一种无需训练的方法，用于通过图像提示Stable Diffusion模型。该方法利用了文本编码器已经通过CLIP训练与图像分布对齐这一事实。通过这一见解，可以对提示嵌入进行梯度下降优化，利用其与CLIP图像嵌入的对齐作为损失函数。

## 安装 🛠


pip install -r requirements.txt


## 推理 🚀

参考提供的notebook进行使用。

## 设置选项

以下是 `optimize_chunk` 和 `optimize_prompt` 函数的部分设置选项：

* `anchor_factor`: 高值将更好地保留原始提示
* `use_negative_prompt`: 是否同时优化负面提示
* `steps`: 优化步骤
* `lr`: 学习率
* `optimizer`: 使用的优化器
* `actual_eof`: 用于CLIP损失的token，通常为提示长度之外的一个token位置，如果为False，则为最终的token
* `clip_num`: 对于SDXL，选择使用vitl14或open-clip vitg的视觉编码器
* `lr_penalty`: 如果发现损失增加，减少学习率的量
* `modality_gap_embed`: 尝试缩小CLIP的模态间隙，这涉及创建CLIP图像嵌入和CLIP文本嵌入的均值，这两者的差异将被提供
* `isolate_subject`: 通过注意力掩码隔离主题，掩码由rembg背景移除估算


## 使用场景

SGDImagePrompt 主要用于生成高质量的图像提示，尤其是在没有大量数据训练模型的情况下。其具体应用场景包括但不限于以下几种：

1. **艺术创作** ：艺术家可以通过输入简单的文字提示和参考图像，生成艺术作品。
2. **广告设计** ：设计人员通过输入产品描述和图像，通过优化生成具有创意性的广告图像。
3. **游戏开发** ：游戏开发者可以通过输入角色描述和参考图像，生成角色原型和场景设计。
4. **学术研究** ：研究人员可以利用该工具进行图像生成相关的实验和探索。