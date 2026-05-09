---
title: "finrobot finrobot FinRobot"
date: "2024-01-01 00:00:00+08:00"
description: finrobot FinRobot：AI FinRobotAI，FinGPT，。AI，，，。 AI AI...
slug: finrobot-fingpt
tags:
- cot
- fingpt
- dataops
- llms
- llm
draft: false
related_tools:
- picotron
- fingpt
- lms
- screen to action using llms
- llms进行函数调用和数据提取的技能
---

## finrobot

## FinRobot：一个适用于金融应用的大语言模型开源AI代理平台

**FinRobot** 是一个综合性的AI代理平台，超越了原有的FinGPT，旨在满足金融行业的多元化需求。它集成了各种AI技术，不仅仅局限于语言模型，展现了平台的多功能性和适应性，能够处理金融行业的多种复杂任务。

##### AI代理的概念

AI代理是指使用大语言模型作为“大脑”的智能实体，这些代理能够感知环境、做出决策并执行行动。与传统的人工智能不同，AI代理能够独立思考并使用工具来逐步实现给定的目标。

## FinRobot生态系统

##### FinRobot的整体框架分为四个不同的层次，每一层次都针对金融AI处理和应用的特定方面：

1. **金融AI代理层** ：包括金融链式思维（CoT）提示，增强复杂分析和决策能力。市场预测代理、文件分析代理和交易策略代理利用CoT将金融难题分解为逻辑步骤，从而得到精确的行动指南。
2. **金融大型语言模型（LLMs）算法层** ：配置和使用针对特定领域和全球市场分析进行特殊调整的模型。
3. **LLMOps和DataOps层** ：以多源集成策略选择最适合特定金融任务的LLMs，利用各种最先进的模型。
4. **多源LLM基础模型层** ：支持多种通用和专门LLMs的即插即用功能。


##### FinRobot的代理工作流程

1. **感知** ：采集并解释金融市场数据、新闻及经济指标，使用高级技术将数据结构化以便深入分析。
2. **大脑** ：作为核心处理单元，通过LLMs和金融链式思维（CoT）过程生成结构化指令。
3. **行动** ：执行来自大脑模块的指令，使用工具将分析的见解转化为可执行的结果，例如交易、投资组合调整、生成报告或发送警报，从而对金融环境产生实际影响。


##### FinRobot的智能调度器

智能调度器确保模型多样性，并优化各任务中选择最合适的LLM，实现最佳集成。

* **导演代理** ：协调任务分配过程，确保任务分配给表现优异且适合特定任务的代理。
* **代理注册** ：管理代理在系统中的注册及其可用性，促进高效的任务分配过程。
* **代理适配器** ：根据特定任务调整代理功能，增强其性能和系统集成。
* **任务管理器** ：管理和存储针对各种金融任务的不同通用与精调的LLMs代理，定期更新以确保相关性和效力。


## 使用场景

1. **市场预测代理** ：输入公司的股票代码、近期基本财务状况和市场新闻，预测其股票走势。例如，可以预测某公司在未来一周内的股价变化并提供分析支持。
2. **金融分析代理生成报告** ：输入公司的10-K报表、财务数据和市场数据，生成公司研究报告。例如，为微软公司生成年度财务分析报告并将其格式化为PDF。
3. **交易策略代理** ：使用多模态能力进行交易策略的设计和优化。


## 安装


conda create --name finrobot python=3.10
conda activate finrobot
git clone https://github.com/AI4Finance-Foundation/FinRobot.git
cd FinRobot
pip install -U finrobot
pip install -e .


设置API密钥并开始使用有关教程或演示项目。


# 示例代码片段
import autogen
from finrobot.utils import get_current_date, register_keys_from_json
from finrobot.agents.workflow import SingleAssistant

# 读取OpenAI API密钥
llm_config = {
"config_list": autogen.config_list_from_json(
"../OAI_CONFIG_LIST",
filter_dict={"model": ["gpt-4-0125-preview"]},
),
"timeout": 120,
"temperature": 0,
}
register_keys_from_json("../config_api_keys")

# 执行市场预测分析
company = "NVDA"
assistant = SingleAssistant("Market_Analyst", llm_config, human_input_mode="NEVER")
assistant.chat(
f"Use all the tools provided to retrieve information available for {company} upon {get_current_date()}. Analyze the positive developments and potential concerns of {company} "
"with 2-4 most important factors respectively and keep them concise. Most factors should be inferred from company related news. "
f"Then make a rough prediction (e.g. up/down by 2-3%) of the {company} stock price movement for next week. Provide a summary analysis to support your prediction."
)


通过以上安装步骤和示例代码，用户可以轻松地开始使用FinRobot来应对多种金融任务和应用场景。