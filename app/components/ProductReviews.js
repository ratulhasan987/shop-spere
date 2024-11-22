// import Reviews from './Reviews';

// const reviews = [
//   {
//     avatar: 'avatar1.jpg',
//     name: 'Cameron Williamson',
//     date: '3 days ago',
//     text: 'Very Nice!!',
//     rating: 4,
//   },
//   {
//     avatar: 'avatar2.jpg',
//     name: 'Alex Johnson',
//     date: '1 week ago',
//     text: 'Good quality, fast shipping!',
//     rating: 5,
//   },
// ];

// export default function ProductReviews() {
//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Reviews</h2>
//       <Reviews reviews={reviews} />
//     </div>
//   );
// }
import Reviews from './Reviews';

const reviewsData = [
  {
    avatar: '/images/user1.jpg',
    name: 'Cameron Williamson',
    date: '3 days ago',
    comment: 'Very nice!!',
  },
  {
    avatar: '/images/user2.jpg',
    name: 'Leslie Alexander',
    date: '1 week ago',
    comment: 'Amazing product!',
  },
];

export default function ProductPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Reviews</h2>
      <Reviews reviews={reviewsData} />
    </div>
  );
}
