---
title: "Chain-of-Diagnosis"
date: "2024-01-01 00:00:00+08:00"
description: Chain-of-Diagnosis Chain-of-Diagnosis CoD
slug: chain-of-diagnosis-cod-llms
tags:
- dxbench
- chain-of-diagnosis
- llms
- cod
- diagnosisgpt
draft: false
related_tools:
- dia
- lms
- screen to action using llms
- llms进行函数调用和数据提取的技能
- codemcp
---

## Chain-of-Diagnosis

Chain-of-Diagnosis（CoD）是一种用于提升大语言模型（LLMs）在医疗诊断中可解释性的新方法。通过将复杂的决策过程转化为五步诊断链，CoD 模拟了医生的思维过程，旨在增加诊断的可信度和透明度。此外，CoD 产生置信度分布，置信度越高，表示模型对特定疾病的诊断越确信。CoD 实质上是通过降低诊断不确定性的熵来形式化诊断过程。

##### 使用场景

1. **自动医疗诊断** ：开发了DiagnosisGPT模型，能自动诊断9,604种疾病。适用于需要快速初步诊断的场景，例如在线医疗咨询。
2. **训练医疗诊断模型** ：通过提供大量合成病患数据和真实病患及医生对话数据（如DxBench），可用于训练和改进自动诊断模型。
3. **医学研究与教育** ：借助丰富的数据集和模型，研究人员和医学学生可以探索疾病诊断的模式和提高自身诊断能力。


##### 工具与资源

* **DiagnosisGPT** ：两种不同规模的模型（6B 和 34B），支持自动诊断。
* **数据集** ：包括50K 合成病患数据、9,604疾病的数据库，以及覆盖15个科室的真实诊断对话数据DxBench。


##### 实施步骤

1. **数据准备** ：下载并预处理诊断数据，用于模型训练。
2. **模型训练** ：使用预处理好的数据进行模型微调。
3. **模型推理** ：通过命令行接口或编程接口进行诊断模型推理，输入症状得到可能的疾病和置信度分布。


这种方法对提高医疗诊断的透明度和可信度有较大帮助，有助于更广泛地应用于医疗行业。