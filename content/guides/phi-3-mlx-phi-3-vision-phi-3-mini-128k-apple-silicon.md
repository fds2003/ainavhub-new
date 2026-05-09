---
title: "Phi-3-MLX"
date: "2024-01-01 00:00:00+08:00"
description: Phi-3-MLX Phi-3-MLX Phi-3-MLX
slug: phi-3-mlx-phi-3-vision-phi-3-mini-128k-apple-silicon
tags:
- generate
- install
- apple
- in
- pip
draft: false
related_tools:
- auto-video-generateor
- apple doc mcp
- some pre-prompt instructions for apple
- apple intelligence
- infiniteyou
---

## Phi-3-MLX

##### Phi-3-MLX简介

Phi-3-MLX是一个多功能AI框架，结合了Phi-3-Vision多模态模型和最近更新的Phi-3-Mini-128K语言模型，特别优化用于Apple Silicon，通过MLX框架进行加速优化。该项目提供了一个易于使用的接口，适用于多种AI任务，包括高级文本生成、视觉问答和代码执行等。

##### 主要功能

* 支持Phi-3-Mini-128K（仅语言模型）
* 集成Phi-3-Vision（多模态模型）
* 针对Apple Silicon优化性能
* 支持批量生成，处理多个提示
* 支持多种AI任务的灵活代理系统
* 专用工具链定制化工作流
* 通过模型量化提升效率
* 支持LoRA微调
* 提供API集成功能（如图像生成、文本转语音）


##### 快速开始

您可以通过命令行安装和启动Phi-3-MLX：


pip install phi-3-vision-mlx
phi3v


或在Python脚本中使用该库：


from phi_3_vision_mlx import generate


##### 核心功能

###### 视觉问答


generate('What is shown in this image?', 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/344291/725918/main-image')


###### 批量文本生成


prompts = [
"Explain the key concepts of quantum computing and provide a Rust code example demonstrating quantum superposition.",
"Write a poem about the first snowfall of the year.",
"Summarize the major events of the French Revolution.",
...
]
generate(prompts, max_tokens=100)
generate(prompts, max_tokens=100, blind_model=True)


###### 模型和缓存量化


generate("Describe the water cycle.", quantize_model=True)
generate("Explain quantum computing.", quantize_cache=True)


###### LoRA微调

训练LoRA适配器：


from phi_3_vision_mlx import train_lora

train_lora(
lora_layers=5,
lora_rank=16,
epochs=10,
lr=1e-4,
warmup=0.5,
dataset_path="JosefAlbers/akemiH_MedQA_Reason"
)


使用LoRA生成文本：


generate("Describe the potential applications of CRISPR gene editing in medicine.",
blind_model=True,
quantize_model=True,
use_adapter=True)


##### 代理交互

###### 多轮对话


from phi_3_vision_mlx import Agent

agent = Agent()
agent('Analyze this image and describe the architectural style:', 'https://images.metmuseum.org/CRDImages/rl/original/DP-19531-075.jpg')
agent('What historical period does this architecture likely belong to?')
agent.end()


###### 生成反馈循环


agent('Plot a Lissajous Curve.')
agent('Modify the code to plot 3:4 frequency')
agent.end()


###### 外部API工具使用


agent('Draw "A perfectly red apple, 32k HDR, studio lighting"')
agent('Speak "People say nothing is impossible, but I do nothing every day."')
agent.end()


##### 定制工具链

###### 示例1：上下文学习代理


from phi_3_vision_mlx import _load_text

def add_text(prompt):
prompt, path = prompt.split('@')
return f'{_load_text(path)}\n<|end|>\n<|user|>{prompt}'

toolchain = """
prompt = add_text(prompt)
responses = generate(prompt, images)
"""
agent = Agent(toolchain, early_stop=100)
agent('How to inspect API endpoints? @https://raw.githubusercontent.com/gradio-app/gradio/main/guides/08_gradio-clients-and-lite/01_getting-started-with-the-python-client.md')


###### 示例2：检索增强编码代理


from phi_3_vision_mlx import VDB
import datasets

user_input = 'Comparison of Sortino Ratio for Bitcoin and Ethereum.'

def rag(prompt, repo_id="JosefAlbers/sharegpt_python_mlx", n_topk=1):
ds = datasets.load_dataset(repo_id, split='train')
vdb = VDB(ds)
context = vdb(prompt, n_topk)[0][0]
return f'{context}\n<|end|>\n<|user|>Plot: {prompt}'

toolchain_plot = """
prompt = rag(prompt)
responses = generate(prompt, images)
files = execute(responses, step)
"""
agent = Agent(toolchain_plot, False)
_, images = agent(user_input)


###### 示例3：多代理互动


agent_writer = Agent(early_stop=100)
agent_writer(f'Write a stock analysis report on: {user_input}', images)


##### 基准测试


from phi_3_vision_mlx import benchmark
benchmark()


任务 | 原始模型 | 量化模型 | 量化缓存 | LoRA适配器
---|---|---|---|---
文本生成 | 8.46 tps | 51.69 tps | 6.94 tps | 8.58 tps
图像描述 | 7.72 tps | 33.10 tps | 1.75 tps | 7.11 tps
批量生成 | 103.47 tps | 182.83 tps | 38.72 tps | 101.02 tps

_(在M1 Max 64GB上)_