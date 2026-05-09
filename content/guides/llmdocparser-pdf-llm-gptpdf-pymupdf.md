---
title: "LLMDocParser"
date: "2024-01-01 00:00:00+08:00"
description: LLMDocParser LLMDocParser  PDF
slug: llmdocparser-pdf-llm-gptpdf-pymupdf
tags:
- pdf
- gptpdf
- gpt-4o
- llm
- qwen-vl
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## LLMDocParser

LLMDocParser 是一个用来解析PDF并借助大语言模型（LLM）分析其内容的工具包。这个包是基于[gptpdf](<https://github.com/CosmosShadow/gptpdf/tree/main>)概念的改进版。

##### 方法

gptpdf使用PyMuPDF来解析PDF，识别文本和非文本区域，并根据特定规则合并或过滤文本区域，最后将结果输入多模态模型进行解析。基于这个方法，LLMDocParser进行了小幅改进。

##### 主要流程

LLMDocParser使用布局分析模型来解析PDF的每一页，识别每个区域的类型（如文本、标题、图像、图像说明、表格、表格说明、页眉、页脚、参考文献和公式），并获取每个区域的坐标。通过这些区域的结果，可以设定更精确的解析规则。最终，将相应区域的图像输入多模态模型（如GPT-4o或Qwen-VL），直接获取适合RAG解决方案的文本块。

##### 使用场景

LLMDocParser可用于以下场景：

1. **文档解析和内容提取** ：将学术论文、报告或其他复杂PDF文档解析成结构化数据。
2. **数字化存档** ：将纸质文件转换为可以搜索和分析的数字文本。
3. **信息检索和问答** ：结合RAG解决方案，通过解析后的文本块进行智能问答系统。
4. **数据前处理** ：为进一步的数据分析、机器学习或其它应用预处理文档数据。


##### 安装与使用

###### 安装

通过pip安装:


pip install llmdocparser


###### 使用示例


from llmdocparser.llm_parser import get_image_content

content = get_image_content(
llm_type="azure",
pdf_path="path/to/your/pdf",
output_dir="path/to/output/directory",
max_concurrency=5,
azure_deployment="azure-gpt-4o",
azure_endpoint="your_azure_endpoint",
api_key="your_api_key",
api_version="your_api_version"
)
print(content)


##### 参数解释

* `llm_type`: str，选择使用的LLM类型（如azure, openai, dashscope）。
* `pdf_path`: str，PDF文件路径。
* `output_dir`: str，存储所有解析图像的输出目录。
* `max_concurrency`: int，并发线程数。
* 特定于Azure的参数（如`azure_deployment`和`azure_endpoint`）需要传递相关值，否则只需提供API密钥。


##### 成本

按示例文档《Attention Is All You Need》的分析，使用GPT-4o模型，费用如下：


总Token数: 44063
Prompt Tokens: 33812
Completion Tokens: 10251
总费用（美元）：$0.322825
每页平均成本：$0.0215


如需更多详细信息，可参考llm_parser.py中的主函数。