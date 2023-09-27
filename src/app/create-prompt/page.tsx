"use client";

import Form from "@components/Form/Form";
import { useState } from "react";
import { PostPromptType } from "@types";
import { defaultPostPrompt, FormType } from "@app/create-prompt/constants";

const CreatePrompt = () => {
  const [post, setPost] = useState<PostPromptType>(defaultPostPrompt);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const submitPrompt = () => {};

  return (
    <div>
      <Form
        type={FormType.Create}
        post={post}
        setPost={setPost}
        isSubmitting={isSubmitting}
        handleSubmit={submitPrompt}
      />
    </div>
  );
};

export default CreatePrompt;
