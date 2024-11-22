import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <div className="bg-black text-white py-10 px-4 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">We5ive</h2>
            <p className="text-gray-400 mb-6">
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
              unde quae qui quasi mollitia tenetur. Dicta explicabo est
              consectetur maxime quos fugit velit assumenda est.
            </p>
            <p className="mb-2">
              <strong>Contact Us:</strong>
            </p>
            <a
              href="mailto:support@we5ive.com"
              className="text-gray-300 hover:text-white"
            >
              support@we5ive.com
            </a>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Sign Up For Our Newsletter!
            </h3>
            <p className="text-gray-400 mb-6">
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 rounded bg-gray-100 text-gray-300 outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Footer Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-gray-400 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
          {/* Footer Links */}
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white">
              About Us
            </a>
            <a href="#" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Condition
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white"
            >
              <i className="material-icons">facebook</i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white"
            >
              <i className="material-icons">twitter</i>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white"
            >
              <i className="material-icons">linkedin</i>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
