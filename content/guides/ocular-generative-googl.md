---
title: "Ocular AI Ocular AI Ocular AI"
date: "2024-01-01 00:00:00+08:00"
description: 'Ocular AI Ocular AI  Ocular AI '
slug: ocular-generative-googl
tags:
- elastic
- elv2
- license
- ocular
- google
draft: false
related_tools:
- google search console mcp server for seos
- google ads mcp
- google sheets mcp
- google analytics mcp server
- google search tool
---

## Ocular AI

##### Ocular AI 概述

###### 介绍

Ocular AI 是一组模块和工具，可让用户快速构建功能丰富、可靠且高效的生成式人工智能（Generative AI）驱动的搜索平台，而无需重新设计搜索架构。该平台旨在帮助用户在几天内而不是几个月内创建定制的内部搜索。

###### 主要功能

* **类似Google的搜索界面** ：用户可以轻松找到所需内容。
* **应用市场** ：连接到用户喜欢的所有应用。
* **自定义连接器** ：允许用户为专有数据源构建自定义连接器。
* **可定制的模块化基础架构** ：用户可以将自定义的语言模型、向量数据库等集成到Ocular中。
* **治理引擎** ：包括基于角色的访问控制和审计日志等功能。


###### 使用场景

* **企业内部搜索** ：适用于需要快速、精准搜索公司内部文档、电子邮件、项目管理工具等信息的企业。
* **数据集成** ：通过自定义连接器从不同的应用和数据源中提取和索引数据，支持综合信息查询。
* **权限管理** ：通过治理引擎设置不同用户的访问权限和审计日志，确保数据安全和合规性。


###### 开源与付费

Ocular的代码库采用[Elastic License 2.0 (ELv2)](<https://github.com/OcularEngineering/ocular/blob/main/LICENSE>)。用户若对Ocular云托管或自托管企业版感兴趣，可以预约 [会议](<https://calendly.com/louis-murerwa>) 了解更多信息。

###### Docker本地部署

1. 克隆Ocular目录：

git clone https://github.com/OcularEngineering/ocular.git && cd ocular


2. 在根目录中文件`env.local`中添加所需的Open AI环境变量。
3. 运行Docker：

docker compose -f docker-compose.local.yml up --build --force-recreate


部署完成后，可以通过 `http://localhost:3001/create-account` 访问本地部署的Ocular实例。


###### 贡献

Ocular欢迎社区贡献。用户可以查看[贡献指南](<https://github.com/OcularEngineering/ocular/blob/main/CONTRIBUTING.md>)了解如何开始。

###### 加入社区

用户可以加入Ocular的 [Slack](<https://join.slack.com/t/ocular-ai/shared_invite/zt-2g7ka0j1c-Tx~Q46MjplNma2Sk2Ruplw>) 提出问题和交流。

通过这些功能和特点，Ocular AI智能搜索平台能够满足不同企业和用户的多样化搜索需求，提升信息化管理效率。