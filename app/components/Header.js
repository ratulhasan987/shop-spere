import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow ${
        isScrolled ? 'shadow-md bg-white' : 'bg-[#F5F3FF]'
      } flex justify-between items-center md:px-6 px-2 md:py-4 py-2`}
    >
      {/* Logo */}
      <div
        onClick={handleHomeClick}
        className="flex items-center gap-2 cursor-pointer"
      >
        <Image
          src="/images/wf_1.png"
          alt="wf_1"
          className="md:w-16 md:h-12 w-10 h-8"
        />
        <span className="text-xl font-bold text-black">
          <span className="text-purple-600">We</span>5ive
        </span>
      </div>

      {/* Navigation (Hidden on small screens) */}
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:flex gap-6 text-gray-500 text-sm font-medium absolute md:static bg-[#F5F3FF] w-full md:w-auto top-12 left-0 pl-4 p-2 md:top-auto md:left-auto`}
      >
        <ul className="flex flex-col md:flex-row md:gap-6">
          <li>
            <a
              onClick={handleHomeClick}
              className="text-purple-600 cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Deals
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Whats New
            </a>
          </li>
        </ul>
      </nav>

      {/* Search and Icons */}
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-gray-500 border border-gray-300 rounded-full pl-10 pr-4 py-1 text-sm focus:outline-none"
          />
          <AiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Cart Icon */}
        <button>
          <FaShoppingCart className="text-black text-lg" />
        </button>

        {/* User Icon */}
        <button>
          <FaUser className="text-black text-lg" />
        </button>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </header>
  );
}
