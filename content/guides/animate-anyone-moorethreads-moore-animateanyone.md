---
title: "Animate Anyone Animate Anyone Animate Anyone"
date: "2024-01-01 00:00:00+08:00"
description: 'Animate Anyone Animate Anyone  MooreThreads/Moore-AnimateAnyone '
slug: animate-anyone-moorethreads-moore-animateanyone
tags:
- bin
- activate
- moore-animateanyone
- python
- weights.py
draft: false
related_tools:
- binglish
- linly-dubbing
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
---

## Animate Anyone

**Animate Anyone** 是一个开源项目，提供了用于动画生成的预训练模型和推理代码，其灵感来源于 [MooreThreads/Moore-AnimateAnyone](<https://github.com/MooreThreads/Moore-AnimateAnyone>) 仓库。这个项目进行了训练过程和数据集上的一些调整，以提升动画生成效果。

##### 使用场景

1. **视频动画化** :

* 通过将原始视频转换为关键点序列，可以生成对应的动画视频。
2. **个性化动画创作** :

* 用户可以根据需要，添加自己的参考图片或姿态视频，生成特定的动画效果。
3. **教育和科研** :

* 该工具可用于计算机视觉以及图像处理相关的研究，帮助理解动画生成的工作原理。


##### 快速开始指南

1. **构建环境** :

* 建议使用 Python 版本 `>=3.10` 且 CUDA 版本为 `11.7`。
* 创建虚拟环境并安装所需依赖:

python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt


2. **下载预训练权重** :

* 使用自动化脚本下载权重:

python tools/download_weights.py


3. **推理运行** :

* 运行推理脚本生成动画:

python -m scripts.pose2vid --config ./configs/prompts/animation.yaml -W 512 -H 784 -L 64


* 将原始视频转换为姿态视频:

python tools/vid2pose.py --video_path /path/to/your/video.mp4