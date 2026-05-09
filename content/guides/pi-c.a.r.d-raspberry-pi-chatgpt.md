---
title: "Pi-C.A.R.D"
date: "2024-01-01 00:00:00+08:00"
description: 'Pi-C.A.R.D Pi-C.A.R.D  Raspberry Pi '
slug: pi-c.a.r.d-raspberry-pi-chatgpt
tags:
- usb
- raspberry
- chatgpt
- pi
- pi-c.a.r.d
draft: false
related_tools:
- ai raspberry pi cat detection
- chatgpt conversation timeline extension
- chatgpt-plus
- seekout assist-seekout assist 使用 chatgpt 助力招聘者提高招聘效率。
- chatgpt-on-cs
---

## Pi-C.A.R.D

Pi-C.A.R.D 是一个完全运行在 Raspberry Pi 上的 AI 语音助手系统。它有能力在对话环境中完成许多标准的语言模型（例如 ChatGPT）能做的任务。此外，如果连接了摄像头，你还可以让 Pi-C.A.R.D 拍照、描述所看到的内容，并且回答关于该图像的问题。

##### Pi-C.A.R.D 的功能

1. **语音助手** ：就像智能音箱中的 Siri、Alexa 一样，通过语音与用户互动。
2. **图像识别** ：如果配备了摄像头，Pi-C.A.R.D 可以拍摄照片，描述图像内容并回答相关问题。


##### 适用场景

Pi-C.A.R.D 非常适合那些希望在不依赖云服务、保护隐私以及无需互联网连接情况下使用语音助手的人。具体的适用场景包括：

* **家庭自动化** ：通过语音控制家庭设备。
* **教育和实验** ：学校和爱好者可以用它来探索 AI 和物联网技术。
* **离线环境** ：在没有互联网连接的地方，例如远程地区或安全要求高的实验室，依然可以使用它的基本功能。


##### 如何使用 Pi-C.A.R.D

1. **硬件需求** ：您需要以下硬件：

* Raspberry Pi 5 模型 B
* USB 麦克风
* 扬声器
* 摄像头（可选）
2. **软件设置** ：

* 下载并安装必要的库：[whisper.cpp](<https://github.com/ggerganov/whisper.cpp>) 用于音频转录，[llama.cpp](<https://github.com/ggerganov/llama.cpp>) 用于图像识别。
* 下载所需的模型文件，并在`config.py` 文件中设置路径。
* 克隆项目代码库并安装所有依赖。
3. **启动程序** ：在命令行中运行以下命令启动主程序：

python main.py


4. **唤醒词** ：程序启动后，可以通过说唤醒词（默认是 “hey assistant”）来激活 Pi-C.A.R.D。进入对话状态后，你可以进行一连串的交流，而不需要每次都重复唤醒词，直到你说 “stop”、“exit” 或 “goodbye” 结束对话。


通过这些步骤，您就可以设置并运行 Pi-C.A.R.D 了，使其成为一个有趣且实用的离线语音助手。