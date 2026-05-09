---
title: "FLAIR"
date: "2024-01-01 00:00:00+08:00"
description: FLAIR FLAIR Feeding via Long-horizon AcquIsition of Realistic dishes
slug: flair-feeding-via-long-horizon-acquisition
tags:
- depth-anything
- dishes
- github
- robot-lightning
- realistic
draft: false
related_tools:
- claude github webhook
- github copilot
- github copilot workspace
- github copilot for xcode
- github spark
---

## FLAIR

FLAIR（Feeding via Long-horizon AcquIsition of Realistic dishes）是一个用于远程喂食的机器人系统。它支持几种机器人手臂平台，包括Kinova 6-DoF或7-DoF机械臂和Franka Emika Panda 7-DoF机械臂。FLAIR使用一个定制的喂食器具，其中包括专门处理面条的分割模型，通过视觉和深度信息来准确地抓取和喂食食物。

##### 硬件要求

* 兼容的机器人手臂平台：Kinova 6-DoF或7-DoF，Franka Emika Panda 7-DoF
* 定制喂食器具（详细组件和规格可以在指定的链接中获取）


##### 设置FLAIR的步骤

**依赖项安装**

* 安装Grounded-Segment-Anything和Depth-Anything
* 下载并放置面条分割模型的权重文件


**机器人手臂及ROS工作区设置**

* 对于Kinova手臂，使用kortex API；对于Franka手臂，使用Polymetis和Robot-Lightning
* 克隆FLAIR的GitHub仓库并构建工作区，确保所有依赖项都已满足


**喂食器具的设置**

* 安装Dynamixel SDK和Dynamixel Wizard 2.0
* 配置Dynamixel，设置ID，扫描设备并调整波特率
* 启动喂食器具，通过ROS发布命令来测试其功能


##### 运行FLAIR

运行FLAIR需要在多个终端窗口中依次执行以下命令，并确保环境中的所有依赖项已正确加载：

1. 启动ROS核心：

roscore


2. 打开Rviz以可视化机器人的动作：

rviz


3. 启动手腕驱动程序：

rosrun wrist_driver_ros wrist_driver


4. 启动咬合获取过程（根据使用的机械臂选择相应的配置）：

roslaunch bite_acquisition kinova/franka.launch


5. 在新终端设定OpenAI API密钥并运行主喂食机器人脚本：

export OPENAI_API_KEY=<your_api_key_here>
python feeding_bot.py


##### 使用场景

FLAIR系统主要应用于辅助那些无法自行用餐的人群，包括老年人、行动不便的患者等。系统通过高精度的视觉和深度感知，能够在复杂的用餐场景中进行自主化喂食，提高他们的生活质量和自理能力。