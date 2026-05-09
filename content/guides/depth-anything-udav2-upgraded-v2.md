---
title: "Depth Anything Depth Anything UDAV2"
date: "2024-01-01 00:00:00+08:00"
description: Depth Anything UDAV2  UDAV2
slug: depth-anything-udav2-upgraded-v2
tags:
- gradio
- gradio.py
- macos
- bit
- sd
draft: false
related_tools:
- gradio webrtc
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- macos-style react desktop environment
---

## Depth Anything

## UDAV2 简介

UDAV2（Upgraded Depth Anything V2）在细节和鲁棒性方面显著优于其前身V1。相比于基于SD的模型，它具有更快的推理速度、更少的参数、更高的深度准确性以及升级后的Gradio WebUI。此外，UDAV2还支持图像和视频的批处理脚本，提供了更直观的命令行界面（CLI）使用方式。

## 主要特点

* **高精细度和鲁棒性** ：在细节和鲁棒性方面大幅提升。
* **快速推理和较少参数** ：相比于SD-based模型，推理速度更快，参数更少。
* **升级后的Gradio WebUI** ：更直观的用户界面。
* **图像和视频的批处理脚本** ：更方便的CLI使用体验。


## 使用场景

##### 单图像处理

利用Gradio WebUI或命令行脚本，用户可以处理单个图像。以下是通过Gradio WebUI处理单图像的示例：

###### 对于Windows


run_gradio.bat


###### 对于MacOS & Linux


python run_gradio.py


##### 批处理图像生成 16-bit 深度图

可以使用以下脚本来生成单张或多张图像的16-bit深度图，适用于3D浅浮雕的创建。


run_image-depth_16bit.bat


##### 批处理图像生成 8-bit 深度图

使用以下脚本生成单张或多张图像的8-bit深度图。


run_image-depth_8bit.bat


或


python run_image-depth.py --encoder <vits | vitb | vitl> --img-path <path> --outdir <outdir> [--input-size <size>] [--pred-only] [--grayscale]


##### 视频处理

利用以下脚本处理单个或多个视频。


run_video-depth.bat


或


python run_video-depth.py --encoder vitl --video-path assets/examples_video --outdir video_depth_vis


## 安装指南

##### Windows


git clone https://github.com/MackinationsAi/Upgraded-Depth-Anything-V2.git
cd Upgraded-Depth-Anything-V2
one_click_install.bat


##### MacOS & Linux


git clone https://github.com/MackinationsAi/Upgraded-Depth-Anything-V2.git
cd Upgraded-Depth-Anything-V2
source one_click_install.sh


或


git clone https://github.com/MackinationsAi/Upgraded-Depth-Anything-V2.git
cd Upgraded-Depth-Anything-V2
pip install requirements_macos.txt


完成安装后，手动下载并将模型文件放到`checkpoints`文件夹中。

## 常见用途

1. **3D建模** ：生成适用于3D打印的高精度深度图。
2. **图像增强和分析** ：用于图像处理和计算机视觉任务中的深度信息提取。
3. **视频处理** ：自动为视频添加深度信息。


## 预训练模型

提供的模型大小不同，具体可根据需求选择合适的模型进行下载并使用。

升级后的UDAV2在各方面都表现出色，成为了深度信息提取和处理的优秀工具，有广泛的应用前景。