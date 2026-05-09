---
title: "MusePose"
date: "2024-01-01 00:00:00+08:00"
description: 'MusePose MusePose MusePose  MusePose '
slug: musepose-muse-musev-musetalk
tags:
- clo
- git
- windows
- nodes
- musepose
draft: false
related_tools:
- cloudflare agents
- ai-clothingtryon
- magic clothing
- magicclothing
- cloudflare rag
---

## MusePose

##### MusePose

MusePose 是一个基于图像生成视频的框架，专为在控制信号（如姿态）下生成虚拟人类而设计。MusePose 是 Muse 开源系列的最后一个组成部分。结合 [MuseV](<https://github.com/TMElyralab/MuseV>) 和 [MuseTalk](<https://github.com/TMElyralab/MuseTalk>)，该系列旨在实现从端到端生成具备全身动作和交互能力的虚拟人类。我们希望社区能和我们一起向这个愿景迈进，并期待我们的下一个里程碑！

##### MusePose 的使用场景

1. **虚拟人类生成** ：用于生成可以模仿人类运动和姿态的虚拟角色，在动画、游戏等领域具有广泛应用。
2. **增强现实和虚拟现实** ：在AR和VR环境中，生成与用户互动的虚拟人类增强体验效果。
3. **影视制作** ：辅助电影和电视剧制作，通过虚拟演员减少拍摄成本和时间。
4. **社交媒体和娱乐** ：创造创新内容，例如虚拟主播和虚拟偶像。


##### Comfyui-MusePose 安装指南

1. 如果在Linux或非管理员权限的Windows账户上运行，确保`/ComfyUI/custom_nodes`和`Comfyui-MusePose`具备写权限。
2. 按照ComfyUI手动安装步骤进行以下操作：
* 导航至`/ComfyUI/custom_nodes/`文件夹
* 运行 `git clone https://github.com/TMElyralab/Comfyui-MusePose.git`
* 导航至`/ComfyUI/custom_nodes/Comfyui-MusePose`文件夹并运行以下命令：

pip install -r requirements.txt

pip install --no-cache-dir -U openmim
mim install mmengine
mim install "mmcv>=2.0.1"
mim install "mmdet>=3.1.0"
mim install "mmpose>=1.1.0"


* 启动 ComfyUI


##### 下载预训练模型

手动下载预训练模型：

1. 下载训练好的[MusePose权重](<https://huggingface.co/TMElyralab/MusePose>)。
2. 下载其他组件的权重：
* [sd-image-variations-diffusers](<https://huggingface.co/lambdalabs/sd-image-variations-diffusers/tree/main/unet>)
* [sd-vae-ft-mse](<https://huggingface.co/stabilityai/sd-vae-ft-mse>)
* [dwpose](<https://huggingface.co/yzd-v/DWPose/tree/main>)
* [yolox](<https://download.openmmlab.com/mmdetection/v2.0/yolox/yolox_l_8x8_300e_coco/yolox_l_8x8_300e_coco_20211126_140236-d3bd2b23.pth>) \- 确保重命名为 `yolox_l_8x8_300e_coco.pth`
* [image_encoder](<https://huggingface.co/lambdalabs/sd-image-variations-diffusers/tree/main/image_encoder>)


最终，应按如下方式组织这些权重于`pretrained_weights`文件夹：


./pretrained_weights/
|-- MusePose
|   |-- denoising_unet.pth
|   |-- motion_module.pth
|   |-- pose_guider.pth
|   └── reference_unet.pth
|-- dwpose
|   |-- dw-ll_ucoco_384.pth
|   └── yolox_l_8x8_300e_coco.pth
|-- sd-image-variations-diffusers
|   └── unet
|       |-- config.json
|       └── diffusion_pytorch_model.bin
|-- image_encoder
|   |-- config.json
|   └── pytorch_model.bin
└── sd-vae-ft-mse
|-- config.json
└── diffusion_pytorch_model.bin


##### 工作流演示

观看并下载MusePose工作流演示文件：[musepose-workflow-demo.json](<https://github.com/TMElyralab/Comfyui-MusePose/blob/main/musepose-workflow-demo.json>)

体验视频演示：[视频链接](<https://github.com/TMElyralab/Comfyui-MusePose/assets/114042542/9cd8b9b8-6876-4281-b7a0-a7fbcb2de7e1>)