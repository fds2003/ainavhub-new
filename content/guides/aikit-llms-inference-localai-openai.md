---
title: "AIKit"
date: "2024-01-01 00:00:00+08:00"
description: AIKit AIKit AIKit ，、、（LLMs）。： （Inference）：AIKit LocalAI，。LocalAI OpenAI
  API REST API...
slug: aikit-llms-inference-localai-openai
tags:
- gpu
- inference
- distroless
- localai
- aikit
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- restorephotos
- lms
- screen to action using llms
---

## AIKit

## AIKit 简介

AIKit 是一个一站式平台，旨在快速启动和托管、部署、构建和微调大型语言模型（LLMs）。它主要提供两个核心功能：

1. **推理（Inference）** ：AIKit 利用 [LocalAI](<https://localai.io/>)，支持广泛的推理能力和格式。LocalAI 提供一个与 OpenAI API 兼容的替代 REST API，因此您可以使用任何兼容 OpenAI API 的客户端，例如 [Kubectl AI](<https://github.com/sozercan/kubectl-ai>) 和 [Chatbot-UI](<https://github.com/sozercan/chatbot-ui>)，发送请求到开源的 LLMs！

2. **[微调（Fine Tuning）](<https://sozercan.github.io/aikit/fine-tune>)** ：AIKit 提供了一个可扩展的微调接口。它支持 [Unsloth](<https://github.com/unslothai/unsloth>)，提供快速、内存高效和易于使用的微调体验。


👉 完整文档请见 [AIKit 网站](<https://sozercan.github.io/aikit/>)！

## 特性

* 🐳 除了 [Docker](<https://docs.docker.com/desktop/install/linux-install/>) 外，不需要 GPU、互联网访问或其他额外工具。
* 🤏 最小化的镜像大小，带来更少的漏洞和更小的攻击面，基于自定义的 [distroless](<https://github.com/GoogleContainerTools/distroless>) 镜像。
* 🎵 [支持微调](<https://sozercan.github.io/aikit/fine-tune>)
* 🚀 为推理和微调提供易于使用的声明式配置。
* ✨ 兼容 OpenAI API，可以与任何兼容 OpenAI API 的客户端一起使用。
* 📸 [支持多模态模型](<https://sozercan.github.io/aikit/vision>)
* 🖼️ 支持使用 [Stable Diffusion](<https://sozercan.github.io/aikit/stablediffusion>) 生成图像
* 🦙 支持 GGUF、GPTQ、EXL2、GGML 和 [Mamba](<https://github.com/state-spaces/mamba>) 模型
* 🚢 [适配 Kubernetes 部署](<#kubernetes-deployment>)
* 📦 一个镜像支持多种模型
* 🖥️ [支持使用 NVIDIA GPU 进行加速推理](<#nvidia>)
* 🔐 [签名镜像和预制模型](<https://sozercan.github.io/aikit/cosign>)
* 🌈 支持非专有和自托管的容器注册表以存储模型镜像


## 使用场景

AIKit 主要用于以下场景：

* **推理应用** ：可以在本地或云环境中使用 AIKit 提供的预制模型进行推理，无需额外的GPU。
* **微调模型** ：根据具体应用需要，使用 AIKit 微调接口定制模型。
* **兼容性** ：与 OpenAI API 兼容，可以与任何兼容 OpenAI API 的应用或工具集成。
* **多模态支持** ：处理和生成多模态数据，例如文本和图像。
* **容器化部署** ：通过 Docker 和 Kubernetes 容易部署和管理模型。


## 快速开始示例

以下是一个在本地机器上快速启动的示例：


docker run -d --rm -p 8080:8080 ghcr.io/sozercan/llama3:8b


发送请求进行推理：


curl http://localhost:8080/v1/chat/completions -H "Content-Type: application/json" -d '{
"model": "llama-3-8b-instruct",
"messages": [{"role": "user", "content": "explain kubernetes in a sentence"}]
}'


返回结果示例：


{"created":1713494426,"object":"chat.completion","id":"fce01ee0-7b5a-452d-8f98-b6cb406a1067","model":"llama-3-8b-instruct","choices":[{"index":0,"finish_reason":"stop","message":{"role":"assistant","content":"Kubernetes is an open-source container orchestration system that automates the deployment, scaling, and management of applications and services, allowing developers to focus on writing code rather than managing infrastructure."}}],"usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}


更多信息和详细使用指南请访问 [AIKit 网站](<https://sozercan.github.io/aikit/>)。