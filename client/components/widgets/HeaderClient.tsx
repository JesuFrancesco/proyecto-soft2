"use client";

import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import ToggleDarkMode from "@/components/atoms/ToggleDarkMode";
import Link from "next/link";
import Logo from "@/components/atoms/Logo";
import ToggleMenu from "../atoms/ToggleMenu";
import { headerData } from "@/shared/layout.data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next-nprogress-bar";

const HeaderClient = () => {
  const router = useRouter();
  const { links, showToggleTheme, position } = headerData;

  const ref = useRef(null);

  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(
    updatedIsDropdownOpen as boolean[]
  );
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  useOnClickOutside(ref, () => {
    setIsDropdownOpen(updatedIsDropdownOpen as boolean[]);
  });

  return (
    <>
      <div
        className={`flex justify-between md:py-0 md:px-0 md:mr-10 ${
          isToggleMenuOpen
            ? "md:bg-transparent md:dark:bg-transparent md:border-none bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-600"
            : ""
        }`}
      >
        <div className="flex items-center pr-9">
          <Link
            className="flex flex-row items-center align-middle"
            href="/"
            onClick={() =>
              isToggleMenuOpen
                ? handleToggleMenuOnClick()
                : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])
            }
          >
            <Logo />
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <ToggleMenu
            handleToggleMenuOnClick={handleToggleMenuOnClick}
            isToggleMenuOpen={isToggleMenuOpen}
          />
        </div>
      </div>

      <nav
        className={`${
          isToggleMenuOpen ? "block" : "hidden"
        } h-screen md:w-full ${
          position === "right"
            ? "justify-end"
            : position === "left"
            ? "justify-start"
            : "justify-center"
        } w-auto overflow-y-auto dark:text-slate-200 md:mx-5 md:flex md:h-auto md:items-center`}
        aria-label="Main navigation"
      >
        <ul
          ref={ref}
          className="overflow-x-auto md:py-3 flex w-full flex-col mt-2 mb-36 md:m-0 text-xl md:w-auto md:flex-row md:self-center md:text-base"
        >
          {links &&
            links.map(({ label, href, icon: Icon, links }, index) => (
              <li key={`item-link-${index}`}>
                {links && links.length ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white">
                        {label}{" "}
                        {Icon && (
                          <Icon className="ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden h-3.5 w-3.5 md:inline" />
                        )}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded font-medium drop-shadow-xl md:backdrop-blur-md  md:border md:border-gray-200 md:dark:border-slate-700">
                      {links.map(({ label: label2, href: href2 }, index2) => (
                        <DropdownMenuItem
                          onClick={() => router.push(href2 ? href2 : "#")}
                          key={`item-link-${index2}`}
                          className="cursor-pointer"
                        >
                          {label2}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
                    href={href}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
        </ul>
      </nav>

      <div
        className={`${
          isToggleMenuOpen ? "block" : "hidden"
        } fixed bottom-0 left-0 w-full justify-end p-3 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0 md:bg-transparent md:dark:bg-transparent md:border-none bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-600`}
      >
        <div className="flex w-full items-center justify-between md:w-auto">
          {showToggleTheme && <ToggleDarkMode />}
        </div>
      </div>
    </>
  );
};

export default HeaderClient;
