"use client";

import { useState } from "react";

export default function FeedbackWidget({ scenarioSlug }: { scenarioSlug: string }) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { key: "helpful", label: "有帮助", icon: "👍" },
    { key: "ok", label: "一般", icon: "🤔" },
    { key: "not-helpful", label: "没解决我的问题", icon: "👎" },
  ];

  const handleClick = (key: string) => {
    setSelected(key);
    // TODO: 接入后端统计
    console.log(`Feedback for ${scenarioSlug}: ${key}`);
  };

  return (
    <div className="bg-stone-50 rounded-xl p-6 text-center">
      <p className="text-stone-600 mb-4 font-medium">这个场景对你有帮助吗？</p>
      <div className="flex justify-center gap-3">
        {options.map((opt) => (
          <button
            key={opt.key}
            onClick={() => handleClick(opt.key)}
            className={`px-4 py-2 rounded-lg border text-sm transition-all ${
              selected === opt.key
                ? "bg-teal-600 text-white border-teal-600"
                : "bg-white border-stone-300 text-stone-600 hover:border-teal-400"
            }`}
          >
            {opt.icon} {opt.label}
          </button>
        ))}
      </div>
      {selected && (
        <p className="mt-3 text-sm text-teal-600">感谢你的反馈！</p>
      )}
    </div>
  );
}
