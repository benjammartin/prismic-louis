import Stats from "./stats";

export default function SliceZone({ slices }) {
  console.log(slices);
  return slices?.map((slice) => {
    switch (slice.slice_type) {
      case "stats":
        return <Stats items={slice.items} primary={slice.primary} />;
      default:
        return <div>No slices</div>;
    }
  });
}
