---
title: "Extract2MD"
date: "2024-01-01 00:00:00+08:00"
description: Extract2MD Extract2MD JavaScript
slug: extract2md-javascript-pdf-markdown-llm
tags:
- pdf
- ocr
- tesseract.js
- webllm
- markdown
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## Extract2MD

Extract2MD是一个强大的客户端JavaScript库，用于将PDF转换为Markdown格式，它提供多种提取方法和可选的LLM（大型语言模型）增强功能。该项目的主要功能、核心要点和关键特性可以概括为：

该项目提供5种不同的转换方案以适应不同转换需求：

1. **快速转换** ：适用于PDF具有可选文本的情况，使用PDF.js提取文本并生成基本Markdown。
2. **高精度转换** ：适用于包含图像、扫描文档或复杂布局的PDF，使用Tesseract.js进行OCR识别，生成Markdown。
3. **快速转换 + LLM增强** ：在快速提取的基础上，使用WebLLM进行AI增强，改善格式，提高清晰度。
4. **高精度转换 + LLM增强** ：在OCR识别的基础上，使用WebLLM进行AI增强。
5. **综合转换 + LLM增强** ：结合PDF.js和Tesseract.js的优势，同时使用WebLLM进行AI增强，以获得最佳的Markdown转换效果。


此外，Extract2MD还具有以下关键特点：

* **可配置性** ：允许通过配置文件或JSON文件自定义行为，例如PDF.js、Tesseract.js和WebLLM的设置，以及系统提示词。
* **高级用法** ：支持使用单个组件，例如WebLLMEngine、OutputParser和SystemPrompts，以实现更精细的控制。
* **错误处理与进度跟踪** ：提供错误处理机制和进度回调函数，以便于UI集成。
* **兼容性** ：提供旧版API的迁移指南。
* **TypeScript支持** ：包含完整的类型定义。
* **安装与部署** ：支持通过NPM安装或CDN方式使用，并提供worker文件配置说明。
* **文档** ：提供迁移指南、部署指南、使用示例和TypeScript定义。