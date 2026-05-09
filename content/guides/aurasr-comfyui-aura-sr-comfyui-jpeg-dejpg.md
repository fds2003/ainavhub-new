---
title: "AuraSR-ComfyUI"
date: "2024-01-01 00:00:00+08:00"
description: 'AuraSR-ComfyUI AuraSR-ComfyUI  Aura-SR '
slug: aurasr-comfyui-aura-sr-comfyui-jpeg-dejpg
tags:
- config.json
- dejpg
- models
- aurasr-comfyui
- aurasr
draft: false
related_tools:
- claude code but with openai models
- open driving world models
- granite code models
- generative models by stability ai - stability ai 通过其稳定性 ai 生成模型发布了多个基于深度学习的文本到图像和图像到视频的生成模型，包括sdxl-turbo等，以及提供相关的技术报告和开放获取的模型权重。
- robot utility models
---

## AuraSR-ComfyUI

AuraSR-ComfyUI 是对 [Aura-SR](<https://github.com/fal-ai/aura-sr>) 在 ComfyUI 中的实现。这款图像放大模型对任何图像压缩都非常敏感，因此建议直接使用未经压缩的图像进行处理。如果需要处理已经保存的图像（尤其是 .JPEG 格式），可以考虑先使用像 [DeJPG_OmniSR](<https://openmodeldb.info/models/1x-DeJPG-OmniSR>) 这样的“压缩伪影去除”模型来预处理图像。

## 使用教程：

1. 在 ‘\models’ 目录下创建名为 ‘Aura-SR’ 的文件夹。
2. 从 [HuggingFace](<https://huggingface.co/fal/AuraSR/tree/main>) 下载 .safetensors 和 config.json 文件，并放置在刚创建的文件夹中。
3. （可选）将模型和配置文件重命名，使它们具有相同的名字，以便未来支持多个模型及其专属配置。
4. 通过 ComfyUI Manager 使用 Git URL 安装，重启并重新加载浏览器页面。
5. 添加节点 > AuraSR > AuraSR Upscaler。
6. 节点的参数基本自解释，除了 ’transparency_mask’ 和 ‘reapply_transparency’：
* transparency_mask: （可选）从加载的 RGBA 图像（具有透明像素）中获取的掩码，可以直接连接到 ‘Load Image’ 原生节点。
* reapply_transparency: 当提供了有效的掩码或 RGBA 图像时，尝试将原始图像的透明度重新应用到放大后的图像中。需要注意的是 ‘Load Image’ 原生节点会自动将输入图像转换为 RGB（无透明度），因此如果不传递有效的 ’transparency_mask’，则需要一个能够以 RGBA 模式加载和输出的专用节点。


## 使用场景：

* 图像放大：提高图像的分辨率，适用于高精度图像处理应用。
* 压缩伪影去除：先经过去除压缩伪影处理，再进行图像放大，适用于已保存的 JPEG 图像等。
* 高精度细节保留：需要在放大图像的同时保持高细节和质量的场景，如图像编辑、增强和修复。


目前，AuraSR-ComfyUI 还计划支持多图像输入。