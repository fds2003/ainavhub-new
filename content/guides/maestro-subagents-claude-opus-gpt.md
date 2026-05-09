---
title: "Maestro"
date: "2024-01-01 00:00:00+08:00"
description: Maestro Maestro  Subagents
slug: maestro-subagents-claude-opus-gpt
tags:
- claude
- python
- haiku
- opus
- maestro
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## Maestro

Maestro 是一个框架，用于协调各类子代理（Subagents），如 Claude Opus、GPT 和本地 LLMs（本地语言模型），以实现任务的智能分解和执行工作流程。这个 Python 脚本通过使用 Anthropic API 展示了 AI 辅助的任务分解和执行过程。它采用 Opus 和 Haiku 两个 AI 模型，将目标分解为子任务，执行每个子任务，并将结果精炼成一个连贯的最终输出。

## 使用场景

1. **任务分解与执行** ：Maestro 可以将一个复杂的任务分解为多个子任务，分配给不同的子代理来完成。
2. **多模型协作** ：支持多种 AI 模型（如 Anthropic、Gemini、OpenAI、Cohere 等）之间的流畅协同工作。
3. **本地模型运转** ：支持在本地使用 LMStudio 或 Ollama 平台运行模型，如 Llama 3 等。
4. **代码项目管理** ：可以自动创建代码文件和文件夹，并在代码项目中应用。
5. **Web 界面集成** ：通过集成 Flask 应用，提供用户友好的界面以进行任务输入和结果查看。


## 主要功能

* 使用 Opus 模型将目标分解为可管理的子任务。
* 使用 Haiku 模型执行每个子任务。
* 结合之前子任务的结果，对当前任务提供上下文记忆。
* 使用 Opus 模型精炼子任务结果成最终输出。
* 生成详细的任务分解和执行日志，并保存为 Markdown 文件。
* 提供改进的 Opus 模型提示，以更好地评估任务完成情况。
* 适用于代码项目，自动创建所需的文件和文件夹。


## 安装与运行

1. 安装必要的 Python 包：

pip install -r requirements.txt


2. 设置 API 密钥环境变量：

os.environ["OPENAI_API_KEY"] = "YOUR_KEY"
os.environ["ANTHROPIC_API_KEY"] = "YOUR_KEY"
os.environ["GEMINI_API_KEY"] = "YOUR_KEY"


3. 安装 LiteLLM 和其他依赖：

pip install litellm


4. 运行任意API 示例：

python maestro-anyapi.py


## Flask 应用集成

为了提供更用户友好的界面，Maestro 还集成了一个 Flask 应用。用户可以通过 Web 界面输入任务目标并查看结果。

##### 设置与运行 Flask 应用

1. 确保安装 Flask：

pip install Flask


2. 导航到 `flask_app` 目录，并启动 Flask 服务器：

python app.py


3. 在浏览器中访问 `http://localhost:5000/`。


通过这些功能和使用场景，Maestro 提供了一个强大而灵活的框架，适用于需要智能任务分解和执行的各类应用。