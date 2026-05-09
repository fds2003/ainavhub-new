---
title: "ComfyUI-Fast-Style-Transfer ComfyUI-Fast-Style-Transfer ComfyUI-Fast-Style-Trans"
date: "2024-01-01 00:00:00+08:00"
description: ComfyUI-Fast-Style-Transfer ComfyUI-Fast-Style-Transfer ComfyUI-Fast-Style-Transfer
  ComfyUI
slug: comfyui-fast-style-transfer-comfyui-https-github.com-rrmina-1
tags:
- git
- vgg-16
- train.py
- comfyui-fast-style-transfer
- nodes
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## ComfyUI-Fast-Style-Transfer

# ComfyUI-Fast-Style-Transfer

ComfyUI-Fast-Style-Transfer是一个用于快速神经风格迁移的ComfyUI节点。这是基于这个项目的简单转换：https://github.com/rrmina/fast-neural-style-pytorch。目前只移植了基本的推理功能。

![展示图](https://github.com/zeroxoxo/ComfyUI-Fast-Style-Transfer/blob/main/ComfyUI.PNG?raw=true)

如果你想使用自定义风格，可以克隆原始仓库并使用train.py脚本进行训练，然后将生成的.pth模型文件转移到"ComfyUI/custom_nodes/ComfyUI-Fast-Style-Transfer/models"文件夹中。

## 安装

通常的安装方式是将仓库克隆到你的custom_nodes文件夹中。运行以下命令：


git clone https://github.com/zeroxoxo/ComfyUI-Fast-Style-Transfer.git


如果不起作用，可以到Stack Exchange求助，具体问题具体分析。

## 训练

首先，需要下载一些文件：

1. VGG-16模型，可以从以下链接下载：https://github.com/jcjohnson/pytorch-vgg，将其放入vgg文件夹中。
2. MS COCO训练数据集。原始仓库建议使用train-2014数据集（大小为13GB），可以从https://cocodataset.org/#download下载。我使用的是从这里下载的256x256大小的train-2017数据集（仅1.64GB）：https://academictorrents.com/details/eea5a532dd69de7ff93d5d9c579eac55a41cb700。将下载的train-2017（或train-2014）文件夹放入dataset文件夹中。


下载完成后，使用ComfyUI加载TrainFastStyleTransfer节点。可以通过以下步骤选择风格图片：

1. 使用"load_image"节点加载图片，然后按f5刷新，图片会出现在TrainFastStyleTransfer节点的style_img列表中，选择它。


根据显存情况调整batch_size（批处理大小）。在我的2060显卡上，batch_size设置为12时，显存使用量为5.9 GB（可以使用“nvidia-smi”命令在cmd中检查当前显存使用情况）。如果你有更多显存，可以将batch_size设置更高以显著减少训练时间。

一个训练周期（epoch）通常就够了，但如果你的设备足够快或者有足够的时间，可以尝试更多的训练周期。

参数save_model_every用于在训练的每n步保存模型和生成测试图片。

设置好所有参数后，排队执行任务并等待训练完成。训练可能需要长达2小时，请耐心等待。所有中间和最终模型会保存在models文件夹中，测试并删除多余的模型，保留并重命名你喜欢的模型。

## 使用场景

1. 艺术创作：将普通图片转换为特定艺术风格的图片，如梵高风、莫奈风等。
2. 设计素材：为设计工作快速生成风格一致的素材。
3. 教育与研究：用于教学神经网络和风格迁移的原理及应用。
4. 个性化定制：为用户提供个性化的图像处理服务。