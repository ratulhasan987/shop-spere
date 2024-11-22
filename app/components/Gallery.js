export default function Gallery({ images }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Product image ${idx + 1}`}
          className="rounded-lg"
        />
      ))}
    </div>
  );
}
