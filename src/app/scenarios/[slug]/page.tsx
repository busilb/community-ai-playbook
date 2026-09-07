import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllScenarios, getScenarioBySlug, renderMarkdown } from "@/lib/scenarios";
import { getRoleById } from "@/lib/roles";
import CopyPrompt from "@/components/CopyPrompt";
import FeedbackWidget from "@/components/FeedbackWidget";

export function generateStaticParams() {
  return getAllScenarios().map((s) => ({ slug: s.slug }));
}

const roleLabels: Record<string, string> = {
  volunteer: "社区志愿者",
  senior: "老年人",
  kids: "家长/小学生",
};

export default async function ScenarioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scenario = getScenarioBySlug(slug);
  if (!scenario) return notFound();

  const role = getRoleById(scenario.role);
  const contentHtml = await renderMarkdown(scenario.content);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link
        href={`/roles/${scenario.role}`}
        className="text-sm text-teal-600 hover:underline mb-6 block"
      >
        &larr; 返回{roleLabels[scenario.role] || "角色"}页
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 font-medium">
            {roleLabels[scenario.role]}
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-500">
            {scenario.category}
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
            v{scenario.version}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-stone-800 mb-4">{scenario.title}</h1>
        <p className="text-lg text-stone-500 leading-relaxed">{scenario.summary}</p>
      </div>

      {/* Pain Point */}
      <section className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h2 className="text-sm font-semibold text-amber-800 mb-2">真实问题</h2>
        <p className="text-stone-700 leading-relaxed italic">
          &ldquo;{scenario.painPoint}&rdquo;
        </p>
      </section>

      {/* AI Can Help + Human Should Do */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
          <h2 className="text-sm font-semibold text-teal-800 mb-2">AI 可以帮到哪一步</h2>
          <p className="text-sm text-stone-700 leading-relaxed">{scenario.aiCanHelp}</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-sm font-semibold text-blue-800 mb-2">人必须负责什么</h2>
          <p className="text-sm text-stone-700 leading-relaxed">{scenario.humanShouldDo}</p>
        </div>
      </div>

      {/* Steps */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-stone-800 mb-4">推荐操作流程</h2>
        <ol className="space-y-3">
          {scenario.steps.map((step, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="shrink-0 w-7 h-7 rounded-full bg-teal-600 text-white text-sm flex items-center justify-center font-medium">
                {i + 1}
              </span>
              <span className="text-stone-600 leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Prompt */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-stone-800 mb-4">可复制提示词</h2>
        <CopyPrompt text={scenario.prompt} />
      </section>

      {/* Example */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-stone-800 mb-4">示例成果</h2>
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-6">
          <pre className="text-sm text-stone-700 whitespace-pre-wrap leading-relaxed">
            {scenario.example}
          </pre>
        </div>
      </section>

      {/* Extended Content */}
      {contentHtml && (
        <section className="mb-10 prose prose-stone prose-sm max-w-none prose-headings:text-stone-800 prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 prose-strong:text-stone-700">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </section>
      )}

      {/* Safety */}
      {scenario.safety && (
        <section className="mb-10 bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-sm font-semibold text-red-800 mb-2">注意事项与安全边界</h2>
          <p className="text-sm text-stone-700 leading-relaxed">{scenario.safety}</p>
        </section>
      )}

      {/* Source */}
      <section className="mb-10 text-sm text-stone-400 border-t border-stone-200 pt-6">
        <p>{scenario.source}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {scenario.tags.map((tag) => (
            <span key={tag} className="text-xs bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* Feedback */}
      <FeedbackWidget scenarioSlug={scenario.slug} />

      {/* Submit */}
      <section className="mt-8 text-center">
        <Link
          href="/submit"
          className="text-sm text-teal-600 hover:underline"
        >
          我还有类似问题 &rarr;
        </Link>
      </section>
    </div>
  );
}
