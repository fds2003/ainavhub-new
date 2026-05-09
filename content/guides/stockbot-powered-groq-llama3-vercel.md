---
title: "StockBot Powered by Groq StockBot Powered by Groq StockBot Powered by Groq"
date: "2024-01-01 00:00:00+08:00"
description: StockBot Powered by Groq StockBot Powered by Groq StockBot
slug: stockbot-powered-groq-llama3-vercel
tags:
- llama3
- powered
- stockbot
- by
- vercel
draft: false
related_tools:
- llama3v
- llama3 implemented from scratch
- ama
- nano-llama31
- tabby vscode agent
---

## StockBot Powered by Groq

##### StockBot Powered by Groq：简介与使用场景

###### 简介：

StockBot是一款由Groq提供动力的AI聊天机器人，利用了Llama3 70b、Vercel的AI SDK和TradingView的实时小部件来响应用户的查询。通过自然语言对话，StockBot可以提供实时、互动的股票图表和界面。Groq的速度使得工具调用和响应几乎是瞬间完成的，能够通过两个独立的API调用和特殊的提示来快速返回响应。

> **注意：** StockBot可能会提供不准确的信息，并不提供投资建议。仅供娱乐和教学用途。

###### 主要功能：

* 🤖 **实时AI聊天机器人** ：借助Llama3 70b的AI技术，通过自然语言请求股票新闻、信息和图表。
* 📊 **互动股票图表** ：通过TradingView图表提供即时、上下文相关的响应，图表包含实时数据。
* 🔄 **自适应界面** ：根据具体查询动态渲染金融界面的TradingView UI组件。
* ⚡ **Groq驱动的高性能** ：利用Groq的尖端推理技术实现近乎即时的响应和无缝的用户体验。
* 🌐 **多资产市场覆盖** ：访问涵盖股票、外汇、债券和加密货币的综合数据和分析。


###### 使用场景：

StockBot适用于多个金融和投资相关的场景，包括但不限于：

1. **日常市场表现热图** ：使用互动热图快速了解市场趋势。
2. **股票财务数据细分** ：获取任何股票的详细财务指标和关键绩效指标。
3. **股票价格历史记录** ：跟踪股票的历史价格走势，可以自定义日期范围。
4. **特定资产的蜡烛图** ：使用详细的蜡烛图分析价格模式和趋势。
5. **特定股票的最新消息** ：获取影响特定公司的最新新闻和头条。
6. **股票筛选器** ：使用工具发现新的公司和ETF。


###### 快速开始：

可以直接使用托管版本访问StockBot：[groq-stockbot.vercel.app](<https://groq-stockbot.vercel.app/>)。 或者按照快速开始指南本地运行StockBot。

获取Groq API密钥：[这里](<https://console.groq.com/keys>)。

本地运行命令：


pnpm install
pnpm dev


应用将运行在[localhost:3000](<http://localhost:3000/>)。

###### 鸣谢：

该应用由Benjamin Klieger在Groq开发，使用了Vercel创建的AI聊天机器人模板。 [Github Repository](<https://github.com/vercel/ai-chatbot>)。