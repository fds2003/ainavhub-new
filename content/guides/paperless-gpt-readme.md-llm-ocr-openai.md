---
title: "paperless-gpt paperless-gpt"
date: "2024-01-01 00:00:00+08:00"
description: paperless-gpt  README.md
slug: paperless-gpt-readme.md-llm-ocr-openai
tags:
- server
- pdf
- document
- readme.md
- ocr
draft: false
related_tools:
- firecrawl mcp server
- whatsapp mcp server
- android mcp server
- playwright mcp server
- mtranserver
---

## paperless-gpt

好的，根据提供的`README.md`内容，我将以清晰的列表形式总结 paperless-gpt 项目的主要功能、核心要点和关键特性，并避免提及安装指南、详细步骤或非核心技术细节。

**paperless-gpt 项目功能和特性总结：**

* **1\. LLM 增强 OCR：** 使用大型语言模型 (OpenAI 或 Ollama) 实现比传统 OCR 更好的效果，能够将质量较差的扫描件转换为上下文感知的高保真文本。支持 LLM OCR、Google Document AI、Azure Document Intelligence 和 Docling Server 等多种 OCR 服务。

* **2\. 自动生成标题、标签和创建日期：** 通过 AI 自动完成文档命名和分类，用户可轻松审核和修改建议。

* **3\. 支持 Ollama 中的推理模型：** 使用 `qwen3:8b` 等推理模型可以显著提高准确性，平衡隐私和性能。

* **4\. 自动生成通信对象：** 自动识别文档中的通信对象，方便跟踪和组织通信。

* **5\. 生成可搜索和选择的 PDF：** 生成带有透明文本图层的 PDF，该图层精确地位于每个单词上方，使文档既可搜索又可选，同时保留原始外观。

* **6\. 广泛的自定义：** 提供提示模板、标签选项和 PDF 处理方式的配置，以适应不同的需求。

* **7\. 简单的 Docker 部署：** 可以通过几个环境变量轻松与 paperless-ngx 一起部署。

* **8\. 统一 Web UI：** 提供手动审核和自动处理模式，方便用户管理 AI 建议。


总之，paperless-gpt 是一个与 paperless-ngx 集成的工具，利用 AI 技术增强文档管理功能，核心在于利用 LLM 提高 OCR 准确性、自动化文档分类和元数据生成，以及提供灵活的配置选项。