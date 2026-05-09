---
title: "Cambrian Cambrian Cambrian-1"
date: "2024-01-01 00:00:00+08:00"
description: Cambrian Cambrian-1  MLLM
slug: cambrian-cambrian-1-mllm-sva-llm
tags:
- gpu
- activate
- or
- vqa
- python
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- pocket flow framework
- theoremexplainagent
- agentic memory
---

## Cambrian

Cambrian-1 是一个全开放的多模态大型语言模型（MLLM），专注于视觉探索。该模型系列包括 8B、13B 和 34B 三个参数级别，旨在通过视觉连接器（SVA）将预训练的视觉编码器与大型语言模型（LLM）连接起来。

##### 使用场景：

1. **视觉问答（VQA）** ：处理涉及图片内容的问题并提供详细回答。
2. **视觉对话** ：在人机交互中理解和生成基于视觉内容的对话。
3. **数学和科学推理** ：处理涉及图表和科学问题的复杂推理。
4. **多模态分析** ：将语言和视觉信息结合进行复杂数据分析，例如图表解析。


##### 安装与使用：

* 支持TPU和GPU模式下的模型训练和推理。
* 可通过以下命令进行环境设置：

conda create -n cambrian python=3.10 -y
conda activate cambrian
pip install --upgrade pip
pip install -e ".[tpu or gpu]"


* 提供了详细的训练脚本和超参数设置，支持灵活的自定义数据使用。


##### 模型性能：

Cambrian-1 在多个基准上展示了强劲的性能表现，如视觉问答、科学问题解决和图表解析等，甚至比肩一些闭源专有模型（如 GPT-4V、Gemini-Pro 和 Grok-1.4V）。

##### 数据集：

Cambrian-1 依靠 Cambrian-10M 指令调优数据集进行训练，过滤出高质量的 7M 数据点（Cambrian-7M）。此外，还使用 GPT-4v 和 GPT-4o 扩展和生成更丰富的回答数据。

##### 曝露端点：

1. **TPU 训练** ：支持在 TPU 上训练，具体参考例如 `scripts/cambrian/pretrain_cambrian_8b.sh` 的脚本。
2. **GPU 训练** ：支持 GPU 环境下的多卡训练，通过灵活调整 batch size 实现最优利用。
3. **Gradio Web UI 和 CLI** ：通过 Gradio 提供的界面实现交互式推理，支持多模型比对。


##### 代码与数据：

模型权重和数据集可从 Hugging Face 上的相关页面下载，详细信息和使用示例可参考提供的 `inference.py` 脚本。

##### 引用：

如果 Cambrian 对您的研究有帮助，请使用以下引用：


@misc{tong2024cambrian1,
title={Cambrian-1: A Fully Open, Vision-Centric Exploration of Multimodal LLMs},
author={Shengbang Tong and Ellis Brown and Penghao Wu and Sanghyun Woo and Manoj Middepogu and Sai Charitha Akula and Jihan Yang and Shusheng Yang and Adithya Iyer and Xichen Pan and Austin Wang and Rob Fergus and Yann LeCun and Saining Xie},
year={2024},
eprint={2406.16860},
}


Cambrian-1 项目通过对视觉和语言的有效结合，力图在多模态人工智能领域推进研究和应用的界限。