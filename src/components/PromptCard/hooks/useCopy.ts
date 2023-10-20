"use client";
import { useState } from "react";

export default function useCopy() {
  const [copied, setCopied] = useState<string>("");
  return {
    copied,
    setCopied,
  };
}
