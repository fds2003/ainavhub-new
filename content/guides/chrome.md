---
title: "Chrome AI Chrome AI"
date: "2024-01-01 00:00:00+08:00"
description: 'Chrome AI  Chrome AI '
slug: chrome
tags:
- flags
- nano
- chromium
- prompt
- prompt-api-for-gemini-nano
draft: false
related_tools:
- nanobrowser
- nanodeepresearch
- nanospeech
- autocoder-nano
- nanochat
---

## Chrome AI

## 简介

Chrome AI 是一个展示项目，它可以在浏览器内本地运行大型语言模型。此项目展示了现代网络技术的强大功能，不需要服务器端处理就能在浏览器环境中直接利用高级AI功能。

## 特点

* **本地执行** ：直接在浏览器中运行大型语言模型。
* **实时处理** ：提供即时的响应和互动。
* **隐私保护** ：在本地处理数据，确保用户隐私和数据安全。


## 使用场景

1. **隐私保护应用** ：由于数据在本地处理，可以用于对用户隐私要求较高的场景，如私人聊天、敏感数据分析等。
2. **无网络环境** ：在无法连接互联网的情况下，依然可以使用强大的语言模型进行文字处理、翻译等功能。
3. **实时应用** ：需要即时响应的应用场景，如实时客服聊天、在线教育、互动游戏等。


## 入门指南

##### 先决条件

* 最新版的 Google Chrome (127+) 或任何兼容的基于 Chromium 的浏览器。


##### 在 Chrome 中设置内置的 Gemini Nano

1. **安装 Chrome Canary** ：确保你使用的是127版本。[下载 Chrome Canary](<https://google.com/chrome/canary/>)。
2. **启用 Prompt API** ：打开 `chrome://flags/#prompt-api-for-gemini-nano`，设置为 “Enabled”。
3. **启用优化指南** ：打开 `chrome://flags/#optimization-guide-on-device-model`，设置为 “Enabled BypassPerfRequirement”，然后重启浏览器。
4. **下载模型** ：前往 `chrome://components/`，找到 “Optimization Guide On Device Model”，确保其已完成下载。如果版本是 “0.0.0.0”，点击 “Check for update”。
5. **故障排除** ：如果未显示 “Optimization Guide On Device Model”，则禁用步骤2和3的设置，重启浏览器后重新启用。
6. **验证设置** ：打开一个网页，按 F12 并检查控制台中的 `window.ai`。


**测试代码** ：


const model = await window.ai.createTextSession();
await model.prompt("Who are you?");


##### 使用方法

克隆仓库：


git clone https://github.com/yourusername/chromeai.git
cd chromeai
pnpm i
pnpm dev


在浏览器中打开 `localhost:3000` 开始使用 AI。

## 参与贡献

我们欢迎贡献！请 fork 该仓库并提交 pull request。对于重大更改，请先打开一个 issue 讨论你想要修改的内容。

## 许可

该项目采用 MIT 许可证 - 有关详细信息，请参阅 [LICENSE](<LICENSE>) 文件。

## 联系方式

如果有任何问题或反馈，请通过 [Twitter](<https://twitter.com/LightningJoyce>) 联系 Lightning Joyce。