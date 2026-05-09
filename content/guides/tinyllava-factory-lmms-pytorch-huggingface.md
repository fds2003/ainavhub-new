---
title: "TinyLLaVA"
date: "2024-01-01 00:00:00+08:00"
description: TinyLLaVA Factory TinyLLaVA
slug: tinyllava-factory-lmms-pytorch-huggingface
tags:
- resampler
- tinyllava
- factory
- tinyllama
- openelm
draft: false
related_tools:
- ama
- openelm
- qwen3 fine-tuning playground
- openaifine-tuning（微调） api的新功能
- graphiti
---

## TinyLLaVA_Factory

TinyLLaVA_Factory 是一个专注于小规模大多模态模型（LMMs）的开源模块化代码库，旨在简化代码实现、扩展新功能以及保障训练结果的可重复性。它基于 PyTorch 和 HuggingFace 实现，提供了一套尖端的模型和方法，方便用户自定义自己的大型多模态模型。

##### 特点摘要

1. **性能优越** ：最佳模型 [TinyLLaVA-Phi-2-SigLIP-3.1B](<https://huggingface.co/tinyllava/TinyLLaVA-Phi-2-SigLIP-3.1B>) 在整体性能上优于现有的7B模型（如 LLaVA-1.5 和 Qwen-VL）。
2. **代码简洁** ：致力于简化代码实现，减少编码错误。
3. **模型和方法** ：
* **语言模型** ：支持 OpenELM、TinyLlama、StableLM、Qwen、Gemma 和 Phi。
* **视觉塔** ：支持 CLIP、SigLIP、Dino 及 CLIP 和 Dino 的组合。
* **连接器** ：支持 MLP、Qformer 和 Resampler。
* **训练策略** ：支持 Frozen/Fully/Partial tuning 和 LoRA/QLoRA 调优。


##### 使用场景

1. **自定义训练** ：用户可以在自己的数据上微调模型，支持自定义数据集和训练策略。
2. **模型评估** ：提供全面的评测功能，可用于不同任务的数据集评估。
3. **本地部署** ：方便用户将已经训练好的模型在本地进行推理测试。


##### 安装和使用

1. **安装** ：

* 克隆代码库并创建 Conda 环境：

git clone https://github.com/TinyLLaVA/TinyLLaVA_Factory.git
cd TinyLLaVA_Factory
conda create -n tinyllava_factory python=3.10 -y
conda activate tinyllava_factory
pip install --upgrade pip
pip install -e .
pip install flash-attn --no-build-isolation


2. **开始使用** ：

* 数据准备：详见官方 [文档](<https://tinyllava-factory.readthedocs.io/en/latest/Prepare%20Datasets.html>)。
* 训练模型：修改 `scripts/train/train_phi.sh`，并执行：

bash scripts/train/train_phi.sh


* 重要的训练超参数：详见上文提供的表格。
3. **模型评估** ：

* 请参考官方 [文档](<https://tinyllava-factory.readthedocs.io/en/latest/Evaluation.html>)。
4. **本地运行** ：

* 在本地运行已训练模型的示例代码：

from tinyllava.eval.run_tiny_llava import eval_model

model_path = "/absolute/path/to/your/model/"
prompt = "What are the things I should be cautious about when I visit here?"
image_file = "https://llava-vl.github.io/static/images/view.jpg"
conv_mode = "phi"  # 或其他适合的模式

args = type('Args', (), {
"model_path": model_path,
"model_base": None,
"query": prompt,
"conv_mode": conv_mode,
"image_file": image_file,
"sep": ",",
"temperature": 0,
"top_p": None,
"num_beams": 1,
"max_new_tokens": 512
})()

eval_model(args)


TinyLLaVA_Factory 提供了极大的灵活性，适合研究人员和开发人员快速迭代和验证新的多模态模型。它的设计目标是简化开发过程、提高代码的复用性，适用于多种不同的应用场景。