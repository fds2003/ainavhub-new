---
title: "wtffmpeg"
date: "2024-01-01 00:00:00+08:00"
description: wtffmpeg wtffmpeg LLM
slug: wtffmpeg-llm-ffmpeg
tags:
- gpu
- const
- ddefeac06598c65895743c01b9c180691d84c
- gitalk
- clientsecret
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- graph-constrained reasoning
- rllm
- onefilellm
---

## wtffmpeg

wtffmpeg是一款命令行工具，核心功能是利用本地大型语言模型（LLM）将用户用自然语言描述的视频和音频处理任务，直接翻译为可执行的FFmpeg命令，旨在帮助用户避免手动查找和组合复杂参数的繁琐。该项目的主要亮点在于其“本地优先”的设计理念，确保所有数据处理均在本地进行，不涉及外部API，从而保障了数据隐私；同时，它提供交互式模式，允许用户在执行生成的命令前进行预览确认，并支持GPU加速LLM推理过程以提升效率。此外，wtffmpeg具备高度可定制性，用户可以灵活更换不同的LLM模型或调整系统提示来优化命令生成的准确性，并且在交互模式下，用户还可以直接编辑或执行其他系统命令，极大地增强了工具的灵活性和问题解决能力。