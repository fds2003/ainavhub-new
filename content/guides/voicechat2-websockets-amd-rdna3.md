---
title: "voicechat2 voicechat2 Voicechat2"
date: "2024-01-01 00:00:00+08:00"
description: 'voicechat2 Voicechat2  Voicechat2 '
slug: voicechat2-websockets-amd-rdna3
tags:
- curl
- rdna3
- ubuntu
- install
- whisper
draft: false
related_tools:
- local whisper
- whisper app
- betterwhisperx
- whisper-tiktok
- whisper-speech-to-text-api
---

## voicechat2

##### Voicechat2 介绍

Voicechat2 是一个快速、完全本地化的AI语音聊天系统，采用WebSockets技术。它运行在高性能硬件上，例如7900级的AMD RDNA3显卡或4090显卡，可以实现低至1秒甚至300毫秒的语音到语音延迟。它使用了多个先进的AI模型和工具，包括Whisper、Llama和Coqui TTS。

##### 使用场景

Voicechat2 适用于各种需要低延迟语音交流的场景，包括但不限于：

1. **人机对话** ：实现与AI助手的实时语音互动，如智能客服、AI陪聊等。
2. **教育培训** ：实时语音指导和解答问题，为学生提供即时反馈。
3. **远程工作和会议** ：提高线上沟通效率，减少语音延迟，保证会议的流畅进行。
4. **游戏** ：在多人联机游戏中进行实时语音交流，提升游戏体验。


##### 安装步骤

在Ubuntu LTS系统上安装Voicechat2的步骤如下：

1. **系统准备** ：

sudo apt update
sudo apt install byobu curl wget espeak-ng ffmpeg libopus0 libopus-dev


2. **创建虚拟环境并获取代码** ：

mamba create -y -n voicechat2 python=3.11
mamba activate voicechat2
git clone https://github.com/lhl/voicechat2
cd voicechat2
pip install -r requirements.txt


3. **安装Whisper.cpp** ：

git clone https://github.com/ggerganov/whisper.cpp
cd whisper.cpp
GGML_HIPBLAS=1 make -j  # AMD
# 或
GGML_CUDA=1 make -j  # Nvidia
bash ./models/download-ggml-model.sh large-v2
cd ..


4. **安装Llama.cpp** ：

git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
make GGML_HIPBLAS=1 -j  # AMD
# 或
make GGML_CUDA=1 -j  # Nvidia
wget https://huggingface.co/bartowski/Meta-Llama-3-8B-Instruct-GGUF/resolve/main/Meta-Llama-3-8B-Instruct-Q4_K_M.gguf
cd ..


5. **安装TTS** ：

mamba activate voicechat2
pip install TTS


6. **安装StyleTTS2** ：

git clone https://github.com/yl4579/StyleTTS2.git
cd StyleTTS2
pip install -r requirements.txt
pip install phonemizer
pip install huggingface_hub
huggingface-cli download --local-dir . yl4579/StyleTTS2-LJSpeech


##### 总结

Voicechat2 是一个功能强大的本地AI语音聊天系统，适用于各类需要实时语音交流的场景。通过合理的硬件配置和系统搭建，可以实现低延迟的语音通信，提升用户体验。