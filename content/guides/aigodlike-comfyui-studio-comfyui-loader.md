---
title: "AIGODLIKE-ComfyUI-Studio"
date: "2024-01-01 00:00:00+08:00"
description: 'AIGODLIKE-ComfyUI-Studio AIGODLIKE-ComfyUI-Studio  ComfyUI '
slug: aigodlike-comfyui-studio-comfyui-loader
tags:
- aigodlike-comfyui-studio
- checkpoints
- loader
- a.ckpt
- sd1.5
draft: false
related_tools:
- udio
- real-time ai voice chat
- puppeteer real browser
- big three realtime agents
- realtime solar system demo
---

## AIGODLIKE-ComfyUI-Studio

AIGODLIKE-ComfyUI-Studio 是一个旨在提升使用 ComfyUI 时的交互体验的工具。它通过使 ComfyUI 模型加载更加直观，并简化模型缩略图的创建过程，来优化用户体验。以下是 AIGODLIKE-ComfyUI-Studio 的功能及其使用场景简介：

## 功能介绍

1. **Loader模型管理** ：提供更直观的模型管理功能，包括模型排序、标签、搜索、评分等。
2. **模型缩略图** ：一键生成模型缩略图或使用本地图片作为缩略图。
3. **模型屏蔽** ：将特定模型从加载器中排除。
4. **自动模型标签** ：自动为模型的外部文件夹添加标签，例如 \ ComfyUI \ models \ checkpoints \ SD1.5 \ real \ A.ckpt 会为 A.ckpt 添加 “SD1.5” 和 “real” 标签。
5. **模型匹配工作流** ：为模型匹配工作流，并支持搜索、添加、加载、删除和复制到剪贴板。
6. **多语言支持** ：支持英文、简体中文和繁体中文。


## 使用场景

AIGODLIKE-ComfyUI-Studio 适用于需要高效管理和操作多个模型的用户，例如 AI 开发者、机器学习工程师和数据科学家。它可以让用户更轻松地组织、标记和查找模型，从而提高工作效率并简化复杂任务。

## 安装方法（仅限 Windows 10/11）

AIGODLIKE-ComfyUI-STUDIO 相当于一个自定义节点，可以使用任何你喜欢的方法安装，只需要将其放在 custom_nodes 文件夹中。

然后运行以下命令：


cd ComfyUI/custom_nodes
git clone https://github.com/AIGODLIKE/AIGODLIKE-ComfyUI-Studio.git


## 使用指南

找到一个加载器，**左键单击** 模型切换以弹出 ComfyUI Studio 管理器。如果仍需使用原始模型列表，可**Shift+左键** 单击模型切换以弹出原始模型列表。

## 支持的加载器列表

支持标准节点（如：ckpt_name、vae_name 等）和部分非标准节点（如：CheckpointLoader、VAELoader 等）。

**TODO** 增加更多功能支持，优化标签过滤交互。

通过这些功能和场景，提高了使用 ComfyUI 的便捷性和效率，使模型管理更为简便直观。