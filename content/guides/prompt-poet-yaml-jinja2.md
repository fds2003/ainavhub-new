---
title: "Prompt Poet Prompt Poet Prompt Poet"
date: "2024-01-01 00:00:00+08:00"
description: 'Prompt Poet Prompt Poet  Prompt Poet '
slug: prompt-poet-yaml-jinja2
tags:
- yaml
- getpass.getpass
- install
- rol
- poet
draft: false
related_tools:
- easycontrol_ghibli
- control plane for your ai agents
- deeproleplay
- adobe project music genai control
- finecontrolnet
---

## Prompt Poet

##### Prompt Poet 简介

Prompt Poet 是一个旨在简化和优化提示设计的工具，适用于开发人员和非技术用户。它采用低代码方法，通过 YAML 和 Jinja2 结合，允许用户灵活动态地创建提示，从而提高与人工智能模型互动的效率和质量。Prompt Poet 通过减少对字符串操作的工程时间，使用户能够更多地专注于为其用户打造最佳提示。

##### 安装


pip install prompt-poet


##### 基本用法

以下是一个基本用法示例，展示了如何使用 Prompt Poet 创建一个提示并与 ChatOpenAI 模型进行交互：


import os
import getpass
from prompt_poet import Prompt
from langchain import ChatOpenAI

# 如果需要设置 OPENAI_API_KEY，取消下面的注释。
# os.environ["OPENAI_API_KEY"] = getpass.getpass()

raw_template = """
- name: system instructions
role: system
content: |
你的名字是 {{ character_name }}，你应该对人类有帮助且无害。

- name: user query
role: user
content: |
{{ username }}: {{ user_query }}

- name: response
role: user
content: |
{{ character_name }}:
"""

template_data = {
"character_name": "助理角色",
"username": "杰夫",
"user_query": "你能帮我做作业吗?"
}

prompt = Prompt(
raw_template=raw_template,
template_data=template_data
)

model = ChatOpenAI(model="gpt-4o-mini")
response = model.invoke(prompt.messages)


##### 提示模板

Prompt Poet 的提示模板使用 YAML 结合 Jinja2。模板处理分为两个主要阶段：

1. 渲染：Jinja2 处理输入数据，执行控制流逻辑，验证数据并适当绑定变量，且评估模板中的函数。
2. 加载：渲染后生成结构化的 YAML 文件，YAML 结构包含重复的块，每个块封装为 Python 数据结构。这些块具有以下属性：
* 名称：易读的标识符。
* 内容：提示的一部分。
* 角色（可选）：区分不同用户或系统组件。
* 截断优先级（可选）：决定必要时的截断顺序，优先级相同的按出现顺序截断。


###### 使用场景

Prompt Poet 可以应用于各种场景，包括：

1. **基本问答机器人** ：通过定义系统指令、用户查询及回复提示，创建简单的问答机器人。
2. **历史消息截断** ：当上下文长度受限时，根据优先级截断历史消息，以确保新信息能被处理。
3. **用户模式调整** ：根据用户使用的当前模式（如音频或文本），调整系统指令。
4. **特定查询目标** ：在处理不同类型查询（如家庭作业帮助）时，动态插入上下文特定示例。


示例场景代码：


{% if modality == "audio" %}
- name: special audio instruction
role: system
content: |
{{ username }} 目前使用音频。保持你的答案简洁。
{% endif %}

{% if extract_user_query_topic(user_query) == "homework_help" %}
{% for homework_example in fetch_few_shot_homework_examples(username, character_name) %}
- name: homework_example_{{ loop.index }}
role: user
content: |
{{ homework_example }}
{% endfor %}
{% endif %}


综上所述，Prompt Poet 通过强大的模板系统和易用性，使不同专业背景的用户能够高效地创建和优化与 AI 模型交互的提示。