---
title: "Tricycle"
date: "2024-01-01 00:00:00+08:00"
description: Tricycle Tricycle Tricycle
slug: tricycle-python-numpy-gpt-2-gpu
tags:
- numpy
- gpu
- python
- cpu
- cupy
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
---

## Tricycle

##### Tricycle简介

Tricycle是一个用Python和numpy从零开始编写的快速、全功能的深度学习库。它不仅是一个玩具神经网络，还能够处理大型模型，如GPT-2 (124M)。整个库，包括自动微分引擎、GPU支持和GPT的实现，都是透明且易于理解的，适合有一定Python基础的用户深入学习和操作。

![Tricycle Logo](https://github.com/bclarkson-code/Tricycle/assets/57139598/62405944-b27b-49bc-93c3-17ba93fc8ad7)

##### 主要特点和使用场景

###### 主要特点

1. **自动微分** ：支持复杂的操作和自动微分。
2. **GPU支持** ：利用Cupy实现设备无关的计算，可以在CPU和GPU上运行。
3. **深度学习模型** ：提供了包括Dense层、激活函数（如GeLU）、多头自注意力等在内的层，可以用于构建深度学习模型。
4. **透明实现** ：所有逻辑都可以直接查看，适合学习和研究。


###### 使用场景

1. **教育用途** ：非常适合学习和理解深度学习的基本原理和实现细节。
2. **研究** ：深度学习算法和模型的研究者可以使用Tricycle进行快速原型开发。
3. **模型训练** ：可以训练从小型模型（如一个生成莎士比亚风格文本的小型GPT）到比较大的模型（如GPT-2 124M）的深度学习模型。
4. **代码学习和实验** ：代码透明易懂，适合进行各种深度学习相关的实验和探索。


##### 安装

Tricycle使用conda来管理依赖项。虽然支持仅CPU的计算，但推荐使用CUDA支持的GPU进行训练以提高速度。

###### GPU版本安装


git clone https://github.com/bclarkson-code/Tricycle.git && cd Tricycle
conda env create -f requirements/environment.yml -n tricycle
conda activate tricycle


###### CPU版本安装


git clone https://github.com/bclarkson-code/Tricycle.git && cd Tricycle
conda env create -f requirements/environment.cpu.yml -n tricycle
conda activate tricycle


###### 测试/开发依赖安装

提供了包含测试依赖的安装环境。

###### GPU支持


git clone https://github.com/bclarkson-code/Tricycle.git && cd Tricycle
conda env create -f requirements/environment.test.yml -n tricycle
conda activate tricycle


###### 仅CPU支持


git clone https://github.com/bclarkson-code/Tricycle.git && cd Tricycle
conda env create -f requirements/environment.cpu.test.yml -n tricycle
conda activate tricycle


##### 示例使用

###### 创建和操作Tensor


from tricycle.tensor import Tensor

tensor = Tensor([1,2,3])
print(tensor)  # 输出: Tensor([1. 2. 3.])

# 张量操作 example
from tricycle.functions import Softmax

a = Tensor([1,2,3])
print(Softmax()(a))  # 输出: Tensor([0.09003057 0.24472848 0.66524094], name=softmax)


###### 自动微分


x = Tensor(2)
y = x ** 2 + 3 * x + 4
print(y)  # 输出: Tensor(14.0, name=+ 4)
y.backward()
print(x.grad)  # 输出: Tensor(7.0)


###### 层和模型


from tricycle.layers import Dense
from tricycle.activation import GeLU
from tricycle.blocks import MultiHeadSelfAttention

dense_layer = Dense(from_size=3, to_size=5)
print(dense_layer(a))  # 输出: Tensor([-1.0739521  -1.508788    0.17458707  1.578937    0.75451684], name=dense)

gelu = GeLU()
print(gelu(Tensor([-2, -1, 0, 1, 2])))  # 输出: Tensor([-0.04540235 -0.158808    0.          0.841192    1.9545977 ], name=gelu)


##### 训练GPT模型实例

可在RTX 3090上仅用约9分钟训练一个生成莎士比亚风格文本的小型GPT模型。


import pickle
from tqdm import tqdm
from tricycle import GPU_ENABLED
from tricycle.configs import ShakespeareConfig
from tricycle.dataset import CausalLMDataset
from tricycle.loss import CrossEntropy
from tricycle.models import GPT
from tricycle.optimisers import AdamW
from tricycle_datasets.shakespeare import Shakespeare

config = ShakespeareConfig()
config.steps = 5000

model = GPT(config)
tokens = Shakespeare(vocab_size=config.vocab_size)
dataset = (
CausalLMDataset(tokens=tokens, vocab_size=config.vocab_size, batch_size=config.batch_size, context_window=config.context_window)
.batch().shuffle().to_tensor()
)
loss_fn = CrossEntropy()
optimiser = AdamW(learning_rate=config.max_learning_rate, weight_decay=config.weight_decay, betas=(config.beta1, config.beta2))

if GPU_ENABLED:
dataset = dataset.to_gpu()
model.to_gpu()

loading_bar = tqdm(range(config.steps))
for step in loading_bar:
optimiser.step()
inputs, outputs = next(dataset)
logits = model(inputs)
loss = loss_fn(outputs, logits)
loss.backward()
loading_bar.set_description(f"loss: {loss.numpy().item():.3f}")
model.update(optimiser)

with open("model.pkl", "wb") as f:
if GPU_ENABLED:
model.from_gpu()
model = model.zero_grad()
pickle.dump(model, f)


训练完成后，可以用于生成类似莎士比亚的文本。

总之，Tricycle 因其透明的实现和强大的功能，适合作为理解和研究深度学习的优秀工具。