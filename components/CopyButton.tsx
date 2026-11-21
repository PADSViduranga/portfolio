"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked: the address is still visible to select by hand
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded border border-line px-2 py-1 font-mono text-xs uppercase text-muted transition hover:border-paper hover:text-paper"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
