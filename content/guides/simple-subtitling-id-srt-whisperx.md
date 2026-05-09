---
title: "Simple subtitling Simple subtitling Simple Subtitling"
date: "2024-01-01 00:00:00+08:00"
description: 'Simple subtitling Simple Subtitling  Simple Subtitling '
slug: simple-subtitling-id-srt-whisperx
tags:
- id
- embedding
- subtitling
- ahc
- simple
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## Simple subtitling

**Simple Subtitling 简介**

Simple Subtitling 是一个用于自动生成影视剧字幕的工具，它能从音频文件中提取语音，生成带有时间戳和说话人 ID 的字幕文件 (SRT)。其工作流程如下：

1. **语音转录与时间戳：** 使用 WhisperX 将音频转换为带有时间戳的文本。
2. **说话人嵌入提取：** 在句子级别提取说话人的特征向量 (embedding)。
3. **说话人聚类：** 通过凝聚层次聚类 (AHC) 将这些特征向量分组，并分配说话人 ID。
4. **可选的说话人命名：** 如果你提供每个演员的语音样本（音频范例），系统会使用这些样本为说话人分配准确的姓名。


**使用场景**

* **自动生成影视剧字幕：** 适用于需要快速生成字幕的场景，例如短视频平台、影视制作后期等。
* **会议录音转录与说话人区分：** 可以用于会议录音的转录，并区分不同发言人，方便整理会议纪要。
* **采访录音转录与整理：** 适用于记者或研究人员整理采访录音，生成带说话人标签的文本。
* **教育视频字幕生成：** 可以帮助教育视频制作者快速生成字幕，方便学生理解内容。


**总结：** Simple Subtitling 是一个方便快捷的字幕生成工具，特别适用于单人语音场景，能够自动提取语音、生成字幕，并识别说话人。 通过使用音频范例，可以为说话人分配准确的姓名，进一步提升字幕的可用性。