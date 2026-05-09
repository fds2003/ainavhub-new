---
title: "Buildware"
date: "2024-01-01 00:00:00+08:00"
description: 'Buildware Buildware  Buildware '
slug: buildware-pr-pull-request
tags:
- git
- npm
- mckaywrigley
- env.example
- postgresql
draft: false
related_tools:
- vibegit
- gitfriend
- gitagent
- claude github webhook
- github copilot
---

## Buildware

##### Buildware 简介

Buildware 是一个通过AI帮助你更快交付代码的工具。它创建了一个代码指令系统，你只需提供一个问题，便能得到一个由AI生成的PR（Pull Request）。

##### 使用场景

Buildware 的主要使用场景包括但不限于：

1. **软件开发** ：开发人员可以使用Buildware自动生成解决特定问题的代码PR，加速开发过程。
2. **代码维护** ：对于现有项目中的Bug修复或功能增强，可以通过Buildware快速生成相关代码。
3. **团队协作** ：团队成员可以使用Buildware来快速分享和审核代码，提升团队协作效率。
4. **学习和培训** ：新手开发者可以通过Buildware了解如何解决常见编程问题，快速上手实际项目。


##### 设置和使用步骤

1. **克隆仓库** ：

git clone https://github.com/mckaywrigley/buildware.git


2. **安装依赖** ：

npm install


3. **设置环境变量** ： 复制 `.env.example` 文件到 `.env.local` 并填入必要的变量。

4. **设置数据库** ：

* 建议使用 Supabase 或 Neon 作为 PostgreSQL 数据库。
* 运行数据库迁移：

npm run migrate


5. **设置 GitHub 个人访问令牌 (PAT)** ：

* 生成新的 GitHub PAT，并更新 `.env.local` 文件中的 `GITHUB_PAT`。
6. **运行应用** ：

npm run dev


你还可以通过 Vercel 一键部署简单版本的 Buildware。

##### 更新与未来计划

* 即将推出与 Linear 集成的高级版本，以及本地代码库模式和团队支持功能。
* 更新的高级版本设置指南即将发布。


通过上述步骤，即可快速开始使用 Buildware，提高代码开发效率。若你觉得 Buildware 对你有帮助，也可以通过 GitHub 赞助来支持其开源工作。