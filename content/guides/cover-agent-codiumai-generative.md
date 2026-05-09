---
title: "Cover-Agent"
date: "2024-01-01 00:00:00+08:00"
description: 'Cover-Agent Cover-Agent  Cover-Agent '
slug: cover-agent-codiumai-generative
tags:
- parser
- runner
- cd
- cover-agent
- github
draft: false
related_tools:
- llmdocparser
- code runner mcp server
- dreamrunner
- magicdrivedit
- cover-agent
---

## Cover-Agent

##### Cover-Agent 简介

Cover-Agent 是一个由 CodiumAI 开发的开源项目，旨在通过生成高质量的自动化测试来提升代码覆盖率。它采用生成式人工智能（Generative AI）技术，主要用于自动生成单元测试，从而简化开发工作流程。Cover-Agent 可以通过终端运行，并计划集成到流行的持续集成（CI）平台中。

##### 使用场景

1. **单元测试生成** ：Cover-Agent 能够根据现有的代码库自动生成单元测试，提高代码覆盖率，确保软件开发的高质量。
2. **CI/CD 集成** ：Cover-Agent 计划与各种 CI 平台集成，如 GitHub Actions、Jenkins、CircleCI 等，使自动化测试成为开发流程的一个自然步骤。
3. **多语言支持** ：能够生成适用于多种编程语言的测试，适用范围广泛。
4. **新功能测试** ：通过生成新测试来覆盖新功能的代码修改，确保代码变更不会引入新错误。


##### 核心组件

1. **测试运行器（Test Runner）** ：执行测试套件并生成代码覆盖率报告。
2. **覆盖率解析器（Coverage Parser）** ：验证添加的测试是否提高了代码覆盖率。
3. **提示构建器（Prompt Builder）** ：从代码库中收集必需的信息并构建提示，发送给大语言模型（LLM）。
4. **AI 调用器（AI Caller）** ：与 LLM 交互，生成相应的测试。


##### 安装和使用

###### 基础要求

* 设置 `OPENAI_API_KEY` 环境变量。
* 需要代码覆盖工具，例如 Python 中的 `pytest-cov`。
* 系统上需要安装 Python 和 Poetry（用于管理 Python 包依赖）。


###### 安装命令


pip install git+https://github.com/Codium-ai/cover-agent.git


或者下载项目的发行版本并直接运行可执行文件。

###### 运行命令


cover-agent \
--source-file-path "<source_code_file_path>" \
--test-file-path "<test_file_path>" \
--code-coverage-report-path "<coverage_report_path>" \
--test-command "<test_command>" \
--test-command-dir "<test_command_directory>" \
--coverage-type "<coverage_report_type>" \
--desired-coverage <desired_coverage_percentage> \
--max-iterations <max_llm_iterations>


通过这些命令，可以便捷地生成和验证单元测试，提高项目的代码覆盖率和质量。

##### 输出

运行结束后，会生成调试文件，如 `generated_prompt.md`、`run.log` 和 `test_results.html`，包含生成的测试信息、运行日志和测试结果等详细信息。

##### 其他 LLM 的使用

可以使用 LiteLLM 跨不同的 LLM（如 OpenAI、Vertex AI 等），只需设置相应的环境变量并在调用 Cover Agent 时指定模型名称。

##### 开发和测试

设置开发环境并运行测试：


poetry install
poetry run pytest --junitxml=testLog.xml --cov=templated_tests --cov=cover_agent --cov-report=xml --cov-report=term --log-cli-level=INFO


##### 未来计划

1. 覆盖更多测试生成场景，比如根据 PR 变化生成测试。
2. 提高易用性，实现更多 CI 平台的连接器。
3. 增加行为分析和测试波动性检查能力。


CodiumAI 旨在帮助开发团队提高代码的完整性，提供各种工具以应对企业级代码复杂性。