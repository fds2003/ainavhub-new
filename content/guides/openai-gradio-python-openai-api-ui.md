---
title: "openai-gradio"
date: "2024-01-01 00:00:00+08:00"
description: 'openai-gradio openai-gradio  Python '
slug: openai-gradio-python-openai-api-ui
tags:
- gradio
- install
- pip
- key
- gpt-4-turbo
draft: false
related_tools:
- gradio webrtc
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
---

## openai-gradio

`openai-gradio` 是一个 Python 库，旨在帮助开发者轻松创建基于 OpenAI API 的机器学习应用。这个库的主要目的是简化与 OpenAI 模型的交互，让开发者能够迅速构建用户界面（UI）来与这些模型进行互动。

##### 安装方法

可以通过以下命令直接使用 pip 安装 `openai-gradio`：


pip install openai-gradio


##### 基本用法

在使用 `openai-gradio` 时，首先需要将 OpenAI 的 API 密钥保存到环境变量中：


export OPENAI_API_KEY=<your token>


然后，在 Python 文件中编写以下代码：


import gradio as gr
import openai_gradio

gr.load(
name='gpt-4-turbo',
src=openai_gradio.registry,
).launch()


执行这段代码后，会显示一个与 OpenAI 模型连接的 Gradio 界面。

##### 自定义

在创建完 Gradio UI 后，开发者可以通过设置输入输出组件或其他 `gr.Interface` 参数来自定义界面。例如，可以添加标题、描述和示例问题：


import gradio as gr
import openai_gradio

gr.load(
name='gpt-4-turbo',
src=openai_gradio.registry,
title='OpenAI-Gradio Integration',
description="Chat with GPT-4-turbo model.",
examples=["Explain quantum gravity to a 5-year old.", "How many R are there in the word Strawberry?"]
).launch()


##### 组合使用

开发者还可以将加载的界面放入更大的 Gradio Web UI 中，例如通过标签的形式展示多个模型：


import gradio as gr
import openai_gradio

with gr.Blocks() as demo:
with gr.Tab("GPT-4-turbo"):
gr.load('gpt-4-turbo', src=openai_gradio.registry)
with gr.Tab("GPT-3.5-turbo"):
gr.load('gpt-3.5-turbo', src=openai_gradio.registry)

demo.launch()


##### 适用场景

`openai-gradio` 非常适合以下场景：

1. **聊天机器人** ：快速构建并部署基于 GPT-4 或 GPT-3.5 的聊天机器人。
2. **教育工具** ：创建互动性强的教育应用，帮助用户学习复杂概念如量子重力。
3. **原型开发** ：快速搭建模型原型，进行用户测试和反馈收集。
4. **多模型展示** ：同时展示和比较不同版本的 OpenAI 模型，对于研究销售和创新活动非常有用。


##### 支持的模型

`openai-gradio` 支持多种 OpenAI 模型，包括但不限于：

* GPT-4-turbo
* GPT-3.5-turbo
* GPT-3.5-turbo-16k
* GPT-4
* GPT-4-32k


总之，`openai-gradio` 是一个强大的工具，能大幅度简化机器学习应用的开发过程，尤其是在需要与 GPT 系列模型交互时。