---
title: "Pandrator"
date: "2024-01-01 00:00:00+08:00"
description: 'Pandrator Pandrator Pandrator '
slug: pandrator-pdf-epub-srt
tags:
- pdf
- voicecraft
- rvc
- epub
- nisqa
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## Pandrator

**Pandrator简介**

Pandrator 是一个图形用户界面的有声书和配音生成工具，具有语音克隆和 AI 文本优化功能。基于开源软件，Pandrator 能够将文本、PDF、EPUB 和 SRT 文件转化为多语言的语音输出。这一工具旨在易于使用和安装，提供一键安装程序和图形用户界面。

Pandrator 利用 [XTTS](<https://huggingface.co/coqui/XTTS-v2>)、[Silero](<https://github.com/snakers4/silero-models>) 和 [VoiceCraft](<https://github.com/jasonppy/VoiceCraft>) 模型进行文本到语音的转换和语音克隆，通过 RVC_CLI 提升语音质量和克隆结果，并使用 NISQA 进行音质评估。此外，它还集成了 Text Generation Webui 的 API，用于本地 LLM 为文本预处理，支持在语音生成前进行广泛的文本操作。

虽然 Pandrator 目前处于初学者阶段，功能和可靠性方面还不够完善，但它依然是一个强大的工具，适用于各种需要生成有声内容或配音的场景。

##### 使用场景

Pandrator 的适用场景包括但不限于：

1. **有声书生成**

* 将书籍、文章等文本材料转换为有声内容，方便听书爱好者使用。
2. **外语学习**

* 生成多语言的音频输出，帮助学习者通过听力练习掌握新语言。
3. **视频配音**

* 通过处理 SRT 字幕文件，生成与视频同步的配音，并保存到视频文件中。
4. **电子书**

* 将 EPUB 或 PDF 格式的电子书转化为有声书，提供更便携的阅读体验。
5. **语音克隆**

* 利用语音样本，克隆特定声音，用于生成语音内容。


##### 安装与使用

Pandrator 提供了简单的一键安装程序，支持 Windows 和 Nvidia GPU 的用户。手动安装也很简单，详见官方文档。安装完成后，用户可以通过图形界面选择文本文件、配置 TTS 服务器（XTTS、Silero 或 VoiceCraft），设置语音和音频参数，并开始生成音频输出。

##### 功能

1. **文本预处理** ：分割句子并尝试保留段落，支持多种语言的预处理配置。
2. **LLM 文本预处理** ：利用本地 LLM 进行文本纠正和优化，支持多次提示处理和模型选择。
3. **音频生成** ：转换处理后的文本为语音，支持 voice cloning 和质量提升。
4. **音质评估** ：使用 NISQA 模型评估生成的音频质量，并选择最佳的音频输出。
5. **配音生成** ：从字幕文件生成语音并与视频音轨混合，生成视频配音。
6. **会话管理** ：支持创建、删除和加载会话，方便工作流程管理。
7. **图形用户界面（GUI）** ：使用 customtkinter 提供用户友好的操作界面。


Pandrator 是一个处于发展初期的工具，虽然还不完美但已经具有强大的功能，对于需要生成有声书或配音的用户来说，是一款值得尝试的工具。