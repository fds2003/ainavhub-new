---
title: "DiscoGrad"
date: "2024-01-01 00:00:00+08:00"
description: DiscoGrad DiscoGrad DiscoGrad
slug: discograd-ad-if-else
tags:
- discograd
- if-else
- ad
- torch
draft: false
related_tools:
- agentic radar
- smartread
- google ads mcp
- cad-mcp server
- mmada
---

## DiscoGrad

##### DiscoGrad简介

DiscoGrad是一种自动将C++程序转换为能够跨分支高效计算平滑梯度的工具。其核心目标是解决自动微分（AD）在处理涉及参数依赖分支控制流（例如if-else语句）和随机性的程序时产生无效梯度（零值和/或偏差梯度）的问题。通过DiscoGrad，用户可以在自动微分的基础上，通过外部扰动或程序内部的随机性，实现梯度的平滑计算，从而利用梯度下降法进行程序参数优化。

DiscoGrad支持多种梯度估计后端，并可以通过Torch集成神经网络进行端到端训练。该工具目前支持基本的C++构造，仍处于研究原型阶段。其应用包括交通运输、人群管理、流行病学等领域。

##### DiscoGrad的使用场景

1. **优化仿真模型** ：在涉及复杂仿真和随机性的程序中，DiscoGrad可以生成有效的梯度，用于优化这些模型的参数。
2. **控制系统** ：应用于具有分支控制流的控制系统中，通过平滑梯度，改进控制策略。
3. **推理问题** ：在机器学习和人工智能领域，通过神经网络与DiscoGrad的结合，实现更高效的端到端训练。
4. **其他复杂计算任务** ：适用于任何存在参数依赖分支的复杂计算任务，通过自动平滑梯度，改进模型性能。


##### 安装与使用

1. **安装** ：在Linux系统（Ubuntu 22.04.4, Arch Linux, Fedora 38 Workstation）上测试通过，需安装`clang`、`llvm`和`cmake`。

cd transformation
cmake .
make -j


2. **快速开始** ：可以参考`programs/hello_world/hello_world.cpp`中的代码进行快速开始。运行以下命令编译并执行hello world示例：

./smooth_compile programs/hello_world/hello_world.cpp
echo 0.0 | ./programs/hello_world/hello_world_dgo --var 0.25 --ns 1000


3. **API使用** ：在程序开始处定义输入数量并包含discograd头文件，实现包含分支和Random的函数，最后在main函数中调用DiscoGrad实例进行平滑梯度计算。


##### 后端

DiscoGrad当前支持多种后端，包括：

* **crisp** ：原始程序的自动微分，可能产生零值梯度。
* **dgo** ：DiscoGrad Gradient Oracle，基于自动微分和蒙特卡罗采样。
* **pgo** ：Polyak’s Gradient-Free Oracle。
* **reinforce** ：应用REINFORCE于引入高斯随机性的程序。


有关详细的后端信息以及使用参考，请查阅项目文档和示例程序。

##### 参考文献

* Kreikemeyer, Justin N. and Andelfinger, Philipp. “Smoothing Methods for Automatic Differentiation Across Conditional Branches.” IEEE Access, 2023.