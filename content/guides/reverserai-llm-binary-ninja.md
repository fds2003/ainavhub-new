---
title: "ReverserAI"
date: "2024-01-01 00:00:00+08:00"
description: ReverserAI ReverserAI LLM
slug: reverserai-llm-binary-ninja
tags:
- gpu
- binary
- cpu
- ninja
- llm
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- melotts - 支持多语言的高品质文本转语音库，支持中英文混合及实时cpu推理。
- manganinja
- rllm
---

## ReverserAI

ReverserAI是一个旨在通过使用本地大型语言模型（LLM）自动化和增强逆向工程任务的研究项目。它完全离线运行，能够自动从反编译器输出中推荐高级、语义上有意义的函数名称。ReverserAI作为一个Binary Ninja插件提供，但其架构设计为可扩展，以支持其他逆向工程工具，如IDA和Ghidra。

##### ReverserAI的功能特点包括：

* **离线操作** ：ReverserAI在本地CPU/GPU上完全独立运行，确保了数据的隐私和安全。
* **自动函数命名** ：能够从反编译器输出中自动推荐有意义的函数名称。
* **Binary Ninja集成** ：无缝地作为Binary Ninja的插件进行集成。
* **模块化架构** ：旨在方便地扩展以支持如IDA和Ghidra等其他逆向工程工具。
* **消费级硬件兼容性** ：优化以在消费级硬件上运行，比如Apple硅片架构设备。


##### 使用情景：

在以下情况下可能会使用ReverserAI：

* 当你需要在保证数据隐私的情况下进行逆向工程时，由于ReverserAI完全离线运行，它是一个理想的选择。
* 当你希望自动化逆向工程流程中的一些任务，如函数命名，可以节省时间并提高效率。
* 在使用Binary Ninja进行逆向工程时，ReverserAI能够无缝集成，增强其功能。
* 当你的设备是消费级硬件，并且想在本地运行大型语言模型进行逆向工程任务时，ReverserAI的优化使其成为可能。
* 如果你对利用最新的AI技术来辅助逆向工程工作感兴趣，ReverserAI作为一个研究项目，提供了探索本地LLMs潜能的机会。


ReverserAI还设计为易于配置和调整，以匹配你的硬件设置从而优化性能，这意味着你可以根据自己的需要调节CPU和GPU的使用。

##### 使用ReverserAI的限制和未来的发展方向：

虽然ReverserAI展示了本地LLMs在消费级硬件上为逆向工程任务提供辅助的可能性，但当前主要功能是提供函数名称建议。将来的发展方向可能包括提高与LLMs交互的质量和处理速度、添加网络通信以在强大的服务器上托管ReverserAI代理、微调现有模型或开发针对逆向工程需求的专门模型，以及扩展支持到其他逆向工程平台等。

ReverserAI是逆向工程社区向AI辅助的未来迈出的一步，它展示了使用本地LLMs在数据隐私、用户易用性和性能之间获得平衡的可能性。