---
title: "Seed-TTS"
date: "2024-01-01 00:00:00+08:00"
description: Seed-TTS Seed-TTS Seed
slug: seed-tts-seed
tags:
- const
- gitalk
- diffusion-based
- seed-ttsdit
- seed
draft: false
related_tools:
- graph-constrained reasoning
- seed-tts
- seed-thinking-v1.5
- seed-story
---

## Seed-TTS

Seed-TTS是一组高质量的多功能语音生成模型，由字节跳动的Seed团队开发。该模型可以生成与人类语音几乎无法区分的高仿真语音，表现优异，特别是在说话者相似度和自然度方面，能够与真实人类语音相媲美。通过微调，Seed-TTS的主观评估得分更高。

Seed-TTS具备优秀的控制能力，能够调节不同的语音属性如情感，并生成高度表现力多样化的语音。此外，提出了自蒸馏方法进行语音分层，以及强化学习策略以增强模型的稳健性、说话者相似度和控制能力。同时还展示了Seed-TTS的无自回归变体Seed-TTSDiT，它采用完全基于扩散（diffusion-based）的架构，不依赖于预估的音素时长，通过端到端处理实现语音生成。

Seed-TTS的核心功能包括零样本上下文学习、说话者微调、语音分层、通过强化学习实现偏好控制、完全基于扩散的语音生成等。其应用范围涵盖了多说话者语音生成、有感情控制的语音生成、跨语言内容创作、语音和内容编辑等多个领域。通过不同情感和说话者的控制，Seed-TTS展示了其在多样化语音生成场景中的强大能力。