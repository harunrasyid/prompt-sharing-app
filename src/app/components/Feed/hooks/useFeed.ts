import { useEffect, useState } from "react";
import { PromptType } from "@types";

export default function useFeed() {
  const [search, setSearch] = useState<string>("");
  const [prompts, setPrompts] = useState<PromptType[]>([]);

  // Handle get feed data
  useEffect(() => {
    const fetchPrompts = async () => {
      const response: any = await fetch("/api/prompt");
      const data: PromptType[] = await response.json();
      setPrompts(data);
    };
    fetchPrompts();
  }, []);

  return {
    search,
    setSearch,
    prompts,
  };
}
