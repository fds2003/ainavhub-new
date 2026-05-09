---
title: "SF3D"
date: "2024-01-01 00:00:00+08:00"
description: SF3D SF3D Stable Fast 3D Mesh Reconstruction with UV-unwrapping and Illumination
  Disentanglement
slug: sf3d-stable-fast-mesh-reconstruction
tags:
- illumination
- sf
- fast
- uv
- install
draft: false
related_tools:
- ktransformers
- ai pose transfer studio
- transformer debugger
- ssm-transformer
- nsfw detector
---

## SF3D

SF3D（Stable Fast 3D Mesh Reconstruction with UV-unwrapping and Illumination Disentanglement）是一个先进的开源模型，可以从单张图像快速重建3D网格。该模型基于TripoSR，但引入了一些新的技术，使其能生成高质量且无瑕疵的3D网格和带有UV展开的纹理。此外，SF3D可以分离光照信息并预测材料参数，从而使生成的3D模型更容易集成到游戏中。尽管有这些改进，SF3D仍保持了TripoSR的快速推理速度。

##### 使用场景

1. **游戏开发** : 快速生成游戏中的3D资产，并且可以轻松调整光照和材料属性。
2. **虚拟现实（VR）和增强现实（AR）** : 在VR/AR应用中快速制作逼真的3D模型。
3. **电商** : 为商品生成高清3D模型，提高用户的购物体验。
4. **影视动画** : 快速创建动画中的3D角色或道具。
5. **工业设计** : 快速创建产品的3D模型，进行设计验证和展示。


##### 安装要求

* Python 版本 >= 3.8
* 可用的CUDA环境
* 安装匹配CUDA版本的PyTorch
* 更新setuptools: `pip install -U setuptools==69.5.1`
* 安装主要依赖: `pip install -r requirements.txt`
* 若需要使用Gradio演示，还需额外安装依赖: `pip install -r requirements-demo.txt`


##### 手动推理


python run.py demo_files/examples/chair1.png --output-dir output/


此命令将重建的3D模型保存为GLB文件到`output/`目录。可以通过空格分隔传递多个图像路径，默认情况下单张图片输入需要大约**6GB VRAM** 。

##### 本地Gradio应用


python gradio_app.py


##### 引用


@article{sf3d2024,
title={SF3D: Stable Fast 3D Mesh Reconstruction with UV-unwrapping and Illumination Disentanglement},
author={Boss, Mark and Huang, Zixuan and Vasishta, Aaryaman and Jampani, Varun},
journal={arXiv preprint},
year={2024}
}