---
title: "OllamaYTSumm"
date: "2024-01-01 00:00:00+08:00"
description: 'OllamaYTSumm OllamaYTSumm:  YouTube'
slug: ollamaytsumm-youtube-ollama
tags:
- requirements.txt
- install
- python3
- main.py
- pip
draft: false
related_tools:
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
- gemini multimodal live api + pipecat
---

## OllamaYTSumm

# OllamaYTSumm: 用于总结YouTube视频的工具

OllamaYTSumm 是一个简单的YouTube视频摘要工具，使用本地AI Ollama服务器。由于当前网络内容极为丰富，我们很难有足够的时间观看所有视频，所以这个脚本的开发目的是在观看视频前先获取其摘要，从而决定是否值得花时间去观看。

## 使用技术

* Python
* [Ollama Server](<https://ollama.com/>)
* [ollama/ollama-python](<https://github.com/ollama/ollama-python>)
* [jdepoix/youtube-transcript-api](<https://github.com/jdepoix/youtube-transcript-api/>)


## 安装步骤

请确保您已经有一个正在运行的Ollama服务器。

**1\. 克隆仓库**


git clone https://github.com/HariTrigger/OllamaYTSumm/


**2\. 安装依赖**


cd OllamaYTSumm
pip install -r requirements.txt


## 运行脚本


python3 main.py


## 待办事项

* 优化系统提示，以期望在尽可能多的模型上获得最佳结果。
* 使脚本异步化，以便可以激活来自服务器响应的流，并实时查看结果。
* 制作一个网络UI，这样就不必依赖控制台来执行操作。（尚未确定具体方案，欢迎提供建议）


##### 免责声明

这个脚本是为了学习和解决自己问题而编写的。

## 贡献

欢迎任何形式的贡献，提前感谢那些做出贡献的人。

## 使用场景

1. **视频预览** ：快速获取视频内容摘要，从而决定是否值得观看。
2. **内容管理** ：帮助内容创作者管理、概述长期视频内容。
3. **学习辅助** ：对于需要从多个视频中获取信息的学生或研究人员，可以快速掌握内容要点。
4. **时间管理** ：帮助用户有效利用时间，不必观看完整视频即可获取核心信息。