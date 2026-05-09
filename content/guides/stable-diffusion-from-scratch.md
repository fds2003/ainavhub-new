---
title: "Stable Diffusion from scratch Stable Diffusion from scratch Stable Diffusion"
date: "2024-01-01 00:00:00+08:00"
description: "Stable Diffusion from scratch Stable Diffusion from scratch Stable Diffusion"
slug: "stable-diffusion-from-scratch"
draft: false
---

## Stable Diffusion from scratch

Stable Diffusion from scratch 是一个教育性质的代码库，旨在帮助人们理解Stable Diffusion及其背后的扩散模型的工作原理和数学基础。

##### 项目目的

作者创建这个仓库的目的是为了深入理解Stable Diffusion的工作机制及其所使用的数学公式。尽管阅读了很多相关的数学解释和代码实现的文章，作者发现缺乏一个将两者结合起来的资源，因此编写了这个仓库。

##### 阅读建议

为了更好地理解本仓库中的内容，作者建议以下步骤：

1. **从数学解释开始** ：通过[Mathematical Explanation.ipynb](<https://github.com/juraam/stable-diffusion-from-scratch/blob/main/Math%20Explanation.ipynb>)来了解扩散模型背后的数学原理。
2. **查看两种扩散模型的实现** ：仓库中提供了[条件扩散模型](<https://github.com/juraam/stable-diffusion-from-scratch/tree/main/src/condition_diffusion>)和[简单扩散模型](<https://github.com/juraam/stable-diffusion-from-scratch/tree/main/src/diffusion>)的代码。建议先从简单扩散模型开始。
3. **实验一下** ：可以使用以下两个 Jupyter notebooks 进行训练和采样：
* [简单扩散模型](<https://github.com/juraam/stable-diffusion-from-scratch/blob/main/Train%20and%20sample%20diffusion.ipynb>)
* [条件扩散模型](<https://github.com/juraam/stable-diffusion-from-scratch/blob/main/Train%20and%20sample%20conditional%20diffusion.ipynb>)


##### 代码使用说明

1. **安装依赖** ：


pip install -r requirements.txt


2. **下载模型** ：


git lfs fetch --all


3. **采样** ：

* 通过[简单扩散](<https://github.com/juraam/stable-diffusion-from-scratch/blob/main/Train%20and%20sample%20diffusion.ipynb>) 获取随机样本。
* 通过[条件扩散](<https://github.com/juraam/stable-diffusion-from-scratch/blob/main/Train%20and%20sample%20conditional%20diffusion.ipynb>)输入类别控制生成。
4. **训练** ：

* 在[简单扩散](<https://github.com/juraam/stable-diffusion-from-scratch/blob/main/Train%20and%20sample%20diffusion.ipynb>) 中选择数据集（如cifar10或mnist）并运行所有cell。
* 在[条件扩散](<https://github.com/juraam/stable-diffusion-from-scratch/blob/main/Train%20and%20sample%20conditional%20diffusion.ipynb>) 中选择数据集（如cifar10或mnist）并运行所有cell。


##### 使用场景

Stable Diffusion from scratch 适用于想深入理解 Stable Diffusion 和扩散模型运作原理的个人和研究者。通过自己动手实现模型从而加强对复杂机器学习模型工作的理解。这也是一个很好的教学资源，可以用于课堂讲授或研究讨论中。

##### 模型性能

该仓库中的简单扩散模型在CIFAR 10数据集上的FID评分为30，相较于原始扩散模型的3.17 仍有较大的改进空间。

通过文档中的参考资源，读者可以进一步深入研究扩散模型及其实现。
