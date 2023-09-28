import { PostPromptType } from "@types";

export enum FormType {
  Create = "Create",
}

export const defaultPostPrompt: PostPromptType = {
  prompt: "",
  tag: "",
};

export const HEADER: string = `${FormType.Create} Post`
export const DESC: string = `${FormType.Create} and share your prompt and inspire the new AI generation`
