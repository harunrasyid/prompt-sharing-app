import { HOME_SUBTITLE, HOME_TITLE, HOME_TITLE_DESC } from "@app/constants";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            {HOME_TITLE}
            <br className="max-md:hidden" />
            <span className="text-center orange_gradient">
            {HOME_SUBTITLE}
          </span>
        </h1>
        <p className="desc text-center">{HOME_TITLE_DESC}</p>
    </section>
  );
}
