---
title: "SpeechLLM"
date: "2024-01-01 00:00:00+08:00"
description: SpeechLLM SpeechLLM  LLM
slug: speechllm-llm-khz
tags:
- 'true'
- gender
- happy
- speechllm
- khz
draft: false
related_tools:
- happy
- qwen3-asr-studio
- qwen3-asr-toolkit
- funasr
- asrtools
---

## SpeechLLM

SpeechLLM 是一种多模态语言模型（LLM），专门训练用于分析和预测对话中说话者的元数据。这个先进的模型集成了语音编码器，将语音信号转换为有意义的语音表示。这些嵌入与文本指令结合后，由语言模型进行处理，生成预测结果。

该模型输入一个 **16 KHz** 的语音音频文件，并预测以下内容：

1. **SpeechActivity** ：音频信号是否包含语音（True/False）
2. **Transcript** ：音频的自动语音识别（ASR）转录
3. **Gender** ：说话者的性别（Female/Male）
4. **Age** ：说话者的年龄段（Young/Middle-Age/Senior）
5. **Accent** ：说话者的口音（非洲、美洲、凯尔特、欧洲、大洋洲、南亚、东南亚）
6. **Emotion** ：说话者的情绪（Happy/Sad/Anger/Neutral/Frustrated）


##### 使用场景

SpeechLLM 适用于多种需要语音分析和理解的场景，包括但不限于：

1. **客服系统** ：可以用于分析客户的语气和情绪，提供更个性化的服务。
2. **语音助理** ：增强语音助理的理解能力，提供更准确的响应。
3. **市场调研** ：分析客户反馈中的情绪和态度，深入了解客户需求。
4. **医疗健康** ：通过分析患者的语音，辅助诊断和提供心理支持。
5. **教育** ：评估学生的情绪和专注度，提供更有针对性的教育内容。


##### 使用方法

以下是一个简单的使用示例：


# 直接从 Huggingface 加载模型
from transformers import AutoModel
model = AutoModel.from_pretrained("skit-ai/speechllm-2B", trust_remote_code=True)

model.generate_meta(
audio_path="path-to-audio.wav", # 16k Hz, mono
audio_tensor=torchaudio.load("path-to-audio.wav")[1], # [可选]可直接使用 audio_path 或 audio_tensor
instruction="Give me the following information about the audio [SpeechActivity, Transcript, Gender, Emotion, Age, Accent]",
max_new_tokens=500,
return_special_tokens=False
)

# 生成的模型输出
'''
{
"SpeechActivity" : "True",
"Transcript": "Yes, I got it. I'll make the payment now.",
"Gender": "Female",
"Emotion": "Neutral",
"Age": "Young",
"Accent" : "America",
}
'''


你可以在 [Google Colab Notebook](<https://colab.research.google.com/drive/1uqhRl36LJKA4IxnrhplLMv0wQ_f3OuBM?usp=sharing>) 中试用这个模型。更多详细信息请参考 [博客](<https://tech.skit.ai/speech-conversational-llms/>)。

##### 免责声明

本库中的模型在自动语音识别（ASR）、性别识别、年龄估计、口音和情绪识别方面并不完美，可能会出错。此外，这些模型可能会表现出与性别、年龄、口音和情绪相关的偏见。在实际生产环境中使用时需谨慎，注意可能存在的不准确性和偏见。