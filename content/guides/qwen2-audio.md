---
title: "Qwen2-Audio"
date: "2024-01-01 00:00:00+08:00"
description: Qwen2-Audio Qwen2-Audio Qwen2-Audio
slug: qwen2-audio
tags:
- asr
- mo
- huggingface
- qwen2-audio
- vsc
draft: false
related_tools:
- qwen3-asr-studio
- qwen3-asr-toolkit
- funasr
- asrtools
- aurasr
---

## Qwen2-Audio

Qwen2-Audio是最新推出的大规模音频语言模型，能够接受各种音频信号输入，并根据语音指令进行音频分析或直接回复文本。其主要功能包括：

1. **语音对话模式** ：用户可以在无需文本输入的情况下与Qwen2-Audio自由进行语音交互。
2. **音频分析模式** ：用户可以在交互过程中提供音频和文本指令进行分析。


##### 使用场景

Qwen2-Audio可以应用在以下场景：

* **自动语音识别（ASR）** ：分析语音并将其转化为文本。
* **语音翻译（S2TT）** ：将一种语言的语音翻译成另一种语言的文本。
* **语音情感识别（SER）** ：识别语音中的情感状态。
* **声源分类（VSC）** ：对不同的声音类型进行分类。
* **多模态音频交互** ：在语音、声音、音乐等多种音频形式之间进行复杂交互。


##### 模型表现

Qwen2-Audio在多个基准测试上表现优异，包括Librispeech、Common Voice 15、Fleurs、Aishell2等，在任务评估中取得了较高的准确率和较低的错误率。

##### 评价和发布

Qwen2-Audio及其聊天版本(Qwen2-Audio-Chat)即将发布，用户可以在多种平台上使用，包括Huggingface、ModelScope和Web UI。此外，所有评估脚本也将开放，帮助用户复现评估结果。

##### 联系与合作

如果对Qwen2-Audio感兴趣或有合作意向，可以发送邮件至qwen_[audio@list.alibaba-inc.com](<mailto:audio@list.alibaba-inc.com>)。我们也在积极招聘全职和实习人员，对相关职位感兴趣的可以联系我们。

##### 引用

如果在研究中使用到Qwen2-Audio，请参考以下BibTeX格式进行引用：


@article{Qwen-Audio,
title={Qwen-Audio: Advancing Universal Audio Understanding via Unified Large-Scale Audio-Language Models},
author={Chu, Yunfei and Xu, Jin and Zhou, Xiaohuan and Yang, Qian and Zhang, Shiliang and Yan, Zhijie  and Zhou, Chang and Zhou, Jingren},
journal={arXiv preprint arXiv:2311.07919},
year={2023}
}

@article{Qwen2-Audio,
title={Qwen2-Audio Technical Report},
author={Chu, Yunfei and Xu, Jin and Yang, Qian and Wei, Haojie and Wei, Xipin and Guo,  Zhifang and Leng, Yichong and Lv, Yuanjun and He, Jinzheng and Lin, Junyang and Zhou, Chang and Zhou, Jingren},
journal={arXiv preprint arXiv:2407.10759},
year={2024}
}