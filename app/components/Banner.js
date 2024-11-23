import Image from 'next/image';
import Button from './Button';

export default function Banner() {
  const handleSmoothScroll = e => {
    e.preventDefault(); // Prevent default anchor link behavior
    const targetId = e.currentTarget.getAttribute('href').substring(1); // Get the target ID without '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const duration = 1500; // Scroll duration (1.5 seconds)
      const targetPosition = targetElement.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = targetPosition;
      let startTime = null;

      const ease = (t, b, c, d) => {
        // Easing function for smooth scrolling (easeInOutQuad)
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = currentTime => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <div>
      {/* Banner Section */}
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

      {/* Image Section */}
      <section>
        {/* Large Screen Image */}
        <Image
          src="/images/option.png"
          alt="option"
          width={1920}
          height={1080}
          className="w-full -mt-2 md:block hidden"
        />
        {/* Small Screen Image */}
        <Image
          src="/images/option (m).png"
          alt="option"
          width={768}
          height={432}
          className="w-full -mt-2 md:hidden block"
        />
      </section>
    </div>
  );
}
