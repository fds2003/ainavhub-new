---
title: "VoiceCraft"
date: "2024-01-01 00:00:00+08:00"
description: VoiceCraft VoiceCraft speech editing
slug: voicecraft-speech-editing-zero-shot-text-to-speech
tags:
- voicecraft
- zero-shot
- tts
- text-to-speech
- speech
draft: false
related_tools:
- orpheus tts
- muyan-tts
- megatts3
- chatterbox tts
- fireredtts-2
---

## VoiceCraft

VoiceCraft是一个非常先进的语言模型工具，它具备两大核心功能：**语音编辑** （speech editing）和**零样本文本到语音转换** （zero-shot text-to-speech, TTS）。这意味着它可以直接在多种不同的数据上工作，包括有声书、网络视频和播客等，“野生数据”上的表现同样出色。

##### 语音编辑

简单来说，语音编辑功能允许你修改已有的语音记录。例如，你可以将某个词或短语从句子中删除或替换成其他内容，而这一切都不会影响原有语音的自然流畅和声音的真实感。这对于后期制作、语音合成等场景非常有用。

##### 零样本文本到语音转换

零样本文本到语音转换意味着VoiceCraft可以不需要大量的训练样本就能将文本转换成特定人声的语音。只需短短几秒钟的声音样本作为参考，VoiceCraft就能“学会”这个声音，并将任意文本转换为拥有该声音特征的语音。这对于创建个性化语音助手、语音合成播客等内容非常实用。

##### 使用场景

1. **个性化内容创建** ：如果你想为特定的角色或人物制作语音内容，VoiceCraft能帮你轻松实现，只需少量的声音样本。
2. **后期制作** ：在视频制作或播客编辑过程中，可能需要对已有的语音进行修改，如更正发言错误或修改信息等，此时可以使用VoiceCraft的语音编辑功能。
3. **教育和培训** ：创建定制化的语音教材，用于语言学习或专业培训，让内容更生动、具个性化。
4. **娱乐和游戏** ：为角色配音，制作有声书等，提供独特的听觉体验。


##### 如何使用

1. **环境搭建** ：按照提供的步骤安装所需的库和依赖。
2. **示例运行** ：通过运行官方提供的notebook (`inference_speech_editing.ipynb` 和 `inference_tts.ipynb`) 来试验其语音编辑和文本到语音转换功能。
3. **训练自己的模型** ：如果有特殊需求，也可以按照指南准备数据，训练自己的VoiceCraft模型。