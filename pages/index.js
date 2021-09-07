import { Client } from "../lib/prismic";

export default function Home({ data }) {
  return <div>Hello</div>;
}

export async function getStaticProps() {
  const data = await Client.getSingle("homepage");
  return {
    props: {
      data,
    },
  };
}
