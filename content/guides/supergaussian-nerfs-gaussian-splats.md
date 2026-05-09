---
title: "SuperGaussian"
date: "2024-01-01 00:00:00+08:00"
description: SuperGaussian SuperGaussian NeRFs
slug: supergaussian-nerfs-gaussian-splats
tags:
- nerfs
- supergaussian
- gaussian
- splats
draft: false
related_tools:
- supergaussian
- citygaussian
---

## SuperGaussian

SuperGaussian是一种创新方法，旨在将现有的视频超分辨率方法重新用于3D超分辨率任务。此方法能够处理各种输入类型，如NeRFs、Gaussian Splats、从嘈杂扫描中获得的重建、由最新的文本生成3D方法生成的模型或低多边形网格。SuperGaussian可以以高分辨率的Gaussian Splats形式生成具有丰富几何和纹理细节的3D输出。

##### 方法介绍

SuperGaussian是一种简单、模块化和通用的方法，通过增加几何和外观细节来对低分辨率的3D模型进行上采样。研究团队证明，现有（预训练的）视频模型可以被直接重新利用来进行3D超分辨率，从而绕过了高质量3D训练模型仓库不足的问题。

##### 工作流程

给定一个低分辨率的3D表示，首先对其进行相机轨迹采样并渲染为中间低分辨率视频。接下来使用现有的视频上采样器来获得高分辨率的3D表示。然后进行3D优化，以改善几何和纹理细节。最终，该方法生成高分辨率的Gaussian Splats形式的3D表示。

##### 实验评估

SuperGaussian方法在多种3D输入（例如，Gaussian Splats或NeRFs）上进行了评估，并取得优秀的效果。通过定量比较，该方法在各种感知指标上均表现出色，且与多种基线方法相比，生成的视觉质量显著优于它们。

##### 论文详情

该研究的论文已在arXiv上预印，详细描述了SuperGaussian的实现方式、实验评估及结果。

##### 结果展示

研究展示了低分辨率输入与SuperGaussian生成的高分辨率3D模型的比较，并且在多个数据集上进行了实验，证明了该方法在各类3D场景下的广泛适用性和优越性能。

通过这种方法，SuperGaussian为现有的3D工作流程提供了一个简单而有效的解决方案，能够显著提高3D模型的细节和质量。