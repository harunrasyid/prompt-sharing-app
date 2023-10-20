"use client";

import Form from "@components/Form/Form";
import {
  defaultPostPrompt,
  DESC,
  FormType,
  HEADER,
} from "@app/create-prompt/constants";
import useCreatePrompt from "@app/create-prompt/hooks/useCreatePrompt";

const CreatePrompt = () => {
  const { post, setPost, isSubmitting, submitPrompt } =
    useCreatePrompt(defaultPostPrompt);

  return (
    <div>
      <Form
        type={FormType.Create}
        post={post}
        setPost={setPost}
        isSubmitting={isSubmitting}
        handleSubmit={submitPrompt}
        header={HEADER}
        desc={DESC}
      />
    </div>
  );
};

export default CreatePrompt;
