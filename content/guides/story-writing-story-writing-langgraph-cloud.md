---
title: "story-writing story-writing Story writing"
date: "2024-01-01 00:00:00+08:00"
description: story-writing Story writing LangGraph Cloud
slug: story-writing-story-writing-langgraph-cloud
tags:
- url
- clo
- cloud
- streamlit
- story
draft: false
related_tools:
- cloudflare agents
- ai-clothingtryon
- magic clothing
- magicclothing
- cloudflare rag
---

## story-writing

Story writing（故事创作）是通过文字创作故事的过程。这个过程不仅仅是简单地记录事件，还包括构建角色、设定场景、设定冲突和解决方案，以吸引读者的兴趣并传达特定的信息或情感。在现代技术的帮助下，如LangGraph Cloud，故事创作更加智能化和互动化，用户可以在创作过程中获得实时的反馈和建议。

# 故事创作的使用场景

## 网站使用

要使用这个基于Streamlit的应用，你需要在本地运行该应用。首先克隆代码仓库，然后在仓库目录下运行`streamlit run App_Information.py`。如果你是在自己托管的图中（参见LangGraph Cloud的文档以了解如何在LangGraph Cloud上部署），需要在`pages/Story_Writing.py`文件中的`get_client`函数中更改URL为你的部署地址。

运行`streamlit run App_Information.py`后，你可以在浏览器中访问 `http://localhost:8501` 查看应用。如果不想自己托管，可以访问 [官方网站](<https://langchain-story-writing.streamlit.app>)。

## 背景

这个应用旨在展示LangGraph Cloud的部分功能，以一种有趣和互动的方式帮助用户创作故事。用户可以编辑已经写好的章节，或通过编写新的章节来继续故事。每次编辑或继续故事时，都会创建一个新的章节，并且每个章节都保存有关内容、标题以及与其他章节之间的关系信息。

## 图状态管理

LangGraph Cloud的一大特点是能够在多次运行中保持持久状态。在此应用中，我们通过一个章节状态图来保留故事的进展信息，每次编辑或继续故事时，图中都会增加一个新节点，并维护章节之间的关系，如兄弟章节、子章节、父章节和表亲章节等。

## 应用使用方法

在查看章节时，你会看到故事的标题、当前章节的标题和内容、章节号以及不同版本的当前章节和反馈按钮。用户可以通过选择之前或之后的章节来导航故事，并通过点击按钮提供“好”或“差”的反馈。

在图运行期间，页面会实时显示图的状态变化，如等待用户输入、摘要故事、集思广益章节创意、计划章节大纲和编写章节。当图完成编写后，应用会返回到章节查看状态。

## 未来发展方向

应用有许多可改进的地方，包括：

* 改进图的智能性（如更智能的写作过程、调用著名作家的写作风格工具）
* 增加图的可视化功能
* 增加更多功能（如用户对章节的直接编辑）


通过这些改进，故事创作工具将变得更加用户友好和功能强大。