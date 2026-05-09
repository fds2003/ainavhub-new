---
title: "Orpheus TTS Orpheus TTS Orpheus TTS"
date: "2024-01-01 00:00:00+08:00"
description: 'Orpheus TTS Orpheus TTS  Llama-3b '
slug: orpheus-tts-llama-3b-llm
tags:
- llama-3b
- finetuned
- llm
- pretrained
- tts
draft: false
related_tools:
- ama
- rllm
- onefilellm
- llmanager
- llm.pdf
---

## Orpheus TTS

Orpheus TTS 是一个基于 Llama-3b 的开源文本转语音 (TTS) 系统。它旨在利用大型语言模型 (LLM) 的能力进行语音合成，并拥有以下主要特性：

* **类人语音:** 能够生成自然流畅、富有情感和韵律的语音，甚至超越了某些闭源的领先模型。
* **零样本语音克隆:** 无需预先微调即可克隆语音。
* **情感和语调引导:** 可以通过简单的标签控制语音的情感和语调特征。
* **低延迟:** 具有约 200 毫秒的流式传输延迟，适合实时应用，通过输入流式传输可进一步降低到约 100 毫秒。


**Orpheus TTS 提供了三个模型:**

* **Finetuned Prod (微调生产模型):** 针对日常 TTS 应用进行了微调的模型。
* **Pretrained (预训练模型):** 在超过 10 万小时的英语语音数据上训练的基准模型。


**使用场景：**

由于其类人语音和低延迟特性，Orpheus TTS 适合以下应用场景：

* **语音助手:** 创建更自然、更具表现力的语音助手。
* **实时语音交互:** 在游戏、虚拟现实、在线教育等需要实时语音互动的应用中使用。
* **内容创作:** 为视频、播客等内容生成高质量的语音旁白。
* **辅助技术:** 为视力障碍人士提供文本阅读服务，或为需要辅助沟通的人士生成语音。
* **个性化语音体验:** 通过语音克隆和情感控制功能，为用户提供个性化的语音体验。
* **AI配音:** 提供AI配音解决方案。


此外，Orpheus TTS 还提供了数据处理脚本和示例数据集，方便用户创建自己的微调模型，满足特定需求。