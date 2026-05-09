---
title: "AnimateDiff-Lightning"
date: "2024-01-01 00:00:00+08:00"
description: AnimateDiff-Lightning AnimateDiff-Lightning AnimateDiff
slug: animatediff-lightning-animatediff-cross-model-diffusion-distilla
tags:
- const
- amp
- animatediff-lightning
- diffusion
- cfg
draft: false
related_tools:
- graph-constrained reasoning
- computer using agent sample app
- structured outputs sample apps
- gemini spatial example
- mlx examples
---

#### AnimateDiff-Lightning

AnimateDiff-Lightning是一个快速的文本到视频生成模型，比原始的AnimateDiff快十倍以上。该模型是通过交叉模型扩散蒸馏技术生成的。除了提供研究论文《AnimateDiff-Lightning: Cross-Model Diffusion Distillation》外，还将该模型作为研究的一部分发布。该模型是从AnimateDiff SD1.5 v2中提炼而来。其中包含了1步、2步、4步和8步的提炼模型的检查点。2步、4步和8步的生成质量非常好。1步模型仅供研究目的使用。AnimateDiff-Lightning在与风格化基础模型一起使用时效果最佳。建议使用Realistic、Anime & Cartoon等风格化基础模型。此外，可以尝试不同的设置，如在2步模型上使用3个推理步骤可以产生很好的结果。某些基础模型与CFG一起使用可以产生更好的结果。推荐使用Motion LoRAs，因为它们产生更强的动作效果。使用强度为0.7~0.8的Motion LoRAs可以避免水印。