---
title: "Real-time Live Streaming Digital Human Real-time Live Streaming Digital Human"
date: "2024-01-01 00:00:00+08:00"
description: Real-time Live Streaming Digital Human  Real-time Live Streaming Digital
  Human
slug: real-time-live-streaming-digital-human
tags:
- streaming
- checkpoint
- nvidia
- render.pth
- render.pth.gz.001
draft: false
related_tools:
- heygen streaming avatar - 利用 heygen 的 ai 视频创作和 scriptgen ai 轻松生成脚本，提高工作效率。
- real-time live streaming digital human
- dia
- nvidia-ingest
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
---

## Real-time Live Streaming Digital Human

##### 实时直播数字人简介

**实时直播数字人（Real-time Live Streaming Digital Human）** 是一项基于少样本学习技术的项目，旨在提供流畅且互动性强的直播体验。该系统能够在NVIDIA 30和40系列显卡上高效运行，实现每秒25帧以上的实时性能。

###### 关键特性

* **实时性能** ：适用于NVIDIA 30和40系列显卡，提供超过25帧每秒的互动体验。
* **少样本学习** ：系统可以通过少量示例学习，生成逼真的响应。


###### 使用方法

1. **解压模型文件** ：

cd checkpoint
gzip -d -c render.pth.gz.001 > render.pth


2. **准备视频** ： 使用data_preparation脚本准备视频，将YOUR_VIDEO_PATH替换为你的视频路径：

python data_preparation YOUR_VIDEO_PATH


结果会保存在 `./video_data` 目录中。

3. **使用音频文件运行** ： 需确保音频文件为.wav格式，采样率为16kHz，单声道。将 `video_data/test` 替换为你的视频信息文件路径，`video_data/audio0.wav` 替换为音频文件路径，`1.mp4` 替换为输出视频路径：

python demo.py video_data/test video_data/audio0.wav 1.mp4


4. **使用麦克风进行实时运行** ： 只需运行以下命令：

python demo_avatar.py


##### 使用场景

* **虚拟主播** ：可以用于直播平台上的虚拟主播，实现与观众的实时互动。
* **在线教育** ：在远程教育中，提供逼真的数字教师，提高学习体验。
* **虚拟助理** ：在商业和服务领域，提供个性化的客户服务和支持。
* **娱乐和游戏** ：在游戏和影视行业中，用于创建交互式角色。


##### 致谢

感谢 [wavlip](<https://github.com/Rudrabha/Wav2Lip>), [dinet](<https://github.com/MRzzm/DINet>), [livespeechportrait](<https://github.com/YuanxunLu/LiveSpeechPortraits>) 仓库的贡献者们的公开研究和贡献。

##### 许可证

该项目采用MIT许可证。

##### 联系方式

如果有任何问题或建议，请联系: [kleinlee1@outlook.com]