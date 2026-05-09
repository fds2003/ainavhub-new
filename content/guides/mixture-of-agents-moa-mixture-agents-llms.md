---
title: "Mixture-of-Agents"
date: "2024-01-01 00:00:00+08:00"
description: Mixture-of-Agents Mixture-of-Agents (MoA) Mixture of Agents
slug: mixture-of-agents-moa-mixture-agents-llms
tags:
- gradio
- mixture-of-agents
- llm
- moa
- llms
draft: false
related_tools:
- gradio webrtc
- mixture-of-agents
- agent
- rllm
- onefilellm
---

## Mixture-of-Agents

##### Mixture-of-Agents (MoA)简介

Mixture of Agents（简称MoA）是一种前沿的技术方法，通过整合多个大型语言模型（LLMs），提升AI性能。MoA采用分层架构，每一层都包含多个LLM代理，从而利用开源模型实现最先进的结果。

##### 关键功能

1. **多模型整合** ：结合多个AI模型的响应，提供更全面和细致的输出。
2. **可定制模型选择** ：用户可选择并配置参考模型和聚合模型。
3. **可调节参数** ：通过自定义温度、最大标记数和处理轮次微调生成过程。
4. **实时流式生成** ：体验流畅的响应生成过程。
5. **直观的Gradio界面** ：用户友好的界面设计，采用大地色调主题。
6. **灵活的对话模式** ：支持单轮次和多轮次对话。


##### 工作原理

1. 用户输入同时由多个参考模型处理。
2. 每个参考模型生成其独有的响应。
3. 一个聚合模型会结合并优化这些响应，生成最终输出。
4. 这个过程可以重复多轮，以提升最终响应的质量。


##### 使用场景

1. **客户服务** ：结合多个模型提供准确答案，提高用户满意度。
2. **学术研究** ：利用多个模型的共同智慧，生成高质量学术内容。
3. **创意写作** ：通过不同模型结合产生丰富多彩的创意内容。
4. **技术支持** ：提供多种方案建议，帮助解决复杂技术问题。


##### 配置和运行

1. 克隆仓库并进入项目目录。
2. 安装依赖项：

conda create -n moa python=3.10
conda activate moa
pip install -r requirements.txt


##### 配置文件

编辑`.env`文件以配置以下参数：


API_BASE=http://localhost:11434/v1
API_KEY=ollama

API_BASE_2=http://localhost:11434/v1
API_KEY_2=ollama

MAX_TOKENS=4096
TEMPERATURE=0.7
ROUNDS=1

MODEL_AGGREGATE=llama3:70b-instruct-q6_K

MODEL_REFERENCE_1=phi3:latest
MODEL_REFERENCE_2=llama3:latest
MODEL_REFERENCE_3=phi3:3.8b-mini-instruct-4k-fp16

OLLAMA_NUM_PARALLEL=4
OLLAMA_MAX_LOADED_MODELS=4


##### 启动应用

1. 启动Ollama服务器：

OLLAMA_NUM_PARALLEL=4 OLLAMA_MAX_LOADED_MODELS=4 ollama serve


2. 启动Gradio界面：

conda activate moa
gradio app.py


3. 打开浏览器并访问Gradio提供的URL（通常为http://localhost:7860）。


##### 高级使用

* **模型定制** ：轻松切换不同的聚合模型以满足需求。
* **参数调整** ：通过调节温度、最大标记数和轮次来控制输出的创造力和长度。
* **多轮次对话** ：开启或关闭上下文保留，进行更动态的交互。


##### 贡献

欢迎为MoA聊天应用的改进做出贡献。可以提交pull request或打开issue讨论潜在的改进。

##### 许可

本项目的许可请参考原始MoA仓库中指定的条款。有关详细的许可信息，请参阅原始来源。