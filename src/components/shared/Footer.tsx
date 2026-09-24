import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/book.ico";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-16">
      <div className="container mx-auto px-6 py-10">

        {/* Two Equal Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-50">

          {/* Left Section */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <Image
                src={logo}
                alt="Book Vibe Logo"
                width={30}
                height={30}
              />

              <span className="text-xl font-bold">
                Book Vibe
              </span>
            </Link>

            <p className="mt-4 text-gray-500 max-w-md">
              Discover great books, create your reading list,
              and keep track of the books you love.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Book Vibe
            </h3>

            <p className="text-gray-500">
              Read more. Discover more. Grow more.
            </p>

            <p className="text-gray-500 mt-3">
              Your personal book tracking companion.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="divider my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Book Vibe.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;