---
title: "FlashMLA FlashMLA DeepSeek"
date: "2024-01-01 00:00:00+08:00"
description: FlashMLA DeepSeek  FlashMLA
slug: flashmla-deepseek-nvidia-hopper-gpu
tags:
- gpu
- const
- gitalk
- hopper
- key
draft: false
related_tools:
- remove-background-webgpu-这是一个基于webgpu的在线工具，用于实时去除照片背景。
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- graph-constrained reasoning
- monkeycode
- kwai keye-vl
---

## FlashMLA

DeepSeek 团队开源了 FlashMLA，这是一个专为 NVIDIA Hopper 架构 GPU 优化的高效 MLA（多头潜在注意力）解码内核. FlashMLA 旨在提升大语言模型在 GPU 上的运行速度和效率，尤其是在处理可变长度序列的服务场景中.

FlashMLA 是一个多头潜在注意力（MLA）解码内核，专为处理可变长度序列而设计。它通过低秩分解压缩 KV 缓存和分页内存管理，从而显著降低显存占用并提升计算效率。

FlashMLA 的核心是 MLA（多头潜在注意力机制）。与传统 MHA（多头注意力机制）为每个注意力头分配独立的键（Key）和值（Value）不同，MLA 通过引入低维潜在向量，将所有头共享的键和值压缩到一个低维空间，仅保留关键信息，从而大幅减少内存占用。

FlashMLA 虽然仅适配 Hopper 架构，国产 GPU 兼容性待验证，且可能引发技术竞争，但其开源策略和长序列处理能力，有望推动 AGI 技术的突破。