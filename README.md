<div align="center">
  <img src="docs/public/fx-resume-logo.png" width="160" alt="Fix Resume Logo" />
  <h1>Fix Resume - Docs</h1>
  <p><strong>Resume = Information + Template</strong> | Your Exclusive Resume Manager</p>
  <p>
    <a href="https://fix.my-resume.space">Live Online</a> |
    <a href="https://desktop.my-resume.space">Desktop</a> |
    <a href="https://docs.my-resume.space">Docs</a>
  </p>
</div>

English | [简体中文](README-zh_CN.md)

---

This is the Official Documentation Site for [Fix Resume](https://fix.my-resume.space). 
It is built with [Rspress](https://rspress.dev/), providing a fast, modern, and bilingual (Chinese & English) reading experience.

## ✨ Features

- **Bilingual Support**: Native `zh` (简体中文) and `en` (English) layouts and content.
- **Fast Build Times**: Powered by Rsbuild and Rust-based toolchain underneath.
- **Custom Theming**: Tailored brand colors and styling matching the Fix Resume ecosystem.

## 📁 Directory Structure

```text
docs/
├── en/               # English documentation
│   ├── guide/        # English User guide
│   └── index.md      # English Home page
├── zh/               # Chinese documentation
│   ├── guide/        # Chinese User guide
│   └── index.md      # Chinese Home page
├── public/           # Static assets (images, icons, etc.)
styles/               # Global CSS styles and custom variables
rspress.config.ts     # Rspress configuration file
```

## 🚀 Development

We recommend using `pnpm` for managing dependencies.

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Start Dev Server**
   ```bash
   pnpm run dev
   ```
   *The local server will start, typically at `http://localhost:3000`.*

3. **Build for Production**
   ```bash
   pnpm run build
   ```

4. **Preview Production Build**
   ```bash
   pnpm run preview
   ```

## 🤝 Contribution

If you find typos, unclear explanations, or have suggestions for the guides, feel free to open a Pull Request.

- All new pages must be added to both `docs/zh/` and `docs/en/` respectively.

## 📄 License

MIT License. 
