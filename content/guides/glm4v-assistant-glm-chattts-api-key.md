---
title: "glm4v-assistant glm4v-assistant"
date: "2024-01-01 00:00:00+08:00"
description: 'glm4v-assistant  glm4v-assistant '
slug: glm4v-assistant-glm-chattts-api-key
tags:
- glm4v-assistant
- install
- chattts
- apple
- glm-asnt
draft: false
related_tools:
- chattts
- chattts-openvoice
- chattts-nuxt3 webui
- chatttsplus
- apple doc mcp
---

## glm4v-assistant

##### 简介

`glm4v-assistant` 是一个基于GLM（通用语言模型）和ChatTTS（聊天文本转语音）的AI助手项目。它需要一个 `GLM_API_KEY` 来访问GLM API，并且可以处理图像和文本数据，通过配置腾讯云COS存储图像。

##### 使用指南

1. **系统要求** :

* 如果在Apple Silicon设备上运行，该指令安装所需的库:

brew install portaudio
brew install miniconda


2. **创建虚拟环境并安装依赖** :

* 克隆项目代码库和ChatTTS:

git clone https://github.com/gan/glm4v-assistant.git
cd glm4v-assistant
git clone https://github.com/2noise/ChatTTS.git


* 创建并激活虚拟环境:

conda create -n glm-asnt python=3.10
conda activate glm-asnt


* 安装所需的Python包:

conda install -c conda-forge pynini=2.1.5 && pip install WeTextProcessing
pip install -U pip
pip install -r requirements.txt


3. **运行助手** :

python3 glm4-assistant.py


##### 使用场景

`glm4v-assistant` 可以应用于以下场景：

1. **智能客服** : 利用自然语言处理和文本转语音技术，实现智能客服对话，提升用户体验。

2. **教育与学习** : 助力在线教育，生成课堂解说，解决学生的问题。

3. **辅助工具** : 为有语言障碍的用户提供辅助工具，通过语音和文本进行交流。

4. **内容创作** : 自动生成文章、报告，提供撰写灵感和素材。

5. **智能家居** : 作为智能家居的语音助手，控制家电设备，实现语音交互功能。


通过GLM和ChatTTS的结合，这个助手不仅能够处理文字信息，还能将文字转换为语音，满足多种场景需求，实现更自然的人机交互。