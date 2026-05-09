---
title: "hertz-dev hertz-dev Hertz-dev"
date: "2024-01-01 00:00:00+08:00"
description: hertz-dev Hertz-dev inference.ipynb
slug: hertz-dev-inference.ipynb-inference-client.
tags:
- id
- clientsecret
- clientid
- ba3af7dcb9cbfcf08
- inference.ipynb
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## hertz-dev

Hertz-dev是首个以对话音频为基础的模型，专注于通过声音进行交互和生成对话音频。在使用时，可以通过`inference.ipynb`脚本生成一声道或双声道的音频响应。对于需要实时交流的情况，用户可以通过`inference_client.py`和`inference_server.py`与模型进行实时对话，支持通过麦克风进行交互。所有这三个脚本会自动下载所需模型到`./ckpt`目录。

使用场景包括但不限于：

1. 语音助手或智能客服系统，以提供自然的语音交互体验。
2. 教育领域中的语言学习，帮助学生通过对话练习口语。
3. 娱乐行业中的音频内容生成，例如有声故事或互动游戏。
4. 研究和开发新型语音交互技术。