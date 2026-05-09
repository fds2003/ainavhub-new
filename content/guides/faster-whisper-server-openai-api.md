---
title: "Faster Whisper Server Faster Whisper Server Faster Whisper Server"
date: "2024-01-01 00:00:00+08:00"
description: 'Faster Whisper Server Faster Whisper Server  OpenAI API '
slug: faster-whisper-server-openai-api
tags:
- server
- faster
- gpu
- run
- cpu
draft: false
related_tools:
- firecrawl mcp server
- whatsapp mcp server
- android mcp server
- playwright mcp server
- mtranserver
---

## Faster Whisper Server

Faster Whisper Server 是一个兼容 OpenAI API 的转录服务器，使用 faster-whisper 作为其后台处理工具。其主要特性包括：

* 支持GPU和CPU。
* 可通过 Docker 轻松部署。
* 可通过环境变量进行配置。
* 兼容 OpenAI API。


Faster Whisper Server 支持音频文件转录和翻译，并且还支持流式转录，这对于处理大型音频文件时尤其有用，可以在处理过程中逐步接收转录结果，而不是等待整个文件处理完毕。此外，未来还计划支持实时音频转录。

##### 主要使用场景

1. **音频文件转录** ：通过 POST 请求将音频文件上传到服务器，获取转录结果。适用于会议记录、访谈记录等需要转录的场景。

2. **音频文件翻译** ：将音频内容翻译成目标语言，例如将一个英语音频文件翻译成中文文本。

3. **流式转录** ：适用于较长的音频文件，可以逐步接收转录结果，即时查看部分转录内容，提升用户体验和工作效率。

4. **实时转录** （开发中）：用于实时录音转录，例如在线会议、实时字幕等应用场景。


##### 快速入门

使用 Docker 快速部署：


docker run --gpus=all --publish 8000:8000 --volume ~/.cache/huggingface:/root/.cache/huggingface fedirz/faster-whisper-server:0.1-cuda
# 或者
docker run --publish 8000:8000 --volume ~/.cache/huggingface:/root/.cache/huggingface fedirz/faster-whisper-server:0.1-cpu


使用 Docker Compose：


curl -sO https://raw.githubusercontent.com/fedirz/faster-whisper-server/master/compose.yaml
docker compose up --detach faster-whisper-server-cuda
# 或者
docker compose up --detach faster-whisper-server-cpu


环境变量配置后，可以使用 OpenAI API CLI 或 Python SDK 调用服务。


export OPENAI_API_KEY="cant-be-empty"
export OPENAI_BASE_URL=http://localhost:8000/v1/

openai api audio.transcriptions.create -m distil-large-v3 -f audio.wav --response-format text
openai api audio.translations.create -m distil-large-v3 -f audio.wav --response-format verbose_json


Python SDK 示例：


from openai import OpenAI

client = OpenAI(api_key="cant-be-empty", base_url="http://localhost:8000/v1/")

audio_file = open("audio.wav", "rb")
transcript = client.audio.transcriptions.create(
model="distil-large-v3", file=audio_file
)
print(transcript.text)


##### 使用 CURL 进行请求

转录请求示例：


curl http://localhost:8000/v1/audio/transcriptions -F "file=@audio.wav"
curl http://localhost:8000/v1/audio/transcriptions -F "file=@audio.wav" -F "stream=true"


翻译请求示例：


curl http://localhost:8000/v1/audio/translations -F "file=@audio.wav"


##### 实时转录

需要安装 websocat，并使用 ffmpeg 处理麦克风输入：


ffmpeg -loglevel quiet -f alsa -i default -ac 1 -ar 16000 -f s16le - | websocat --binary ws://localhost:8000/v1/audio/transcriptions


Faster Whisper Server 提供了多种强大的音频处理功能，适用于多种音频转录和翻译场景，并且通过灵活的部署方式和 API 兼容性，使得集成到现有系统中非常便利。