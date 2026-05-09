---
title: "EchoMimic"
date: "2024-01-01 00:00:00+08:00"
description: EchoMimic EchoMimic  landmarks
slug: echomimic-landmarks-gans
tags:
- git
- echomi
- cd
- echomimic
- gans
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## EchoMimic

EchoMimic 是一个由音频驱动的逼真肖像动画生成系统，通过可编辑的标志点条件来实现。它由来自支付宝的终端科技部门开发，其构建原理是通过音频信号驱动，并结合对人脸关键点（landmarks）的编辑进行调整。这个系统利用了深度学习和生成对抗网络（GANs），可以生成高度逼真的肖像动画，广泛应用于虚拟主持人、虚拟助理、视频配音、社交媒体内容生成等领域。

##### EchoMimic 的使用场景

1. **虚拟主持人和虚拟助理** ：通过给定的音频输入，虚拟主持人可以实时生成同步的口型和面部表情。
2. **视频配音与动画制作** ：可用于影视后期制作中，为角色配音提供自然的面部表情和口型动画。
3. **社交媒体内容生成** ：用户可以用自己的照片生成同步的动画表情，用于短视频平台、动态表情等内容创作。
4. **教育与宣传** ：在教育视频和宣传资料中，通过音频驱动生成生动的讲解员动画，提高观众的参与度。
5. **远程会议与虚拟协作** ：为视频会议中的虚拟形象提供逼真的面部表情，使远程交流更为自然。


##### 安装与使用

###### 环境设置

1. 下载代码：

git clone https://github.com/BadToBest/EchoMimic
cd EchoMimic


2. 设置 Python 环境：

conda create -n echomimic python=3.8
conda activate echomimic
pip install -r requirements.txt


3. 下载 ffmpeg-static 并设置路径：

export FFMPEG_PATH=/path/to/ffmpeg-4.4-amd64-static


4. 下载预训练模型权重：

git lfs install
git clone https://huggingface.co/BadToBest/EchoMimic pretrained_weights


###### 音频驱动动画推理

1. 运行推理脚本生成动画：

python -u infer_audio2vid.py


2. 自定义音频驱动案例： 编辑配置文件 `./configs/prompts/animation.yaml`，添加自己的案例：

test_cases:
"path/to/your/image":
- "path/to/your/audio"


然后运行推理脚本：

python -u infer_audio2vid.py


EchoMimic 通过音频驱动和关键点编辑的双重条件，实现了更高的动画逼真度和灵活性，适用于多种应用场景。