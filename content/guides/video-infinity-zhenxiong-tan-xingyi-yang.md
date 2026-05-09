---
title: "Video-Infinity"
date: "2024-01-01 00:00:00+08:00"
description: 'Video-Infinity Video-Infinity  Video-Infinity '
slug: video-infinity-zhenxiong-tan-xingyi-yang
tags:
- gpu
- requirements.txt
- install
- xingyi
- pip
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- dualpipe
- local voice agents on macos with pipecat
- pi
---

## Video-Infinity

##### Video-Infinity 简介

**Video-Infinity** 是一种分布式的长视频生成工具。该工具由Zhenxiong Tan, Xingyi Yang, Songhua Liu和Xinchao Wang共同开发，并隶属于新加坡国立大学的学习与视觉实验室。其主要特点包括高速度生成、无需额外训练及多GPU利用。

**主要特点：**

1. **分布式处理：** 通过利用多个GPU实现长视频生成。
2. **高速度：** 在5分钟内生成2300帧视频。
3. **无需训练：** 使用现有模型生成长视频，无需额外训练。


**使用场景：**

* **影片制作** ：快速生成高质量的长视频。
* **广告制作** ：生成多场景广告视频，使用多种文本提示。
* **研究与开发** ：方便研究人员快速生成视频数据以用于算法测试或研究工作。


对于安装和使用的详细步骤，可参考如下：

1. 创建并激活虚拟环境：

conda create -n video_infinity_vc2 python=3.10
conda activate video_infinity_vc2


2. 安装所需依赖：

pip install -r requirements.txt


**快速开始：**

1. 基本用法：

python inference.py --config examples/config.json


2. 多提示生成：

python inference.py --config examples/multi_prompts.json


3. 单GPU生成：

python inference.py --config examples/single_gpu.json


在配置文件中，可以设置GPU使用列表、视频保存路径、文本提示、生成帧数等参数。通过自定义配置文件，用户可以灵活地调整生成视频的各种参数包括本地上下文帧数和全局上下文帧数，以便获得稳定且多样性丰富的视频。

##### 引用文献


@article{
tan2024videoinf,
title={Video-Infinity: Distributed Long Video Generation},
author={Zhenxiong Tan, Xingyi Yang, Songhua Liu, and Xinchao Wang},
journal={arXiv preprint arXiv:2406.16260},
year={2024}
}


Video-Infinity 项目基于 [VideoCrafter2](<https://ailab-cvc.github.io/videocrafter2>) 模型开发，感谢其原创作者的出色工作！