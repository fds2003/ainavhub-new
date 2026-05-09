---
title: "img2img-turbo"
date: "2024-01-01 00:00:00+08:00"
description: img2img-turbo img2img-turbo x512
slug: img2img-turbo-x512-a6000-a10
tags:
- a6000
- edge
- x512
- a10
- img2img-turbo
draft: false
related_tools:
- knowledge graph
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- knowledge graph builder app
- knowledge graphs for rag
- local knowledge graph
---

## img2img-turbo

img2img-turbo是一种图像到图像转换技术，它建立在单步扩散模型基础上，通过对抗学习对新任务和领域进行适配。这项技术利用了事先训练好的扩散模型的内部知识，实现了高效的推理能力。例如，对于512x512的图像，其在A6000和A100硬件上的处理时间分别为0.29秒和0.11秒。

img2img-turbo主要包括两个变体：CycleGAN-Turbo和pix2pix-turbo，它们可以应用于成对和非成对的图像到图像转换任务。CycleGAN-Turbo在现有的基于GAN和基于扩散的方法中表现出色，而pix2pix-Turbo能够与最近的技术如ControlNet的Sketch2Photo和Edge2Image等相媲美，但它以单步推理的方式实现。

此技术可用于多种情况，如：

1. **成对的图像翻译（pix2pix-turbo）** ：例如，将一张含有边缘信息的图片转化为完整的图像（Edge to Image）。

2. **生成多样化的输出** ：通过改变输入的噪声图，这个方法可以从同一输入条件生成不同风格的输出。输出的风格可以通过改变文本提示来控制。

3. **非成对的图像翻译（CycleGAN-Turbo）** ：例如，日转夜、夜转日、晴转雨、雨转晴等。


img2img-turbo采用的生成器架构将原始潜在扩散模型中的三个独立模块紧密集成为一个单一的端到端网络，并使用小型可训练的权重。该架构能够在保留输入场景结构的同时，实现从输入x到输出y的转换。该生成器可用于各种GAN目标。

**在什么样的情况下会使用img2img-turbo：**

* 当你需要快速将一种图像风格翻译成另一种图像风格时，比如从素描到实图（Sketch to Image），或者将日景转换为夜景。

* 当你想要从相同的输入条件下产生风格多样的图像输出时。

* 当你在处理成对或者非成对的图像转换任务时，希望得到高效且质量较好的结果。


由于其高效和多样性，img2img-turbo适合图像创作、图像增强、风格转换等多种场景，尤其对于需要快速处理大量图像的应用场景非常有用。