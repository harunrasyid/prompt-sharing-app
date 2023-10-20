"use client";
import { PromptType } from "@types";
import Image from "next/image";
import { Timeout } from "@constants";
import { icons } from "../../../public/assets/icons";
import useCopy from "@components/PromptCard/hooks/useCopy";

interface Props {
  prompt: PromptType;
  handleTagClick(tag: string): void;
  handleEdit?(data: PromptType): void;
  handleDelete?(data: PromptType): void;
}
const PromptCard = ({
  prompt,
  handleTagClick,
  handleEdit,
  handleDelete,
}: Props) => {
  const { copied, setCopied } = useCopy();

  const handleCopy = () => {
    setCopied(prompt?.prompt);
    navigator.clipboard.writeText(prompt?.prompt);
    setTimeout(() => setCopied(""), Timeout.TIMEOUT_3S);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={prompt?.creator.image}
            alt={"user_image"}
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-700">
              {prompt?.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {prompt?.creator.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied === prompt?.prompt ? icons.tick : icons.copy}
            alt={"copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        {prompt?.prompt}
      </p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick(prompt?.tag)}
      >
        {prompt?.tag}
      </p>
      <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
        {handleEdit ? (
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={() => handleEdit(prompt)}
          >
            Edit
          </p>
        ) : null}
        {handleDelete ? (
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={() => handleDelete(prompt)}
          >
            Delete
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default PromptCard;
