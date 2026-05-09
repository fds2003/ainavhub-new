---
title: "pcm pcm Phased Consistency Model"
date: "2024-01-01 00:00:00+08:00"
description: pcm Phased Consistency Model PCM
slug: pcm-phased-consistency-model-lcm
tags:
- cfg
- xl
- diffusion
- model
- stable
draft: false
related_tools:
- animagine xl 3.1
- coxl edit
- generative models by stability ai - stability ai 通过其稳定性 ai 生成模型发布了多个基于深度学习的文本到图像和图像到视频的生成模型，包括sdxl-turbo等，以及提供相关的技术报告和开放获取的模型权重。
- sdxl-lightning - 节跳动开发一个快速的文本到图像生成模型
- diffusion toolkit
---

## pcm

Phased Consistency Model（PCM）是一种新提出的生成模型，它致力于解决现有潜在一致性模型（LCM）在高分辨率文本生成中的三大局限性。尽管一致性模型（CM）能够快速生成高质量的图像，LCM试图将这一概念拓展到潜在空间以实现文本条件下的高分辨率生成，但效果并不理想。本文作者基于对LCM的深入研究，指出了其在三个方面的主要问题：

1. LCM在接受CFG（分类函数生成）参数超过2时会过度曝光，并且对负面提示词不敏感。
2. LCM在不同的推理步骤中无法产生一致的结果，推理步骤过大或过小时结果都较模糊。
3. LCM的损失项未能实现分布一致性，导致在低步骤情况下生成的结果质量不佳。


为了克服这些局限性，提出了PCM，它通过推广LCM的设计空间并引入创新的训练和推理策略，提高了生成质量。大量实验结果验证了PCM在1步、2步、4步、8步、16步等不同推理步骤下的优势，特别是在广泛应用的Stable Diffusion和Stable Diffusion XL基础模型上均显示出显著改进。

这样，PCM不仅克服了LCM的三大缺陷，还在各种生成任务中表现出色，包括图像生成和视频生成，为未来的一致性模型设计提供了重要的参考和进步。