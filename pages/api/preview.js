import { Client, linkResolver } from "@lib/prismic";

const preview = async (req, res) => {
  const redirectingTo = await Client(req)
    .getPreviewResolver({
      ref: req?.query?.ref,
      documentId: req?.query?.documentId,
    })
    .resolve(linkResolver, "/");

  if (!redirectingTo) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({ ref: req?.query?.ref });

  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectingTo}" />
      <script>window.location.href = '${redirectingTo}'</script>
      </head>`
  );
  res.end();
};

export default preview;
