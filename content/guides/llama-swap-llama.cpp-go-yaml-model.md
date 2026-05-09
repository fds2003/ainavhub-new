---
title: "llama-swap"
date: "2024-01-01 00:00:00+08:00"
description: 'llama-swap llama-swap  llama-swap '
slug: llama-swap-llama.cpp-go-yaml-model
tags:
- yaml
- completions
- profiles
- go
- llama
draft: false
related_tools:
- duckduckgo search mcp server
- google search console mcp server for seos
- google ads mcp
- golf
- google sheets mcp
---

## llama-swap

## llama-swap 总结

llama-swap 是一个轻量级的透明代理服务器，用于为 llama.cpp 的服务器实现自动模型切换。它用 Go 语言编写，易于安装（单个二进制文件，无依赖项）和配置（单个 YAML 文件）。

**核心功能：**

* **动态模型切换:** 根据请求中的 `model` 参数，自动加载和切换相应的语言模型服务。
* **简化模型管理:** 通过简单的 YAML 配置文件，定义模型与相应的服务器启动命令和代理地址。
* **支持 OpenAI API:** 兼容 OpenAI 的 `completions`、`chat/completions`、`embeddings`、`rerank` 和 `audio/speech` 等接口。
* **多模型同时运行:** 利用 `profiles` 功能，可以同时加载多个模型，并控制资源分配。
* **易于部署:** 提供单文件二进制发布包，Docker 和 Podman 支持，方便快速部署和测试。
* **远程日志监控:** 通过 `/log` 接口可以实时查看服务器日志。
* **模型卸载:** 可以通过 TTL 设置或手动卸载模型，释放资源。
* **兼容性:** 支持任何与 OpenAI 兼容的本地服务器（如 llama.cpp, vllm, tabbyAPI 等）。


**工作原理：**

llama-swap 截获 OpenAI API 的请求，提取其中的 `model` 参数，然后根据配置文件，启动或切换到相应的模型服务器。如果已经有模型服务器在运行，但不是请求的模型，llama-swap 会先停止旧的模型服务器，再启动新的模型服务器。

## llama-swap 使用场景

* **资源优化:** 根据实际请求动态加载模型，避免常驻内存占用。
* **A/B 测试:** 快速切换不同的模型，进行效果对比测试。
* **多任务处理:** 根据不同任务的需求，自动选择合适的模型。例如，对于代码生成任务，可以使用专门训练过的代码模型；对于文本生成任务，则使用通用模型。
* **模型更新和维护:** 在不中断服务的情况下，平滑切换到新版本的模型。
* **简化本地大模型部署:** 简化了在本地运行和管理多个大语言模型的过程，尤其对于资源有限的场景。


总而言之，llama-swap 通过提供模型切换的代理层，使本地大语言模型的使用更加灵活和高效。