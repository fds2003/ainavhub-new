---
title: "LangGraph-GUI"
date: "2024-01-01 00:00:00+08:00"
description: 'LangGraph-GUI LangGraph-GUI  LangGraph-GUI '
slug: langgraph-gui-ollama-gui-json-langgraph
tags:
- langchain
- python
- start
- gui
- condition
draft: false
related_tools:
- langchain-searxng
- langchain swift
- langchain
- python a2a
- claude code sdk for python
---

## LangGraph-GUI

##### LangGraph-GUI 简介

LangGraph-GUI 是一个用于管理和可视化节点-边工作流的用户友好界面。它在本地支持使用Ollama的语言模型来创建、编辑和运行工作流。这个基于节点-边的GUI可以导出为JSON文件，以实现更好的解耦。

**如果想了解更多关于LangGraph的信息，请参考[LangGraph-learn](<https://github.com/LangGraph-GUI/LangGraph-learn>)。**

![LangGraph-GUI](cover.webp)

##### 主要功能

###### 起始节点 (Start Node)

工作流图（JSON格式）只能有一个起始节点，该节点对应LangGraph的START节点。

![](images/start.webp)

###### 步骤节点 (Step Node)

步骤节点对应LangGraph的add_node操作，你可以从左侧节点（右端口）拖动边线到右侧节点（左端口）。如果你将两个节点相互连接，可以创建一个循环。

![](images/step.webp)

###### 带工具的步骤节点 (Step Node with Tool)

带工具的步骤节点会调用函数，工具定义需要一个工具节点。

![](images/use_tool.webp)

###### 工具节点 (Tool Node)

工具节点需要编写真实的Python函数代码，并且需要使用`@tool`装饰器，类似于LangChain的自定义工具。

![](images/tool.webp)

###### 条件节点 (Condition Node)

条件节点对应LangGraph的conditional_edge，绿色边表示为真路径，红色边表示为假路径。

![](images/condition.webp)

##### 环境设置

###### 前端GUI

安装前端GUI所需的依赖：


pip install PySide6


###### 后端

安装LangGraph所需的依赖：


pip install langchain langchain-community langchain-core langgraph


##### 运行应用程序

###### 前端

启动前端GUI：


python frontend.py


这将允许你读取和写入表示CrewAI的DAG工作流的JSON文件。

###### 后端

如果需要运行本地LLM，首先需要启动Ollama：


ollama serve


然后使用指定的模型本地运行后端：


python backend.py --graph example.json --llm gemma2 --tee output.log


该命令将解析指定的JSON文件为图形。

##### 构建应用程序

###### 前端GUI

将前端GUI构建为独立可执行文件的步骤：

1. 安装PyInstaller：

pip install pyinstaller


2. 导航到源码目录：

cd src


3. 使用必要的hooks运行PyInstaller：

pyinstaller --onefile --additional-hooks-dir=. frontend.py


通过这些步骤，你可以轻松地设置、运行和构建LangGraph-GUI。