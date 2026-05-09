---
title: "LlamaExtract"
date: "2024-01-01 00:00:00+08:00"
description: LlamaExtract LlamaExtract LlamaIndex
slug: llamaextract-llamaindex-api
tags:
- 'true'
- nest
- install
- llx-...
- llamaindex
draft: false
related_tools:
- index
- building agentic rag with llamaindex
- ama
- dualpipe
- local voice agents on macos with pipecat
---

## LlamaExtract

LlamaExtract是由LlamaIndex创建的一个API，旨在从非结构化文件中高效推断模式并提取数据。LlamaExtract直接与LlamaIndex集成。需要注意的是，LlamaExtract目前处于实验阶段，未来可能会有变化。

##### 快速开始

首先，登录并从[**https://cloud.llamaindex.ai**](<https://cloud.llamaindex.ai>)获取一个API密钥。

然后安装LlamaExtract软件包：


pip install llama-extract


现在，你可以轻松地推断文件的模式并提取数据：


import nest_asyncio

nest_asyncio.apply()

from llama_extract import LlamaExtract

extractor = LlamaExtract(
api_key="llx-...",  # 也可以通过设置环境变量LLAMA_CLOUD_API_KEY来指定
num_workers=4,  # 如果传递多个文件，将分解为`num_workers`个API调用
verbose=True,
)

# 推断模式
schema = extractor.infer_schema(
"my_schema", ["./my_file1.pdf", "./my_file2.pdf"]
)

# 提取数据
results = extractor.extract(schema.id, ["./my_file1.pdf", "./my_file2.pdf"])


LlamaExtract的使用场景包括但不限于：

1. **文档处理与数据提取** ：从PDF和其他非结构化文件中提取结构化数据。
2. **信息自动化处理** ：自动化识别和处理大量文本文件的内容，提高工作效率。
3. **数据集成与分析** ：将非结构化数据转化为结构化数据，以便进一步分析和使用。


完整的文档和更多示例可以参考[官方文档](<https://docs.cloud.llamaindex.ai/>)。