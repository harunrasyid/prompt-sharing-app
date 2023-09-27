import { PostPromptType } from "@types";

export enum FormType {
  Create = "Create",
}

export const defaultPostPrompt: PostPromptType = {
  prompt: "",
  tag: "",
};
