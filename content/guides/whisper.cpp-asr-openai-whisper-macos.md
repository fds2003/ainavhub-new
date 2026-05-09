---
title: "whisper.cpp"
date: "2024-01-01 00:00:00+08:00"
description: 'whisper.cpp whisper.cpp  whisper.cpp '
slug: whisper.cpp-asr-openai-whisper-macos
tags:
- gpu
- whisper.cpp
- freebsd
- macos
- ios
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
---

## whisper.cpp

# whisper.cpp 中文总结及使用场景介绍

![whisper.cpp](https://user-images.githubusercontent.com/1991296/235238348-05d0f6a4-da44-4900-a1de-d0707e75b763.jpeg)

## 介绍

`whisper.cpp` 是一个高性能的自动语音识别（ASR）模型的推理实现，基于 OpenAI 的 Whisper 模型。核心特点如下：

* **纯 C/C++ 实现** ：无需其他依赖。
* **跨平台支持** ：包括 macOS (Intel 和 Arm)、iOS、Android、Linux、FreeBSD、Windows、WebAssembly、Raspberry Pi 和 Docker。
* **优化与支持** ：支持 Apple Silicon 的 ARM NEON、Accelerate 框架、Metal 和 Core ML。x86 架构支持 AVX 指令集，POWER 架构支持 VSX，GPU 上支持 NVIDIA 的 cuBLAS 以及 OpenVINO。
* **高效存储和处理** ：支持混合 F16/F32 精度、4 位和 5 位整数量化，无运行时内存分配，CPU 和 GPU 分别提供高效的推理支持。


## 使用场景

##### 1\. 离线语音转文本

`whisper.cpp` 可以在各种设备上本地运行，如手机、桌面和嵌入式设备。这使得它很适合做离线的语音转文本应用，例如：

* 离线语音助手
* 本地的语音输入系统
* 隐私保护的语音记事应用


##### 2\. 实时音频处理

`whisper.cpp` 提供了实时处理音频的能力，这可以用于：

* 实时字幕生成
* 实时语音控制系统
* 实时的会议记录与转录


##### 3\. 生成视频字幕与卡拉OK效果

通过处理音频文件并添加时间轴信息，可以生成带有卡拉OK效果的视频，适用于视频编辑、内容创作等场景。

##### 4\. 语言检测与翻译

`whisper.cpp` 支持多语言，可以自动检测语言并进行翻译，适合用于：

* 多语言字幕生成
* 语音翻译设备
* 多语言会议记录


##### 5\. 嵌入式设备应用

由于其对 ARM 架构（例如 Raspberry Pi）和低内存需求的支持，非常适合在小型嵌入式设备上运行来实现语音识别和控制。

## 快速入门

1. 克隆代码库：

git clone https://github.com/ggerganov/whisper.cpp.git


2. 下载模型文件：

bash ./models/download-ggml-model.sh base.en


3. 构建并运行示例：

make
./main -f samples/jfk.wav


4. 构建实时音频流处理工具：

make stream
./stream -m ./models/ggml-base.en.bin -t 8 --step 500 --length 5000


5. 生成卡拉OK效果：

./main -m ./models/ggml-base.en.bin -f ./samples/jfk.wav -owts
source ./samples/jfk.wav.wts
ffplay ./samples/jfk.wav.mp4


通过这几个步骤，你可以轻松地使用 `whisper.cpp` 进行多种语音处理任务，为各种设备和应用环境提供语音识别功能。