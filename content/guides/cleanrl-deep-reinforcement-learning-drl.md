---
title: "CleanRL"
date: "2024-01-01 00:00:00+08:00"
description: CleanRL CleanRL Deep Reinforcement Learning, DRL
slug: cleanrl-deep-reinforcement-learning-drl
tags:
- aws
- atari
- biases
- batch
- drl
draft: false
related_tools:
- drlambda - 利用人工智能创建专业幻灯片的工具
- deeplearning-interview-awesome-2024
- opendeepsearch
- deep research
- deepresearcher
---

## CleanRL

CleanRL是一个提供高质量、单文件实现的深度强化学习（Deep Reinforcement Learning, DRL）库。它的设计理念是通过清晰简洁的代码来实现研究友好的功能。尽管CleanRL的实现很简单，但它能够扩展到使用AWS Batch运行数千个实验的规模。CleanRL的主要特点包括：

* **单文件实现** ：每个算法变种的所有细节都包含在一个独立的文件中，让读者不需要阅读整个模块化库就能了解算法的实现细节。例如，`ppo_atari.py`只有340行代码，但包含了PPO算法与Atari游戏结合的所有实现细节。
* **基准测试实现** ：Cover了7+算法和34+游戏，详见 [benchmark.cleanrl.dev](<https://benchmark.cleanrl.dev>)。
* **Tensorboard日志记录** ：方便追踪训练过程。
* **本地可复现性** ：通过种子设置来确保实验可复现。
* **游戏过程录像** ：能够捕获游戏过程的视频，方便分析。
* **实验管理** ：与Weights and Biases集成，便于管理和跟踪实验。
* **云集成** ：支持docker和AWS，使得实验更容易在云上运行。


CleanRL只包含在线深度强化学习算法的实现。如果你在寻找离线算法的实现，可以查看[corl-team/CORL](<https://github.com/corl-team/CORL>)。

在什么情况下会使用CleanRL：

* **学习和理解DRL算法** ：由于CleanRL提供的是单文件实现，对于初学者或研究人员而言，它是学习和理解特定DRL算法实现细节的极佳资源。
* **原型开发和测试新特性** ：CleanRL的简洁性使得添加新功能或对现有算法进行修改变得容易。如果你在其他DRL库中遇到了实现特定功能的困难，可能会发现在CleanRL中进行原型开发是一个不错的选择。
* **进行基准测试或比较实验** ：CleanRL提供了多个算法和环境的基准测试实现，这对于需要比较不同算法性能的研究人员是非常有用的。


虽然CleanRL的代码清晰简洁，但它的缺点是不支持作为模块导入和高度重用代码，这意味着在扩展和维护方面可能需要付出更多的努力。因此，在决定是否使用CleanRL之前，需要根据项目的具体需求权衡利弊。