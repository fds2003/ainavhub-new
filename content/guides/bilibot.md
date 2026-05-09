---
title: "bilibot"
date: "2024-01-01 00:00:00+08:00"
description: 'bilibot bilibot  bilibot '
slug: bilibot
tags:
- mlx-lm
- gpt-sovits
- bilibot
- lora
- python
draft: false
related_tools:
- index-tts-lora
- comfyui-b-lora
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
---

## bilibot

##### bilibot 功能总结

bilibot 是一个由哔哩哔哩用户评论数据训练而成的本地聊天机器人。它有以下两个主要功能：

1. **文字聊天** ：你可以和它进行文字对话，它能基于哔哩哔哩用户的评论数据生成合适的回复。
2. **语音对话** ：它不仅能进行文字聊天，还能针对特定问题生成语音回复。


##### 使用场景

bilibot 可以在以下情况下使用：

1. **日常聊天** ：你想找个虚拟对象聊天。
2. **数据调研** ：需要针对特定话题或问题进行大量的对话生成。
3. **语音合成应用** ：想要体验或使用由哔哩哔哩用户语音数据训练出的语音机器人。


##### 技术细节

1. **文字生成** ：

* 使用了 Qwen1.5-32B-Chat 基础模型，这是阿里开源的自然语言生成模型。
* 利用苹果 mlx-lm LORA 示例项目进行了微调，使 bilibot 更好地适配哔哩哔哩社区的风格和内容。
2. **语音生成** ：

* 基于开源项目 GPT-SoVITS，用来将文本变成语音。
* 使用了 B 站用户“白菜工厂1145号员工”训练的派蒙语音模型进行语音生成。


##### 如何运行

1. **环境配置** ：
* 建议使用 Anaconda 创建 Python 环境，并安装所需依赖。
2. **字体微调与推理测试** ：
* 通过命令行对 Qwen1.5-32B-Chat 进行微调训练和推理测试。
* 微调后的模型进行量化压缩，加快生成速度。
3. **语音生成** ：
* 配置 GPT-SoVITS 环境，将文本转换为标准语音输出。
* 运行 API 程序，生成不同角色的语音回复。


##### 操作示例

1. 创建 Python 环境并安装依赖：

conda create -n bilibot python=3.10
conda activate bilibot
cd bilibot
pip install -r requirements.txt


2. 微调训练并测试：

python -m mlx_lm.lora --model models/Qwen1.5-32B-Chat --data data/ --train --iters 1000 --batch-size 16 --lora-layers 12
python -m mlx_lm.fuse --model models/Qwen1.5-32B-Chat --save-path models/Qwen1.5-32B-Chat-FT --adapter-path models/Qwen1.5-32B-Chat-Adapters
python tools/compress_model.py
python chat.py


3. 语音生成环境配置及运行：

conda create -n GPTSOVITS python=3.9
conda activate GPTSOVITS
cd GPT-SoVITS
pip install -r requirements.txt
python webui.py
python api.py -s SoVITS_weights/paimeng2_e110_s159940.pth -g GPT_weights/paimeng2-e10.ckpt -dr samples/Paimon/疑问—哇，这个，还有这个…只是和史莱姆打了一场，就有这么多结论吗？.wav -dt "哇，这个，还有这个…只是和史莱姆打了一场，就有这么多结论吗？" -dl "zh" -a 127.0.0.1 -p 9880
python api.py -s SoVITS_weights/linyi_e25_s1150.pth -g GPT_weights/linyi-e50.ckpt -dr "samples/linyi/【愤怒】你这问题太弱智了，我都不知道该从哪开始骂你。.WAV" -dt "你这问题太弱智了，我都不知道该从哪开始骂你。" -dl "zh" -a 127.0.0.1 -p 9881


4. 运行问答生成程序：

python start_qa_dialogue.py