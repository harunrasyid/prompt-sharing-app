import { PromptType } from "@types";
import PromptCard from "@components/PromptCard/PromptCard";

interface Props {
  prompts: PromptType[];
}
const PromptCardList = ({ prompts }: Props) => {
  return (
    <div className="mt-16 prompt_layout">
      {prompts?.map((prompt) => {
        return (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleTagClick={() => {}}
          />
        );
      })}
    </div>
  );
};

export default PromptCardList;
