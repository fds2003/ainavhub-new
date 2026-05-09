---
title: "InvSR"
date: "2024-01-01 00:00:00+08:00"
description: InvSR InvSR Arbitrary-steps Image Super-resolution via Diffusion Inversion
slug: invsr-arbitrary-steps-image-super-resolution-via
tags:
- arbitrary-steps
- diffusion
- inversion
- aigc
- invsr
draft: false
related_tools:
- diffusion toolkit
- streammultidiffusion
- scribble diffusion
- hidiffusion
- stable diffusion 3 api
---

## InvSR

InvSR（Arbitrary-steps Image Super-resolution via Diffusion Inversion）是一种基于扩散逆转的新型图像超分辨率技术。该方法旨在利用大型预训练扩散模型中蕴含的丰富图像先验信息，以提升超分辨率的性能。InvSR引入了一种部分噪声预测策略，用以构建扩散模型的中间状态，并将其作为采样过程的起始点。该方法的核心是深度噪声预测器，可以估算正向扩散过程的最佳噪声图。经过训练后，这个噪声预测器能够在扩散轨迹上部分初始化采样过程，从而生成高分辨率的图像。与现有的方法相比，InvSR提供了一种灵活高效的采样机制，支持任意数量的采样步骤，从1步到5步。即使在单步采样情况下，InvSR的性能也优于或可与最新的最先进的方法相媲美。

##### 使用场景

1. **真实场景图像超分辨率** ：对于低分辨率的实际拍摄图像，InvSR可以显著提高图像质量，使得图像在放大后依然清晰。
2. **通用图像增强** ：除了超分辨率，InvSR还可用于图像的各类增强任务，提升细节和丰富图像的视觉效果。
3. **AIGC图像增强** ：在生成内容（AIGC）的场景中，InvSR可以为生成的图像增加细节提升，使其更具真实感和观赏性。


通过这些应用，InvSR展现了其在数字图像处理领域的广泛潜力和灵活性。