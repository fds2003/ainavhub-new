---
title: "VideoSubtitleGenerator"
date: "2024-01-01 00:00:00+08:00"
description: 'VideoSubtitleGenerator VideoSubtitleGenerator '
slug: videosubtitlegenerator
tags:
- videosubtitlegenerator
draft: false
---

## VideoSubtitleGenerator

VideoSubtitleGenerator 是一个针对有特定需求的人群设计的小工具，它能够对一批没有字幕的外文视频文件自动添加字幕，并且可以把这些字幕翻译成另一种语言。这个工具是为了帮助那些想为视频自动生成并翻译字幕的用户减轻工作量，特别是对于那些有大量视频需要处理的用户来说，这个工具的批量处理功能尤其有用。

##### 在什么情况下会使用VideoSubtitleGenerator？

1. **大量外文视频需添加字幕：**如果你有大量的外文视频需要添加字幕，手动一个个处理会非常耗时和低效。VideoSubtitleGenerator可以自动批量处理，大大提高效率。

2. **需要将字幕翻译成另一种语言：**对于不懂原视频语言的观众，有时候需要将字幕翻译成他们能理解的语言。VideoSubtitleGenerator不仅可以生成字幕，还可以将其翻译成另一种语言。

3. **优化字幕生成和翻译流程：**当你不满意市面上现有的字幕生成与翻译工具，或者这些工具无法满足你的特定需求时，VideoSubtitleGenerator可以作为一个可定制化的本地解决方案。

4. **想要快速并且方便在多个视频之间切换字幕：**VideoSubtitleGenerator会将生成的字幕文件放在视频文件的同一目录下，这样用户就可以在观看视频时很方便地切换不同的字幕。


##### VideoSubtitleGenerator的核心功能：

* **提取视频中的音频：**通过ffmpeg从视频文件中提取音频，以便后续将其转换成文字。

* **通过whisper模型将音频转换为字幕文件：**使用目前效果很好的whisper模型来识别音频内容，并生成字幕文件（支持多种语言和模型规模选项）。

* **调用翻译API，实现字幕翻译：**支持多种翻译服务（百度、火山引擎、deeplx），让字幕翻译工作更为便捷。

* **批量处理视频文件：**自动处理指定目录下的所有视频文件，一键生成和翻译字幕，省时省力。

* **自定义字幕保存和翻译规则：**允许用户自定义字幕文件的命名规则和字幕内容的显示格式，以适应不同场景或个人偏好。


VideoSubtitleGenerator 是一个适合需要大量视频字幕生成和翻译、追求高效率操作的用户的工具。它解决了手动处理大量视频字幕的痛点，也提供了足够的自定义选项满足不同用户的需求。