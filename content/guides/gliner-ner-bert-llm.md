---
title: "GLiNER"
date: "2024-01-01 00:00:00+08:00"
description: 'GLiNER GLiNER GLiNER '
slug: gliner-ner-bert-llm
tags:
- bert
- install
- pretrained
- face
- pip
draft: false
related_tools:
- bananaface
- facebook ads library mcp server
- face-to-sticker
- flashface
- hugging face 表情包
---

## GLiNER

# GLiNER：通用且轻量化的命名实体识别模型

GLiNER 是一个命名实体识别（NER）模型，能够使用双向转换器编码器（类似 BERT）识别任何类型的实体。它为传统的 NER 模型提供了一种实用的替代方案，传统模型只能识别预定义的实体类型，而大型语言模型（LLMs）虽然灵活，但在资源受限的场景中成本高且体积巨大。

**论文** : 📄 [GLiNER: Generalist Model for Named Entity Recognition using Bidirectional Transformer](<https://arxiv.org/abs/2311.08526>)

**使用开始** : [![](https://colab.research.google.com/assets/colab-badge.svg)](<https://colab.research.google.com/drive/1mhalKWzmfSTqMnR0wQBZvt9-ktTsATHB?usp=sharing>)

**可用模型列表** : 🤗 [Hugging Face](<https://huggingface.co/models?library=gliner&sort=trending>).

**演示** : 🤗 [Hugging Face](<https://huggingface.co/spaces/urchade/gliner_mediumv2.1>)

**Discord 服务器** : <https://discord.gg/Y2yVxpSQnG>

##### 🛠 安装与使用

###### 安装


!pip install gliner


###### 使用

在安装GLiNER库后，导入`GLiNER`类。然后，你可以通过`GLiNER.from_pretrained`加载你选择的模型，并利用`predict_entities`来识别文本中的实体。


from gliner import GLiNER

# 使用基础模型初始化 GLiNER
model = GLiNER.from_pretrained("urchade/gliner_mediumv2.1")

# 示例文本用于实体预测
text = """
Cristiano Ronaldo dos Santos Aveiro (葡萄牙语发音：[kɾiʃˈtjɐnu ʁɔˈnaldu]；1985年2月5日出生)是一名葡萄牙职业足球运动员，他在沙特职业联赛俱乐部Al Nassr以及葡萄牙国家队担任前锋和队长。被广泛认为是有史以来最伟大的球员之一，罗纳尔多获得了五次金球奖，三次欧洲足球先生奖和四次欧洲金靴奖，是欧洲球员中最多的。他在职业生涯中赢得了33个奖杯，包括七个联赛冠军，五个欧洲冠军联赛冠军，欧洲杯冠军和欧洲国家联赛冠军。罗纳尔多保持着欧冠最多出场（183次）、进球（140个）和助攻（42次）的纪录，以及欧洲杯（14个）和国际比赛进球数（128个）和出场数（205次）的纪录。他是少数职业生涯出场超过1200次的球员之一，也是职业生涯进球超过850个的球员之一，使他成为历史上得分最高的球员。
"""

# 实体预测标签
labels = ["Person", "Award", "Date", "Competitions", "Teams"]

# 执行实体预测
entities = model.predict_entities(text, labels, threshold=0.5)

# 显示预测的实体及其标签
for entity in entities:
print(entity["text"], "=>", entity["label"])


###### 预期输出


Cristiano Ronaldo dos Santos Aveiro => person
1985年2月5日 => date
Al Nassr => teams
葡萄牙国家队 => teams
金球奖 => award
欧洲足球先生奖 => award
欧洲金靴奖 => award
欧洲冠军联赛冠军 => competitions
欧洲杯冠军 => competitions
欧洲国家联赛冠军 => competitions


## 使用场景

GLiNER 适用于各种需要命名实体识别的场景，包括但不限于：

* **文本分析** ：自动提取文本中的人名、日期、地点、组织等实体信息。
* **信息抽取** ：从海量文档中自动提取有用的信息。
* **问答系统** ：识别用户问题中的关键实体，提升问答系统的准确性。
* **知识图谱** ：辅助构建和扩展知识图谱。


##### 模型作者

* [Urchade Zaratiana](<https://huggingface.co/urchade>)
* Nadi Tomeh
* Pierre Holat
* Thierry Charnois


##### 引用

如果您在研究中发现GLiNER有用，请考虑引用我们的论文：


@misc{zaratiana2023gliner,
title={GLiNER: Generalist Model for Named Entity Recognition using Bidirectional Transformer},
author={Urchade Zaratiana and Nadi Tomeh and Pierre Holat and Thierry Charnois},
year={2023},
eprint={2311.08526},
archivePrefix={arXiv},
primaryClass={cs.CL}
}


##### 支持与资助

本项目得到了**FI Group** 和**巴黎北部信息实验室** 的支持和资助。FI Group 专门从事R&D&I²（研究与开发、创新与投资）的公共资金战略，FI Group的顾问全部是工程师或博士，帮助客户从研发到创新产品的生产。

我们也向开源社区表示衷心的感谢，他们的宝贵贡献对项目成功起到了关键作用。