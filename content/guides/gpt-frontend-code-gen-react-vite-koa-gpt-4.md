---
title: "gpt-frontend-code-gen"
date: "2024-01-01 00:00:00+08:00"
description: 'gpt-frontend-code-gen gpt-frontend-code-gen  gpt-frontend-code-gen '
slug: gpt-frontend-code-gen-react-vite-koa-gpt-4
tags:
- gpt-frontend-code-gen
- chakra
- gpt-4
- shadcnui
- compose
draft: false
related_tools:
- gpt-frontend-code-gen
- awesome gpt-4o images
- gpt-4.1 prompting guide
- sharegpt-4o-image
- gpt-4o ghibli at home
---

## gpt-frontend-code-gen

##### gpt-frontend-code-gen 简介

**gpt-frontend-code-gen** 是一个基于 React 和 Vite 构建的前端项目，配合 Koa 框架的后端服务，用于生成和预览前端页面和组件。通过与系统对话，用户可以不断调整页面效果，实现高效的前端开发。

##### 功能特点

* **生成 React 组件** ：基于 GPT-4，可以生成不同的 React 组件。
* **组件库支持** ：支持生成 Chakra UI 组件和 ShadcnUI 组件。
* **实时预览** ：生成的组件可以实时预览。
* **持续对话修改** ：通过与系统持续对话，可以即时修改和更新生成的组件。
* **多模型支持** ：配置自己的 APIKey 和 BaseUrl，支持多种大模型。
* **一键启动** ：使用 Docker 和 Docker Compose 实现一键设置和启动。


##### 技术栈

* **前端** ：React, Chakra UI, Vite
* **后端** ：Koa


##### 使用场景

1. **快速原型设计** ：一键生成前端页面，适合快速构建产品原型。
2. **交互演示** ：方便展示交互效果，满足老板或客户的实时需求。
3. **组件生成和调整** ：支持通过对话持续修改生成的组件，直到满意为止。


##### 快速开始

###### 前提条件

确保安装了 Node.js（18以上） 和 Docker（推荐使用 Docker 启动）。

###### 安装步骤

1. **安装前端依赖**


cd frontend
npm install
npm run dev


2. **安装后端依赖**


cd ../server
npm install
npm run dev


完成后，打开浏览器访问 `http://localhost:9000`，配置你的 APIKey 和 BaseUrl 即可使用。

###### Docker 一键启动


docker-compose up -d --build


##### TODO

* 支持 Vue、Angular 等前端框架组件生成，甚至是 Flutter。
* 支持代码预览和编辑。
* 支持生成 ShadcnUI 组件。
* 保留历史步骤的生成记录，支持预览历史生成的组件。
* 支持多个大模型生成效果对比。


##### License

本项目基于[知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议](<https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh>)。

##### 支持项目

如果你觉得这个项目对你有帮助，可以通过以下方式支持作者：

* **请作者喝杯咖啡** ：

![image](https://github.com/bravekingzhang/react-ai-chat/assets/4476322/7c457992-a0bc-49a3-9bd6-f23b5f1a595e)

* **关注微信公众号** ：

![image](https://raw.githubusercontent.com/bravekingzhang/pic_go/master/2024/03/29/1711677809867-40f26109-8ac4-45de-b8b2-cbf78ad09cff.png)