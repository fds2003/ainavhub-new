---
title: "OllamaSharp"
date: "2024-01-01 00:00:00+08:00"
description: 'OllamaSharp OllamaSharp  NET '
slug: ollamasharp-net-ollama-api
tags:
- mo
- http
- net
- llama2
- ollamaapiclient
draft: false
related_tools:
- agentic memory
- claude code but with openai models
- smoldocling-256m-preview
- mobile next
- moling mcp server
---

## OllamaSharp

OllamaSharp 🦙 是一个 .NET 绑定，用于与 [Ollama API](<https://github.com/jmorganca/ollama/blob/main/docs/api.md>) 交互，使您能够使用 .NET 语言轻松地与 Ollama 进行交互。

## 特点

* 直观的 API 客户端：只需几行代码即可设置和与 Ollama 交互。
* API 端点覆盖：支持所有 Ollama API 端点，包括聊天、嵌入、列出模型、拉取和创建新模型等。
* 实时流式传输：将响应直接流式传输到您的应用程序。
* 进度报告：实时获取任务进度反馈，如模型拉取。
* API 控制台：一个可立即使用的 API 控制台，用于远程聊天和管理您的 Ollama 主机。


## 使用场景

OllamaSharp 将每个 Ollama API 端点封装在支持响应流的可等待方法中。以下是一些使用示例：

##### 初始化


// 设置客户端
var uri = new Uri("http://localhost:11434");
var ollama = new OllamaApiClient(uri);

// 选择用于进一步操作的模型
ollama.SelectedModel = "llama2";


##### 列出本地可用的所有模型


var models = await ollama.ListLocalModels();


##### 拉取模型并报告进度


await ollama.PullModel("mistral", status => Console.WriteLine($"({status.Percent}%) {status.Status}"));


##### 将完成结果流式传输到控制台


ConversationContext context = null;
context = await ollama.StreamCompletion("How are you today?", context, stream => Console.Write(stream.Response));


##### 构建交互式聊天


var chat = ollama.Chat(stream => Console.WriteLine(stream.Message?.Content ?? ""));
while (true)
{
var message = Console.ReadLine();
await chat.Send(message);
}


## API 控制台

该项目提供了一个全功能的演示控制台，用于展示 Ollama API 的所有端点。这不仅是一个学习 OllamaSharp 的很好资源，还可以用于远程管理和与 Ollama 主机聊天。支持多模态模型的图像聊天功能也是其中一部分。

![API 控制台演示](https://github.com/awaescher/OllamaSharp/blob/main/docs/demo.gif)

## 致谢

图标和名称复用了来自 Ollama 项目中的精彩内容。