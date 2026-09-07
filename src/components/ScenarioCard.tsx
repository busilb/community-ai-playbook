import Link from "next/link";
import type { Scenario } from "@/lib/types";

const roleLabels: Record<string, string> = {
  volunteer: "志愿者",
  senior: "老年人",
  kids: "家长/小学生",
};

export default function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <Link
      href={`/scenarios/${scenario.slug}`}
      className="block group bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-teal-300 transition-all"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700">
          {roleLabels[scenario.role] || scenario.role}
        </span>
        <span className="text-xs px-2 py-1 rounded-full bg-stone-100 text-stone-500">
          {scenario.category}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-stone-800 group-hover:text-teal-700 transition-colors mb-2">
        {scenario.title}
      </h3>
      <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">
        {scenario.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {scenario.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-stone-400 bg-stone-50 px-2 py-0.5 rounded">
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
