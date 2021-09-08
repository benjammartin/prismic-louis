import Prismic from "@prismicio/client";

export const Client = (req = null) =>
  Prismic.client(process.env.NEXT_PUBLIC_PRISMIC_API, {
    req: req,
  });

export const linkResolver = (doc) => {
  return "/";
};

export const getHomePage = async (ref = null) => {
  let data;
  const client = Client();
  data = await client.getSingle("homepage", { ref });
  return data;
};
