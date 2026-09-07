import Link from "next/link";
import type { Role } from "@/lib/types";
import type { Scenario } from "@/lib/types";
import ScenarioCard from "./ScenarioCard";

interface RolePageProps {
  role: Role;
  scenarios: Scenario[];
}

export default function RolePage({ role, scenarios }: RolePageProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Link href="/roles" className="text-sm text-teal-600 hover:underline mb-6 block">
        &larr; 返回角色列表
      </Link>

      <div className="mb-12">
        <div className="text-4xl mb-4">{role.icon}</div>
        <h1 className="text-3xl font-bold text-stone-800 mb-3">{role.name}</h1>
        <p className="text-stone-500 text-lg leading-relaxed max-w-2xl">
          {role.description}
        </p>
      </div>

      {role.painPoints.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-stone-700 mb-6">
            你最近是不是遇到这些问题？
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {role.painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white border border-stone-200 rounded-lg p-4 hover:border-teal-300 transition-colors"
              >
                <span className="text-teal-500 mt-0.5 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-sm text-stone-600">{point}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold text-stone-700 mb-6">
          AI 可以这样帮你
        </h2>
        {scenarios.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scenarios.map((s) => (
              <ScenarioCard key={s.slug} scenario={s} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-stone-50 rounded-xl">
            <p className="text-stone-400">场景正在制作中，敬请期待</p>
          </div>
        )}
      </section>

      <section className="mt-16 bg-stone-50 rounded-xl p-8 text-center">
        <h3 className="text-lg font-semibold text-stone-700 mb-3">
          没有找到你遇到的问题？
        </h3>
        <p className="text-sm text-stone-500 mb-4">
          告诉我们你的真实需求，我们会在下一个版本中加入新的场景。
        </p>
        <Link
          href="/submit"
          className="inline-block px-5 py-2.5 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
        >
          提交我的问题
        </Link>
      </section>
    </div>
  );
}
