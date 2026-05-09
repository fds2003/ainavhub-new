---
title: "mediago mediago MediaGo"
date: "2024-01-01 00:00:00+08:00"
description: 'mediago MediaGo  MediaGo '
slug: mediago-m3u8-pc
tags:
- git
- mediago
- https
- mediago.git
- m3u8
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## mediago

##### MediaGo 介绍

MediaGo 是一个支持 m3u8 视频在线提取和流媒体下载的工具。该软件具备以下主要特点：

* **无需抓包** ：内置浏览器能自动嗅探网页中的视频资源，用户可以从资源列表中选择下载，操作简便。
* **移动播放** ：支持 PC 和移动设备间无缝切换，下载后可在手机上观看视频。
* **批量下载** ：支持同时下载多个视频和直播资源，充分利用高速带宽。


##### 使用场景

1. **视频资源下载** ：对于需要从互联网上下载视频的用户，尤其是流媒体网站的 m3u8 格式视频，MediaGo 提供了便捷的嗅探和下载功能。
2. **直播内容保存** ：用户可以使用 MediaGo 下载直播流，从而保存喜欢的直播内容。
3. **多设备播放** ：下载完视频后，用户可以在不同设备间自由切换，方便使用手机观看。
4. **批量下载** ：对于希望一次性下载多个视频文件的用户，MediaGo 的批量下载功能能够有效提高效率。


##### 快速上手

运行 MediaGo 需要安装 Node.js 和 pnpm。可以按照下面步骤进行：


# 代码下载
git clone https://github.com/caorushizi/mediago.git

# 安装依赖
pnpm i

# 开发环境启动
pnpm dev

# 打包运行
pnpm release


##### 发布版本

最新版本为 `v2.2.0`，更新内容包括支持下载直播流、哔哩哔哩视频下载、优化嗅探流程、下载控制台输出支持及修复了一些 bug。

##### 技术栈

MediaGo 使用了以下技术栈：

* Vite
* Ant Design
* Electron


##### 鸣谢

特别感谢 Nilaoda 提供的 N_m3u8DL-RE。

##### 官方资源

* [快速开始](<https://downloader.caorushizi.cn/guides.html?form=github>)
* [官网](<https://downloader.caorushizi.cn?form=github>)
* [文档](<https://downloader.caorushizi.cn/documents.html?form=github>)
* [讨论区](<https://github.com/caorushizi/mediago/discussions>)