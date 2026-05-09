---
title: "Qwen2"
date: "2024-01-01 00:00:00+08:00"
description: Qwen2 Qwen2 Qwen2（“Qwen Qwen”，Qwen），Qwen1.5。Qwen2：Qwen2-0.5B、Qwen2-1.5B、Qwen2-7B、Qwen2-57B-A14B...
slug: qwen2-qwen-qwen1.5-qwen2-0.5b
tags:
- tokens
- qwen2-1.5b
- qwen2-7b
- qwen2-57b-a14b
- qwen2-72b
draft: false
related_tools:
- qwen2
- qwen2.5-omni
- qwen3
- qwenlong-l1
- qwen mac menu bar
---

## Qwen2

##### Qwen2简介及使用场景

**Qwen2** （全称“Qwen Qwen”，简称Qwen）是一个先进的大语言模型家族，在其前身Qwen1.5的基础上进行了重大提升和改进。Qwen2系列包含五种规模的预训练和指令微调模型：Qwen2-0.5B、Qwen2-1.5B、Qwen2-7B、Qwen2-57B-A14B和Qwen2-72B。这些模型不仅在中文和英文数据上进行了训练，还新增了27种其他语言的数据，从而显著提升了其多语言处理能力。

Qwen2在多个基准测试中表现出色，不仅在通用任务上具有强大的性能，在编程和数学方面的表现也得到了显著提高。此外，Qwen2-7B-Instruct和Qwen2-72B-Instruct模型支持长达128K tokens的上下文长度，进一步扩展了模型的应用场景。

##### 使用场景

Qwen2在多种场景下有广泛的应用，包括但不限于：

1. **自然语言处理任务** ：可以用于文本生成、文本摘要、翻译、情感分析等自然语言处理任务，由于其多语言支持，这些任务可以在多种语言上进行。
2. **编程和代码生成** ：模型在代码理解和生成方面表现优异，可以辅助开发者编写代码、调试程序等，提高编程效率。
3. **数学计算** ：在数学表达式解析和计算方面，Qwen2提供了强大的支持，适用于教育、研究等领域。
4. **长文档处理** ：支持长上下文的Qwen2模型可以处理和生成长文档，适用于法律文稿、技术文档等需要长文本处理的应用场景。


##### 如何使用Qwen2

###### 在Hugging Face Transformers中使用


from transformers import AutoModelForCausalLM, AutoTokenizer

model_name = "Qwen/Qwen2-7B-Instruct"
device = "cuda"

model = AutoModelForCausalLM.from_pretrained(
model_name,
torch_dtype="auto",
device_map="auto"
)
tokenizer = AutoTokenizer.from_pretrained(model_name)

prompt = "给我一段关于大型语言模型的简短介绍。"
messages = [
{"role": "system", "content": "你是一个乐于助人的助手。"},
{"role": "user", "content": prompt}
]
text = tokenizer.apply_chat_template(
messages,
tokenize=False,
add_generation_prompt=True
)
model_inputs = tokenizer([text], return_tensors="pt").to(device)

generated_ids = model.generate(
**model_inputs,
max_new_tokens=512
)
generated_ids = [
output_ids[len(input_ids):] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
]

response = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]


###### 在ModelScope中使用

ModelScope特别适合中国大陆用户，通过`snapshot_download`可有效解决模型下载问题。

###### 本地运行

Qwen2支持多种本地运行环境，如`Ollama`, `llama.cpp`, `MLX-LM`, `LMStudio`和`OpenVINO`。

####### 在Ollama中运行


ollama serve
ollama run qwen2:7b
# 使用 OpenAI 兼容 API 访问 Ollama 服务


####### 在llama.cpp中运行


./main -m <path-to-file> -n 512 --color -i -cml -f prompts/chat-with-qwen.txt


##### 部署

Qwen2支持多种推理框架，包括`vLLM`和`SGLang`。

###### 使用vLLM部署


python -m vllm.entrypoints.openai.api_server --served-model-name Qwen2-7B-Instruct --model Qwen/Qwen2-7B-Instruct


然后可以通过OpenAI兼容API访问模型。

Qwen2凭借其多语言和多任务处理能力，在各类自然语言处理、代码生成和数学计算等领域展现出广泛的应用前景。