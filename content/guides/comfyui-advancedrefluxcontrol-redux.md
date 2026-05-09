---
title: "ComfyUI"
date: "2024-01-01 00:00:00+08:00"
description: ComfyUI AdvancedRefluxControl ComfyUI
slug: comfyui-advancedrefluxcontrol-redux
tags:
- comfyui
- v2.0
- redux
- advancedrefluxcontrol
draft: false
related_tools:
- comfyui supir
- comfyui-flowty-triposr
- comfyui-hidiffusion
- comfyui_object_migration
- comfyui_advancedrefluxcontrol
---

## ComfyUI_AdvancedRefluxControl

##### ComfyUI_AdvancedRefluxControl 简介

ComfyUI_AdvancedRefluxControl 是一款为 Redux 模型定制的节点，旨在解决 Redux 模型在生成图像时对提示词的忽略问题。Redux 模型的特点是生成多样化图像，但对于使用提示词和图像条件的控制较弱。本节点允许用户自定义 Redux 效果的强度，从而更好地结合提示词与条件图像的影响。

在版本更新中（v2.0），该节点新增了对条件图像的遮罩功能和支持非正方形图像的选项，使得用户能够更加灵活地使用不同类型的输入图像。

##### 使用场景

1. **艺术风格转换** ：用户可以利用条件图像和相关提示，实现如漫画、动漫等艺术风格的转换。例如，通过输入漫画风格的提示语，可以生成类似的漫画风格图像。

2. **图像融合** ：用户可以组合多幅图像，进行艺术风格混合，提供更丰富的视觉效果。

3. **细节增强** ：通过调整 Redux 效果的强度，用户能够更好地控制图像生成的细节与风格，以达到想要的视觉效果。

4. **复杂指令处理** ：对于复杂的提示词，用户可以通过多次重复相同的指令来加强效果，这样可以在生成时获得更符合期望的图像。

5. **遮罩应用** ：用户能够对条件图像进行遮罩，这样在生成时只考虑遮罩区域内的内容，达到更精确的效果。

6. **处理非正方形图像** ：支持非正方形图像输入，并通过自动填充和遮罩处理，解决比例失衡的问题。


总之，ComfyUI_AdvancedRefluxControl 是一个强大的工具，适合需要高度自定义和灵活控制图像生成的用户。