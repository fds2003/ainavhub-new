---
title: "FIFO-Diffusion"
date: "2024-01-01 00:00:00+08:00"
description: FIFO-Diffusion FIFO-Diffusion FIFO-Diffusion
slug: fifo-diffusion
tags:
- zeroscope
- videocrafter
- fifo-diffusion
- open-sora-plan
draft: false
related_tools:
- fifo-diffusion
- open-sora
- sora
---

## FIFO-Diffusion

FIFO-Diffusion是一种基于预训练扩散模型的文本条件视频生成方法，这种方法无需进行额外的训练即可生成无限长的视频。通过迭代进行对角去噪操作，FIFO-Diffusion能够处理一系列连续帧，并在噪声水平逐步增加的队列中进行处理，最终在队列头部得到完全去噪的帧，同时在尾部引入新的随机噪声帧。

对角去噪是一把双刃剑，虽然接近尾部的帧可以通过前向引用获得更清晰的帧，但这种策略会在训练和推理时引入差异。为了减少这种差异，FIFO-Diffusion引入了潜在分区技术和前瞻去噪机制，前者减小训练与推理间的差距，后者利用前向引用的优势。

该方法被应用于多个强基线模型如VideoCrafter、Open-Sora-Plan和zeroscope，用于生成高质量的长视频。从实验结果来看，FIFO-Diffusion在不需要调优的情况下，能够生成具有高时间一致性和视觉质量的视频，相比传统的训练基础方法和其他无训练方法表现更为优越。

文章还进行了消融研究，逐一分析了FIFO-Diffusion中的各个组件（对角去噪、潜在分区和前瞻去噪）的作用。结果显示，潜在分区显著提高了视频的质量和时间一致性，而前瞻去噪进一步减轻了闪烁等视觉伪影。

实验对比部分表明，相较于训练型自回归法（如LaVie + SEINE）和其他无训练方法（如FreeNoise和Gen-L-Video），FIFO-Diffusion展示了更好的连续性、视觉质量和运动一致性。