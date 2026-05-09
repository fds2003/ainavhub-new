---
title: "FineControlNet"
date: "2024-01-01 00:00:00+08:00"
description: FineControlNet FineControlNet Pytorch
slug: finecontrolnet-pytorch
tags:
- id
- clientsecret
- finecontrolnet
- clientid
- m-lsd
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

#### FineControlNet

FineControlNet是一个用于图像生成的官方Pytorch实现，旨在提供细粒度的文本控制。用户可以通过空间控制输入（如2D人体姿势）和特定实例的文本描述来控制图像实例的形式和纹理。FineControlNet支持简单的线条绘制或复杂的人体姿势作为空间输入，并确保实例与环境之间的自然互动和视觉协调。该工具借鉴了Stable Diffusion的质量和泛化能力，并提供了更多的控制选项。FineControlNet扩展了ControlNet1.1的环境，支持文本细粒度控制以及OpenPose姿势、Canny边缘、M-LSD线条、HED边缘和草图等几何控制。