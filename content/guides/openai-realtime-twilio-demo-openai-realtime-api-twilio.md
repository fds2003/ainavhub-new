---
title: "openai-realtime-twilio-demo openai-realtime-twilio-demo OpenAI Realtime API"
date: "2024-01-01 00:00:00+08:00"
description: openai-realtime-twilio-demo OpenAI Realtime API Twilio
slug: openai-realtime-twilio-demo-openai-realtime-api-twilio
tags:
- websocket-server
- twilio
- twiml
- openai-realtime-twilio-demo
- next.js
draft: false
related_tools:
- openai-realtime-twilio-demo
- honghongai - honghongai是一个基于google的gemini大模型、借鉴哄哄模拟器概念的开源免费版本，通过原始提示实现功能，技术栈包括next.js、vercel
  ai sdk、tailwindcss等，支持通过环境变量配置，鼓励社区贡献，并基于mit许可证开源。
- next.js ai chatbot x supabase
- grok2api
- gemini cli to api proxy
---

## openai-realtime-twilio-demo

OpenAI Realtime API与Twilio的快速入门演示项目（openai-realtime-twilio-demo）结合了OpenAI的实时API与Twilio的电话呼叫功能，旨在构建一个AI电话助手。

##### 项目概述

该项目的结构分为两个主要部分：

1. **webapp** ：一个基于Next.js的前端应用，用于设置电话配置和显示通话记录。
2. **websocket-server** ：一个使用Express搭建的后端，负责处理来自Twilio的连接，将其与Realtime API连接，并将消息转发给前端。


在项目中，Twilio利用TwiML（XML格式）来指定电话呼叫的处理方式。呼叫接入时，Twilio会启动一个双向流，连接到后端，并将呼叫与Realtime API之间的消息进行转发。

##### 使用场景

OpenAI Realtime API与Twilio的集成可用于多种应用场景，包括但不限于：

* **智能客户服务** ：自动响应客户来电，提供产品信息、解决常见问题等。
* **预约与通知系统** ：自动拨打电话提醒顾客即将到来的预约，或推送重要信息。
* **个人助理** ：为用户提供日常提醒、任务管理等服务，接听呼叫并进行对话。


##### 设置与运行

要设置演示项目，需要在本地运行三个终端：

1. 启动`webapp`。
2. 启动`websocket-server`。
3. 运行`ngrok`使后端服务可被Twilio访问。


通过这些步骤，用户可以轻松搭建一个AI电话助手，处理实时通话并进行互动。

##### 注意事项

该演示项目仍在不断完善中，安全性方面存在不足，使用时应谨慎并进行必要的安全审查。