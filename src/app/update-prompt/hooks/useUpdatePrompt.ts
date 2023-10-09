import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { PostPromptType, PromptType } from "@types";
import { defaultPostPrompt } from "@app/create-prompt/constants";

export default function useUpdatePrompt() {
  const promptId: string = useSearchParams().get("id") ?? "";
  const { data: session } = useSession();
  const router = useRouter();

  const [post, setPost] = useState<PostPromptType>(defaultPostPrompt);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Handle submit edit prompt
  const submitEditPrompt = async (e: any) => {
    if (session && promptId) {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const response: any = await fetch(`api/prompt/${promptId}`, {
          method: "PATCH",
          body: JSON.stringify({
            prompt: post.prompt,
            tag: post.tag,
          }),
        });
        if (response.ok) {
          await router.push("/");
        }
      } catch (e) {
        console.log("Error: ", e);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  useEffect(() => {
    const getPromptDetail = async () => {
      const response: any = await fetch(`/api/prompt/${promptId}`);
      const data: PromptType = await response.json();
      setPost(data);
    };
    if (promptId) getPromptDetail();
  }, [promptId]);

  return {
    post,
    setPost,
    isSubmitting,
    submitEditPrompt,
  };
}
