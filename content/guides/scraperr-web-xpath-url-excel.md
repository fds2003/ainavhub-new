---
title: "Scraperr"
date: "2024-01-01 00:00:00+08:00"
description: 'Scraperr Scraperr Scraperr '
slug: scraperr-web-xpath-url-excel
tags:
- tailwindcss
- uri
- csv
- https
- next.js
draft: false
related_tools:
- honghongai - honghongai是一个基于google的gemini大模型、借鉴哄哄模拟器概念的开源免费版本，通过原始提示实现功能，技术栈包括next.js、vercel
  ai sdk、tailwindcss等，支持通过环境变量配置，鼓励社区贡献，并基于mit许可证开源。
- claude code security reviewer
- next.js ai chatbot x supabase
- meta agents research environments
- openvoice
---

## Scraperr

##### Scraperr简介与使用场景

###### 简介

Scraperr 是一个自托管的Web应用程序，允许用户通过指定XPath元素从网页抓取数据。用户可以提交URL和对应的元素进行抓取，结果会以表格形式显示。用户可以下载Excel格式的抓取结果，并支持重新运行任务。

![Scraperr Logo](https://github.com/jaypyles/www-scrape/blob/master/docs/logo_picture.png)

Scraperr 使用 MongoDB 作为数据库，FastAPI 作为后端框架，Next.js 作为前端框架，并且使用 TailwindCSS 进行样式设计。

###### 主要功能

1. **提交URLs进行抓取**

* 提交并排队等待抓取的URLs
* 使用XPath添加和管理要抓取的元素
* 抓取同一域名内的所有页面
* 添加自定义JSON头进行请求
* 展示抓取结果
2. **管理历史任务**

* 下载包含结果的CSV文件
* 重新运行任务
* 查看排队任务的状态
* 收藏并查看收藏的任务
3. **用户管理**

* 用户登录/注册以组织管理任务
4. **日志查看**

* 在Web UI中查看应用日志
5. **统计视图**

* 查看已运行任务的简单统计信息


###### 安装方法

1. 克隆代码库：

git clone https://github.com/jaypyles/scraperr.git


2. 创建 `.env` 文件并配置：


MONGODB_URI=mongodb://root:example@webscrape-mongo:27017
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=600
HOSTNAME="localhost"
HOSTNAME_DEV="localhost"


3. 部署：


make up


程序提供了独立的`traefik`配置文件，可以很容易地通过其它应用或反向代理进行代理。

###### 使用方法

1. 在浏览器中打开应用程序（例如：http://localhost）。
2. 在URL字段中输入要抓取的网页地址。
3. 通过指定名称和对应的XPath来添加要抓取的元素。
4. 点击“Submit”按钮将URL加入抓取队列。
5. 在“Previous Jobs”部分查看队列。


###### API端点

Scraperr配备了FastAPI文档页面，可以通过 `/docs` 查看API文档。

![API Docs](https://github.com/jaypyles/www-scrape/blob/master/docs/docs_page.png)

###### 常见问题

Q: 当运行Scraperr时，出现了“404 Page not found”错误。 A: 这可能是运行Scraperr的虚拟机中MongoDB相关的问题。确保你的系统CPU支持AVX，如需更改CPU类型，可以在Proxmox的虚拟机设置中调整至`host`。

###### 许可证

此项目采用MIT许可证进行许可，具体请查看[LICENSE](<https://github.com/jaypyles/scraperr/blob/master/LICENSE>)文件。

###### 贡献

开发是基于[webapp模板](<https://github.com/jaypyles/webapp-template>)进行的，详情请参阅文档。

启动开发服务器：


make deps build up-dev


###### 使用场景

1. **数据采集** ：可用于从特定网站上定期采集数据，如价格监控、新闻采集等。
2. **竞争对手分析** ：抓取竞争对手的网站数据，进行市场分析。
3. **学术研究** ：抓取数据用于文本分析、数据挖掘等研究工作。
4. **自动化测试** ：用来验证网页元素是否正确显示，进行自动化测试。


Scraperr 提供了简便的数据抓取和管理功能，是网页数据采集的强大工具。