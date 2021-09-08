import { Client, linkResolver } from "@lib/prismic";
const preview = async (req, res) => {
  const redirectingTo = await Client(req)
    .getPreviewResolver(
      req?.query?.token || null,
      req?.query?.documentId || null
    )
    .resolve(linkResolver, "/");
  if (!redirectingTo) {
    return res.status(401).json({ message: "Invalid token" });
  }
  res.setPreviewData({ ref: req?.query?.token || null });
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectingTo}" />
      <script>window.location.href = '${redirectingTo}'</script>
      </head>`
  );
  res.end();
};
export default preview;
