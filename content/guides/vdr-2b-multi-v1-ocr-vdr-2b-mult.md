---
title: "vdr-2b-multi-v1"
date: "2024-01-01 00:00:00+08:00"
description: vdr-2b-multi-v1 vdr-2b-multi-v1 OCR
slug: vdr-2b-multi-v1-ocr-vdr-2b-mult
tags:
- mrlight
- dse-qwen2-2b-mrl-v1
- vdr-2b-mult
- const
- gitalk
draft: false
related_tools:
- qwen2
- vdr-2b-multi-v1
- graph-constrained reasoning
- pdf-ocr-obsidian
- uniocr
---

## vdr-2b-multi-v1

vdr-2b-multi-v1是一种多语言嵌入模型，专为视觉文档检索而设计，支持多种语言和领域。该模型能够将文档页面截图编码为单一密集向量表示，从而可以在无需OCR或数据提取管道的情况下，搜索和查询丰富的多语言文档。vdr-2b-multi-v1是基于MrLight/dse-qwen2-2b-mrl-v1训练的，使用了自制的多语言查询-图像对大数据集，包含50万个高质量样本，是目前最大的开源多语言合成数据集。

该模型支持意大利语、西班牙语、英语、法语和德语，具有更快的推断速度和更低的显存使用，并在跨语言检索上表现优异。通过Matryoshka表示学习（MRL），模型可以在不降低嵌入质量的情况下减少向量尺寸，从而加快检索速度并降低存储成本。

总体而言，vdr-2b-multi-v1在多语言和跨语言场景中显著提高了检索性能，并为语言不通的用户提供了便利，特别是在复杂的多语言环境如欧洲。未来的工作将集中在模型在特定领域的适应性上，为开拓新的应用场景提供可能。