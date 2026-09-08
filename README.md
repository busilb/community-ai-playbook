# 社区 AI 场景库 | Community AI Playbook

> 让 AI 真正进入社区生活

从真实问题出发，为老人、孩子、志愿者和社区工作者，沉淀真正用得上的 AI 场景、方法和工具。

## 快速开始

当前 GitHub Pages 使用 `docs/` 内的轻量静态版本，打开 `docs/index.html` 即可本地预览；它不依赖后端，适合先持续沉淀课堂场景。

```bash
npm install
npm run dev
```

访问 http://localhost:3000

## 如何新增一个场景

### GitHub Pages 静态版（当前线上版本）

在 `docs/data.js` 的 `COMMUNITY_SCENARIOS` 数组中增加一条对象，字段包括 `title`、`role`、`category`、`pain`、`steps`、`prompt` 和 `safety`。页面会自动生成卡片、详情弹窗、复制提示词和反馈埋点事件，不需要修改页面结构。

课堂记录放在同文件的 `COMMUNITY_CLASSES` 数组中；如果有独立案例页，将 `href` 指向对应的 `docs/*.html`。

### MDX 版（后续扩展）

1. 在 `content/<角色目录>/` 下创建 `.mdx` 文件，如 `content/volunteer/new-scenario.mdx`

2. 按以下模板填写 frontmatter：

```yaml
---
title: 场景名称
slug: url-friendly-slug
role: volunteer          # volunteer | senior | kids | community | property
category: 分类名称
summary: 一句话描述
pain_point: 用户原话描述的真实痛点
ai_can_help: AI 能做什么
human_should_do: 人必须做什么
steps:
  - 步骤一
  - 步骤二
  - 步骤三
prompt: |
  可复制的提示词模板
  支持多行
example: |
  示例成果
  支持多行
safety: 注意事项和安全边界
source: 来源说明
version: "0.1"
tags:
  - 标签1
  - 标签2
---

## 正文内容（Markdown 格式）

这里可以写更详细的说明、常见问题、进阶用法等。
```

3. 重新构建即可：`npm run build`

## 如何新增一个角色

1. 编辑 `src/lib/roles.ts`，在 `roles` 数组中添加新角色
2. 创建 `content/<新角色ID>/` 目录
3. 创建 `src/app/roles/<新角色ID>/page.tsx`
4. 在该页面中引用 `RolePage` 组件

## 目录结构

```
content/                  # 场景内容（MDX 文件）
├── volunteer/            # 志愿者场景
├── senior/               # 老年人场景
├── kids/                 # 家长/小学生场景
├── community/            # 社区工作人员（预留）
└── property/             # 物业工作人员（预留）

src/
├── app/                  # Next.js App Router 页面
│   ├── page.tsx          # 首页
│   ├── roles/            # 角色页
│   ├── scenarios/[slug]/ # 场景详情页
│   ├── changelog/        # 更新日志
│   ├── about/            # 关于项目
│   └── submit/           # 提交问题
├── components/           # React 组件
├── lib/                  # 数据层
│   ├── types.ts          # 类型定义
│   ├── scenarios.ts      # 场景数据加载
│   ├── roles.ts          # 角色数据
│   └── changelog.ts      # 更新日志数据
```

## 技术栈

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- gray-matter（解析 MDX frontmatter）
- remark + remark-html（渲染 Markdown 正文）

## 后续扩展指南

### 接入数据库

当前所有数据来自文件系统（MDX 文件 + TypeScript 数据文件）。如需接入数据库：

1. 推荐使用 Prisma + PostgreSQL 或 SQLite
2. 将 `src/lib/scenarios.ts` 中的文件读取逻辑替换为数据库查询
3. `Scenario` 类型已定义好，可直接作为数据库 schema
4. 提交问题表单的数据可存入 `submissions` 表
5. 反馈数据可存入 `feedback` 表

### 接入统计工具

代码中已预留统计埋点位置：

- `FeedbackWidget` 组件中的 `handleClick` → 统计场景反馈
- `CopyPrompt` 组件中的 `handleCopy` → 统计提示词复制
- `SubmitPage` 中的 `handleSubmit` → 统计问题提交

推荐工具：百度统计 / Google Analytics / Umami（自托管）

### 迁移到小程序 / H5

- 当前已做响应式适配，手机端体验良好
- 可通过 PWA 方式增强移动端体验（添加 `next-pwa`）
- 迁移到微信小程序：内容数据层（`src/lib/`）可复用，UI 层需用小程序框架重写
- 迁移到 H5：当前即为 H5，可直接在微信内访问

## 版本

当前版本：v0.2（基于 6 场真实公益培训记录提炼 15 个种子场景）

## 志愿者提效试点

- [社区志愿者 AI 日常提效工具包](docs/volunteer-ai-toolkit.md)：四类场景的 SOP、提示词、模板和安全边界
- [试点回放记录](docs/volunteer-pilot-replay-2026-09.md)：从真实培训记录提炼出的流程、已验证事项和现场验证表

当前回放只证明流程具备试用条件，不代表已经产生具体效率提升比例。需要在下一场真实活动中补录使用前后耗时、修改次数和志愿者反馈后，才能发布下一版结论。

## 本轮内容来源与提炼原则

已从 Obsidian 中的社区公益培训记录提炼出老年人、社区志愿者、家长/小学生、物业工作人员四类角色，覆盖健康、安全、生活、创作、学习和社区服务。内容默认匿名化，并遵循“真实问题 → 可复用步骤 → 可复制提示词 → 人工判断与安全边界 → 反馈迭代”的结构。

AI 只辅助理解、生成和整理；医疗、用药、金融、反诈、隐私和未成年人相关事项，必须由专业人员、家属或监护人复核。
