import { PostPromptType } from "@types";

export enum FormType {
  Create = "Create",
  Edit = "Edit",
}

export const defaultPostPrompt: PostPromptType = {
  prompt: "",
  tag: "",
};

export const HEADER: string = `${FormType.Create} Post`;
export const DESC: string = `${FormType.Create} and share your prompt and inspire the new AI generation`;

// Edit prompt
export const HEADER_EDIT: string = `${FormType.Edit} Post`;
export const DESC_EDIT: string = `${FormType.Edit} and share your prompt and inspire the new AI generation`;
