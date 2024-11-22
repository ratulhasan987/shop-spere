export default function Gallery({ images }) {
  if (!images || images.length === 0) {
    return <p className="text-center">No images available for this product.</p>;
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Product Image ${index + 1}`}
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      ))}
    </div>
  );
}

// export default function Gallery({ images = [] }) {
//   return (
//     <div className="grid grid-cols-5 gap-4 items-center mt-20">
//       {images.map((src, idx) => (
//         <img
//           key={idx}
//           src={src}
//           alt={`Product image ${idx + 1}`}
//           className={`rounded-lg ${
//             idx === 0
//               ? 'col-span-3 row-span-2 object-cover h-[300px] w-full'
//               : 'h-[100px] object-contain'
//           }`}
//         />
//       ))}
//     </div>
//   );
// }
