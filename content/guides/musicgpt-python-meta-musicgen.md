---
title: "MusicGPT"
date: "2024-01-01 00:00:00+08:00"
description: 'MusicGPT MusicGPT  MusicGPT '
slug: musicgpt-python-meta-musicgen
tags:
- gpu
- meta
- install
- brew
- windows
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- meta agents research environments
- meta llama 3
- meta lingua
---

## MusicGPT

##### MusicGPT 简介

MusicGPT 是一个能够根据自然语言提示生成音乐的应用程序。它能够在本地高效地运行最新的音乐生成AI模型，而无需安装诸如Python或其他机器学习框架的重量级依赖项。当前版本仅支持Meta的[MusicGen](<https://audiocraft.metademolab.com/musicgen.html>)模型，但计划未来支持更多的音乐生成模型，使用户可以透明地使用不同的模型。

项目的主要里程碑包括：

* 基于文本的音乐生成
* 基于旋律的音乐生成
* 无限时长的音乐流


##### 安装方式

###### Mac 和 Linux

可以使用 `brew` 安装：


brew install gabotechs/taps/musicgpt


或者直接从[这个链接](<https://github.com/gabotechs/MusicGPT/releases/latest>)下载预编译的二进制文件。

###### Windows

在Windows上，可以从[这个链接](<https://github.com/gabotechs/MusicGPT/releases/latest/download/x86_64-pc-windows-msvc.tar.gz>)下载可执行文件。

###### Docker（推荐使用CUDA运行）

如果您希望在CUDA支持的GPU上运行MusicGPT，可以使用Docker：


docker pull gabotechs/musicgpt
docker run -it --gpus all -p 8642:8642 -v ~/.musicgpt:/root/.local/share/musicgpt gabotechs/musicgpt --gpu --ui-expose


###### 使用cargo

如果您已安装Rust工具链，可以使用 `cargo` 安装：


cargo install musicgpt


##### 使用方式

有两种方式与MusicGPT交互：UI模式和CLI模式。

###### UI模式

该模式将显示一个类似于聊天的网页应用，用于与LLM交换提示。它可以：

* 存储您的聊天记录
* 允许您随时播放生成的音乐样本
* 在后台生成音乐样本
* 允许您在不同设备上使用UI


运行UI只需执行以下命令：


musicgpt


您也可以选择不同的模型和是否使用GPU，例如：


musicgpt --gpu --model medium


建议使用Docker和CUDA支持的GPU：


docker run -it --gpus all -p 8642:8642 -v ~/.musicgpt:/root/.local/share/musicgpt gabotechs/musicgpt --ui-expose --gpu


###### CLI模式

该模式将直接在终端生成并播放音乐，允许您提供多个提示并实时播放生成的音频。例如：


musicgpt "Create a relaxing LoFi song"


默认生成10秒的样本，可以配置最多生成30秒：


musicgpt "Create a relaxing LoFi song" --secs 30


有多个可用模型，默认使用最小的模型，但可以选择更大的模型：


musicgpt "Create a relaxing LoFi song" --model medium


仍然建议使用Docker和CUDA支持的GPU：


docker run -it --gpus all -v ~/.musicgpt:/root/.local/share/musicgpt gabotechs/musicgpt --gpu "Create a relaxing LoFi song"


查看所有可用选项：


musicgpt --help


##### 许可

代码使用 [MIT License](<./LICENSE>) 许可，但应用启动时下载的AI模型权重依据以下仓库生成，受 [CC-BY-NC-4.0 License](<https://spdx.org/licenses/CC-BY-NC-4.0>) 许可：

* <https://huggingface.co/facebook/musicgen-small>
* <https://huggingface.co/facebook/musicgen-medium>
* <https://huggingface.co/facebook/musicgen-large>
* <https://huggingface.co/facebook/musicgen-melody>


##### 使用场景

MusicGPT 可以在不同的场景下使用，比如：

* 音乐创作：音乐家可以利用其快速生成乐曲灵感。
* 游戏和电影配乐：快速生成背景音乐，节省制作时间。
* 娱乐消费：用户可以根据心情生成个性化播放列表。