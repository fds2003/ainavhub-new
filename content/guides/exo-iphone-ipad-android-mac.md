---
title: "exo"
date: "2024-01-01 00:00:00+08:00"
description: exo exo ，（ iPhone、iPad、Android、Mac、Linux ） AI ， GPU。 exo ， NVIDIA GPU
  。 exo ...
slug: exo-iphone-ipad-android-mac
tags:
- gpu
- exo
- mac
- chatgpt
- ipad
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- exo private search
- qwen mac menu bar
- codemachine cli
---

## exo

exo 是一款实验性软件，允许用户通过家中的常见设备（如 iPhone、iPad、Android、Mac、Linux 等）组建自己的 AI 集群，进而将这些设备统合为一个强大的 GPU。该项目由 exo 实验室维护，主要面向有意利用现有设备资源而不依赖昂贵 NVIDIA GPU 的用户。

## exo 的核心特性

1. **广泛的模型支持** ：exo 支持 LLaMA 等流行的模型。
2. **动态模型分区** ：根据当前的网络拓扑结构和设备资源，exo 优化地将模型分割，这使得用户能够运行原本在单一设备上无法承载的更大模型。
3. **自动设备发现** ：exo 自动发现其他设备，无需手动配置。
4. **ChatGPT 兼容 API** ：exo 提供兼容 ChatGPT 的 API，用户只需在应用中进行简单的一行代码修改，即可通过自有硬件运行模型。


## 适用场景

1. **个人和家庭环境中的 AI 计算** ：通过统合家中现有的多设备资源，实现 AI 计算的高效利用。
2. **实验和开发环境** ：由于 exo 是实验性软件，非常适合喜欢尝试新技术和方法的开发者和研究人员。
3. **成本优化** ：对于不希望花费高昂成本购买 GPU，但希望通过现有设备进行 AI 运算的用户，exo 提供了一种经济实惠的替代方案。


## 安装与使用

安装 exo 的推荐方法是从源码安装：


git clone https://github.com/exo-explore/exo.git
cd exo
pip install -r requirements.txt


##### 示例用法（多设备）

在每个设备上运行：


python3 main.py


无需任何配置，exo 将自动发现其他设备，提供一个类似 ChatGPT 的网络界面和 API 端点。用户可以通过如下方式调用 API：


curl -X POST http://localhost:8001/api/v1/chat -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "What is the meaning of life?"}]}'


## 支持的推理引擎和网络模块

##### 推理引擎

* MLX
* tinygrad
* 🚧 llama.cpp（开发中）


##### 网络模块

* ✅ GRPC
* 🚧 Radio（开发中）
* 🚧 Bluetooth（开发中）


## 参与方式

由于 exo 是实验性软件，用户在早期使用时可能会遇到一些问题，鼓励大家创建问题报告，以便 exo 团队及时解决。此外，社区贡献也是非常欢迎的，exo 实验室提供了一些赏金任务。

通过以下方式可以加入社区讨论：[Discord](<https://discord.gg/EUnjGpsmWw>)，[Telegram](<https://t.me/+Kh-KqHTzFYg3MGNk>)。