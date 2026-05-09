---
title: "simple-one-api simple-one-api"
date: "2024-01-01 00:00:00+08:00"
description: 'simple-one-api  simple-one-api '
slug: simple-one-api-openai-api
tags:
- lite
- chatgpt
- minimax
- simple-one-api
- tpm
draft: false
related_tools:
- haiku sqlite rag
- raglite
- chatgpt conversation timeline extension
- chatgpt-plus
- seekout assist-seekout assist 使用 chatgpt 助力招聘者提高招聘效率。
---

## simple-one-api

##### 简介

**simple-one-api** 是一个开箱即用的工具，旨在通过标准的 OpenAI API 接口访问各种国产大模型。该项目解决了多个平台接口差异带来的复杂性，并使用户能够方便地集成和调用多种大模型。对于不需要统计、流量、计费等操作的用户，simple-one-api 提供了一个简单易用的解决方案。

##### 免费大模型列表

simple-one-api 支持以下国产大模型：

* **讯飞星火大模型** ：总量无限、QPS 为 2、有效期不限。
* **百度千帆大模型平台** ：Lite 和 Speed-8K 版本 RPM 为 300，TPM 为 300000；Speed-128K 版本 RPM 为 60，TPM 为 300000。
* **腾讯混元大模型** ：限制并发数为 5 路。


##### 功能

simple-one-api 主要支持以下大模型的文本生成：

* 百度智能云千帆大模型平台
* 讯飞星火大模型
* 腾讯混元大模型
* OpenAI ChatGPT 系列模型
* Deep-Seek
* MiniMax


##### 使用场景

simple-one-api 适用于以下场景：

1. **多平台集成** ：需要同时调用多个大模型平台的用户。如同时使用讯飞、百度、腾讯等大模型服务。
2. **API 兼容** ：解决各平台虽宣称兼容 OpenAI 接口但实际存在差异的问题。
3. **无统计负担** ：无需考虑统计、流量、计费等复杂操作的用户。
4. **负载均衡** ：需要在多个模型间实现负载均衡的用户，可选择“first”或“random”策略。


##### 安装与使用

###### 安装

1. 克隆仓库：

git clone https://github.com/fruitbars/simple-one-api.git


2. 编译程序：

chmod +x build_windows.sh
chmod +x build_linux.sh
chmod +x build_macos.sh
./build_windows.sh           # Windows平台普通编译
./build_linux.sh             # Linux平台普通编译
./build_macos.sh             # MacOS平台普通编译


3. 配置 `config.json` 文件，添加模型服务和凭证信息。


###### 启动服务

1. **直接启动**

./simple-one-api [config](可选项，默认为config.json)


2. **使用 nohup 启动**

./nohup_manage_simple_one_api.sh start


3. **使用 systemd 服务** 配置 `install_simple_one_api_service.sh` 并执行：

chmod +x install_simple_one_api_service.sh
./install_simple_one_api_service.sh


##### 配置文件

配置文件采用 JSON 格式，主要字段有：

* `load_balancing`：负载均衡策略 (`first` 或 `random`)。
* `services`：各大模型平台及其配置信息。

{
"server_port":":9090",
"load_balancing": "first",
"services": {
"qianfan": [{"models": ["yi_34b_chat"], "enabled": true, "credentials": {"api_key": "xxx", "secret_key": "xxx"}}]
}
}


##### 常见问题

* 设置对外的 api_key，通过 `api_key` 字段配置。
* 配置多个凭证以实现自动负载均衡，可以在配置文件中添加多个 `credentials`。
* 在沉浸式翻译中使用，参考项目提供的文档。
* 随机选择后台模型，使用 `load_balancing` 设置为 `random`。


##### 贡献

欢迎通过提交 issue 或 pull request 的方式贡献您的建议和代码。