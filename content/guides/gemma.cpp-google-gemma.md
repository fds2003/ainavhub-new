---
title: "gemma.cpp"
date: "2024-01-01 00:00:00+08:00"
description: gemma.cpp gemma.cpp C++
slug: gemma.cpp-google-gemma
tags:
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- highway
- const
draft: false
related_tools:
- graph-constrained reasoning
- gemma-3
- gemma 2b - 10m
- gemma 开放模型 - google推出的一系列负责任、安全、性能出色的 ai 开源模型
- local-gemma
---

#### gemma.cpp

gemma.cpp是一个轻量级、独立的C++推理引擎，用于Google的Gemma基金会模型。它提供了Gemma 2B和7B模型的最小实现，专注于简单性和直接性，而不是全面性。gemma.cpp旨在用于实验和研究用途，容易嵌入到其他项目中，并且具有小巧的核心实现（约2K行代码）和一些支持性实用工具（约4K行代码）。该项目使用Google的Highway库，以利用CPU推理的可移植SIMD。对于面向生产的边缘部署，建议使用JAX、Keras、PyTorch和Transformers等Python框架。此外，该项目欢迎社区做出各种大小的贡献，并遵循Google的开源社区准则。gemma.cpp可以作为命令行工具或库依赖项使用，还提供了系统要求、快速入门指南和交互式终端应用等使用方法。