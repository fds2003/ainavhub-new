---
title: "MusePose"
date: "2024-01-01 00:00:00+08:00"
description: 'MusePose MusePose  Lyra '
slug: musepose-lyra-muse-musev-musetalk
tags:
- moore-animateanyone
- musepose
- muse
- animateanyone
- musev
draft: false
related_tools:
- musepose
- musepro
- musev
- transformer debugger
---

## MusePose

MusePose 是一种基于姿态引导的虚拟人视频生成框架。它属于腾讯音乐娱乐 Lyra 实验室的 Muse 开源系列的最后一个模块。通过与 MuseV 和 MuseTalk 的结合，MusePose 旨在实现一个具备全身运动和交互能力的端到端虚拟人生成愿景。在开发过程中，MusePose 参考了 AnimateAnyone 的学术论文和 Moore-AnimateAnyone 的代码库。

##### 核心贡献

1. MusePose 可以在给定姿态序列下，生成参考图像中人物角色的舞蹈视频，生成效果超过当前大部分开源模型。
2. 该框架发布了一个姿态对齐算法，用户可以将任意舞蹈视频与任意参考图像对齐，大大提高了推理性能与模型可用性。
3. 修复了多处重要的 BUG，并在 Moore-AnimateAnyone 的代码基础上进行了改进。


##### 使用场景

1. **虚拟主播** ：为虚拟主播生成具备真实感的动态视频，提升互动体验。
2. **影视娱乐** ：在电影、电视和音乐视频中，生成虚拟角色的动态表演。
3. **游戏开发** ：生成游戏中虚拟角色的动态动作，以增强游戏沉浸感。
4. **广告营销** ：在广告中使用虚拟人进行宣传和展示，增加吸引力。


##### 安装和使用

1. **环境准备** ：推荐使用 Python 版本 >=3.10 和 CUDA 版本 11.7。
2. **安装依赖** ：

pip install -r requirements.txt
pip install --no-cache-dir -U openmim
mim install mmengine
mim install "mmcv>=2.0.1"
mim install "mmdet>=3.1.0"
mim install "mmpose>=1.1.0"


3. **下载权重** ：将训练好的模型权重和其他组件的权重下载并放在 `pretrained_weights` 目录下。
4. **准备用于生成的视频和图像** ：将参考图像和舞蹈视频保存在 `./assets` 文件夹下。
5. **姿态对齐** ：运行 `pose_align.py` 将参考图像与舞蹈视频对齐。

python pose_align.py --imgfn_refer ./assets/images/ref.png --vidfn ./assets/videos/dance.mp4


6. **推理生成视频** ：运行 `test_stage_2.py`，生成虚拟人视频。

python test_stage_2.py --config ./configs/test_stage_2.yaml


生成结果将保存在 `./output/` 目录下。