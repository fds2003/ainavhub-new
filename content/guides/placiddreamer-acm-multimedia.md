---
title: "PlacidDreamer"
date: "2024-01-01 00:00:00+08:00"
description: PlacidDreamer PlacidDreamer ACM Multimedia 2024
slug: placiddreamer-acm-multimedia
tags:
- hansenhuang0823
- fine-tuning
- placiddreamer
- distillation
- https
draft: false
related_tools:
- qwen3 fine-tuning playground
- openaifine-tuning（微调） api的新功能
- aci
- placiddreamer
- dia
---

## PlacidDreamer

PlacidDreamer是由清华大学和快手的研究团队（包括黄硕、孙世昆、王子轩、秦晓宇、熊妍敏、张远、万鹏飞、张迪和贾佳）开发并在ACM Multimedia 2024发表的一款文本到3D生成工具。它通过"Balanced Score Distillation (BSD)“技术，比传统方法更快速且高效地生成高质量的3D图像。

##### PlacidDreamer的使用场景

1. **文本到3D生成** ：能够将文本描述直接转换为3D模型，这对于虚拟现实、游戏开发和动画制作等领域非常有用。
2. **多视图图像生成和网格重建** ：可以从单张图像生成多视角图像，并重建出对应的3D模型，适用于产品设计和展示。
3. **图像生成细化** ：Fine-tuning文本到图像的扩散模型，提升生成图像的质量和细节。
4. **T3Bench评估** ：用于评估生成的3D模型的质量和文本对齐度，适合科研和工业领域的性能测试。


##### 安装和使用

* **安装步骤** ：

git clone https://github.com/HansenHuang0823/PlacidDreamer.git --recursive
conda create -n PlacidDreamer python=3.10.13 cudatoolkit=11.8
conda activate PlacidDreamer
pip install -r requirements.txt
pip install submodules/diff-gaussian-rasterization/
pip install submodules/simple-knn/


* **生成与重建** ：

# 从图像生成多视角图像和网格重建
python imagetomesh.py --elev 10 --im_path cactus.png

# 细调文本到图像扩散模型
sh train_dreambooth_lora.sh

# 执行平衡得分蒸馏
python train.py --opt configs/cactus.yaml --lambda_ 18.0 --name cactus --lora_path lora_checkpoints/cactus

# 使用SDS分解的BSD变体
python train.py --opt configs/cactus.yaml --auto_BSD true --name cactus --lora_path lora_checkpoints/cactus


* **评估** ：

# 评估质量
python T3Bench_Evaluation/eval_quality.py
# 评估文本对齐度
python T3Bench_Evaluation/eval_blip.py
python T3Bench_Evaluation/eval_alignment.py # 需替换GPT-4 API密钥


PlacidDreamer依托[LucidDreamer](<https://github.com/EnVision-Research/LucidDreamer>)构建，并在其基础上进行扩展与优化，其开发团队对此前代码库的作者表示感谢。