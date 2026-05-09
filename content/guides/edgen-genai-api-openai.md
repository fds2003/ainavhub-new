---
title: "Edgen"
date: "2024-01-01 00:00:00+08:00"
description: Edgen Edgen、（GenAI）API，OpenAI API。Edgen，，，，。 Edgen，...
slug: edgen-genai-api-openai
tags:
- macos
- speech-to-text
- llms
- whisper
- api
draft: false
related_tools:
- local voice agents on macos with pipecat
- macos-use
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- macos-style react desktop environment
- whisper-speech-to-text-api
---

## Edgen

Edgen是一个本地化的、针对个体设备的通用人工智能（GenAI）API服务器，它可以作为OpenAI API的直接替代品。Edgen的主要特点是它允许在用户的设备上本地运行，确保了数据隐私的同时，无需外部云计算资源，减少了对网络的依赖，同时提高了可扩展性和可靠性。

使用Edgen，开发者可以在多个平台（包括Windows、Linux和macOS）上利用各种AI模型（如文本生成、语音识别等）为他们的应用提供强大的AI功能。Edgen支持多种AI模型和端点，比如LLMs(大型语言模型)、Speech-to-text（Whisper）等，并且具有模型和运行时的模块化和优化特性。

##### 在什么样的情况下会使用Edgen？

1. **数据隐私：** 当应用需要确保用户数据的隐私性时，通过在本地设备上进行AI推理计算，Edgen避免了数据传输到外部服务器，降低了数据泄露的风险。

2. **无需依赖网络：** 对于那些不稳定或无网络接入环境下的应用，Edgen提供了一个可靠的解决方案，因为所有的处理都是在本地完成的。

3. **成本效益：** 对于小型企业或初创公司，可能没有足够的资源在云服务器上运行复杂的AI模型。Edgen可以在用户自己的设备上运行，无需额外的云服务支出。

4. **适用于多平台：** 对于需要在Windows、Linux和macOS平台上部署应用程序的开发者，Edgen提供了跨平台支持。

5. **个性化和灵活性：** 开发者可以根据自己的需求添加新的模型，Edgen支持模型和运行时的灵活配置和优化，提供了广泛的自定义选项。

6. **性能优化：** Edgen为不同的硬件和平台优化AI推理计算，无需用户深入了解背后的复杂技术细节。