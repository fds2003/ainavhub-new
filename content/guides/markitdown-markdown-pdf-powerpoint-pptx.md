---
title: "MarkItDown"
date: "2024-01-01 00:00:00+08:00"
description: MarkItDown MarkItDown Markdown
slug: markitdown-markdown-pdf-powerpoint-pptx
tags:
- pdf
- markitdown.convert
- ocr
- markitdown
- xlsx
draft: false
related_tools:
- pdf-craft
- pdf-ocr-obsidian
- markpdfdown
- pdf document layout analysis
- llm.pdf
---

## MarkItDown

MarkItDown是一个实用工具库，用于将各种文件格式转换为Markdown格式，适用于索引、文本分析等多个场景。当前支持的文件格式包括：

* PDF (.pdf)
* PowerPoint (.pptx)
* Word (.docx)
* Excel (.xlsx)
* 图片（支持EXIF元数据和OCR）
* 音频（支持EXIF元数据和语音转录）
* HTML（特别处理如维基百科等）
* 各种其他文本格式（如csv、json、xml等）


使用MarkItDown非常简单，用户只需调用库的API即可轻松完成文件转换。例如，可以使用以下Python代码将Excel文件转换为Markdown文本：


from markitdown import MarkItDown

markitdown = MarkItDown()
result = markitdown.convert("test.xlsx")
print(result.text_content)


##### 使用场景

1. **学术研究** ：可以将PDF论文、Word文档等转换为Markdown格式，以便更方便地进行笔记和引用。
2. **数据分析** ：将Excel表格数据转换为Markdown，便于在文档中记录和分享数据分析结果。
3. **文档管理** ：对各种格式的文档进行统一的Markdown转换，增强文档的可读性和便捷性。
4. **内容创作** ：用于将多种输入文件（如演示文稿、音频转录等）整合为Markdown格式，便于进行内容编辑和发布。
5. **程序开发** ：在开发文档和代码注释中使用Markdown格式，增加代码文档的规范性与可读性。


MarkItDown项目欢迎贡献和建议，并遵循开源贡献协议，鼓励开发者参与到项目中。