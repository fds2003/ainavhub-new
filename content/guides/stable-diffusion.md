---
title: "Stable Diffusion"
date: "2024-01-01 00:00:00+08:00"
description: 'Stable Diffusion  Stable Diffusion '
slug: stable-diffusion
tags:
- gpu
- clip
- x512
- diffusion
- stable
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- funclip
- viral-clips-crew
- diffusion toolkit
---

#### 产品介绍

![Image](/images/screenshots/stable-diffusion.png)

#### [Stable Diffusion](<https://github.com/CompVis/stable-diffusion>)

文本到图像扩散模型

#### 特性

`Stable Diffusion `是一种潜在的文本到图像扩散模型。由于`Stability AI`的慷慨计算捐赠和`LAION`的支持，我们能够对`LAION-5B`数据库的`512x512`图像的子集进行潜在扩散模型的训练。

类似于`Google`的`Imagen`，该模型使用一个冻结的`CLIP ViT-L/14`文本编码器来根据文本提示对模型进行调节。具有`860M UNet`和`123M`文本编码器，该模型相对轻量，并且可以在至少具有`10GB VRAM`的`GPU`上运行。请参见下面的本节以及模型卡片。