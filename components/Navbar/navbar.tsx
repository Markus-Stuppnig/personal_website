"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuData from "./menuData";
import { motion, AnimatePresence } from "framer-motion";
import ContactUsButton from "@/components/ContactButton/ContactButton";
import { data } from "@/components/miscellaneous/generalData";
import Heading from "../miscellaneous/Heading";

const navbarItemsDefault = "text-primary";
const navbarItemsSelected = "text-secondary";
const navbarItemsSelectedOnHover = "hover:text-secondary";
const navbarFontWeight = "font-semibold";

const Header = () => {
  const pathUrl = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="z-[9999] w-full h-25 bg-white sticky">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full text-base">
          <Link href="/">
            <Heading
              size="text-base"
              className={`font-semibold px-2 py-2 text-primary hover:text-secondary transition-colors`}
            >
              {data.name}
            </Heading>
          </Link>

          <nav>
            <ul className="hidden md:flex gap-5 lg:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key}>
                  <Link href={`${menuItem.path}`}>
                    <Heading
                      size="text-base"
                      className={
                        pathUrl.endsWith(menuItem.path)
                          ? `font-semibold px-2 py-2 text-secondary`
                          : `font-semibold px-2 py-2 text-primary hover:text-secondary transition-colors`
                      }
                    >
                      {menuItem.title}
                    </Heading>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:flex">
            <div className="items-center gap-6 lg:mt-0">
              <ContactUsButton />
            </div>
          </div>

          <button
            aria-label="hamburger Toggler"
            className="md:hidden"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span className="block relative cursor-pointer w-5.5 h-5.5">
              <span className="block absolute w-full h-full">
                <span
                  className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] ${
                    !isMenuOpen ? "!w-full delay-300" : ""
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${
                    !isMenuOpen ? "!w-full delay-400" : ""
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${
                    !isMenuOpen ? "!w-full delay-500" : ""
                  }`}
                ></span>
              </span>
              <span className="block absolute w-full h-full rotate-45">
                <span
                  className={`block bg-black rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-0 ${
                    isMenuOpen ? "h-5.5 delay-[0]" : ""
                  }`}
                ></span>
                <span
                  className={`block bg-black rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0 ${
                    isMenuOpen ? "h-0.5 delay-200" : ""
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className={`w-full lg:w-full h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between !visible bg-white dark:bg-blacksection shadow-solid-5 h-auto max-h-[400px] overflow-y-scroll p-7.5`}
            >
              <nav>
                <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10">
                  {menuData.map((menuItem, key) => (
                    <li key={key}>
                      <Link
                        href={`${menuItem.path}`}
                        className={
                          pathUrl.endsWith(menuItem.path)
                            ? `${navbarFontWeight} ${navbarItemsSelected}`
                            : `${navbarFontWeight} ${navbarItemsDefault} ${navbarItemsSelectedOnHover}`
                        }
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-7">
                <ContactUsButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
