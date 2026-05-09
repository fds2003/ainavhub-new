---
title: "Web Agent Protocol Web Agent Protocol"
date: "2024-01-01 00:00:00+08:00"
description: Web Agent Protocol  Web Agent Protocol (WAP)
slug: web-agent-protocol-wap-ota-wap
tags:
- wap
- requirements.txt
- pythonpath
- exact-replay
- install
draft: false
related_tools:
- swapanything
- dualpipe
- local voice agents on macos with pipecat
- pi
- pipecat
---

## Web Agent Protocol

这段文本介绍了 Web Agent Protocol (WAP)，它是一个旨在实现用户、Web Agent 和浏览器之间无缝交互的标准框架。WAP通过记录和回放浏览器动作，将动作的记录和执行分离，从而实现高效的自动化和可重用性。

**主要功能和特点：**

1. **数据收集：** 使用 OTA-WAP Chrome 插件收集用户交互数据。
2. **数据转换：** 将原始事件流转换为精确回放（exact-replay）或智能回放（smart-replay）动作列表。可以将记录的动作转换为MCP服务器，以便任何代理或用户重用。
3. **动作回放：** 使用 WAP-Replay 协议回放动作列表，确保浏览器操作的准确性。


**安装和设置步骤：**

1. 创建并激活 conda 环境。
2. 安装依赖项 (`pip install -r requirements.txt`)。
3. 设置 PYTHONPATH 环境变量。
4. 创建包含 API 密钥的 `.env` 文件。


**使用方法：**

1. **记录：** 安装并配置 OTA-WAP Chrome 插件进行动作捕获，运行 `action_collect_server.py` 启动数据收集服务器。
2. **生成回放列表：** 使用 `generate_exact_replay_list.py` 生成精确回放列表，或使用 `generate_smart_replay_list.py` 生成智能回放列表。
3. **回放：** 使用 `run_replay.py` 进行回放，可以选择精确回放或智能回放列表。
4. **转换成 MCP 服务器:** 使用 `generate_mcp_server.py` 将录制动作转换为MCP服务器
5. **使用 MCP 回放：** 分别运行`wap_service.py`和`mcp_client.py`，在客户端输入指令进行回放


**使用场景：**

WAP 适用于各种需要自动化 Web 浏览器操作的场景，例如：

* **自动化测试：** 可以通过记录用户操作，然后自动回放这些操作来进行测试。
* **RPA（机器人流程自动化）：** 可以用来自动化 Web 应用程序上的重复性任务。
* **Web 代理开发：** 可以用来构建能够与 Web 浏览器交互的智能代理。
* **用户行为分析：** 可以用来记录用户在 Web 应用程序上的行为，从而进行用户行为分析。


**总而言之，WAP 提供了一个标准化的方式来记录、转换和回放 Web 浏览器操作，从而简化了 Web 自动化和代理开发过程。**