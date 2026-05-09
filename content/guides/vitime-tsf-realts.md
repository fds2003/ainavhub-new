---
title: "ViTime"
date: "2024-01-01 00:00:00+08:00"
description: ViTime ViTime（TSF），。 ：。 （RealTS）：，。 ：...
slug: vitime-tsf-realts
tags:
- requirements.txt
- install
- pip
- https
- back
draft: false
related_tools:
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
- gemini multimodal live api + pipecat
---

## ViTime

ViTime是一种基于视觉智能的时间序列预测（TSF）基础模型，通过利用视觉数据处理范式来增强预测能力。

## 主要特点

* **视觉智能** ：利用视觉数据处理技术来增强时间序列分析和预测。
* **真实时间序列（RealTS）** ：一种新颖的数据合成方法，提高了模型的训练效果和性能。
* **零样本性能** ：在多样化数据集上实现了最先进的零样本预测，通常优于最佳的监督模型。


## 使用场景

ViTime适用于各种时间序列预测任务，包括但不限于：

* 经济预测
* 销售预测
* 季节性趋势分析
* 工业传感器数据预测
* 健康监测数据分析


## 快速入门

可以通过Google Colab快速尝试ViTime：[Colab链接](<https://colab.research.google.com/drive/1vWi2razIF58TOm1SDG3bwyPb_I8qMRXh?usp=sharing>)

##### 前提条件

* Python 3.9+
* PyTorch


##### 安装步骤

先克隆仓库：


git clone https://github.com/IkeYang/ViTime
cd ViTime


然后安装所需的包：


pip install -r requirements.txt


## 检查点

我们提供了三个模型的权重文件，下载链接如下：

1. **ViTime_V1.pth** ：适用于回看窗口（look back window）为512

* [模型权重](<https://drive.google.com/file/d/1JfrK62y4iTd1f8F_xNU6e3fARwpuRwhJ/view?usp=sharing>)
2. **ViTime_1072.pth** ：适用于回看窗口为1072

* [模型权重](<https://drive.google.com/file/d/17Sn40KR87Vb5YEh7ysN5Z1gm4CiWd_jy/view?usp=sharing>)
3. **ViTime_V2.pth** ：灵活的回看窗口输入为[256, 1024]

* [模型权重](<https://drive.google.com/file/d/1SGhfVcu_4IWW5SU740Na9Z6NnzygoSPn/view?usp=sharing>)


##### 模型推断

以下是运行推断代码的步骤：

1. 加载预训练模型。
2. 准备推断脚本：


import matplotlib.pyplot as plt
from model.model import ViTime
import numpy as np
import torch

deviceNum = 0
torch.cuda.set_device(deviceNum)
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
checkpoint = torch.load(r'ViTime_V2.pth', map_location=device)
args = checkpoint['args']
args.device = device
args.flag = 'test'

# 设置上采样参数
args.upscal = True  # True: 最大输入长度=512, 最大预测长度=720
# False: 最大输入长度=1024, 最大预测长度=1440
model = ViTime(args=args)
model.load_state_dict(checkpoint['model'])
model.to(device)
model.eval()

# 示例数据
xData=np.sin(np.arange(512)/10)+np.sin(np.arange(512)/5+50)+np.cos(np.arange(512)+50)
args.realInputLength = len(xData)
yp = model.inference(xData)

# 绘制结果
plt.plot(np.concatenate([xData,yp.flatten()],axis=0),label='Prediction')
plt.plot(xData,label='Input Sequence')
plt.legend()
plt.show()


3. 运行推断：


python inference.py


该脚本加载ViTime模型，对示例正弦数据进行推断，并将预测序列与输入序列一起绘制出来。

## 实验与结果

ViTime在多样化的数据集上展示了最先进的零样本预测性能，往往优于最佳的单独训练的监督学习模型。更进一步，当用10%的训练数据进行微调时，ViTime的表现超过了用100%数据训练的最新监督学习模型；而用100%数据进行微调后，预测精度进一步大幅提升，展示了其卓越的效果。