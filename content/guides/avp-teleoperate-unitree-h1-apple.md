---
title: "avp_teleoperate avp_teleoperate avp_teleoperateUnitree H1_2，"
date: "2024-01-01 00:00:00+08:00"
description: avp_teleoperate avp_teleoperateUnitree H1_2，Apple Vision Pro。，。，，...
slug: avp-teleoperate-unitree-h1-apple
tags:
- teleoperate
- install
- apple
- meshcat
- wrapper
draft: false
related_tools:
- apple doc mcp
- some pre-prompt instructions for apple
- apple intelligence
- comfyui-kwaikolorswrapper
- comfyui wrapper nodes for hunyuanvideo
---

## avp_teleoperate

`avp_teleoperate`是一个用于控制类人机器人Unitree H1_2在远程操作中的库，采用Apple Vision Pro设备来实现。该库让用户可以通过可穿戴设备对机器人进行远程操作，具体包括机器人的双臂和灵巧手的控制。同时，还集成了反向运动学求解，以帮助机器人执行复杂的运动任务。

**主要使用场景包括：**

1. **远程操作机器人：** 在无法亲临现场的情况下，通过Apple Vision Pro设备进行实时操控和感知。
2. **模拟环境测试：** 利用Isaac Gym模拟环境进行远程操控测试，适合开发和调试阶段。
3. **图像传输和处理：** 实现从机器人到操作终端的图像流传输，适用于需要视觉反馈的应用场景。


**安装和配置步骤：**

1. 设置反向运动学环境：

conda create -n tv python=3.8
conda activate tv
conda install pinocchio -c conda-forge
pip install meshcat


2. 安装`unitree_dds_wrapper`:

git clone https://github.com/unitreerobotics/unitree_dds_wrapper.git
cd unitree_dds_wrapper/python
pip3 install -e .


3. 安装TeleVision和Apple Vision Pro配置:

cd ~
git clone https://github.com/unitreerobotics/avp_teleoperate.git
cd ~/avp_teleoperate
pip install -r requirements.txt
cd act/detr && pip install -e .


4. 设置Isaac Gym环境，用于模拟环境远程操作测试。
5. 本地流媒体配置，包括创建自签名证书，配置防火墙和浏览器设置等。


**使用步骤：**

1. 启用灵巧手服务，配置相关环境并编译控制程序，验证两手是否能正常开关。
2. 启动图像服务，将`image_server.py`复制到机器人PC端，启动后在主机端用`image_client.py`测试通信。
3. 运行主程序`unitree_human_robot.py`来启动远程操作。


**代码结构：**

* `act`：包含与模仿学习策略相关的文档。
* `assets`：储存机器人的URDF文件。
* `teleop`：包含图像传输服务器和客户端代码，机器人控制相关文件，以及启动执行代码等。


**该项目建立在多个开源项目基础上，如TeleVision、dex-retargeting和vuer等，具体可以参阅它们的LICENSE。**