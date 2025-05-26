import React from "react";
import Image from "next/image";
import "./style.css";

const Navbar = () => {
  const navLinks: string[] = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
    "Browse By Languages",
  ];

  return (
    <>
      {/* Desktop nav */}
      <nav className="z-[9] fixed top-[0px]  text-white left-0 w-full pt-[20px] h-[80px] px-[40px] max-bp:hidden flex justify-between items-center">
        <section className="h-full flex justify-start items-center">
          <figure className="w-[150px] h-[70%] relative mr-[25px]">
            <Image
              src={"/assets/images/NetflixLogo.svg"}
              fill
              alt="Netflix logo"
            />
          </figure>

          <ul className="ul flex list-none h-[80%] font-[NetflixSans]">
            {navLinks.map((each, i) => {
              return (
                <li
                  key={i}
                  className={`${
                    i < navLinks.length - 1 && "mr-[18px]"
                  } flex justify-center items-center cursor-pointer ${
                    i == 0 && `font-bold`
                  } h-full hover:font-bold`}
                >
                  {each}
                </li>
              );
            })}
          </ul>
        </section>
        <section className="flex justify-start items-center">
          <figure className="cursor-pointer w-[24px] h-[24px] relative mr-[18px]">
            <Image
              src={"/assets/images/Search.svg"}
              fill
              alt="Netflix asset icon"
            />
          </figure>

          <span className="cursor-pointer text-[12px] mr-[25px]">Kids</span>
          <figure className="cursor-pointer w-[24px] h-[24px] relative mr-[18px]">
            <Image
              src={"/assets/images/Bell.svg"}
              fill
              alt="Netflix asset icon"
            />
          </figure>

          <figure className="cursor-pointer w-[33px] h-[33px] relative mr-[8px]">
            <Image
              src={"/assets/images/Avatar.svg"}
              fill
              alt="Netflix asset icon"
            />
          </figure>

          <figure className="cursor-pointer text-[24px] w-[15px] h-[7px] relative">
            <Image
              src={"/assets/images/Arrow.svg"}
              fill
              alt="Netflix asset icon"
            />
          </figure>
        </section>
      </nav>

      {/* Mobile nav */}
      <nav className="bp:hidden z-[9] fixed top-[0px] text-white left-0 w-full pt-[20px] h-fit px-[25px] flex flex-col justify-start items-center">
        <figure className="w-full h-[35px] relative">
          <Image
            fill
            src={"/assets/images/Status bar.svg"}
            alt="Netflix asset image"
            className="object-cover"
          />
        </figure>
        <section className="w-full flex justify-between items-center mt-[30px]">
          <figure className="w-[24px] h-[39px] relative">
            <Image
              fill
              src={"/assets/images/Logo.svg"}
              alt="Netflix asset image"
              className="object-cover"
            />
          </figure>

          <div className="bg-[#D9D9D9] w-[38px] h-[38px] rounded-[5px]"></div>
        </section>

        <section className="w-full flex justify-center items-center mt-[15px]">
          <span className="mr-[30px]">TV Shows</span>
          <span className="mr-[30px]">Movies</span>
          <section className="flex justify-start items-center">
            <span>Categories</span>
            <figure className="ml-[7px] w-[12px] h-[12px] relative">
              <Image
                fill
                src={"/assets/images/Polygon 2.svg"}
                alt="Netflix asset image"
              />
            </figure>
          </section>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
