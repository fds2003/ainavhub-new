---
title: "Agentic Story Book Workflow Agentic Story Book Workflow Agentic Story Book"
date: "2024-01-01 00:00:00+08:00"
description: "Agentic Story Book Workflow Agentic Story Book Workflow Agentic Story"
slug: "agentic-story-book-workflow-autogen"
draft: false
---

## Agentic Story Book Workflow

## Agentic Story Book Workflow简介

Agentic Story Book Workflow是一个基于[AutoGen](<https://microsoft.github.io/autogen/>)的多代理工作流程框架，旨在为儿童创作图画书。

## Agentic工作流程

该框架涉及不同的多代理协作方法，以下是其主要流程：

1. **用户交互** ：User_Proxy代表用户，与Receptionist沟通以收集用户需求。
2. **内容创作** ：通过GroupChat机制协作，各GroupChat有一个GroupChat Manager协调当前的对话者。在内容创作角色（如Story Editor、Storyboard Editor、Prompt Editor）中，设有Agent负责审查内容。如审查不过，GroupManager将其退回编辑者修改。
3. **生成图像/视频/PPT** ：这一阶段由独立的Image Creator Agent处理，其内部包含两个子代理：一个负责AI图像生成，另一个负责审查生成的图像。


## 系统要求

1. **大语言模型（LLM）** ：推荐使用ChatGPT-4o，该代码在Azure OpenAI的ChatGPT-4o服务上测试。理论上也支持OpenAI的原生服务。虽AutoGen支持多种LLM，但其他模型（如Claude 3.5 Sonnet）在实践中未能严格遵循指令，因此不推荐使用。

2. **文本转图像（Text2Image）** ：支持DALL-E 3和Replicate的Flux Schnell。考虑成本和速度，最终选择Replicate的Flux Schnell API：

* DALL-E 3：每100张图片$12，每张需10秒以上。
* Flux Schnell API：每张$0.003，绘制时间1-2秒。质量较低但速度快和成本低，可选择Flux Dev版本API提高质量。
3. **Azure账号** ：需启用Speech服务资源。


## 使用方法

1. 创建Python虚拟环境（Python 3.11测试通过），并安装依赖：

pip install -r requirements.txt


2. 创建.env文件，复制.env.example内容并修改。
3. 运行app.py创建故事：

python app.py


4. 生成图像/视频/PPTX：首先修改generate.py中的story_id为目标故事ID（从app.py输出获得），然后运行：

python generate.py


## 发展路线

* 改进内容生成逻辑
* 添加“人类参与”逻辑
* 背景音乐


## 常见问题

1. **支持其他语言吗？** 是的，在内容创作提示区有按照用户需求或用用户语言进行的指令。

2. **多语言语音支持？** Azure的TTS支持数百种语言，只需在.env文件中指定所需语言的AZURE_SPEECH_VOICE_NAME即可。

3. **为什么提示是英文的？** 英文提示效果略优。推荐使用Anthropic的Portal工具生成提示，稍作修改即可用于程序中。

4. **视觉质量低**

* 使用的Flux Schnell模型速度快但质量低，可选择Flux Dev或Pro模型提升质量，后续代码中将增加支持。
* 当前图像审查逻辑有待改进。


## 其他

[查看一些生成的内容示例](<DEMO-Results.md>)
