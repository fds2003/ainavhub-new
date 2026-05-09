---
title: "gemini-gradio"
date: "2024-01-01 00:00:00+08:00"
description: 'gemini-gradio gemini-gradio  gemini-gradio '
slug: gemini-gradio-python-google-gemini-api
tags:
- gradio
- voice
- install
- gemini-1.5-pro-002
- pip
draft: false
related_tools:
- gradio webrtc
- real-time ai voice chat
- kvoicewalk
- local voice agents on macos with pipecat
- vibevoice
---

## gemini-gradio

##### `gemini-gradio` 简介

`gemini-gradio` 是一个 Python 包，使开发者能够轻松创建由 Google 的 Gemini API 驱动的机器学习应用。通过整合 Gradio 库，开发者可以快速构建用户界面，与 Gemini 模型进行交互。

##### 安装

可以通过 pip 命令直接安装 `gemini-gradio`：


pip install gemini-gradio


##### 基础用法

首先需要设置您的 Gemini API 密钥：


export GEMINI_API_KEY=<your token>


然后在 Python 文件中编写如下代码：


import gradio as gr
import gemini_gradio

gr.load(
name='gemini-1.5-pro-002',
src=gemini_gradio.registry,
).launch()


运行此 Python 文件后，您将看到一个与 Gemini 模型连接的 Gradio 界面。

##### 语音聊天

通过设置 `enable_voice` 参数，可以启用与 Gemini 的语音聊天功能：


import gradio as gr
import gemini_gradio

gr.load(
name='gemini-2.0-flash-exp',
src=gemini_gradio.registry,
enable_voice=True
).launch()


这将创建一个语音界面，允许用户通过麦克风与 Gemini 模型进行对话。

###### 语音聊天所需的 API 密钥

使用语音聊天功能时，您需要：

1. `GEMINI_API_KEY` \- 您的 Google Gemini API 密钥
2. `GOOGLE_API_KEY` \- 您的 Google API 密钥（对于多模态功能是必需的）
3. Twilio 凭证用于 WebRTC 功能：
* `TWILIO_ACCOUNT_SID`
* `TWILIO_AUTH_TOKEN`


确保在使用语音聊天功能之前设置这些环境变量。

##### 自定义

创建 Gradio UI 后，您可以自定义输入和输出组件，或其他 `gr.Interface` 的参数。例如，可以使用以下代码自定义界面：


import gradio as gr
import gemini_gradio

gr.load(
name='gemini-2.0-flash-exp',
src=gemini_gradio.registry,
title='Gemini-Gradio Integration',
description="Chat with Gemini Pro model.",
examples=["Explain quantum gravity to a 5-year old.", "How many R are there in the word Strawberry?"]
).launch()


##### 组合使用

您可以在更大的 Gradio Web 界面中使用加载的接口，例如：


import gradio as gr
import gemini_gradio

with gr.Blocks() as demo:
with gr.Tab("Gemini Pro"):
gr.load('gemini-1.5-pro-002', src=gemini_gradio.registry)
with gr.Tab("gemini-1.5-flash"):
gr.load('gemini-1.5-flash', src=gemini_gradio.registry)

demo.launch()


##### 技术细节

`gemini-gradio` Python 库有两个依赖项：`google-generativeai` 和 `gradio`。它定义了一个 “registry” 函数 `gemini_gradio.registry`，该函数接受模型名称并返回一个 Gradio 应用。

##### 使用场景

`gemini-gradio` 适用于各种场景，包括但不限于：

1. 教育：创建交互式学习工具，解释复杂概念或回答学生问题。
2. 客服：构建聊天机器人，提供客户支持。
3. 研究：进行对话式AI研究和测试新模型的功能。
4. 娱乐：开发游戏或互动故事，通过语言生成进行玩家互动。


通过 `gemini-gradio`，开发者可以快速构建功能丰富的机器学习应用，满足不同用户的需求。