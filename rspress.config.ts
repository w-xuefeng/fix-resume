import * as path from "node:path";
import { defineConfig, type UserConfig } from "@rspress/core";
import { pluginGoogleAnalytics } from "rsbuild-plugin-google-analytics";

const userConfigFn = async () => {
  return {
    root: path.join(import.meta.dirname, "docs"),
    lang: "zh",
    title: "扉客司 (fix resume)",
    description: "简历 = 数据信息 + 模版",
    icon: "/fx-resume-logo.png",
    logo: {
      light: "/fix-resume-logo-zh-transparent.png",
      dark: "/fix-resume-logo-zh-transparent.png",
    },
    locales: [
      {
        lang: "zh",
        label: "简体中文",
        title: "扉客司 (fix resume)",
        description: "简历 = 数据信息 + 模版",
      },
      {
        lang: "en",
        label: "English",
        title: "Fix Resume",
        description: "Resume = Information + Template",
      },
    ],
    globalStyles: path.join(import.meta.dirname, "styles", "global.css"),
    builderConfig: {
      plugins: [pluginGoogleAnalytics({ id: "G-03Q0QYG54E" })],
    },
    themeConfig: {
      socialLinks: [
        {
          icon: "github",
          mode: "link",
          content: "https://github.com/w-xuefeng/fix-resume",
        },
      ],
      locales: [
        {
          lang: "zh",
          title: "目录",
        },
        {
          lang: "en",
          title: "ON THIS PAGE",
        },
      ],
    },
  } as UserConfig;
};

export default defineConfig(userConfigFn);
