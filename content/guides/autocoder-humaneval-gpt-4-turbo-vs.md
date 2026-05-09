---
title: "AutoCoder"
date: "2024-01-01 00:00:00+08:00"
description: AutoCoder AutoCoder AutoCoder
slug: autocoder-humaneval-gpt-4-turbo-vs
tags:
- humaneval
- autocoder-s
- deepseeker-coder
- python
- vs
draft: false
related_tools:
- ocode
- python a2a
- claude code sdk for python
- poc python realtime api o1 assistant
- ai python for beginners
---

## AutoCoder

##### AutoCoder简介

AutoCoder是一个专为代码生成任务设计的新模型，其在HumanEval基准数据集上的测试准确率超越了GPT-4 Turbo（2024年4月版本），达到**90.9% vs 90.2%** 。与之前的开源模型相比，AutoCoder增加了一个新功能：**能够自动安装所需的软件包，并尝试运行代码直到确认没有问题** ，这在用户希望执行代码时特别有用。

###### 功能和特点对比

* **与GPT-4 Turbo相比** ：GPT-4 Turbo无法访问外部库，而AutoCoder则能够自动安装所需的软件包，这使得AutoCoder的代码解释器应用范围更广。
* **与现有开源代码解释器相比** （如OpenCodeInterpreter）：AutoCoder的代码解释器只在用户需要验证代码时调用，而OpenCodeInterpreter会运行所有生成的Python代码。


##### 模型及使用场景

AutoCoder及其简化版本AutoCoder-S可以在Huggingface上获取：

* [AutoCoder (33B)](<https://huggingface.co/Bin12345/AutoCoder>)
* [AutoCoder-S (6.7B)](<https://huggingface.co/Bin12345/AutoCoder_S_6.7B>)


基础模型是deepseeker-coder。

###### 快速开始

1. 创建conda环境:


conda create -n AutoCoder python=3.11
conda activate AutoCoder
pip install -r requirements.txt


2. 测试HumanEval:


cd Evaluation
python test_humaneval.py


会生成一个名为AutoCoder_HumanEval+.jsonl的文件，可以使用EvalPlus的测试框架查看结果。

3. 测试MBPP:


python test_mbpp.py
python postprocess_mbpp.py


生成AutoCoder_Mbpp+-sanitized.jsonl文件后，使用EvalPlus直接测试。

4. 测试DS-1000:


python test_ds1000.py


生成jsonl文件后，使用DS-1000测试框架进行测试。

5. Web演示（包含代码解释器）:


cd /Web_demo
pip install -r requirements.txt
python chatbot.py


##### 使用场景

* **代码生成与自动化测试** ：开发者可以使用AutoCoder自动生成代码，并通过自动安装依赖和验证代码功能进行快速测试。
* **编程教育** ：AutoCoder能够为学习编程的用户提供自动化的代码检查和反馈。
* **数据科学与研究** ：适用于需要运行和验证大量代码片段的数据科学家和研究人员。