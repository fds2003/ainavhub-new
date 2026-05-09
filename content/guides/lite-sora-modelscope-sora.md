---
title: "Lite-Sora"
date: "2024-01-01 00:00:00+08:00"
description: Lite-Sora Lite-Sora ModelScope
slug: lite-sora-modelscope-sora
tags:
- lite-sora
- modelscope
- sora
draft: false
related_tools:
- sora
- sora 2 playground
- first impressions sora
- open-sora
- fakesoraapi - 用于sorawebui的api，可以从文本生成视频，并提供了在线演示。
---

## Lite-Sora

Lite-Sora项目是华东师范大学和ModelScope社区共同发起的，旨在探索Sora后面的视频生成算法的最小复现和流线型实现。简而言之，Lite-Sora的目标是提供一个简洁、易读的代码库，以便于团队实验和改进，不断推动开源视频生成技术的边界。

Lite-Sora会在以下情况下使用：

1. **学术及研究目的：** 当研究人员或学生希望探索视频生成领域，尤其是对Sora算法及其背后的技术有兴趣时，可以使用Lite-Sora来进行实验和学习。

2. **技术验证与原型开发：** 对于希望快速构建视频生成原型的开发者，Lite-Sora提供了一种快速迭代和验证想法的工具。由于其简洁性与易读性，开发者可以快速上手并对算法进行调整以符合特定需求。

3. **开源社区贡献：** 对于对开源贡献感兴趣的开发者或团队，Lite-Sora提供了一个很好的平台。由于其目标是为了集体实验和改进，因此鼓励来自社区的贡献，无论是改进现有功能还是添加新的功能。

4. **教育与培训：** Lite-Sora由于其代码的简洁和文档的完整，非常适合用于教育和培训目的，尤其对于希望深入了解视频生成和深度学习的学生和专业人士。


具体的功能包括：

* **基础架构实现：** 实现了基础的视频生成架构，包括文本编码器、VideoDiT（基于Facebook DiT），以及调度器（基于DDIM）和基于PyTorch-lightning的训练器。

* **小数据集验证：** 在Pixabay100小数据集上完成了验证，展示了训练代码能够适应训练数据。

* **模型下载与训练：** 提供了模型下载链接，包括文本编码器、去噪模型和VAE模型，并且给出了详细的训练指导。

* **推理和视频生成：** 支持在像素空间内合成视频，以及将视频编码到潜在空间再解码的功能。

* **实验结果：** 展示了使用小数据集训练的去噪模型的一些实验结果，以及利用Stable-Video-Diffusion的VAE模型对视频进行编码和解码的示例，支持极长高分辨率视频。


Lite-Sora适合希望在视频生成领域进行探索、学习和原型开发的用户，提供了一个易于上手和扩展的代码库。