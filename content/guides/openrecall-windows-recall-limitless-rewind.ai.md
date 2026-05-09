---
title: "OpenRecall"
date: "2024-01-01 00:00:00+08:00"
description: OpenRecall OpenRecall  Windows Recall
slug: openrecall-windows-recall-limitless-rewind.ai
tags:
- recall
- macos
- ocr
- openrecall
- limitless
draft: false
related_tools:
- deep recall
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- macos-style react desktop environment
---

## OpenRecall

OpenRecall 是一个完全开源、注重隐私保护的数字记忆管理工具，它是微软的Windows Recall和Limitless的Rewind.ai等专有解决方案的替代品。OpenRecall 通过定期截取快照（即屏幕截图）来捕获你的数字历史，然后对这些截图中的文本和图像进行分析和检索，使你可以通过输入相关关键词快速找到特定信息，还可以手动回顾过去的活动。

##### 使用场景

* **时间旅行** ：无缝回顾和探索过去的数字活动，无论你使用的是Windows、macOS还是Linux系统。
* **本地AI处理** ：利用本地AI处理数据，确保数据的隐私和安全。
* **语义搜索** ：高级的本地OCR（光学字符识别）技术提供强大的语义搜索功能。
* **存储管理** ：数据本地存储，用户拥有完全的管理和安全控制。


##### 关键优势

1. **透明性** ：作为开源项目，代码公开，可供用户审查，确保无后门或隐私侵害功能。
2. **跨平台支持** ：兼容Windows、macOS和Linux，用户可自由选择操作系统。
3. **隐私保护** ：数据本地存储，且未来将支持密码加密，确保数据不需要云端集成。
4. **硬件兼容性** ：设计适用广泛硬件，不像专有解决方案需特定认证设备。


##### 安装和运行

**必要条件** ：

* Python 3.11
* MacOSX/Windows/Linux
* Git


**安装步骤** ：


python3 -m pip install --upgrade --no-cache-dir git+https://github.com/openrecall/openrecall.git


**运行程序** ：


python3 -m openrecall.app


浏览器中访问<http://localhost:8082>来使用OpenRecall。

##### 参数说明

* `--storage-path`：指定截图和数据库的存储路径（默认：OS的用户数据路径）。
* `--primary-monitor-only`：仅记录主显示器（默认：False）。


OpenRecall 旨在为用户提供一个安全、透明且强大的数字记忆管理工具，同时保持数据的隐私和用户的自由选择权。如果你希望参与这个开源项目，可以通过提交拉取请求或在GitHub上打开issue来贡献你的力量。