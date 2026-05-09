---
title: "CHAT2API"
date: "2024-01-01 00:00:00+08:00"
description: 'CHAT2API CHAT2API  CHAT2API '
slug: chat2api-chatgpt-api-gpt-3.5-accesstoken
tags:
- tokens
- gpts
- chatgpt
- accesstoken
- gpt-4
draft: false
related_tools:
- gpts app-发现最好用的 gpts 应用
- chatgpt conversation timeline extension
- chatgpt-plus
- seekout assist-seekout assist 使用 chatgpt 助力招聘者提高招聘效率。
- chatgpt-on-cs
---

## CHAT2API

##### CHAT2API 简介

CHAT2API 是一个简单的 ChatGPT 到 API 的代理工具，旨在让用户无需账户即可免费和无限制地使用 ChatGPT（GPT-3.5）服务。此外，它还支持通过 AccessToken 使用 GPT-4、GPT-4o 和 GPTs 模型。CHAT2API 的回复格式完全与真实 API 对应，适配几乎所有客户端。

##### 功能特点

* **流式和非流式传输支持** : 可以根据需求选择不同的传输方式。
* **免登录使用 GPT-3.5** : 无需账户即可直接使用。
* **多种 GPT 模型支持** : 支持 GPT-3.5、GPT-4、GPT-4o 和 GPTs 模型，通过传入不同的模型名进行调用。
* **特定功能支持** : 包括 GPT-4 的画图、代码和联网功能。
* **图片和文件上传** : 支持通过 API 格式上传图片和文件。
* **Web UI** : 提供一个简单的 Web 界面（不支持登录）。
* **网关功能** : 可作为网关使用，支持多机分布式部署。
* **多账号管理** : 支持多账号的轮询和 Tokens 管理。


##### 使用场景

1. **免登录直接使用 ChatGPT 功能**

* 用户可以直接访问本地 Web 界面，利用无需登录的 GPT-3.5 模型进行对话。
2. **API 调用**

* 可以通过包含 AccessToken 或 RefreshToken 的 API 调用来使用 GPT-4 和其他更高级的 GPT 模型，非常适用于需要程序化访问 ChatGPT 服务的场景。
3. **多账号负载均衡**

* 通过设置轮询和管理多个 AccessToken，对多用户或高访问量的场景进行有效分配和管理。
4. **特定应用开发**

* 利用支持的各种 GPT 模型进行特定功能的开发，如图像生成、代码编写和联网获取信息等高阶应用。
5. **自动化任务**

* 设置和利用环境变量以及代理功能，将 CHAT2API 集成到自动化工作流程中，适用于需要连续对话记录和策略的应用场景。


##### 部署方式

* **Zeabur 部署** : 使用一键部署方式快速在 Zeabur 上部署。
* **直接部署** : 通过 Git 克隆项目代码并直接运行 Python 程序。
* **Docker 部署** : 使用 Docker 进行容器化部署，包括推荐的 Docker Compose 部署方式，支持 PLUS 账号。


##### 常见问题和解决方案

* **401 错误** : 可能是当前 IP 不支持免登录，需更换 IP 或设置代理。
* **403 错误** : 详见日志。
* **429 错误** : 请求频率过高，需等待或更换 IP。
* **500/502 错误** : 服务器内部错误或网关错误，尝试更换网络环境。


CHAT2API 提供了灵活的部署和使用方式，适合各种开发和使用需求，是一个强大且便捷的 ChatGPT 代理工具。