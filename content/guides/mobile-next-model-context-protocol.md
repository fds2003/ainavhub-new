---
title: "Mobile Next Mobile Next"
date: "2024-01-01 00:00:00+08:00"
description: 'Mobile Next  Mobile Next '
slug: mobile-next-model-context-protocol
tags:
- next
- snapshot
- model
- agent
- ios
draft: false
related_tools:
- mobile next
- openai webrtc shadcn next15 starter
- llava-next
- honghongai - honghongai是一个基于google的gemini大模型、借鉴哄哄模拟器概念的开源免费版本，通过原始提示实现功能，技术栈包括next.js、vercel
  ai sdk、tailwindcss等，支持通过环境变量配置，鼓励社区贡献，并基于mit许可证开源。
- next.js ai chatbot x supabase
---

## Mobile Next

好的，下面是对 Mobile Next 的总结性介绍，以及它的使用场景：

**Mobile Next 是什么？**

Mobile Next 是一款基于 Model Context Protocol (MCP) 的服务器，旨在简化和扩展移动自动化测试和交互。它提供了一个平台无关的接口，使 Agent 和 LLM (大型语言模型) 能够与原生 iOS 和 Android 应用进行交互，而无需深入了解特定的操作系统细节。Mobile Next 主要通过两种方式实现交互：一是利用结构化的可访问性快照 (Accessibility Snapshot)，二是基于屏幕截图的坐标点击。

**Mobile Next 的主要特点：**

* **快速轻量级：** 优先使用原生可访问性树进行交互，在没有可访问性标签时才使用屏幕截图坐标。
* **对 LLM 友好：** 在使用 Accessibility Snapshot 时，无需计算机视觉模型。
* **视觉感知：** 分析屏幕上的实际渲染内容，以确定下一步操作。
* **确定性工具应用：** 尽可能依赖结构化数据，减少纯粹基于屏幕截图方法的不确定性。
* **结构化数据提取：** 能够从屏幕上可见的任何内容中提取结构化数据。


**Mobile Next 的使用场景：**

Mobile Next 适用于多种移动自动化场景，包括：

* **原生应用自动化：** 适用于 iOS 和 Android 平台，用于自动化测试或数据录入等任务。
* **脚本化流程和表单交互：** 无需手动控制模拟器/仿真器或物理设备，即可实现自动化流程。
* **LLM 驱动的多步骤用户旅程自动化：** 允许 LLM 驱动复杂的用户交互流程。
* **基于代理框架的通用移动应用交互：** 作为 Agent 框架的工具，实现与移动应用的交互。
* **Agent 之间的通信：** 用于移动自动化用例中的 Agent 间通信和数据提取。
* **移动应用自动化数据提取:** 从任何可见的手机应用界面中提取数据。


**总结:**

Mobile Next 为移动自动化提供了一个强大的工具，它降低了自动化开发的复杂性，提高了效率，并使 LLM 和 Agent 能够轻松地与移动应用进行交互。这使得移动自动化能够应用于更广泛的场景，并可以实现更智能和自主的移动应用交互。