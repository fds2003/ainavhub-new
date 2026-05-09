---
title: "Memary"
date: "2024-01-01 00:00:00+08:00"
description: 'Memary Memary  Llama '
slug: memary-llama-gpt
tags:
- memary
- gpt
- llama
draft: false
related_tools:
- memary
- awesome gpt-4o images
- gpt-image-1
- lumina-mgpt 2.0
- gpt-4.1 prompting guide
---

## Memary

Memary 是一个模拟人类记忆来提升人工智能代理性能的工具。其核心是通过集成多个模型（如本地运行的 Llama 和 GPT 模型）以及使用知识图谱、记忆流和实体知识存储来推进 AI 代理的记忆管理和用户偏好了解。Memary 提供了自动生成记忆、记忆模块、系统改进和回溯记忆等功能，以便在最小的开发者实现下，提升代理的智能化程度。

##### 使用场景

1. **人工智能代理交互** ：Memary 可以帮助开发者构建具有记忆能力的聊天代理，使其能根据用户的历史交互内容提供更个性化和相关的响应。

2. **知识管理与回溯** ：通过知识图谱管理和回溯功能，开发者可以在交互中实时注入新的知识点，也可以查看和调试代理的历史记忆。

3. **用户偏好分析** ：Memary 可以跟踪和分析用户的偏好变化，帮助理解用户的兴趣点，并通过记忆模块调整代理的响应策略。

4. **模型和工具定制** ：开发者可以添加自定义工具，选择适合的模型配置，并在不同配置下进行基准测试，确保系统能够在不同任务中的最佳性能。

5. **数据注入与检索** ：Memary 支持不同数据格式的解析和清洗，以便更好地将私有数据注入代理记忆，同时也提供多种检索技术，以提高记忆的访问和利用效率。


##### 快速开始

1. **安装 Memary** ：通过 pip 安装需要的 Python 依赖。

pip install memary


2. **配置模型** ：选择并配置本地或云端模型，支持 LLM（如 Llama 3 8B/40B） 和 Vision模型（如 LLaVA）。

3. **运行 Memary** ：设置虚拟环境和 API 凭证，运行 Streamlit 应用以启动 Memary。

streamlit run app.py


4. **基本使用** ：

from memary.agent.chat_agent import ChatAgent
system_persona_txt = "data/system_persona.txt"
user_persona_txt = "data/user_persona.txt"
past_chat_json = "data/past_chat.json"
memory_stream_json = "data/memory_stream.json"
entity_knowledge_store_json = "data/entity_knowledge_store.json"
chat_agent = ChatAgent(
"Personal Agent",
memory_stream_json,
entity_knowledge_store_json,
system_persona_txt,
user_persona_txt,
past_chat_json,
)


Memary 致力于通过模拟人类记忆功能来增强人工智能代理的智能和交互性，并提供一系列工具和配置选项，使其可以轻松集成到现有系统中。