---
title: "Turbular Turbular"
date: "2024-01-01 00:00:00+08:00"
description: Turbular ， Turbular ： Turbular ？ Turbular (Model Context Protocol, MCP)
  ， (LLM) 。， LLM ...
slug: turbular-model-context-protocol-mcp
tags:
- llm
- redshift
- basedbconnector
- context
- model
draft: false
related_tools:
- rllm
- onefilellm
- llmanager
- llm.pdf
- translatebookwithllm
---

## Turbular

好的，我来用中文总结一下这段关于 Turbular 的信息：

**Turbular 是什么？**

Turbular 是一个开源的模型上下文协议 (Model Context Protocol, MCP) 服务器，旨在为语言模型 (LLM) 提供无缝的数据库连接能力。简单来说，它可以让 LLM 更方便地与各种类型的数据库进行交互。

**Turbular 的主要功能和特点：**

* **支持多种数据库** : 通过一个统一的 API 接口连接到 PostgreSQL、MySQL、SQLite、BigQuery、Oracle、MS SQL 和 Redshift 等多种数据库。
* **模式规范化** : 自动规范化数据库模式，以使其更符合 LLM 的使用习惯。
* **安全连接** : 支持 SSL 和各种身份验证方法，保证连接安全。
* **高性能** : 优化 LLM 生成的查询，提高查询效率。
* **查询转换** : 允许 LLM 基于规范化的数据库布局生成查询，然后将这些查询转换为原始的非规范化形式。
* **Docker 支持** : 可以使用 Docker 和 Docker Compose 轻松部署。
* **易于扩展** : 可以通过扩展 `BaseDBConnector` 接口轻松添加新的数据库提供程序。


**如何快速开始使用 Turbular？**

文档提供了两种安装方法：

* **使用 Docker (推荐)** : 按照文档中的步骤，使用 Docker Compose 快速启动 Turbular 开发环境。
* **手动安装** : 安装 Python 3.11+，然后使用 `pip` 安装依赖项，最后运行服务器。


**Turbular 提供的 API 功能：**

Turbular 提供了一系列 API 接口，主要包括：

* **数据库操作** :
* `POST /get_schema`: 获取数据库模式，方便 LLM 理解数据库结构。
* `POST /execute_query`: 执行 SQL 查询，并返回结果。
* **文件管理** :
* `POST /upload-bigquery-key`: 上传 BigQuery 服务帐户密钥文件。
* `POST /upload-sqlite-file`: 上传 SQLite 数据库文件。
* **实用工具** :
* `GET /health`: 健康检查，确认 API 是否正常运行。
* `GET /supported-databases`: 获取所有支持的数据库类型列表。


**适用场景：**

Turbular 适用于任何需要 LLM 与数据库进行交互的 AI 应用。例如，可以使用它来构建以下应用：

* **智能问答系统** : LLM 可以查询数据库，回答用户提出的问题。
* **数据分析应用** : LLM 可以生成 SQL 查询，分析数据库中的数据。
* **自动化报告生成** : LLM可以根据数据库中的数据生成报告。


**如何贡献代码：**

文档鼓励大家参与贡献，可以通过提交 Issue、Pull Request、改进文档等方式参与。

**未来发展路线图：**

Turbular 团队计划在未来增加更多功能，包括：

* 增加测试、格式化和提交钩子
* 增加 SSH 支持数据库连接
* 使用 Steampipe 添加 API 作为数据源
* 为服务器已连接的数据库启用本地模式保存
* 增加更多数据源（Snowflake、MongoDB、Excel 等）
* 为路由添加身份验证保护


总而言之，Turbular 旨在简化 LLM 与数据库的集成，提供一个通用的接口，并处理了模式规范化和查询优化等问题。对于需要构建基于数据库的 LLM 应用的开发者来说，Turbular 是一个很有用的工具。