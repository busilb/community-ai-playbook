"use client";

import { useState } from "react";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 接入后端存储
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-6">🎉</div>
        <h1 className="text-2xl font-bold text-stone-800 mb-4">感谢你的提交</h1>
        <p className="text-stone-500 mb-8">
          我们会认真阅读每一条反馈，你的问题可能出现在下一个版本的场景库中。
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-5 py-2.5 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
        >
          继续提交
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-3">提交你的问题</h1>
      <p className="text-stone-500 mb-10">
        告诉我们你在生活或工作中遇到的真实问题，它可能成为场景库的下一个场景。
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            你的角色是？
          </label>
          <select
            name="role"
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-stone-700 bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
          >
            <option value="">请选择</option>
            <option value="volunteer">社区志愿者</option>
            <option value="senior">老年人</option>
            <option value="kids">家长 / 小学生</option>
            <option value="community">社区工作人员</option>
            <option value="property">物业工作人员</option>
            <option value="other">其他</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            你遇到了什么问题？
          </label>
          <textarea
            name="problem"
            rows={4}
            required
            placeholder="请尽量用你自己的话描述，比如：「我想帮老人查体检报告，但不知道怎么用AI来解读...」"
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            你试过用 AI 解决吗？效果怎么样？（选填）
          </label>
          <textarea
            name="triedAi"
            rows={3}
            placeholder="比如：「试过问豆包，但回答太笼统了，不够实用...」"
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            你的联系方式（选填）
          </label>
          <input
            type="text"
            name="contact"
            placeholder="手机号或微信号，方便我们跟进了解"
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors"
        >
          提交问题
        </button>
      </form>

      <p className="mt-6 text-xs text-stone-400 text-center">
        你的信息仅用于场景库建设，不会用于其他用途。
      </p>
    </div>
  );
}
