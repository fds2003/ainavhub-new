---
title: "Mobilediffusion"
date: "2025-01-01T00:00:00+08:00"
description: "MobileDiffusion 是一种在移动端实现亚秒级文本到图像生成的技术。它是由谷歌的团队提出的，旨在解决目前文本到图像生成模型在移动端应用中速度慢、资源消耗大的问题。MobileDiffusion 通过对扩散模型进行优化，主要包括两方面：一是对模型体积庞大的问题进行优化，主要通过精简核心组件 UNet 和优化操作，包括将计算昂贵的卷积和注意力运算放在了较低的层上，以及针对 Mobile Devices 的操作优化；二是针对扩散模型需要多步采样的问题，MobileDiffusion 探索并实践了像 Progressive Distillation 和 UFOGen 的一步推理技术。通..."
slug: mobilediffusion
category: "AI/ML"
tags: ["AI/ML"]
draft: false
---


MobileDiffusion 是一种在移动端实现亚秒级文本到图像生成的技术。它是由谷歌的团队提出的，旨在解决目前文本到图像生成模型在移动端应用中速度慢、资源消耗大的问题。MobileDiffusion 通过对扩散模型进行优化，主要包括两方面：一是对模型体积庞大的问题进行优化，主要通过精简核心组件 UNet 和优化操作，包括将计算昂贵的卷积和注意力运算放在了较低的层上，以及针对 Mobile Devices 的操作优化；二是针对扩散模型需要多步采样的问题，MobileDiffusion 探索并实践了像 Progressive Distillation 和 UFOGen 的一步推理技术。通...

## 链接

- [官网](https://huggingface.co/papers/2311.16567)
