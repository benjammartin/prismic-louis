import { Fragment } from "react";
import Header from "@components/header";
import { Client } from "@lib/prismic";

export default function Home({ content }) {
  console.log(content);
  return (
    <Fragment>
      <Header
        primaryCta={content?.data.cta_link_text}
        secondaryCta={content?.data.secondary_cta}
        image={content?.data.hero_image}
        headline={content?.data.headline}
        title={content?.data.title}
      />
    </Fragment>
  );
}

export async function getStaticProps() {
  const content = await Client.getSingle("homepage");
  return {
    props: {
      content,
    },
  };
}
