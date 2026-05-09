---
title: "Chat"
date: "2024-01-01 00:00:00+08:00"
description: Chat  ChatGPT/ChatGLM/LLaMA
slug: chat
tags:
- 'true'
- face
- port
- server
- app
draft: false
related_tools:
- bananaface
- facebook ads library mcp server
- face-to-sticker
- flashface
- hugging face 表情包
---

#### 产品介绍

![Image](/images/screenshots/ChuanhuChatGPT.gif)

#### [川虎 Chat ](<https://github.com/GaiZhenbiao/ChuanhuChatGPT>)

为ChatGPT/ChatGLM/LLaMA等多种LLM提供了一个轻快好用的Web图形界面

#### 使用技巧

* 使用System Prompt可以很有效地设定前提条件。

* 使用Prompt模板功能时，选择Prompt模板集合文件，然后从下拉菜单中选择想要的prompt。

* 如果回答不满意，可以使用重新生成按钮再试一次

* 对于长对话，可以使用优化Tokens按钮减少Tokens占用。

* 输入框支持换行，按shift enter即可。

* 部署到服务器：将程序最后一句改成demo.launch(server_name=“0.0.0.0”, server_port=<你的端口号>)。

* 获取公共链接：将程序最后一句改成demo.launch(share=True)。注意程序必须在运行，才能通过公共链接访问。

* 在Hugging Face上使用：建议在右上角 复制Space 再使用，这样App反应可能会快一点。