---
title: "Tap4 AI Web UI Tap4 AI Web UI Tap4 AI Web UI"
date: "2024-01-01 00:00:00+08:00"
description: 'Tap4 AI Web UI Tap4 AI Web UI  Tap4 AI Tools Directory '
slug: tap4-web-ui-tools-directory
tags:
- markdown
- directory
- tap4
- submit
- i18n
draft: false
related_tools:
- director
- mcp directory
- noderag
- nanodeepresearch
- node.js sandbox mcp server
---

## Tap4 AI Web UI

Tap4 AI Web UI 是由 [Tap4 AI Tools Directory](<https://tap4.ai>) 构建的开源人工智能工具目录。该项目旨在帮助用户轻松构建属于自己的AI工具目录。用户可以通过克隆项目并一键部署到Vercel来快速建立自己的AI工具网站，并通过更新项目中的dataList来添加自己的AI工具。

##### 功能特点

* 支持国际化
* SEO友好（支持i18n）
* 自动生成sitemap.xml（支持多语言）
* 快速部署
* 基于NEXT 14和React服务器组件
* 使用Supabase无服务器数据库


##### 快速开始

###### 部署到Vercel

可以通过点击Vercel按钮一键部署。

###### 本地运行

需要提前安装node、nvm和pnpm。然后通过克隆项目、在Supabase注册账号并创建项目、设置环境变量及dev模式下运行来实现本地运行。

##### 内容更新

首页或探索页面的数据更新可通过修改 `lib/data.ts` 中的 `dataList` 进行；详细页面支持Markdown格式，则通过更新 `lib/data.ts` 中的 `detailList` 实现。

##### 提交网站

可以通过 `submit` 页面提交网站，提交的数据将存储到Supabase项目中。

##### 使用场景

Tap4 AI Web UI 适用于企业或个人创建和管理自己的AI工具目录，方便汇总和展示各种AI工具及资源；它还适用于开发者希望快速搭建一个SEO友好的多语言支持的网站，通过开源代码进行二次开发和个性化定制。