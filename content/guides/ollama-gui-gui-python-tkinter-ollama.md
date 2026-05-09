---
title: "Ollama-GUI"
date: "2024-01-01 00:00:00+08:00"
description: Ollama-GUI Ollama-GUI  GUI
slug: ollama-gui-gui-python-tkinter-ollama
tags:
- gui.py
- tkint
- python
- github
- gui
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## Ollama-GUI

Ollama-GUI 是一个非常简单的图形用户界面（GUI）工具，使用Python的内建库Tkinter实现，无需额外的依赖。其目的是提供最简化的Ollama可视化接口。

##### 主要功能

1. **单文件项目** ：整个项目仅包含一个文件。
2. **无外部依赖** ：仅使用通常捆绑在一起的Tkinter库。
3. **自动检测Ollama模型列表** ：自动检查并列出可用的Ollama模型。
4. **支持自定义Ollama主机** ：允许用户配置自定义的Ollama服务主机。
5. **多会话支持** ：能够同时进行多个人机对话。
6. **菜单栏和右键菜单** ：提供基本的菜单操作。
7. **随时停止生成** ：允许用户中途停止对话生成。
8. **模型管理** ：可以下载和删除模型。
9. **UI增强** ：提供泡泡对话主题等界面增强。
10. **可编辑的对话历史** ：可以对历史对话进行编辑。


##### 使用前准备

在使用Ollama-GUI之前，需要先配置好Ollama服务。可以参考以下链接：

* [Ollama](<https://ollama.com/>)
* [Ollama Github](<https://github.com/ollama/ollama>)


##### 使用方法

可以选择以下任何一种方式来运行Ollama-GUI：

* 使用源代码运行：

python ollama_gui.py


* 使用pip安装：

pip install ollama-gui
ollama-gui


* 下载二进制文件：
* [Windows下载链接](<https://github.com/chyok/ollama-gui/releases>)
* [Mac (Apple Silicon) 下载链接](<https://github.com/chyok/ollama-gui/releases>)
* [Linux下载链接](<https://github.com/chyok/ollama-gui/releases>)


##### 常见问题

1. **在Mac上点击后应用程序有时无响应** ：这个问题影响macOS Sonoma版本，可以通过更新到Tcl/Tk 8.6.13或更高版本解决。
2. **ImportError: No module named ‘Tkinter’** ：缺少Tk库。可以根据操作系统安装对应的Tk库。


##### 使用场景

Ollama-GUI 适用于那些希望使用简单、无依赖的图形界面来与Ollama模型进行对话的用户。它可以用于教育、研究、开发等需要自然语言处理接口的场景，提供了便捷的模型管理和多会话功能。