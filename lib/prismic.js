import Prismic from "@prismicio/client";

export const Client = Prismic.client(process.env.NEXT_PUBLIC_PRISMIC_API);
