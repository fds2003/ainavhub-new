---
title: "Kokoro-FastAPI"
date: "2024-01-01 00:00:00+08:00"
description: 'Kokoro-FastAPI Kokoro-FastAPI  FastAPI '
slug: kokoro-fastapi-fastapi-docker-tts-api
tags:
- gpu
- gradio
- docker
- opus
- fastapi
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- gradio webrtc
- octopus v2
- kokoro-fastapi
---

## Kokoro-FastAPI

Kokoro-FastAPI 是一个基于 FastAPI 的 Docker 化文本转语音（TTS）API，封装了来自 Hugging Face 的 Kokoro-82M 模型。该 API 提供了 OpenAI 兼容的语音端点，支持多种语音组合功能，同时支持 NVIDIA GPU 加速的推理，具有极快的生成速度。

##### 主要特点

1. **开放API接口** ：可以通过 API 或 Gradio Web 界面访问服务。
2. **多语音组合** ：用户可以将现有的语音包进行平均组合，生成新的语音包，并在未来使用。
3. **多种输出格式** ：支持 MP3、WAV、OPUS、FLAC 等音频格式。
4. **流媒体支持** ：允许调整分块大小以控制延迟和音质。
5. **简易Web UI** ：提供图形用户界面，方便用户选择语音、格式和速度，并进行音频播放和下载。


##### 使用场景

Kokoro-FastAPI 的使用场景非常广泛，适用于以下几个方面：

* **语音合成** ：可以用于生成各种语音内容，如广告配音、语音助手等。
* **游戏和动画** ：为互动游戏或动画角色提供声音，提高沉浸感。
* **电子书和播客** ：将书本或文章的文本转换为语音，方便用户进行聆听。
* **教育和培训** ：创建语音内容用于在线教育平台，以支持听觉学习者。


Kokoro-FastAPI 的灵活性和高效性使其成为开发语音应用和内容创作的理想选择。