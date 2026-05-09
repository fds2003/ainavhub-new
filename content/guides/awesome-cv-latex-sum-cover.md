---
title: "Awesome CV Awesome CV Awesome CV"
date: "2024-01-01 00:00:00+08:00"
description: 'Awesome CV Awesome CV  LaTeX '
slug: awesome-cv-latex-sum-cover
tags:
- id
- pdf
- latex
- github
- overleaf
draft: false
related_tools:
- hunyuanvideo-i2v
- android mcp server
- vidorag
- pdf-ocr-obsidian
- find my kids
---

## Awesome CV

**Awesome CV** 是一个基于 LaTeX 的模板，用于创建卓越的个人简历（CV）、履历（Résumé）或求职信（Cover Letter）。该模板灵感来源于 [Fancy CV](<https://www.sharelatex.com/templates/cv-or-resume/fancy-cv>)，其结构清晰、标记语义明确，方便用户定制自己的模板。

##### 使用场景

1. **求职** ：通过专业且美观的简历和求职信提高求职成功率。
2. **学术申请** ：适合用于申请学术职位或研究生项目的CV制作。
3. **专业展示** ：适用于需要以专业方式展示个人信息的各种场合，如会议、演讲等。


##### 使用方法

1. **系统要求** ：需要一个完整的TeX发行版，推荐使用 TeX Live。
2. **编译命令** ：
* 通过命令行编译：

xelatex {your-cv}.tex


* 通过Docker编译：

docker run --rm --user $(id -u):$(id -g) -i -w "/doc" -v "$PWD":/doc thomasweise/texlive make


##### 预览

* **Résumé** 示例：[PDF 示例](<https://raw.githubusercontent.com/posquit0/Awesome-CV/master/examples/resume.pdf>)
* **Cover Letter** 示例：[PDF 示例](<https://raw.githubusercontent.com/posquit0/Awesome-CV/master/examples/coverletter.pdf>)


##### 其他

* 项目主页：[Awesome CV GitHub 页面](<https://github.com/posquit0/Awesome-CV>)
* 在线编辑：[OverLeaf 上编辑 Résumé](<https://www.overleaf.com/latex/templates/awesome-cv/tvmzpvdjfqxp>)
* 捐赠支持：[PayPal](<https://www.paypal.me/posquit0>)


如需更多信息或支持，请联系项目维护者。祝使用愉快！