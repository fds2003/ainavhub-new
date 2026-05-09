---
title: "VSCode Reborn AI VSCode Reborn AI VSCode Reborn AI"
date: "2024-01-01 00:00:00+08:00"
description: 'VSCode Reborn AI VSCode Reborn AI  VSCode Reborn AI '
slug: vscode-reborn-visual-studio-code
tags:
- service
- openrouter
- azure
- vsx
- vscode
draft: false
related_tools:
- ai agent service toolkit
- customer service agents demo
- astra assistant api service
- openrouter-开源路由器,连接各种ai模型
- azure devops mcp server
---

## VSCode Reborn AI

##### VSCode Reborn AI 简介

VSCode Reborn AI 是一个为 Visual Studio Code 提供的扩展，利用 ChatGPT API 帮助用户编写、重构和优化代码。

##### 获取 VSCode Reborn AI

用户可以通过以下途径安装该扩展：

* 在 VSCode 扩展市场搜索 “VSCode Reborn AI”
* 直接安装：
* [VSCode Marketplace](<https://marketplace.visualstudio.com/items?itemName=chris-hayes.chatgpt-reborn>)
* [Open VSX Registry](<https://open-vsx.org/extension/chris-hayes/chatgpt-reborn>)


##### 该分支的由来

该扩展是已停用的 [vscode-chatgpt](<https://github.com/gencay/vscode-chatgpt>) 的一个分支。原作者 @gencay 后来发布了一个新的专有扩展 “Reborn AI: Genie AI”（[链接](<https://github.com/ai-genie/chatgpt-vscode>)）。相比之下，VSCode Reborn AI 是一个开源项目。

##### 本地 LLM 和代理

该扩展支持任何与 OpenAI API 兼容的工具，已测试的工具有：

* 本地 LLM：

* [text-generation-webui](<https://github.com/oobabooga/text-generation-webui>)
* [ollama](<https://github.com/ollama/ollama>)
* [LocalAI](<https://localai.io/>)
* 替代 API：

* [OpenRouter](<https://openrouter.ai/>)
* [Azure OpenAI Service](<https://azure.microsoft.com/en-us/products/ai-services/openai-service/>)
* 代理：

* `https://openai-proxy.dev/v1`，使用 [x-dr/chatgptProxyAPI](<https://github.com/x-dr/chatgptProxyAPI>) 代码运行在 CloudFlare Workers 上，适用于 OpenAI API 被阻止的情况。


##### 国际化

该扩展已翻译为约十几种语言，但翻译可能不完全或有误。若需帮助翻译，请参考 [i18n 讨论](<https://github.com/Christopher-Hayes/vscode-chatgpt-reborn/discussions/20>)。

##### 自行构建该扩展

用户可以按以下步骤自行构建此扩展：

1. 克隆存储库：

git clone https://github.com/christopher-hayes/vscode-chatgpt-reborn.git


2. 进入项目目录并使用 Yarn 安装依赖：

cd vscode-chatgpt-reborn
yarn install


3. 构建扩展：

yarn run build


4. 监听更改并自动重建：

yarn run watch


##### 在 VSCode 中开发该扩展

1. 在 VSCode 中打开项目目录。
2. 按 `F5` 或点击菜单中的 `Run > Start Debugging` 启动一个加载了该扩展的开发实例。
3. 在开发实例中测试扩展功能。
4. 使用主 VSCode 窗口中的 Debug Console 查看输出或错误。
5. 更新代码后按 `Ctrl + Shift + F5`/`Cmd + Shift + F5` 重新加载扩展。
6. 满意更改后，提交 pull request。


##### 变更日志

请参考 [CHANGELOG](<CHANGELOG.md>)。

##### 技术栈

* [Yarn](<https://yarnpkg.com/>)
* [TypeScript](<https://www.typescriptlang.org/>)
* [VSCode Extension API](<https://code.visualstudio.com/api>)
* [React](<https://reactjs.org/>)
* [Redux](<https://redux.js.org/>)
* [React Router](<https://reactrouter.com/>)
* [Tailwind CSS](<https://tailwindcss.com/>)


UI 采用 TailwindCSS 构建，优先考虑与 VSCode 的 UI 一致性和主题支持。

##### 许可证

该项目采用 ISC 许可证，详见 [LICENSE](<LICENSE>) 文件。

##### 使用场景

VSCode Reborn AI 适用于以下场景：

1. **代码编写** ：通过 ChatGPT API 自动生成代码，提高编程效率。
2. **代码重构** ：帮助用户优化和重构已有代码，提升代码质量。
3. **代码改进** ：提供代码改进建议，优化代码性能和可读性。
4. **学习和教育** ：作为编程学习辅助工具，帮助新手理解代码编写、重构和优化的过程。
5. **跨语言支持** ：帮助程序员快速适应和使用不同编程语言。