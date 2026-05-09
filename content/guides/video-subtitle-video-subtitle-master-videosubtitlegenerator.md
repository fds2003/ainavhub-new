---
title: "video-subtitle video-subtitle Video-subtitle-master"
date: "2024-01-01 00:00:00+08:00"
description: 'video-subtitle Video-subtitle-master  VideoSubtitleGenerator '
slug: video-subtitle-video-subtitle-master-videosubtitlegenerator
tags:
- whisper.cpp
- video-subtitle
- video-subtitle-master
- deeplx
- videosubtitlegenerator
draft: false
related_tools:
- deeplxfile
- local whisper
- whisper app
- betterwhisperx
- whisper-tiktok
---

## video-subtitle

Video-subtitle-master 是一个可以批量为视频生成字幕并翻译字幕的客户端工具，它基于之前的开源项目 VideoSubtitleGenerator 制作而成，旨在方便用户更便捷地生成和翻译视频字幕。

**主要功能特性：**

* **图形用户界面：** 提供了友好的操作界面，简化操作流程。
* **批量处理：** 支持批量处理视频、音频和字幕文件。
* **生成字幕：** 可以从视频或音频文件中自动生成字幕。
* **翻译字幕：** 支持将字幕翻译成多种语言。
* **多种翻译服务：** 支持火山引擎翻译、百度翻译、DeepLX、Ollama 本地模型以及 OpenAI 风格 API (deepseek, Azure 等)等多种翻译服务。
* **字幕文件管理：** 生成的字幕文件与视频文件放在同一目录下，方便播放器加载。
* **自定义字幕文件名和内容：** 可以自定义字幕文件名，并选择翻译后的字幕内容格式（纯翻译或原文+翻译）。
* **性能优化：** 集成了 `whisper.cpp`，在 Apple Silicon 上进行了优化，提升生成速度。
* **依赖集成：** 集成了 `fluent-ffmpeg`，无需单独安装 `ffmpeg`。
* **本地 Whisper 命令：** 支持运行本地安装的 `whisper` 命令。
* **模型下载源选择：** 支持选择模型下载源（国内镜像源或官方源）。
* **并发任务控制：** 支持自定义并发任务数量。
* **Core ML 支持：** 在苹果芯片上，支持使用 Core ML 加速语音识别 (1.20.0 版本开始)。


**使用场景：**

* **视频制作人员：** 快速为大量视频添加字幕，提高工作效率。
* **外语学习者：** 为外语视频生成字幕并翻译，辅助语言学习。
* **需要字幕的视频发布者：** 为视频生成多语言字幕，扩大受众范围。
* **听力障碍者：** 为视频生成字幕，方便观看。
* **需要对现有字幕进行翻译的用户：** 可以将现有字幕翻译成其他语言，方便不同语言背景的人观看视频。
* **研究人员和开发者：** 利用该工具进行语音识别和翻译方面的研究。
* **教育机构：** 制作带有字幕的教学视频，方便不同语言背景的学生学习。