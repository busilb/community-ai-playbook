"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-stone-800">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-600 to-blue-700 flex items-center justify-center text-white text-sm">
            AI
          </span>
          <span className="hidden sm:inline">社区 AI 场景库</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-stone-600">
          <Link href="/" className="hover:text-stone-900 transition-colors">首页</Link>
          <Link href="/roles" className="hover:text-stone-900 transition-colors">角色</Link>
          <Link href="/changelog" className="hover:text-stone-900 transition-colors">更新日志</Link>
          <Link href="/about" className="hover:text-stone-900 transition-colors">关于</Link>
          <Link
            href="/submit"
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            提交问题
          </Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-stone-200 bg-white px-4 py-4 flex flex-col gap-3 text-stone-600">
          <Link href="/" onClick={() => setOpen(false)} className="py-2">首页</Link>
          <Link href="/roles" onClick={() => setOpen(false)} className="py-2">角色</Link>
          <Link href="/changelog" onClick={() => setOpen(false)} className="py-2">更新日志</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="py-2">关于</Link>
          <Link
            href="/submit"
            onClick={() => setOpen(false)}
            className="py-2 px-4 bg-teal-600 text-white rounded-lg text-center"
          >
            提交问题
          </Link>
        </nav>
      )}
    </header>
  );
}
