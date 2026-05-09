---
title: "Home LLM Home LLM Home LLM"
date: "2024-01-01 00:00:00+08:00"
description: Home LLM Home LLM  LLM
slug: home-llm-assistant-ll
tags:
- phi
- ll
- oobabooga
- text-generation-webui
- stabilityai
draft: false
related_tools:
- graphiti
- phi-3-mini
- morphic
- phidata
- rllm
---

## Home LLM

Home LLM 是一个项目，目的是利用局部部署的大型语言模型（LLM）作为个人助理，来控制您的Home Assistant智能家居系统。这个项目提供了必要的“胶合”组件，使其能够作为Home Assistant的“对话代理”组件使用。

这里是Home LLM的一些关键特性和使用情况：

##### 快速开始

* 它有一个[安装指南](<./docs/Setup.md>)，指导用户如何安装和设置这个项目。


##### 与Home Assistant集成

* 通过一个`custom_component`来实现与Home Assistant的集成，该组件将运行在本地的LLM暴露为一个“对话代理”。
* 用户可以通过聊天界面与它交流，或者整合语音识别和语音合成插件，直接对其说话。
* 该组件既可以作为Home Assistant软件的一部分直接运行模型，也可以通过运行[oobabooga/text-generation-webui](<https://github.com/oobabooga/text-generation-webui>)项目来通过API接口访问LLM。


##### 模型

* Home LLM模型基于微软的Phi模型系列和StabilityAI的StableLM模型系列进行微调，使其能够控制用户家中的设备，并进行基本的问答。
* 它使用一个[自定义合成数据集](<./data>)进行微调，该数据集旨在教会模型基于设备信息的函数调用。
* 模型能够理解和执行例如打开或关闭光源、风扇等的简单日常智能家居操作。


##### 使用情况

在以下情况下，您可能会使用Home LLM：

* 当您希望通过语音或文本与您的Home Assistant智能家居系统进行交互时。
* 如果您想要保持数据的私密性，并且不依赖于云服务来处理语音命令或请求。
* 当您需要一个能够理解并执行智能家居设备控制命令的系统，如灯光调节、媒体播放控制等，同时也能够进行简单问答。
* 如果您想要自己托管模型，并充分控制智能家居系统的整合和个性化。
* 当您的Home Assistant安装环境资源有限（比如使用树莓派）时，也想要实现高效运行的智能语音交互体验。


Home LLM项目为那些希望将其Home Assistant智能家居系统升级为能够处理复杂对话和控制指令的用户提供了一个本地化、可定制和私密的解决方案。