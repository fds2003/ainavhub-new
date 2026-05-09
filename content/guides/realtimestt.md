---
title: "RealtimeSTT"
date: "2024-01-01 00:00:00+08:00"
description: RealtimeSTT RealtimeSTT
slug: realtimestt
tags:
- gpu
- pytorch
- torch
- realtimestt
- cu118
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- ttt-lm-pytorch
- realtimestt
- dia
---

## RealtimeSTT

RealtimeSTT是一个易于使用、低延迟的实时语音转文本库。它通过监听麦克风并将语音转录为文本，是语音助手和需要快速且精准的语音转文本应用的理想选择。其主要特点包括：

1. **语音活动检测** ：自动检测用户何时开始和停止说话。
2. **实时转录** ：实时将语音转录为文本。
3. **唤醒词激活** ：可通过预设的唤醒词启动录音。


##### 使用场景

* **语音助手** ：如智能家居设备、虚拟秘书等，需要实时响应用户指令的应用。
* **翻译应用** ：实时语音翻译，可以应用于旅游、语言学习等场景。
* **开放式AI对话接口** ：通过语音激活与OpenAI接口进行交互的应用。
* **其他需要实时语音转文本的应用** ：如会议记录、直播字幕生成等。


##### 安装指南

###### 基本安装


pip install RealtimeSTT


###### GPU支持（推荐）

1. **安装NVIDIA CUDA Toolkit 11.8** 。
2. **安装NVIDIA cuDNN 8.7.0 for CUDA 11.x** 。
3. **安装ffmpeg** ，可以使用系统包管理器或者下载相应安装程序。
4. **安装支持CUDA的PyTorch** ：

pip uninstall torch
pip install torch==2.0.1+cu118 torchaudio==2.0.2 --index-url https://download.pytorch.org/whl/cu118


###### 其他依赖


pip install -r requirements.txt


##### 更新日志

近期的更新包括增加了唤醒词配置、新增了OpenAI接口的接入和Edge-TTS的接入，以及改进了WebUI和GPT-Sovits新API的兼容。

##### 快速开始

基本用法可以通过手动和自动两种录音方式实现，以及支持回调函数以异步处理转录结果。

###### 手动录音


recorder.start()
recorder.stop()
print(recorder.text())


###### 自动录音


with AudioToTextRecorder() as recorder:
print(recorder.text())


##### 配置选项

`AudioToTextRecorder`类的初始化参数中提供了多种配置选项，如模型大小、语言编码、输入设备索引、GPU设备索引等。此外，还支持各种回调函数，以便在录音开始、停止和转录过程中执行特定操作。

###### 实时转录和唤醒词配置

可以启用实时转录，并指定唤醒词以激活录音功能。唤醒词可以选择如"Alexa"，“Hey Google"等常见的命令词。

##### 贡献与许可

欢迎贡献，并且该项目采用MIT许可证。

项目作者：Kolja Beigel，详细信息参见[GitHub](<https://github.com/KoljaB/RealtimeSTT>)。