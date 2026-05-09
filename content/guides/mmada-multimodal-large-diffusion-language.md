---
title: "MMaDA"
date: "2024-01-01 00:00:00+08:00"
description: 'MMaDA MMaDA (Multimodal Large Diffusion Language Models) '
slug: mmada-multimodal-large-diffusion-language
tags:
- cot
- diffusion
- language
- mmada-8b-base
- unigrpo
draft: false
related_tools:
- picotron
- diffusion toolkit
- streammultidiffusion
- scribble diffusion
- hidiffusion
---

## MMaDA

MMaDA (Multimodal Large Diffusion Language Models) 是一系列多模态扩散基础模型，旨在文本推理、多模态理解和文本到图像生成等多种领域实现卓越性能。它主要有三个创新点：

1. **统一的扩散架构** ：采用共享的概率公式和模态无关的设计，无需模态特定的组件。
2. **混合长链思考 (CoT) 微调策略** ： 在各种模态中构建统一的CoT格式。
3. **UniGRPO** ：基于策略梯度的强化学习算法，专为扩散基础模型定制。它利用多样化的奖励建模，统一了推理和生成任务的后训练，确保性能持续提升。


**MMaDA 的主要使用场景包括：**

* **文本生成** ：生成各种类型的文本内容，例如故事、诗歌、代码等。
* **多模态生成** ：生成包含文本和图像的内容，例如带有标题的图像或根据文本描述生成的图像。
* **图像生成** ：根据文本提示生成高质量图像。
* **多模态推理** ：理解和推理包含文本和图像信息的内容，例如回答关于图像的问题或解释图像中的场景。
* **提升其他多模态任务** ：作为基础模型，可以为其他多模态任务提供强大的支持。


MMaDA 系列模型包括：

* **MMaDA-8B-Base** ：具备基本的文本生成、图像生成、图像描述和思维能力。
* **MMaDA-8B-MixCoT** ：具备复杂的文本、多模态和图像生成推理能力（即将发布）。
* **MMaDA-8B-Max** ：擅长复杂的推理和优秀的视觉生成（即将发布）。


简单来说，MMaDA 是一个强大的多模态模型，它可以理解并生成文本、图像和多模态内容，并具有良好的推理能力。它可以通过各种微调策略针对不同的任务进行优化，从而广泛应用于各种场景。