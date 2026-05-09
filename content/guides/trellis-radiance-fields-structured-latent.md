---
title: "TRELLIS"
date: "2024-01-01 00:00:00+08:00"
description: TRELLIS TRELLIS Radiance Fields
slug: trellis-radiance-fields-structured-latent
tags:
- structured
- fields
- radiance
- transformer
- latent
draft: false
related_tools:
- structured outputs sample apps
- structured outputs in the api
- dia
- ktransformers
- transformer debugger
---

## TRELLIS

TRELLIS是一个大型的3D资产生成模型，能够根据文本或图像提示生成高质量的3D资产，包括辐射场（Radiance Fields）、3D高斯模型和网格等多种格式。TRELLIS的核心是统一的结构化潜在（Structured LATent，SLAT）表示，可以将生成结果解码到不同的输出格式，使用专门针对SLAT设计的矫正流Transformer作为强大的基础架构。该模型在一个包含50万个多样化物体的大型3D资产数据集上进行了预训练，参数量高达20亿，显著超越了目前的同类方法。

##### 使用场景

TRELLIS适用于多种场景，包括但不限于：

1. **游戏开发** ：开发者可以使用TRELLIS快速生成游戏中的3D物体和环境，以加速游戏设计流程。
2. **虚拟现实与增强现实** ：TRELLIS可以用于创建沉浸式体验中的3D场景和交互式对象。
3. **产品设计与可视化** ：设计师可以利用TRELLIS生成产品原型以便更好地展示和验证设计理念。
4. **内容创作** ：艺术家和内容创作者可以借助TRELLIS生成不同风格的3D艺术作品，丰富他们的创作内容。
5. **教育与训练** ：在教育场景中，TRELLIS可以帮助生成真实感的3D模型，用于教学和模拟训练。


TRELLIS不仅支持高质量的3D生成，还具有灵活的编辑功能，使得用户可以轻松调整生成的3D资产，满足不同需求。