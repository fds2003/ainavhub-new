---
title: "Voyant Travel Assistant Voyant Travel Assistant Voyant Travel Assistant"
date: "2024-01-01 00:00:00+08:00"
description: Voyant Travel Assistant Voyant Travel Assistant AI
slug: voyant-travel-assistant-ope
tags:
- clientsecret
- aiba
- clientid
- ba3af7dcb9cbfcf08
- brave
draft: false
related_tools:
- voyant travel assistant
- ai travel agent
- graph-constrained reasoning
- openai agents sdk
- claude code but with openai models
---

## Voyant Travel Assistant

Voyant Travel Assistant项目是一个专注于旅行领域的智能元代理，其核心是一个单一的元代理管道，负责规划工具调用、执行操作、记录收据并在回复用户之前进行严格验证，旨在提供快速、可信赖且来源清晰的答案。该系统采用AI优先的规划方法（利用OpenAI风格的工具），结合Zod进行严格的JSON解析，并实现非阻塞的异步I/O。其关键特性包括广泛的工具集成，覆盖天气、国家/地区信息、景点、通用旅行搜索（如Tavily/Brave）、RAG（如Vectara）以及Amadeus提供的城市/机场/航班数据。项目还包含一个独特的验证流程，可以自动对回复进行核实，并将所有操作收据和验证结果存储起来，用户可随时通过`/why`命令追溯答案的生成逻辑和来源，从而确保高度的透明度和准确性。