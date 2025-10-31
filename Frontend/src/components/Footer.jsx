import React from 'react'
import { logo } from '../assets/assets'

const Footer = () => {
  return (
     <footer className="bg-[rgba(27,35,22,1)] text-white py-30 px-8 md:px-20 mx-auto pl-20 ">
      <div className="flex flex-col md:flex-row justify-between gap-20 pl-25">
        
        <div className="flex-1  ">
          <div className="flex items-center gap-2 mb-4">
            <img
              src={logo}
              alt="logo"
              className="w-15 h-15"
            />
            <h2 className="text-4xl font-bold text-gray-300">FloraVision.</h2>
          </div>
          <p className="text-gray-300 max-w-sm mb-6  text-xl">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>
          <div className="flex gap-6 font-semibold mt-10">
            <a href="#" className="hover:text-green-300 transition text-2xl">
              FB
            </a>
            <a href="#" className="hover:text-green-300 transition text-2xl">
              TW
            </a>
            <a href="#" className="hover:text-green-300 transition text-2xl">
              LI
            </a>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-3xl font-semibold mb-4 cursor-pointer ">Quick Link's</h3>
          <ul className="space-y-2 text-xl text-gray-300">
            <li>
              <a
                href="#home"
                className="hover:text-white underline underline-offset-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#plants"
                className="hover:text-white underline  underline-offset-2"
              >
                Type's Of plant's
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white underline underline-offset-2"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#more"
                className="hover:text-white underline underline-offset-2"
              >
                Privacy
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-3xl font-semibold mb-4">For Every Update.</h3>
          <form className="flex items-center border border-gray-400 rounded-md overflow-hidden w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent flex-1 px-3 py-2 text-gray-200 outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 font-semibold hover:bg-gray-200 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 text-sm">
        FloraVision © all right reserve
      </div>
    </footer>

  )
}

export default Footer
