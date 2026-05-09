---
title: "Parler-TTS"
date: "2024-01-01 00:00:00+08:00"
description: Parler-TTS Parler-TTS  TTS
slug: parler-tts-tts-stability-dan-lyth
tags:
- lyth
- const
- gitalk
- mini
- stability
draft: false
related_tools:
- graph-constrained reasoning
- gemini 2.0 flash image generation and editing
- gemini 2.5
- gemini coding agent
- gemini 2.5 flash
---

## Parler-TTS

Parler-TTS 是一个轻量级的文本转语音（TTS）模型，能够根据特定发音者的风格（性别、音调、说话风格等）生成高质量且自然的语音。它是由Stability AI与爱丁堡大学的Dan Lyth和Simon King撰写的论文《通过合成注释指导高保真文本转语音的自然语言》中的工作再现。

与其他TTS模型不同，Parler-TTS是完全开源的，所有数据集、预处理、训练代码和权重均公开在一个宽松的许可下发布，方便社区在此基础上进一步开发自己的TTS模型。

主要组成部分包括：

* Parler-TTS库：用于使用和训练高质量TTS模型。
* Data-Speech代码库：用于大规模注释语音特征。
* 发布的数据集和权重。


此外，Parler-TTS发布了两个新的版本检查点Parler-TTS Mini v1和Large v1，这些版本经过训练后在语音生成的质量和速度上有进一步提升，并引入了发音者一致性。

社区和开发人员可以通过GitHub库了解更多关于模型的训练方法，并对模型进行微调。