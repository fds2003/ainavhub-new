---
title: "hnsw hnsw HNSW"
date: "2024-01-01 00:00:00+08:00"
description: hnsw HNSW HNSW（Hierarchical Navigable Small World），。，、。HNSW。 HNSW ...
slug: hnsw-hierarchical-navigable-small-world
tags:
- hnsw
- log
- hierarchical
- id
- pinecone
draft: false
related_tools:
- logic rl
- vlogger
- add human-like narration to your blog or news site
- logo diffusion
- logocreator
---

## hnsw

# HNSW 简介

HNSW（Hierarchical Navigable Small World）是一种用于高维向量数据的快速近似最近邻搜索的算法，适用于内存中的图结构。此算法通过分层的小世界图结构，提供了高效的插入、删除和搜索操作。HNSW在处理大型数据集和高维向量搜索任务时表现尤为出色。

## HNSW 算法操作复杂度

操作 | 复杂度 | 描述
---|---|---
插入 | $O(log(n))$ | 向图中插入一个向量
删除 | $O(M^2 \cdot log(n))$ | 从图中删除一个向量
搜索 | $O(log(n))$ | 搜索向量的近邻
查找 | $O(1)$ | 根据ID检索向量

> 复杂度依赖于$n$（图中向量数量）和$M$（每个节点的最大邻居数）。

## 使用场景

HNSW由于其高效的性能和内存使用，适用于多种需要进行快速近似最近邻搜索的场景，例如：

1. **向量数据库** ：用于替代例如Pinecone和Weaviate等向量数据库，进行高效的内存操作。
2. **图像和视频检索** ：在大规模多媒体数据中基于特征向量进行相似度搜索。
3. **推荐系统** ：根据用户和物品的特征向量，进行快速推荐。
4. **自然语言处理** ：例如基于词嵌入向量的文本相似度计算。


## 使用示例

以下是HNSW的一个简单使用示例：


// 初始化一个新图
g := hnsw.NewGraph[hnsw.Vector]()

// 添加向量到图中
g.Add(
hnsw.MakeVector("1", []float32{1, 1, 1}),
hnsw.MakeVector("2", []float32{1, -1, 0.999}),
hnsw.MakeVector("3", []float32{1, 0, -0.5}),
)

// 搜索最近邻
neighbors := g.Search(
[]float32{0.5, 0.5, 0.5},
1,  // 搜索返回最近的1个邻居
)
fmt.Printf("best friend: %v\n", neighbors[0].Embedding())
// 输出: best friend: [1 1 1]


## 持久化

虽然所有图操作都是在内存中进行的，但HNSW支持从持久存储加载和保存图结构。可以使用`Graph.Export`和`Graph.Import`接口，也可以使用`SavedGraph`类型操作单个文件。

下面是一个示例：


// 路径
path := "some.graph"

// 加载已保存的图
g1, err := LoadSavedGraph[hnsw.Vector](path)
if err != nil {
panic(err)
}

// 插入一些向量
for i := 0; i < 128; i++ {
g1.Add(MakeVector(strconv.Itoa(i), []float32{float32(i)}))
}

// 保存到磁盘
err = g1.Save()
if err != nil {
panic(err)
}

// 之后可以再次从磁盘加载图
g2, err := LoadSavedGraph[Vector](path)
if err != nil {
panic(err)
}


总结来说，HNSW提供了一种高效、可扩展的解决高维向量近似最近邻搜索问题的方法，并在多个实际应用场景中展现出强大的能力。