---
title: "SenseVoice"
date: "2024-01-01 00:00:00+08:00"
description: 'SenseVoice SenseVoice  SenseVoice '
slug: sensevoice-asr-lid-ser-aed
tags:
- asr
- ms
- huggingface
- sensevoice
- aed
draft: false
related_tools:
- qwen3-asr-studio
- qwen3-asr-toolkit
- funasr
- asrtools
- aurasr
---

## SenseVoice

# SenseVoice 简介

SenseVoice 是一个多功能的语音基础模型，具有自动语音识别 (ASR)、口语语言识别 (LID)、语音情感识别 (SER) 和音频事件检测 (AED) 多种语音理解能力。

[在线演示](<https://www.modelscope.cn/studios/iic/SenseVoice>) | [模型库：modelscope](<https://www.modelscope.cn/models/iic/SenseVoiceSmall>) | [huggingface](<https://huggingface.co/FunAudioLLM/SenseVoiceSmall>)

## 亮点 🎯

**SenseVoice** 专注于高精度多语言语音识别、语音情感识别和音频事件检测。

* **多语言语音识别** ：训练数据超过 400,000 小时，支持 50 多种语言，识别性能超越 Whisper 模型。
* **丰富的转录** ：
* 具备出色的情感识别能力，在测试数据上达到并超越当前最佳情感识别模型的效果。
* 提供声音事件检测功能，支持检测各种常见的人机交互事件，如背景音乐、掌声、笑声、哭声、咳嗽和打喷嚏。
* **高效推理** ：SenseVoice-Small 模型采用非自回归端到端框架，推理延迟极低。处理 10 秒音频仅需 70ms，比 Whisper-Large 快 15 倍。
* **方便的微调** ：提供便捷的微调脚本和策略，用户可根据业务场景轻松解决长尾样本问题。
* **服务部署** ：提供服务部署管道，支持多并发请求，客户端语言包括 Python、C++、HTML、Java 和 C# 等。


## 使用场景

SenseVoice 适用于各种需要语音处理和理解的场景，包括但不限于：

1. **多语言自动语音识别系统** ：可用于电话客服、语音助理、智能翻译设备等，需要支持多种语言的高精度语音识别。
2. **情感识别和分析** ：适用于客服、市场调查、心理咨询等需要语音情感分析的场景，帮助更好地理解用户情感状态。
3. **音频事件检测** ：在智能家居、安全监控、医疗监护等场景中，需要检测和识别各种音频事件，例如背景噪音、笑声、哭声等。
4. **跨平台和多语言支持的服务部署** ：为企业提供多语言多平台的语音处理解决方案，包括网页、移动应用等场景。


SenseVoice 提供了高效的推理能力和便捷的微调工具，使其能够快速集成到各种实际应用中，并满足多样化的语音处理需求。