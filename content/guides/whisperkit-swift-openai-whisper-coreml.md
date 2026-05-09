---
title: "WhisperKit"
date: "2024-01-01 00:00:00+08:00"
description: 'WhisperKit WhisperKit WhisperKit '
slug: whisperkit-swift-openai-whisper-coreml
tags:
- package
- argmaxinc
- transcri
- swift
- whisperkit-cli
draft: false
related_tools:
- kag
- ai podcast transcriber
- ai video transcriber
- mlx-swift-chat
- langchain swift
---

## WhisperKit

##### WhisperKit简介

**WhisperKit** 是一个Swift软件包，它将OpenAI的热门语音识别模型 [Whisper](<https://github.com/openai/whisper>) 与苹果的CoreML框架集成，旨在实现高效的本地推理，专为苹果设备设计。

你可以通过[TestFlight](<https://testflight.apple.com/join/LPVOyJZW>)来查看演示应用。

##### 安装方法

1. **Swift Package Manager** ：可以通过Swift Package Manager将WhisperKit集成到你的Swift项目中:

* 打开项目并选择 `File > Add Package Dependencies...`
* 输入仓库地址: `https://github.com/argmaxinc/whisperkit`
* 选择版本并完成添加
2. **Homebrew** ：你可以使用Homebrew来安装命令行版本：

brew install whisperkit-cli


##### 使用示例

1. 初始化并转录本地音频文件：

import WhisperKit

Task {
let pipe = try? await WhisperKit()
let transcription = try? await pipe!.transcribe(audioPath: "path/to/your/audio.{wav,mp3,m4a,flac}")?.text
print(transcription)
}


2. **模型选择** ：可以自动下载推荐的模型，也可以指定特定的模型：

let pipe = try? await WhisperKit(model: "large-v3")


##### 主要使用场景

* **语音转文本** ：将本地存储的音频文件转换为文本，适用于语音备忘录转录、会议记录生成等场景。
* **实时语音识别** ：通过麦克风实时转录语音，适用于语音助手、即时语音输入等场景。


##### 贡献与计划

WhisperKit鼓励社区贡献，欢迎在GitHub上查看[贡献指南](<CONTRIBUTING.md>)，发布issue或提交pull request，同时可以查看未来开发计划。WhisperKit的目标是不断优化和增加新功能。

##### 授权与引用

WhisperKit基于MIT许可协议发布。如果你在学术工作中使用了WhisperKit，可以使用以下BibTeX条目进行引用：


@misc{whisperkit-argmax,
title = {WhisperKit},
author = {Argmax, Inc.},
year = {2024},
URL = {https://github.com/argmaxinc/WhisperKit}
}