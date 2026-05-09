---
title: "GHOSTCREW"
date: "2024-01-01 00:00:00+08:00"
description: GHOSTCREW GHOSTCREW MCP/RAG
slug: ghostcrew-mcp-rag
tags:
- mcp.json
- ptt
- ffuf
- metasploit
- markdown
draft: false
related_tools:
- firecrawl mcp server
- whatsapp mcp server
- android mcp server
- playwright mcp server
- blendermcp
---

## GHOSTCREW

GHOSTCREW是一个基于大型语言模型和MCP/RAG架构的AI红队助手，旨在通过自然语言交互帮助用户执行渗透测试任务、查询安全信息和分析网络流量。

以下是该项目的主要功能、核心要点和关键特性总结：

* **自然语言交互** ：允许用户使用自然语言提问和指示AI助手。
* **MCP服务器集成** ：通过`mcp.json`配置文件灵活集成和管理多个MCP服务器，以扩展助手的功能。
* **工具管理** ：通过交互式菜单配置、连接和管理MCP工具，并可清除所有配置。
* **工具调用** ：AI助手可以根据用户请求调用配置的MCP服务器提供的工具（如：nmap、metasploit、ffuf等）。
* **智能代理模式** ：通过智能渗透测试任务树（PTT）进行战略决策和动态目标实现，从而实现自主渗透测试。
* **预定义工作流程** ：执行预定义的渗透测试工作流程，系统地使用配置的安全工具来执行全面的评估。
* **报告生成** ：生成包含结构化发现、证据和建议的Markdown报告。
* **对话历史** ：支持多轮对话，记住之前的交互内容。
* **流式输出** ：AI响应可以进行流式传输，以获得更好的用户体验。
* **知识库增强（可选）** ：支持通过本地知识库RAG（`knowledge`目录）增强AI响应。
* **文件感知工具集成** ：AI识别并使用来自知识文件夹的实际文件（单词列表、有效负载、配置）与安全工具。
* **可配置模型** ：支持配置不同的语言模型参数。