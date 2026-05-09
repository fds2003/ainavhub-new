---
title: "WebDesignAgent"
date: "2024-01-01 00:00:00+08:00"
description: 'WebDesignAgent WebDesignAgent  WebDesignAgent '
slug: webdesignagent
tags:
- tailwind
- webdesignagent
draft: false
related_tools:
- honghongai - honghongai是一个基于google的gemini大模型、借鉴哄哄模拟器概念的开源免费版本，通过原始提示实现功能，技术栈包括next.js、vercel
  ai sdk、tailwindcss等，支持通过环境变量配置，鼓励社区贡献，并基于mit许可证开源。
- agent
---

## WebDesignAgent

##### WebDesignAgent 简介

WebDesignAgent 是一个自动化的网页设计代理，能够帮助你轻松创建网站。只需一句话描述，它就能生成一系列网站页面。

###### 核心功能

1. **多页面生成** ：能够生成互相关联的网页，提供动态跳转功能，为用户提供无缝的浏览体验。
2. **用户自定义操作** ：用户可以手动添加、删除或修改网页及其内容和关系，完全掌控网站设计。
3. **迭代优化** ：根据用户反馈，对网站代码进行精确调整。
4. **视觉反应** ：利用强大的视觉模型自动优化和改进网页布局。


###### 用户输入支持

1. **文本 → 网站** ：将文本描述转化为功能齐全、美观设计的网站。
2. **图片 → 网站** ：上传图片，自动将其集成到精美的网站中。
3. **视觉提示 → 网站** ：将你的视觉布局转化为网页。
4. **混合设计** ：结合文本、图片和其他视觉提示，创建连贯的网页设计。


##### 使用场景

1. **自动生成** ：通过文本或图片描述，自动生成网站和页面布局。
2. **手动控制** ：用户可以手动修改网站的各个页面，进行细致调整。
3. **快速迭代** ：能够根据用户的反馈快速进行优化，适用于需要频繁更新的项目。
4. **多语言支持** ：支持生成多语言网站，如中文网站。
5. **多种设计风格** ：支持使用如Tailwind等不同的CSS框架，满足不同风格需求。


##### 使用方法

###### 环境和安装


git clone https://github.com/DAMO-NLP-SG/WebDesignAgent.git
cd WebDesignAgent
pip install -r requirements.txt


###### 设置API配置

配置`config.yaml`以使用OpenAI API。

###### 快速开始

提供了终端模式和GUI模式两种操作方法，推荐使用GUI模式以获得更友好的界面和控制。

####### GUI模式


python gui.py


按照步骤配置模型、语言、CSS框架等，输入网站描述，点击“Plan”和“Auto Generate”按钮生成网站。

####### 终端模式 根据描述或图片生成网站：


python webdesign.py --save_file "saves/shopping/" --text "a shopping website"  --refine_times 2


##### 示例

1. **购物网站** ：根据描述生成的购物网站。
2. **游戏公司网站** ：根据图片和描述生成的网站。


##### 计划

1. 生成后端支持代码。
2. 支持更多大型语言模型（LLMs）。


###### 反馈

欢迎通过提出问题来指出项目的不足，帮助我们改进。