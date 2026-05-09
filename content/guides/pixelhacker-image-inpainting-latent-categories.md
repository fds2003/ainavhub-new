---
title: "PixelHacker"
date: "2024-01-01 00:00:00+08:00"
description: PixelHacker PixelHacker  Image Inpainting
slug: pixelhacker-image-inpainting-latent-categories
tags:
- pixelhacker
- inpainting
- sota
- celeba-hq
- fid
draft: false
related_tools:
- pixelhacker
- pi
- pai
- gemini 2.0 flash image generation and editing
- 4o-image-generation
---

## PixelHacker

PixelHacker 是一个图像修复（Image Inpainting）模型，它通过名为“潜在类别指导”（Latent Categories Guidance，LCG）的新方法，在结构和语义一致性方面取得了显著的成果。该模型基于扩散模型，在多个自然场景（Places2）和人脸（CelebA-HQ, FFHQ）数据集上取得了领先的性能 (SOTA)。

**PixelHacker 的关键特点：**

* **潜在类别指导 (LCG)：** 简单但有效的图像修复范式，能够保持更好的结构和语义一致性。
* **SOTA 性能：** 在 Places2、CelebA-HQ 和 FFHQ 数据集上，PixelHacker 在 FID 和 LPIPS 等指标上超越了现有最佳模型。


**PixelHacker 的使用场景：**

由于其在图像修复方面的出色性能，PixelHacker 适用于以下场景：

* **自然场景修复：** 可以用于修复自然风景照片中缺失或损坏的部分，例如移除不需要的物体、修复图像中的裂缝等。
* **人脸修复：** 可以用于修复人脸照片中缺失或损坏的部分，例如修复被遮挡的面部区域、去除瑕疵等。
* **图像编辑：** 可以作为图像编辑工具的一部分，用于更高级的图像修复和生成任务。
* **艺术创作：** 可以用于生成具有创意性的图像，例如通过在图像中添加缺失的元素来创造新的视觉效果。


简单来说，PixelHacker 是一个强大的图像修复工具，适用于各种需要修复图像缺失或损坏部分的场景，特别是在需要高度结构和语义一致性的任务中表现出色。