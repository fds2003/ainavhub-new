---
title: "Agently-Daily-News-Collector Agently-Daily-News-Collector Agently-Daily-News-Col"
date: "2024-01-01 00:00:00+08:00"
description: Agently-Daily-News-Collector Agently-Daily-News-Collector  LLM
slug: agently-daily-news-collector-llm-agently-markdown
tags:
- pdf
- git
- agentera
- agently
- key
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## Agently-Daily-News-Collector

**Agently-Daily-News-Collector** 是一个基于开源大语言模型（LLM）的自动化新闻收集示例项目，利用了 **Agently** AI 应用开发框架。该项目的主要功能是通过输入一个新闻主题领域，由AI代理自动执行各种任务，最终生成一个高质量的新闻合集，并将其保存为一个Markdown文件。

**使用场景：**

* 你只需提供新闻收集的主题，AI代理就会自动执行后台任务，直至生成一份高质量的新闻集合。
* 生成的新闻集合可以是关于几乎任何主题，例如最新的AI模型更新、技术热点新闻等。
* 此外，新闻集合的文件格式可以是Markdown或PDF，方便用户阅读和分享。


**使用步骤：**

1. **克隆项目仓库：**

git clone git@github.com:AgentEra/Agently-Daily-News-Collector.git


2. **编辑设置文件：** 修改项目目录中的 [`SETTINGS.yaml`](<https://github.com/AgentEra/Agently-Daily-News-Collector/blob/main/SETTINGS.yaml>) 文件，输入API key，并根据需要更改其他设置。如果需要使用其他模型，通过阅读 [文档](<https://github.com/Maplemx/Agently/blob/main/docs/guidebook/application_development_handbook.ipynb>) 或 [官方网站](<http://agently.tech/features/model_request.html>) 获取更多信息。

3. **开始生成新闻合集：**

* 首次运行项目需要安装依赖包：

pip install -r path/to/project/requirements.txt


* 运行以下命令启动项目：

python path/to/project/app.py


* 输入你希望收集新闻的主题，系统会自动生成新闻合集。
4. **获取新闻集合Markdown文件：** 生成过程结束后，你会在项目目录中找到一个名为 `<collection name> <generated date>.md` 的Markdown文件。


该工具解决了手动查找与整理新闻的麻烦，大大提升了工作效率，适用于媒体从业者、内容创作者以及任何需要定期收集特定领域新闻的用户。

**主要依赖：**

* Agently AI Development Framework: <https://github.com/Maplemx/Agently> | <https://pypi.org/project/Agently/>
* duckduckgo-search: <https://pypi.org/project/duckduckgo-search/>
* BeautifulSoup4: <https://pypi.org/project/beautifulsoup4/>
* PyYAML: <https://pypi.org/project/pyyaml/>


如需帮助或反馈问题，可以联系项目维护者：[在此报告问题](<https://github.com/AgentEra/Agently-Daily-News-Collector/issues>)，或通过 [邮件](<mailto:developer@agently.cn>) 联系。也可以加微信或Discord群进行交流。

* * *

如果你喜欢这个项目，请给我们一个⭐️，非常感谢！