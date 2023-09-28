import { useState } from "react";
import { PostPromptType } from "@types";

export default function useCreatePrompt(defaultPrompt: PostPromptType) {
  const [post, setPost] = useState<PostPromptType>(defaultPrompt);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const submitPrompt = () => {};

  return {
    post,
    setPost,
    isSubmitting,
    setIsSubmitting,
    submitPrompt,
  };
}
