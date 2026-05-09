---
title: "ClaudeSync"
date: "2024-01-01 00:00:00+08:00"
description: ClaudeSync ClaudeSync Claude.ai
slug: claudesync-claude.ai
tags:
- claude.ai
- pi
- gitignore
- cron
- cli
draft: false
related_tools:
- hospital_multiagent_system
- pixelhacker
- picodeepresearch
- dualpipe
- potpie
---

## ClaudeSync

ClaudeSync是一个强大的工具，专为将本地文件与[Claude.ai](<https://www.anthropic.com/claude>)项目无缝同步而设计。

## 概述与范围

ClaudeSync弥合了本地开发环境与Claude.ai知识库之间的差距。其主要功能包括：

* 实时同步Claude.ai项目
* 提供命令行界面（CLI）便于管理
* 支持多个组织和项目
* 自动处理文件创建、修改和删除
* 基于.gitignore规则的智能文件过滤
* 支持可配置的同步间隔与定时任务（cron job）
* 无缝整合现有工作流程
* 可选的双向同步功能
* 通过CLI进行配置管理
* 聊天和工件同步管理


**重要提示** ：ClaudeSync需要Claude.ai专业版计划才能正常运作，请确保您有一个活跃的专业订阅。

## 使用场景

1. **软件开发和协作** ：实时同步本地代码库与Claude.ai项目，适用于团队协作开发。
2. **数据管理** ：自动处理文件的创建、修改和删除，确保数据的一致性。
3. **任务自动化** ：通过定时任务支持，实现自动化文件同步，减轻手动操作负担。
4. **双向同步** （实验性功能）：实现本地与远程项目的双向数据更新，但需注意可能的文件名修改和数据丢失风险。


## 安装和快速开始

1. 安装ClaudeSync：

pip install claudesync


2. 登录Claude.ai：

claudesync api login claude.ai


3. 选择一个组织：

claudesync organization select


4. 选择或创建一个项目：

claudesync project select
# 或者
claudesync project create


5. 开始同步：

claudesync sync


## 高级用法

* **API管理** ：登录、登出、设置上传延迟等。
* **组织管理** ：列出、选择活跃的组织。
* **项目管理** ：列出、创建、归档和选择项目。
* **文件管理** ：列出远程文件、文件同步。
* **聊天管理** ：列出、同步和删除聊天记录与工件。
* **配置管理** ：设置与获取配置值，查看当前状态。


##### 同步模式

###### 单向同步（默认）

默认情况下，ClaudeSync推送本地环境的更改到Claude.ai，确保本地文件是唯一数据源。

###### 双向同步（实验性）

允许远程Claude.ai项目的更改反映到本地，存在文件名修改和数据丢失的风险。

##### 定时同步

设置自动同步：


claudesync schedule


##### 服务提供商

ClaudeSync提供两种服务提供商与Claude.ai API互动：

1. **claude.ai（默认）** ：使用内置的Python库，不需额外依赖。
2. **claude.ai-curl** ：使用cURL，需在系统上安装cURL，适用于403错误等问题。


##### 自定义忽略文件

支持.claudeignore文件指定排除同步的文件，语法与.gitignore相同。

##### 故障排除

遇到403 Forbidden错误时，确认专业计划订阅，尝试重新登录或使用claude.ai-curl提供商。

## 贡献与交流

欢迎贡献，详情请见[贡献指南](<CONTRIBUTING.md>)。对于Bug报告和功能需求，请使用[GitHub Issues](<https://github.com/jahwag/claudesync/issues>)。开发讨论请加入[Discord服务器](<https://discord.gg/cCeA2Rng>)。

## 许可证

ClaudeSync采用MIT许可证，详情请见[LICENSE](<LICENSE>)。