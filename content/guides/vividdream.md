---
title: "VividDream"
date: "2024-01-01 00:00:00+08:00"
description: VividDream VividDream  VividDrea...
slug: vividdream
tags:
- id
- vividdream
- const
- gitalk
- clientsecret
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## VividDream

VividDream 是一种从单一输入图像或文本提示生成具有环境动态的可探索4D场景的方法。该方法首先通过迭代补画和几何合并将输入图像扩展为静态3D点云。接着，使用视频扩散模型生成一系列动画视频，并使用质量优化技术，以静态3D场景的渲染为条件进行控制。为了优化4D场景表示，VividDream 使用动画视频集，利用每个视频的运动嵌入和可见性掩码来减轻不一致性。最终生成的4D场景允许用户自由探索3D场景及其合理的环境动态。实验结果表明，VividDream 能够基于各种真实图像和文本提示为用户提供引人入胜的4D体验。