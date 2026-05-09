---
title: "Ollama Copilot Ollama Copilot Ollama Copilot"
date: "2024-01-01 00:00:00+08:00"
description: 'Ollama Copilot Ollama Copilot  Github Copilot '
slug: ollama-copilot-github
tags:
- install.sh
- copilot
- go
- github
- curl
draft: false
related_tools:
- github copilot
- pi
- microsoft copilot for finance
- github copilot workspace
- copilot+ pcs
---

## Ollama Copilot

Ollama Copilot 是一个代理工具，让你可以像使用 Github Copilot 一样使用 Ollama 作为助手。它将 Ollama 的代码建议功能集成到你的开发环境中，从而提升开发效率。

## 使用场景

1. **代码自动补全** ：通过 Ollama 提供的模型，可以在写代码时获得智能的自动补全建议，类似于 Github Copilot。
2. **代码片段建议** ：在编写复杂代码时，Ollama Copilot 能根据上下文提供适当的代码片段，减少开发者的工作量。
3. **提高生产力** ：自动化完成代码编写中的重复性任务，让开发者专注于逻辑和创意部分，从而显著提高编码效率。


## 安装步骤

##### 安装 Ollama

确保 [Ollama](<https://ollama.com/download/linux>) 已安装：


curl -fsSL https://ollama.com/install.sh | sh


或者按照[手动安装](<https://github.com/ollama/ollama/blob/main/docs/linux.md#manual-install>)步骤进行。

###### 下载模型

下载 `ollama-copilot` 需要的默认模型：


ollama pull codellama:code


##### 安装 ollama-copilot

使用以下命令安装：


go install github.com/bernardo-bruning/ollama-copilot@latest


##### 运行

确保你的 `$PATH` 包含 `$HOME/go/bin` 或 `$GOPATH/bin`。例如，在 `~/.bashrc` 或 `~/.zshrc` 中添加：


export PATH="$HOME/go/bin:$GOPATH/bin:$PATH"


然后运行：


ollama-copilot


## 配置 IDE

##### Neovim

1. 安装 [copilot.vim](<https://github.com/github/copilot.vim>)
2. 配置变量


let g:copilot_proxy = 'http://localhost:11435'
let g:copilot_proxy_strict_ssl = v:false


##### VScode

1. 安装 [copilot 插件](<https://marketplace.visualstudio.com/items?itemName=GitHub.copilot>)
2. 使用 GitHub 登录或注册
3. 打开 [settings](<https://code.visualstudio.com/docs/getstarted/settings>) 配置，并插入以下内容：


{
"github.copilot.advanced": {
"debug.overrideProxyUrl": "http://localhost:11437"
},
"http.proxy": "http://localhost:11435",
"http.proxyStrictSSL": false
}


## 未来规划

* 启用完成 API 使用；在中间插入内容。
* 启用灵活的配置模型（目前仅支持 llamacode:code）。
* 创建自安装功能。
* Windows 设置
* 使用文档


通过 Ollama Copilot，你可以更加高效地编写代码，并体验到增强的开发环境。