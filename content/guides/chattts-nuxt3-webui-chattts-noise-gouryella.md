---
title: "ChatTTS-Nuxt3 Webui ChatTTS-Nuxt3 Webui ChatTTS-Nuxt3 Webui"
date: "2024-01-01 00:00:00+08:00"
description: 'ChatTTS-Nuxt3 Webui ChatTTS-Nuxt3 Webui  ChatTTS-Nuxt3 Webui '
slug: chattts-nuxt3-webui-chattts-noise-gouryella
tags:
- chattts-webui.git
- insta
- nvidia
- install
- 'yes'
draft: false
related_tools:
- chattts
- instantcharacter
- instantstyle
- instantmesh
- chatgpt instantly
---

## ChatTTS-Nuxt3 Webui

## ChatTTS-Nuxt3 Webui 简介

ChatTTS-Nuxt3 Webui 基于 [ChatTTS](<https://github.com/2noise/ChatTTS/>) 项目开发，由 [@2noise](<https://2noise.com/>) 创建，WebUI 开发则由 [@Gouryella](<https://github.com/Gouryella>) 完成。你可以在 [这里](<https://chattts.201lab.top>) 免费试用该项目。

## 最新更新内容

1. 更新 API，添加了详细的参数调整功能。
2. 更新了 WebUI。
3. 更新了移动端视图。


## 使用步骤

##### 第一步


git clone https://github.com/Gouryella/ChatTTS-webui.git
cd ChatTTS-webui
npm install


##### 第二步


yes | conda create -n chattts python=3.10
conda activate chattts
yes | conda install pytorch==2.2.2 torchvision==0.17.2 torchaudio==2.2.2 pytorch-cuda=12.1 -c pytorch -c nvidia

# 如果你使用的是 Mac OS 或者不支持 CUDA，则使用
pip install torch==2.2.2 torchvision==0.17.2 torchaudio==2.2.2

pip install -r requirements.txt


##### 第三步


cd api
git clone https://huggingface.co/2Noise/ChatTTS.git models
cd ..


##### 第四步


npm run dev
python api/server.py


##### 使用 Docker


wget https://raw.githubusercontent.com/Gouryella/ChatTTS-webui/main/docker/Dockerfile
docker build -t chattts_webui .
docker run -itd --name chattts_webui --gpus all -p 3000:3000 -p 8000:8000 chattts_webui


## 使用场景

ChatTTS-Nuxt3 Webui 适用于以下场景：

1. **语音合成** ：将文本转换为自然流畅的语音，非常适用于语音助手、智能音箱等场景。
2. **语言学习** ：提供高质量的语音输出，帮助语言学习者通过听觉学习，提高听力和口语能力。
3. **内容创作** ：适用于需要生成语音内容的应用，如有声读物、播客等，提高内容创作的效率。
4. **无障碍应用** ：为视障用户提供文本朗读服务，帮助他们获取信息。