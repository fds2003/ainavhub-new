---
title: "llama3.java"
date: "2024-01-01 00:00:00+08:00"
description: 'llama3.java llama3.java  llama3.java '
slug: llama3.java-java-jvm-llama-inference
tags:
- tokenizer
- llama2.java
- llama3.java
- face
- memorysegment
draft: false
related_tools:
- ama
- bananaface
- facebook ads library mcp server
- face-to-sticker
- flashface
---

## llama3.java

# llama3.java

## 概述

`llama3.java` 是一个用Java编写的单文件项目，它的目的是在JVM（Java虚拟机）上进行Llama 3的推理（inference）。它是`llama2.java`项目的继任者，后者基于Andrej Karpathy的`llama2.c`以及他的一些教育视频。

## 功能特点

1. **单文件、无依赖** ：整个项目被打包在一个Java文件中，无需外部依赖。
2. **模型格式解析** ：支持解析GGUF格式的模型文件。
3. **Llama 3 分词器** ：基于minbpe，实现了Llama 3 Tokenizer。
4. **推理功能** ：支持Llama 3的推理，并使用了Grouped-Query Attention技术。
5. **量化支持** ：支持Q8_0和Q4_0量化方法。
6. **矩阵乘法优化** ：利用Java的Vector API，实现了高效的矩阵-向量乘法。
7. **简单命令行界面** ：提供`--chat`和`--instruct`模式，用于不同的交互方式。


## 安装和使用

1. **环境要求** ：需要Java 21及以上版本，特别是需要支持`MemorySegment` mmap特性。
2. **模型下载** ：从Hugging Face下载量化的模型文件（推荐使用Q4_0量化模型）。
3. **运行命令** ：
* 使用`jbang`工具运行：

jbang Llama3.java --help


* 或者直接运行：

chmod +x Llama3.java
./Llama3.java --help


4. **手动构建和运行** ：可以通过`Makefile`或手动编译并运行生成的JAR文件。


## 使用场景

1. **教育和研究** ：适合用作教育研究, 可以深入了解Llama 3推理流程及其在Java中的实现。
2. **性能测试和优化** ：用于测试和调整JVM上的编译器优化，特别是针对Graal编译器。
3. **模型推理** ：在没有强大GPU或资源受限情况下，使用CPU进行模型的推理和验证。


## 性能表现

运行在不同硬件与Llama.cpp对比性能测试结果如下：

##### Intel 13900H

Model | tokens/s | Implementation
---|---|---
Llama-3-8B-Instruct-Q4_0.gguf | 7.53 | llama.cpp
Llama-3-8B-Instruct-Q4_0.gguf | 6.95 | llama3.java
Llama-3-8B-Instruct-Q8_0.gguf | 5.16 | llama.cpp
Llama-3-8B-Instruct-Q8_0.gguf | 4.02 | llama3.java

##### AMD 3950X

Model | tokens/s | Implementation
---|---|---
Llama-3-8B-Instruct-Q4_0.gguf | 9.26 | llama.cpp
Llama-3-8B-Instruct-Q4_0.gguf | 8.03 | llama3.java
Llama-3-8B-Instruct-Q8_0.gguf | 5.79 | llama.cpp
Llama-3-8B-Instruct-Q8_0.gguf | 4.92 | llama3.java