---
title: "Pipecat"
date: "2024-01-01 00:00:00+08:00"
description: Pipecat Pipecat Pipecat
slug: pipecat
tags:
- dot-env.template
- azure
- pipecat
- app.py
- install
draft: false
related_tools:
- azure devops mcp server
- local voice agents on macos with pipecat
- pi
- pipecat
- gemini multimodal live api + pipecat
---

## Pipecat

## Pipecat是什么？

Pipecat是一个用于创建语音（以及多模态）对话代理的框架。你可以用它来开发各种对话机器人，例如个人教练、会议助手、儿童故事玩具、客户支持机器人、流程引导等。

##### 你在什么情况下会用到Pipecat？

如果你需要创建一个能够进行对话的机器人，Pipecat是一个很好的选择。比如：

* **个人教练** ：给用户提供锻炼指导、饮食建议等。
* **会议助手** ：记录会议要点、提供帮助和提醒。
* **儿童故事玩具** ：为小朋友讲故事、互动。
* **客户支持** ：解答客户疑惑、处理问题。
* **互动伴侣** ：与用户进行有趣的对话、提供娱乐。


##### 如何使用Pipecat？

1. **安装Pipecat** ：

pip install pipecat-ai


2. **设置环境变量** ：

cp dot-env.template .env


3. **安装可选依赖** （如果需要的话）：

pip install "pipecat-ai[option,...]"


常见的选项包括：`anthropic`, `azure`, `openai`等。

4. **编写简单的Pipecat代码** ： 下面是一个简单的示例代码，展示了如何创建一个会说“Hello”的Pipecat机器人：

#app.py

import asyncio
import aiohttp

from pipecat.frames.frames import EndFrame, TextFrame
from pipecat.pipeline.pipeline import Pipeline
from pipecat.pipeline.task import PipelineTask
from pipecat.pipeline.runner import PipelineRunner
from pipecat.services.elevenlabs import ElevenLabsTTSService
from pipecat.transports.services.daily import DailyParams, DailyTransport

async def main():
async with aiohttp.ClientSession() as session:
# 使用Daily作为实时媒体传输（WebRTC）
transport = DailyTransport(
room_url="https://yourdomain.daily.co/room_url",
token="your_token",
"Bot Name",
DailyParams(audio_out_enabled=True))

# 使用Eleven Labs做文本转语音
tts = ElevenLabsTTSService(
aiohttp_session=session,
api_key="your_api_key",
voice_id="your_voice_id",
)

# 简单的管道，处理文本转换为语音的输出
pipeline = Pipeline([tts, transport.output()])

# 创建Pipecat处理器，可以运行一个或多个管道任务
runner = PipelineRunner()

# 分配任务可调用来运行管道
task = PipelineTask(pipeline)

# 注册事件处理器，当有参与者加入WebRTC会话时播放音频
@transport.event_handler("on_participant_joined")
async def on_new_participant_joined(transport, participant):
participant_name = participant["info"]["userName"] or ''
# 队列一个TextFrame，让TTS服务（Eleven Labs）朗读
await task.queue_frames([TextFrame(f"Hello there, {participant_name}!"), EndFrame()])

# 运行管道任务
await runner.run(task)

if __name__ == "__main__":
asyncio.run(main())


运行这个代码：

python app.py


然后，你可以通过Daily提供的WebRTC用户界面访问 `https://<yourdomain>.daily.co/<room_url>` 来听机器人打招呼。


##### VAD是什么？

VAD是语音活动检测（Voice Activity Detection），在你的机器人需要知道用户什么时候停止讲话时，它是非常重要的。如果你不使用按键说话，并希望Pipecat检测用户何时完成讲话，VAD是实现自然对话的必备组件。

Pipecat默认使用WebRTC的VAD，你也可以选择安装并使用Silero VAD以提高准确性：


pip install pipecat-ai[silero]


这是Pipecat主要的功能和使用方法简介。详细的使用例子、配置API密钥以及开发环境的设定可以参考官方的文档或GitHub仓库，总之，Pipecat为创建智能对话机器人提供了非常强大的支持。