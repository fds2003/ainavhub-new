---
title: "AudioNotes"
date: "2024-01-01 00:00:00+08:00"
description: AudioNotes AudioNotes  AudioNotes
slug: audionotes-funasr-qwen2-markdown-asr
tags:
- asr
- funasr
- markdown
- audionotes
- pull
draft: false
related_tools:
- qwen3-asr-studio
- qwen3-asr-toolkit
- funasr
- asrtools
- aurasr
---

## AudioNotes

##### AudioNotes 简介

AudioNotes是一款基于FunASR和Qwen2构建的音视频转结构化笔记系统。该系统能够快速提取音视频内容，并调用大模型进行整理，生成结构化的Markdown笔记，便于快速阅读和理解。

* **FunASR** ：用于音频自动语音识别（ASR），实现音频内容的提取。
* **Qwen2** ：一个大模型，用于结构化和总结提取出来的音频内容。


###### 效果展示

* **音视频识别和整理** ：能够识别音视频中的语音内容并整理为笔记。
* **与音视频内容对话** ：支持与解析出的内容进行交互。


##### 使用场景

1. **会议记录** ：将会议录音整理成结构化的笔记，便于查阅和跟踪任务。
2. **教育领域** ：将课堂录音或视频自动转化为整理好的笔记，辅助学生复习。
3. **媒体与播客** ：将采访或节目录音内容整理成文字笔记，方便编辑和发布。


##### 使用方法

###### ① 安装 Ollama

首先需要安装Ollama。具体步骤是下载对应系统的安装包并安装：[Ollama 下载链接](<https://ollama.com/download>)

###### ② 拉取模型

接着以阿里的千问2 7b模型为例，拉取相应的模型：


ollama pull qwen2:7b


###### ③ 部署服务

有两种部署方式：Docker部署和本地部署。

####### Docker部署（推荐）


curl -fsSL https://github.com/harry0703/AudioNotes/raw/main/docker-compose.yml -o docker-compose.yml
docker-compose up


启动后，访问 <http://localhost:15433/>

####### 本地部署 需要先配置一个可访问的PostgreSQL数据库，然后运行以下命令：


conda create -n AudioNotes python=3.10 -y
conda activate AudioNotes
git clone https://github.com/harry0703/AudioNotes.git
cd AudioNotes
pip install -r requirements.txt


接着，将`.env.example`重命名为`.env`并修改相关配置信息，最后启动服务：


chainlit run main.py


启动后，访问 <http://localhost:8000/>