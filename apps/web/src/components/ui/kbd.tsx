"use client"
import * as React from "react";

export const Kbd =  ({ children }: { children: React.ReactNode }) => {
  return (
    <kbd className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono border">
      {children}
    </kbd>
  );
}