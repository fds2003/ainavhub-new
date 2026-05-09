---
title: "ToonCrafter"
date: "2024-01-01 00:00:00+08:00"
description: ToonCrafter ToonCrafter ToonCrafter
slug: tooncrafter
tags:
- gradio
- python
- tooncrafter
- sh
- run.sh
draft: false
related_tools:
- gradio webrtc
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
---

## ToonCrafter

ToonCrafter是一种生成卡通图像插值的方法，它通过利用预训练的图像到视频扩散先验模型，可以插值两个卡通图像，生成中间的过渡视频。ToonCrafter展示了多种应用场景和使用成果，包括卡通草图插值和基于参考图的草图上色。

##### 使用场景

1. **卡通草图插值** ：从起始帧和结束帧生成中间帧，形成连续变化的视频。这种技术可以用于动画制作，帮助艺术家创建平滑的过渡效果。
* 例如，从两帧不同姿态的人物草图中生成中间的动画段。
2. **参考图的草图上色** ：使用参考图中的颜色信息对草图进行上色。这对于卡通上色任务特别有帮助，可以将草图自动填色为设计好的配色方案。
* 例如，使用一个已有上色的角色图像作为参考，将素描草图上色为相似的风格。
3. **稀疏草图引导** ：通过提供稀疏的草图输入，引导生成视频，支持复杂动画的创建。


##### 使用方式

ToonCrafter可以通过以下几种方式运行：

1. **命令行工具** ：下载预训练模型并放置在指定目录中，可以通过运行脚本生成插值视频。

sh scripts/run.sh


2. **本地Gradio演示** ：下载预训练模型并按照指南放入对应目录后执行Gradio演示程序。

python gradio_app.py


##### 环境配置

推荐使用Anaconda来配置环境：


conda create -n tooncrafter python=3.8.5
conda activate tooncrafter
pip install -r requirements.txt


##### 模型具体信息

ToonCrafter目前支持生成最多16帧，分辨率为512x320的视频。随着技术的进步和模型的更新，推理时间可以通过减少使用的DDIM步骤来缩短。

##### 免责声明

ToonCrafter是一项开源的研究探索工具，旨在推动AI视频生成领域的发展，而非商业产品。用户需遵守当地法律并负责任地使用该工具，开发者不对用户的潜在误用承担责任。