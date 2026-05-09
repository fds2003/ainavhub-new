---
title: "SAMURAI for NUKE SAMURAI for NUKE SAMURAI for NUKE"
date: "2024-01-01 00:00:00+08:00"
description: 'SAMURAI for NUKE SAMURAI for NUKE  SAMURAI for NUKE '
slug: samurai-nuke-sam2-exr
tags:
- sam2
- torch
- exr
- python
- nuke
draft: false
related_tools:
- ttt-lm-pytorch
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
---

## SAMURAI for NUKE

**SAMURAI for NUKE 简介**

SAMURAI for NUKE 是一款基于 SAMURAI 对 SAM2 模型的适应版本，旨在实现零样本视觉跟踪与运动感知记忆，从一组图像序列中生成掩模。它能有效处理需要基于图像内容生成掩模的视觉任务，适用于图像处理、特效制作等场景。

**主要特性：**

* 掩模导出功能
* 支持 EXR 格式的输入/输出
* 可以指定帧范围
* 提供边界框接口


**使用场景：**

1. **影视后期特效** ：在视频编辑与特效制作中，能够快速为运动物体生成准确的掩模，增加处理效率。
2. **视觉跟踪研究** ：用于测试和研究视觉跟踪算法，尤其在面对动态场景时，可以无须样本数据直接应用。
3. **图像分割任务** ：在机器学习或计算机视觉实验中，用于生成训练数据集所需的掩模数据。


**系统要求：**

* Ubuntu 20.04 及以上版本
* Nuke 15 及以上版本（未在之前版本上测试）
* Python 3.10 或以上
* torch 2.3.1 及以上
* torchvision 0.18.1 及以上


通过简单的安装流程，用户可以在其 Nuke 环境中集成 SAMURAI for NUKE，极大地提升图像处理和后期制作的效率。