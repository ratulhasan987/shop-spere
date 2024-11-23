import Button from "./Button";
import Image from 'next/image';
export default function Banner() {

   const handleSmoothScroll = e => {
     e.preventDefault(); // Prevent default anchor link behavior
     const targetId = e.currentTarget.getAttribute('href').substring(1); // Get the target ID without '#'
     const targetElement = document.getElementById(targetId);

     if (targetElement) {
       // Custom smooth scroll logic
       const duration = 1500; // Time in milliseconds for slower scrolling (1.5 seconds)
       const targetPosition = targetElement.getBoundingClientRect().top;
       const startPosition = window.pageYOffset;
       const distance = targetPosition;
       let startTime = null;

       const animation = currentTime => {
         if (startTime === null) startTime = currentTime;
         const timeElapsed = currentTime - startTime;
         const run = ease(timeElapsed, startPosition, distance, duration);
         window.scrollTo(0, run);

         if (timeElapsed < duration) requestAnimationFrame(animation);
       };

       const ease = (t, b, c, d) => {
         // Easing function for smooth effect (easeInOutQuad)
         t /= d / 2;
         if (t < 1) return (c / 2) * t * t + b;
         t--;
         return (-c / 2) * (t * (t - 2) - 1) + b;
       };

       requestAnimationFrame(animation);
     }
  };
  
  return (
    <div>
      <div
        className="bg-center bg-cover md:h-[480px] lg:h-[530px] h-[380px] flex flex-col items-center justify-center text-white text-center mt-10"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        <h2 className="md:text-4xl text-2xl font-bold mb-1">
          Elevate Your Everyday Style
        </h2>
        <p className="md:mb-6 mb-3 text-xs md:text-sm">
          Discover the Latest Trends in Sustainable Fashion
        </p>
        <div href="#newArrival" onClick={handleSmoothScroll}>
          <Button />
        </div>
      </div>
      <section>
        <Image
          src="/images/option.png"
          alt=""
          className="w-full -mt-2 md:block
           hidden"
        />
        <Image
          src="/images/option (m).png"
          alt=""
          className="w-full -mt-2 md:hidden block"
        />
      </section>
    </div>
  );
}
