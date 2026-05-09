---
title: "GenWarp"
date: "2024-01-01 00:00:00+08:00"
description: 'GenWarp GenWarp:  GenWarp'
slug: genwarp
tags:
- instantsplat
- genwarp
- dgs
draft: false
---

## GenWarp

GenWarp: 单图像到新视角的语义保留生成变形

##### 概述

GenWarp是一个创新的生成模型，可从单个输入图像生成多个新视角图像，并在生成过程中保持图像的语义一致性。与传统方法相比，GenWarp通过结合几何变形和扩散模型解决了因深度估计错误而导致的伪影和语义信息丢失问题。它适用于多种下游任务，例如从单张图片实现快速3D场景重建。

##### 关键特点

1. **几何变形与生成模型结合** ：利用扩散模型在基于深度的几何变形上进行学习，能够自动调整失真的区域，避免直接变形造成的伪影。
2. **自注意力和跨视角注意力结合** ：通过增强的注意力机制，模型能识别需要生成的区域与可以变形的区域，从而实现更高质量的新视角图像生成。
3. **高效的3D场景重建** ：从单张图片生成多视角图像后，可以快速重建3D场景，流程简便且时间成本低。


##### 实用场景

* **单图像到3D场景（3DGS）** ：输入单张图片后，GenWarp可生成3-4个新视角图像，结合快速3D重建器（如InstantSplat），能够在30秒内生成一个3D场景。
* **适用于多种类型图片** ：无论是域内图片还是域外图片，GenWarp均能生成可信的新视角图像。


##### 技术框架

1. **输入视角和目标视角嵌入** ：通过输入视角和期望的相机视角，获得2D坐标嵌入和变形后的坐标嵌入。
2. **语义保留网络** ：使用这些嵌入生成输入视角的语义特征。
3. **扩散模型** ：基于生成的语义特征和几何变形信号，学习生成新的视角图像。


##### 定量和定性评估

实验结果表明，GenWarp在处理域内和域外图像时，均优于现有的方法，生成的图像在视觉效果和语义保真度上都有显著提升。

##### 引用格式


@article{seo2024genwarp,
title={GenWarp: Single Image to Novel Views with Semantic-Preserving Generative Warping},
author={Seo, Junyoung and Fukuda, Kazumi and Shibuya, Takashi and Narihira, Takuya and Murata, Naoki and Hu, Shoukang and Lai, Chieh-Hsin and Kim, Seungryong and Mitsufuji, Yuki},
journal={arXiv preprint arXiv:2405.17251},
year={2024}
}


##### 致谢

感谢Jisang Han在3DGS应用方面的帮助，同时感谢Michaël Gharbi提供网站模板。

GenWarp提供了一个创新的解决方案，通过结合几何变形和生成模型，实现从单个图像到多个新视角图像的生成，广泛适用于多种实际应用。