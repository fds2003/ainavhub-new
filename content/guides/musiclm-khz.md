---
title: "MusicLM"
date: "2024-01-01 00:00:00+08:00"
description: MusicLM，，“”。 ，24 kHz，。 MusicLM。，...
slug: musiclm-khz
tags:
- id
- clientsecret
- const
- ddefeac06598c65895743c01b9c180691d84c
- musiccaps
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

#### 介绍

MusicLM是一个模型，可以从文本描述中生成高保真度的音乐，例如“由失真的吉他伴奏的平静的小提琴旋律”。

该模型将有条件的音乐生成过程视为分层序列到序列建模任务，并以24 kHz生成音乐，其一致性在几分钟内保持不变。

MusicLM在音频质量和对文本描述的遵循方面均优于以前的系统。此外，该模型可以同时以文本和旋律为条件，可以根据文本标题中描述的风格转换吹口哨和哼唱的旋律。

为了支持未来的研究，作者公开发布了MusicCaps数据集，其中包含5.5k个音乐-文本对，由人类专家提供了丰富的文本描述。