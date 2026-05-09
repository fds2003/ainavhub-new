---
title: "MagicLens MagicLens"
date: "2024-01-01 00:00:00+08:00"
description: MagicLens DeepMind MagicLens，。。MagicLens（LMMs）（LLMs），...
slug: magiclens-deepmind-lmms-llms
tags:
- sota
- llms
- magiclens
- deepmind
- lmms
draft: false
related_tools:
- lms
- screen to action using llms
- llms进行函数调用和数据提取的技能
---

## MagicLens

谷歌 DeepMind 推出的MagicLens是一个自监督图像检索模型系列，支持开放式指令。它的核心思想是通过文本指令来实现超越视觉相似性的丰富图像关系检索。MagicLens的关键创新点在于利用大规模多模态模型（LMMs）和大语言模型（LLMs）生成的指令，将自然出现于同一网页的图像对中存在的隐含关系显性化。该模型基于从网络挖掘的3670万个（查询图像、指令、目标图像）三元组进行训练，具备丰富的语义关系。

在八个不同图像检索任务的基准测试中，MagicLens取得了与或优于现有最先进（SOTA）方法的结果，尤其是在某些基准测试中，尽管模型规模小50倍，性能仍超越了之前的SOTA方法。对一个包含140万张图像的未见语料库的额外人工分析进一步证明了MagicLens支持的搜索意图的多样性。

##### MagicLens的使用场景

1. **开放式图像检索** ：利用文本指令进行多样化、复杂语义关系的图像检索，适用于需要丰富语义关联检索的应用场景。
2. **数据集标注和整理** ：通过跨页面关系的图像配对和指令生成，可用于大规模图像数据集的标注和整理。
3. **智能搜索引擎** ：集成于搜索引擎中，提升基于描述和上下文的图像检索效果。
4. **内容推荐系统** ：在电商、社交媒体等平台中，利用MagicLens实现更智能的内容推荐，基于用户输入的复杂描述推荐相关图像。


##### 安装与设置

要使用MagicLens，请按以下步骤设置环境并下载模型：

1. 创建并激活Python环境：

conda create --name magic_lens python=3.9
conda activate magic_lens


2. 克隆仓库并安装依赖：

git clone https://github.com/google-research/scenic.git
cd scenic
pip install .
pip install -r scenic/projects/baselines/clip/requirements.txt


3. 安装对应GPU版本的jax，如需：

pip install --upgrade "jax[cuda12_pip]" -f https://storage.googleapis.com/jax-releases/jax_cuda_releases.html


4. 下载并配置模型：

cd .. # 回到主文件夹 magiclens
gsutil cp -R gs://gresearch/magiclens/models ./


5. 进行数据准备，并运行推理：

python inference.py --model_size large --model_path ./models/magic_lens_clip_large.pkl --dataset circo


尽管在权重转换过程中，性能可能会有所不同。具体的性能对比如上所述。有关更多信息和数据集示例，请访问[MagicLens官网](<https://open-vision-language.github.io/MagicLens/>)。