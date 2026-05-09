---
title: "ml_mdm ml_mdm ml_mdm（Matryoshka Diffusion Models）Python。Luke"
date: "2024-01-01 00:00:00+08:00"
description: ml_mdm ml_mdm（Matryoshka Diffusion Models）Python。Luke Carlson、Jiatao
  Gu、Shuangfei ZhaiNavdeep Jaitly，《Matryoshka Diffusion M...
slug: ml-mdm-matryoshka-diffusion-models
tags:
- pre-c
- jiatao
- install
- zhai
- models
draft: false
related_tools:
- claude code but with openai models
- open driving world models
- granite code models
- generative models by stability ai - stability ai 通过其稳定性 ai 生成模型发布了多个基于深度学习的文本到图像和图像到视频的生成模型，包括sdxl-turbo等，以及提供相关的技术报告和开放获取的模型权重。
- robot utility models
---

## ml_mdm

`ml_mdm`（Matryoshka Diffusion Models）是一个用于高效训练高质量文本到图像扩散模型的Python包。它由Luke Carlson、Jiatao Gu、Shuangfei Zhai和Navdeep Jaitly开发，并伴随名为《Matryoshka Diffusion Models》的研究论文发布。

##### 简介

扩散模型是生成高质量图像和视频的主流方法，但由于计算和优化方面的挑战，学习高维模型仍然是一项艰巨的任务。`ml_mdm`是一个端到端的高分辨率图像和视频合成框架，可在最高1024x1024像素的分辨率下训练单个像素空间模型，并在CC12M数据集（包含1200万张图像）上展示出强大的零样本泛化能力。

##### 使用场景

1. **高分辨率图像生成** ：能够处理1024x1024像素的高分辨率图像生成任务。
2. **零样本泛化** ：在没有预见过的数据上生成高质量图像。
3. **文本到图像** ：将文字描述转换为相应的高质量图像。
4. **研究与实验** ：为研究人员提供了一个框架，可以根据自己的数据进行训练和实验。


##### 安装与测试

可以通过以下命令进行安装：


pip install .


对于开发者，建议设置`pre-commit`：


pre-commit install


运行测试用例：


pytest   # 运行所有测试用例，包括需要GPU的
pytest  -m "not gpu"  # 仅运行可以在CPU上运行的测试用例


##### 预训练模型

提供了以下预训练模型的下载链接：

* [64x64分辨率模型](<https://docs-assets.developer.apple.com/ml-research/models/mdm/flickr64/vis_model.pth>)
* [256x256分辨率模型](<https://docs-assets.developer.apple.com/ml-research/models/mdm/flickr256/vis_model.pth>)
* [1024x1024分辨率模型](<https://docs-assets.developer.apple.com/ml-research/models/mdm/flickr1024/vis_model.pth>)


下载后，可以在web demo中使用：


torchrun --standalone --nproc_per_node=1  ml_mdm/clis/generate_sample.py --port 19999


##### 代码库结构

* `ml_mdm.models`: 核心模型实现
* `ml_mdm.diffusion`: 模型流水线，如DDPM
* `ml_mdm.config`: 模型、流水线和命令行接口的配置
* `ml_mdm.clis`: 项目的命令行工具
* `tests/`: 单元测试与示例训练文件


##### 训练模型示例

若要训练一个新的模型，可以下载或生成数据，然后使用下面的命令开始训练：


torchrun --standalone --nproc_per_node=8 ml_mdm/clis/train_parallel.py \
--file-list=training_0.tsv \
--multinode=0 --output-dir=/mnt/data/outputs \
--config_path configs/models/cc12m_64x64.yaml \
--num-training-steps=100 --warmup-steps 10


生成样本：


torchrun --standalone --nproc_per_node=1 ml_mdm/clis/generate_batch.py \
--config_path configs/models/cc12m_64x64.yaml \
--min-examples 3 --test-file-list validation.tsv \
--sample-image-size 64 --model-file /mnt/data/outputs/vis_model_000100.pth


##### 引用

如果你发现此项目有用，请引用以下论文：


@misc{gu2023matryoshkadiffusionmodels,
title={Matryoshka Diffusion Models},
author={Jiatao Gu and Shuangfei Zhai and Yizhe Zhang and Josh Susskind and Navdeep Jaitly},
year={2023},
eprint={2310.15111},
archivePrefix={arXiv},
primaryClass={cs.CV},
url={https://arxiv.org/abs/2310.15111},
}


通过以上介绍，`ml_mdm`为高分辨率图像生成任务提供了一个强大且灵活的工具。