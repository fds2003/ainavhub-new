---
title: "oterm"
date: "2024-01-01 00:00:00+08:00"
description: oterm oterm，Ollama。，，oterm。，/sqlite。Ollama...
slug: oterm-ollama
tags:
- url
- host
- macos
- verify
- 'false'
draft: false
related_tools:
- ghostcrew
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- macos-style react desktop environment
---

## oterm

oterm是一个基于文本的终端客户端，用于与Ollama聊天模型进行交互。其特点在于直观简洁的终端用户界面，用户不需要运行服务器或前端，直接通过终端输入`oterm`命令即可使用。它支持多个持久化的聊天会话，并能够存储上下文嵌入和模板/系统提示的自定义设置在sqlite数据库中。用户可以使用Ollama中的任何模型，或者自己的自定义模型，并允许轻松自定义模型的模板、系统提示和参数。

安装oterm可以通过`brew`命令在MacOS上进行，或者使用`pip`命令在不同的操作系统中安装。

要使用oterm，你需要有Ollama服务器运行。默认情况下，它会尝试连接运行在`http://0.0.0.0:11434/api`的Ollama API。如果你在docker中运行Ollama或者使用不同的主机/端口，可以通过设置`OLLAMA_HOST`环境变量来自定义主机/端口。还可以使用`OLLAMA_URL`来指定完整的http(s) URL。设置`OTERM_VERIFY_SSL`为`False`可以禁用SSL验证。

oterm支持多种键盘快捷键，包括创建新的聊天会话、编辑聊天会话、重命名当前聊天会话、导出当前聊天会话为markdown格式、删除当前聊天会话、切换暗/亮主题、退出oterm、切换到多行输入模式、选择与下一条消息一起发送的图片、导航通过之前的提示历史等。

在创建新的聊天会话时，用户不仅可以选择模型，还可以自定义`template`和传递给模型的`system`指令。另外，可选的`JSON output`复选框将使模型以JSON格式回复。需要注意的是，`oterm`本身不会为你下载模型，你需要使用`ollama`来做这件事。你下载或创建的所有模型都可以在`oterm`中使用。

所有的聊天会话都会被存储在本地的sqlite数据库中。你可以通过设置`OTERM_DATA_DIR`环境变量来自定义数据库存储的目录。

在哪些场合会使用oterm呢？当你需要一个简洁、直观的方式与基于文本的AI聊天模型进行交互时，尤其是在进行测试、模型调试或者进行简单的自定义对话时，oterm是一个非常有用的工具。无需复杂的设置或运行一个完整的前后端应用，只需在你的终端中运行一个命令即可开始与AI模型的对话。