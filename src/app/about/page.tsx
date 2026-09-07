import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-6">关于项目</h1>

      <div className="prose prose-stone prose-sm max-w-none">
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-4">我们在做什么</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            <strong>社区 AI 场景库</strong>（Community AI Playbook）是一个社区公益 AI 项目。
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            我们的核心愿景不是「教大家使用 AI 工具」，而是：
          </p>
          <blockquote className="border-l-4 border-teal-500 pl-4 py-2 my-6 bg-teal-50 rounded-r-lg">
            <p className="text-stone-700 font-medium text-lg">
              让 AI 真正进入普通人的生活和工作，帮助不同角色解决真实问题，
              让生活和社区服务变得更简单、更高效、更美好。
            </p>
          </blockquote>
          <p className="text-stone-600 leading-relaxed">
            让社区里的每一种角色，都有一套真正用得上的 AI 方法。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-4">过去做了什么</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            我们已经完成了接近 10 场面向社区人群的 AI 公益分享，包括：
          </p>
          <ul className="space-y-2 text-stone-600">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              老年人 AI 科普
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              老年人反诈
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              老年健康相关场景
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              小学生 AI 科普
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              AI 辅助数学学习
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              AI 图片共创
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              AI 幻觉与风险认知
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              人与 AI 如何协作
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              社区志愿者 AI 应用
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-4">产品逻辑</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            每一次活动都不是一次性培训，而是一次产品迭代：
          </p>
          <div className="bg-stone-50 rounded-xl p-6 text-sm text-stone-600">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-white rounded-lg border border-stone-200">一次活动</span>
              <span className="text-stone-400">&rarr;</span>
              <span className="px-3 py-1 bg-white rounded-lg border border-stone-200">收集真实需求</span>
              <span className="text-stone-400">&rarr;</span>
              <span className="px-3 py-1 bg-white rounded-lg border border-stone-200">提炼真实场景</span>
              <span className="text-stone-400">&rarr;</span>
              <span className="px-3 py-1 bg-white rounded-lg border border-stone-200">形成场景卡</span>
              <span className="text-stone-400">&rarr;</span>
              <span className="px-3 py-1 bg-white rounded-lg border border-stone-200">沉淀工具和模板</span>
              <span className="text-stone-400">&rarr;</span>
              <span className="px-3 py-1 bg-white rounded-lg border border-stone-200">更新网站</span>
              <span className="text-stone-400">&rarr;</span>
              <span className="px-3 py-1 bg-white rounded-lg border border-stone-200">收集反馈</span>
              <span className="text-stone-400">&rarr;</span>
              <span className="px-3 py-1 bg-teal-50 rounded-lg border border-teal-200 text-teal-700">反哺下一次课程</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-4">覆盖角色</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { icon: "🧓", name: "老年人", active: true },
              { icon: "🎒", name: "小学生 / 家长", active: true },
              { icon: "🤝", name: "社区志愿者", active: true },
              { icon: "🏘️", name: "社区工作人员", active: false },
              { icon: "🔧", name: "物业工作人员", active: false },
              { icon: "🌱", name: "更多角色...", active: false },
            ].map((r) => (
              <div
                key={r.name}
                className={`p-4 rounded-lg border text-center ${
                  r.active
                    ? "bg-white border-stone-200"
                    : "bg-stone-50 border-dashed border-stone-300 opacity-60"
                }`}
              >
                <div className="text-2xl mb-1">{r.icon}</div>
                <div className="text-xs text-stone-600">{r.name}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/submit"
          className="inline-block px-6 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors"
        >
          参与共建
        </Link>
      </div>
    </div>
  );
}
