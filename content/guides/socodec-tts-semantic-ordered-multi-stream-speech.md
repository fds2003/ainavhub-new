---
title: "SoCodec"
date: "2024-01-01 00:00:00+08:00"
description: 'SoCodec SoCodec，，（TTS）。《SoCodec: A Semantic-Ordered Multi-Stream Speech
  Codec for Efficient Language Mod...'
slug: socodec-tts-semantic-ordered-multi-stream-speech
tags:
- semantic-ordered
- const
- client
- based
- model
draft: false
related_tools:
- graph-constrained reasoning
- xiaozhi client
- zin mcp client
- fully client-side chat over documents
- client-researcher
---

## SoCodec

SoCodec是一种语义有序的多流语音编解码器，专为语音语言模型设计，旨在高效地进行基于语言模型的文本转语音（TTS）合成。其论文标题为《SoCodec: A Semantic-Ordered Multi-Stream Speech Codec for Efficient Language Model based Text-To-Speech Synthesis》。该编解码器能够以超低比特率0.47 kbps和120毫秒的帧移将音频压缩为离散代码。

##### 使用场景

SoCodec可以作为EnCodec或其他多流编解码器在语音语言建模应用中的替代方案。其主要适用于以下场景：

1. **文本转语音合成** ：可用于生成高质量的自然语音，尤其在资源受限的环境中表现优异。
2. **语音分析** ：支持从语音信号提取特征，方便进行后续的分析和研究。
3. **音频内容压缩** ：提供高效的音频编码，适用于需要低带宽传输的应用场景。


目前，发布的检查点仅支持中文，未来将推出多语言版本。总体而言，SoCodec展示了在语音处理领域尤其是在TTS系统中的广泛应用潜力。