---
title: "ToonCrafter"
date: "2024-01-01 00:00:00+08:00"
description: ToonCrafter_with_SketchGuidance ToonCrafter_with_SketchGuidance“ToonCrafter”SketchGuidance。。ToonCrafterGitHub。...
slug: tooncrafter-sketchguidance-github
tags:
- gradio
- github
- requirements.txt
- install
- face
draft: false
related_tools:
- gradio webrtc
- claude github webhook
- github copilot
- github copilot workspace
- github copilot for xcode
---

## ToonCrafter_with_SketchGuidance

ToonCrafter_with_SketchGuidance是一个复现“ToonCrafter”项目中SketchGuidance特性的实现。这一功能旨在通过预训练模型生成动画视频。相关资料包括ToonCrafter的GitHub仓库和对应的论文。

##### 模型信息

* **ToonCrafter_512** ：分辨率为320x512，适用于支持高达16帧的视频生成。
* **SketchEncoder** ：用于处理草图输入。模型已在Hugging Face平台发布。


##### 设置环境

推荐使用Anaconda进行环境设置：


conda create -n tooncrafter python=3.8.5
conda activate tooncrafter
pip install -r requirements.txt


##### 推理过程

为了在本地运行Gradio演示：

1. 下载预训练的ToonCrafter_512模型并将其放在`checkpoints/tooncrafter_512_interp_v1/model.ckpt`路径下。
2. 下载预训练的SketchEncoder模型并将其放在`control_models/sketch_encoder.ckpt`路径下。


运行如下命令启动Gradio应用：


python gradio_app.py


##### 使用场景

ToonCrafter_with_SketchGuidance适用于以下场景：

1. **动画制作** ：通过草图生成高质量动画，对于动画师和艺术工作者非常有用。
2. **视觉效果** ：应用于影视、游戏中的特殊效果制作。
3. **教育与研究** ：在计算机图形学和人工智能领域的研究实验和教学示范。


这个工具通过提供简化的草图输入，极大地便利了创作过程，同时提升了效率和生成内容的质量。