import { PromptType } from "@types";
import PromptCard from "@components/PromptCard/PromptCard";

interface Props {
  prompts: PromptType[];
  handleEdit?(data: PromptType): void;
  handleDelete?(data: PromptType): void;
}
const PromptCardList = ({ prompts, handleEdit, handleDelete }: Props) => {
  return (
    <div className="mt-16 prompt_layout">
      {prompts?.map((prompt) => {
        return (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleTagClick={() => {}}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default PromptCardList;
