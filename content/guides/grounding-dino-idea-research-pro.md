---
title: "Grounding DINO 1.5 Grounding DINO 1.5 Grounding DINO 1.5"
date: "2024-01-01 00:00:00+08:00"
description: 'Grounding DINO 1.5 Grounding DINO 1.5  IDEA Research '
slug: grounding-dino-idea-research-pro
tags:
- dino
- edge
- research
- pro
- idea
draft: false
related_tools:
- dino-x
- knowledge graph
- edgen - edgen是一个本地genai api服务器，为本地genai提供openai api的替代，支持文本生成、语音转文本等功能，并能在windows、linux和macos上免费、保护数据隐私地运行。
- knowledge graph builder app
- knowledge graphs for rag
---

## Grounding DINO 1.5

Grounding DINO 1.5 是由 IDEA Research 团队开发的一个高级开集目标检测模型。这款模型特别擅长处理在不同场景下的物体检测需求，包括未知类别的目标检测。Grounding DINO 1.5 包含两个主要版本：

1. **Grounding DINO 1.5 Pro** ：这是最强大的版本，设计用于在广泛的场景中具有强大泛化能力。
2. **Grounding DINO 1.5 Edge** ：这是一个高效版本，优化了在边缘计算设备上的速度，可以在需要快速处理的应用中部署。


##### 主要功能与应用场景：

1. **高级物体检测** ：Grounding DINO 1.5 能够在多种复杂场景中准确地检测目标，包括常见物体、长尾物体（稀有物体）以及高密度物体等。这样可以用在监控、无人驾驶等对检测要求高的场景中。

2. **零样本迁移** ：模型能够在未见过的目标类别上进行检测，不需要重新训练，这对于需要快速适应新类别检测的应用非常重要。适用于电商图片搜索、智能相册等需要快速更新和适应新内容的场景。

3. **实时视频检测** ：Grounding DINO 1.5 在视频序列中也能高效地进行目标检测，适用于视频监控、智能交通等需要实时处理的应用。

4. **边缘设备部署** ：Edge 版本优化了在边缘设备上的运行效率，适用于需要在边缘设备上运行的物联网应用，如智能摄像头、移动设备等。


##### 性能比较与结果：

Grounding DINO 1.5 Pro 在多个基准数据集（如 COCO、LVIS 和 ODinW35）上表现出了最先进的性能，尤其是在零样本迁移任务中显著优于其他模型。Fine-tuning（微调）后的 Grounding DINO 1.5 Pro 也在多个数据集上取得了很好的结果，展示了其在具体任务中的应用潜力。

##### 快速上手：

用户可以按照以下步骤快速使用 Grounding DINO 1.5 的 API：

1. **安装** ：使用 pip 命令安装模型：

pip install -v -e .


2. **获取 API Token** ：从 DeepDataSpace 获取 API 密钥。

3. **运行示例代码** ：使用模型提供的代码运行检测示例。

python demo/demo.py --token <API_TOKEN>


4. **在线演示** ：通过 Gradio Demo 体验在线模型效果。

python gradio_app.py --token <API_TOKEN>


Grounding DINO 1.5 是一个功能强大且灵活的开集目标检测模型，适用于需要高精度和广泛适应性的检测任务。无论是学术研究还是工业应用，都能找到它的用武之地。