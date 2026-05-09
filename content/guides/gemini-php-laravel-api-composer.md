---
title: "Gemini PHP for Laravel Gemini PHP Gemini PHP"
date: "2024-01-01 00:00:00+08:00"
description: 'Gemini PHP Gemini PHP  Laravel '
slug: gemini-php-laravel-api-composer
tags:
- artisan
- laravel
- php
- api
- token
draft: false
related_tools:
- laravel chat demo with usestream
- grok2api
- gemini cli to api proxy
- geminicli2api
- geminicli to api
---

## Gemini PHP

**Gemini PHP** 是一个专为 Laravel 设计的 PHP API 客户端，它允许开发者与 Gemini AI API 交互。这个库是由社区维护的，可供在 PHP 项目中快速集成和使用 Gemini AI 功能。下面我会用更通俗的语言简单总结它的功能和使用场景。

##### 功能总结

1. **安装与配置** ：通过 Composer 安装 Gemini PHP 包，并通过 Artisan 命令安装配置文件。然后就可以设置 API 密钥以调用 Gemini API。
2. **文本生成** ：给定文本输入（包括纯文本或文本加图片），Gemini PHP 可以请求模型生成响应的内容。这对于自动生成文章、故事或其他任何需要自然语言处理的任务来说非常有用。
3. **多轮对话** ：可以使用 Gemini PHP 进行多轮对话的构建，模拟更加自然的对话体验，比如聊天机器人。
4. **流式生成内容** ：对于需要快速反馈的场景，Gemini PHP 支持流式内容生成，允许在整个响应生成之前获取部分结果。
5. **统计 Token** ：在发送长提示之前，可以先统计所需的 Token 数量，帮助优化性能和成本。
6. **嵌入资源** ：使用 Gemini PHP，可以将文本表征为向量形式，便于进行文本相似度等计算。
7. **模型管理** ：可以列出所有可用的 Gemini 模型，或者获取特定模型的信息，以便根据需要选择最合适的模型。
8. **测试** ：Gemini PHP 提供了测试工具，允许开发者在不实际发送请求到 Gemini API 的情况下仿真 API 响应，有助于开发过程中的调试和测试。


##### 使用场景

Gemini PHP 适用于多种需要利用人工智能进行文本处理的场景，例如：

* **内容创作** ：自动生成文章、故事或营销文案。
* **聊天机器人** ：构建能够进行自然对话的聊天机器人。
* **文本分析** ：通过文本嵌入和向量化来分析文本相似度或情感倾向等。
* **快速原型开发** ：对于需要快速验证 AI 文本处理功能的项目，Gemini PHP 提供了一种便捷的方式来集成和测试。


Gemini PHP 是一个功能丰富且易于使用的库，适用于希望在 Laravel 项目中快速集成 AI 文本生成和处理能力的开发者。无论是开发聊天机器人、自动化内容生成系统，还是简单的文本分析应用，Gemini PHP 都是一个不错的选择。