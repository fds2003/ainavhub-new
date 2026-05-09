---
title: "AI-Playground"
date: "2024-01-01 00:00:00+08:00"
description: 'AI-Playground AI-Playground  Intel '
slug: ai-playground-intel-arc-gpu-windows
tags:
- gpu
- ai-playground
- extension
- windows
- aot
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- mcp superassistant chrome extension
- chatgpt conversation timeline extension
- groq summary chrome extension
---

## AI-Playground

AI-Playground 是一个由 Intel 推出的开源项目，旨在利用 Intel Arc GPU 实现 AI 图像创建、图像美化以及聊天机器人的功能。以下是其主要特点和要求的总结：

##### 最低规格

* 只支持 Windows 操作系统。
* 需要具备 Intel Core Ultra-H 处理器（即将推出）或搭载 8GB vRAM 的 Intel Arc 独立显卡 (dGPU)。


##### 安装

* 提供多种安装包，适用于不同类型的硬件。
* 包含两个阶段的安装过程：首先是组件和环境的安装，然后从其源处拉取其他组件，此阶段需要稳定的网络连接。


##### 开发环境

* 后端基于 Python，创建并切换到 Conda 环境，安装必要的依赖。
* 需下载并安装适用于硬件的 Intel Extension for Pytorch AOT 包。
* 前端基于 Nodejs 和 Electron，需安装 Nodejs 开发环境，下载并安装所有 Nodejs 依赖。


##### 模型支持

* 支持 PyTorch LLM、SD1.5、和 SDXL 模型。
* 默认情况下不包含任何模型，但用户可以通过界面直接下载或自行从 HuggingFace.com 或 CivitAI.com 下载模型并放置到适当的文件夹中。


##### 注意事项

* 安装和使用过程中务必查看具体的用户指南和视频教程。
* 请注意所有使用模型的许可条款，特别是任何使用限制。


进一步信息和详细步骤可以参考项目的 [GitHub 仓库](<https://github.com/intel/AI-Playground>)。