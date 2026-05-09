---
title: "zh_recogn 。 Paraformer ， .s"
date: "2024-01-01 00:00:00+08:00"
description: zh_recogn zh_recogn zh_recogn 。 Paraformer ， .srt 。， API ，...
slug: zh-recogn-paraformer-srt-api
tags:
- macos
- api
- zh
- srt
- paraformer
draft: false
related_tools:
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- macos-style react desktop environment
- grok2api
---

## zh_recogn

##### 总结 zh_recogn 功能及使用场景

###### 功能简介

**zh_recogn** 是一个专注于将中文音频或视频转换为字幕的中文语音识别项目。它基于魔塔社区的 Paraformer 模型，提供了将中文音频和视频文件转为 `.srt` 字幕文件的功能。此外，它还支持通过 API 接口进行中文语音识别，并提供了一个简单的用户界面供用户操作。

###### 使用场景

1. **视频制作者** ：

* 制作中文字幕：无论是纪录片、访谈节目还是其他需要字幕的视频，都可以使用 zh_recogn 生成准确的中文字幕。
2. **音频转录** ：

* 会议记录或采访转录：将会议录音或采访录音转成文本记录，方便整理和归档。
3. **教育和学习** ：

* 在线课程：教师可以将录制的中文讲课视频轻松转换为带字幕的视频，方便学生理解和复习。
4. **研究和开发** ：

* 语音识别研究：研究人员可以使用 zh_recogn 的开源代码了解和改进中文语音识别技术。


###### 部署方式

* **源码部署** ：适用于有一定技术背景的用户。提供了详细的安装步骤，支持在 Windows 和 MacOS 系统上安装。用户可以根据需要选择是否启用 CUDA 加速。
* **预打包版** ：适用于 Windows 用户。简化了安装过程，但不支持 CUDA 加速。如果需要 CUDA，加速建议选择源码部署。


###### API 使用

zh_recogn 提供了一个HTTP API，允许开发者通过发送 HTTP 请求进行语音识别。例子如下：


import requests

audio_file="D:/audio/1.wav"
file={"audio": open(audio_file, 'rb')}
res = requests.post("http://127.0.0.1:9933/api", files=file, timeout=1800)

print(res.json())


返回的结果是一个包含字幕内容和时间戳的列表。

###### 注意事项

1. 第一次使用时，将自动下载模型，可能会花费较长时间。
2. zh_recogn 仅支持中文语音识别。
3. 配置文件 `set.ini` 中可以修改绑定的地址和端口。


###### 结合其他项目使用

zh_recogn 在 pyvideotrans 项目中也可以使用，只需在 pyvideotrans 的设置菜单中添加 zh_recogn 的地址即可。

##### 适用人群

* 视频编辑和制作人员
* 需要转录中文音频的个人或组织
* 从事中文语音识别研究的学者和开发者
* 需要方便、高效生成中文字幕的任何人


通过**zh_recogn** ，用户可以极大地方便他们在中文语音转文本和字幕制作方面的工作，有效提高工作效率。