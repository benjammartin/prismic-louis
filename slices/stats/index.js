import { RichText } from "prismic-reactjs";

export default function Stats({ items, primary }) {
  console.log(items, primary);
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto py-8 max-w-7xl">
        <h2 className="font-semibold text-center text-3xl">
          {RichText.asText(primary.section_title)}
        </h2>
        <div className="grid grid-cols-4 items-center gap-12">
          {items.map((id) => {
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
