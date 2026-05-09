---
title: "NSFW Detector NSFW Detector NSFW Detector"
date: "2024-01-01 00:00:00+08:00"
description: NSFW Detector NSFW Detector  NSFW
slug: nsfw-detector-falconsai-image-detection
tags:
- normal
- vit-base-patch16-224-in21k
- cpu
- nsfw
- detection
draft: false
related_tools:
- ollama windows preview - ollama windows预览版用户可以在本地创建和运行大语言模型，并且支持nvidia gpu和现代cpu指令集的硬件加速
- melotts - 支持多语言的高品质文本转语音库，支持中英文混合及实时cpu推理。
- nsfw detector
- ai raspberry pi cat detection
- openai-captcha-detection
---

## NSFW Detector

NSFW Detector 是一个用于检测不适宜内容（NSFW）的工具，基于 [Falconsai/nsfw_image_detection](<https://huggingface.co/Falconsai/nsfw_image_detection>) 模型，使用的是 google/vit-base-patch16-224-in21k。该工具的主要特点包括：

* **准确性高** ：基于人工智能技术，提供更好的检测精度。
* **兼容性强** ：支持CPU-only推理，可以在大多数服务器上运行。
* **性能优化** ：自动利用多个CPU加速推理。
* **简单分类** ：仅有不适宜（nsfw）和正常（normal）两个分类。
* **API服务** ：便于与其他应用集成。
* **Docker部署** ：适合分布式部署。
* **数据安全** ：支持纯本地运行，保护用户数据安全。


##### 使用场景

1. **内容审核系统** ：用于社交媒体、论坛等平台的内容审核，过滤不适宜的图片、视频等。
2. **应用程序开发** ：集成到应用中，帮助开发者在内容上传功能中添加NSFW检测。
3. **教育和培训** ：为教育机构提供用户生成内容的安全性检测，保护学生免受不当内容的影响。
4. **企业内容管理** ：在企业内部信息交流中，监控分享的文件是否包含不当内容。
5. **自动化内容监控** ：用于自动化工具中，监测大量内容的适宜性，提升内容审核的效率。


该工具支持多种文件类型，包括图片、PDF、视频和压缩包中的文件。使用者可以通过Docker快速启动API服务器，或利用内置的Web界面进行检测。同时，VX.link还提供了公共API，便于进行文件检测。