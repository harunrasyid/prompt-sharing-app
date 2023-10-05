export type PostPromptType = {
  prompt: string;
  tag: string;
};

export type UserType = {
  _id: string;
  email: string;
  username: string;
  image: string;
};

export type PromptType = {
  _id: string;
  creator: UserType;
  prompt: string;
  tag: string;
};
