---
title: "UniDep"
date: "2024-01-01 00:00:00+08:00"
description: UniDep UniDep，CondaPip，Python。UniDep，： 🚀 UniDep 🚀 ：requirements.yamlpyproject.to...
slug: unidep-conda-pip-python-req
tags:
- python
- setuptools
- requirements.txt
- requirements.yaml
- req
draft: false
related_tools:
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
- llmops python pacakge
---

## UniDep

UniDep是一个强大的工具，它统一了Conda和Pip包的依赖管理，使得Python项目的依赖处理变得更加简单和高效。以下是UniDep主要功能的通俗总结，以及在什么情况下会使用它：

##### 🚀 UniDep的主要功能 🚀

* **统一依赖文件** ：可以使用`requirements.yaml`或`pyproject.toml`文件在一个地方管理Conda和Pip的依赖。
* **构建系统集成** ：与Setuptools和Hatchling集成，自动处理依赖。
* **一键安装** ：通过`unidep install`命令轻松处理Conda、Pip和本地依赖。
* **对Monorepo友好** ：可以将多个`requirements.yaml`或`pyproject.toml`文件汇总为一个Conda的`environment.yaml`文件，并且为每个子包生成一致的`conda-lock`文件。
* **支持平台特定的依赖** ：允许为不同的操作系统或架构指定依赖。
* **与`pip-compile`集成**：从`requirements.yaml`或`pyproject.toml`文件生成完全锁定的`requirements.txt`文件。
* **与`conda-lock`集成**：从多个`requirements.yaml`或`pyproject.toml`文件生成完全锁定的`conda-lock.yml`文件。


##### 在哪些情况下会使用UniDep？

使用UniDep特别适合需要同时管理Python和非Python包依赖的情况。比如在研究、数据科学、机器人学、人工智能和机器学习项目中，通常需要在本地Git仓库上工作，同时需要安装编译器、数值计算库或CUDA等非Python依赖。UniDep允许你在一个文件中指定所有Pip和Conda依赖，并通过一个命令在任何机器上设置完整的开发环境。

它具体适用于以下几种情景：

* 倾向于使用Conda安装包，但希望你的包也能用`pip install`安装。
* 厌倦了同步Pip需求（`requirements.txt`）和Conda需求（`environment.yaml`）。
* 希望以最低的努力获得全面的开发环境设置。


UniDep 是管理包含Conda和Pip依赖的Python项目的强大工具，特别是当项目结构复杂或跨平台时，UniDep能提供一套统一、简洁的解决方案。