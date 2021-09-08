import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

function fromPrismic(url) {
  const path = url.match(/\/[^\/]+$/g);
  return `${path[0]}`;
}

const myLoader = (props) => {
  console.log(props);
  return `https://images.prismic.io/prismic-shows/${props.src}`;
};

export default function Header({
  title,
  headline,
  image,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section className="bg-green-50">
      <div className="container mx-auto py-24 px-8 max-w-7xl grid grid-cols-2 items-center gap-12">
        <div className="mr-24">
          <h1 className="mb-6 text-7xl font-bold">{RichText.asText(title)}</h1>
          <p className="text-xl">{RichText.asText(headline)}</p>
          <div className="mt-6">
            <Link passHref href="#">
              <a className="bg-green-500 px-10 py-4 mr-4 font-semibold text-white">
                {primaryCta}
              </a>
            </Link>
            <button>{secondaryCta}</button>
          </div>
        </div>
        <div>
          <Image
            alt={image?.alt}
            loader={myLoader}
            layout="intrinsic"
            height={image?.dimensions.height}
            width={image?.dimensions.width}
            src={fromPrismic(image?.url)}
          />
        </div>
      </div>
    </section>
  );
}

/**
 * <Image
            layout="intrinsic"
            height={image?.dimensions.height}
            width={image?.dimensions.width}
            src={fromPrismic(image?.url)}
          />
 */
