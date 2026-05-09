---
title: "Humanify"
date: "2024-01-01 00:00:00+08:00"
description: 'Humanify Humanify  Humanify '
slug: humanify-javascript-chatgpt-llama2
tags:
- ast
- if
- humanify
- e.length
- chatgpt
draft: false
related_tools:
- recammaster
- fastvlm
- ai podcast transcriber
- fast rag
- aimangastudio
---

## Humanify

##### Humanify 简介

Humanify 是一个用于反模糊化 JavaScript 代码的工具，利用大型语言模型（如 ChatGPT 和 llama2）以及其他工具来解混淆、去最小化、转译、反编译和解包 JavaScript 代码。需要注意的是，大型语言模型并不进行结构上的修改，它们仅提供变量和函数重命名的提示。实际的重命名工作是通过 Babel 在抽象语法树（AST）层面完成的，以确保代码的等效性。

###### 使用示例

给定以下最小化的代码：


function a(e,t){var n=[];var r=e.length;var i=0;for(;i<r;i+=t){if(i+t<r){n.push(e.substring(i,i+t))}else{n.push(e.substring(i,r))}}return n}


Humanify 工具将输出一个可读性更强的版本：


function splitString(inputString, chunkSize) {
var chunks = [];
var stringLength = inputString.length;
var startIndex = 0;
for (; startIndex < stringLength; startIndex += chunkSize) {
if (startIndex + chunkSize < stringLength) {
chunks.push(inputString.substring(startIndex, startIndex + chunkSize));
} else {
chunks.push(inputString.substring(startIndex, stringLength));
}
}
return chunks;
}


##### 使用场景

Humanify 可用于以下场景：

1. **代码分析与调试** ：开发者可以使用 Humanify 反模糊化已压缩或已混淆的 JavaScript 代码，使其更易于阅读和调试。
2. **安全审计** ：安全研究人员可以利用 Humanify 解析恶意软件或其他安全威胁中涉及的混淆代码，以便更好地理解和应对潜在的威胁。
3. **学习与教学** ：教育者可以使用 Humanify 来演示代码优化和混淆的原理，并帮助学生理解复杂的 JavaScript 代码。
4. **代码重构与维护** ：在代码的重构和维护过程中，开发者可以使用 Humanify 来简化压缩和难以理解的旧代码，为重构和优化提供帮助。


##### 安装与使用

**使用 ChatGPT：**

需要一个 ChatGPT API 密钥，可以通过以下方式之一提供：


echo "OPENAI_TOKEN=your-token" > .env && npm start --  -o deobfuscated.js obfuscated-file.js
export OPENAI_TOKEN="your-token" && npm start --  -o deobfuscated.js obfuscated-file.js
OPENAI_TOKEN=your-token npm start --  -o deobfuscated.js obfuscated-file.js
npm start -- --key="your-token"  -o deobfuscated.js obfuscated-file.js


**使用 llama2：**

需要有 Python 3 环境和 [conda](<https://docs.conda.io/projects/conda/en/stable/user-guide/install/index.html>) 安装，还需要一个 Huggingface 账户来访问 [llama-2-7b-chat-hf model](<https://huggingface.co/meta-llama/Llama-2-7b-chat-hf>)。


conda env create -f environment.yaml
conda activate humanify


运行:


npm start -- --local -o deobfuscated.js obfuscated-file.js


##### 特性

* 使用 ChatGPT/llama2 提供智能变量和函数重命名建议。
* 使用自定义和现成的 Babel 插件在 AST 层面对代码进行解混淆。
* 使用 Webcrack 解包 Webpack 打包的代码。


##### 贡献与授权

欢迎通过 fork 仓库并使用分支提交拉取请求的方式来贡献代码。该项目的代码使用 MIT 许可证授权。