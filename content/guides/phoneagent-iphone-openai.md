---
title: "PhoneAgent PhoneAgent"
date: "2024-01-01 00:00:00+08:00"
description: 'PhoneAgent  PhoneAgent '
slug: phoneagent-iphone-openai
tags:
- uber
- xcode
- app
- testloop
- store
draft: false
related_tools:
- github copilot for xcode
- whatsapp mcp server
- computer using agent sample app
- appagentx
- langgraph whatsapp agent
---

## PhoneAgent

好的，让我用中文总结一下 PhoneAgent 以及它的使用场景：

**PhoneAgent 是什么？**

PhoneAgent 是一个 iPhone 智能代理，它使用 OpenAI 的模型来在手机上执行任务，模拟人类用户操作。它能够跨多个应用程序工作，无需越狱。这个项目是在 OpenAI 的黑客马拉松期间构建的。

**PhoneAgent 能做什么？**

你可以用自然语言指令来指示 PhoneAgent 完成任务，例如：

* 拍一张新的自拍照，并用一首关于周末的俳句发送给{联系人姓名}
* 从 App Store 下载{应用程序名称}
* 发送消息给 {联系人姓名}：我的航班是 DL 1715，并呼叫一辆 Uber X 去 SFO
* 打开控制中心并启用手电筒


**如何运行 PhoneAgent？**

1. 克隆代码库
2. 打开 Xcode 项目
3. 打开 PhoneAgentUITests.swift 并运行 testLoop 函数
4. 粘贴你的 OpenAI API 密钥，并输入你的命令（文本或语音）


**PhoneAgent 的主要特点：**

* 模型可以访问应用程序的可访问性树。
* 它可以点击、滑动、滚动、输入和打开应用程序。
* 你可以通过回复完成通知来跟进任务。
* 你可以使用麦克风按钮与代理交谈。
* 有一个可选的“始终在线”模式，即使应用程序在后台，也会监听以唤醒词（默认是“Agent”）开头的提示。例如，你可以说“Agent，打开设置”。
* 应用程序会将你的 OpenAI API 密钥安全地保存在你设备的钥匙串中。


**工作原理：**

* iOS 应用程序是沙盒化的，因此该项目使用 Xcode 的 UI 测试工具来检查和与应用程序以及系统交互。（无需越狱）
* 该代理由 OpenAI 的 gpt-4.1 模型驱动。它仅凭应用程序的可访问性内容就能很好地使用 iPhone。它可以使用以下工具：
* 获取当前应用程序的内容
* 点击 UI 元素
* 在文本字段中输入
* 打开应用程序
* 宿主应用程序通过 TCP 服务器与 UI 测试通信以触发提示。


**局限性：**

* 键盘输入可以改进。
* 在动画进行时捕获视图层次结构会使模型感到困惑。
* 模型不会等待长时间运行的任务完成，因此可能会过早放弃。
* 该模型尚未看到屏幕的图像表示，但可以通过 XCTest API 实现。


**免责声明：**

* 这是一个实验性软件。
* 这是一个个人项目。
* 建议在隔离的环境中运行它。
* 应用程序内容已发送到 OpenAI 的 API。
* 模型有时可能会出错。


**PhoneAgent 的使用场景：**

PhoneAgent 的使用场景包括：

* **自动化手机操作：** 可以让用户通过语音或文本指令，自动完成手机上的各种任务，例如发送消息、设置提醒、控制设备等。
* **辅助功能：** 可以帮助有视觉或运动障碍的用户更方便地使用手机。
* **开发和测试：** 可以用于自动化测试手机应用程序，提高开发效率。
* **自动化脚本：** 可以用于编写自动化脚本，实现更复杂的操作流程。


总而言之，PhoneAgent 是一个很有潜力的项目，它展示了如何使用 AI 模型来模拟人类用户操作手机，从而实现自动化和智能化的手机使用体验。 尽管它还处于实验阶段，但它已经展现出了强大的能力，并且未来可能会在许多领域得到应用。