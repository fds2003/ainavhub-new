---
title: "Code execution for Open WebUI Code execution for Open WebUI Code execution"
date: "2024-01-01 00:00:00+08:00"
description: "Code execution for Open WebUI Code execution for Open WebUI Code execution"
slug: "code-execution-open-webui-gvisor"
draft: false
---

## Code execution for Open WebUI

##### Code execution for Open WebUI 简介

Code execution for Open WebUI 是一个针对 Open WebUI 的代码执行功能，利用 gVisor 实现安全的代码沙箱执行。这一功能允许用户在一个受限的环境中运行任意代码，确保安全性。这一系统同样是 ChatGPT 所使用的沙箱技术。

该功能包括两种类型：**代码执行功能** 和**代码执行工具** ，用户可以根据需求选择安装。

###### 代码执行功能

* **功能描述** ：在 LLM 生成的消息下方显示“运行代码”按钮，点击后可执行相关的代码块，输出结果会在用户界面中显示，并可供 LLM 进行进一步查询。
* **使用方法** ：用户可以请求模型生成代码，然后点击运行按钮进行执行。


###### 代码执行工具

* **功能描述** ：授予 LLM 自行运行代码的能力，类似于字符搜索功能，但模型在执行操作时，用户无法看到输出结果，输出信息仅供 LLM 使用。
* **使用方法** ：在提示模型时，激活运行代码的切换，并输入相关提示。


##### 使用场景

1. **学习与实验** ：用户可以使用此功能进行代码学习和实验，实时查看结果。
2. **代码评估** ：通过 LLM 可以快速评估和调试代码块，帮助开发者提高效率。
3. **自动化任务** ：结合模型生成代码的能力，可以自动化处理一些简单的编程任务。
4. **互动式编程** ：用户可以通过与模型的对话方式逐步构建和执行代码，提升可交互性和趣味性。


这一功能极大丰富了 Open WebUI 的应用场景，使得用户可以更加灵活和高效地进行编程和学习。
