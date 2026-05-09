---
title: "bloop"
date: "2024-01-01 00:00:00+08:00"
description: bloop bloop “ ChatGPT”。、，。，： ...
slug: bloop-chatgpt
tags:
- qdrant
- tree-sitter
- tauri
- chatgpt
- studio
draft: false
related_tools:
- chatgpt conversation timeline extension
- chatgpt-plus
- seekout assist-seekout assist 使用 chatgpt 助力招聘者提高招聘效率。
- chatgpt-on-cs
- chatgpt instantly
---

## bloop

bloop 是一个被称为“你的代码的 ChatGPT”的工具。用户可以用自然语言提问、搜索代码，并使用现有的代码库作为上下文生成补丁。这款工具旨在帮助工程师提高生产力，主要使用场景包括：

* 以简单语言解释文件或功能的工作原理
* 根据代码上下文编写新功能
* 理解文档不全的开源库的用法
* 精确定位错误
* 使用不同语言提问关于英文代码库的问题
* 通过检查现有功能减少代码重复


## 主要特性

* 基于 AI 的对话式搜索
* Code Studio，一个利用代码作为上下文的LLM操练场
* 超快速正则表达式搜索
* 本地和 GitHub 代码库同步
* 高级查询过滤器，帮助精确缩小搜索结果范围
* 符号搜索功能，可以查找函数、变量或特征
* 精确代码导航（如“跳转到引用”和“跳转到定义”），支持10多种流行语言，基于 [Tree-sitter](<https://tree-sitter.github.io/tree-sitter/>)
* 注重隐私的设备内嵌入式语义搜索


bloop 依赖于 Rust 生态系统。搜索索引由 [Tantivy](<https://github.com/quickwit-oss/tantivy>) 和 [Qdrant](<https://github.com/qdrant/qdrant>) 提供支持，应用使用 [Tauri](<https://github.com/tauri-apps/tauri>) 构建。

## 快速开始

首次使用 bloop 最简单的方法是[下载应用](<https://github.com/BloopAI/bloop/releases>)并按照引导步骤进行操作。可以参考我们的[快速入门指南](<https://bloop.ai/understand/docs/getting-started>)，以及关于[对话式搜索](<https://bloop.ai/understand/docs/natural-language-queries>)、[正则表达式搜索](<https://bloop.ai/understand/docs/regex-queries>)和[Code Studio](<https://bloop.ai/understand/docs/code-studio>)的文档。

如果需要从源码构建或从命令行运行 bloop，可以参考以下页面：

* [从源码构建 bloop 应用](<./apps/desktop/README.md>)
* [从命令行运行 bloop](<./server/README.md>)


## 源码构建

您可以从源码构建 bloop 并使用自己的 OpenAI API 密钥运行。克隆代码库，确保检出 `oss` 分支，并在代码库的顶层创建名为 `local_config.json` 的文件。`local_config.json` 应包含以下字段：


{
"github_access_token": "<YOUR_GITHUB_ACCESS_TOKEN>",
"openai_api_key": "<YOUR_OPENAI_API_KEY>"
}


然后按照[这些安装说明](<./apps/desktop/README.md>)进行操作。如果从源码构建，bloop 将不会收集任何遥测数据。

## 贡献

我们欢迎各种大小的贡献！在开始之前，请阅读[贡献指南](<./CONTRIBUTING.md>)和[行为准则](<./CODE_OF_CONDUCT.md>)。

代码库结构主要包括：

* `apps/desktop`: Tauri 应用
* `server/bleep`: Rust 后端，包括核心搜索和导航逻辑
* `client`: React 前端


发现问题或有功能请求时，可以[打开一个 issue](<https://github.com/BloopAI/bloop/issues>)。

## 隐私

我们尽可能少地存储数据。我们使用遥测来帮助识别错误并做出数据驱动的产品决策。详细的隐私政策请参考[这里](<https://bloop.ai/privacy>)。

## 许可证

bloop 依据 `Apache 2.0` 许可证发布，详见[LICENSE](<./LICENSE>)。