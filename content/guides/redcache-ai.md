---
title: "RedCache-ai"
date: "2024-01-01 00:00:00+08:00"
description: RedCache-ai RedCache-ai RedCache-AI
slug: redcache-ai
tags:
- python
- config
- key
- ai.storage
- redcache-ai
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## RedCache-ai

**RedCache-ai：大型语言模型和智能代理的内存框架**

* * *

## **是什么？** 🤖

**远程字典缓存-人工智能（RedCache-AI）** 。在开发聊天应用时，遇到的每个解决方案要么昂贵，要么闭源，或者缺乏对外部依赖的广泛支持。Redcache-ai 提供了一个动态内存框架，可以用于大型语言模型，帮助开发者构建从 AI 驱动的约会应用到医疗诊断平台的各类应用。

**快速入门指南** 😄

## **安装**

**将 redcache-ai 作为 Python 包安装** ：


pip install redcache-ai


**初始化 Redcache-ai** Redcache-ai 提供两种选择：初始化到磁盘或 SQLite。默认情况下，redcache-ai 初始化到磁盘，这里存储内存。


# 选项 1：初始化到磁盘
from redcache_ai import RedCache, load_config, set_openai_api_key
from redcache_ai.storage import DiskStorage, SQLiteStorage

storage = DiskStorage()


# 选项 2：初始化到 SQLite
storage = SQLiteStorage(db_path='my_cache.db')


**存储文本作为内存**


memory_cache = storage.add("England is a nice country", user_id = "James", metadata={"category": "facts"})


**输出**


{"James": {"7bbfbcbf-da9e-44ca-9cbb-ab558c64b36a": {"id": "7bbfbcbf-da9e-44ca-9cbb-ab558c64b36a", "text": "\"England is a nice country\"", "metadata": {"data": "\"England is a nice country\"", "category": "facts"}, "vector": [0.4472135954999579]}}}


**检索内存**


# 获取所有内存记录
memories = storage(user_id = "James")
print(all_memories)


**输出**


[
{
"id": "7bbfbcbf-da9e-44ca-9cbb-ab558c64b36a",
"text": "England is a nice country",
"metadata": {
"category": "facts"
}
}
]


**搜索内存**


results = storage.search("country", user_id="James", num_results=1)


**输出**


[
{
"id": "7bbfbcbf-da9e-44ca-9cbb-ab558c64b36a",
"text": "England is a nice country",
"metadata": {
"category": "facts"
},
"score": 0.849
}
]


**更新内存**


updated_memory = storage.update("7bbfbcbf-da9e-44ca-9cbb-ab558c64b36a", "England is a beautiful country", user_id="James")


**输出**


{
"id": "7bbfbcbf-da9e-44ca-9cbb-ab558c64b36a",
"text": "England is a beautiful country",
"metadata": {
"category": "facts"
}
}


**删除内存**


storage.delete("7bbfbcbf-da9e-44ca-9cbb-ab558c64b36a", user_id="James")


**删除所有内存**


storage.delete_all(user_id="James")


**使用 LLMs 增强内存** 🔥

**大型语言模型集成** 目前，Redcache-ai 仅支持 OpenAI。要将 redcache-ai 的内存集成到 OpenAI 中，需要设置一个 OPENAI API Key。


from redcache_ai.config import set_openai_api_key

set_openai_api_key("your-openai-api-key-here")


from redcache_ai import RedCache, load_config

# 加载默认配置
config = load_config()

# 使用 OpenAI LLM 初始化 RedCache
redcache = RedCache.from_config(config)


**默认配置输出**


{
"llm": {
"provider": "openai",
"config": {
"model": "gpt-4",
"temperature": 0.2,
"max_tokens": 1500,
}
}
}


enhanced_memory = redcache.enhance_memory("England has a rich history", user_id="James", category="facts")
summary = redcache.generate_summary(user_id="James")


这些示例展示了 redcache-ai 的基本使用方法。想了解更加详细的信息和高级功能，请参考完整文档。如果实现细节不清楚，请查看示例中的 test_redcache.py 文件。更多信息请访问 Discord 频道。

**未来的计划** ✈️ Redcache-ai 仍处于早期阶段，优先解决现有的所有错误。改进文档后：

1. 增加与更多 LLM 提供商的集成，包括 Llama、Mixtral、Claude 等。
2. 增加对 AI 代理功能的支持。
3. 提供托管版本的支持。


祝您构建美好的内存！❤️