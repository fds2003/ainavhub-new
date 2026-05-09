---
title: "hf-waitress hf-waitress HF-Waitress"
date: "2024-01-01 00:00:00+08:00"
description: 'hf-waitress HF-Waitress  HF-Waitress '
slug: hf-waitress-hugging-face-transformers-llm
tags:
- pytorch
- int8
- rocm
- gpu
- config.json
draft: false
related_tools:
- ttt-lm-pytorch
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- python a2a
- claude code sdk for python
---

## hf-waitress

##### HF-Waitress 简介

HF-Waitress 是一个功能强大且灵活的服务器应用程序，专门用于部署和交互 Hugging Face Transformers 模型。它简化了本地运行开源大型语言模型（LLM）的过程，解决了模型部署和使用中的常见问题。

##### 主要特性

* **即时量化** ：支持通过 BitsAndBytes 和 Quanto 实现 int8 和 int4 量化。
* **模型无关性** ：兼容任何 Hugging Face Transformers 格式的 LLM。
* **配置管理** ：使用 `config.json` 存储设置，便于配置和在多次运行中持久化。
* **错误处理** ：通过集中错误处理函数提供详细的日志记录和回溯报告。
* **健康端点** ：提供加载模型和服务器健康状况的有价值信息。
* **并发控制** ：使用信号量进行选择性并发，同时利用信号量原生队列。
* **流式响应** ：支持标准和流式完成。


##### 依赖

1. Python 3.10.x 或更高版本。
2. PyTorch（如果使用 GPU 运行 LLM，需要提前安装 GPU 驱动和 CUDA/ROCm 工具包）。
3. （可选）如果使用 Flash Attention 2，需要特定的 Nvidia GPU。


##### 安装步骤

1. 克隆仓库：

git clone https://github.com/abgulati/hf-waitress
cd hf-waitress


2. 安装所需依赖：

pip install -r requirements.txt


##### 使用方法

启动服务器：


python hf_waitress.py [arguments]


_启动参数是可选的，即使在第一次运行时也是如此_

###### 命令行参数

* `--model_id`：HF-Transformers 模型 ID。
* `--access_gated`：如果访问受限模型请设置为 True。
* `--access_token`：你的 Hugging Face 访问令牌。
* `--gguf`：加载 GGUF 模型时添加该标志，默认为 False。
* `--gguf_model_id`：GGUF 仓库 ID，默认为 None。
* `--gguf_filename`：特定的 GGUF 文件名，默认为 None。
* `--quantize`：量化方法（如 ‘bitsandbytes’, ‘quanto’, 或 ’none’）。
* `--quant_level`：量化等级（如 ‘int8’, ‘int4’）。
* `--push_to_hub`：推送量化模型到 Hugging Face Hub。
* `--torch_device_map`：指定推理设备（如 ‘cuda’, ‘cpu’）。
* `--torch_dtype`：指定模型张量类型。
* `--trust_remote_code`：允许执行模型仓库中的自定义代码。
* `--use_flash_attention_2`：尝试使用 Flash Attention 2。
* `--pipeline_task`：指定流水线任务（默认 ’text-generation’）。
* `--max_new_tokens`：生成的最大标记数。
* `--return_full_text`：返回包括提示的全文。
* `--temperature`：设置 LLM 温度（0.0 到 2.0）。
* `--do_sample`：在选择响应标记时进行采样。
* `--top_k`, `--top_p`, `--min_p`：标记选择参数。
* `--port`：指定服务器端口（默认 9069）。
* `--reset_to_defaults`：重置所有设置为默认值。


##### API 端点

1. `/completions` (POST)：生成给定消息的完成。
2. `/completions_stream` (POST)：流式生成给定消息的完成。
3. `/health` (GET)：检查健康状况并获取加载模型的信息。
4. `/hf_config_reader_api` (POST)：读取配置值。
5. `/hf_config_writer_api` (POST)：写入配置值。
6. `/restart_server` (GET)：重启 LLM 服务器。


##### 配置文件

服务器使用 `hf_config.json` 文件来存储和管理配置。你可以直接修改该文件或使用提供的 API 端点来更新设置。

##### 错误处理与日志记录

错误会记录在 `hf_server_log.log` 文件中。该日志文件使用滚动文件处理程序，保留最新日志并丢弃较早的日志。

##### 贡献

欢迎贡献！请随时提交 Pull Request。