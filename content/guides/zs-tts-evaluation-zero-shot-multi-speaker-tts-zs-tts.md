---
title: "ZS-TTS-Evaluation"
date: "2024-01-01 00:00:00+08:00"
description: 'ZS-TTS-Evaluation ZS-TTS-Evaluation  ZS-TTS-Evaluation '
slug: zs-tts-evaluation-zero-shot-multi-speaker-tts-zs-tts
tags:
- flores
- fl
- nmos
- devtest
- daps
draft: false
related_tools:
- pocket flow framework
- cloudflare agents
- gemini 2.0 flash image generation and editing
- flowgram.ai
- rooflow
---

## ZS-TTS-Evaluation

# ZS-TTS-Evaluation 简介与使用场景

ZS-TTS-Evaluation 是一个致力于使用客观指标来评估和比较当前零样本多说话人语音合成（Zero-shot Multi-speaker TTS, ZS-TTS）系统的仓库。

为了比较这些模型，我们选用了 [FLORES+](<https://github.com/openlanguagedata/flores>) 数据集中每个支持的语言的240个句子。这些句子是从 `$devtest$` 子集中随机抽取的。选择FLORES+数据集是因为它包含所有ZS-TTS模型所支持语言的平行翻译，从而使我们可以使用相同的词汇来比较所有语言的结果。为了测试ZS-TTS的能力，我们决定使用 [DAPS 数据集](<https://zenodo.org/records/4660670>) 中清洁子集的20位说话人（10男性和10女性）。对于每位说话人，我们随机选择了一段3到8秒的音频片段，作为测试句子生成时的参考。所有语言的评估都使用这些样本，这样对于非英语语言，模型是在跨语言的情况下进行比较的。

## 指标

##### UTMOS

根据 [HierSpeech++ 论文](<https://arxiv.org/abs/2311.12454>)，我们使用 [UTMOS 模型](<https://arxiv.org/abs/2204.02152>) 来预测自然度平均意见分数（nMOS）。尽管不能将其视为绝对评价指标，但它可以用于在质量方面轻松比较模型。

##### SECS

为了比较合成语音与原始说话人的相似性，我们计算 [Speaker Encoder Cosine Similarity (SECS)](<https://arxiv.org/abs/2104.05557>)。我们使用 [ECAPA2](<https://huggingface.co/Jenthe/ECAPA2>) 说话人编码器来计算SECS，因为它在VoxCeleb1测试集中最近实现了说话人验证的SOTA（最佳状态）。

##### CER

根据前人的工作，我们使用自动语音识别（ASR）模型来评估发音准确性。我们使用 [Whisper Large v3 模型](<https://huggingface.co/openai/whisper-large-v3>)。此外，考虑到我们的模型被训练在不使用空格分隔单词的语言（如中文）上，我们决定使用字符错误率（CER）而不是词错误率（WER），因为这样所有语言都可以使用相同的指标进行评估。在计算CER之前，我们还删除了所有文本标点符号。

## 参考

如需在工作中引用此仓库，请使用以下参考文献：


##### 使用场景

1. **学术研究** ：帮助研究人员评估不同ZS-TTS模型的性能。
2. **模型开发** ：提供开发者一个标准化的评估工具，以改进和优化TTS模型。
3. **跨语言应用** ：在多语言环境中测试TTS模型的适应性和通用性。
4. **语音助手** ：提高语音助手的多说话人和多语言支持能力。