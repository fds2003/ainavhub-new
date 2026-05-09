---
title: "Unmute"
date: "2024-01-01 00:00:00+08:00"
description: Unmute Unmute，（LLM）。Kyutai（STT）（TTS）LLM，，LLM，。，STTTTS，...
slug: unmute-llm-kyutai-stt-tts
tags:
- gpu
- traefik
- const
- gitalk
- unmute
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- graph-constrained reasoning
- unmute
- smart composer
---

## Unmute

Unmute是一个创新的系统，旨在赋予文本大语言模型（LLM）实时语音交互能力。其核心功能是通过Kyutai的语音转文本（STT）和文本转语音（TTS）模型将LLM包裹起来，实现用户通过语音输入，LLM生成文本响应，然后将文本响应朗读出来的全流程。该系统设计强调低延迟，STT和TTS服务均经过优化，且兼容任何文本LLM，用户可选择自托管LLM（如基于VLLM）或使用外部API。Unmute的架构由前端、后端、独立的STT、LLM和TTS服务以及Traefik路由组成，通过WebSocket实现浏览器与后端之间的实时音频和数据传输。项目支持多种部署方式，其中Docker Compose因其能简化多服务同时运行的复杂性而被推荐，同时支持多GPU部署以进一步优化语音处理延迟。此外，Unmute提供了高度的可配置性，允许用户自定义角色语音和系统提示，并通过基于OpenAI实时API的协议实现了前端的可替换性，为未来集成工具调用等高级功能奠定了基础。