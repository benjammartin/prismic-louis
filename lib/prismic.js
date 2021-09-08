import Prismic from "@prismicio/client";

export const Client = Prismic.client(process.env.NEXT_PUBLIC_PRISMIC_API);

export const getHomePage = async () => {
  let data;
  const client = Client();
  data = await client.getSingle("homepage");
  return data;
};
