---
title: "MOFA-Video"
date: "2024-01-01 00:00:00+08:00"
description: MOFA-Video MOFA-Video  MOFA-Video
slug: mofa-video-sparse-to-dense-s2d-video-diffusion
tags:
- gradio
- model
- diffusion
- video
- s2d
draft: false
related_tools:
- gradio webrtc
- claude code but with openai models
- ai model comparison tool
- open driving world models
- all model chat
---

## MOFA-Video

##### MOFA-Video 简介

MOFA-Video（生成运动场适应的可控图像动画在冻结的图像到视频扩散模型）是一种创新方法，通过使用稀疏到密集（Sparse-to-Dense, S2D）运动生成和基于光流的运动适应技术，将不同领域的运动适应于冻结的Video Diffusion Model (SVD)。这种方法能够通过轨迹、关键点序列及其组合等多种控制信号有效地将单张图像动画化。

###### 使用场景

1. **基于轨迹的图像动画** ：通过设定运动轨迹，使静态图像产生连贯的动态效果。
2. **关键点控制的图像动画** ：通过定义图像中关键点的位置和移动路径，以实现特定部分的动画效果。
3. **混合控制的图像动画** ：结合轨迹和关键点控制，提供更复杂和细致的动画效果。


###### 新特性/更新

* **Gradio 推理代码和模型检查点发布** ：包括基于轨迹的图像动画和混合控制的图像动画。
* **预定功能** ：关键点控制面部图像动画的推理脚本和训练脚本。


MOFA-Video 通过生成稀疏控制信号，并训练不同的MOFA-Adapters，能够在推理阶段联动多个MOFA-Adapters，联合控制冻结的SVD，以生成高质量的视频效果。有关更多的视觉效果，您可以访问其[项目页面](<https://myniuuu.github.io/MOFA_Video>)。