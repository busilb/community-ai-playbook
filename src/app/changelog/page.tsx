import { changelog } from "@/lib/changelog";

export default function ChangelogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-3">更新日志</h1>
      <p className="text-stone-500 mb-12">
        每一次社区课堂都是一次版本更新。这里记录场景库的成长历程。
      </p>

      <div className="space-y-12">
        {changelog.map((entry) => (
          <div key={entry.version} className="relative pl-8 border-l-2 border-teal-200">
            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-teal-600 border-4 border-white" />
            <div className="mb-2">
              <span className="text-lg font-bold text-stone-800">v{entry.version}</span>
              <span className="ml-3 text-sm text-stone-400">{entry.date}</span>
            </div>
            <ul className="space-y-2">
              {entry.changes.map((change, i) => (
                <li key={i} className="text-sm text-stone-600 flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">+</span>
                  {change}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-sm text-stone-400 bg-stone-50 rounded-xl p-8">
        <p className="font-medium text-stone-500 mb-2">更多版本即将到来</p>
        <p>每一次社区课堂 = 一次场景库版本更新</p>
        <p className="mt-1">
          真实问题收集 → 分组讨论 → 讲师示范 → 小组共创 → 场景卡 → 发布新版本
        </p>
      </div>
    </div>
  );
}
