---
title: "ResAdapter"
date: "2024-01-01 00:00:00+08:00"
description: ResAdapter ResAdapter SD
slug: resadapter-sd
tags:
- const
- ddefeac06598c65895743c01b9c180691d84c
- gitalk
- clientsecret
- controlnet
draft: false
related_tools:
- graph-constrained reasoning
- finecontrolnet
- controlnet++
- resadapter
- openai agents sdk
---

#### ResAdapter

ResAdapter是一种领域一致的分辨率适配器，旨在为扩散模型（例如SD和个性化模型）生成具有无限制分辨率和宽高比的图像。与其他多分辨率生成方法不同，ResAdapter直接生成具有动态分辨率的图像，这意味着它能够有效地进行推断，而无需重复去噪步骤和复杂的后处理操作，从而消除了额外的推断时间。ResAdapter还通过广泛的分辨率先验增强了其效果，而无需来自训练领域的任何风格信息。综合实验证明了ResAdapter与扩散模型在分辨率插值和输出方面的有效性。更广泛的实验表明，ResAdapter与其他模块（例如ControlNet、IP-Adapter和LCM-LoRA）兼容，能够生成具有灵活分辨率的图像，并且可以集成到其他多分辨率模型（例如ElasticDiffusion）中，以有效地生成更高分辨率的图像。