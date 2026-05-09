---
title: "ffufai"
date: "2024-01-01 00:00:00+08:00"
description: 'ffufai ffufai  ffufai '
slug: ffufai-web-ffuf-openai-gpt
tags:
- url
- claude
- ffuf
- python
- ffufai
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## ffufai

##### ffufai 简介

ffufai 是一个基于 AI 的封装工具，旨在增强流行的 Web 漏洞扫描器 ffuf 的功能。它能够根据目标网址和请求头自动建议适合的文件扩展名，从而优化模糊测试过程。ffufai 支持使用 OpenAI 的 GPT 或 Anthropic 的 Claude AI 模型，帮助用户更高效地发现潜在漏洞。

##### 主要功能

* 与 ffuf 无缝集成。
* 自动建议与模糊测试相关的文件扩展名。
* 支持 OpenAI 和 Anthropic 的 AI 模型。
* 透传所有 ffuf 的参数，确保兼容性。


##### 使用场景

ffufai 的使用场景主要包括：

1. **网站安全测试** ：渗透测试人员可以使用 ffufai 自动化模糊测试，快速发现网站存在的安全目标。
2. **漏洞发现** ：在对特定 URL 进行扫描时，ffufai 能够提供更准确的文件扩展名建议，从而提高漏洞检测的成功率。
3. **调试和优化** ：开发者和安全专家可以通过 ffufai 提高模糊测试的效率，快速迭代和评估网站的安全状态。


##### 安装与使用

安装 ffufai 需要 Python 3.6 及以上版本，用户需预先安装 ffuf，并准备好 OpenAI 或 Anthropic 的 API 密钥。使用方式与 ffuf 类似，用户只需将命令中的 `ffuf` 替换为 `ffufai` 或 `python3 ffufai.py`，它会自动根据 URL 推荐扩展名。

通过这样的方式，ffufai 为安全研究和网站测试提供了一种便捷而强大的工具，帮助用户更有效地进行安全评估。