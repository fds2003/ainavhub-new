---
title: "Omni-VideoAssistant"
date: "2024-01-01 00:00:00+08:00"
description: 'Omni-VideoAssistant Omni-VideoAssistant Omni-VideoAssistant '
slug: omni-videoassistant-omni-videoassista
tags:
- gradio
- git
- python
- github
- https
draft: false
related_tools:
- gradio webrtc
- vibegit
- gitfriend
- gitagent
- claude github webhook
---

## Omni-VideoAssistant

##### Omni-VideoAssistant简介

**Omni-VideoAssistant** 是一个功能强大的多模态人工智能模型，专注于从视频和图像中提取信息并进行语言描述。简单地说，它可以看图、看视频，然后通过文字告诉你它看到的内容。

##### 主要功能

1. **视频理解** ：Omni-VideoAssistant可以观看视频并描述其中的活动。例如，告诉你视频中有人在打网球还是在跳舞。
2. **图像理解** ：它还能分析图片，描述图片中的各种元素和场景。例如，解释一张照片里面有哪些东西，什么不寻常等等。
3. **CLI 和 web UI 推理** ：支持通过命令行（CLI）和Gradio的网页用户界面进行推理操作。无论是开发者还是普通用户，都可以选择适合自己的交互模式。


##### 使用案例

1. **视频内容制作与编辑** ：在视频编辑过程中，自动生成视频内容描述，提高工作效率。
2. **自动标注和分类** ：可以用于图像和视频的自动标注，方便大规模数据管理和分类。
3. **辅助设备** ：帮助视障人士通过描述了解视频和照片内容，提高生活质量。


##### 如何使用

1. **准备环境** ：首先需要克隆项目并配置好Python环境。

git clone https://github.com/wanghao-cst/Omni-VideoAssistant
cd Omni-VideoAssistant
conda create -n omni python=3.10 -y
conda activate omni
pip install --upgrade pip
pip install -e .


2. **下载预览模型** ：如果选择CLI推理模式，需要先下载模型。 [Omni Preview Model 6.1](<https://huggingface.co/harvey2333/omni_video_assistant_6_1>)
3. **运行推理**
* **Gradio Web UI** :

CUDA_VISIBLE_DEVICES=0 python -m  llava.serve.gradio_demo


打开后可以直接上传图片或视频进行分析。
* **CLI** :

CUDA_VISIBLE_DEVICES=0 python -m llava.eval.run_omni --model-path "path to omni checkpoints" --image-file "llava/serve/examples/extreme_ironing.jpg" --query "What is unusual about this image?"
CUDA_VISIBLE_DEVICES=0 python -m llava.eval.run_omni --model-path "path to omni checkpoints" --video-file "llava/serve/examples/0A8CF.mp4" --query "Describe the activity in the video"


##### 对比结果

Omni-VideoAssistant展示了它在图像和视频理解上的优秀能力，具备非常高的准确性和智能水平。

无论是图像还是视频内容的解析，Omni-VideoAssistant都能提供非常详细和准确的描述，帮助用户更好地理解和管理多媒体数据。