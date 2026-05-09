---
title: "ChatTTS-Forge"
date: "2024-01-01 00:00:00+08:00"
description: 'ChatTTS-Forge ChatTTS-Forge  ChatTTS-Forge '
slug: chattts-forge-chattts-tts-api-gradio
tags:
- gradio
- ssml
- chattts-forge
- huggingface
- colab
draft: false
related_tools:
- gradio webrtc
- chattts
- fakesoraapi - 用于sorawebui的api，可以从文本生成视频，并提供了在线演示。
- sorawebui - 使用文本和 openai 的 sora 模型在线生成视频
- stable diffusion webui forge - stable diffusion webui forge是在stable diffusion webui基础上为了简化开发、优化资源管理和加快推理速度而创建的平台，灵感来源于
  minecraft forge ，目标是成为sd webui的forge。
---

## ChatTTS-Forge

##### ChatTTS-Forge 简介

ChatTTS-Forge 是一个基于 ChatTTS 模型开发的项目，专注于文本到语音转换 (TTS) 的生成。它提供了全面的 API 服务和基于 Gradio 的 Web 用户界面（WebUI），使用户能够方便地进行 TTS 任务。该项目集成了多个功能模块，包括风格管理、说话人管理、长文本生成、类SSML支持、批量生成、和音质增强等。其设计目标是提供一个易于使用和高度灵活的 TTS 解决方案。

##### 使用场景

1. **在线体验** ：

* 用户可以在 HuggingFace Spaces 上直接体验 ChatTTS-Forge 提供的功能。
2. **一键启动** ：

* 通过 Google Colab 一键启动，方便那些不想在本地配置环境的用户快速体验 ChatTTS-Forge。
3. **容器部署** ：

* 提供了 Docker 容器支持，便于在不同平台和环境下的一键部署。
4. **本地部署** ：

* 用户可以在本地安装所有必要依赖并运行服务，适用于有特定本地化需求的用户。


##### 功能特点

* **全面的 API 服务** ：提供访问所有功能的 API，易于集成。
* **超长文本生成** ：支持生成超过 1000 字的长文本。
* **风格管理** ：可通过名称或 ID 复用和管理 32 种不同风格。
* **说话人管理** ：可通过名称或 ID 高效管理多个说话人。
* **风格提示词注入** ：通过注入提示词调整输出风格。
* **批量生成** ：支持自动分桶和批量生成文本。
* **类 SSML 支持** ：使用近似 SSML 语法创建丰富的音频长文本。
* **独特的 refine API** ：提供独立的调试接口，提高调试效率。
* **跨平台 API** ：提供类似 OpenAI 和 Google 的 API 接口，便于开发者集成现有系统。
* **友好的调试 GUI** ：开发了独立的 Playground 页面，简化调试流程。
* **文本标准化** ：
* 自动处理 Markdown 格式。
* 自动将数字转为可识别文本。
* 转换 emoji 符号为可读文本。
* 基于 tokenizer 预处理，支持广泛字符范围。
* 适配中英文环境。
* **音质增强** ：通过内置的音质增强和降噪模型，提高音频质量。
* **说话人导入导出** ：支持导入和导出说话人配置，便于定制和共享。
* **说话人融合** ：支持说话人融合和微调，创造新的声纹。


##### 常见问题解答

* **什么是 Prompt1 和 Prompt2？** Prompt1 和 Prompt2 都是系统提示，区别在于插入点不同。Prompt1 插入到第一个 [Stts] token 之前，Prompt2 插入到第一个 [Stts] 之后。

* **什么是 Prefix？** Prefix 主要用于控制模型的生成能力，类似于 refine prompt。这个 prefix 中应只包含特殊的非语素 token，比如 `[laugh_0]`、`[oral_0]` 等。

* **Style 中带`_p` 的区别是什么？** Style 中带有 `_p` 的使用了 prompt + prefix，而不带 `_p` 的则只使用 prefix。

* **为什么开启了`--compile` 很慢？** 由于目前未实现推理 padding，如果每次推理 shape 改变，可能触发 torch 的重新编译，建议暂不启用。