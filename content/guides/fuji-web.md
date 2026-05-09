---
title: "fuji-web fuji-web Fuji-Web"
date: "2024-01-01 00:00:00+08:00"
description: fuji-web Fuji-Web  Fuji-Web
slug: fuji-web
tags:
- extensions
- key
- fuji-extension.zip
- fuji-web
- fuji
draft: false
related_tools:
- monkeycode
- kwai keye-vl
- monkeyocr
- fuji-web
- grok2api
---

## fuji-web

##### Fuji-Web 简介

###### 什么是 Fuji-Web？

Fuji-Web 是一个基于AI的全浏览器自动化工具。它能够理解用户意图，自动浏览网站，代替用户执行任务，并解释每一步操作。

###### 使用场景

Fuji-Web 适合以下一些情境：

1. **自动化重复性任务** ：如定期的数据抓取、网站监控等。
2. **网页测试** ：自动执行测试用例，提高测试效率。
3. **用户支持** ：执行顾客服务任务，如查询信息、填写表格等。
4. **教育和培训** ：用来示范和解释复杂的操作步骤。


###### 安装和运行

**下载和安装扩展**

1. 前往[发布页面](<https://github.com/normal-computing/fuji-web/releases>)下载最新版本的“fuji-extension.zip”。
2. 解压文件。
3. 在 Chrome 浏览器中加载扩展：
* 进入 `chrome://extensions/`
* 打开 `开发者模式`
* 点击 `加载已解压的扩展程序`
* 选择解压后的文件夹


**使用扩展**

1. 在浏览器右上角点击 Fuji 图标，打开侧边栏。
2. 创建或访问一个 [OpenAI API Key](<https://platform.openai.com/account/api-keys>)，并将其粘贴到提供的框中。此密钥将存储在浏览器中，并不会上传至第三方。
3. 导航到你希望 Fuji-Web 执行任务的网页，并输入任务指令。


###### 构建扩展

1. 确保你安装了 [Node.js](<https://nodejs.org/>)。开发在 Node v20 上进行，但也应兼容更低版本。
2. 克隆这个仓库。
3. 全局安装 `pnpm`：`npm install -g pnpm`
4. 运行 `pnpm install`
5. 运行 `pnpm dev` 启动开发服务器，或 `pnpm build` 构建扩展。


加载扩展时，需要加载由构建过程创建的 `dist` 文件夹。

###### 未来规划

* 为浏览器自动化框架如 Puppeteer、Playwright、Selenium 提供API
* 支持更复杂和跨标签页的工作流
* 增加对更多浏览行为的支持，如从下拉菜单选择、提取整个页面内容等
* 支持保存工作流
* 支持与他人共享工作流和指令
* 创建类似维基百科的知识库，用户可以共同创建知识提升 Fuji-Web 的性能


###### 问题排查

请参阅我们的[问题排查指南](<TROUBLESHOOTING.md>)以获取常见问题的帮助。

###### 贡献

若您对 Fuji-Web 有兴趣贡献，我们非常欢迎！请查看我们的[贡献指南](<CONTRIBUTING.md>)了解如何帮助、报告 bug、建议增强功能等。

我们还在 Discord 上设置了一个专门的 Fuji-Web 反馈频道：https://discord.gg/yfMjZ8udb5。

###### 致谢

* Fuji-Web 的图像注释方法受到微软 [UFO 论文](<https://arxiv.org/abs/2402.07939>)的启发。
* Fuji 在浏览器侧边栏运行的想法受到 [TaxyAI 零售]浏览器扩展的启发。我们也使用了其中的一些 UI 代码。
* Chrome 扩展的配置使用了非常棒的项目样板 [Jonghakseo/chrome-extension-boilerplate-react-vite](<https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite>)。
* Fuji 的 logo 来自 [Toss Face](<https://emojipedia.org/toss-face>) 表情设计集。