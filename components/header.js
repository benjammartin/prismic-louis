import Image from "next/image";
import { RichText } from "prismic-reactjs";

function fromPrismic(url) {
  const path = url.match(/\/[^\/]+$/g);
  return `${path[0]}`;
}

const myLoader = (props) => {
  console.log(props);
  return `https://images.prismic.io/prismic-shows/${props.src}`;
};

function HeadingOne({ children }) {
  return (
    <h1 className="bg-yellow-200 md:bg-red-500 sm:bg-indigo-400 mb-6">
      {children}
    </h1>
  );
}

export default function Header({ title, headline, image }) {
  return (
    <section className="bg-green-100">
      <div className="container mx-auto py-24 flex items-center ">
        <div>
          <RichText render={title} Component={HeadingOne} />
          <RichText render={headline} />
          <div className="mt-6">
            <button className="bg-yellow-500 p-4 mr-4">Button 1</button>
            <button>Button 2</button>
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
