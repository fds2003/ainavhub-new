---
title: "MindSearch"
date: "2024-01-01 00:00:00+08:00"
description: MindSearch MindSearch MindSearch
slug: mindsearch-perplexity.ai-pro-llms-gpt
tags:
- gradio
- claude
- streamlit
- perplexity.ai
- websearcher
draft: false
related_tools:
- gradio webrtc
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
---

## MindSearch

##### MindSearch简介

MindSearch是一个开源的AI搜索引擎框架，具备类似Perplexity.ai Pro的性能。用户可以通过使用闭源LLMs（如GPT、Claude）或开源LLMs（如InternLM2.5-7b-chat）来简单地部署自己风格的搜索引擎。其主要特点包括：

* **全面提问支持** ：MindSearch旨在解决生活中的各种问题，并使用网络知识进行回答。
* **深入的知识发现** ：通过浏览数百个网页，MindSearch提供更深、更广泛的知识基础答案。
* **详细解决路径** ：MindSearch公开所有细节，让用户可以查看所有内容，从而大大提高最终回答的可信度和可用性。
* **优化的UI体验** ：提供了包括React、Gradio、Streamlit和终端在内的各种接口，用户可以根据需要选择任何一种。
* **动态图构建过程** ：MindSearch将用户查询分解为图中的原子子问题节点，并根据WebSearcher的搜索结果逐步扩展图。


##### MindSearch的使用场景

1. **日常问题解答** ：用户可以提出生活中遇到的各种问题，MindSearch通过互联网资源提供答案。
2. **学术研究支持** ：研究人员可以提出复杂的问题，MindSearch通过广泛的知识基础提供深入的解答。
3. **教育和学习辅助** ：学生和教师可以使用MindSearch获得课题或作业的详细解决方案和背景知识。
4. **技术支持** ：工程师和技术人员可以通过MindSearch快速找到技术问题的解决方案和相关参考资料。


##### 如何构建自己的MindSearch

###### 第一步：安装依赖


pip install -r requirements.txt


###### 第二步：设置MindSearch API

启动FastAPI服务器。


python -m mindsearch.app --lang en --model_format internlm_server


参数说明：

* `--lang`: 模型语言，`en`表示英文，`zh`表示中文。
* `--model_format`: 模型格式。
* `internlm_server`：使用InternLM2.5-7b-chat的本地服务器。
* `gpt4`：使用GPT4。


###### 第三步：设置MindSearch前端

提供以下前端接口：

* **React** ：


# 安装Node.js和npm
# 对于Ubuntu
sudo apt install nodejs npm

# 对于Windows
# 从 https://nodejs.org/zh-cn/download/prebuilt-installer 下载

# 安装依赖
cd frontend/React
npm install
npm start


详情见[React](<./frontend/React/README.md>)。

* **Gradio** ：


python frontend/mindsearch_gradio.py


* **Streamlit** ：


streamlit run frontend/mindsearch_streamlit.py


###### 本地调试


python -m mindsearch.terminal


##### 许可证

本项目基于[Apache 2.0 license](<LICENSE>)发布。

##### 引用

如果此项目对您的研究有帮助，请引用：


@misc{chen2024mindsearchmimickinghumanminds,
title={MindSearch: Mimicking Human Minds Elicits Deep AI Searcher},
author={Zehui Chen and Kuikun Liu and Qiuchen Wang and Jiangning Liu and Wenwei Zhang and Kai Chen and Feng Zhao},
year={2024},
eprint={2407.20183},
archivePrefix={arXiv},
primaryClass={cs.CL},
url={https://arxiv.org/abs/2407.20183},
}