---
title: "LayerDiffuse Diffusers CLI LayerDiffuse Diffusers CLI LayerDiffuse Diffusers"
date: "2024-01-01 00:00:00+08:00"
description: "LayerDiffuse Diffusers CLI LayerDiffuse Diffusers CLI LayerDiffuse "
slug: "layerdiffuse-diffusers-cli-gui-k-diffusion"
draft: false
---

## LayerDiffuse Diffusers CLI

**LayerDiffuse Diffusers CLI** 是 LayerDiffuse 的官方实现，该项目旨在提供无图形用户界面（GUI）的纯命令行界面（CLI），方便不同项目的开发。它直接使用 k-diffusion 进行图像采样，期望能够在无需依赖其他用户界面的情况下实现最先进的图像采样结果。本项目仍在开发中，计划移植 LayerDiffuse 的所有功能。

## 使用场景

LayerDiffuse Diffusers CLI 适用于以下场景：

1. **RGB 填充** ：将透明 PNG 图像转换为填充图像，用连续的颜色填充所有不可见的像素。这对于训练 LayerDiffuse 模型至关重要。

python demo_rgb_padding.py


2. **SDXL 透明文本到图像（T2I）生成** ：在图像中处理透明度并解码结果。

python demo_sdxl_t2i.py


3. **SDXL 透明图像到图像（I2I）生成** ：对现有 PNG 图像进行编码、扩散和解码。

python demo_sdxl_i2i.py


## 安装步骤

1. 克隆项目并创建环境：

git clone https://github.com/lllyasviel/LayerDiffuse_DiffusersCLI.git
cd LayerDiffuse_DiffusersCLI
conda create -n layerdiffuse python=3.10
conda activate layerdiffuse
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu121
pip install -r requirements.txt


2. 该项目包含一个简单的内存管理系统，需要至少 8GB 的 Nvidia 显存。模型会自动下载。


## 未来计划

即将移植的功能包括：

1. SD15 透明 T2I 和 I2I。
2. SDXL 图层系统。
3. SD15 图层系统。
4. 使用蒙版/修复的一些潜在应用。


这些功能的添加将使 LayerDiffuse Diffusers CLI 更加完备，并扩展其在图像生成和编辑领域的应用范围。
