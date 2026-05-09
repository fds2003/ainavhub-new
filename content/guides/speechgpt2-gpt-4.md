---
title: "SpeechGPT2"
date: "2024-01-01 00:00:00+08:00"
description: 'SpeechGPT2 SpeechGPT2  SpeechGPT2 '
slug: speechgpt2-gpt-4
tags:
- gpt-4
- hz
- llm
- speechgpt2
- bps
draft: false
related_tools:
- awesome gpt-4o images
- gpt-4.1 prompting guide
- sharegpt-4o-image
- gpt-4o ghibli at home
- gpt-4 turbo with vision
---

## SpeechGPT2

**SpeechGPT2 概要**

SpeechGPT2 是一个端到端的语音对话语言模型，类似于 GPT-4。它能够感知和表达情感，并根据上下文和人类指令以多种风格（如说唱、戏剧、机器人、搞笑、低语等）提供适当的语音响应。为了处理长时间的语音序列，SpeechGPT2 采用了超低比特率的语音编解码器（750bps），可以对语义和声学信息进行建模，并使用多输入多输出语言模型（MIMO-LM）。当前，SpeechGPT2 仍然是一个基于回合的对话系统，但研究团队正在研发全双工版本的实时 SpeechGPT2，并已取得一些进展。

尽管在计算和数据资源有限的情况下，SpeechGPT2 展示了技术探索的一部分，但它仍然存在一些不足，如对噪声的鲁棒性和语音生成的稳定性。研究团队计划未来开源技术报告、代码和模型权重。

**技术细节**

* **语音编解码器** ：建模语义和声学信息，超低比特率（750bps，25hz * RVQ3）。
* **模型架构** ：使用 MIMO-LM（多输入多输出语言模型），从 70 亿参数的文本 LLM 初始化。
* **推理** ：每生成一秒钟的语音需要 25 次自回归解码步骤。
* **预训练数据** ：超过 10 万小时的学术和实地语音数据，每个语音-文本对有精细的风格描述。
* **对话数据** ：包括 10 万个数据点，高质量的多轮对话，多轮情感对话和多轮语音风格控制对话。


**未来计划**

* 开发全双工实时大语言模型。
* 建立流媒体管道（编解码器 + LLM）。
* 扩大数据和模型规模。


SpeechGPT2 是由复旦大学计算机科学学院的学者团队开发的，在有限资源下进行了一系列技术探索，并对未来的发展方向充满信心。