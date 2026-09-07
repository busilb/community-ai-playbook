import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-stone-500">
          <div>
            <h4 className="font-semibold text-stone-700 mb-3">社区 AI 场景库</h4>
            <p className="leading-relaxed">
              从真实问题出发，为社区里的每一种角色，沉淀真正用得上的 AI 方法。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-stone-700 mb-3">快速导航</h4>
            <div className="flex flex-col gap-2">
              <Link href="/roles/volunteer" className="hover:text-stone-700">社区志愿者</Link>
              <Link href="/roles/senior" className="hover:text-stone-700">老年人</Link>
              <Link href="/roles/kids" className="hover:text-stone-700">家长 / 小学生</Link>
              <Link href="/changelog" className="hover:text-stone-700">更新日志</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-stone-700 mb-3">参与共建</h4>
            <div className="flex flex-col gap-2">
              <Link href="/submit" className="hover:text-stone-700">提交你的问题</Link>
              <Link href="/about" className="hover:text-stone-700">了解项目</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-stone-200 text-center text-xs text-stone-400">
          Community AI Playbook v0.1 · 社区 AI 公益项目
        </div>
      </div>
    </footer>
  );
}
