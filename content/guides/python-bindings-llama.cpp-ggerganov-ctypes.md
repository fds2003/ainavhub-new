---
title: "Python Bindings for llama.cpp Python Bindings for llama.cpp Python Bindings"
date: "2024-01-01 00:00:00+08:00"
description: "Python Bindings for llama.cpp Python Bindings for llama.cpp Python "
slug: "python-bindings-llama.cpp-ggerganov-ctypes"
draft: false
---

## Python Bindings for llama.cpp

Python Bindings for llama.cpp 是一个简单的 Python 绑定库，用于访问和使用由 **@ggerganov** 开发的 C++ 库 llama.cpp。该库主要提供以下功能：

* 通过 `ctypes` 接口提供对 C API 的低级访问。
* 提供高级 Python API 用于文本补全：
* 类似 OpenAI 的 API。
* 支持 [LangChain](<https://python.langchain.com/docs/integrations/llms/llamacpp>) 和 [LlamaIndex](<https://docs.llamaindex.ai/en/stable/examples/llm/llama_2_llama_cpp.html>)。
* 提供兼容 OpenAI 的网络服务器：
* 可替代本地的 Copilot。
* 支持功能调用和多模态模型，如 Vision API。
* 支持多个模型的配置。


##### 使用场景

1. **文本补全** ：可以用于类似 OpenAI 的文本生成任务，例如自动补全问题解答、生成代码段等。
2. **聊天机器人** ：通过高级 API 提供会话补全功能，可用于构建聊天机器人和对话系统。
3. **多模态模型** ：支持处理文本和图像信息，例如 Llava1.5 多模态模型，适用于需要混合数据输入的任务。
4. **嵌入生成** ：从文本生成嵌入向量，可用于语义搜索、文本相似度计算等。
5. **非文本任务** ：通过各种硬件加速（如 CUDA、Metal）优化性能，可用于需要高吞吐量和低延迟的任务。


##### 安装和配置

* 支持 Python 3.8+，并需要 C 编译器（Linux: gcc 或 clang；Windows: Visual Studio 或 MinGW；MacOS: Xcode）。

* 安装命令：

pip install llama-cpp-python


或安装预构建的支持 CPU 的轮子文件：

pip install llama-cpp-python --extra-index-url https://abetlen.github.io/llama-cpp-python/whl/cpu


* 支持多种硬件加速，如 OpenBLAS、CUDA、Metal 等，在安装时通过 `CMAKE_ARGS` 环境变量进行配置。


##### API 使用示例

###### 高级 API


from llama_cpp import Llama

# 初始化模型
llm = Llama(model_path="./models/7B/llama-model.gguf")
output = llm("Q: Name the planets in the solar system? A: ", max_tokens=32, stop=["Q:", "\n"], echo=True)

print(output)


###### 嵌入生成


import llama_cpp

llm = llama_cpp.Llama(model_path="path/to/model.gguf", embedding=True)
embeddings = llm.create_embedding("Hello, world!")


##### 网络服务器

运行 OpenAI 兼容的 Web 服务器：


pip install 'llama-cpp-python[server]'
python3 -m llama_cpp.server --model models/7B/llama-model.gguf


通过上述步骤，用户可以轻松地安装和使用 llama.cpp 来处理各种文本生成和处理任务，并通过 Python API 提供的高级和低级功能进行灵活开发。
