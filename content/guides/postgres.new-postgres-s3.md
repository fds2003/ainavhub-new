---
title: "postgres.new"
date: "2024-01-01 00:00:00+08:00"
description: 'postgres.new postgres.new postgres.new '
slug: postgres.new-postgres-s3
tags:
- indexeddb
- csv
- llm
- wasm
- pglite
draft: false
related_tools:
- index
- rllm
- onefilellm
- llmanager
- llm.pdf
---

## postgres.new

**postgres.new简介**

postgres.new 是一个可在浏览器内运行的Postgres数据库沙盒环境，配备人工智能助手。用户可以即时创建无限数量的Postgres数据库，这些数据库直接在浏览器中运行。未来，该平台还将支持将数据库部署到S3。

每个数据库都与一个大型语言模型（LLM）相结合，使其具有多种有趣的使用场景，包括：

* 拖拽导入CSV（动态生成表格）
* 生成和导出报告
* 生成图表
* 构建数据库图形


**工作原理**

postgres.new中的所有查询都直接在浏览器中运行，而无需依赖远程的Postgres容器或WebSocket代理。这是通过[PGlite](<https://pglite.dev/>)，即Postgres的WASM版本实现的，能够直接在浏览器中运行。每创建一个数据库，都会启动一个新的PGlite实例，最终提供一个功能齐全的Postgres数据库。数据存储在IndexedDB中，确保刷新后数据变化能够持久保存。

**使用场景**

postgres.new适合以下场景：

1. **快速原型开发** ：用户可以迅速创建和测试数据库，无需复杂的设置。
2. **教育培训** ：适合学习数据库操作和管理的学生及从业人员。
3. **数据分析** ：用户可以快速导入数据并生成可视化图表和报告，方便分析和展示。
4. **开发者测试** ：开发者可以用来测试查询和数据库结构，而不影响正式环境。


通过postgres.new，用户可以轻松地在浏览器中进行各种数据库操作，结合AI的能力，提升了数据处理的效率和便利性。