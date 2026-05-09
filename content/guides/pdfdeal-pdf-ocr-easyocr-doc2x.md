---
title: "pdfdeal pdfdeal PDFDeal"
date: "2024-01-01 00:00:00+08:00"
description: 'pdfdeal PDFDeal  PDFDeal '
slug: pdfdeal-pdf-ocr-easyocr-doc2x
tags:
- pdf
- md
- v0.1.3
- ocr
- pdfdeal
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## pdfdeal

**PDFDeal 介绍及使用场景**

**PDFDeal** 是一个工具，旨在更方便地处理PDF文件，提取可读文本并进行OCR（光学字符识别），以识别图像文本并清理格式，使其更适合知识库构建。PDFDeal 使用了 [easyocr](<https://github.com/JaidedAI/EasyOCR>) 或 [Doc2x](<./docs/doc2x.md>) 来识别图像文本，并将其添加到原文本中。如果输出格式为PDF，这样可以确保新PDF中的文本与原始PDF具有相同的页数。

##### 新特性

###### V0.1.3

* 新功能：在Markdown文件中替换所有远程图像为本地图像。
* 重构了`pdfdeal`函数，现在支持批量处理文件。
* 修复了一些OCR文件处理功能的输出格式问题。
* 修复了一些情况下`pdfdeal`无法输出md文件的问题。
* 移除了版本0.0.x使用的`Doc2x`。


##### 使用场景

PDFDeal主要用于以下场景：

1. **文本提取** ：将PDF中的文本提取出来，便于阅读和处理。
2. **图像OCR识别** ：识别PDF中的图像文字，生成可编辑文本。
3. **知识库构建** ：通过提取和OCR处理后的文本，可以更好地输入到知识库应用中，提高知识库的识别率。
4. **Markdown图像处理** ：将Markdown文件中的远程图像替换为本地图像，方便管理和使用。


##### 安装

从 PyPI 安装：


pip install 'pdfdeal[easyocr]'


使用 `pytesseract`，需要先安装 [tesseract](<https://github.com/tesseract-ocr/tesseract>)：


pip install 'pdfdeal[pytesseract]'


使用自定义OCR函数或Doc2x或跳过OCR：


pip install pdfdeal


从源码安装：


pip install 'pdfdeal[all] @ git+https://github.com/Menghuan1918/pdfdeal.git'


##### 使用

引入函数 `from pdfdeal import deal_pdf`。函数接受的参数包括：

* **input** : PDF文件的本地路径，可以是单个路径或路径列表。
* **output** : 指定输出类型，可以是`texts`（文本列表）、`md`（Markdown格式）或`pdf`（新PDF文件）。
* **ocr** : 自定义OCR函数，默认为`None`。
* **language** : OCR使用的语言列表，默认是简体中文(`ch_sim`)和英文(`en`)。
* **GPU** : 是否使用GPU进行OCR处理，默认是`False`。
* **path** : 保存输出文件的目录路径。


例如，将所有Markdown文件中的远程图像替换为本地图像：


from pdfdeal import md_replace_imgs

md_replace_imgs(
mdfile="Output/sample.md",
replace="local",
outputpath="./Output/test/md_replace_imgs",
)


###### 处理文件夹中的所有PDF文件，并保存到Output文件夹


import os
from pdfdeal import deal_pdf
for root, dirs, files in os.walk("./PPT"):
for file in files:
file_path = os.path.join(root, file)
deal_pdf(
input=file_path, output="pdf", language=["en"], path="./Output", GPU=True
)
print(f"Deal with {file_path} successfully!")


###### 获取PDF中文本内容的列表


from pdfdeal import deal_pdf
Text = deal_pdf(input="test.pdf", output="texts", language=["en"], GPU=True)
for text in Text:
print(text)


###### 使用pytesseract进行OCR处理


from pdfdeal import deal_pdf, gen_folder_list
files = gen_folder_list("tests/pdf", "pdf")
output_path = deal_pdf(
input=files,
output="md",
ocr="pytesseract",
language=["eng"],
path="Output",
)
for f in output_path:
print(f"Save processed file to {f}")


###### 跳过OCR处理


print(deal_pdf(input="test.pdf",ocr="pass"))


###### 支持Doc2x


from pdfdeal.doc2x import Doc2X

Client = Doc2X()
filelist = gen_folder_list("./test","pdf")
Client.pdfdeal(filelist)


详细官方文档和代码示例可以参考[GitHub仓库](<https://github.com/Menghuan1918/pdfdeal>)。