---
title: "AI Device Template AI Device Template AI Device Template"
date: "2024-01-01 00:00:00+08:00"
description: 'AI Device Template AI Device Template  AI Device Template '
slug: device-template-ui-humane-pin
tags:
- rabbit
- langsmith
- pin
- whisper
- vision
draft: false
related_tools:
- whiterabbitneo-7b-v1.5a-whiterabbitneo-7b-v1.5a 是一个预训练的大型语言模型，可用于多种自然语言处理任务。
- research rabbit
- langsmith-llm应用开发者平台
- pi
- local whisper
---

## AI Device Template

##### AI Device Template 简介

AI Device Template 是一个由人工智能驱动的语音助手项目，使用多种AI模型和服务来提供智能响应。它支持语音输入、转录、文本转语音、图像处理和功能调用，并具有条件渲染的UI组件。这个项目的灵感来源于最近的AI设备趋势，比如Humane AI Pin和Rabbit R1。

##### 功能特性

* **语音输入和转录** ：使用Groq或OpenAI的Whisper模型
* **文本转语音输出** ：使用OpenAI的TTS模型
* **图像处理** ：使用OpenAI的GPT-4 Vision或Fal.ai的Llava-Next模型
* **功能调用和条件渲染UI组件** ：使用OpenAI的GPT-3.5-Turbo模型
* **可定制的UI设置** ：包括响应时间、设置开关、文本转语音开关、互联网结果开关和照片上传开关
* **（可选）速率限制** ：使用Upstash
* **（可选）跟踪** ：使用Langchain的LangSmith进行功能执行跟踪


##### 使用场景

1. **智能语音助手** ：可以用作家庭或办公环境中的智能语音助手，处理语音命令并提供回复。
2. **图像处理任务** ：利用图像处理功能，可应用于需要自动化图像分析的领域。
3. **文本转语音应用** ：适用于需要将文本内容转换为语音播放的场景，比如盲人辅助工具。
4. **互联网搜索和结果展示** ：可以进行在线搜索并展示结果，适用于信息检索类应用。
5. **开发学习与研究** ：适合开发者学习和研究AI模型在实际应用中的实现和优化。


##### 设置与安装指南

1. **克隆仓库**

git clone https://github.com/developersdigest/ai-devices.git


2. **安装依赖**

npm install
# 或者
bun install


3. **添加API密钥** 提供必要的API密钥，以使用选定的AI模型和服务：

* Groq API Key：用于Llama + Whisper
* OpenAI API Key：用于TTS和Vision + Whisper
* Serper API Key：用于互联网结果

其他可选API密钥：

* Langchain Tracing（功能执行跟踪）
* Upstash Redis（基于IP的速率限制）
* Spotify API
* Fal.AI（Llava图像模型）
4. **启动开发服务器**

npm run dev
# 或者
bun dev


5. **部署** 可通过Vercel轻松部署： [![Deploy with Vercel](https://vercel.com/button)](<https://vercel.com/new/developersdigests-projects/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdevelopersdigest%2Fai-devices&env=GROQ_API_KEY&env=OPENAI_API_KEY&project-name=ai-devices&repository-name=ai-devices>)


##### 配置文件

可编辑 `app/config.tsx` 以调整设置和配置：


export const config = {
inferenceModelProvider: 'groq', // 'groq' 或 'openai'
inferenceModel: 'llama3-8b-8192',
whisperModelProvider: 'openai',
whisperModel: 'whisper-1',
ttsModelProvider: 'openai',
ttsModel: 'tts-1',
ttsvoice: 'alloy',
visionModelProvider: 'google',
visionModel: 'gemini-1.5-flash-latest',
functionCallingModelProvider: 'openai',
functionCallingModel: 'gpt-3.5-turbo',
enableResponseTimes: false,
enableSettingsUIToggle: true,
enableTextToSpeechUIToggle: true,
enableInternetResultsUIToggle: true,
enableUsePhotUIToggle: true,
enabledRabbitMode: true,
enabledLudicrousMode: true,
useAttributionComponent: true,
useRateLimiting: false,
useLangSmith: true,
};


##### 贡献

欢迎任何形式的贡献！如发现问题或有改进建议，请提交问题或拉取请求。

##### 支持开发者

如果你觉得这个项目对你有帮助，可以通过以下方式支持开发者：

* **Patreon** : [patreon.com/DevelopersDigest](<https://www.patreon.com/DevelopersDigest>)
* **Buy Me A Coffee** : [buymeacoffee.com/developersdigest](<https://www.buymeacoffee.com/developersdigest>)
* **Website** : [developersdigest.tech](<https://developersdigest.tech>)
* **Github** : [github.com/developersdigest](<https://github.com/developersdigest>)
* **Twitter** : [twitter.com/dev__digest](<https://twitter.com/dev__digest>)