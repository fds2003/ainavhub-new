---
title: "UFO"
date: "2024-01-01 00:00:00+08:00"
description: UFO UFO User Interface, UI
slug: ufo-user-interface-ui-windows
tags:
- user
- windows
- gpt-vision
- appagent
- os
draft: false
related_tools:
- automouser
- more tools to chatgpt free users
- windows-use
- claude code for windows
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
---

## UFO

UFO，即用户界面（User Interface, UI）专注代理，是一个为Windows操作系统（OS）上的用户请求提供服务的双代理框架。简而言之，UFO能够理解用户的自然语言请求，并将其转化为在一个或多个应用程序中的具体操作，以完成这些请求。

##### UFO的工作机制：

UFO分为两个主要的代理：

1. **AppAgent（应用代理）** 🤖：选择用于完成用户请求的应用程序。如果一个请求涉及多个应用程序，而任务在前一个应用程序中只完成了一部分，它还可以切换到另一个应用程序。
2. **ActAgent（行动代理）** 👾：在选定的应用程序中迭代执行动作，直到在某个特定应用中成功完成任务为止。
3. **Control Interaction（控制交互）** 🎮：负责将AppAgent和ActAgent的动作翻译为对应用程序及其UI控件的操作。它要求目标控件与Windows的UI自动化API兼容。


这两个代理利用多模态的GPT-Vision能力，理解应用程序的UI，从而满足用户的请求。

##### UFO的使用场景：

UFO可以在多种情况下使用，具体包括但不限于：

* **在PowerPoint中删除所有备注** ：当你需要快速清除演示文稿中的所有备注，但不想手动一个个删除时，UFO可以帮你自动完成此项任务。
* **使用多个源的文本编写电子邮件** ：如果你需要从不同的Word文档中提取文本，描述一个图片，然后将这些内容组合为一封电子邮件并发送，UFO能够帮你跨应用进行操作，从而提高效率。


总的来说，只要是涉及Windows OS上的应用程序操作，特别是需要在不同应用间切换或需要理解复杂UI的场景，UFO都可以大显身手，帮助用户以更直接、自然的方式完成任务。

##### 如何开始使用UFO：

1. **安装** ：首先，确保你的环境中有Python 3.10或更高版本，并在Windows 10或更高版本的系统上。通过克隆GitHub仓库并安装必要的依赖来安装UFO。
2. **配置LLMs** ：在运行UFO之前，需要对大型语言模型（LLMs）进行配置，如OpenAI或Azure OpenAI。
3. **启动UFO** ：通过在命令行中执行相应的命令来启动UFO，并通过CLI与它交互。
4. **执行日志** ：UFO会在`./ufo/logs/`下生成执行期间的截图和请求和响应日志，方便用户进行调试或分析。


UFO的推出，标志着在自动执行Windows OS应用程序操作方面，用户和开发者都将享有前所未有的便利性和扩展性。它不仅是Windows平台上的首个此类代理框架，而且通过交互模式和动作保障等特性，进一步提高了任务完成的安全性和灵活性。