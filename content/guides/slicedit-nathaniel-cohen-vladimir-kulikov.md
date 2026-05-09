---
title: "Slicedit"
date: "2024-01-01 00:00:00+08:00"
description: Slicedit Slicedit Nathaniel Cohen
slug: slicedit-nathaniel-cohen-vladimir-kulikov
tags:
- cohen
- kleiner
- huberman-spiegelglas
- vladimir
- tokenflow
draft: false
related_tools:
- pi
- flow
- matanyone
- translatebookwithllm
- stranslate
---

## Slicedit

Slicedit是一种基于文本图像扩散模型的零样本视频编辑方法，它通过时空片段来处理视频编辑。该方法由Nathaniel Cohen、Vladimir Kulikov、Matan Kleiner、Inbar Huberman-Spiegelglas和Tomer Michaeli提出，并将在ICML 2024上发表。Slicedit的核心思想是利用预训练的文本图像(T2I)扩散模型，在时空片段上实现增强的时间一致性，从而保留原视频的结构和运动，同时贴合目标文本描述。

Slicedit的工作原理包括：首先，通过使用视频去噪模型进行DDPM反演，提取噪声和注意力图，然后在特定时间步骤将这些注意力图注入噪声空间中，进行DDPM采样。该方法在空间和时空片段上分别应用扩展和原始的预训练图像去噪模型，并结合得到最终的预测噪声体积。

通过大量实验，Slicedit在各种真实视频编辑任务中表现出优越性，并且在与其他方法（如TokenFlow、Pix2Video、ControlVideo等）的对比中展现出明显的优势。此外，Slicedit还通过了消融研究，进一步证明了其方法的有效性。Slicedit的代码即将发布，更多详情可参阅其论文和补充材料。

完整参考文献包含了相关的前序工作，如TokenFlow、Pix2Video、ControlVideo等，提供了完整的学术背景支持。