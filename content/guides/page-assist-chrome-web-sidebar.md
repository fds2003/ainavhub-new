---
title: "Page Assist Page Assist Page Assist"
date: "2024-01-01 00:00:00+08:00"
description: Page Assist Page Assist Page Assist
slug: page-assist-chrome-web-sidebar
tags:
- edge
- chatgpt
- sidebar
- store
- firefox
draft: false
related_tools:
- knowledge graph
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- knowledge graph builder app
- knowledge graphs for rag
- local knowledge graph
---

## Page Assist

##### Page Assist功能简介及使用指南

**Page Assist** 是一个开源的Chrome扩展插件，它主要提供了一个侧边栏和Web用户界面，让你可以在任何网页上与本地的AI模型互动。下面是详细的总结和使用指南。

##### Page Assist功能特点

1. **侧边栏 (Sidebar)** ：在任何网页上打开一个侧边栏，让你可以与AI模型互动并查看结果。
2. **网页用户界面 (Web UI)** ：提供一个类似ChatGPT的网站界面，可以方便地与AI模型进行交流。
3. **网页内容互动 (Chat With Webpage)** ：可以与网页内容进行对话，问一些关于网页内容的问题。


##### 适用场景

Page Assist适用于以下情境：

* 如果你正在浏览某个网页，遇到不理解的内容，可以即时通过侧边栏或Web UI问AI模型。
* 你想将AI模型嵌入到日常网页浏览中，随时随地调用。
* 需要对网页内容进行快速的分析和问答。


##### 安装方法

###### 支持的浏览器

* Chrome
* Brave
* Edge
* Firefox


###### 自动安装

你可以从以下链接直接安装：

* **[Chrome Web Store](<https://chrome.google.com/webstore/detail/page-assist/jfgfiigpkhlkbnfnbobbkinehhfdhndo>)**
* **[Firefox Add-on](<https://addons.mozilla.org/en-US/firefox/addon/page-assist/>)**


###### 手动安装

1. **前置要求** ：

* 需要Node.js（v18或更高版本）和npm。
* 需要本地AI提供商——Ollama。
2. **克隆仓库并安装依赖** ：

git clone https://github.com/n4ze3m/page-assist.git
cd page-assist
npm install


3. **构建扩展** （默认构建Chrome版本）：

npm run build


或者构建Firefox版本：

npm run build:firefox


4. **加载扩展** ：

* **Chrome** ：打开 `chrome://extensions`，开启开发者模式，点击“加载已解压的扩展程序”，选择`build`目录。
* **Firefox** ：导航到 `about:addons`，点击“加载临时附加组件”，选择`build`目录下的`manifest.json`。


##### 使用方法

###### 侧边栏

安装扩展后，通过右键菜单或者键盘快捷键打开侧边栏。默认快捷键是 `Ctrl+Shift+P`。

###### Web UI

点击扩展图标，打开一个新标签页即可使用Web UI。默认快捷键是 `Ctrl+Shift+L`。你可以在扩展设置里更改这些快捷键。

##### 开发模式

如果你是开发者，可以使用以下命令运行开发模式：


npm run dev


这会启动一个开发服务器并监控源文件的更改，方便你进行调试和测试。

##### 浏览器支持情况

浏览器 | 侧边栏 | 网页内容互动 | Web UI
---|---|---|---
Chrome | ✅ | ✅ | ✅
Brave | ✅ | ✅ | ✅
Firefox | ✅ | ✅ | ✅
Edge | ✅ | ❌ | ✅
Opera GX | ❌ | ❌ | ✅
Arc | ❌ | ❌ | ✅