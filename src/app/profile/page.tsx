"use client";
import PromptCardList from "@app/components/PromptCardList/PromptCardList";
import useProfile from "@app/profile/hooks/useProfile";

const Profile = () => {
  const { prompts, handleEdit, handleDelete } = useProfile();

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">My profile</span>
      </h1>
      <p className="desc text-left">Your profile page</p>
      <PromptCardList
        prompts={prompts}
        handleEdit={(data) => handleEdit(data)}
        handleDelete={handleDelete}
      />
    </section>
  );
};

export default Profile;
