import Image from "next/image";
import logo from "@/assets/book.ico";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">

        {/* Navbar Start */}
        <div className="navbar-start">

          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile Menu */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/books">Books</Link>
              </li>

              <li>
                <Link href="/listed-books">Listed Books</Link>
              </li>

              <li>
                <Link href="/pages-to-read">Pages to Read</Link>
              </li>
            </ul>
          </div>

          {/* Logo + Website Name */}
          <Link
            href="/"
            className="flex gap-2 items-center"
          >
            <Image
              src={logo}
              alt="Book Vibe Logo"
              width={40}
              height={40}
            />

            <span className="font-bold text-xl">
              Book Vibe
            </span>
          </Link>

        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/books">Books</Link>
            </li>

            <li>
              <Link href="/listed-books">Listed Books</Link>
            </li>
            
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">

          <button className="btn btn-success">
            Sign In
          </button>

          <button className="btn btn-ghost">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;