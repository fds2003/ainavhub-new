---
title: "DIAMOND"
date: "2024-01-01 00:00:00+08:00"
description: DIAMOND DIAMOND DIffusion As a Model Of eNvironment Dreams
slug: diamond-diffusion-model-environment-dreams
tags:
- environment
- git
- atari
- model
- diffusion
draft: false
related_tools:
- meta agents research environments
- macos-style react desktop environment
- vibegit
- gitfriend
- gitagent
---

## DIAMOND

DIAMOND（DIffusion As a Model Of eNvironment Dreams）是一种用于强化学习的智能体模型，其训练依赖于扩散世界模型。该模型特别关注在Atari游戏上的应用，通过使用扩散过程来进行环境建模和智能体训练，它能够在视觉细节上更加精准地模拟和决策。

##### DIAMOND的使用场景

1. **Atari游戏的强化学习** ：DIAMOND可以在Atari游戏环境中进行训练，成为Atari游戏智能体。这对于研究和开发复杂游戏策略具有重要意义。
2. **视觉细节强化的世界模型** ：DIAMOND使用扩散模型来预测未来状态，这可以生成高质量的视觉细节，并提供更准确的环境模拟。
3. **策略学习与决策** ：通过与扩散世界模型集成，DIAMOND可以学习复杂的策略，并进行高效决策。
4. **可视化与互动** ：DIAMOND提供了强大的可视化工具，可以在训练过程中以及训练后对模型性能和行为进行可视化分析。


##### 如何使用DIAMOND

###### 试用预训练的世界模型

使用以下命令下载并运行预训练模型：


git clone git@github.com:eloialonso/diamond.git
cd diamond
conda create -n diamond python=3.10
conda activate diamond
pip install -r requirements.txt
python src/play.py --pretrained


选择一个游戏，并从Hugging Face Hub下载相应的预训练世界模型和策略。可以通过按 `m` 键在智能体和人类之间切换控制，按 `↑/↓` 键改变想象视野。

###### 训练新模型

使用以下命令启动训练：


python src/main.py env.train.id=BreakoutNoFrameskip-v4 common.device=cuda:0


这将在 `outputs/YYYY-MM-DD/hh-mm-ss/` 目录中创建一个新的运行文件夹，用于储存训练状态和结果。

##### 可视化与数据分析

DIAMOND具有交互式的可视化工具，通过以下命令可以在默认的play模式下启动可视化：


python src/play.py


按 `m` 键可以在智能体控制和人类控制之间切换，按 `↑/↓` 键调整想象视野。如果需要记录每一帧数据，可以添加 `-r` 选项进入录制模式。录制的数据存在 `dataset` 目录中，可以使用数据集模式进行重播和分析：


python src/play.py -d


控制键说明：

* `↑/↓`：选择前一个/下一个情节
* `←/→`：选择情节中的前一步/后一步


##### 参考与引用

详细信息和更多选项参考官方文档。如果在研究中使用DIAMOND，请引用本文：


@misc{alonso2024diffusion,
title={Diffusion for World Modeling: Visual Details Matter in Atari},
author={Eloi Alonso and Adam Jelley and Vincent Micheli and Anssi Kanervisto and Amos Storkey and Tim Pearce and François Fleuret},
year={2024},
eprint={2405.12399},
archivePrefix={arXiv},
primaryClass={cs.LG}
}


* * *