---
title: "Lumina-mGPT"
date: "2024-01-01 00:00:00+08:00"
description: Lumina-mGPT Lumina-mGPT Alpha-VLLM
slug: lumina-mgpt-alpha-vllm
tags:
- gradio
- lumina-mgpt
- demos
- omni-sft
- alpha-vllm
draft: false
related_tools:
- gradio webrtc
- lumina-mgpt 2.0
- lumina-mgpt
- gemini 2.0 flash image generation and editing
- 4o-image-generation
---

## Lumina-mGPT

**Lumina-mGPT** 是一系列多模态自回归模型，能够处理多种视觉和语言任务，其中尤为擅长从文本描述中生成灵活的真实感图像。该模型家族由Alpha-VLLM团队研发，适用于多种多模态生成和理解任务。

##### Lumina-mGPT的特性及使用场景

1. **图像生成（Image Generation）** ：

* 从文本描述生成对应的高质量图像。例如，输入一段描述“狗在玩水，背景有瀑布”的文本，Lumina-mGPT可以生成符合描述的图像。
2. **图像理解（Image Understanding）** ：

* 对图像进行详细描述。例如，输入一张图像，模型可以生成该图像的详细文字描述。
3. **多功能任务（Omni-SFT）** ：

* 支持多种任务，如图像深度估计、图像到图像的转换、图像编辑等。用户可以在单个界面中切换不同任务。


##### 具体使用方法

1. **安装与准备** ：

* 要求用户先下载VQ-VAE的权重文件，并将其放置在指定目录中。
2. **本地示范（Local Gradio Demos）** ：

* 提供了三个不同的Gradio示范程序，用于展示不同的功能模块：
1. `demo_image_generation.py`：用于图像生成任务。
2. `demo_image2image.py`：适用于使用Omni-SFT训练的模型，支持多个下游任务。
3. `demo_freeform.py`：支持最少约束的输入格式，适合深入探索。
3. **简单推理（Simple Inference）** ：

* 提供了示例代码，展示如何使用灵活自回归推理求解器`FlexARInferenceSolver`进行简单的推理任务，包括生成图像和图像理解。


##### Lumina-mGPT的模型和检查点

* 提供多个型号的检查点，包括7B和34B参数规模的模型，分别支持多个不同分辨率的任务。


##### 开源计划和招聘信息

* 目前已经开源了推理代码，训练代码将在2-3周内发布。
* 上海人工智能实验室通用视觉团队正在招聘实习生、博士后及全职研究员，感兴趣者可联系gaopengcuhk@gmail.com。


##### 引用格式

用户可以通过官方提供的BibTeX条目引用Lumina-mGPT的相关工作。