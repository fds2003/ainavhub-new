---
title: "Tiny AI Client Tiny AI Client Tiny AI Client"
date: "2024-01-01 00:00:00+08:00"
description: 'Tiny AI Client Tiny AI Client  tinygrad '
slug: tiny-client-tinygrad-simpleaichat-llm
tags:
- simpleaichat
- client
- pil.image.image
- str
- pydantic.basemodel
draft: false
related_tools:
- xiaozhi client
- zin mcp client
- fully client-side chat over documents
- client-researcher
- tiny ai client
---

## Tiny AI Client

Tiny AI Client 是一种灵感来自于 [tinygrad](<https://github.com/tinygrad/tinygrad>) 和 [simpleaichat](<https://github.com/minimaxir/simpleaichat/tree/main/simpleaichat>) 的轻量级接口，旨在提供最简便的方式来使用和切换大语言模型（LLM），同时支持图像处理和工具使用。其设计理念是保持简单、易用以及开发过程中的趣味性。

##### 特性

* 支持多个LLM平台，如 OpenAI 和 Anthropic
* 异步处理
* 工具使用
* 结构化输出
* 图像处理
* PyPI 包 `tiny-ai-client`
* 支持自定义模型，例如通过 Ollama 和 Groq 的模型
* 未来计划：增加 Gemini 工具支持


##### 使用场景

1. **更换LLM模型** ：开发者可以轻松更换LLM模型，只需改动模型名称即可。
2. **发送消息** ：使用简便的接口发送和接收消息，例如 `msg: str = ai("hello")`。
3. **工具集成** ：支持通过函数的方式集成各种工具，函数的参数类型通过 `pydantic.BaseModel` 继承。
4. **图像处理** ：支持传递单个或多个 `PIL.Image.Image` 文件进行处理。
5. **视频处理** ：可以传递 `PIL.Image.Image` 列表来处理视频。


##### 安装和示例代码

通过 `pip` 安装：


pip install tiny-ai-client


示例代码：

###### 使用 OpenAI


from tiny_ai_client import AI, AsyncAI

ai = AI(model_name="gpt-4o", system="You are Spock, from Star Trek.", max_new_tokens=128)
response = ai("What is the meaning of life?")

ai = AsyncAI(model_name="gpt-4o", system="You are Spock, from Star Trek.", max_new_tokens=128)
response = await ai("What is the meaning of life?")


###### 使用 Anthropic


from tiny_ai_client import AI, AsyncAI

ai = AI(model_name="claude-3-haiku-20240307", system="You are Spock, from Star Trek.", max_new_tokens=128)
response = ai("What is the meaning of life?")

ai = AsyncAI(model_name="claude-3-haiku-20240307", system="You are Spock, from Star Trek.", max_new_tokens=128)
response = await ai("What is the meaning of life?")


###### 使用工具


from pydantic import BaseModel, Field
from tiny_ai_client import AI, AsyncAI

class WeatherParams(BaseModel):
location: str = Field(..., description="The city and state, e.g. San Francisco, CA")
unit: str = Field("celsius", description="Temperature unit", enum=["celsius", "fahrenheit"])

def get_current_weather(weather: WeatherParams):
return f"Getting the current weather in {weather.location} in {weather.unit}."

ai = AI(model_name="gpt-4o", system="You are Spock, from Star Trek.", max_new_tokens=32, tools=[get_current_weather])
response = ai("What is the meaning of life?")
response = ai("Please get the current weather in celsius for San Francisco.")
response = ai("Did it work?")


###### 使用图像


from tiny_ai_client import AI
from PIL import Image

ai = AI(model_name="gpt-4o", system="You are Spock, from Star Trek.", max_new_tokens=32)
response = ai("Who is on the images?", images=[Image.open("assets/kirk.jpg"), Image.open("assets/spock.jpg")])


Tiny AI Client 的设计旨在保持核心逻辑简单（少于 250 行代码），易于理解、调整和使用，使得开发人员可以专注于实现功能，而不必担心复杂的内部实现。