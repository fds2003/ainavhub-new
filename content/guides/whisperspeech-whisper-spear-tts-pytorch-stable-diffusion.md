---
title: "WhisperSpeech"
date: "2024-01-01 00:00:00+08:00"
description: WhisperSpeech WhisperSpeech Whisper
slug: whisperspeech-whisper-spear-tts-pytorch-stable-diffusion
tags:
- spear
- meta
- pl
- whisper
- fr
draft: false
related_tools:
- meta agents research environments
- meta llama 3
- meta lingua
- meta 明天可能发布 llama 3.1 405b 模型
- playwright mcp server
---

#### WhisperSpeech

WhisperSpeech是一个开源的文本转语音系统，由Whisper进行反向构建而成，之前被称为spear-tts-pytorch。他们希望这个模型能够成为类似于Stable Diffusion的语音模型，即既强大又易于定制。他们目前仅使用具有合适许可的语音录音进行训练，并且所有代码都是开源的，因此该模型在商业应用中始终是安全的。目前，这些模型是在英语LibreLight数据集上训练的，下一个版本计划针对多种语言进行训练。他们成功在en+pl+fr数据集上训练了一个小型的S2A模型，可以用来进行法语的语音克隆。他们还在不断优化推理性能，并且希望能够训练一个支持全世界所有语言的单一语义令牌模型。他们还计划收集更多的情感语音数据集，并寻找一种在情感和语调上进行生成的方式。总体架构与AudioLM、Google的SPEAR TTS和Charactr Inc的MusicGen类似。他们利用OpenAI的Whisper来生成语义令牌，利用Meta的EnCodec进行声学建模，以及Charactr Inc的Vocos作为高质量的声码器。这个项目的开发和模型训练得到了Collabora和LAION的慷慨赞助，还得到了Jülich Supercomputing Centre的支持。他们欢迎个人和团体进行贡献并提供咨询服务。至于具体的开源项目和研究论文，他们引用了许多开源项目和研究论文。