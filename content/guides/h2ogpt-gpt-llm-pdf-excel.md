---
title: "h2oGPT"
date: "2024-01-01 00:00:00+08:00"
description: h2oGPT h2oGPT ， GPT （LLM），。 h2oGPT ： ： （ PDF、Excel、Word、、、YouTube、、、、...
slug: h2ogpt-gpt-llm-pdf-excel
tags:
- gpu
- pdf
- ggml
- bit
- markdown
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
---

## h2oGPT

h2oGPT 是一个开源项目，旨在使用本地私有的 GPT 大语言模型（LLM）来查询和总结您的文档，或者进行聊天。以下是 h2oGPT 的主要功能和适用场景的简单总结：

##### 主要功能

1. **私有文档数据库** ：

* 支持多种文档类型（如 PDF、Excel、Word、图片、视频帧、YouTube、音频、代码、纯文本、Markdown 等）。
* 持久化数据库（使用 Chroma、Weaviate 或内存中的 FAISS）以高精确度的嵌入方式存储数据。
* 高效的上下文使用，通过 instruct-tuned LLMs（无需使用 LangChain 的 few-shot 方法）。
* 并行化的摘要和信息提取，速度可达每秒 80 个 token（使用 13B LLaMa2 模型）。
* 增强的文档检索（使用假设性文档嵌入 HYDE）。
2. **多种模型支持** ：

* 支持 LLaMa2、Mistral、Falcon、Vicuna、WizardLM 等模型，有 AutoGPTQ、4-bit/8-bit、LORA 等选择。
* 支持 GPU（通过 HF 和 LLaMa.cpp GGML 模型）和 CPU（通过 HF、LLaMa.cpp 和 GPT4ALL 模型）。
3. **用户界面和命令行工具** ：

* 用户界面支持文件上传和查看。
* 支持视觉模型（如 LLaVa, Claude-3, Gemini-Pro-Vision, GPT-4-Vision）。
* 支持图像生成（Stable Diffusion）以及语音转文字（使用 Whisper）和文字转语音（使用 Microsoft Speech T5 和 TTS）。
* 支持语音控制模式和模型对比界面。
* 提供简单的下载安装和认证功能（用户名/密码或 Google OAuth）。
* 用户界面的状态保持和多平台支持（Linux, Docker, macOS 和 Windows）。
4. **推理服务器支持** ：

* 支持 oLLaMa、HF TGI 服务器、vLLM、Gradio、ExLLaMa、Replicate、OpenAI、Azure OpenAI、Anthropic 等。
* 以 OpenAI 兼容方式提供服务器代理 API 和 Python 客户端 API。
5. **JSON 模式** ：支持通过代码块提取包含 JSON 信息的模型输出。

6. **Web 搜索** ：集成聊天和文档问答功能。

7. **智能代理** ：支持搜索、文档问答、Python 代码、CSV 表格（实验性功能，OpenAI 支持最佳）。

8. **评估性能** ：使用奖励模型进行评估。


##### 适用场景

h2oGPT 适用于以下情况：

* **企业和个人需要对大量私有文档进行有效管理和查询** 。无须联网即可对文档内容进行高效的搜索、摘要和处理。
* **需要执行复杂自然语言处理任务** ，如问答系统、文档总结、语音识别和文字转语音等。
* **需要多模型支持和灵活部署** ，可以根据需求选择不同的模型和硬件（CPU/GPU）。
* **希望实现离线使用和数据隐私保护** ，不依赖云服务，确保数据始终在本地安全存储和处理。
* **开发者希望构建和定制大语言模型的各种应用场景** ，包括自动化流程、数据处理和人工智能辅助系统。


h2oGPT 提供多样的工具和选项，使得用户可以根据具体应用场景灵活配置和使用这些强大的功能。