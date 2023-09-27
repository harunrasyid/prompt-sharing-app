import { PostPromptType } from "@types";
import { FormType } from "@app/create-prompt/constants";
import Textarea from "@components/Textarea/Textarea";
import TextInput from "@components/TextInput/TextInput";
import Link from "next/link";

interface Props {
  type: FormType;
  post: PostPromptType;
  setPost(data: PostPromptType): void;
  isSubmitting: boolean;
  handleSubmit(): void;
}

const Form = ({ type, post, setPost, isSubmitting, handleSubmit }: Props) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left blue_gradient">{type} Post</h1>
      <p className="desc text-left max-w-md">
        {type} and share your prompt and inspire the new AI generation
      </p>

      <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <Textarea
          label={"Your AI prompt"}
          placeholder={"Write your prompt here..."}
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e })}
        />
        <TextInput
          label={"Tag"}
          placeholder={"#Tag"}
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e })}
        />
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href={"/"} className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type={"submit"}
            disabled={isSubmitting}
            className="px-5 py-1.5 bg-primary-orange rounded-full text-white"
          >
            {isSubmitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
