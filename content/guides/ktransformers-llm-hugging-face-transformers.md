---
title: "KTransformers"
date: "2024-01-01 00:00:00+08:00"
description: KTransformers KTransformers  LLM
slug: ktransformers-llm-hugging-face-transformers
tags:
- gpu
- moe
- face
- vscode
- chatgpt
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- qwen1.5-moe
- bananaface
- facebook ads library mcp server
---

## KTransformers

**KTransformers** 是一个用于优化大型语言模型（LLM）推断的灵活工具。它的设计目的是通过高级内核优化和场地/并行策略，提高 Hugging Face Transformers 的使用体验。KTransformers 以 Python 为核心，具有高度的可扩展性和灵活性，能够让用户通过一行代码注入优化模块，并且提供与 Transformers 兼容的接口、符合 OpenAI 和 Ollama 的 RESTful APIs、以及简化版的类似 ChatGPT 的网页界面。

**使用场景**

1. **本地桌面计算：**

* **GPT-4 级别的本地 VSCode Copilot** ：例如，可以在仅24GB的VRAM桌面上运行236B DeepSeek-Coder-V2模型，性能优于GPT4-0613。
* 通过 MoE 卸载和高级内核注入，实现每秒126个tokens的预填充速度和每秒13.6个tokens的生成速度。
2. **开发和研究：**

* 使用 KTransformers 进行创新 LLM 推断优化实验，适合资源受限的本地部署。
* 支持 GPU/CPU 混合计算，优先使用量化的高效内核，如Llamafile和Marlin。
3. **模型集成：**

* 集成至 VSCode 的 Tabby 和其它前端系统作为 OpenAI 和 Ollama 兼容的后端。
* 提供简易的命令行聊天脚本和简单 RESTful API 服务，方便本地测试和集中式部署。
4. **模型支持:**

* 支持多个大模型，如DeepSeek-V2系列、Qwen2系列，并将持续优化和增加新支持模型。


**快速开始**

1. **环境准备：**

* 安装 CUDA 12.1以上版本及必要开发工具（Linux的gcc、g++、cmake等）。
* 建议使用 Conda 创建 Python 3.11 环境以运行程序。
2. **安装和运行:**

* 从源码下载并安装：

git clone https://github.com/kvcache-ai/ktransformers.git
cd ktransformers
git submodule init
git submodule update
bash install.sh


* 运行本地聊天示例：

python ktransformers/local_chat.py --model_path deepseek-ai/DeepSeek-V2-Lite-Chat --gguf_path ./DeepSeek-V2-Lite-Chat-GGUF


3. **高级功能：**

* 提供 RESTful API 和网页界面，可以通过命令启动并进行测试。


**KTransformers 的核心思想是通过 YAML 模板配置文件进行模块替换和优化，将原生的 Transformer 模型中的某些模块替换为优化过的内核模块，从而提高模型的推理效率** 。例如，使用 YAML 配置文件指定如何将原生的 Linear 模块替换为量化的 Marlin 内核。

通过结合创新的硬件加速和量化算法，KTransformers 在预填充和生成速度上表现卓越，是在资源受限环境中进行大型语言模型推断优化实验和应用的理想工具。