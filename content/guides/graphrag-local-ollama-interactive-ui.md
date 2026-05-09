---
title: "GraphRAG Local with Ollama and Interactive UI GraphRAG Local with Ollama and"
date: "2024-01-01 00:00:00+08:00"
description: "GraphRAG Local with Ollama and Interactive UI GraphRAG Local with Ollama"
slug: "graphrag-local-ollama-interactive-ui"
draft: false
---

## GraphRAG Local with Ollama and Interactive UI

**GraphRAG Local with Ollama and Interactive UI** 是微软GraphRAG项目的本地化版本，专门为支持Ollama本地模型并集成了新的交互式用户界面而改编。以下是对该项目及其使用场景的总结性介绍：

##### 项目简介

* **本地模型支持** ：利用Ollama进行大规模语言模型（LLM）和嵌入操作。
* **成本效益** ：免除了对昂贵的OpenAI模型的依赖。
* **交互式用户界面** ：提供用户友好的界面，方便数据管理、查询运行和结果可视化。
* **实时图形可视化** ：使用Plotly实现3D知识图谱可视化。
* **文件管理** ：允许用户直接在UI中上传、查看、编辑和删除输入文件。
* **配置管理** ：通过UI轻松更新和管理GraphRAG配置。
* **输出浏览** ：浏览和查看索引输出和工件。
* **日志记录** ：实时日志记录便于调试和监控。


![GraphRAG UI](ui.png)

##### 安装和设置步骤

1. **创建并激活新的conda环境** ：

conda create -n graphrag-ollama -y
conda activate graphrag-ollama


2. **安装Ollama** ： 按照[Ollama官网](<https://ollama.com/>)提供的安装指南进行安装。

3. **安装所需的软件包** ：

pip install -r requirements.txt


4. **启动交互式UI** ：

gradio app.py


或者

python app.py


5. **使用UI** ：

* 启动后，所有必要操作都可以通过界面完成，包括初始化项目、管理设置、上传文件、运行索引和执行查询。
* UI提供了一种更流畅且用户友好的方式与GraphRAG进行交互，无需命令行操作。


##### 定制化选项

* 用户可以通过修改`settings.yaml`文件的模型设置进行实验。LLM模型需要设置为如llama3、mistral、phi3等语言模型，而嵌入模型部分则需要设置为如mxbai-embed-large、nomic-embed-text等嵌入模型，这些都由Ollama提供。完整的模型列表可以在[Ollama官网](<https://ollama.com/library>)查找。


##### 可视化功能

1. 运行数据索引。
2. 进入“Indexing Outputs”标签页。
3. 选择最新的输出文件夹并导航到GraphML文件。
4. 点击“Visualize Graph”按钮。


##### 使用场景

1. **学术研究** ：适用于需要构建和可视化复杂知识图谱的研究。
2. **企业数据管理** ：企业可以使用这一工具来组织、管理和查询大量数据，满足业务智能需求。
3. **教育工具** ：可以用作教学的演示工具，帮助学生理解图结构和图数据库的概念。
4. **快速原型开发** ：对于开发人员和数据科学家来说，该工具提供了快速构建和测试图模型的便捷方式。


**Citations** :

* GraphRAG原始仓库由Microsoft提供: [GraphRAG](<https://github.com/microsoft/graphrag>)
* Ollama: [Ollama](<https://ollama.com/>)


* * *
