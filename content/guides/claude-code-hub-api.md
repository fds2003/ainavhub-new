---
title: "Claude Code Hub Claude Code Hub Claude Code Hub"
date: "2024-01-01 00:00:00+08:00"
description: 'Claude Code Hub Claude Code Hub  AI API '
slug: claude-code-hub-api
tags:
- claude
- code
- api
- rpm
- gemini
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## Claude Code Hub

Claude Code Hub 是一个专为团队和企业设计的智能 AI API 代理中转服务平台，旨在解决多 AI 服务提供商的统一管理问题。该平台通过提供一个统一的 API 接口来管理各类 AI 模型，并具备智能负载均衡、多租户管理、API 密钥生命周期管理、实时请求监控与成本分析、以及一个现代化用户界面等核心功能，同时支持生产环境的一键部署和灵活的模型价格配置，极大地简化了 AI 服务集成与运营的复杂性。

该项目的主要功能、核心要点和关键特性包括：

* **统一多AI服务提供商API接口：** 提供一个单一的API端点，即可代理和管理OpenAI、Claude、Gemini等多种AI服务提供商，简化了多模型集成和切换的复杂性。
* **智能负载均衡与故障转移：** 具备基于权重的智能请求分发机制，能够自动处理上游服务故障并进行转移，同时保持会话连续性，确保服务的高可用性和稳定性。
* **完善的多租户与权限配额管理：** 内置完整的用户体系，支持对不同用户或团队进行细粒度的权限控制，并可设置每分钟请求数（RPM）和每日使用成本等配额，实现精细化运营。
* **灵活的API密钥生命周期管理：** 提供API Key的生成、轮换和过期管理功能，增强了平台的安全性和灵活性。
* **全面的实时监控与成本分析：** 提供可视化仪表盘，实时展示请求统计、API调用成本追踪、性能分析、用户活跃度排名以及异常请求预警功能，帮助用户全面掌握使用情况。
* **直观现代化的用户管理界面：** 采用Shadcn UI构建响应式管理面板，支持深色模式，为管理员和用户提供友好且高效的操作体验。
* **便捷的生产环境部署：** 支持Docker一键部署，包含自动数据库迁移和健康检查机制，大大降低了部署和维护的难度。
* **模型价格自定义与成本报告：** 允许按模型配置输入/输出Token的计费单价，系统能自动计算并导出详细的请求成本报告，便于成本控制和财务核算。
* **API格式兼容性：** 直接支持Claude Code格式的API接口，并通过与配套的`claude-code-router`项目结合，间接兼容OpenAI、Gemini、智谱GLM、Kimi等多种非Claude Code格式的AI服务。