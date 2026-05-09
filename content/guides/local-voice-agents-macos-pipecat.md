---
title: "Local voice agents on macOS with Pipecat Local voice agents on macOS with Pipeca"
date: "2024-01-01 00:00:00+08:00"
description: Local voice agents on macOS with Pipecat  GitHub
slug: local-voice-agents-macos-pipecat
tags:
- clientsecret
- macos
- github
- clientid
- ba3af7dcb9cbfcf08
draft: false
related_tools:
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- macos-style react desktop environment
- claude github webhook
---

## Local voice agents on macOS with Pipecat

该GitHub仓库展示了一个基于Pipecat开源框架的macOS本地实时语音AI代理。此代理的核心功能在于其低延迟（M系列Mac上可达800毫秒以下）的语音到语音交互能力，所有关键组件如语音活动检测、语音转文本、大语言模型处理和文本转语音均在本地运行。项目强调高度的模块化和可定制性，允许用户灵活替换模型（如Silero VAD、MLX Whisper、Gemma3 12B和Kokoro TTS）或重新配置整个处理管道，并支持工具调用、并行推理等高级功能。代理与基于React的Web客户端之间通过低延迟、无服务器的WebRTC连接进行通信，确保了高效的实时音频传输。为了支持大语言模型，用户需要运行一个本地的OpenAI兼容LLM服务器。