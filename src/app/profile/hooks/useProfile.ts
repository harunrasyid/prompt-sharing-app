import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { PromptType } from "@types";

export default function useProfile() {
  const router = useRouter();
  const { data: session } = useSession();
  const [prompts, setPrompts] = useState<PromptType[]>([]);

  // Handle get feed data
  useEffect(() => {
    const fetchPrompts = async () => {
      // @ts-ignore
      const response: any = await fetch(`/api/users/${session?.user.id}/posts`);
      const data: PromptType[] = await response.json();
      setPrompts(data);
    };
    if (session?.user) fetchPrompts();
  }, []);

  const handleEdit = (data: PromptType) => {
    router.push(`/update-prompt?id=${data._id}`);
  };

  const handleDelete = async (data: PromptType) => {
    const hasConfirmed = confirm("Delete this prompt?");
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${data._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPrompts = prompts.filter((p) => p._id !== data._id)
        setPrompts(filteredPrompts)
      } catch (err) {
        console.log("Delete prompt failed: ", err);
      }
    }
  };

  return {
    prompts,
    handleEdit,
    handleDelete,
  };
}
