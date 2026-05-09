---
title: "Foosbar"
date: "2024-01-01 00:00:00+08:00"
description: Foosbar Foosbar Foosbar
slug: foosbar
tags:
- foosbar
- qualisys
- firmware
- uwebsockets
- teensy
draft: false
related_tools:
- foosbar
- openai agents sdk
- claude code sdk for python
- vercel ai sdk 3.0
- honghongai - honghongai是一个基于google的gemini大模型、借鉴哄哄模拟器概念的开源免费版本，通过原始提示实现功能，技术栈包括next.js、vercel
  ai sdk、tailwindcss等，支持通过环境变量配置，鼓励社区贡献，并基于mit许可证开源。
---

## Foosbar

Foosbar是一个完全自动化的桌上足球机器人，它实现了一侧由机器人控制，另一侧由人类玩家对战的游戏模式。这个机器人能够自动完成防守、传球和射门等操作。作为热衷于桌上足球的开发者，为了避免重复练习枯燥乏味的过程，他设计并开发了这款机器人。Foosbar让人类玩家可以体验不同于以往的桌上足球比赛，同时也释放了开发者用于游戏和其他有趣项目的时间。

##### 使用场景

1. **训练辅助** ：Foosbar可以作为桌上足球爱好者的训练工具，提供稳定的对手，帮助玩家提高技术。
2. **比赛娱乐** ：在聚会或娱乐活动中，Foosbar可以提供一个有趣的互动形式，让玩家们与机器人对战，增加活动趣味性。
3. **编程教育** ：Foosbar涵盖从硬件控制到软件开发的多方面知识，可作为编程和机器人学的教育工具。
4. **展示演示** ：在科技展览或工程展示中，Foosbar可以展示先进的机器人和自动化技术，吸引观众注意。


##### 系统组成

Foosbar主要由三个组成部分：

1. **软件（software）** ：负责直接控制电机的代码，包括通过uWebSockets和Qualisys实时SDK进行构建和控制。
2. **固件（firmware）** ：旧版本用于Teensy 4.1电子显示屏显示比分，已不再使用，但代码仍提供参考价值。
3. **前端（frontend）** ：通过远程游戏控制器控制桌上足球机器人，基于3D Web应用构建。


##### 设置步骤

1. **安装必要组件**
* [uWebSockets](<https://github.com/uNetworking/uWebSockets>)
* [qualisys实时SDK](<https://github.com/qualisys/qualisys_cpp_sdk>)
2. **构建和运行软件**
* 进入软件目录并构建Foosbar。
3. **上传固件（如果需要）**
* 使用PlatformIO上传固件至设备。
4. **启动前端**
* 使用npx vite启动3D Webapp。


从以上简述可以看出，Foosbar不仅是一款高科技的互动游戏设备，也是一个多功能的编程与自动化实践项目。