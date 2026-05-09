---
title: "Deep-tempest Deep-tempest Deep-TEMPEST"
date: "2024-01-01 00:00:00+08:00"
description: Deep-tempest Deep-TEMPEST Deep-TEMPEST
slug: deep-tempest-hdmi-van-eck-phreaking
tags:
- van
- x900
- sdr
- gr-tempest
- eck
draft: false
related_tools:
- comfyui_advancedrefluxcontrol
- practical multi ai agents and advanced use cases with crewai
- advancedliveportrait
- physdreamer
- dupcheck
---

## Deep-tempest

##### Deep-TEMPEST项目简介

Deep-TEMPEST项目旨在通过深度学习技术改进对HDMI显示器产生的非预期电磁辐射信号的窃听质量。这种技术也被称为Van Eck Phreaking或简单地称为TEMPEST，常用于从视频显示设备的非预期电磁辐射信号中间谍图像。

###### 工作机制

该项目扩展了原有的[gr-tempest](<https://github.com/git-artes/gr-tempest>)系统，通过深度学习显著提高了图像恢复的质量。其目标主要是恢复显示器上显示的文本内容，并将字符错误率从原始gr-tempest系统的90%降低到少于30%。

###### 使用场景

Deep-TEMPEST的使用场景主要包括：

1. **信息安全与反间谍** ：用于检测和防范电磁信号泄漏，从而确保敏感信息的安全性。
2. **数据恢复** ：从受损或受干扰的电磁信号中恢复原始显示内容。
3. **研究与教学** ：为学术研究提供实际应用案例，帮助理解电磁辐射信号的特性和防护措施。


###### 数据集

项目公开了用于实验、训练和评估的数据集。数据集包括合成图像和实际捕获的图像，分辨率为1600x900，SDR的中心频率为第三像素率谐波（324 MHz）。数据集结构因合成数据和实际捕获数据有所不同。

###### 代码和环境

该项目的代码库可通过以下方式获取：


git clone https://github.com/emidan19/deep-tempest.git


代码使用Python 3.10版本，并基于Anaconda创建环境。具体步骤如下：


conda create --name deeptempest --file requirements.txt
conda activate deeptempest


此外，项目还需要使用修改版的gr-tempest，通过运行相应的grc文件以激活hierblocks，最终运行deep-tempest_example.grc以捕获并恢复更高质量的监视器图像。

对于详细的技术细节和如何引用该工作，请参考以下引用格式：


@misc{fernández2024deeptempestusingdeeplearning,
title={Deep-TEMPEST: Using Deep Learning to Eavesdrop on HDMI from its Unintended Electromagnetic Emanations},
author={Santiago Fernández and Emilio Martínez and Gabriel Varela and Pablo Musé and Federico Larroca},
year={2024},
eprint={2407.09717},
archivePrefix={arXiv},
primaryClass={cs.CR},
url={https://arxiv.org/abs/2407.09717},
note={Submitted}
}


如需更多信息，请访问该项目的GitHub页面和下载链接。