---
title: "funaudiollm-app"
date: "2024-01-01 00:00:00+08:00"
description: funaudiollm-app funaudiollm-app funaudiollm-app
slug: funaudiollm-app-voice-chat
tags:
- url
- git
- funaudiollm-app
- chat
- voice
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## funaudiollm-app

##### funaudiollm-app项目简介

**funaudiollm-app** 项目是一个结合了高级音频理解和语音生成模型的应用程序集合，旨在提升您的音频体验。该项目包含两个主要应用：

1. **语音聊天 (Voice Chat)** ：这款应用提供互动和自然的聊天体验，使得在各种环境下更容易采用复杂的AI驱动对话。

2. **语音翻译 (Voice Translation)** ：这款实时语音翻译工具可以打破语言障碍，实时翻译口语，使不同语言的使用者之间的沟通更为流畅有效。


##### 使用场景

1. **语音聊天** ：

* **客户服务** ：利用AI驱动的自然对话提升客户服务体验。
* **教育辅导** ：提供互动式学习平台，帮助学生与虚拟导师交流。
* **个人助理** ：作为虚拟助手帮助用户完成日常任务，如设置提醒、查询信息等。
2. **语音翻译** ：

* **跨国业务交流** ：帮助在不同语言背景下的团队进行无障碍沟通。
* **旅行翻译** ：为旅行者提供实时翻译服务，克服语言障碍。
* **医疗援助** ：帮助医生和非本地语言患者进行交流，提供更好的医疗服务。


##### 安装步骤

1. **克隆和安装仓库**


git clone --recursive URL
# 如果由于网络问题克隆子模块失败，重复运行以下命令直到成功
cd funaudiollm-app
git submodule update --init --recursive


2. **准备环境** （根据cosyvoice和sensevoice仓库配置环境）并执行以下命令：


pip install -r requirements.txt


##### 基本用法

**准备工作** ：

* 获取[dashscope](<https://dashscope.aliyun.com/>) API令牌。
* 获取[pem文件](<https://blog.csdn.net/liuchenbaidu/article/details/136722001>)。


**语音聊天启动命令** ：


cd voice_chat
sudo CUDA_VISIBLE_DEVICES="0" DS_API_TOKEN="YOUR-DS-API-TOKEN" python app.py >> ./log.txt


访问：https://YOUR-IP-ADDRESS:60001/

**语音翻译启动命令** ：


cd voice_translation
sudo CUDA_VISIBLE_DEVICES="0" DS_API_TOKEN="YOUR-DS-API-TOKEN" python app.py >> ./log.txt


访问：https://YOUR-IP-ADDRESS:60002/

通过这些步骤和设置，您可以充分利用**funaudiollm-app** 带来的先进音频理解和语音生成功能，提升在各种应用场景下的音频体验。