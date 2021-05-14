import React, { useRef, useEffect, useState } from 'react';
import Link from "next/link";
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VlZGRpc2J1cnNlciIsImEiOiJja29vaXpsNW4wYTFpMm91aWtpZW0yMmdlIn0.Q9M4vOsenIFPbgzCmFa5UQ';

function Layout({select, setLang, options = [], children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  const handleOpen = () => setCartOpen(!cartOpen);
  const height = {
    minHeight: '90vh',
}

const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-123.4304);
const [lat, setLat] = useState(48.1196);
const [zoom, setZoom] = useState(16.62);

const renderOptions = () => {
  return options.map(({ value, label }, index) => (
    <option value={value} key={index}>
      {label}
    </option>
  ));
};

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/seeddisburser/ckooj2hck1du817o172v0b37z',
  center: [lng, lat],
  zoom: zoom
  });
  });

  return (
    <>
    <div className="bg-white">
      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="mt-3 text-gray-600 hover:underline">
                PAFM
              </a>
            </Link>
            <div className="flex items-center justify-center w-full">

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
                  <Link href="/blog">
                    <a className="mt-3 text-gray-600 hover:underline mx-3">
                      Blog
                    </a>
                  </Link>
                </div> 
            </div>
                  <select onChange={select} value={setLang}>
                    {renderOptions()}
                  </select>
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
        <div>
          <div className="sidebar">
          </div>
          <div ref={mapContainer} className="map-container" />
        </div>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a className="mt-3 text-gray-600 hover:underline" href="https://github.com/millenniallglyphs/market" target="_blank">
               Source Code
          </a>
          <div className="flex flex-row">
                  <Link href="/employment">
                    <a className="mt-3 text-gray-600 hover:underline mx-3">
                      Employment
                    </a>
                  </Link>
                  <Link href="/documents">
                    <a className="mt-3 text-gray-600 hover:underline mx-3">
                      Documents
                    </a>
                  </Link>
                </div>
        </div>
      </footer>
    </div>
    </>
  );
}

export default Layout;
