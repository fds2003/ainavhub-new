---
title: "ComfyUI Flux Accelerator ComfyUI Flux Accelerator ComfyUI Flux Accelerator"
date: "2024-01-01 00:00:00+08:00"
description: ComfyUI Flux Accelerator ComfyUI Flux Accelerator ComfyUI
slug: comfyui-flux-accelerator-flux.1-taef1
tags:
- taef1
- torchao
- flux.1
- dit
- torch.compile
draft: false
related_tools:
- flux
- gemini 2.0 flash image generation and editing
- easyedit
- gpt-image-edit
- reddit ai trend reports
---

## ComfyUI Flux Accelerator

ComfyUI Flux Accelerator是一款为ComfyUI设计的自定义节点，旨在通过这一节点加速Flux.1图像生成。其主要功能包括：

1. **使用TAEF1自动编码器** ：TAEF1是一种快速高效的自动编码器，能够在较短时间内对像素进行编码和解码，尽管可能会略微牺牲图像质量。

2. **量化与编译** ：通过使用`torchao`和`torch.compile()`，ComfyUI Flux Accelerator对模型进行了优化，从而提升了速度。

3. **跳过冗余的DiT块** ：用户可以选择跳过部分DiT块，有助于进一步提高生成速度。


ComfyUI Flux Accelerator在性能上表现显著，可以比默认设置快**37.25%** ，具体的速度提升可以在不同分辨率和步数设置下有所不同。

##### 使用场景

ComfyUI Flux Accelerator适合于以下场景：

* **图像生成** ：需要快速生成图像的应用场景，例如艺术创作、游戏设计和视觉效果制作。
* **低延迟要求** ：对于实时应用或交互式设计需要快速反馈和迭代的任务。
* **硬件资源优化** ：尤其适合显存资源有限的用户，尽管可能会有频繁的内存不足错误，但运行一遍后会正常工作。


总之，ComfyUI Flux Accelerator通过提高图像生成速度，适合那些对效率有较高需求的开发者和创作者。