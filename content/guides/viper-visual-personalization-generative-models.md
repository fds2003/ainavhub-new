---
title: "ViPer"
date: "2024-01-01 00:00:00+08:00"
description: ViPer ViPer ViPer（Visual Personalization of Generative Models via Individual
  Preference Learning）。，，...
slug: viper-visual-personalization-generative-models
tags:
- individual
- preference
- personalization
- generative
- learning
draft: false
related_tools:
- generative models by stability ai - stability ai 通过其稳定性 ai 生成模型发布了多个基于深度学习的文本到图像和图像到视频的生成模型，包括sdxl-turbo等，以及提供相关的技术报告和开放获取的模型权重。
- deeplearning-interview-awesome-2024
- parallelized autoregressive visual generation
- viper
- claude code but with openai models
---

## ViPer

##### ViPer简介

**ViPer** （Visual Personalization of Generative Models via Individual Preference Learning）是一种通过学习个体偏好来个性化生成模型输出的方法。它能够根据用户的视觉偏好，调整生成模型的输出，使得同一个提示词在不同用户处可以产生不同的结果。这种个性化无需用户提供详细的提示词，只需要一次性捕获用户的总体偏好。这使得生成的图像更符合用户的个人审美。

##### 使用场景

1. **个人化图片生成** ：适用于需要为不同用户生成符合其个人审美的图片场景，例如在艺术创作、社交媒体内容生成上。

2. **用户研究与分析** ：通过分析用户对不同图片的反馈，可以更深入地理解用户的视觉偏好，对产品设计和开发有重要参考价值。

3. **推荐系统** ：结合用户的视觉偏好，可以为用户提供更准确的内容或产品推荐，如影视、广告等领域。


##### 主要功能模块

* **VPE模型** ：这是一个经过微调的视觉-语言模型，通过分析用户对一组图片的评价来提取其个体偏好。
* **代理评分模型** ：根据用户喜欢或不喜欢的图片集合和待查询图像，预测用户对查询图像的偏好得分。


##### 使用示例

###### 个性化图片生成

该功能通过一组图片和用户对其的评论来提取用户的视觉偏好，并利用这些偏好来指导生成模型（例如Stable Diffusion）生成符合用户品味的图片。

使用步骤：

1. **安装必要库** ：

pip install pillow peft transformers diffusers


2. **代码示例** ：

from ViPer import (
set_device,
load_images,
initialize_processor_and_model,
prepare_prompt_and_inputs,
generate_texts,
extract_features,
initialize_pipelines,
generate_images
)

image_paths = ["/images/6.png", "/images/9.png"]
comments = [
"These are beautiful, intricate patterns. Very elegant, and the teal blue colors are lovely. I love the flowing lines.",
"The colors here don't quite work for me. They feel a bit unmatched and artificial. The concept also seems a bit boring and artificial to me.",
]

prompts = [
"Whimsical tea party in a bioluminescent forest",
"Tiny houses on top of each other above clouds"
]

output_dir = "results/"

device = set_device("cuda:0")
images = load_images(image_paths)
processor, model = initialize_processor_and_model(device)
inputs = prepare_prompt_and_inputs(processor, images, comments)

generated_texts = generate_texts(processor, model, inputs)
vp_pos, vp_neg = extract_features(generated_texts)
pipe, refiner = initialize_pipelines(device)
generate_images(pipe, refiner, prompts, vp_pos, vp_neg, output_dir)


###### 代理评分模型

该功能通过用户的一组喜欢和不喜欢的图片，预测用户对查询图像的偏好得分，用于个性化内容推荐。

1. **代码示例** ：

from metric import (
set_device,
load_context_images,
initialize_processor_and_model,
calculate_score
)

negative_image_paths = [
"disliked/0.png",
"disliked/1.png",
"disliked/2.png",
"disliked/3.png",
"disliked/4.png",
"disliked/5.png",
"disliked/6.png",
"disliked/7.png",
"disliked/8.png",
]

positive_image_paths = [
"liked/0.png",
"liked/1.png",
"liked/2.png",
"liked/3.png",
"liked/4.png",
"liked/5.png",
"liked/6.png",
"liked/7.png",
"liked/8.png",
]

query_image = "query.png"

device = set_device("cuda:0")
context_images = load_context_images(negative_image_paths, positive_image_paths)
processor, model = initialize_processor_and_model(device)
score = calculate_score(processor, model, context_images, query_image)

print(score)


ViPer通过独特的个性化方法，使得生成模型的输出能够更好地满足不同用户的个性化需求，适用于多种需要个性化内容生成的场景。