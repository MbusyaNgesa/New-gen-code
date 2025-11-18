"use client";

import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";

const links = [
  {
    name: "programs",
    path: "programs",
  },
  {
    name: "space",
    path: "space",
  },
  {
    name: "contact",
    path: "contact",
  },
];

const Navbar = () => {
  return (
    <div className="bg-black py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* left side */}
          <div className="flex items-center gap-12">
            {/* <div className="text-white">Logo</div> */}
            <Logo />
            <nav className="hidden xl:flex items-center gap-12">
              <ul className="flex gap-12 text-white">
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <ScrollLink
                        to={link.path}
                        smooth
                        spy
                        className="cursor-pointer"
                        activeClass="text-accent"
                      >
                        {link.name}
                      </ScrollLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* right side */}
          <div className="flex items-center gap-6 ">
            <button
              className="w-[150px] h-[44px] py-[5px] pl-[10px]
        pr-[5px] flex items-center justify-between min-w-[200px]
        bg-white group "
            >
              <div
                className="flex-1 text-center tracking-[1.2px]
          font-primary font-bold text-sm uppercase "
              >
                Pricing
              </div>
            </button>

            {/* <div className="text-white ">0712345678</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
