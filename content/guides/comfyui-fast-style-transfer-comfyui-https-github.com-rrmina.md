---
title: "ComfyUI-Fast-Style-Transfer ComfyUI-Fast-Style-Transfer ComfyUI-Fast-Style-Trans"
date: "2024-01-01 00:00:00+08:00"
description: 'ComfyUI-Fast-Style-Transfer ComfyUI-Fast-Style-Transfer  ComfyUI '
slug: comfyui-fast-style-transfer-comfyui-https-github.com-rrmina
tags:
- git
- train.py
- comfyui-fast-style-transfer
- nodes
- https
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## ComfyUI-Fast-Style-Transfer

ComfyUI-Fast-Style-Transfer 是一个用于快速神经风格转移的 ComfyUI 节点。此项目基于 <https://github.com/rrmina/fast-neural-style-pytorch> 进行了简单的转换，目前仅移植了基本的推理功能。

##### 安装方法

1. 将项目克隆到你的 `custom_nodes` 文件夹中，命令如下：

git clone https://github.com/zeroxoxo/ComfyUI-Fast-Style-Transfer.git


2. 如果需要使用自定义风格，需要克隆原始仓库并使用 `train.py` 脚本进行训练，然后将生成的 `.pth` 模型文件转移到 `ComfyUI/custom_nodes/ComfyUI-Fast-Style-Transfer/models` 文件夹中。


##### 使用场景

ComfyUI-Fast-Style-Transfer 适用于以下场景：

1. **艺术创作** ：可以快速将照片或图像转化为具有特定艺术风格的作品，适合艺术家、设计师等创意工作者使用。
2. **图像增强** ：通过风格转移技术，可以增强照片的视觉效果，使其更加吸引人。
3. **学术研究** ：研究神经网络风格转移的原理和应用。


该工具适用于需要快速实现神经风格转移的场景，特别是对于简单的推理任务非常便利。