---
title: "ChatTTS-ui"
date: "2024-01-01 00:00:00+08:00"
description: 'ChatTTS-ui ChatTTS-ui  ChatTTS-ui '
slug: chattts-ui-chattts-api-windows-linux
tags:
- python
- macos
- app.exe
- chattts-ui
- pyvideotrans
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## ChatTTS-ui

**ChatTTS-ui 简介**

ChatTTS-ui 是一个简单的本地网页界面，用于将文字转换为语音。它依赖于 [ChatTTS](<https://github.com/2noise/chattts>) 实现语音合成，同时支持通过 API 接口进行调用。用户可以通过下载预打包的 Windows 版本或在 Windows、Linux 和 MacOS 上通过源码部署进行安装和使用。

**使用场景**

1. **本地网页语音合成** ：通过简单直观的网页界面，用户可以在本地直接输入文字并生成语音。

2. **API 调用** ：开发者可以通过提供的 API 接口将 ChatTTS 集成到自己的应用、服务中，实现文字转语音功能。

3. **视频处理工具** ：可以和 pyVideoTrans 等工具结合使用，为视频添加个性化语音解说。


**部署方法**

* **Windows预打包版** ：

* 从 [Releases](<https://github.com/jianchang512/chatTTS-ui/releases>) 页面下载压缩包，解压后双击 `app.exe` 即可使用。
* **Linux 和 MacOS 源码部署** ：

* 配置 Python 环境，克隆源码，创建并激活虚拟环境，安装必要依赖，执行 `app.py` 启动服务。
* 支持 CUDA 加速选项，需要额外安装 CUDA ToolKit。
* **Windows 源码部署** ：

* 安装 Python 和 Git，克隆源码，创建并激活虚拟环境，安装依赖，执行 `app.py` 启动服务。