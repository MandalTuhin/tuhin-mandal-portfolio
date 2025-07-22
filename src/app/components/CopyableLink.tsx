"use client";

import { useState, type ReactNode } from "react";

interface CopyableLinkProps {
  href: string;
  copyText: string;
  children: ReactNode;
}

export default function CopyableLink({
  href,
  copyText,
  children,
}: CopyableLinkProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(copyText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <a
      href={href}
      onClick={handleCopy}
      className="font-medium hover:text-pink-600 dark:hover:text-pink-500 transition-colors flex items-center gap-3 relative"
    >
      {children}
      {isCopied && (
        <span className="absolute left-full ml-3 px-2 py-1 text-xs rounded-md bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          Copied!
        </span>
      )}
    </a>
  );
}