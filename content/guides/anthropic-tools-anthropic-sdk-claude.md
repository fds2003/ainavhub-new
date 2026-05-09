---
title: "anthropic-tools"
date: "2024-01-01 00:00:00+08:00"
description: anthropic-tools anthropic-tools Anthropic
slug: anthropic-tools-anthropic-sdk-claude
tags:
- claude
- sql
- tooluser
- tool
- anthropic-tools
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## anthropic-tools

`anthropic-tools`是一个用于与Anthropic模型进行交互的开发工具包（SDK）, 它让用户能够基于这些模型定义和使用不同的工具。通过创建和使用定制化的工具，开发者可以扩展Anthropic模型（如Claude）的功能，允许其执行更具体、更复杂的任务，比如进行数学计算、访问API、执行SQL查询等。下面用通俗语言总结了`anthropic-tools`的主要功能及使用场景。

##### 主要功能和类：

1. **BaseTool**

* 这是定义工具的基类。要创建一个自定义工具，只需继承`BaseTool`并定义`use_tool()`方法。此方法定义了工具的核心逻辑，即如何处理输入并生成输出。
2. **ToolUser**

* 此类负责处理与Anthropic模型的交互，你可以向它传递一个或多个`BaseTool`的实例。通过它，你可以使用已定义的工具与Claude模型互动。


##### 使用场景：

* 当你需要对Claude等Anthropic模型进行功能扩展时，比如实现一些特定的功能（如时间查询、数学计算、搜索等）。
* 当你想将模型的能力应用到更具体的应用场景中，比如调用外部API获取数据、执行数据库查询等。
* 在需要提升模型互动的可控性时，利用自定义工具明确地指导模型的行为，而非仅依赖其“理解”自然语言指令的能力。


##### 设置和入门：

* 先设置环境变量以配置Anthropic API密钥，然后创建Python虚拟环境并安装依赖。
* 学习如何使用`BaseTool`和`ToolUser`来分别定义工具和使用工具。
* 使用新的 _结构化_ 提示格式，该格式旨在简化提示构建和解析。


##### 使用案例举例：

假设你想实现一个简单的工具，让Claude告诉你某个时区的当前时间。你将会：

1. 继承`BaseTool`创建一个时间查询工具类。
2. 实例化该工具，定义其名称、描述和接受的参数等。
3. 创建`ToolUser`实例，传入所定义的工具。
4. 使用`ToolUser`的`use_tools()`方法和你想询问的提示，与Claude互动。


##### 注意：

尽管`anthropic-tools`提供了与Anthropic模型交互的灵活能力，它目前处于Alpha版本，未保证持续支持且不建议用于生产环境。

`anthropic-tools`适用于希望扩展和提升Anthropic模型（如Claude）能力的开发者，通过定制工具调用，可以实现更复杂、更具体的交互和任务执行。此工具的设计也显示了模型交互和自动化未来的一个发展方向。