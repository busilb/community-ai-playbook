"use client";

import { useState } from "react";

export default function CopyPrompt({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-sm text-stone-700 whitespace-pre-wrap leading-relaxed overflow-x-auto">
        {text}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 px-3 py-1.5 text-xs font-medium rounded-lg bg-white border border-stone-300 text-stone-600 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 transition-all"
      >
        {copied ? "已复制" : "复制提示词"}
      </button>
    </div>
  );
}
