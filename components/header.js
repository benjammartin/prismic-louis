import Image from "next/image";
import { RichText } from "prismic-reactjs";
import PrismicDOM from "prismic-dom";

function fromPrismic(url) {
  const path = url.match(/\/[^\/]+$/g);
  return `${path[0]}`;
}

const myLoader = (props) => {
  console.log(props);
  return `https://images.prismic.io/prismic-shows/${props.src}`;
};

// function HeadingOne({ children }) {
//   return (
//     <h1 className="mb-6 text-7xl mr-24 font-bold">
//       {children}
//     </h1>
//   );
// }



export default function Header({ title, headline, image }) {
  var pageTitle = PrismicDOM.RichText.asText(title);
  var pageHeadline = PrismicDOM.RichText.asText(headline);

  return (
    <section className="bg-green-50">
      <div className="container mx-auto py-24 px-8 max-w-7xl grid grid-cols-2 items-center gap-12">
        <div className="mr-24">
          <h1 className="mb-6 text-7xl font-bold">{pageTitle}</h1>
          <p className="text-xl">{pageHeadline}</p>
          <div className="mt-6">
            <button className="bg-green-500 px-10 py-4 mr-4 font-semibold text-white">Button 1</button>
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
