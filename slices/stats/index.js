import Image from "next/image";
import { RichText } from "prismic-reactjs";

function fromPrismic(url) {
  const path = url.match(/\/[^\/]+(.png)/g);
  return `${path[0]}`;
}

const myLoader = ({ src, quality = 75, width }) => {
  return `https://images.prismic.io/prismic-shows${src}?auto=compress&q=${quality}&w=${width}`;
};

export default function Stats({ items, primary }) {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto py-8 max-w-7xl">
        <h2 className="font-semibold text-center text-3xl">
          {RichText.asText(primary.section_title)}
        </h2>
        <div className="grid grid-cols-4 items-center gap-6 pt-12">
          {items.map((id, i) => {
            console.log(id.icon.dimensions);
            return (
              <div key={i} className="bg-white p-6 rounded shadow-sm">
                <div className="flex flex-wrap">
                  <div className="flex-shrink-0 w-12">
                    <Image
                      quality={99}
                      alt={id.icon.alt}
                      loader={myLoader}
                      layout="responsive"
                      height={32}
                      width={32}
                      src={fromPrismic(id.icon.url)}
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400">{id.stat_name}</p>
                    <p className="font-bold text-2xl">{id.unit + id.amount}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
