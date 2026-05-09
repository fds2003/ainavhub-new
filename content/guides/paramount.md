---
title: "paramount paramount Paramount"
date: "2024-01-01 00:00:00+08:00"
description: 'paramount Paramount  Paramount '
slug: paramount
tags:
- history
- my
- user
- return
- function
draft: false
related_tools:
- find my kids
- mycoder
- smythos
- my tools.ai-ai工具箱，提供聊天、图像生成、代码生成、音乐生成等功能
- automouser
---

## paramount

## Paramount 简介

Paramount 是一个工具，帮助专家评估 AI 聊天记录，其主要功能包括：

* 质量保证
* 真实数据捕捉
* 自动化回归测试


##### 使用场景

1. **质量保证** ：通过评估 AI 聊天记录，确保对话质量达到预期标准。
2. **真实数据捕捉** ：收集对话数据，用于改进和训练模型。
3. **自动化回归测试** ：自动检测模型更新后的性能回归情况。


##### 快速上手指南

1. 安装软件包：


pip install paramount


2. 装饰你的 AI 函数：


@paramount.record()
def my_ai_function(message_history, new_question):
# <调用大语言模型>
new_message = {'role': 'user', 'content': new_question}
updated_history = message_history + [new_message]
return updated_history


3. 在 `my_ai_function(...)` 运行多次后，启动 Paramount UI 以评估结果：


paramount


专家现在可以评估记录并跟踪准确性的改进。

Paramount 完全在你的私有环境中离线运行。

##### 示例使用

安装后，运行 `python example.py` 查看最小工作示例。

##### 配置

为了成功配置，你需要定义哪些输入和输出参数代表 LLM 中使用的聊天列表。

这可以通过项目根目录的 `paramount.toml` 配置文件来完成。首次运行时该文件会自动生成默认配置。


[record]
enabled = true
function_url = "http://localhost:9000"

[db]
type = "csv"  # 也可选择 postgres
[db.postgres]
connection_string = ""

[api]
endpoint = "http://localhost"
port = 9001
split_by_id = false
identifier_colname = ""

[ui]

meta_cols = ['recorded_at']
input_cols = ['args__message_history', 'args__new_question']
output_cols = ['1', '2']

chat_list = "output__1"
chat_list_role_param = "role"
chat_list_content_param = "content"


更多详细配置可以参考项目中的 `paramount.toml.example` 文件。

##### Docker 部署

使用 `Dockerfile.server` 可以将整个包（包括客户端）容器化并部署。需要动态挂载 `paramount.toml` 文件到容器。


docker build -t paramount-server -f Dockerfile.server .
docker run -dp 9001:9001 paramount-server


##### 许可证

本项目为个人使用提供 [GPL 许可证](<https://github.com/ask-fini/paramount/blob/main/LICENSE>)。每月调用次数超过 1000 次或员工数量超过 100 人的公司需获取商业许可证。