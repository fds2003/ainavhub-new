---
title: "Hyper-SD Hyper-SD"
date: "2024-01-01 00:00:00+08:00"
description: 'Hyper-SD  https://huggingface.co/spaces/ByteDance/Hyper-SD15-Scribble '
slug: hyper-sd-https-huggingface.co-spaces-bytedance
tags:
- diffusion
- ode
- models
- distillation
- huggingface.co
draft: false
related_tools:
- diffusion toolkit
- streammultidiffusion
- scribble diffusion
- hidiffusion
- stable diffusion 3 api
---

## Hyper-SD

体验地址：https://huggingface.co/spaces/ByteDance/Hyper-SD15-Scribble

字节 lightning 团队 发布Hyper-SD，它是一种高效生成图像的技术框架，通过利用特定的算法来优化和提升图像生成过程。其名称中的“Hyper”代表高效性，“SD”指的是用于图像合成的一种模型。这个框架旨在解决在使用扩散模型（Diffusion Models，DMs）进行图像生成时所面临的一系列计算问题和效率挑战。

扩散模型为生成高质量图像提供了一种强有力的方法，但通常需要通过多步骤的推理过程，这个过程计算成本高昂。Hyper-SD的出现，是为了解决因多步推理而导致的计算负担，通过一系列创新性算法改进，大幅提升了生成效率同时几乎不损失性能。

Hyper-SD的关键功能和特点包括：

1. **轨迹分段一致性蒸馏（Trajectory Segmented Consistency Distillation）** ：这一策略允许在预定义的时间步段内逐步执行一致性蒸馏，通过高阶视角保留原始ODE（常微分方程）轨迹，提高了模型在各个步骤中的一致性和效率。

2. **人类反馈学习** ：通过整合人类反馈来提高模型在低步数区间的性能，并减轻蒸馏过程中的性能损失。这意味着模型能够在少量步骤推理下，仍保持高质量的图像生成能力。

3. **分数蒸馏与统一LoRA支持** ：进一步改善低步数下的图像生成能力，并首次尝试使用统一的LoRA（Low-Rank Adaptation）来支持所有步骤的推理过程。这使得Hyper-SD能够在不同的基础模型上进行应用，始终保持高质量的图像输出。

4. **高效且近乎无损的性能** ：通过大量实验和用户研究证明，Hyper-SD在1到8步推理过程中均达到了最佳性能，例如，在1步推理中，Hyper-SDXL的表现超过了SDXL-Lightning。


在什么情况下会使用Hyper-SD？如果你需要：

* 快速生成高质量图像；
* 在计算资源有限的情况下进行大规模图像生成；
* 减少推理步骤而不牺牲生成图像的质量；
* 在生成特定图像时获得人工反馈的支持和优化。


Hyper-SD适用于追求高效率、高质量图像合成的场景，尤其适合在对计算资源有限制或要求快速反馈的应用中。