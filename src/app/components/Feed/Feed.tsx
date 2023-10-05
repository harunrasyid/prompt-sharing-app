"use client";
import PromptCardList from "@app/components/PromptCardList/PromptCardList";
import useFeed from "@app/components/Feed/hooks/useFeed";

const Feed = () => {
  const { search, setSearch, prompts } = useFeed();

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          className="search_input peer"
          type={"text"}
          placeholder={"Search for prompts or tag"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
      </form>

      <PromptCardList prompts={prompts} />
    </section>
  );
};

export default Feed;
