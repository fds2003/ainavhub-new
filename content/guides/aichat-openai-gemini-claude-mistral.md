---
title: "AIChat"
date: "2024-01-01 00:00:00+08:00"
description: AIChat AIChat10AI，AI。OpenAI、Gemini、Claude、Mistral、LocalAI、Ollama、VertexAI、Ernie、Qianwen，GPT3.5/GPT4...
slug: aichat-openai-gemini-claude-mistral
tags:
- claude
- read-eval-print-loop
- qianwen
- localai
- ernie
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## AIChat

AIChat是一个集成了10多个AI平台的命令行工具，使得用户能够通过命令行或聊天模式交互地使用这些AI服务。这些平台包括OpenAI、Gemini、Claude、Mistral、LocalAI、Ollama、VertexAI、Ernie、Qianwen等，涵盖了包括GPT3.5/GPT4这样的强大模型。它支持命令模式运行以及聊天式REPL（Read-Eval-Print-Loop）模式，使得用户可以在各种场景下灵活使用AI服务。

##### 使用场景

1. **软件开发和编程** : 通过AIChat生成代码、解决编程难题，或者执行自然语言描述的编程任务。
2. **系统管理和自动化任务** : 使用AIChat生成或执行针对特定系统的shell命令，实现系统更新、文件管理等自动化任务。
3. **数据转换和处理** : 实现各种数据格式的转换，如使用AIChat将toml转换成json。
4. **图像识别和处理** : 利用支持视觉的AI模型处理和分析图像。
5. **自然语言处理和翻译** : 实现文本翻译、文本校正等自然语言处理任务。
6. **知识查询和教育** : 使用AIChat查询信息或者作为教育工具，提供关于特定主题的解释和说明。
7. **个性化娱乐和游戏** : 设定特定的角色让AI扮演，进行娱乐对话或游戏。


##### 安装

用户可以通过Rust的Cargo、macOS的Homebrew、Windows的Scoop等多种方式安装AIChat，也可以从GitHub Releases下载适用于macOS、Linux、Windows的二进制文件。

##### 功能特点

* 支持超过10个LLM平台，包含免费和收费模型，本地和云端运行。
* 支持命令模式和聊天式REPL模式，易于交互。
* 支持角色化对话，通过设定具体角色来专门化AI的回答。
* 支持会话（上下文感知的对话），提高连续对话的自然性和准确度。
* 支持多模态模型，可处理图像等多种类型的数据。
* 通过自然语言执行命令，简化复杂操作。
* 集成到shell，提供快捷的命令行交互体验。
* 支持代码块的语法高亮、保存消息/会话、流式/非流式输出等多种便利功能。


##### 配置

首次启动时，AIChat会引导用户完成配置，包括选择AI平台和提供API密钥。用户还可以根据需要调整配置，如设置模型、温度参数、保存消息选项等。

此外，通过环境变量可以设置部分配置，方便在不同环境下调整AIChat的行为。

##### 使用示例

AIChat支持多种应用场景的使用方式，包括直接在REPL模式下交互、执行自然语言描述的命令、生成代码、在聊天模式下附加文件处理等。

AIChat作为一个多AI平台集成工具，适用于需要使用AI服务完成各类任务的用户，特别适合于开发人员、系统管理员、数据科学家等专业用户。通过配置和定制，它也可以适用于教育、娱乐和个人助理等多种轻松的场景。