---
title: "local-gemma"
date: "2024-01-01 00:00:00+08:00"
description: 'local-gemma local-gemma  Gemma-2 '
slug: local-gemma-gemma-2-transformers-bitsandbytes-python
tags:
- creative
- pip
- transformers
- extreme
- local-gemma
draft: false
related_tools:
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
- gemini multimodal live api + pipecat
---

## local-gemma

local-gemma 是一个方便的工具库，允许用户在本地快速运行 [Gemma-2](<https://huggingface.co/blog/gemma2>) 模型。它基于 [🤗 Transformers](<https://github.com/huggingface/transformers>) 和 [bitsandbytes](<https://huggingface.co/docs/bitsandbytes/index>) 构建，可以直接从命令行或通过 Python 库运行 Gemma-2。local-gemma 提供与原始实现完全等效的结果，或者可以在内存需求上做出优化，减少到仅模型中最大的层。

##### 安装

local-gemma 提供两种安装方式：

1. **pipx** ：适用于命令行（CLI）。
2. **pip** ：适用于 Python（CLI 和 API）。


根据不同硬件环境，可选择安装 CUDA、MPS 或 CPU 版本。

##### 使用场景

1. **命令行界面** ：

* 通过交互会话与 Gemma-2 进行对话。
* 直接输入提示词，获取单一输出。
* 支持指定模型和配置（如 `--model` 和 `--preset`）。
* 可以选择不同的文本生成模式（如 “chat”, “factual”, “creative”）。
2. **Python API** ：

* 使用 Transformers API 调用 Gemma-2 模型。
* 支持不同的预设（exact，memory，memory_extreme）来控制生成速度和内存使用。


##### 预设选项

local-gemma 提供三种预设，平衡了准确性、速度和内存：

1. **exact** ：最大化准确性。
2. **memory** ：通过 4-bit 量化减少内存。
3. **memory_extreme** ：通过 4-bit 量化和 CPU 卸载将内存需求降到最低。


##### 示例代码

_命令行使用示例_ ：


local-gemma "What is the capital of France?"


_Python 使用示例_ ：


from local_gemma import LocalGemma2ForCausalLM
from transformers import AutoTokenizer

model = LocalGemma2ForCausalLM.from_pretrained("google/gemma-2-9b", preset="memory")
tokenizer = AutoTokenizer.from_pretrained("google/gemma-2-9b")
inputs = tokenizer("The cat sat on the mat", return_tensors="pt")
outputs = model.generate(**inputs.to(model.device))
decoded_text = tokenizer.decode(outputs[0])


local-gemma 为使用 Gemma-2 提供了便捷和高效的途径，无论是通过命令行还是在 Python 中运行都十分方便。