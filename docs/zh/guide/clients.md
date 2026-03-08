# 客户端与可用平台

扉客司提供了出色的多端跨平台支持，无论在哪您都可以掌握您的履历数据。

## Web 网页端
网页版开箱即用，免去任何安装过程。所有的功能在浏览器内均可实现，且保证数据在您本地环境内运算和保存。
- **发布访问地址**： [https://fix.my-resume.space](https://fix.my-resume.space)
- **适合场景**：首次尝鲜、快速修改某条小经历抑或分享成果。

### 浏览器兼容性

| 浏览器 | 最低要求版本 |
| :---: | :---: |
| <div class="flex align-center justify-center gap-2"><img src="/chrome.svg" alt="Chrome" width="24" /> Chrome </div> | 134.0.0.0 |
| <div class="flex align-center justify-center gap-2"><img src="/edge.svg" alt="Edge" width="24" /> Edge</div> | 134.0.0.0 |
| <div class="flex align-center justify-center gap-2"><img src="/firefox.svg" alt="Firefox" width="24" /> Firefox</div> | 141.0.0.0 |

## Desktop 桌面客户端
为了更深度专业的使用者，我们诚挚提供桌面客户端产品。它进一步保证了脱线情况下的完全可用性及本机的重度操作体验。
- **客户端地址发布页**：[https://desktop.my-resume.space](https://desktop.my-resume.space)
- **适合场景**：重度职场记录者、常态化离线办公用户、追求原生应用体验的用户。

### 系统要求

| 操作系统 | 最低要求版本 |
| :---: | :---: |
| <div class="flex align-center justify-center gap-2"><img src="/win.svg" alt="Windows" width="24" /> Windows</div> | 10 |
| <div class="flex align-center justify-center gap-2"><img src="/macos.svg" alt="macOS" width="24" /> macOS</div> | 26.3.1 |

> 无论你使用哪个平台产生您的 FRI 等工程文件，它们在所有扉客司工具生态内都是完全共通、向下兼容的。

## 数据库存储类型

您可以在平台的 **“设置”** 中自由选择适合的数据存储方式。我们提供完全离线的本地方案与跨端互通的云端方案。

### Web 网页端存储
网页版支持以下存储类型：
- **IndexedDB / OPFS (私有文件系统)**: 默认选项。无需登录，完全免费。您的数据绝对安全地保存在当前浏览器特定的离线环境中。
  - *注意*：不支持跨浏览器或跨设备的数据互通。但提供了强大的数据导入/导出功能，您可以随时单项导出信息、模板、简历为 JSON（或 `.fri`, `.frt`, `.frr` 文件），也可以在“设置”中一键备份全量数据。
- **Cloud 云端数据库 (Pro 计划)**: 进阶选项。登录并订阅 Pro 计划后解锁。数据将安全地加密保存在云端，实现跨浏览器、跨设备的无缝同步。支持在线简历公开分享以及访客记录追踪等高级功能。

### Desktop 桌面客户端存储
桌面端在支持云端服务的基础上，提供了更深度的本地支持：
- **本地 FS (文件系统)**: 默认选项。数据全部作为实际文件无痕存放在您电脑的指定硬盘目录下。同样完美支持上述的数据单项导入/导出及全量系统备份。
- **Cloud 云端数据库 (Pro 计划)**: 与网页版体验一致，订阅后即可多端同步并开启高级线上分享功能。
