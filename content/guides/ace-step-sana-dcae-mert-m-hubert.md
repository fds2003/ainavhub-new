---
title: "ACE-Step"
date: "2024-01-01 00:00:00+08:00"
description: 'ACE-Step ACE-Step  Sana '
slug: ace-step-sana-dcae-mert-m-hubert
tags:
- gpu
- stemgen
- rapmachine
- text2samples
- dcae
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- gemini 2.0 flash image generation and editing
- 4o-image-generation
- parallelized autoregressive visual generation
---

## ACE-Step

ACE-Step 是一款开源的音乐生成基础模型，旨在解决现有音乐生成方法在生成速度、音乐连贯性和可控性之间的权衡问题。它集成了基于扩散的生成方法、Sana 的深度压缩自编码器 (DCAE) 和轻量级线性转换器，并利用 MERT 和 m-hubert 在训练期间对齐语义表示，从而实现快速收敛。

**主要特点:**

* **高质量音乐生成:** 支持多种音乐风格和流派，以及包括中文在内的多种语言。
* **可控性:** 支持变体生成 (Variations Generation)、局部重绘 (Repainting) 和歌词编辑 (Lyric Editing) 等控制方式。
* **应用:** 提供诸如 Lyric2Vocal（歌词生成人声）、Text2Samples（文本生成采样）等LoRA微调模型，并计划推出 RapMachine（AI说唱生成）和 StemGen（分轨生成）等功能。
* **硬件加速:** 在A100 GPU上，仅需20秒即可生成长达4分钟的音乐，速度是基于LLM的基线的15倍。


**使用场景:**

ACE-Step可以被用于各种音乐相关的创作场景，例如：

* **音乐制作人:** 快速生成各种风格的音乐片段、人声demo，或者对现有音乐进行变奏、编辑和扩展。
* **歌曲作者:** 通过文本描述快速生成歌曲样本，或者将歌词转换为人声试听效果。
* **音乐爱好者:** 探索各种音乐风格，或者通过AI生成个性化的音乐内容。
* **研究人员:** 作为一个强大的基础模型，用于进一步研究和开发更先进的音乐AI技术，例如控制网的训练和歌唱到伴奏的生成。


总而言之，ACE-Step 致力于打造一个音乐 AI 的“Stable Diffusion 时刻”，为音乐艺术家、制作人和内容创作者提供一个快速、通用、高效且灵活的架构，简化音乐创作流程。