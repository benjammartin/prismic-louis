import { Fragment } from "react";
import Header from "@components/header";
import { getHomePage } from "@lib/prismic";
import SliceZone from "slices";

export default function Home({ content }) {
  return (
    <Fragment>
      <Header
        primaryCta={content?.data.cta_link_text}
        primaryCtaLink={content?.data.cta_link}
        secondaryCta={content?.data.secondary_cta}
        image={content?.data.hero_image}
        headline={content?.data.headline}
        title={content?.data.title}
      />
      <SliceZone
        slices={content?.data.body}
      />
    </Fragment>
  );
}
export async function getStaticProps({ preview = false, previewData }) {
  const content = await getHomePage(previewData?.ref);
  return {
    props: {
      preview,
      content,
    },
  };
}
