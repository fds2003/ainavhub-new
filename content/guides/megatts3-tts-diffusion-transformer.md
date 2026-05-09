---
title: "MegaTTS3"
date: "2024-01-01 00:00:00+08:00"
description: MegaTTS3 MegaTTS3  TTS
slug: megatts3-tts-diffusion-transformer
tags:
- const
- gitalk
- model
- diffusion
- vae
draft: false
related_tools:
- graph-constrained reasoning
- claude code but with openai models
- ai model comparison tool
- open driving world models
- all model chat
---

## MegaTTS3

MegaTTS3 是字节跳动开源的一个轻量级、高效的文本到语音（TTS）合成系统。主要特点包括：

* **轻量级且高效：** TTS Diffusion Transformer 的主干网络仅有 0.45B 参数。
* **高质量语音克隆：** 具有优秀的语音克隆能力，能根据提供的音频样本生成相似的语音。
* **双语支持：** 支持中文和英文，以及中英文混合语境。
* **可控性：** 支持口音强度控制，并计划支持更精细的发音/时长调整。


该项目还包含其他有用的子模块，例如：

* **Aligner:** 语音-文本对齐模型，可用于数据集过滤、语音分割和音素识别等任务。
* **Graphme-to-Phoneme Model:** 字素到音素转换模型。
* **WaveVAE:** 波形 VAE，用于将语音压缩成低维声学隐变量，可作为语音合成模型的训练目标或用于语音转换。


总而言之，MegaTTS3 是一个功能强大且灵活的 TTS 系统，具有高质量的语音克隆能力和双语支持，同时提供了一系列有用的工具来支持语音处理任务。