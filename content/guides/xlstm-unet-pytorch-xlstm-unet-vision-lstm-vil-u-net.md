---
title: "xLSTM-UNet-PyTorch"
date: "2024-01-01 00:00:00+08:00"
description: 'xLSTM-UNet-PyTorch xLSTM-UNet-PyTorch  xLSTM-UNet '
slug: xlstm-unet-pytorch-xlstm-unet-vision-lstm-vil-u-net
tags:
- whl
- cu118
- index-url
- install
- xlstm-unet-pytorch
draft: false
related_tools:
- index
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
---

## xLSTM-UNet-PyTorch

##### xLSTM-UNet-PyTorch 简介

xLSTM-UNet 是一种结合了 Vision-LSTM (ViL) 的 U-Net 架构，用于2D和3D的医学图像分割。相比于其Mamba对手，xLSTM-UNet 在提升长距离依赖性方面表现出色。该项目通过增强 U-Net 的捕捉能力，提高了对医学图像中细节和边缘的分割性能。

##### 安装步骤

1. 创建虚拟环境：

conda create -n uxlstm python=3.10 -y
conda activate uxlstm


2. 安装 PyTorch 2.0.1：

pip install torch==2.0.1 torchvision==0.15.2 --index-url https://download.pytorch.org/whl/cu118


3. 下载代码：

git clone https://github.com/tianrun-chen/xLSTM-UNet-PyTorch.git
cd xLSTM-UNet-PyTorch/UxLSTM
pip install -e .


##### 数据预处理和模型训练

1. 数据预处理：

nnUNetv2_plan_and_preprocess -d DATASET_ID --verify_dataset_integrity


2. 训练2D模型：

nnUNetv2_train DATASET_ID 2d all -tr nnUNetTrainerUxLSTMBot -lr {learning_rate} -bs {batch_size}
nnUNetv2_train DATASET_ID 2d all -tr nnUNetTrainerUxLSTMEnc -lr {learning_rate} -bs {batch_size}


3. 训练3D模型：

nnUNetv2_train DATASET_ID 3d_fullres all -tr nnUNetTrainerUxLSTMBot -lr {learning_rate} -bs {batch_size}
nnUNetv2_train DATASET_ID 3d_fullres all -tr nnUNetTrainerUxLSTMEnc -lr {learning_rate} -bs {batch_size}


##### 模型预测

通过现有训练好的模型进行预测：


nnUNetv2_predict -i INPUT_FOLDER -o OUTPUT_FOLDER -d DATASET_ID -c DATASET_TYPE -f all -tr nnUNetTrainerUxLSTMBot --disable_tta
nnUNetv2_predict -i INPUT_FOLDER -o OUTPUT_FOLDER -d DATASET_ID -c DATASET_TYPE -f all -tr nnUNetTrainerUxLSTMEnc --disable_tta


##### 评估

下载预训练模型后，进行验证：


python process_weight.py
bash metric_bot.sh
bash metric_enc.sh


##### 使用场景

xLSTM-UNet 主要应用于医学图像分析的分割任务，例如肿瘤检测、器官分割等。其增强的长距离依赖性捕捉能力，使得它特别适合处理复杂结构和边缘难以分辨的医学图像。通过提供精确的分割结果，xLSTM-UNet 可以辅助医生做出更准确的诊断和治疗决策。

##### 引用

如果您发现该项目有用，请引用相关工作：


@misc{chen2024xlstmuneteffective2d,
title={xLSTM-UNet can be an Effective 2D \& 3D Medical Image Segmentation Backbone with Vision-LSTM (ViL) better than its Mamba Counterpart},
author={Tianrun Chen and Chaotao Ding and Lanyun Zhu and Tao Xu and Deyi Ji and Ying Zang and Zejian Li},
year={2024},
eprint={2407.01530},
archivePrefix={arXiv},
primaryClass={eess.IV},
url={https://arxiv.org/abs/2407.01530},
}


请参考以上内容进行项目的安装和使用，并在相关研究中给予适当引用。