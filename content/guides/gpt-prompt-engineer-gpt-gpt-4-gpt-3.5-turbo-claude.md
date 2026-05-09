---
title: "gpt-prompt-engineer"
date: "2024-01-01 00:00:00+08:00"
description: gpt-prompt-engineer gpt-prompt-engineer  gpt-prompt-engineer
slug: gpt-prompt-engineer-gpt-gpt-4-gpt-3.5-turbo-claude
tags:
- claude
- haiku
- opus
- gpt-4
- gpt-prompt-engineer
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## gpt-prompt-engineer

# gpt-prompt-engineer

[![Twitter Follow](https://img.shields.io/twitter/follow/mattshumer_?style=social)](<https://twitter.com/mattshumer_>) [![Open Main Version In Colab](https://colab.research.google.com/assets/colab-badge.svg)](<https://colab.research.google.com/github/mshumer/gpt-prompt-engineer/blob/main/gpt_prompt_engineer.ipynb>) [![Open Classification Version In Colab](https://colab.research.google.com/assets/colab-badge.svg)](<https://colab.research.google.com/drive/16NLMjqyuUWxcokE_NF6RwHD8grwEeoaJ?usp=sharing>)

## 简介

`gpt-prompt-engineer`是一个旨在优化GPT提示生成的工具。其工作原理是通过提供任务描述和测试用例，系统生成、测试并排名多种提示，以找到表现最佳的提示。这个过程利用了GPT-4、GPT-3.5-Turbo或Claude 3 Opus模型，并提供了一种自动生成测试用例和允许用户定义多个输入变量的功能，从而增强了灵活性和效率。

##### 主要功能

* **提示生成** ：基于提供的使用案例和测试用例使用GPT模型生成多种可能的提示。
* **提示测试** ：系统对每个生成的提示进行测试，并使用ELO评分系统进行排名。
* **分类版本** ：专为分类任务设计，评估测试用例的正确性并提供每个提示的评分表。
* **Claude 3 Opus版本** ：利用Anthropic的Claude 3 Opus模型自动生成测试用例并支持多个输入变量。
* **转换版本** ：使用Claude 3 Opus生成的高质量示例指导Claude 3 Haiku生成输出，从而提高效率并降低生成成本。


## 使用场景

`gpt-prompt-engineer`适用于多个使用场景，包括但不限于：

1. **营销文案优化** ：通过生成和优化广告文案、社交媒体帖子等。
2. **客户服务自动化** ：优化客服聊天机器人回答用户提问的提示。
3. **内容生成** ：根据主题自动生成博客文章、新闻简讯等。
4. **分类任务** ：对情感分析、文本分类等任务中的提示进行优化。
5. **邮件生成** ：自动生成高度个性化的电子邮件回复。


## 使用方法

1. 打开Google Colab中的笔记本或本地Jupyter笔记本。
2. 添加OpenAI API或Anthropic API密钥。
3. 定义你的使用案例和测试用例。
4. 生成多个提示，并使用`generate_optimal_prompt`函数对其进行测试和排名。
5. 查看最终ELO评分表，选择表现最佳的提示。


## 贡献

欢迎贡献，可以考虑的方向包括：

* 生成不同风格的系统提示，以覆盖更多的情况。
* 自动生成测试用例。
* 扩展分类版本以支持更多类别。


## 联系方式

Matt Shumer - [@mattshumer_](<https://twitter.com/mattshumer_>) 项目链接: [https://github.com/mshumer/gpt-prompt-engineer](<url>)

总之，`gpt-prompt-engineer`是一个强大且灵活的工具，适用于多种文本生成和优化任务，能够显著提升提示的质量和执行效果。