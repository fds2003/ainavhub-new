---
title: "monkeSearch"
date: "2024-01-01 00:00:00+08:00"
description: monkeSearch monkeSearch macOS
slug: monkesearch-macos-python-qwen
tags:
- pdf
- const
- gitalk
- spotlight
- clientsecret
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## monkeSearch

monkeSearch是一个专为macOS设计的文件系统自然语言搜索原型系统，其核心功能是允许用户通过日常语言描述（例如“昨天的照片”、“上周的Python脚本”）来查找文件。该项目利用本地运行的大型语言模型（目前为Qwen 0.6B，计划升级至更高效的Gemma 3 270M）进行离线查询解析，确保用户数据隐私且对硬件资源需求低，即使在低配置电脑上也能快速响应。它深度整合了macOS原生的Spotlight功能以实现高效搜索，并具备智能文件类型识别能力（如将“简历”关联到PDF/DOCX文件）和对时间表达式（例如“三周前”、“2023年”）的解析。虽然当前处于原型阶段，主要侧重于macOS平台，但项目致力于发展为开源、安全且跨平台的智能文件搜索解决方案，未来将进一步增强对复杂查询的理解能力。