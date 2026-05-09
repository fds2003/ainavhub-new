---
title: "Atomic Agents Atomic Agents Atomic Agents"
date: "2024-01-01 00:00:00+08:00"
description: Atomic Agents Atomic Agents Atomic Design
slug: atomic-agents-design-instructor-pydantic
tags:
- agents
- atomic-agents
- atomic
- pydantic
- cohere
draft: false
related_tools:
- openai agents sdk
- cloudflare agents
- agents tools
- news agents
- control plane for your ai agents
---

## Atomic Agents

Atomic Agents是一个模块化、可扩展且易于使用的框架，旨在创建强大的应用程序。它的设计理念来源于Atomic Design，专注于将组件单一化和精简化。基于Instructor和Pydantic，Atomic Agents提供了一套工具和代理，能够进行数据验证和序列化。

##### 安装方法

可以通过pip来安装Atomic Agents：


pip install atomic-agents


或者从代码库安装必要的依赖：


pip install -r requirements.txt
pip install -e .


##### 使用场景

Atomic Agents适用于需要创建复杂AI应用的场景，这些应用可以利用不同API资源（如OpenAI, Cohere, Anthropic, Gemini等）。框架设计允许开发者通过组合各种工具与代理来构建专门的解决方案。

##### 示例与文档

包括详细的用例和文档指导：

* 示例代码位于[examples](<./examples/>)目录中。
* API文档和指南可在[docs](<./docs/>)目录中找到。


##### 兼容性

依赖于Instructor包，支持多种API。对于本地不支持工具调用的服务器，可以设置为JSON模式来适配。

##### 贡献指南

贡献步骤如下：

1. Fork本仓库
2. 创建新分支 (`git checkout -b feature-branch`)
3. 进行更改
4. 提交更改 (`git commit -m 'Add some feature'`)
5. 推送分支 (`git push origin feature-branch`)
6. 提交Pull Request


##### 许可证

该项目基于MIT License，详情见[LICENSE](<LICENSE>)文件。