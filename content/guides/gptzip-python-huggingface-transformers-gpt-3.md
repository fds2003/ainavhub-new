---
title: "gptzip"
date: "2024-01-01 00:00:00+08:00"
description: 'gptzip gptzip  Python '
slug: gptzip-python-huggingface-transformers-gpt-3
tags:
- gpt-3
- tokenizer
- install
- pretrained
- gpt2
draft: false
related_tools:
- 神秘的gpt2-chatbot
- speechgpt2
- building gpt2o
- dualpipe
- local voice agents on macos with pipecat
---

## gptzip

`gptzip` 是一个 Python 库，利用预训练语言模型作为字符串压缩器。它与 HuggingFace 的 Transformers 模型开箱即用，并使用算术编码（一种理论上最优的编码方式）基于语言模型的概率分布来压缩字符串。这个工具利用了香农的源编码定理，该定理连接了概率分布和压缩技术。由于像 GPT-3 这样的语言模型可以提供字符串的概率分布，因此它们可以被直接用来进行压缩。

##### 安装


pip install gptzip


##### 编码

使用 `gptzip` 可以检查一个语言模型需要多少字节来编码一个字符串：


import transformers
import gptzip

model = "gpt2"
lm = transformers.AutoModelForCausalLM.from_pretrained(model)
tokenizer = transformers.AutoTokenizer.from_pretrained(model)
string = "Sailing on the seven seas"
coder = gptzip.ArithmeticCoder(lm=lm, tokenizer=tokenizer)
code, num_padded_bits = coder.encode(
string,
return_num_padded_bits=True,
)
assert len(code) == 5


##### 无损编码与解码

更有用的是，可以将 `gptzip` 用作真正的文件压缩器：


model = "gpt2"
lm = transformers.AutoModelForCausalLM.from_pretrained(model)
tokenizer = transformers.AutoTokenizer.from_pretrained(model)
string = "How much would could a woodchuck chuck?"
coder = gptzip.ArithmeticCoder(lm=lm, tokenizer=tokenizer)
code, num_padded_bits = coder.encode(
string,
return_num_padded_bits=True,
)
print(f"Code: {to_binary(code)} ({len(code)} bytes)")
decoded_string = coder.decode(code, num_padded_bits=num_padded_bits)
assert decoded_string == string


##### 使用场景

* 文本文件压缩：利用语言模型的概率分布对文本文件进行无损压缩。
* 数据传输优化：在需要保证文本数据准确传输的场景中，减少数据量以提高传输效率。
* 存储优化：节省存储空间，尤其是需要存储大量文本数据的应用场景。
* 比较研究：与现有压缩算法（如 gzip）进行对比研究，探讨压缩效果和效率差异。


##### 路线图

未来计划包括：

* 添加其他压缩技术如霍夫曼编码。
* 与其他压缩技术进行基准测试，并将结果添加到 README。
* 支持其他语言建模软件如 VLLM。
* 批量压缩多个字符串。