---
title: "BlenderMCP"
date: "2024-01-01 00:00:00+08:00"
description: 'BlenderMCP BlenderMCP  Blender '
slug: blendermcp-blender-claude-mcp
tags:
- claude
- python
- blendermcp
- blender
- mcp
draft: false
related_tools:
- claude code but with openai models
- claude code mcp server
- claude code base action
- mcp manager for claude desktop
- claude code
---

## BlenderMCP

BlenderMCP 是一个连接 Blender 和 Claude AI 的工具，它通过模型上下文协议 (MCP) 让 Claude AI 能够直接与 Blender 交互并控制 Blender。简单来说，你可以用 Claude AI 的自然语言提示来辅助你在 Blender 中进行 3D 建模、场景创建和修改。

**主要功能：**

* **双向通信：** Claude AI 和 Blender 之间可以互相通信。
* **对象操作：** 可以在 Blender 中创建、修改和删除 3D 对象。
* **材质控制：** 可以应用和修改材质和颜色。
* **场景检查：** 获取当前 Blender 场景的详细信息。
* **代码执行：** 从 Claude 在 Blender 中运行 Python 代码。


**使用场景：**

* **通过文本描述创建 3D 模型和场景：** 例如，你可以用 Claude AI 创建一个具有特定风格的房间场景，或者根据参考图像生成 3D 模型。
* **快速修改现有模型和场景：** 例如，改变模型的颜色、材质，调整灯光，移动对象等。
* **自动化 Blender 任务：** 例如，批量创建多个对象，或者根据特定的规则调整场景的布局。
* **与其他 AI 工具集成：** 可以将 Blender 和其他 AI 工具（如用于生成图像或生成代码的工具）结合使用，实现更高级的功能。


**使用注意事项：**

* **安全风险：** 使用 `execute_blender_code` 功能时要小心，因为它可以执行任意 Python 代码，可能存在安全风险。
* **逐步分解任务：** 复杂的任务可能需要分解为更小的步骤来完成。


总而言之，BlenderMCP 提供了一种使用 AI 来辅助 Blender 创作的新方式，可以简化建模流程，提高创作效率，并且开启了更多自动化和集成 possibilities.