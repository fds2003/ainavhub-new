---
title: "aurasr aurasr AuraSR"
date: "2024-01-01 00:00:00+08:00"
description: aurasr AuraSR GigaGAN
slug: aurasr-gigagan
tags:
- id
- clientsecret
- repo
- github
- clientid
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## aurasr

AuraSR是一个开源重现GigaGAN图像提升的模型，拥有600M参数。它可以将低分辨率图像提升至原图像的4倍，并且可以多次应用。该模型特别适用于通过文本生成图像的模型上，并且在分辨率和提升倍数上没有限制。相比于基于迭代过程的扩散模型，AuraSR使用生成对抗网络（GAN）技术，通过一次前向传播就能完成图像生成和提升，速度要快很多。例如，它能够在0.25秒内生成1024像素的图像（提升4倍）。

该模型在完全开源的许可下发布，致力于广大开发者和研究人员的使用。

github:https://github.com/fal-ai/aura-sr