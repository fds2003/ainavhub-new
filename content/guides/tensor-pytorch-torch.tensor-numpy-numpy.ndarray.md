---
title: "tensor tensor Tensor"
date: "2024-01-01 00:00:00+08:00"
description: tensor Tensor Tensor，，PyTorchtorch.TensorNumPynumpy.ndarray。Tensor，CTensor。
  Tensor...
slug: tensor-pytorch-torch.tensor-numpy-numpy.ndarray
tags:
- pytorch
- numpy
- numpy.ndarray
- tensor1d.arange
- print
draft: false
related_tools:
- ttt-lm-pytorch
- moneyprinter - 自动化本地创建youtube shorts视频的程序，用户只需提供一个谈论的主题即可
- smoldocling-256m-preview
- ai peer review
- qwq-max-preview
---

## tensor

##### Tensor简介及使用场景

**Tensor** 是一种多维数组，高效的科学计算和机器学习的基本数据结构，类似于PyTorch中的`torch.Tensor`或NumPy中的`numpy.ndarray`。为了更好地理解Tensor的内部实现，我们可以在C语言中构建一个简单的一维浮点数Tensor。

**Tensor基本组成部分** :

1. **Storage** : 存储一维数据的物理内存。
2. **View** : 视图，定义了数据的起点、终点和步长。


这种设计允许我们在不创建额外内存的情况下对Tensor进行切片，因为Storage被重用，而View则更新以反映新的起点、终点和步长。

下面是一些常见场景的示例：

1. **创建和操作一维Tensor** :
* 创建一个包含20个元素的Tensor: `t = tensor1d.arange(20)`
* 获取第三个元素: `print(t[3])` # 输出 3.0
* 设置最后一个元素为100: `t[-1] = 100`
* 切片操作: `print(t[5:15:2])` # 输出 [5, 7, 9, 11, 13]
* 切片的切片操作: `print(t[5:15:2][2:7])` # 输出 [9, 11, 13]


**使用场景** :

1. **科学计算和数据分析** : 利用Tensor处理和分析大规模数据。
2. **机器学习和深度学习** : 作为神经网络的基本数据结构，便于进行高效的向量化计算和梯度运算。
3. **计算机视觉和自然语言处理** : 高效处理图像、文本等多维数据。


**创建和使用步骤** :

1. 编译C代码:

gcc -Wall -O3 tensor1d.c -o tensor1d
./tensor1d


2. 生成共享库:

gcc -O3 -shared -fPIC -o libtensor1d.so tensor1d.c


3. 使用Python加载共享库:

import tensor1d
t = tensor1d.arange(20)


**进一步的实现和扩展** :

* 实现类似`torch.Tensor`的更多功能。
* 实现常见操作如加法、乘法等。
* 更完善的测试。
* 支持二维Tensor，考虑二维形状和步长。
* 实现广播机制。


**学习资源** :

* [PyTorch internals](<http://blog.ezyang.com/2019/05/pytorch-internals/>)
* [Numpy paper](<https://arxiv.org/abs/1102.1523>)