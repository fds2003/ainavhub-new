---
title: "ComfyUI-GGUF"
date: "2024-01-01 00:00:00+08:00"
description: 'ComfyUI-GGUF ComfyUI-GGUF  ComfyUI-GGUF '
slug: comfyui-gguf-comfyui-gguf-llama.cpp-dit
tags:
- gpu
- lora
- controlnet
- dit
- llama.cpp
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- index-tts-lora
- comfyui-b-lora
- finecontrolnet
---

## ComfyUI-GGUF

**ComfyUI-GGUF 简介**

ComfyUI-GGUF 是一个为 ComfyUI 模型提供 GGUF 格式量化支持的项目。此项目目前仍处于开发阶段，提供了对以 GGUF 格式存储的模型文件的支持，该格式由 [llama.cpp](<https://github.com/ggerganov/llama.cpp>) 推广。GGUF 格式的量化支持主要适用于变换器和 DiT 模型（如 flux），相比传统的 UNET 模型（conv2d），量化带来的影响较小，使得在低端 GPU 上运行低位数的权重变量量化成为可能。

**使用场景**

1. **低端 GPU 推理** ：由于支持 GGUF 格式的模型可以在较低的位宽上高效运行，因此适合于资源受限的设备，帮助用户在硬件不强的情况下仍能使用先进的机器学习模型。

2. **快速模型加载** ：通过使用 GGUF 格式，用户可以快速加载和运行预先量化的模型，提升模型的使用效率。

3. **实验和开发** ：开发者可以在此基础上进行模型的量化实验，优化模型的性能和存储需求。

4. **视觉生成和分析** ：在需要进行图像生成或分析的场景中，能够利用此工具提高运算速度和效率，特别是在训练和推理阶段。


请注意，当前不支持 LoRA、Controlnet 等因为这些技术涉及到量化后的权重，因此不适用于该项目。