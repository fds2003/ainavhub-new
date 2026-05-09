---
title: "PDF to Podcast PDF to Podcast PDF to Podcast"
date: "2024-01-01 00:00:00+08:00"
description: PDF to Podcast PDF to Podcast  PDF
slug: pdf-podcast-openai-google-gemini
tags:
- gradio
- pdf
- source
- requirements.txt
- install
draft: false
related_tools:
- gradio webrtc
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
---

## PDF to Podcast

PDF to Podcast 项目是一款工具，可以将任何PDF文档转换成播客节目！通过使用OpenAI的文字转语音模型和Google Gemini，该工具处理PDF内容，生成适合音频播客的自然对话，并将其输出为MP3文件。

## 主要功能

* **PDF转换为播客：** 上传PDF并将其内容转换成播客对话。
* **引人入胜的对话：** 生成的对话既信息丰富又具娱乐性。
* **用户友好的界面：** 使用Gradio提供简洁的交互界面。


## 安装步骤

1. **克隆存储库：**

git clone https://github.com/knowsuchagency/pdf-to-podcast.git
cd pdf-to-podcast


2. **创建并激活虚拟环境：**

python -m venv .venv
source .venv/bin/activate


3. **安装所需的包：**

pip install -r requirements.txt


## 使用方法

1. **设置API密钥：** 确保你有Google Gemini API密钥，可以在[Google AI Studio](<https://aistudio.google.com/app/apikey>)获取。 将其设为环境变量`GEMINI_API_KEY`的值。 还需要一个OpenAI的API密钥，可以通过界面输入或设为环境变量`OPENAI_API_KEY`。

2. **运行应用程序：**

python main.py


该命令会在你的浏览器中启动Gradio界面。

3. **上传PDF：** 上传你想转换成播客的PDF文档。

4. **输入OpenAI API密钥：** 在指定的文本框中提供你的OpenAI API密钥。

5. **生成音频：** 点击按钮开始转换过程，输出将是包含播客对话的MP3文件。


## 使用场景

* **教育培训：** 将PDF教材转换成音频播客，便于学生在通勤时学习。
* **业务报告：** 将公司报告转换为播客，让高管在出差时也能获取信息。
* **文学朗读：** 将电子书或文章转换成播客，为视障人士提供便利或在休闲时聆听文学作品。


## 许可证

该项目使用Apache 2.0许可证。详细信息请参见[LICENSE](<LICENSE>)文件。