---
title: "AdvancedLivePortrait"
date: "2024-01-01 00:00:00+08:00"
description: 'AdvancedLivePortrait AdvancedLivePortrait  AdvancedLivePortrait '
slug: advancedliveportrait-comfyui
tags:
- drive
- liveportait
- portable
- install.bat
- nodes
draft: false
related_tools:
- claude code spec-driven development
- styledrive
- diffusiondrive
- magicdrivedit
- x-portrait nodes
---

## AdvancedLivePortrait

AdvancedLivePortrait 是一个用于视频处理的工具，主要用于在视频中添加面部表情。以下是关于 AdvancedLivePortrait 的简要介绍及其使用场景：

##### 介绍

AdvancedLivePortrait 是一个基于 ComfyUI 的扩展工具，可以将静态图像转换为具有动态面部表情的视频。通过使用预设的工作流程和样本数据，用户能够快速上手，并生成想要的效果。

##### 安装步骤

1. 下载并安装：运行 `install.bat` 文件。
2. 下载所需数据：从提供的 Google Drive 链接中下载 `liveportait` 文件夹。
3. 放置文件：将 `liveportait` 文件夹放置在 `\ComfyUI_windows_portable\ComfyUI\models\` 路径下。
4. 使用示例：通过 `\ComfyUI_windows_portable\ComfyUI\custom_nodes\ComfyUI-AdvancedLivePortrait\sample\` 文件夹中的工作流程和示例数据进行测试。


##### 使用场景

1. **视频制作** ：广告片、宣传片等需要添加动态面部表情的视频，可以通过该工具轻松实现。
2. **娱乐应用** ：制作动态头像或表情包，提升社交媒体互动体验。
3. **教育培训** ：在需要生动展示面部表情的教育视频或培训材料中使用，提高教学效果。
4. **虚拟角色** ：游戏或虚拟现实中的角色需要动态面部表情，以增加角色的真实感。


##### 主要功能

* **添加表情** ：通过连接驱动视频和源图像，给视频中的人物添加面部表情。
* **保存和加载表情数据** ：使用 `Load Exp Data` 和 `Save Exp Data` 节点，方便地保存和加载面部表情数据。


##### 注意事项

* 确保正确运行安装脚本并将数据放置在正确的路径下。
* 不要使用 insightface，仅需要 `liveportait` 文件夹中的内容。


通过这些步骤和场景介绍，希望你能更好地理解和使用 AdvancedLivePortrait，从而制作出令人满意的动态面部表情视频。