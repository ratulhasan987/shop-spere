export default function Reviews() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
      <p className="text-gray-600">No reviews yet. Be the first to review!</p>
    </div>
  );
}

// export default function Reviews({ reviews = [] }) {
//   return (
//     <div className="space-y-4">
//       {reviews.map((review, idx) => (
//         <div key={idx} className="border-b pb-4">
//           <div className="flex items-center space-x-4">
//             <img
//               src={review.avatar}
//               alt={`Avatar of ${review.name}`}
//               className="w-12 h-12 rounded-full"
//             />
//             <div>
//               <p className="font-semibold">{review.name}</p>
//               <p className="text-sm text-gray-500">{review.date}</p>
//             </div>
//           </div>
//           <p className="mt-2 text-gray-700">{review.comment}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
