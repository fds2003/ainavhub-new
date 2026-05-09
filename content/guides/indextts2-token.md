---
title: "IndexTTS2"
date: "2024-01-01 00:00:00+08:00"
description: IndexTTS2 IndexTTS2 token
slug: indextts2-token
tags:
- const
- gitalk
- clientsecret
- python
- clientid
draft: false
related_tools:
- graph-constrained reasoning
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
---

## IndexTTS2

IndexTTS2是一个在自回归零样本文本转语音领域取得突破的项目，主要解决了现有模型难以精确控制语音时长的问题。它提供了一种新颖且通用的时长控制方法，支持通过指定生成token数量实现精确控制，也能自由生成同时忠实保留输入提示的韵律特征。此外，该项目实现了情感表达与说话人身份的解耦，允许独立控制音色和情感，在零样本设置下能准确重建目标音色并完美重现指定情感基调。为提升高情感表达的语音清晰度和稳定性，IndexTTS2融入了GPT隐式表示并设计了三阶段训练范式，并通过基于Qwen3微调的软指令机制，降低了情感控制门槛，能有效指导生成具有所需情感倾向的语音。该模型在词错率、说话人相似度和情感保真度等多项指标上均超越了现有最先进的零样本TTS模型，并提供了可视化Web界面和灵活的Python API，支持通过参考音频、独立情感音频、八维情感向量或文本描述等多种方式进行情感控制。