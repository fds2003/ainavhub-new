---
title: "ComfyUI-KwaiKolorsWrapper"
date: "2024-01-01 00:00:00+08:00"
description: 'ComfyUI-KwaiKolorsWrapper ComfyUI-KwaiKolorsWrapper  diffusers '
slug: comfyui-kwaikolorswrapper-diffusers-kwai-kolors-text2image-safetensors
tags:
- kwai-kolors
- nodes
- requirements.txt
- install
- custom
draft: false
related_tools:
- kolors
- x-portrait nodes
- comfyui wrapper nodes for hunyuanvideo
- hunyuancustom
- customer service agents demo
---

## ComfyUI-KwaiKolorsWrapper

**ComfyUI-KwaiKolorsWrapper** 是一个基础的包装器，用于使用 diffusers 运行 Kwai-Kolors 的 text2image（文本到图像）流水线。

##### 功能更新 - safetensors

添加了从单个 safetensors 文件加载 ChatGLM3 模型的替代方法（这些配置已包含在此存储库中），并且包括已经量化的模型，这些模型可以放置在 `ComfyUI\models\LLM\checkpoints` 文件夹中。

##### 安装步骤：

1. 将此存储库克隆到 `ComfyUI/custom_nodes` 文件夹中。

2. 安装 `requirements.txt` 中的依赖项，至少需要 `transformers` 版本 4.38.0：

pip install -r requirements.txt


如果使用便携版本，则需在 `ComfyUI_windows_portable` 文件夹中运行：

python_embeded\python.exe -m pip install -r ComfyUI\custom_nodes\ComfyUI-KwaiKolorsWrapper\requirements.txt


3. 模型（fp16，16.5GB）会自动从 [Hugging Face](<https://huggingface.co/Kwai-Kolors/Kolors/tree/main>) 下载到 `ComfyUI/models/diffusers/Kolors`。

4. 模型文件夹结构需要如下：

PS C:\ComfyUI_windows_portable\ComfyUI\models\diffusers\Kolors> tree /F
│   model_index.json
│
├───scheduler
│       scheduler_config.json
│
├───text_encoder
│       config.json
│       pytorch_model-00001-of-00007.bin
│       pytorch_model-00002-of-00007.bin
│       pytorch_model-00003-of-00007.bin
│       pytorch_model-00004-of-00007.bin
│       pytorch_model-00005-of-00007.bin
│       pytorch_model-00006-of-00007.bin
│       pytorch_model-00007-of-00007.bin
│       pytorch_model.bin.index.json
│       tokenizer.model
│       tokenizer_config.json
│       vocab.txt
│
└───unet
config.json
diffusion_pytorch_model.fp16.safetensors


在运行时，文本编码器将占用大部分显存（VRAM），但可以进行量化以适应不同的显存大小需求：

模型 | 大小
---|---
fp16 | ~13 GB
quant8 | ~8 GB
quant4 | ~4 GB

采样单个1024分辨率的图像所需的显存应与 SDXL（Stable Diffusion XL）类似。VAE（变分自编码器）使用的是基本的 SDXL VAE。

##### 使用场景：

1. **文本到图像生成** ：可用于根据文本描述生成高质量的图像。
2. **深度学习模型部署** ：通过量化技术，适合在不同硬件配置中进行深度学习模型的部署和运行。
3. **图像生成研究** ：为研究人员提供了一个简单易用的工具，以应用和改进文本到图像生成算法。


总之，ComfyUI-KwaiKolorsWrapper 是一个强大的工具，可以简化使用 Kwai-Kolors 模型进行文本到图像生成的过程，并且通过适应不同的硬件需求，扩展了其应用范围。