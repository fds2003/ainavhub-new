---
title: "Qwen3-ASR-Toolkit"
date: "2024-01-01 00:00:00+08:00"
description: Qwen3-ASR-Toolkit Qwen3-ASR-Toolkit  Python
slug: qwen3-asr-toolkit-python-qwen-asr-api-vad
tags:
- id
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- location.pathname
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## Qwen3-ASR-Toolkit

Qwen3-ASR-Toolkit 是一个先进的Python命令行工具，旨在增强Qwen-ASR API的音频转录能力。该项目通过智能语音活动检测（VAD）将长时间的音频或视频文件切割成不超过3分钟的短片段，并利用多线程并行处理这些片段，从而突破了官方API的3分钟时长限制，实现了对数小时内容的快速高效转录。它支持各种音视频格式（得益于FFmpeg），能够自动重采样音频以符合API要求，并提供简洁的命令行界面进行操作，用户需提供DashScope API Key来使用其核心功能。