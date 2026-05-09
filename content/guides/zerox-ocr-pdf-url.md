---
title: "Zerox OCR Zerox OCR Zerox OCR"
date: "2024-01-01 00:00:00+08:00"
description: 'Zerox OCR Zerox OCR  Zerox OCR '
slug: zerox-ocr-pdf-url
tags:
- url
- pdf
- aws
- document
- unstructured
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## Zerox OCR

## Zerox OCR 简介

Zerox OCR 是一种极其简便的方法，用于将文档进行光学字符识别（OCR）并方便人工智能进行后续处理。鉴于文档往往包含复杂布局、表格、图表等，视觉模型在处理这些内容时尤其有效。

基本逻辑如下：

1. 提供一个 PDF 文件（URL 或文件缓冲区）。
2. 将 PDF 转换成一系列图像。
3. 将每个图像传给 GPT，让其生成 Markdown 格式的文本。
4. 聚合所有响应，并返回 Markdown 格式的结果。


这看起来很简单，但使用 `gpt-4o-mini` 方法，这不仅具备价格竞争优势，还能获得显著更好的结果。

##### 价格比较

以下是 Zerox OCR 与其他文档处理服务的价格对比（处理 1000 页）：

服务 | 费用 | 准确度 | 表格质量
---|---|---|---
AWS Textract | $1.50 / 1000 页 | 低 | 低
Google Document AI | $1.50 / 1000 页 | 低 | 低
Azure Document AI | $1.50 / 1000 页 | 高 | 中
Unstructured (PDF) | $10.00 / 1000 页 | 中 | 中
Zerox (gpt-mini) | $4.00 / 1000 页 | 高 | 高

## 安装


npm install zerox


Zerox 使用 `graphicsmagick` 和 `ghostscript` 进行 PDF 到图像的转换。这些工具应会自动下载，但有时需要手动安装。

## 使用方法

##### 通过文件 URL


import { zerox } from "zerox";

const result = await zerox({
filePath: "https://omni-demo-data.s3.amazonaws.com/test/cs101.pdf",
openaiAPIKey: process.env.OPENAI_API_KEY,
});


##### 通过本地路径


import path from "path";
import { zerox } from "zerox";

const result = await zerox({
filePath: path.resolve(__dirname, "./cs101.pdf"),
openaiAPIKey: process.env.OPENAI_API_KEY,
});


##### 选项


const result = await zerox({
// 必填
filePath: "path/to/file",
openaiAPIKey: process.env.OPENAI_API_KEY,

// 可选
concurrency: 10, // 并发处理页面数。
maintainFormat: false, // 较慢但有助于保持一致的格式。
cleanup: true, // 处理结束后清理临时图像文件。
outputDir: undefined, // 将合并结果保存到文件。
tempDir: "/os/tmp", // 用于临时文件的目录（默认：系统临时目录）。
});


`maintainFormat` 选项通过将前一页的输出作为下一页的附加上下文传递，尝试保持 Markdown 格式的一致性。这需要同步运行请求，因而速度较慢，但对于包含大量表格数据或表格跨页的文档非常有用。

##### 示例结果


{
completionTime: 10038,
fileName: 'invoice_36258',
inputTokens: 25543,
outputTokens: 210,
pages: [
{
content: '# INVOICE # 36258\n' +
'**Date:** Mar 06 2012  \n' +
'**Ship Mode:** First Class  \n' +
'**Balance Due:** $50.10  \n' +
'## Bill To:\n' +
'Aaron Bergman  \n' +
'98103, Seattle,  \n' +
'Washington, United States  \n' +
'## Ship To:\n' +
'Aaron Bergman  \n' +
'98103, Seattle,  \n' +
'Washington, United States  \n' +
'\n' +
'| Item                                       | Quantity | Rate   | Amount  |\n' +
'|--------------------------------------------|----------|--------|---------|\n' +
"| Global Push Button Manager's Chair, Indigo | 1        | $48.71 | $48.71  |\n" +
'| Chairs, Furniture, FUR-CH-4421             |          |        |         |\n' +
'\n' +
'**Subtotal:** $48.71  \n' +
'**Discount (20%):** $9.74  \n' +
'**Shipping:** $11.13  \n' +
'**Total:** $50.10  \n' +
'---\n' +
'**Notes:**  \n' +
'Thanks for your business!  \n' +
'**Terms:**  \n' +
'Order ID : CA-2012-AB10015140-40974  ',
page: 1,
contentLength: 747
}
]
}


##### 许可证

本项目基于 MIT 许可证授权。