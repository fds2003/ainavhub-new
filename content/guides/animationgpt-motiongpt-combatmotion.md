---
title: "AnimationGPT"
date: "2024-01-01 00:00:00+08:00"
description: 'AnimationGPT AnimationGPT  AnimationGPT '
slug: animationgpt-motiongpt-combatmotion
tags:
- cmp
- combatmotion
- combatmotionraw
- humanml3d
- motiongpt
draft: false
related_tools:
- motiongpt
---

## AnimationGPT

## AnimationGPT 简介

AnimationGPT 是一个基于文本生成格斗风格角色动画的项目。该项目依托于 [MotionGPT](<https://github.com/OpenMotionLab/MotionGPT>)，并创建了首个专注于格斗风格的角色动画数据集——CombatMotion，该数据集附带详细的文本描述。

**对比现有文本到动作的数据集：**

数据集 | 动作数量 | 文本数量 | 风格 | 来源
---|---|---|---|---
KIT-ML | 3,911 | 6,278 | 日常 | 动作捕捉
HumanML3D | 14,616 | 44,970 | 日常 | 动作捕捉
Motion-X | 81,084 | 81,084 | 日常 | 视频重建
CMP | 8,700 | 26,100 | 格斗 | 游戏
CMR | 14,883 | 14,883 | 格斗 | 游戏

CombatMotion 数据集的特点包括：

1. 来源于游戏资产。
2. 动作风格偏向格斗类型，动作类型较为集中。
3. 具有详细且多样的文本标注。


##### 数据集说明

###### CombatMotionProcessed 数据集 (CMP)

CMP 是精加工的数据集，包括 8,700 条高质量的格斗风格动画，并为每条动画提供三种文本标注：简洁描述、带感官细节的简洁描述和详尽描述。

###### CombatMotionRaw 数据集 (CMR)

CMR 包含 14,883 条动画（CMP 是其子集），每条动画仅提供一个简单拼接的文本标注。由于此类标注的模型性能较差，因此建议进一步优化文本标注后使用。

##### 模型训练与评估

项目提供基于不同算法的模型训练结果，包括 MotionGPT、MLD 和 MDM 模型。各模型在 CMP 数据集上的评估结果显示：

评价指标 | MotionGPT | MLD | MDM
---|---|---|---
Matching Score | 5.426 ± 0.017 | 5.753 ± 0.019 | 5.179 ± 0.013
R_precision (top 1) | 0.044 ± 0.002 | 0.048 ± 0.002 | 0.053 ± 0.002
FID | 0.531 ± 0.018 | 1.240 ± 0.036 | 0.019 ± 0.001
… | … | … | …

##### 使用场景

AnimationGPT 主要应用于生成游戏中的格斗动作。具体使用场景包括：

1. **游戏开发** ：为角色设计和生成各种攻击、防御动作。
2. **动画制作** ：提供基于文本描述的角色动画生成，提升动画制作的效率。
3. **虚拟现实** ：生成逼真、自然的角色动作，增强沉浸式体验。


##### 使用教程

1. 下载并配置环境，参照 MotionGPT 项目。
2. 下载并解压 CMP 数据集至 `datasets/humanml3d` 目录下。
3. 使用预训练模型生成动画，将生成的 npy 文件转为 mp4 或 bvh 文件。


##### 建议与注意事项

* **文本标注** ：确保标注的文本无中文字符或异常符号。
* **混合训练** ：适当混合使用不同数据集，是提升模型效果的一种方法。
* **探索详细标注** ：添加细节丰富的标注，有助于模型学习。


##### 致谢

感谢 MotionGPT、MLD、MDM、HumanML3D 和 Motion-X 项目的贡献，我们的代码部分借鉴了他们的工作。

希望这份简介能帮助您更好地理解和利用 AnimationGPT 项目。