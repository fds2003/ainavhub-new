---
title: "CharacterGen"
date: "2024-01-01 00:00:00+08:00"
description: CharacterGen CharacterGen CharacterGen
slug: charactergen
tags:
- huggingface-cli
- local-dir
- three-js
- requirements.txt
- resume-download
draft: false
related_tools:
- blendermcp
- charactergen
- character
- together open deep research
- autogenlib
---

## CharacterGen

**CharacterGen** 是一款高效的3D角色生成工具，它能够通过单张图像并结合多视角姿态校准技术来生成3D角色。以下是对CharacterGen的总结性介绍以及其使用场景：

* * *

##### **CharacterGen 概述**

CharacterGen是一个先进的工具，旨在通过单张图像进行高效的3D角色生成。这个工具利用多视角姿态校准技术，先生成2D多视角图像，随后再生成3D模型。此项目的代码库包括所需的渲染脚本和推理代码，并且已经在SIGGRAPH'24（TOG）中正式发布。

##### **主要功能**

* **VRM模型渲染脚本** ：支持Blender和three-js。
* **2D生成阶段的推理代码** 。
* **3D生成阶段的推理代码** 。


##### **使用方法**

1. **环境准备** ：安装所需依赖项。

pip install -r requirements.txt


2. **下载权重** ：需要先安装`huggingface-cli`。

huggingface-cli download --resume-download zjpshadow/CharacterGen --include 2D_Stage/* --local-dir .
huggingface-cli download --resume-download zjpshadow/CharacterGen --include 3D_Stage/* --local-dir .


3. **运行脚本** ：

* 运行整套流程：

python webui.py


* 仅运行2D生成阶段：

cd 2D_Stage
python webui.py


* 仅运行3D生成阶段：

cd 3D_Stage
python webui.py


##### **获取Anime3D数据集**

由于政策原因，团队无法重新分发VRM格式的3D角色数据。用户可按[PAniC-3D](<https://github.com/ShuhongChen/panic3d-anime-reconstruction>)指南下载Vroid数据集，随后可使用Blender或three-js进行渲染。

##### **渲染脚本指南**

* **Blender 渲染** ：需要安装Blender和VRM插件。然后通过以下命令渲染VRM并导出obj文件。

blender -b --python render_script/blender/render.py importVrmPath importFbxPath outputFolder [is_apose]


* **three-vrm 渲染** ：需先安装Node.js和必要的npm包。

cd render_script/three-js
npm install three @pixiv/three-vrm


##### **项目感悟**

CharacterGen建立在多个项目基础上，受益于**Tune-A-Video** 、**TripoSR** 、**three-vrm** 和**VRM-Addon-for-Blender** 等项目的启发和帮助。项目特别感谢多位朋友的无私指导。

##### **引用**

如果该项目对您有所帮助，欢迎引用：


@article{peng2024charactergen,
title   ={CharacterGen: Efficient 3D Character Generation from Single Images with Multi-View Pose Canonicalization},
author  ={Hao-Yang Peng and Jia-Peng Zhang and Meng-Hao Guo and Yan-Pei Cao and Shi-Min Hu},
journal ={ACM Transactions on Graphics (TOG)},
year    ={2024},
volume  ={43},
number  ={4},
doi     ={10.1145/3658217}
}


##### **使用场景**

CharacterGen广泛适用于以下领域：

* **游戏开发** ：创建逼真的3D角色。
* **影视制作** ：生成虚拟角色以用于动画和视觉特效。
* **虚拟现实（VR）和增强现实（AR）** ：构建沉浸式环境中的虚拟人物。
* **教育培训** ：为医疗、工程等领域提供角色演示和模拟。


通过CharacterGen，用户可以轻松从单一图像生成多视角2D图像和完整的3D角色模型，大大提高了3D建模的效率和准确性。