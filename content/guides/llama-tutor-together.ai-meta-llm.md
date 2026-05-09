---
title: "Llama Tutor Llama Tutor Llama Tutor"
date: "2024-01-01 00:00:00+08:00"
description: Llama Tutor Llama Tutor  AI
slug: llama-tutor-together.ai-meta-llm
tags:
- meta
- install
- azure
- bing
- example.env
draft: false
related_tools:
- meta agents research environments
- meta llama 3
- meta lingua
- meta 明天可能发布 llama 3.1 405b 模型
- azure devops mcp server
---

## Llama Tutor

Llama Tutor 是一个开源的AI个人导师，由 Llama 3 70B 和 Together.ai 提供技术支持。

## 技术栈

* Llama 3.1 70B 来自 Meta，用于大型语言模型（LLM）
* Together AI 用于LLM推理
* 使用 Next.js 和 Tailwind 进行开发
* Serper 提供搜索 API
* Helicone 用于可观测性
* Plausible 提供网站分析


## 使用步骤

1. Fork 或克隆这个仓库
2. 在 [Together AI](<https://dub.sh/together-ai>) 创建一个账号用于LLM
3. 在 [SERP API](<https://serper.dev/>) 或通过 Azure（[Bing Search API](<https://www.microsoft.com/en-us/bing/apis/bing-web-search-api>)）创建一个账号
4. 在 [Helicone](<https://www.helicone.ai/>) 创建一个账号用于可观测性
5. 创建一个 `.env` 文件（参考 `.example.env`），并替换为你的API密钥
6. 运行 `npm install` 和 `npm run dev` 以安装依赖和本地运行


## 未来任务

* 增加分享和复制按钮，用户可以在对话生成后点击
* 在聊天页面结束时增加潜在的后续问题和新的聊天
* 将页面拆分为两个页面，并添加底部区域
* 将所有图标移动到各自的TypeScript文件中
* 添加一个更详细的登陆页面，并有 GitHub 链接部分
* 在移动端增加一个漂亮的汉堡菜单
* 尝试 Vercel 的生成式 UI 功能
* 添加一个更好看的下拉菜单


## 使用场景

Llama Tutor 可以用于各种学习和教育场景，包括：

1. **个性化教育** ：为学生提供量身定制的学习路径和资源。
2. **作业辅导** ：帮助学生理解复杂问题和作业内容。
3. **考试准备** ：提供考试模拟和重点复习指南。
4. **语言学习** ：为学习新语言的用户提供对话练习和语法指导。
5. **职业发展** ：为职业培训和技能提升提供个性化建议。