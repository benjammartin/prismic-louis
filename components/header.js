import Image from "next/image";
import { RichText } from "prismic-reactjs";
import queryString from "query-string";

function fromPrismic(url) {
  const path = url.match(/\/[^\/]+$/g);
  return `${path[0]}`;
}

const myLoader = (props) => {
  console.log(props);
  return `https://images.prismic.io/prismic-shows/${props.src}`;
};

export default function Header({ title, headline, image }) {
  console.log(fromPrismic(image?.url));
  return (
    <section className="bg-green-100">
      <div className="container mx-auto py-24">
        <div>
          <RichText render={title} />
          <RichText render={headline} />
          <div className="mt-2">
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        </div>
        <div>
          <Image
            alt={image?.alt}
            loader={myLoader}
            layout="responsive"
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
