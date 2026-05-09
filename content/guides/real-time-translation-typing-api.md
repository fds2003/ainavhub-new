---
title: "Real-time-translation-typing Real-time-translation-typing Real-time-translation-"
date: "2024-01-01 00:00:00+08:00"
description: 'Real-time-translation-typing Real-time-translation-typing  Real-time-translation-typing '
slug: real-time-translation-typing-api
tags:
- tab
- esc
- ctrl
- f7
- api
draft: false
related_tools:
- tabby vscode agent
- tablerag
- stable video 3d
- stable diffusion 3 api
- stable-diffusion.cpp
---

## Real-time-translation-typing

## Real-time-translation-typing 简介

Real-time-translation-typing 是一项可以将输入的文本或语音实时翻译成目标语言的技术。此工具提供了多种翻译API支持，包括百度、有道、搜狗和谷歌翻译，用户可以在配置文件中进行设置和切换。因此，它能够在输入文本时即时显示翻译结果，并且支持将语音转化为文字后进行翻译。

## 功能

* 实时文本翻译
* 实时语音转文字并翻译
* 专为《英雄联盟》（LOL）设计的语音转文字输入功能


## 快捷键

* `ALT + Y`: 打开工具
* `ALT + ENTER`: 播放翻译结果
* `ENTER`: 输出翻译文本
* `CTRL + ENTER`: 输出原始文本
* `ESC`: 退出
* `TAB`: 切换不同翻译API
* `CTRL + F7`: 网页版调试


##### 网页版额外快捷键

* `CTRL + C`: 复制结果
* `CTRL + ALT + Y`: 翻译当前剪贴板内容
* `CTRL + V`: 打开状态下，输入剪贴板内容
* `ALT + I`: 启动语音输入
* `XButton1`: 触发LOL语音输入
* `XButton2`: 结束LOL语音输入


## 使用场景

1. **即时翻译需求** ：适合在聊天、写作和阅读时需要即时翻译的情况，尤其是在跨语言交流中。
2. **语音输入翻译** ：通过语音快速录入内容并实时翻译，适用于会议记录、多语言客服等场景。
3. **游戏交流** ：特别适用于《英雄联盟》等需要快速沟通的游戏，方便玩家之间的交流。


## 环境要求

* **系统** ：需要 Windows 10 或安装 **[WebView2 Runtime](<https://msedge.sf.dl.delivery.mp.microsoft.com/filestreamingservice/files/3c9f7ac6-fb0a-4eb7-b1fd-44c57613a3f5/MicrosoftEdgeWebView2RuntimeInstallerX64.exe>)**
* **源码运行** ：需要安装 [AutoHotkey v2H](<https://github.com/thqby/AutoHotkey_H/releases>)


## 配置

通过 `/config/setting.json` 配置文件来选择和设置翻译API。

##### 示例配置

* **有道翻译**

{
"cd" : "youdao",
"youdao": {
"is_open": 1
}
}


* **搜狗翻译**

{
"sougou" : {
"is_open" : 1,
"is_real_time_translate" : 1
}
}


* **谷歌翻译**

{
"google": {
"is_open": 0,
"is_real_time_translate": 0
}
}


* **百度翻译**

{
"baidu": {
"is_open": 0,
"BaiduFanyiAPPID" : "xxxxx",
"BaiduFanyiAPPSEC": "xxxxx",
"is_real_time_translate" : 0
}
}


可以通过设置 `is_baidu_real_time_translate` 为 `0` 来控制是否实时翻译，非实时翻译需要空格键触发。


## 切换API

按 `TAB` 键从配置和打开的API中进行切换。