# 进阶配置与底层 Schema 解析

扉客司（fix resume）在追求极致简洁的操作流程之外，也为需要高度自定义的高阶用户和开发者保留了无穷的潜力空间。本章节将为您揭开扉客司灵活维护机制的面纱。

## 灵活的维护视图：表单与代码相结合

无论是维护您的核心“个人信息（FRI）”还是修改您的“模板样式（FRT）”，扉客司平台都为您提供了自由切换的双重视图体系：

1. **表单视图 (Form View)**：
   面向所有用户。您可以像填问卷一样，通过标准直观的交互表单去维护基础信息、工作履历、模板布局以及国际化常量的配置。
2. **代码视图 (Code View)**：
   面向高阶用户。点击切换后直通底层 JSON 源码对象，您可以大刀阔斧地灵活修改、批量替换或调试数据。

> **最佳实践：拒绝从零起步**
> 初次创建履历时，与其面对空白无所适从，不如直接使用“**随机示例**”功能。平台会一键为您填充一份结构完整的优质随机内容作为修改基底。**从 1 到 100，远比从 0 到 1 容易得多。**

## 开启高级特性与自定义底层字段

如果您想在内置信息体系之外补充特定的专属维度，比如特长指数、视频链接等，您可以在平台的 **“设置 -> 高级设置”** 中开启 `additionalProperties`（**添加额外字段**）功能。

开启后配合代码视图，您即可在不破坏主体架构的前提下，注入任意额外模块。
这也同样适用于对现有模板不满意时的随心重构——您可以通过开启对应配置，灵活控制不同展示模块的显隐性。

---

## 核心底层设计：JSON Schema 结构详解

为了保证“数据信息（FRI）”与“模板样式（FRT）”完全解耦，我们在底层维护了极其严密的 JSON Schema 约束。以下是两份核心文件的结构精简概览。完整 json schema 请参考 [information-zh.json](https://pub.tangyuan.space/schema/fx-resume/information-zh.json) 和 [template-zh.json](https://pub.tangyuan.space/schema/fx-resume/template-zh.json)。

### 1. 结构化简历信息模型 (information-zh.json 模型概览)

该 JSON Schema 控制着您创建的所有 FRI 业务数据文件格式。通过这种标准约束，哪怕换一百套模版，您的数据依然通用且有效。

```json
{
  "title": "ResumeInformation",
  "description": "结构化简历信息数据模型",
  "type": "object",
  "properties": {
    "resumeLanguage": {
      "type": "string",
      "enum": ["zh", "en"],
      "description": "说明该份数据使用的主要语种"
    },
    "basicInformation": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "phone": { "type": "string" },
        "email": { "type": "string" }
      },
      "description": "受严谨约束的基本信息模块"
    },
    "workExperiences": {
      "type": "array",
      "description": "工作经历数组，涵盖开始/结束时间与详细描述"
    },
    "extraModules": {
      "type": "array",
      "description": "允许任意内容录入的支持模块"
    }
  }
}
```

### 2. 简历模板构建模型 (template-zh.json 模型概览)

该 JSON Schema 确保了不同用户提供的样式、布局配置能够被引擎统一读取。我们甚至在 Schema 层级原生构筑了双语言支持（`message.zh` 与 `message.en`）。

```json
{
  "title": "简历模板",
  "description": "定义简历模板结构和多语言支持的数据模式",
  "properties": {
    "name": { "type": "string", "description": "模板标识名" },
    "message": {
      "type": "object",
      "properties": {
        "zh": {
          "type": "object",
          "description": "中文消息与文案键值映射"
        },
        "en": {
          "type": "object",
          "description": "英文消息与文案键值映射"
        }
      },
      "description": "多语言环境下的常量与名词词典"
    },
    "layout": {
      "type": "object",
      "properties": {
        "style": { "type": "string", "description": "模板总体样式体系标识" },
        "modules": {
          "type": "array",
          "description": "各个细节展示组件在模板中的布局逻辑与渲染规则"
        }
      }
    }
  }
}
```
