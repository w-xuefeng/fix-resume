# Advanced Configuration and Underlying Schema

Fix Resume goes beyond minimalist operation flows by preserving infinite potential for advanced users and developers who need high customizability. This chapter will uncover the flexible maintenance mechanisms of Fix Resume.

## Flexible Maintenance Views: Form and Code

Whether you are maintaining your core "Personal Information (FRI)" or modifying your "Template Style (FRT)", the Fix Resume platform offers a dual-view system that can be freely toggled:

1. **Form View**:
   For all users. Just like filling out a questionnaire, you can maintain basic info, work experience, template layouts, and internationalization constants through standard and intuitive interactive forms.
2. **Code View**:
   For advanced users. Toggling immediately drops you down to the underlying JSON source objects, allowing you to freely modify, batch replace, or debug data comprehensively.

> **Best Practice: Say No to Starting from Scratch**
> When creating a resume for the first time, instead of staring at a blank page, use the "**Random Example**" feature directly. The platform will instantly populate high-quality random content with a complete structure as a modifying baseline. **Getting from 1 to 100 is way easier than 0 to 1.**

## Enabling Advanced Features & Custom Fields

If you wish to add specific dimensions outside the built-in info system, such as specialty indexes, video links, etc., you can enable the `additionalProperties` (**Add Extra Field**) feature in **"Settings -> Advanced Settings"**.

Once enabled, combined with the Code View, you can inject any extra modules without breaking the main architecture.
This also applies if you are unsatisfied with current templates and want a custom refactor—you can flexibly toggle the visibility of different display modules by turning on the corresponding configuration.

---

## Core Infrastructure: JSON Schema Details

To ensure the "Data Information (FRI)" is completely decoupled from the "Template Style (FRT)", we maintain highly strict JSON Schema constraints at the foundational level. Below is a simplified overview of the two core files. The full json schema please refer to [information-en.json](https://pub.tangyuan.space/schema/fx-resume/information-en.json) and [template-en.json](https://pub.tangyuan.space/schema/fx-resume/template-en.json)。

### 1. Structured Resume Info Schema (information-en.json overview)

This JSON Schema controls the data format of all FRI files you create. Through this standard constraint, even if you switch a hundred templates, your data remains general and valid.

```json
{
  "title": "ResumeInformation",
  "description": "Structured Resume Information Data Model",
  "type": "object",
  "properties": {
    "resumeLanguage": {
      "type": "string",
      "enum": ["zh", "en"],
      "description": "Indicates the primary language used for this data"
    },
    "basicInformation": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "phone": { "type": "string" },
        "email": { "type": "string" }
      },
      "description": "Basic info module under strict constraints"
    },
    "workExperiences": {
      "type": "array",
      "description": "Work experiences array, including start/end times and detailed descriptions"
    },
    "extraModules": {
      "type": "array",
      "description": "Alternative modules allowing arbitrary content input"
    }
  }
}
```

### 2. Resume Template Build Schema (template-en.json overview)

This JSON Schema ensures that styles and layout configurations provided by different users can be uniformly read by the engine. We have even built native bilingual support (`message.zh` and `message.en`) at the schema level.

```json
{
  "title": "Resume Template",
  "description": "Data schema defining resume template structure and multi-language support",
  "properties": {
    "name": { "type": "string", "description": "Template identification name" },
    "message": {
      "type": "object",
      "properties": {
        "zh": {
          "type": "object",
          "description": "Chinese message and copy key-value mappings"
        },
        "en": {
          "type": "object",
          "description": "English message and copy key-value mappings"
        }
      },
      "description": "Constant and terminology dictionary in multi-language environments"
    },
    "layout": {
      "type": "object",
      "properties": {
        "style": { "type": "string", "description": "Template global style system identifier" },
        "modules": {
          "type": "array",
          "description": "Layout logic and rendering rules of each detail display component in the template"
        }
      }
    }
  }
}
```
