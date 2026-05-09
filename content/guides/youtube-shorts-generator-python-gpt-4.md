---
title: "AI Youtube Shorts Generator AI Youtube Shorts Generator AI YouTube Shorts Genera"
date: "2024-01-01 00:00:00+08:00"
description: 'AI Youtube Shorts Generator AI YouTube Shorts Generator  AI YouTube
  Shorts Generator '
slug: youtube-shorts-generator-python-gpt-4
tags:
- url
- shorts
- python
- gpt-4
- generator
draft: false
related_tools:
- moneyprinter - 自动化本地创建youtube shorts视频的程序，用户只需提供一个谈论的主题即可
- ai youtube shorts generator
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
---

## AI Youtube Shorts Generator

# AI YouTube Shorts Generator 简介

AI YouTube Shorts Generator 是一个Python工具，旨在从长视频中生成引人入胜的YouTube短视频。通过利用GPT-4和Whisper的强大功能，它可以提取最有趣的亮点，检测视频中的发言者，并将内容垂直裁剪以适应短视频格式。当前版本为0.1，可能存在一些漏洞。

## 主要功能

* **视频下载** ：提供YouTube URL后，工具会下载视频。
* **转录** ：使用Whisper将视频内容转录为文本。
* **亮点提取** ：利用OpenAI的GPT-4识别视频中最有趣的部分。
* **发言者检测** ：检测视频中的发言者。
* **垂直裁剪** ：将提取的亮点部分垂直裁剪，适合用于短视频。


## 使用场景

1. **内容创作者** ：帮助YouTube内容创作者从长视频中快速生成点击量高的YouTube Shorts内容。
2. **营销人员** ：为营销人员提供一种快速制作短视频宣传内容的方法，提升品牌曝光度。
3. **教育领域** ：教师可以利用该工具将长时间的授课视频提炼成短小精悍的教学片段，方便学生快速学习。
4. **新闻和媒体公司** ：新闻机构可以使用该工具提取长新闻视频中的关键片段，制作短视频新闻，提高信息传播效率。


## 安装步骤

##### 前提条件

* Python 3.7 或更高版本
* FFmpeg
* OpenCV


##### 安装步骤

1. 克隆仓库：

git clone https://github.com/SamurAIGPT/AI-Youtube-Shorts-Generator.git
cd AI-Youtube-Shorts-Generator


2. 安装所需的Python包：

pip install -r requirements.txt


3. 设置环境变量。创建一个 `.env` 文件，并添加你的 OpenAI API 密钥：

OPENAI_API=your_openai_api_key_here


## 使用方法

1. 确保 `.env` 文件中已正确设置 OpenAI API 密钥。

2. 运行主脚本，并在提示时输入所需的YouTube URL：

python main.py


## 贡献

欢迎贡献！请fork该仓库并提交pull request。

## 许可证

本项目遵循MIT许可证。

## 免责声明

这是一个v0.1版本，可能存在一些漏洞。请在 [GitHub Repository](<https://github.com/SamurAIGPT/AI-Youtube-Shorts-Generator>) 上报告任何问题。

##### 其他有用的视频AI项目

* [Text to Video AI](<https://github.com/SamurAIGPT/Text-To-Video-AI>)
* [Faceless Video Generator](<https://github.com/SamurAIGPT/Faceless-Video-Generator>)
* [AI B-roll generator](<https://github.com/Anil-matcha/AI-B-roll>)