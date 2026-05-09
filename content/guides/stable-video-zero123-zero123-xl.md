---
title: "Stable Video 3D Stable Video 3D Stable Video 3D"
date: "2024-01-01 00:00:00+08:00"
description: Stable Video 3D Stable Video 3D Stable Zero123
slug: stable-video-zero123-zero123-xl
tags:
- const
- gitalk
- stable
- stability
- sv3d
draft: false
related_tools:
- graph-constrained reasoning
- stable video 3d
- stable diffusion 3 api
- stable-diffusion.cpp
- stabletts
---

#### Stable Video 3D

Stable Video 3D是一个新模型，可以接受单个对象图像作为输入，并输出该对象的新颖多视图。相比之前发布的Stable Zero123，Stable Video 3D在质量和多视图方面有了显著的提升，并且胜过了其他开源替代方案，如Zero123-XL。

该模型有两个变体：SV3D_u可以基于单个图像输入生成轨道视频，而SV3D_p在SV3D_u的基础上扩展了功能，可以生成沿指定摄像机路径的3D视频。Stable Video 3D可以通过Stability AI Membership进行商业用途，对于非商业用途，可以在Hugging Face上下载模型权重。

该模型利用视频扩散模型生成对象的多视图视频，相比使用图像扩散模型的Stable Zero123，具有更好的泛化能力和视图一致性，并提出了改进的3D优化方法。此外，Stable Video 3D引入了新的视角生成技术，能够从任意角度生成连贯的视图，增强了姿态可控性和对象外观的一致性，进一步改进了真实和准确的3D生成关键方面。