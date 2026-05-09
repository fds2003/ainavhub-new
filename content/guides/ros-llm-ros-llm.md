---
title: "ROS-LLM ROS-LLM"
date: "2024-01-01 00:00:00+08:00"
description: ROS-LLM ROS-LLM？ ROS-LLMROS，（LLM），。，。 ROS-LLM？ ：，...
slug: ros-llm-ros-llm
tags:
- ros
- ros-llm
- chatgpt
- gpt-4
- llm
draft: false
related_tools:
- zerosearch
- ros mcp server
- microsandbox
- browseros
- microsoft copilot for finance
---

## ROS-LLM

##### 什么是ROS-LLM？

ROS-LLM是一个用于机器人应用的ROS框架，它可以通过自然语言交互和基于大型语言模型（LLM）的控制，来实现机器人运动和导航。简单来说，就是让机器人能听懂人说的话并做出相应的动作。

##### 什么时候会用到ROS-LLM？

* **需要高级决策** ：当你的机器人需要做复杂决策时，比如路径规划、任务分配等，你可以通过结合GPT-4或ChatGPT这样的大型语言模型来辅助决策。
* **自然语言交互** ：如果希望与机器人进行对话式的交流，比如让机器人理解和执行口头指令，这个框架非常适合。
* **快速开发** ：当你需要快速部署和测试一个新功能时，ROS-LLM的简单接口和快速开发能力可以帮你在短时间内完成。
* **自定义机器人行为** ：如果你有特定类型的机器人，需要定制化其行为和功能，ROS-LLM提供了灵活的扩展接口，方便你进行个性化修改。


##### 功能特点

1. **无缝ROS集成** ：与ROS（机器人操作系统）无缝对接，便于机器人控制。
2. **支持大型语言模型** ：支持像GPT-4、ChatGPT这样的LLM，为机器人提供高级决策能力。
3. **自然语言交互** ：支持用对话方式与机器人交流。
4. **灵活控制** ：可以通过语言模型解释，控制机器人的运动和导航。
5. **简易扩展** ：提供简单的接口，便于机器人功能的无缝集成。
6. **快速开发** ：可以在十分钟内创建互动和控制体验。
7. **教学示例** ：提供详细的教程和示例，帮助用户更快上手。
8. **历史存储** ：本地存储对话历史，方便回顾和参考。


##### 快速开始指南

1. **克隆仓库** ：

git clone https://github.com/Auromix/ROS-LLM.git


2. **安装依赖** ：

cd ROS-LLM/llm_install
bash dependencies_install.sh


3. **配置OpenAI设置** ：

cd ROS-LLM/llm_install
bash config_openai_api_key.sh


4. **配置AWS设置（可选）** ：

cd ROS-LLM/llm_install
bash config_aws.sh


5. **配置OpenAI Whisper设置（可选）** ：

pip install -U openai-whisper
pip install setuptools-rust


6. **构建工作区** ：

cd <your_ws>
rosdep install --from-paths src --ignore-src -r -y
colcon build --symlink-install


7. **运行演示** ：

source <your_ws>/install/setup.bash
ros2 launch llm_bringup chatgpt_with_turtle_robot.launch.py


8. **开始监听** ：

ros2 topic pub /llm_state std_msgs/msg/String "data: 'listening'" -1