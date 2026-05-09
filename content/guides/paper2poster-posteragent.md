---
title: "Paper2Poster Paper2Poster"
date: "2024-01-01 00:00:00+08:00"
description: Paper2Poster  Paper2Poster
slug: paper2poster-posteragent
tags:
- poster.pptx
- parser
- vlm
- quality
- textual
draft: false
related_tools:
- llmdocparser
- fastvlm
- quality-prompts
- parallelized autoregressive visual generation
- paper2poster
---

## Paper2Poster

这个文档介绍了Paper2Poster，一个**从科学论文自动生成多模态海报** 的工具和框架。它解决了两个核心问题：

1. **如何从论文创建海报？** Paper2Poster提供了一个名为**PosterAgent** 的系统，它是一个自顶向下、视觉循环的多智能体系统，可以将 `paper.pdf` 转换为 `poster.pptx`。这个系统包含几个关键组件：

* **Parser (解析器):** 将论文提炼成结构化的资源库。
* **Planner (规划器):** 将文本和视觉元素对齐到二叉树布局中，保持阅读顺序和空间平衡。
* **Painter-Commentor Loop (绘制者-评论者循环):** 通过执行渲染代码并使用视觉语言模型 (VLM) 的反馈来改进每个面板，以消除溢出并确保对齐。
2. **如何评估海报？** Paper2Poster不仅可以生成海报，还提供了一套全面的评估工具，包括：

* **Visual Quality (视觉质量):** 评估海报的视觉吸引力。
* **Textual Coherence (文本连贯性):** 评估海报文本的逻辑性和流畅性。
* **VLM-as-Judge (VLM 作为评判者):** 使用视觉语言模型来评估海报的质量。
* **PaperQuiz:** 一个新颖的评估方法，它假定好的海报应该以视觉方式传达核心论文内容。


**使用场景：**

* **学术会议和研讨会：** 可以快速生成展示论文成果的海报，节省研究人员大量时间和精力。
* **知识传播：** 可以将复杂的科学论文转化为更易于理解和传播的视觉内容，促进科学知识的普及。
* **教育：** 可以帮助学生更好地理解科学论文，并学习如何有效地展示研究成果。
* **快速生成不同风格的海报：** 由于 PosterAgent 允许灵活地组合 LLM 和 VLM，用户可以尝试不同的设置，生成具有不同风格和侧重点的海报。


**主要特性：**

* **自动化海报生成：** 从PDF论文到PPTX海报的自动化流程。
* **多模态：** 集成文本和视觉元素，生成更具吸引力和信息量的海报。
* **可定制性：** 可以根据用户的需求，选择不同的语言模型和视觉语言模型，定制生成海报的风格和内容。
* **全面的评估体系：** 提供多种评估指标，用于评估生成海报的质量。


**总结：**

Paper2Poster是一个强大的工具，旨在简化科学海报的创建和评估过程。通过使用多智能体系统和视觉语言模型，它可以帮助研究人员和学生更有效地展示和传播他们的研究成果。它不仅提供了自动生成海报的能力，还提供了一套完整的评估体系，以确保生成的海报质量。