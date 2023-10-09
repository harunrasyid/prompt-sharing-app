"use client";
import { DESC_EDIT, FormType, HEADER_EDIT } from "@app/create-prompt/constants";
import Form from "@components/Form/Form";
import useUpdatePrompt from "@app/update-prompt/hooks/useUpdatePrompt";

const UpdatePrompt = () => {
  const { post, setPost, isSubmitting, submitEditPrompt } = useUpdatePrompt();

  return (
    <div>
      <Form
        type={FormType.Edit}
        post={post}
        setPost={setPost}
        isSubmitting={isSubmitting}
        handleSubmit={submitEditPrompt}
        header={HEADER_EDIT}
        desc={DESC_EDIT}
      />
    </div>
  );
};

export default UpdatePrompt;
