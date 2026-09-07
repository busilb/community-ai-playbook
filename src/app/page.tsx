import Link from "next/link";
import { roles } from "@/lib/roles";
import { getAllScenarios } from "@/lib/scenarios";
import ScenarioCard from "@/components/ScenarioCard";

export default function Home() {
  const scenarios = getAllScenarios();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-stone-800 leading-tight mb-6">
            让 AI 真正进入社区生活
          </h1>
          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed mb-10">
            从真实问题出发，为老人、孩子、志愿者和社区工作者，
            <br className="hidden sm:inline" />
            沉淀真正用得上的 AI 场景、方法和工具。
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/roles"
              className="px-6 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors"
            >
              选择你的角色
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-white border border-stone-300 text-stone-600 rounded-xl font-medium hover:bg-stone-50 transition-colors"
            >
              了解项目
            </Link>
          </div>
        </div>
      </section>

      {/* Role Cards */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
        <h2 className="text-center text-stone-400 text-sm font-medium tracking-wide mb-6">
          你是谁？
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.filter((r) => r.available).map((role) => (
            <Link
              key={role.id}
              href={`/roles/${role.id}`}
              className="group block bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-teal-300 transition-all"
            >
              <div className="text-3xl mb-3">{role.icon}</div>
              <h3 className="text-lg font-semibold text-stone-800 group-hover:text-teal-700 transition-colors">
                {role.name}
              </h3>
              <p className="text-sm text-stone-500 mt-2 leading-relaxed">
                {role.description}
              </p>
            </Link>
          ))}
          {roles.filter((r) => !r.available).map((role) => (
            <div
              key={role.id}
              className="block bg-stone-50 rounded-xl border border-stone-200 p-6 opacity-60"
            >
              <div className="text-3xl mb-3">{role.icon}</div>
              <h3 className="text-lg font-semibold text-stone-400">{role.name}</h3>
              <p className="text-sm text-stone-400 mt-2">即将上线</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scenarios */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-stone-800">热门场景</h2>
          <Link href="/roles" className="text-sm text-teal-600 hover:text-teal-700">
            查看全部 &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {scenarios.slice(0, 6).map((s) => (
            <ScenarioCard key={s.slug} scenario={s} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            你在生活中遇到了什么问题？
          </h2>
          <p className="text-teal-100 mb-6 max-w-xl mx-auto">
            告诉我们你的真实需求，它可能成为下一个场景卡，帮助更多人。
          </p>
          <Link
            href="/submit"
            className="inline-block px-6 py-3 bg-white text-teal-700 rounded-xl font-medium hover:bg-teal-50 transition-colors"
          >
            提交我的问题
          </Link>
        </div>
      </section>

      {/* Version Info */}
      <section className="max-w-6xl mx-auto px-4 mt-16 text-center">
        <p className="text-xs text-stone-400">
          当前版本 v0.1 ·{" "}
          <Link href="/changelog" className="text-teal-600 hover:underline">
            查看更新日志
          </Link>
        </p>
      </section>
    </div>
  );
}
