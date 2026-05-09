---
title: "'OpenAI-Compatible Edge-TTS API OpenAI-Compatible Edge-TTS API OpenAI-Compatible '"
date: "2024-01-01 00:00:00+08:00"
description: 'OpenAI-Compatible Edge-TTS API OpenAI-Compatible Edge-TTS API  Microsoft
  Edge '
slug: openai-compatible-edge-tts-api-microsoft-edge
tags:
- echo
- microsoft
- openai-compatible
- mp3
- edge
draft: false
related_tools:
- browser echo
- reecho 睿声 - 克隆名人声音的平台
- echomimicv2
- echomimic
- microsoft copilot for finance
---

## OpenAI-Compatible Edge-TTS API

OpenAI-Compatible Edge-TTS API 是一款基于 Microsoft Edge 的本地文本转语音（TTS）API，旨在与 OpenAI 的 TTS 接口兼容。它模拟了 OpenAI TTS 端点（`/v1/audio/speech`），允许用户使用多种语音选项和播放速度将文本生成语音。该项目使用 Microsoft Edge 的在线 TTS 服务，免费提供。

##### 功能特点

* **兼容 OpenAI 的接口** ：提供类似的请求结构和行为。
* **支持的语音** ：映射 OpenAI 的语音（如 alloy、echo、fable 等）与 `edge-tts` 的对应语音。
* **灵活的音频格式** ：支持多种音频格式（mp3、opus、aac、flac、wav、pcm）。
* **可调播放速度** ：支持调整播放速度（0.25x 到 4.0x）。
* **可选的语音选择** ：可以使用 OpenAI 语音映射或直接指定任何 `edge-tts` 语音。


##### 使用场景

OpenAI-Compatible Edge-TTS API 可以广泛应用于以下场景：

1. **语音助手** ：构建语音助手应用，增强用户交互体验。
2. **阅读辅助** ：为阅读障碍人士提供文本阅读服务，帮助其更好地获取信息。
3. **语音合成应用** ：在教育、娱乐等领域制作内容，通过语音传达信息。
4. **多语言支持** ：可以处理多种语言的文本，适合国际化产品。
5. **音频内容生成** ：为播客、视频配音等生成音频内容，提高内容制作效率。


该 API 可以通过 Docker 轻松部署和使用，支持使用 Python 运行以便于本地开发和测试。同时，通过简单的 API 请求，可以快速生成所需的语音输出。