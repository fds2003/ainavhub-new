---
title: "mlx-swift-chat"
date: "2024-01-01 00:00:00+08:00"
description: 'mlx-swift-chat mlx-swift-chat  mlx-swift-chat '
slug: mlx-swift-chat-apple-silicon-mlx-swiftui
tags:
- mlx
- swiftui
- llms
- mlx-swift-chat
- apple
draft: false
related_tools:
- mlx-swift-chat
- mlx examples
- mlx-embeddings
- lms
- screen to action using llms
---

## mlx-swift-chat

##### mlx-swift-chat 功能总结

mlx-swift-chat 是一个为苹果硅片系统（例如你的笔记本电脑上的Apple Silicon）特别设计的机器学习框架 MLX 的应用。它是一个完全基于 SwiftUI 的本地应用，能够实时在苹果硅片上运行本地大型语言模型（LLMs），比如 Llama 或 Mistral。这意味着你可以在不依赖云服务的情况下，在你自己的设备上高效运行强大的语言模型。

##### mlx-swift-chat 使用场景

1. **开发人员调试和实验:** 对开发AI应用的开发人员来说，可以在本地快速测试和迭代模型，节省开发时间和成本。
2. **隐私敏感的应用:** 当处理敏感信息时，保证数据处理全程在本地完成，不涉及外部服务器，对于提升用户信任度和满足数据处理法规要求很重要。
3. **离线环境:** 在没有网络连接的环境下，仍然需要使用语言模型功能的场合，比如远程地区或网络不稳定的场合。
4. **教育和研究:** 学生和研究人员可以在没有强大服务器资源的情况下，探索和学习最新的大型语言模型。


##### 使用步骤

1. **下载和安装模型:** 通过应用内的 “Manage Models” (管理模型) 功能，从Hugging Face下载并安装推荐的模型（例如 `Nous-Hermes-2-Mistral-7B-DPO-4bit-MLX`）。
2. **运行模型:** 在模型加载完毕之后，状态栏会显示“Ready”（准备就绪）状态，这时候就可以点击运行按钮进行模型的操作了。


##### 支持的设备和系统要求

* 支持苹果的硅片Mac（M1/M2/M3）设备，要求macOS 14.0或更高版本。
* 也支持搭载任意A系列芯片的iPad和iPhone，要求iOS 17.2或更高版本。


##### 功能和路线图

* 目前支持若干模型，包括Mistral、Llama、Phi和Gemma（Gemma可能存在问题）。
* 未来计划中包括修复iOS构建问题、支持StableLM模型、加入自动添加针对特定模型的聊天模板、支持停止序列以及更多模型的建议。


##### 适用性

mlx-swift-chat 主要是为了开发和测试目的，当前并不适合生产环境的部署。它为开发者提供了一个本地化且方便的方式来运行和测试大型语言模型，同时保证数据的隐私性和安全性。