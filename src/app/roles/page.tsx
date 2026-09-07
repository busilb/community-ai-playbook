import Link from "next/link";
import { roles } from "@/lib/roles";

export default function RolesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-3">选择你的角色</h1>
      <p className="text-stone-500 mb-10">
        不同角色有不同的需求和场景，选择最符合你的身份，找到真正用得上的 AI 方法。
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) =>
          role.available ? (
            <Link
              key={role.id}
              href={`/roles/${role.id}`}
              className="group block bg-white rounded-xl border border-stone-200 p-8 hover:shadow-lg hover:border-teal-300 transition-all"
            >
              <div className="text-4xl mb-4">{role.icon}</div>
              <h2 className="text-xl font-semibold text-stone-800 group-hover:text-teal-700 transition-colors mb-2">
                {role.name}
              </h2>
              <p className="text-sm text-stone-500 leading-relaxed">{role.description}</p>
              <p className="mt-4 text-sm text-teal-600 font-medium">
                查看场景 &rarr;
              </p>
            </Link>
          ) : (
            <div
              key={role.id}
              className="block bg-stone-50 rounded-xl border border-dashed border-stone-300 p-8 opacity-60"
            >
              <div className="text-4xl mb-4">{role.icon}</div>
              <h2 className="text-xl font-semibold text-stone-400 mb-2">{role.name}</h2>
              <p className="text-sm text-stone-400 leading-relaxed">{role.description}</p>
              <p className="mt-4 text-sm text-stone-400">即将上线</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
