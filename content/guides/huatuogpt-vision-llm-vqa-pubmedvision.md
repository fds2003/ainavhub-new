---
title: "HuatuoGPT-Vision"
date: "2024-01-01 00:00:00+08:00"
description: HuatuoGPT-Vision HuatuoGPT-Vision LLM
slug: huatuogpt-vision-llm-vqa-pubmedvision
tags:
- gpt-4v
- pubmedvision
- qwen2-7b
- vqa
- mri
draft: false
related_tools:
- qwen2
- rllm
- onefilellm
- llmanager
- llm.pdf
---

## HuatuoGPT-Vision

HuatuoGPT-Vision是一款专注于医学领域的多模态大型语言模型（LLM），旨在通过大规模注入医学视觉知识来提升模型的医学视觉问答（VQA）能力。其核心是结合了**PubMedVision** 数据集，一款包含约1.3百万高质量医学视觉问答数据的大规模数据集。这些数据集是从PubMed的图像和文本对构建而成，并使用GPT-4V重新格式化。

##### 使用场景

1. **医学影像解读** ：HuatuoGPT-Vision可以帮助医生和医学研究人员对医学影像（如X光片、MRI、CT等）进行自动解读，提供辅助诊断建议。
2. **医学教育与培训** ：可以用作医学教育工具，提供给学生和培训人员用于学习和练习医学影像解读技能。
3. **临床决策支持** ：在临床应用中，作为医生的决策支持工具，提供影像分析和解释，以辅助临床诊断和治疗方案制定。
4. **医学研究** ：帮助研究人员快速处理和分析大量医学影像数据，从而提升科研效率和成果产出。


##### 模型访问

HuatuoGPT-Vision模型在Huggingface平台上免费开放下载，分为两个版本：

* **HuatuoGPT-Vision-7B** ：基于Qwen2-7B
* **HuatuoGPT-Vision-34B** ：基于Yi-1.5-34B


##### 使用方法

* **命令行接口** ： 使用命令行进行对话：

python cli.py --model_dir path-to-huatuogpt-vision-model


* **模型推理** ： 使用ChatBot进行推理：

query = '这张图片显示了什么？'
image_paths = ['image_path1']

from cli import HuatuoChatbot
bot = HuatuoChatbot('path-to-huatuogpt-vision-model')
output = bot.inference(query, image_paths)
print(output)  # 输出模型的结果


##### 性能表现

在多个医学VQA数据集上的测试结果表明，HuatuoGPT-Vision在医学多模态问答任务上展示了优越的性能。例如，在VQA-RAD、SLAKE、PathVQA以及PMC-VQA数据集上，HuatuoGPT-Vision-34B取得了最高的准确率。

HuatuoGPT-Vision随着多个医学领域的先进成果，展示了其在医学影像解读和多模态问答中的核心竞争力，是医学领域研究和应用中的一大助力。