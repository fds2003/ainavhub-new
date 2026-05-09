---
title: "Qwen3-ASR-Studio"
date: "2024-01-01 00:00:00+08:00"
description: Qwen3-ASR-Studio Qwen3-ASR-Studio ASR
slug: qwen3-asr-studio-asr
tags:
- indexeddb
- asr
- const
- gitalk
- picture-in-picture
draft: false
related_tools:
- index
- qwen3-asr-studio
- qwen3-asr-toolkit
- funasr
- asrtools
---

## Qwen3-ASR-Studio

Qwen3-ASR-Studio是一个功能丰富的网页应用，旨在为阿里云通义千问ASR模型提供强大、高效且用户友好的操作界面，核心功能聚焦于将语音便捷地转换为文本。它支持多种音频输入方式，包括文件上传（兼容多种格式）和带实时波形可视化的麦克风实时录音。该项目利用Qwen ASR模型进行快速准确的语音识别，并通过上下文提示显著提升识别精度，同时支持中英日等多语言自动检测，并可选地进行反向文本标准化（ITN）处理，将口语化表达转换为书面形式。为了优化用户体验，应用提供了一键录音（按住说话）、客户端音频压缩以减少上传时间，以及独特的画中画（Picture-in-Picture）模式，可实现全局语音输入法的功能。此外，它还配备了强大的工作流和生产力工具，如双模式编辑（单次处理与笔记模式）、自动保存历史记录（包含音频文件）、独立的笔记管理，以及所有数据（包括识别结果、历史、笔记和设置）在本地浏览器端（IndexedDB）的智能缓存，确保用户隐私并避免重复识别，并支持个性化设置如浅色/深色主题和自动复制识别结果。