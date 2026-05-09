---
title: "Hallucinations Detector Hallucinations Detector"
date: "2024-01-01 00:00:00+08:00"
description: 'Hallucinations Detector  Hallucinations Detector '
slug: hallucinations-detector-grammarly
tags:
- typescript
- claude
- router
- app
- tailwindcss
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## Hallucinations Detector

## 🎯 Hallucinations Detector 介绍

Hallucinations Detector 是一款免费且开源的工具，旨在帮助用户即时验证其内容的准确性。可以将其视为针对事实准确性的Grammarly。该工具分析用户输入的内容，识别潜在的不准确之处，并提供由可靠网页来源支持的修改建议。

##### ✨ 主要特点

* 及时检查由大语言模型（LLM）生成的内容的事实准确性
* 基于来源的验证
* 对识别的不准确之处提供详细解释
* 提出基于建议的修改


##### 🛠️ 使用方式

1. **声明提取** ：输入内容后，工具使用LLM（如Claude 3.5 Sonnet）将文本拆分成单独的声明。
2. **来源验证** ：通过Exa的搜索工具检查每条声明，以查找支持或反驳它的可靠来源。
3. **准确性分析** ：该LLM分析声明及其对应来源，以确定准确性。
4. **结果展示** ：最终以简单明了的方式展示结果，指出错误并提供修正建议。


##### 💻 技术栈

* **搜索引擎** ：Exa.ai - 旨在AI应用的先进网页搜索API
* **前端** ：使用Next.js的App Router、TailwindCSS、TypeScript
* **LLM** ：Anthropic的Claude 3.5 Sonnet（也可使用其他LLM，如gpt、gemini、llama等）
* **AI集成** ：Vercel AI SDK
* **托管** ：使用Vercel进行托管和分析


##### 🚀 使用场景

Hallucinations Detector 适用于多种场景，例如：

* **内容创作者** ：帮助作家和博主确保其信息准确，提升内容的可信度。
* **学术研究** ：对研究人员提供的文献和数据的验证，确保研究结果的可靠性。
* **新闻报道** ：支持记者在发布新闻前核实信息来源，从而提高报道的专业性和客观性。
* **教育领域** ：帮助学生和教师检查论文和研究项目中的信息准确性，促进学习和知识的正确传递。


通过使用Hallucinations Detector，用户不仅可以优化其内容的质量，还可以增强公众对其信息的信任度。