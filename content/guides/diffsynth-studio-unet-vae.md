---
title: "DiffSynth Studio DiffSynth Studio DiffSynth Studio"
date: "2024-01-01 00:00:00+08:00"
description: 'DiffSynth Studio DiffSynth Studio  DiffSynth Studio '
slug: diffsynth-studio-unet-vae
tags:
- fastblend
- diffutoon
- fastsdxl
- vae
- studio
draft: false
related_tools:
- diffutoon
- cherry studio
- coze studio
- qwen3-asr-studio
- aimangastudio
---

## DiffSynth Studio

##### DiffSynth Studio 简介

DiffSynth Studio 是一个扩散引擎。我们重新构建了包括文本编码器、UNet、VAE 等架构，在保持与开源社区模型兼容的同时，增强了计算性能。DiffSynth Studio 提供了许多有趣的功能，让用户体验扩散模型的魔力！

##### 发展路线图

1. **2023年8月29日** : 提出 DiffSynth，这是一种视频合成框架，并发布源代码、技术报告和项目页面。
2. **2023年10月1日** : 发布早期版本 FastSDXL，旨在构建一个高效的扩散引擎。
3. **2023年11月15日** : 提出 FastBlend，一个强大的视频去闪烁算法，并发布相关扩展与演示视频。
4. **2023年12月8日** : 开始开发一个新项目，释放扩散模型在视频合成中的潜力。
5. **2024年1月29日** : 提出 Diffutoon，一个出色的 toon 渲染解决方案。
6. **2024年6月13日** : DiffSynth Studio 转移至 ModelScope。
7. **2024年6月21日** : 提出 ExVideo，一种增强视频生成能力的后调优技术，支持生成最长128帧的视频。


##### 支持的模型

DiffSynth Studio 支持多种模型，包括：

* 稳定扩散（Stable Diffusion）
* 稳定扩散 XL（Stable Diffusion XL）
* ControlNet
* AnimateDiff
* Ip-Adapter
* ESRGAN
* RIFE
* Hunyuan-DiT
* 稳定视频扩散（Stable Video Diffusion）
* ExVideo


##### 使用场景

1. **长视频合成** : 利用扩展的视频合成模型生成128帧的视频。
2. **图像合成** : 生成高分辨率图像，突破扩散模型的限制。
3. **toon 渲染** : 以平面风格渲染逼真的视频，并启用视频编辑功能。
4. **视频风格化** : 无需视频模型即可进行视频风格化。
5. **中文模型使用** : 使用 Hunyuan-DiT 生成带有中文提示的图像，并支持该模型的 LoRA 微调。


##### 安装与使用

**安装** :


git clone https://github.com/modelscope/DiffSynth-Studio.git
cd DiffSynth-Studio
pip install -e .


**Python代码中使用** : 提供了多个示例用于展示不同功能，如长视频合成、图像合成、toon 渲染、视频风格化等。

**WebUI 使用** :


python -m streamlit run DiffSynth_Studio.py


通过以上命令可以运行 WebUI 进行交互式操作和演示。