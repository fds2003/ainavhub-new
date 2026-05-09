---
title: "ComfyUI-KLingAI-API"
date: "2024-01-01 00:00:00+08:00"
description: 'ComfyUI-KLingAI-API ComfyUI-KLingAI-API  ComfyUI-KLingAI-API '
slug: comfyui-klingai-api-comfyui-kling-api
tags:
- comfyui-klingai-api
- git
- macos
- nodes
- comfyui
draft: false
related_tools:
- pi
- comfyui-klingai-api
- vibegit
- gitfriend
- gitagent
---

## ComfyUI-KLingAI-API

**ComfyUI-KLingAI-API 概述**

ComfyUI-KLingAI-API 是一个为 ComfyUI 定制的节点，允许用户直接在 ComfyUI 中使用 KLing AI API。KLing AI API 基于 KLing AI 平台，提供多种功能，适合需要生成图像、视频和虚拟试穿效果的用户。有关更多信息，请查看 [KLing AI API 文档](<https://docs.qingque.cn/d/home/eZQArO-0RpjbQMpf5DPa-w8Rp?identityId=1oEER8VjdS8#section=h.wxrj3t7cbpg3>)。

**使用要求**

在使用此节点之前，用户需要获取 [KLing AI API 密钥](<https://docs.qingque.cn/d/home/eZQA6m4cRjTB1BBiE5eJ4lyvL?identityId=1oEER8VjdS8>)。

**安装步骤**

1. 导航到 `ComfyUI/custom_nodes` 目录。
2. 克隆该仓库：`git clone https://github.com/`。
3. 安装依赖项（Windows 和 Linux/MacOS 的命令有所不同）。
4. 用户可以将密钥添加到 `config.ini` 文件中，保持节点中的密钥字段为空，以保护其安全。
5. 启动 ComfyUI，即可享受 KLing AI API 节点的功能！


**主要功能节点**

1. **客户端节点** ：用于创建 KLing AI 客户端。
2. **图像生成节点** ：根据文本提示生成图像。
3. **文本转视频节点** ：根据文本提示生成视频。
4. **图像转视频节点** ：根据图像生成视频。
5. **虚拟试穿节点** ：用于展示虚拟试穿效果。


**使用场景**

ComfyUI-KLingAI-API 可广泛应用于以下场景：

* **创意设计** ：用户可以根据描述生成独特的图像，为艺术创作提供灵感。
* **视频制作** ：通过文本或图像生成视频，适用于短视频创作、广告制作等领域。
* **虚拟试穿** ：时尚行业的用户可以用此工具展示服装或配饰的试穿效果，提高客户的购买体验。


想要了解价格信息的用户可以访问 [KLing AI 定价页面](<https://klingai.com/dev-center>)。