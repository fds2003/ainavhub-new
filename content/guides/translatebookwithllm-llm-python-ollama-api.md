---
title: "TranslateBookWithLLM TranslateBookWithLLM"
date: "2024-01-01 00:00:00+08:00"
description: TranslateBookWithLLM  TranslateBookWithLLM
slug: translatebookwithllm-llm-python-ollama-api
tags:
- git
- python
- github
- epub
- prompt
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## TranslateBookWithLLM

这个文档介绍了 **TranslateBookWithLLM** ，一个使用本地大型语言模型 (LLM) 翻译书籍的 Python 应用程序。它利用 Ollama API，支持大规模文本翻译，例如整本书的翻译。 该工具提供了两种使用方式：一个**现代化的 Web 界面** ，方便用户使用，以及一个**命令行界面 (CLI)** ，供高级用户进行自动化和脚本编写。

**主要特性:**

* **Web界面:** 提供用户友好的浏览器界面，带有实时进度追踪。
* **EPUB 支持:** 无缝翻译 `.epub` 格式的书籍文件，保持原始结构。
* **CLI 支持:** 命令行界面，方便自动化和脚本编写。


**Windows 安装指南:**

文档详细介绍了在 Windows 上设置 TranslateBookWithLLM 的完整环境的步骤，包括：

1. **准备工作：软件安装**

* **Miniconda:** 用于创建隔离的 Python 环境，管理依赖项。
* **Ollama:** 用于在本地运行大型语言模型。
* **Git:** 用于从 GitHub 下载和更新脚本。
2. **设置 Python 环境:** 使用 Anaconda Prompt 创建并激活 Python 环境。

3. **获取翻译应用程序:** 从 GitHub 克隆代码仓库。

4. **安装依赖项:** 使用 `pip` 安装所需的 Python 包。 可以选择安装 Web 界面的依赖项，或者只安装 CLI 的最小依赖项。

5. **准备 Ollama:**

* 下载一个 LLM 模型，例如 `mistral-small:24b`、`qwen2:7b` 或 `llama3:8b`。
* 启动 Ollama 服务。
6. **使用应用程序:**

* **选项 A：Web 界面 (推荐)**

* 启动服务器 (`python translation_api.py`)
* 在浏览器中打开 `http://localhost:5000`
* 配置并翻译：选择源语言和目标语言、选择 LLM 模型、上传 `.txt` 或 `.epub` 文件、调整高级设置、启动翻译并监控进度、下载结果。
* **选项 B：命令行界面**

* 使用 `python translate.py` 命令，并指定输入文件、输出文件、源语言、目标语言、模型等参数。
* 提供了一些命令示例，例如基本英译法、翻译 EPUB 文件、使用不同模型进行翻译等。


**高级配置:**

* **Web 界面设置:** 允许调整块大小（Chunk Size）、超时时间（Timeout）、上下文窗口（Context Window）和最大尝试次数（Max Attempts）。
* **脚本配置 (translate.py):** 可以修改 `translate.py` 文件中的一些关键设置，例如 API 端点、默认模型、块大小、超时时间、上下文窗口和最大翻译尝试次数。
* **自定义翻译提示词 (Prompts):** 可以通过修改 `generate_translation_request` 函数中的 prompt 来改善翻译质量。


**更好的翻译的技巧:**

* **模型选择:** 推荐的模型包括 `mistral-small:24b`、`qwen2:7b` 和 `llama3:8b`。
* **最佳设置:** 建议根据不同的场景调整块大小和上下文窗口。
* **内容准备:** 清理输入文本，使用纯文本或标准 EPUB 文件，并考虑将大文件拆分成小节。


**问题排查:**

* 文档列出了一些常见问题及其解决方法，例如 Web 界面无法启动、Ollama 连接问题、翻译超时、翻译质量差、模型未找到等。
* 提供了获取帮助的途径，包括查看浏览器控制台、监控终端输出、先用小文本样本测试、验证所有依赖项是否正确安装等。


**架构:**

* **`translate.py`:** 核心翻译引擎，提供 CLI 界面。
* **`translation_api.py`:** Flask Web 服务器，支持 WebSocket。
* **`translation_interface.html`:** 现代 Web 界面，提供实时更新。


总而言之，TranslateBookWithLLM 是一个功能强大的工具，允许用户使用本地 LLM 翻译书籍。 该文档提供了详细的安装和使用指南，以及一些高级配置选项和故障排除技巧，以帮助用户获得最佳的翻译效果。