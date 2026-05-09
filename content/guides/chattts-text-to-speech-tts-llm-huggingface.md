---
title: "ChatTTS"
date: "2024-01-01 00:00:00+08:00"
description: 'ChatTTS ChatTTS  ChatTTS '
slug: chattts-text-to-speech-tts-llm-huggingface
tags:
- sft
- huggingface
- llm
- import
- chattts
draft: false
related_tools:
- rllm
- onefilellm
- llmanager
- llm.pdf
- translatebookwithllm
---

## ChatTTS

##### ChatTTS 简介

ChatTTS 是一款专为对话场景设计的文本转语音（Text-to-Speech, TTS）模型，特别适用于大语言模型（LLM）助手。该模型支持中英文，并经过100,000+小时的中英文语音数据训练。HuggingFace 上的开源版本是基于40,000小时数据进行预训练的模型，无SFT（监督微调）。

###### 亮点

1. **对话TTS** ：ChatTTS 针对对话任务进行优化，能够生成自然且富有表现力的语音，支持多位说话者，实现互动对话。
2. **细粒度控制** ：该模型可以预测和控制包括笑声、停顿、感叹词等细粒度的韵律特征。
3. **更好的韵律** ：ChatTTS 在韵律方面超越了大多数开源TTS模型，提供了预训练模型以支持进一步的研究和开发。


###### 使用场景

1. **虚拟助理** ：利用自然语音生成技术，提升用户与虚拟助理的互动体验。
2. **教育及培训** ：生成多语言、多情景的语音内容，辅助在线教育及培训课程的开发。
3. **游戏和娱乐** ：为游戏角色提供真实、自然的语音，提高用户的沉浸感。
4. **无障碍技术** ：为视力或听力障碍人士提供更自然的语音交流工具。


###### 使用方法

**基本使用**


import ChatTTS
from IPython.display import Audio

chat = ChatTTS.Chat()
chat.load_models()

texts = ["<在这里输入你的文本>",]

wavs = chat.infer(texts, use_decoder=True)
Audio(wavs[0], rate=24_000, autoplay=True)


**高级使用**


import torch

# 从高斯分布中采样一个说话人。
std, mean = torch.load('ChatTTS/asset/spk_stat.pt').chunk(2)
rand_spk = torch.randn(768) * std + mean

params_infer_code = {
'spk_emb': rand_spk, # 加入采样的说话人
'temperature': .3, # 使用自定义温度
'top_P': 0.7, # top P 解码
'top_K': 20, # top K 解码
}

# 句子层面控制示例
params_refine_text = {
'prompt': '[oral_2][laugh_0][break_6]'
}

wav = chat.infer("<在这里输入你的文本>", params_refine_text=params_refine_text, params_infer_code=params_infer_code)

# 单词层面控制示例
text = 'What is [uv_break]your favorite english food?[laugh][lbreak]'
wav = chat.infer(text, skip_refine_text=True, params_infer_code=params_infer_code)


###### 使用注意事项

由于ChatTTS拥有强大的语音合成能力，请务必负责任和伦理性地使用此技术。为了限制ChatTTS的滥用，训练40,000小时模型时加入了高频噪音，并通过MP3格式尽可能地压缩音频质量。同时，我们内部训练了一个检测模型，计划在未来开源。