---
title: "Acte"
date: "2024-01-01 00:00:00+08:00"
description: Acte Acte AI GUI 。 AI API ，（GUI）（ Agentic User Interface，AUI），。 Acte
  API ： AP...
slug: acte-gui-api-agentic-user
tags:
- user
- acte
- agentic
- gui
- aui
draft: false
related_tools:
- automouser
- more tools to chatgpt free users
- instantcharacter
- charactergen
- character.ai 创始人回归google
---

## Acte

Acte 是一个用于构建 AI 代理 GUI 类工具的框架。它的目标是改善当前 AI 代理与 API 之间的交互方式，采用图形用户界面（GUI）风格的工具（称为 Agentic User Interface，AUI），以降低认知负担和错误风险。

##### Acte 的使用场景

1. **简化 API 调用** ：通过将多个 API 集成到一个 GUI 界面，Acte 可以显著减少 AI 代理在执行复杂任务时的认知负担。例如，在需要依赖多个 API 的场景中，代理无需记住调用顺序，直接通过 GUI 进行互动。

2. **交互式应用开发** ：Acte 提供了一种简单的方式来构建交互式应用程序，比如聊天机器人、数据分析工具或其他需要用户输入的应用。开发者可以快速创建组件，并与用户进行实时交互。

3. **状态管理** ：Acte 允许开发者使用信号（Signal）来跟踪数据变化和状态更新，这在构建需要动态响应用户输入的应用中尤其有用。


##### 示例用例

* **Hello World 示例** ：开发一个简单的应用，展示基本文字输出。

* **计数器应用** ：构建一个可以增加计数的交互式计数器，演示如何处理用户的按钮点击事件。

* **餐厅助手** ：实现一个具有菜单、购物车和结账功能的完整应用，展示如何处理多种输入和后端逻辑。


##### 技术实现

Acte 包含三种主要 API：`new_session`（启动新会话）、`execute`（执行动作）、`display`（展示当前屏幕）。通过 HTTP 请求或 `SessionManager`，开发者可以轻松管理会话和用户交互。

总之，Acte 是一个功能强大的工具，旨在通过图形界面简化 AI 代理与用户的交互，使得开发者能够更高效地创建复杂的交互式应用。