---
title: "BiGym"
date: "2024-01-01 00:00:00+08:00"
description: BiGym BiGym 。40，，。，。BiGym， RGB ...
slug: bigym
tags:
- python
- rgb
- reachtarget
- bigym
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## BiGym

**BiGym** 是一个新型的基于演示的移动双手机器人操作基准测试和学习环境。该环境包括40个各种各样的任务，设定在家庭环境中，涵盖从简单的目标接触到复杂的厨房清洁等任务。每个任务都提供了人类收集的演示，旨在精确反映现实机器人轨迹的多样性。BiGym支持多种观测模式，包括本体数据和来自三个视角的 RGB 及深度图像。

##### 主要特点：

1. **任务多样性** ：BiGym包含40个任务，例如目标接触、堆叠积木、移动盘子、开关洗碗机、开关抽屉等。
2. **观测支持** ：支持多种观测数据，包括本体数据和多角度的 RGB、深度图像数据。
3. **演示数据** ：由人类操作生成的演示数据，用于训练和评估算法。
4. **易于使用** ：提供了简单的安装和使用方法，用户可以直接通过Python代码实例化所需的任务。


##### 使用场景：

* **机器人研究** ：用于研究移动双手机器人的操作和学习。
* **家庭自动化** ：研究如何让机器人更好地完成家庭任务，例如厨房清洁和物品收纳。
* **机器学习与人工智能** ：利用人类演示数据进行训练和测试，提升算法的实际表现。
* **教育与培训** ：可以作为机器人操作训练的工具，为学习者提供多样化的操作任务。


##### 任务示例：

* **ReachTarget** ：用左手或右手到达目标。
* **StackBlocks** ：在桌子上移动和堆叠积木。
* **DishwasherOpen** ：打开洗碗机的门并拉出所有托盘。
* **DrawerTopOpen** ：打开厨房柜子的顶层抽屉。
* **PutCups** ：把杯子从桌子拿起并放进壁柜。


##### 安装方法：

通过pip安装：


pip install .


##### 简单示例：

以下是如何使用BiGym的一个简单示例：


from bigym.action_modes import TorqueActionMode
from bigym.envs.reach_target import ReachTarget
from bigym.utils.observation_config import ObservationConfig, CameraConfig

env = ReachTarget(
action_mode=TorqueActionMode(floating_base=True),
observation_config=ObservationConfig(
cameras=[
CameraConfig(
name="head",
rgb=True,
depth=False,
resolution=(128, 128),
)
],
),
render_mode=None,
)


##### 演示及数据再现：

提供了多种工具和脚本（例如demo_store和demo_player）用来下载和回放演示数据，并可通过VR设备录制新的演示数据。

这使得BiGym不仅是一个测试环境，还是一个完备的研究平台，适用于机器人操作及其在现实环境中的表现研究。