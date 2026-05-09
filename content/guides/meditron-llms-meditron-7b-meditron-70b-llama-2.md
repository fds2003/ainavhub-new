---
title: "Meditron"
date: "2024-01-01 00:00:00+08:00"
description: Meditron Meditron LLMs
slug: meditron-llms-meditron-7b-meditron-70b-llama-2
tags:
- flan-palm
- llama-2
- huggingface.co
- https
- meditron-7b
draft: false
related_tools:
- ama
- meditron
- lms
- screen to action using llms
- llms进行函数调用和数据提取的技能
---

## Meditron

Meditron是一个基于大型语言模型（LLMs）的开源医学套件，主要包括Meditron-7B和Meditron-70B两个模型。这些模型是通过在丰富的医学领域语料上持续进行预训练，从Llama-2模型调整而来的，涵盖了精选的PubMed论文摘要、国际认可的医学指南新数据集，以及广泛的通用领域语料。

Meditron特别适用于多种医学推理任务，并且经过相关数据的微调后，其表现超越了Llama-2-70B、GPT-3.5和Flan-PaLM等先前的模型。

模型地址：https://huggingface.co/epfl-llm

##### 使用场景

Meditron主要应用于辅助临床决策，通过提供医学问答、帮助诊断分析、疾病信息查询（如症状、原因、治疗方法）以及一般健康信息的查询等，旨在提升医疗服务质量并普及医学大语言模型的使用。

##### 使用建议

尽管Meditron可以编码高质量证据来源的医学知识，但它还没有被适配以在医疗应用中安全、恰当地传递这些知识。因此，如果没有进行广泛的用例对齐和额外的测试（包括在实际医疗环境中的随机对照试验），我们不建议将Meditron用于医疗应用。

##### 如何使用

开发者可以直接从HuggingFace模型中心加载Meditron模型，通过简单的代码即可实现模型的调用。


from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("epfl-llm/meditron-70b")
model = AutoModelForCausalLM.from_pretrained("epfl-llm/meditron-70b")


##### 训练细节和数据处理

Meditron的预训练涉及了临床指南、论文摘要、全文医疗论文和广泛的通用域预训练数据，合成了一个名为GAP-Replay的综合数据体。开发者可以下载并预处理整个GAP-Replay数据集，进一步定制和优化模型。

##### 微调和下游应用

Meditron-7B和Meditron-70B是基础模型，可以通过微调、指令调整或强化学习进行微调（RLHF）来针对特定的下游任务和应用进行优化。开发者可以根据自己的需求，将这些模型应用于更多样化的场景中。

总体而言，Meditron提供了一个强大的工具集，旨在通过高质量的医学大语言模型支持医疗保健行业的各项需求。然而，考虑到其对安全性和适用性的限制，应谨慎使用，并在具体投入使用前进行充分测试。