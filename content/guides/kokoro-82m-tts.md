---
title: "Kokoro-82M"
date: "2024-01-01 00:00:00+08:00"
description: Kokoro-82M Kokoro-82M TTS
slug: kokoro-82m-tts
tags:
- gpu
- const
- gitalk
- clientsecret
- clientid
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- graph-constrained reasoning
- styletts2
- kokoro-fastapi
---

## Kokoro-82M

Kokoro-82M是一款前沿的文本转语音（TTS）模型，拥有8200万参数，支持将文本转换为音频。该模型于2024年12月25日发布，并在同年年底前陆续推出了多种声音包。Kokoro-82M在TTS领域的表现尤为突出，尽管训练数据少于100小时，但在多个对比测试中显示出优异的性能，超越了许多参数更多的模型。

Kokoro-82M的架构属于StyleTTS 2，专注于美国和英国英语的发音，提供丰富的声音包选择。模型支持Apache 2.0许可证，可以免费使用和修改。

在训练过程中，Kokoro使用了许可的非版权音频数据，通过80GB的A100 GPU实例进行训练。该模型的局限性包括缺乏声音克隆能力，主要训练于长篇朗读和叙述音频，而非对话音频。

用户可以在Hugging Face平台上体验Kokoro的在线演示，进行文本转语音的转换。该模型在社区中得到了积极的反馈，并受到开发者和研究人员的广泛关注。