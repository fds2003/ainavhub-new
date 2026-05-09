---
title: "AskAITools"
date: "2024-01-01 00:00:00+08:00"
description: 'AskAITools AskAITools AskAITools (https://askaitools.ai) '
slug: askaitools-https-askaitools.ai
tags:
- css
- askaitools.ai
- text-embedding-3
- https
- askaitools
draft: false
related_tools:
- honghongai - honghongai是一个基于google的gemini大模型、借鉴哄哄模拟器概念的开源免费版本，通过原始提示实现功能，技术栈包括next.js、vercel
  ai sdk、tailwindcss等，支持通过环境变量配置，鼓励社区贡献，并基于mit许可证开源。
- next.js ai chatbot x supabase
- vercel ai sdk 3.0
- mcp server for postgresql
- openai agents sdk
---

## AskAITools

##### AskAITools简要介绍及使用场景

**AskAITools (<https://askaitools.ai>)** 是一个专为AI产品领域量身定制的高级搜索引擎项目。其主要目标是通过提供准确、全面、快速和智能的搜索体验，彻底改变用户发现AI产品的方式。通过AskAITools，寻找完美的AI解决方案变得前所未有的简单。

**AskAITools桌面版本截图:** [![AskAITools桌面版本截图](https://public-files.askaitools.ai/MainScreenshot.png)](<https://askaitools.ai>)

**AskAITools移动版本截图:** [![AskAITools移动版本截图](https://public-files.askaitools.ai/MobileScreenshot.png)](<https://askaitools.ai>)

该项目有两个版本：一个是功能丰富的商业版，另一个是社区版。社区版提供了一个具有基础前端界面和搜索功能的坚实基础，其代码完全开源，开发者可以在此框架上轻松集成自己的数据，快速构建专业的垂直搜索引擎或企业内部文件搜索系统。

##### 项目架构和技术栈

* **前端** : Next.js
* **部署** : Vercel
* **样式** : Tailwind CSS
* **数据库** : Supabase
* **关键词搜索** : PostgreSQL / Supabase全文搜索引擎
* **语义搜索** : Pgvector / Supabase矢量数据库
* **语义矢量生成** : OpenAI text-embedding-3模型


##### 使用指南

1. 收集并构建你的特定领域数据。可以参考[我们的数据表结构](<./supabase/migrations/20240506_init.sql>)获取所需字段的指导。
2. 根据需要修改`item`表结构，在Supabase中创建该表并导入数据。
3. 复制环境变量模板`.env.local.example`并重命名为`.env.local`，填写你的Supabase和OpenAI配置信息，若需要提供代理信息。
4. 调整搜索参数和策略，修改`./app/pages/index.tsx`、`./app/pages/api/embedding_search.ts`和`./supabase/migrations/20240506_init.sql`中的相关信息。
5. 参考`20240506_init.sql`在Supabase中创建两个搜索功能。
6. 进入`app`目录，运行`yarn install`安装依赖，然后运行`yarn dev`启动本地开发环境进行代码调试。
7. 按照Vercel官方文档将你的项目部署到Vercel。
8. 部署后，庆祝你的成功 🎉


##### 使用场景

1. **企业内部文件搜索系统** ：
* 大型企业可以利用AskAITools搭建内部文件搜索系统，提高员工查找信息的效率。
2. **垂直领域的专业搜索引擎** ：
* 各行各业的企业或开发者可以使用AskAITools构建针对特定领域的专业搜索引擎，如法律文档、医学研究等。
3. **AI产品目录网站** ：
* 可以基于该开源项目开发AI产品目录网站，帮助用户快速找到合适的AI产品和解决方案。


##### 使用限制

1. 所有基于该项目的衍生项目必须在用户界面主页或文档主页明显地注明“AskAITools”的名称和开源地址。最简单的方法是保留页脚中的“Powered by AskAITools”组件。
2. 部署衍生自此开源项目的项目时，请避免使用AskAITools品牌名作为你的产品/项目名。此限制不适用于[“AskAITools商业版”](<https://askaitools.ai>)。
3. 如果您想利用此开源项目开发AI产品搜索平台、AI产品目录网站或其他与AskAITools商业版功能类似的项目，请重新设计和开发前端页面。否则，Google可能会将后启动的网站识别为抄袭，影响其搜索流量的获取。