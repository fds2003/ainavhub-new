---
title: "Auto-Subtitled-Video-Generator Auto-Subtitled-Video-Generator Auto-Subtitled-Vid"
date: "2024-01-01 00:00:00+08:00"
description: Auto-Subtitled-Video-Generator Auto-Subtitled-Video-Generator  Auto-Subtitled-Video-Generator
slug: auto-subtitled-video-generator-youtube-txt-vtt-srt
tags:
- auto-subtitled-video-generator
- pytube
- streamlit
- huggingface
- openai
draft: false
related_tools:
- chat with the streamlit docs
- openai agents sdk
- claude code but with openai models
- openai.fm
- openai codex cli
---

## Auto-Subtitled-Video-Generator

## Auto-Subtitled-Video-Generator

##### 项目简介

Auto-Subtitled-Video-Generator是一个自动语音识别应用程序，可以通过输入YouTube视频链接或视频文件来生成带有字幕的视频。它还可以通过上传音频文件生成转录文本，支持生成.txt、.vtt、.srt格式的文件。

###### 功能

1. **语言检测和转录** ：检测视频的原始语言并进行转录。
2. **语言检测和翻译** ：检测视频语言，将其翻译成英文并进行转录。


###### 核心组件

* **视频下载** ：使用[pytube](<https://github.com/pytube/pytube>)从输入链接下载视频。
* **视频转录** ：利用[OpenAI Whisper](<https://openai.com/blog/whisper>)模型生成视频转录文本。
* **字幕文件生成** ：转录文本保存为.txt、.vtt和.srt格式文件。
* **生成带字幕视频** ：使用[ffmpeg](<https://github.com/FFmpeg>)生成带字幕的视频版本。
* **视频展示和下载** ：展示原始视频和带字幕视频，并提供.txt、.vtt、.srt文件和带字幕视频的下载。


###### 使用Web应用

* 使用[Streamlit](<https://streamlit.io>)构建多页面Web应用并托管在[HuggingFace Spaces](<https://huggingface.co/spaces>)。
* 你可以通过这个[链接](<https://huggingface.co/spaces/BatuhanYilmaz/Auto-Subtitled-Video-Generator>)使用该应用。


##### 使用场景

1. **教育和培训** ：为教学视频、在线课程添加字幕，提升学习效果。
2. **会议和讲座** ：为录制的会议或者在线讲座生成字幕，方便记录和查阅。
3. **内容创作者** ：为YouTube视频、博客视频添加字幕，增强观众体验，提高用户粘性。
4. **跨语言传播** ：将外语视频翻译成英文，并添加字幕，帮助跨语言传播信息。