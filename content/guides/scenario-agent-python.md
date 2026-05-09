---
title: "Scenario"
date: "2024-01-01 00:00:00+08:00"
description: 'Scenario Scenario  Agent '
slug: scenario-agent-python
tags:
- max
- agent
- python
- turns
- testing
draft: false
related_tools:
- qwq-max-preview
- minimax-text-01
- minimax-m1
- oliva multi-agent assistant
- openai agents sdk
---

## Scenario

Scenario 是一个用于端到端测试 Agent 的 Python 库，它的主要思想是让一个测试 Agent 像真人用户一样与你的 Agent 交互，从而自动化测试流程。你可以定义一系列场景，测试 Agent 会模拟用户，与你的 Agent 对话并评估其行为，直到达到目标或检测到异常。

**核心概念:**

* **Scenario (场景):** 定义一个测试用例，包括：

* 场景描述 (例如 “用户正在寻找晚餐主意”)
* 目标 Agent (你想要测试的 Agent)
* 成功标准 (Agent 应该做什么才算成功)
* 失败标准 (Agent 做了什么就算失败)
* 可选：策略 (strategy，测试 Agent 如何进行测试) 和 最大交互轮数 (max_turns)
* **TestingAgent (测试 Agent):** 负责模拟用户，与你的 Agent 交互，并根据成功/失败标准判断测试结果。Scenario 默认使用 LLM 作为 Testing Agent。


**使用场景:**

* **回归测试:** 确保你的 Agent 在修改后仍然按照预期工作。
* **新功能测试:** 验证新添加的功能是否符合设计要求。
* **探索性测试:** 通过不同的场景，发现 Agent 潜在的问题或缺陷。
* **复杂 Agent 的测试:** 对于需要多轮对话才能完成任务的 Agent，Scenario 可以自动模拟对话流程。


**主要特点和功能:**

* **易于使用:** 通过简单的配置和定义，即可创建测试场景。
* **自动化测试:** 无需手动模拟用户交互，可以自动运行测试并生成结果。
* **可定制性:** 可以自定义测试 Agent 的行为，例如指定交互策略和最大轮数。
* **Debug 模式:** 可以逐步查看消息，并介入对话，方便调试 Agent。
* **缓存机制:** 通过缓存测试 Agent 的输入和 LLM 的调用结果，提高测试的稳定性和速度。
* **并行运行:** 通过 `pytest-asyncio-concurrent` 插件，可以并行运行多个场景，加速测试。


**快速上手步骤:**

1. 安装必要的库：`pip install pytest langwatch-scenario`
2. 创建测试文件，例如 `tests/test_vegetarian_recipe_agent.py`
3. 编写测试代码，定义 Scenario，指定目标 Agent，成功/失败标准等。
4. 配置 OpenAI API key (或其他 LLM API key) 到 `.env` 文件。
5. 运行测试：`pytest -s tests/test_vegetarian_recipe_agent.py`


**总结：**

Scenario 提供了一种高效、自动化、可定制的方式来测试你的 Agent。通过定义场景，指定成功/失败标准，Scenario 可以帮助你确保 Agent 的行为符合预期，提高 Agent 的质量和可靠性。