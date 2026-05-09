---
title: "Baichuan-Audio Baichuan-Audio"
date: "2024-01-01 00:00:00+08:00"
description: Baichuan-Audio  Baichuan-Audio
slug: baichuan-audio-baichuan-audio-base
tags:
- openaudiobench
- baichuan-audio
- baichuan-audio-base
- token
draft: false
related_tools:
- udio
- baichuan-audio
- groq - 世界上最快的大模型，每秒可以输出近500个token
---

## Baichuan-Audio

百川智能开源了端到端的语音交互基础模型Baichuan-Audio，它整合了音频理解和生成能力，支持高质量、可控的实时中英双语对话。该模型包含两个版本：Baichuan-Audio-Base是未经过指令微调的基座模型，具有很强的可塑性；Baichuan-Audio则可以接收文本和音频作为输入，生成高质量的文本和音频输出，实现无缝的高质量语音交互，并保持预训练大语言模型的智能性，能够进行实时的语音对话。

Baichuan-Audio 的架构主要包含百川音频分词器、音频大语言模型和基于流匹配的音频解码器。音频首先被转换为离散的音频token，然后音频大语言模型交替生成文本和音频token，通过特殊token实现文本和音频模态的无缝切换。音频token由独立的音频头处理，并使用基于流匹配的音频解码器重建为高质量的梅尔谱图，最终通过声码器转换为音频波形。

为了评估模型的性能，百川智能还开源了音频理解和生成基准测试集OpenAudioBench。 模型训练使用了大量的音频数据，包括音频理解数据和音频生成数据，并采用了分阶段的训练策略，以避免语音和文本模态之间的冲突影响模型的智能性。

Baichuan-Audio 的使用场景非常广泛，例如：

* **语音助手:** 提供更自然流畅的语音交互体验。
* **语音翻译:** 实现实时中英双语语音翻译。
* **语音问答:** 基于语音进行信息检索和问答。
* **语音创作:** 辅助创作语音内容，如故事、诗歌等。
* **其他语音相关的应用:** 例如语音控制、语音识别等。


总而言之，Baichuan-Audio是一个功能强大且易于使用的开源语音交互模型，其强大的性能和广泛的应用场景使其在语音人工智能领域具有很大的潜力。