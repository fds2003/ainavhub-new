---
title: "elia elia Elia"
date: "2024-01-01 00:00:00+08:00"
description: elia Elia Elia ，（LLMs）。，、。Elia SQLite ，， ChatGPT、Claude、Llama 3、Phi 3、Mis...
slug: elia-llms-sqlite-chatgpt-claud
tags:
- elia
- install
- phi
- gemma
- chatgpt
draft: false
related_tools:
- graphiti
- phi-3-mini
- morphic
- phidata
- gemma-3
---

## elia

##### Elia简介和使用场景

**Elia** 是一种在终端中运行的工具，用于与大型语言模型（LLMs）进行交互。它强调键盘操作，旨在提供快捷、高效且有趣的用户体验。Elia 会将你的对话存储在本地的 SQLite 数据库中，支持与多个模型的交互，包括 ChatGPT、Claude、Llama 3、Phi 3、Mistral 和 Gemma 等。

###### 特点：

1. **键盘为中心** ：专为键盘操作设计，提升操作效率。
2. **多模型支持** ：支持与多个厂商的模型（如 ChatGPT、Claude）以及本地运行的模型进行交互。
3. **本地存储** ：对话保存在本地的 SQLite 数据库中，保证数据隐私。


###### 安装步骤：

使用 pipx 安装：


pipx install elia-chat


根据所使用的模型，可能需要设置相应的环境变量（如 `OPENAI_API_KEY`、`ANTHROPIC_API_KEY`、`GEMINI_API_KEY` 等）。

###### 快速启动：

在命令行启动 Elia：


elia


以内联模式启动新对话：


elia -i "What is the Zen of Python?"


以全屏模式启动新对话：


elia "Tell me a cool fact about lizards!"


通过命令行指定模型：


elia -m gpt-4o


组合使用选项，例如内联模式下与 Gemini 1.5 Flash 交互（需要设置 `GEMINI_API_KEY` 环境变量）：


elia -i -m gemini/gemini-1.5-flash-latest "How do I call Rust code from Python?"


###### 本地模型运行：

1. 安装 `ollama`。
2. 拉取所需的模型，如 `ollama pull llama3`。
3. 运行本地 `ollama` 服务器：`ollama serve`。
4. 在配置文件中添加模型。


###### 配置文件：

配置文件位于选项窗口底部（按 `ctrl+o` 查看）。以下是一个配置文件示例及可用选项：


# 默认启动的模型
default_model = "gpt-4o"
# 启动时的系统提示
system_prompt = "You are a helpful assistant who talks like a pirate."
# 修改消息中代码的语法高亮主题，默认是 "monokai"
message_code_theme = "dracula"

# 添加本地 llama3 支持的示例
[[models]]
name = "ollama/llama3"

# 运行在本地服务器上的模型示例
[[models]]
name = "openai/some-model"
api_base = "http://localhost:8080/v1"
api_key = "api-key-if-required"

# 使用 Groq 模型的示例
[[models]]
name = "groq/llama2-70b-4096"
display_name = "Llama 2 70B"
provider = "Groq"
temperature = 1.0
max_retries = 0

# 同一模型的多个实例示例
[[models]]
id = "work-gpt-3.5-turbo"
name = "gpt-3.5-turbo"
display_name = "GPT 3.5 Turbo (Work)"

[[models]]
id = "personal-gpt-3.5-turbo"
name = "gpt-3.5-turbo"
display_name = "GPT 3.5 Turbo (Personal)"


###### 更改键绑定：

目前无法更改键绑定。终端支持的键绑定也有限，例如无法直接使用 `Cmd`+`Enter` 发送消息。可以在终端模拟器级别进行映射，如在 iTerm 中将 `Cmd`+`Enter` 映射为 `\n`。

###### 从 ChatGPT 导入对话：

使用 ChatGPT UI 导出对话到 JSON 文件，然后使用 `import` 命令导入：


elia import 'path/to/conversations.json'


###### 重置数据库：


elia reset


###### 卸载 Elia：


pipx uninstall elia-chat


##### 使用场景：

1. **开发和调试** ：快速在终端中测试和比较不同的语言模型。
2. **教育和学习** ：学生和研究人员可以通过与不同的模型进行互动来学习自然语言处理。
3. **数据隐私** ：敏感对话保存在本地，保证数据隐私。
4. **高效办公** ：提供高效的命令行工具，方便日常办公和研究。