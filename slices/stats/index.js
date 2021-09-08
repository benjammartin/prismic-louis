import Image from "next/image";
import { RichText } from "prismic-reactjs";

function fromPrismic(url) {
    const path = url.match(/\/[^\/]+$/g);
    return `${path[0]}`;
  }
  
  const myLoader = ({ src, quality = 75, width }) => {
    return `https://images.prismic.io/prismic-shows/${src}?auto=compress&q=${quality}&w=${width}`;
  };

export default function Stats({
    items,
    primary
}) {
    console.log(items, primary);
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto pb-32 pt-24 max-w-7xl">
                <h2 className="font-semibold text-center text-3xl">{RichText.asText(primary.section_title)}</h2>
                <div className="grid grid-cols-4 items-center gap-6 pt-8">
                    {
                        items.map((id)=> {
                            return (
                                <div className="bg-white p-5 rounded-lg shadow-sm">
                                    <div className="flex align-center">
                                        <Image
                                            quality={99}
                                            alt={id.icon.alt}
                                            loader={myLoader}
                                            layout="intrinsic"
                                            height={id.icon.dimensions.height}
                                            width={id.icon.dimensions.width}
                                            src={fromPrismic(id.icon.url)}
                                        />
                                        {console.log(id.icon.dimensions.height)}
                                        <div className="ml-5">
                                            <p className="text-gray-400 text-xs">{id.stat_name}</p>
                                            <p className="font-bold text-2xl">{id.unit + id.amount}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};