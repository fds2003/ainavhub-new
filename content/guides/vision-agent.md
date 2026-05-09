---
title: "Vision Agent Vision Agent Vision Agent"
date: "2024-01-01 00:00:00+08:00"
description: 'Vision Agent Vision Agent  Vision Agent '
slug: vision-agent
tags:
- vision
- agent
- openai
draft: false
related_tools:
- r1-onevision
- visionreward
- gpt-4 turbo with vision
- computer vision and sports
- claude vision object detection
---

## Vision Agent

Vision Agent 是一个帮助用户利用代理框架生成代码来解决视觉任务的库。当前许多视觉问题可能需要数小时甚至数天才能解决，用户必须找到合适的模型，弄清楚如何使用它，并编程以完成所需的任务。Vision Agent 旨在通过允许用户以文本描述其问题，并由代理框架生成解决这些任务的代码，从而提供秒级解决方案的体验。

##### 使用场景

1. **图像分析与处理** ：Vision Agent 可以根据用户输入的文本描述，自动生成处理图像的代码。例如，计算图像中某个对象所占的面积比例。
2. **模型生成与调试** ：用户可以使用 Vision Agent 生成和调试自定义的检测器或工具，并根据需求修改或扩展这些工具。
3. **快速原型设计** ：用户能够快速生成处理视觉任务的代码，适用于需要快速验证概念的场景。
4. **自动化脚本生成** ：减少手动编写复杂脚本的时间，提高开发效率。


##### 主要功能

* **即时代码生成** ：通过描述问题，瞬间生成处理任务的代码。
* **多种工具支持** ：包含本地和托管的多种工具，用户也可以自定义工具。
* **调试和工作流支持** ：提供详细的调试信息和工作流结果，帮助理解和优化生成的代码。
* **云平台支持** ：支持使用 OpenAI 和 Azure OpenAI 的 API 进行代码生成和模型推理。


##### 安装与使用

1. 安装库：

pip install vision-agent


2. 设置 OpenAI API 密钥：

export OPENAI_API_KEY="your-api-key"


3. 使用示例：

from vision_agent.agent import VisionAgent
agent = VisionAgent()
code = agent("What percentage of the area of the jar is filled with coffee beans?", media="jar.jpg")


##### 自定义工具

用户还可以注册自定义工具，以进行特定的图像处理任务：


import vision_agent as va
import numpy as np

@va.tools.register_tool(imports=["import numpy as np"])
def custom_tool(image_path: str) -> str:
return np.zeros((10, 10))


##### Azure OpenAI 设置

如果使用 Azure OpenAI，需要设置相应的环境变量：


export AZURE_OPENAI_API_KEY="your-api-key"
export AZURE_OPENAI_ENDPOINT="your-endpoint"


然后初始化 Vision Agent：


import vision_agent as va
agent = va.agent.VisionAgent(
planner=va.llm.AzureOpenAILLM(),
coder=va.lmm.AzureOpenAILMM(),
tester=va.lmm.AzureOpenAILMM(),
debugger=va.lmm.AzureOpenAILMM(),
)