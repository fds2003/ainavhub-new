---
title: "DiffIR2VR-Zero"
date: "2024-01-01 00:00:00+08:00"
description: DiffIR2VR-Zero DiffIR2VR-Zero DiffIR2VR-Zero
slug: diffir2vr-zero
tags:
- requirements.txt
- diffir2vr-zero.git
- install
- sintel-0c07dcb3.pth
- pip
draft: false
related_tools:
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
- gemini multimodal live api + pipecat
---

## DiffIR2VR-Zero

**DiffIR2VR-Zero** 是一种用于视频修复的无训练方法，通过使用预训练的图像扩散模型来处理视频修复任务，包括降噪和高达8倍的超分辨率。

##### **DiffIR2VR-Zero使用场景**

1. **视频降噪** ：可以显著降低视频中的噪声，使视频画面更加清晰流畅。
2. **视频超分辨率** ：能够提升视频的分辨率，最多支持提升至原分辨率的8倍，使低分辨率视频变得高清。
3. **无训练数据需求** ：无需专门针对视频修复进行训练，只需使用预训练的图像扩散模型即可实现高质量的视频修复。


##### **安装与使用**

1. **安装**

git clone https://github.com/jimmycv07/DiffIR2VR-Zero.git
cd DiffIR2VR-Zero
conda create -n diffir2vr python=3.10
conda activate diffir2vr
pip install -r requirements.txt


2. **预训练权重** 将预训练权重放置在以下目录结构中：

weights
├── gmflow_sintel-0c07dcb3.pth
├── v2.pth
└── v2-1_512-ema-pruned.ckpt


3. **推理命令示例**

* **视频降噪**

python -u inference.py \
--version v2 \
--task dn \
--upscale 1 \
--cfg_scale 4.0 \
--batch_size 10 \
--input inputs/noise_50/flamingo \
--output results/Denoise/flamingo  \
--config configs/inference/my_cldm.yaml \
--final_size "(480, 854)" \
--merge_ratio "(0.6, 0)" \
--better_start


* **视频超分辨率**

python -u inference.py \
--version v2 \
--task sr \
--upscale 4 \
--cfg_scale 4.0 \
--batch_size 10 \
--input inputs/BDx4/rhino \
--output results/SR/rhino  \
--config configs/inference/my_cldm.yaml \
--final_size "(480, 854)" \
--merge_ratio "(0.6, 0)"


##### **引用**

如果你的研究中使用了DiffIR2VR-Zero，请参考以下BibTeX条目进行引用：


@article{yeh2024diffir2vr,
title={DiffIR2VR-Zero: Zero-Shot Video Restoration with Diffusion-based Image Restoration Models},
author={Chang-Han Yeh and Chin-Yang Lin and Zhixiang Wang and Chi-Wei Hsiao and Ting-Hsuan Chen and Yu-Lun Liu},
journal={arXiv},
year={2024}
}


DiffIR2VR-Zero基于[DiffBIR](<https://github.com/XPixelGroup/DiffBIR>)和[VidToMe](<https://github.com/lixirui142/VidToMe>)项目的工作，感谢这些项目的贡献。