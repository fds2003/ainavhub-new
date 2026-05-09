---
title: "python-genai python-genai Python-GenAI"
date: "2024-01-01 00:00:00+08:00"
description: 'python-genai Python-GenAI  Google '
slug: python-genai-google-python-sdk-gemini
tags:
- python-genai
- python
- imagen
- system
- top-k
draft: false
related_tools:
- python-genai
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
---

## python-genai

Python-GenAI 是 Google 提供的 Python SDK，用于访问 Google 的生成式 AI 模型，包括 Gemini 等。它支持两种后端：Google AI 和 Vertex AI。 开发者可以使用它方便地调用各种大型语言模型的功能，例如文本生成、图像生成、嵌入式内容生成等。

**Python-GenAI 的主要使用场景包括：**

* **文本生成:** 创建各种类型的文本内容，例如故事、文章、代码、邮件等。 SDK 提供了丰富的参数配置，例如温度 (temperature)、top-p、top-k 等，以控制生成的文本的创造性和一致性。 它还支持系统指令 (system instruction) 和安全设置 (safety settings)，以引导模型生成符合预期且安全的输出。

* **图像生成 (Imagen):** 生成图像，并支持图像编辑和升级。 (注意：Imagen 的部分功能可能需要申请访问权限。)

* **嵌入式内容生成:** 生成文本的嵌入向量，用于相似度计算等下游任务。

* **函数调用:** 允许将 Python 函数集成到模型中，使模型能够调用外部函数来获取信息或执行操作，从而增强模型的能力，例如调用天气API获取天气信息。

* **模型微调和蒸馏 (Tuning & Distillation):** 通过提供的API，开发者可以对模型进行微调 (supervised fine-tuning) 和蒸馏 (distillation)，以创建定制化的模型，满足特定需求。 这部分功能主要在 Vertex AI 上支持。

* **批量预测 (Batch Prediction):** 对大量的文本数据进行批量处理，例如进行文本分类或情感分析。 这部分功能也主要在 Vertex AI 上支持。

* **文件处理:** 处理PDF等文件内容，并将其整合到模型的上下文中。


总而言之，Python-GenAI 提供了一个简洁易用的接口，使得开发者可以方便地利用 Google 的强大生成式 AI 模型，构建各种 AI 应用。 其灵活的配置和功能扩展性使其适用于各种不同的场景。