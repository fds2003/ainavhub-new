---
title: "PixArt-"
date: "2024-01-01 00:00:00+08:00"
description: PixArt-Σ PixArt-Σ（Diffusion Transformer, DiT）4K。PixArt-α，PixArt-Σ。PixArt-Σ。PixArt...
slug: pixart--diffusion-transformer-dit
tags:
- diffusion
- transformer
- sd
- pixart-
- dit
draft: false
related_tools:
- diffusion toolkit
- streammultidiffusion
- scribble diffusion
- hidiffusion
- stable diffusion 3 api
---

## PixArt-Σ

PixArt-Σ是一种利用扩散变换模型（Diffusion Transformer, 简称DiT）直接生成4K分辨率图像的技术。与它的前任PixArt-α相比，PixArt-Σ在图像的保真度和文本提示的准确对应方面取得了显著的提升。PixArt-Σ的一个主要特点是其训练效率高。它利用PixArt-α的基础预训练，通过引入更高质量的数据，从一个较弱的基线模型演变成更强的模型，这一过程被称为“弱到强训练”。

PixArt-Σ的进步主要体现在两个方面：

1. **高质量训练数据：**PixArt-Σ引入了更高质量的图像数据，并配以更精确、更详细的图片描述。
2. **高效的Token压缩：**在DiT框架内，提出了一种新颖的注意力模块，该模块对keys和values进行压缩，显著提高了效率，并使得生成超高分辨率图像成为可能。


得益于这些改进，与其他文本到图像的扩散模型（如SDXL（2.6B参数）和SD Cascade（5.1B参数））相比，PixArt-Σ在模型大小显著减小（0.6B参数）的同时，实现了更优的图像质量和更好的用户提示遵循能力。此外，PixArt-Σ生成4K图像的能力，支持创造高分辨率的海报和壁纸，有效地促进了电影和游戏等行业高质量视觉内容的生产。

##### 使用场景

PixArt-Σ可以在多种场景下使用，主要包括但不限于：

* **高分辨率视觉内容制作：**电影、游戏宣传海报、桌面壁纸等高清视觉内容的制作。
* **个性化图像生成：**根据用户的具体文本提示，生成符合用户需求的个性化图像，适用于个性化媒体内容创作、广告、设计等领域。
* **艺术创作辅助：**为艺术家提供灵感，通过文本提示生成创意图像，辅助艺术创作过程。


PixArt-Σ是一种高效、灵活的文本到图像生成工具，适用于需要高质量、高分辨率图像生成的各种应用场景。