---
title: "Qwen3-Omni"
date: "2024-01-01 00:00:00+08:00"
description: 'Qwen3-Omni Qwen3-Omni '
slug: qwen3-omni
tags:
- const
- gitalk
- transformers
- gpt-4o
- sota
draft: false
related_tools:
- graph-constrained reasoning
- ktransformers
- awesome gpt-4o images
- sharegpt-4o-image
- gpt-4o ghibli at home
---

## Qwen3-Omni

Qwen3-Omni 是一个原生的端到端多语言全模态基础模型，旨在处理文本、图像、音频和视频等多种输入，并能以文本和自然语音的形式提供实时流式响应。其核心功能在于实现强大的跨模态理解与生成，在文本、图像、音频及音视频任务上均达到最先进水平，特别是在36个音频/音视频基准测试中，有32个实现了开源SOTA，22个实现了整体SOTA，性能可与Gemini 2.5 Pro和GPT-4o媲美。该项目采用MoE（混合专家）架构的“思考者-说话者”设计，并结合AuT预训练和多编码本设计以实现低延迟和高效性。它支持119种文本语言、19种语音输入语言和10种语音输出语言，提供高度可定制的系统提示以精细控制模型行为，并包含一个专门用于详细音频描述的Qwen3-Omni-30B-A3B-Captioner模型。用户可以通过Hugging Face Transformers、vLLM（推荐用于高性能场景）或DashScope API进行部署和交互，并可通过在线演示和本地Web UI体验其实时多模态对话能力，同时支持输出语音类型的选择和视频内音频的使用。