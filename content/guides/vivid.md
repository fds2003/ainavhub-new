---
title: "ViViD ViViD"
date: "2024-01-01 00:00:00+08:00"
description: ViViD ViViD 。。，。 ViViD ，...
slug: vivid
tags:
- const
- vivid
- gitalk
- clientsecret
- garment
draft: false
related_tools:
- graph-constrained reasoning
- vivid
- garment3dgen
- pose nudge
- ai pose transfer studio
---

## ViViD

阿里巴巴ViViD 是一种利用扩散模型进行视频虚拟试穿的新框架。视频虚拟试穿的目标是将某件衣服转移到目标人物的视频中。直接将基于图像的试穿技术逐帧应用到视频领域会导致时序不一致的问题，而之前的视频试穿方法只能生成低质量和模糊的结果。

ViViD 引入了强大的扩散模型来处理视频虚拟试穿任务，在以下几方面做了改进：

1. **服装编码器（Garment Encoder）** ：提取精细的服装语义特征，指导模型捕捉衣物细节并通过设计的注意力特征融合机制将其注入目标视频中。

2. **姿态编码器（Pose Encoder）** ：引入轻量级的姿态编码器来编码姿态信号，使模型能够学习衣物与人体姿态之间的互动，并将分层时序模块插入图像稳定扩散模型中，以实现更加连贯和逼真的视频合成。


此外，研究团队还收集了目前最大且种类最丰富、分辨率最高的视频虚拟试穿数据集。

实验结果表明，ViViD 能够生成令人满意的虚拟试穿视频效果。研究团队计划公开数据集、代码和模型权重。