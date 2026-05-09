---
title: "NUWA-XL"
date: "2024-01-01 00:00:00+08:00"
description: NUWA-XL NUWA-XL NUWA-XL
slug: nuwa-xl
tags:
- id
- const
- gitalk
- clientsecret
- nuwa-xl
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

#### NUWA-XL

NUWA-XL是一种新颖的扩散过程架构，用于生成极长视频。与目前大部分工作一次生成视频片段不同，NUWA-XL采用了“粗到细”的生成过程，可以在相同的粒度上并行生成视频。它应用了全局扩散模型来生成整个时间范围内的关键帧，然后使用局部扩散模型递归地填充相邻帧之间的内容。这种简单而有效的策略使得我们可以直接在长视频上进行训练，减少了训练和推断之间的差距，并且可以并行生成所有片段。NUWA-XL不仅能生成具有全局和局部连贯性的高质量长视频，而且在生成1024帧时，与相同硬件设置下将平均推断时间从7.55分钟降低到26秒（减少了94.26%）。