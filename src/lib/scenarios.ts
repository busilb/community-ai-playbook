import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Scenario } from "./types";

const contentDir = path.join(process.cwd(), "content");

export function getAllScenarios(): Scenario[] {
  const scenarios: Scenario[] = [];
  const roles = ["volunteer", "senior", "kids", "community", "property"];

  for (const role of roles) {
    const roleDir = path.join(contentDir, role);
    if (!fs.existsSync(roleDir)) continue;

    const files = fs.readdirSync(roleDir).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      const raw = fs.readFileSync(path.join(roleDir, file), "utf-8");
      const { data, content } = matter(raw);
      scenarios.push({
        title: data.title || "",
        slug: data.slug || file.replace(/\.mdx$/, ""),
        role: data.role || role,
        category: data.category || "",
        summary: data.summary || "",
        painPoint: data.pain_point || "",
        aiCanHelp: data.ai_can_help || "",
        humanShouldDo: data.human_should_do || "",
        steps: data.steps || [],
        prompt: data.prompt || "",
        example: data.example || "",
        safety: data.safety || "",
        source: data.source || "",
        version: data.version || "0.1",
        tags: data.tags || [],
        content,
      });
    }
  }

  return scenarios;
}

export function getScenarioBySlug(slug: string): Scenario | undefined {
  return getAllScenarios().find((s) => s.slug === slug);
}

export function getScenariosByRole(role: string): Scenario[] {
  return getAllScenarios().filter((s) => s.role === role);
}

export async function renderMarkdown(md: string): Promise<string> {
  const result = await remark().use(html).process(md);
  return result.toString();
}
