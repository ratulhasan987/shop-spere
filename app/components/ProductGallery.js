import Gallery from './Gallery';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
];

export default function ProductGallery() {
  return (
    <div className="p-4">
      <Gallery images={images} />
    </div>
  );
}
