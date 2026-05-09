---
title: "MiMo-Audio"
date: "2024-01-01 00:00:00+08:00"
description: MiMo-Audio MiMo-Audio MiMo-Audio-Tokenizer
slug: mimo-audio-mimo-audio-tokenizer
tags:
- gradio
- mimo-audio-tokenizer
- const
- gitalk
- patch
draft: false
related_tools:
- gradio webrtc
- mimo
- mimo-audio
- udio
- graph-constrained reasoning
---

## MiMo-Audio

MiMo-Audio项目致力于通过大规模预训练（超过一亿小时数据）来构建具备强大少样本学习和泛化能力的音频语言模型，旨在实现类似人类的从少量示例或简单指令中泛化到新音频任务的能力。其核心在于MiMo-Audio-Tokenizer，一个高效的音频分词器，以及一个结合了patch编码器、大型语言模型（LLM）和patch解码器的独特架构，旨在有效处理高码率音频序列并弥合语音与文本之间的长度差异。MiMo-Audio-7B-Base模型在语音智能和音频理解基准测试中展现出开源模型的SOTA性能，并能泛化到语音转换、风格迁移、语音编辑等训练数据中未见的任务，还能生成高度真实的语音内容。通过指令微调，MiMo-Audio-7B-Instruct模型进一步提升了性能，在音频理解、口语对话和指令式文本转语音评估中表现卓越，逼近甚至超越了闭源模型，并通过引入思考机制增强了理解和生成能力。该项目提供了可下载的模型、交互式Gradio演示以及一套全面的评估工具包。