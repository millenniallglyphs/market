import { useState } from "react";
import Link from "next/link";

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  const handleOpen = () => setCartOpen(!cartOpen);
  const height = {
    minHeight: '90vh',
}

  return (
    <div className="bg-white">
      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="mt-3 text-gray-600 hover:underline">
                PAFM
              </a>
            </Link>
            <div className="flex items-center justify-end w-full">

              <div className="flex sm:hidden">
                <button
                  onClick={handleMenu}
                  type="button"
                  className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </div>
                <div className="hidden sm:flex flex-row">
                  <Link href="/about">
                    <a className="mt-3 text-gray-600 hover:underline mx-3">
                      About
                    </a>
                  </Link>
                  <Link href="/vendors">
                    <a className="mt-3 text-gray-600 hover:underline mx-3">
                      Vendors
                    </a>
                  </Link>
                  <Link href="/community">
                    <a className="mt-3 text-gray-600 hover:underline mx-3">
                      Community
                    </a>
                  </Link>
                </div> 
            </div>
          </div>
          <nav
            className={`${
              menuOpen ? "" : "hidden"
            } sm:flex sm:justify-end sm:justify-end mt-4 sm:hidden`}
          >
            <div className="flex flex-col sm:flex-row">
              <Link href="/about">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  About
                </a>
              </Link>
              <Link href="/vendors">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Vendors
                </a>
              </Link>
              <Link href="/community">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Community
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      {/*
      // This Cart doesn't really work… yet!
      <Cart cartOpen={cartOpen} handleOpen={handleOpen} />
      */}
      <div style={height}>
        <main className="my-8">{children}</main>
      </div>
      <footer className="bg-gray-200">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a className="mt-3 text-gray-600 hover:underline" href="https://github.com/millenniallglyphs/market" target="_blank">
               Source Code
          </a>
          <div className="flex flex-row">
                  <Link href="/about">
                    <a className="mt-3 text-gray-600 hover:underline mx-3">
                      Employment
                    </a>
                  </Link>
                  <Link href="/vendors">
                    <a className="mt-3 text-gray-600 hover:underline mx-3">
                      Documents
                    </a>
                  </Link>
                </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
