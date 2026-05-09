---
title: "Chat with your data Chat with your data Chat with your data"
date: "2024-01-01 00:00:00+08:00"
description: Chat with your data Chat with your data Chat with your data
slug: chat-data-azure-llms-openai
tags:
- data
- chatgpt
- azure
- chat
- llms
draft: false
related_tools:
- stock data insights application
- together open data scientist
- data-speech
- phidata
- improvements to data analysis in chatgpt
---

## Chat with your data

**Chat with your data功能简介**

Chat with your data是一个强大的工具，它将Azure AI搜索和大型语言模型（LLMs）的能力结合起来，创造了一种交流式的搜索体验。这个方案加速器利用Azure OpenAI GPT模型和从你的数据生成的Azure AI搜索索引，整合到一个网页应用程序中，提供了一个自然语言界面，包括语音转文本功能，用于搜索查询。用户可以拖放文件、指向存储，并完成技术设置来转换文档。这里有一个用户可以在自己的订阅中创建的网页应用，提供了安全性和认证。

**何时使用Chat with your data?**

在需要自定义你的场景的情况下，超出了[Azure OpenAI 在你的数据上](<https://learn.microsoft.com/azure/ai-services/openai/concepts/use-your-data>)提供的现成解决方案，你应该使用这个库。

**主要特性:**

* **在你的数据上私有LLM访问** : 在你的私有、非结构化数据上享受ChatGPT的所有好处。
* **使用单一应用访问你的全部数据集** : 减少访问内部公司知识库所需的端点数量。
* **与你的非结构化数据进行自然语言交互** : 使用自然语言快速找到你需要的答案，并询问后续查询以获取补充细节。
* **轻松访问源文档** : 查询时，可以在同一个聊天窗口中查看参考文档，以获得更多上下文。
* **数据上传** : 批量上传文件。
* **易于访问的编排** : 提示和文档配置（提示工程、文档处理和数据检索）。


**支持的文件类型:**

默认情况下，你可以上传以下文件类型：PDF、JPEG、JPG、PNG、TXT、HTML、MD（Markdown）、DOCX。

**目标终端用户:**

寻求用自然语言快速找到所需信息的公司人员（员工、高管）将利用此加速器研究内部非结构化公司数据。

**行业场景:**

样本数据说明了这个加速器可以如何在金融服务行业（FSI）中使用。

**语音转文本功能:**

许多用户习惯于在他们的消费产品中使用语音转文本功能。随着混合工作的增加，语音转文本支持用户以更灵活的方式与他们的数据进行交流，无论他们是在计算机旁，还是在移动设备上。

**Teams扩展:**

通过将Chat with your data体验引入Teams，用户可以留在他们当前的工作流中，而不用切换平台就能获得他们需要的答案。

**部署说明:**

部署此方案加速器需要Azure订阅，并需要创建一个Azure OpenAI资源和一个部署，用于Chat模型和嵌入模型。具体部署指南详见文档。

**定价考虑:**

此方案加速器部署了多个资源。在部署之前计算每个组件的成本。

**测试部署:**

部署成功后，你可以通过访问管理站点上传文档，以及访问Web应用开始在你的数据顶部聊天。

Chat with your data为公司提供了一种用自然语言与内部非结构化数据对话的方式，通过深度整合Azure OpenAI和Azure AI搜索技术，实现了一个功能丰富、易于部署和定制的解决方案，用以支持各种信息检索和数据分析需求。