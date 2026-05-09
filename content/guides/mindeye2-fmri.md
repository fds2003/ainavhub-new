---
title: "MindEye2"
date: "2024-01-01 00:00:00+08:00"
description: MindEye2 MindEye2 fMRI
slug: mindeye2-fmri
tags:
- mindeye2
- clip
- const
- gitalk
- clientsecret
draft: false
related_tools:
- funclip
- viral-clips-crew
- graph-constrained reasoning
- generative models by stability ai - stability ai 通过其稳定性 ai 生成模型发布了多个基于深度学习的文本到图像和图像到视频的生成模型，包括sdxl-turbo等，以及提供相关的技术报告和开放获取的模型权重。
- sdxl-lightning - 节跳动开发一个快速的文本到图像生成模型
---

#### MindEye2

MindEye2是一个基于fMRI数据的图像重建模型，可以通过仅使用1小时的数据就实现fMRI到图像的转换。该模型首先使用自然场景数据集中7个受试者的数据进行训练，然后再使用少量训练数据的目标受试者进行微调。通过专门的岭回归将fMRI活动映射到共享主体潜在空间，然后通过MLP主干和扩散先验输出预测的CLIP嵌入，最终通过SDXL unCLIP模型将其重建成图像。MindEye2在图像检索、图像重建和标题生成方面取得了最先进的成果，仅需1小时的训练数据（之前需要40小时）就能实现高质量的图像生成。通过对预先训练的模型进行微调，仅需1小时的新受试者的fMRI数据就可以生成结果。整体而言，MindEye2在1小时训练数据设置下表现优异，特别是在其他受试者数据的预训练帮助下，能够实现这样的性能。