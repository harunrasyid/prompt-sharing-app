import { useState } from "react";
import { PostPromptType } from "@types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function useCreatePrompt(defaultPrompt: PostPromptType) {
  const router = useRouter();
  const { data: session } = useSession();
  const [post, setPost] = useState<PostPromptType>(defaultPrompt);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const submitPrompt = async (e: any) => {
    if (session) {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const response: any = await fetch("api/prompt/new", {
          method: "POST",
          body: JSON.stringify({
            prompt: post.prompt,
            tag: post.tag,
            // @ts-ignore
            userId: session?.user.id ?? "",
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

  return {
    post,
    setPost,
    isSubmitting,
    setIsSubmitting,
    submitPrompt,
  };
}
