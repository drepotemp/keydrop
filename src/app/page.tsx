"use client";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Skin = () => {
  return (
    <section className="mx-[20px] text-[12px] skin font-[poppins] border-[#2E3244] border min-w-[180px] w-[180px] relative px-[12px] py-[15px] rounded-[7px] flex flex-col justify-start items-center">
      <span className="w-full text-left text-[#FF9633]">
        ST
        <span className="text-[#B8BCD0] ml-[8px]">MW</span>
      </span>

      <figure className="w-[85%] h-[100px] relative mt-[10px] ">
        <Image
          src={"/assets/images/skin.svg"}
          alt="skin img"
          fill
          className="rounded-[inherit]"
        />
      </figure>

      <span className="text-[#B8BCD0] text-[12px] w-full text-left">AWP</span>
      <span className="text-white w-full text-left">Dragon Lore</span>

      <div className="w-full bg-[#332918] text-center mt-[9px] py-[4px] rounded-[4px] text-[#FFCB77]">
        $4852.56
      </div>

      <section className="w-full h-full absolute top-0 left-0 flex justify-center items-end">
        <div className="bg-[#FE4760] w-[70%] h-[2px]"></div>
      </section>
    </section>
  );
};

type itemsType = {
  title: string;
  description: string;
  iconBgColor: string;
  textColor: string;
  bgColor?: string;
  color: string;
};

export default function Home() {
  const [items, setItems] = useState<itemsType[]>([
    {
      title: "0.50$ Welcome Bonus",
      description: "Get free funds to start – no top-up required.",
      textColor: "#77FF9D",
      iconBgColor: "#30663F",
      bgColor: "rgba(24, 51, 31, 0.7)",
      color: "green",
    },

    {
      title: "20% Top Up Bonus",
      description: "Top up your account and get an extra 20% on your deposit.",
      textColor: "#D6FF6F",
      iconBgColor: "#74902C",
      bgColor: "rgba(35, 50, 0, 0.7)",
      color: "yellow",
    },

    {
      title: "Open Free Case",
      description:
        "Explore your first cases completely free. No deposit, – just open and see what you get.",
      textColor: "#C0A3F5",
      iconBgColor: "#4C288C",
      color: "purple",
    },
  ]);

  const wrapperRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(0);

  //Track wrapper width
  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setParentWidth(entry.contentRect.width);
      }
    });

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  const [titleFontSize, setTitleFontSize] = useState<number>(0);
  const [descFontSize, setDescFontSize] = useState<number>(0);

  //FOR TITLE FONTS
  //Set title font size to 0.022% of wrapper width(for fluid responsiveness)
  useEffect(() => {
    //Don't set if already set
    if (parentWidth > 900 && titleFontSize == Math.round(0.022 * parentWidth)) {
      return; //means font size is already set
    } else {
      if (parentWidth > 900) {
        //Set fontsize (if not already set)
        return setTitleFontSize(Math.round(0.022 * parentWidth));
      }
    }

    //For smaller screen widths, to prevent a ridiculously small font size, set a fixed font size
    setTitleFontSize(20);
  }, [parentWidth]);

  //FOR DESCRIPTION FONTS
  //Set description font size to 0.01% of wrapper width(for fluid responsiveness)
  useEffect(() => {
    //Don't set if already set
    if (parentWidth > 1200 && descFontSize == Math.round(parentWidth * 0.01)) {
      return; //means font size is already set
    } else {
      if (parentWidth > 1200) {
        //Set fontsize (if not already set)
        return setDescFontSize(Math.round(0.01 * parentWidth));
      }
    }

    //For smaller screen widths, to prevent a ridiculously small font size, set a fixed font size
    setDescFontSize(12);
  }, [parentWidth]);

  return (
    <main
      ref={wrapperRef}
      className="main w-full min-h-screen relative flex flex-col justify-start items-center overflow-x-hidden px-[20px]"
    >
      <Hero />
      {/* (BOXES) section */}
      <section className="w-full h-fit sm:flex-wrap boxes sm:p-[15px] sm:border-[#23232D] sm:border sm:rounded-[7px] flex flex-col sm:flex-row sm:justify-between justify-start items-center max-sm:px-[12px] max-sm:mt-[50px]  font-[poppins]">
        {items.map((e, i) => {
          return (
            <section
              style={{
                //Height should be width/2
                height: `${Math.round(Math.round(parentWidth / 3) / 2)}px`,
              }}
              key={i}
              className={`max-sm:w-full max-sm:my-[4px] m-[9px] sm:flex-grow min-w-[300px] rounded-[6px] relative`}
            >
              {/* Box bg img */}
              <figure className="w-full h-full relative rounded-[inherit]">
                <Image
                  src={"/assets/images/" + e.color + "-box-bg.svg"}
                  alt="box bg-image"
                  fill
                  className="rounded-[inherit] object-cover"
                />
              </figure>

              <section
                className={`w-full h-full absolute top-0 left-0 flex sm:flex-col justify-center items-center`}
              >
                <div
                  style={{ backgroundColor: e.iconBgColor }}
                  className={`flex justify-center items-center rounded-[5px] mr-[22px] sm:mb-[20px] w-[13%] h-[23%]`}
                >
                  <figure className="w-[49%] h-[49%] relative">
                    <Image
                      src={"/assets/icons/" + e.color + "-box-icon.svg"}
                      alt="box bg-image"
                      fill
                      className="rounded-[inherit]"
                    />
                  </figure>
                </div>

                <section className="flex flex-col justify-center items-start sm:items-center w-[60%] sm:w-[85%]">
                  <span
                    style={{ color: e.textColor,
                      fontSize:`${((Math.round(Math.round(parentWidth / 3) / 2)) * 0.1 )}px`

                     }}
                    className={`break-words font-semibold mb-[6px]`}
                  >
                    {e.title}
                  </span>
                  <p
                  style={{
                    fontSize:`${((Math.round(Math.round(parentWidth / 3) / 2)) * 0.07 )}px`
                  }}
                  className="break-words text-white text-[12px] max-w-[75%] sm:text-center">
                    {e.description}
                  </p>
                </section>
              </section>
            </section>
          );
        })}
      </section>

      {/*(Your cs2 inventory) secetion */}
      <section className="w-full sm:pr-0 flex sm:flex-row flex-col sm:justify-between sm:items-start justify-start items-center">
        {/* mobile */}
        <figure className="sm:hidden w-full h-[50vh] relative">
          <Image
            src={"/assets/images/knife-img.svg"}
            alt="knife img"
            fill
            className="rounded-[inherit]"
          />
        </figure>

        <section className="sm:hidden w-full flex flex-col justify-start items-center font-[poppins]">
          <span className="text-white text-center font-[poppins] font-medium text-[20px] max-sm:max-w-[79vw] mb-[20px]">
            Your CS2 inventory deserves an update
          </span>

          <span className="text-[#B8BCD0] mb-[20px] text-center">
            Say goodbye to boring items and refresh your inventory with the
            hottest skins from the latest collections. With our smart exchange
            system, you can browse tailored offers and instantly swap for
            top-tier gear.
          </span>

          <span className="text-[#B8BCD0] text-center">
            <span className="text-[#A075F0] font-semibold">
              {" "}
              Fast, easy, and rewarding
            </span>{" "}
            — find the perfect deal and upgrade your style today.
          </span>
        </section>

        <figure className="sm:hidden w-full h-[50px] relative my-[30px]">
          <Image
            src={"/assets/images/bars.svg"}
            alt="bars img"
            fill
            className="rounded-[inherit]"
          />
        </figure>

        {/* desktop */}
        {/* writeup */}
        <section className="max-sm:hidden mt-[150px] w-[40%] flex flex-col justify-center items-start">
          <section className="w-full flex flex-col justify-start items-start font-[poppins]">
            <span
              style={{ fontSize: `${titleFontSize}px` }}
              className="text-white text-left font-[poppins] font-medium max-w-[85%] mb-[20px]"
            >
              Your CS2 inventory deserves an update
            </span>

            <span
              style={{ fontSize: `${descFontSize}px` }}
              className="text-[#B8BCD0] mb-[20px] text-left"
            >
              Say goodbye to boring items and refresh your inventory with the
              hottest skins from the latest collections. With our smart exchange
              system, you can browse tailored offers and instantly swap for
              top-tier gear.
            </span>

            <span
              style={{ fontSize: `${descFontSize}px` }}
              className="text-[#B8BCD0] text-center sm:text-left"
            >
              <span className="text-[#A075F0] font-semibold">
                {" "}
                Fast, easy, and rewarding
              </span>{" "}
              — find the perfect deal and upgrade your style today.
            </span>
          </section>

          <figure className="w-[50%] h-[20px] relative sm:mt-[30px] lg:mt-[150px]">
            <Image
              src={"/assets/images/bars.svg"}
              alt="bars img"
              fill
              className="rounded-[inherit] object-cover"
            />
          </figure>
        </section>

        {/* KNIFE img */}
        <figure
          style={{ height: `${Math.round(parentWidth * 0.57)}px` }}
          className="max-sm:hidden w-[57%] relative"
        >
          <Image
            src={"/assets/images/knife-img-dk.svg"}
            alt="knife img"
            fill
            className="rounded-[inherit]"
          />
        </figure>
      </section>

      {/*(Obtain new skins) section */}
      <section className=" w-full flex flex-col justify-start items-center font-[poppins]">
        {/* mobile */}
        <span className="sm:hidden text-white text-center font-[poppins] font-medium max-sm:max-w-[79vw] mb-[20px]">
          Obtain new skins today
        </span>

        <span className="sm:hidden text-[#B8BCD0] mb-[30px] text-center max-sm:px-[12px] w-full">
          Thousands of new CS2 items are being added daily, making it even
          easier for you to find the perfect option. Use our intuitive interface
          to navigate through various skin types and get the drop of your
          dreams.
        </span>

        {/* DESKTOP */}
        <section className="relative max-sm:hidden  mt-[-400px] w-full flex justify-between items-end">
          <section className="w-[48%] rounded-r-[8px] h-full flex flex-col justify-start pl-[40px] pt-[90px] pb-[200px] items-start bg-[#1B1B22]">
            <span
              style={{ fontSize: `${titleFontSize}px` }}
              className="text-white text-left font-[poppins] font-medium  mb-[20px]"
            >
              Obtain new skins today
            </span>

            <span
              style={{ fontSize: `${descFontSize}px` }}
              className="text-[#B8BCD0] text-left max-w-[85%]"
            >
              Thousands of new CS2 items are being added daily, making it even
              easier for you to find the perfect option. Use our intuitive
              interface to navigate through various skin types and get the drop
              of your dreams.
            </span>
          </section>

          {/* bars and controls */}
          <section className="flex flex-col items-end w-[48%] left-0">
            {/* controls */}
            <section className=" z-[2]  right-[12px] flex items-center">
              <figure className="cursor-pointer w-[50px] h-[50px] relative">
                <Image src={"/assets/icons/left.svg"} alt="control img" fill />
              </figure>

              <figure className="cursor-pointer w-[50px] ml-[20px] h-[50px] relative">
                <Image src={"/assets/icons/right.svg"} alt="control img" fill />
              </figure>
            </section>

            {/* bars */}
            <figure className="z-[1] w-[70%] h-[140px] relative">
              <Image
                src={"/assets/images/bars-desktop.svg"}
                alt="bars img"
                fill
              />
            </figure>
          </section>
        </section>

        {/* skins */}
        <section className="z-[2] sm:pl-[12px] skins sm:mt-[-90px] w-[100vw] flex justify-start items-center overflow-x-scroll mb-[20px]">
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
        </section>
      </section>

      {/*(Discover our events) section */}
      <section className="w-full flex flex-col justify-start items-center">
        <span className="mt-1 sm:my-[20px] text-white text-center font-[poppins] font-medium text-[20px] sm:text-[35px] max-sm:max-w-[79vw] sm:w-full sm:text-left">
          Discover our events
        </span>

        <section className="sm:hidden mt-[22px] flex w-full flex-col sm:flex-row sm:justify-between justify-start items-center">
          {[1, 2, 3].map((e, i) => {
            return (
              <figure
                className="w-full sm:w-[32%] h-[200px] relative rounded-[6px] mb-[12px]"
                key={i}
              >
                <Image
                  src={"/assets/images/event-" + e + ".svg"}
                  alt="event image"
                  fill
                  className="rounded-[inherit]"
                />
              </figure>
            );
          })}
        </section>

        <section className="max-sm:hidden mt-[22px] flex w-full flex-col sm:flex-row sm:justify-between justify-start items-center">
          {[1, 2, 3].map((e, i) => {
            return (
              <figure
                style={{
                  //Height should be width/2
                  height: `${Math.round(Math.round(parentWidth / 3) / 2)}px`,
                }}
                className={`w-full
                
                  sm:w-[32%] relative rounded-[6px] mb-[12px]`}
                key={i}
              >
                <Image
                  src={"/assets/images/event-" + e + ".svg"}
                  alt="event image"
                  fill
                  className="rounded-[inherit] object-cover"
                />
              </figure>
            );
          })}
        </section>
        {/* mobile btn */}
        <button className="sm:hidden relative mt-[12px] w-full sm:w-[33%] h-[50px] rounded-[8px] font-[poppins] font-bold text-[#332918] bg-[#FFCB77] overflow-hidden transition duration-300 ease-in-out hover:text-[#FFCB77] hover:bg-[#332918] hover:animate-glow shadow-md group">
          <span className="absolute inset-0 bg-[#FFCB77] opacity-0 group-hover:opacity-10 blur-lg transition-all duration-500"></span>
          <span className="relative z-10">CHECK NEW EVENT</span>
        </button>

        {/* desktop btn */}
        <button
          style={{
            width: `${Math.round(Math.round(parentWidth / 3) - 20)}px`,
          }}
          className="max-sm:hidden relative mt-[12px] h-[50px] rounded-[8px] font-[poppins] font-bold text-[#332918] bg-[#FFCB77] overflow-hidden transition duration-300 ease-in-out hover:text-[#FFCB77] hover:bg-[#332918] hover:animate-glow shadow-md group"
        >
          <span className="absolute inset-0 bg-[#FFCB77] opacity-0 group-hover:opacity-10 blur-lg transition-all duration-500"></span>
          <span className="relative z-10">CHECK NEW EVENT</span>
        </button>
      </section>

      {/*(About us) section */}
      <section className="w-full flex mt-[40px] flex-col lg:flex-row lg:justify-between lg:items-start justify-start items-center">
        {/* mobile */}
        <figure className="lg:hidden w-full h-[50vh] relative">
          <Image
            src={"/assets/images/money-guy.webp"}
            alt="money guy img"
            fill
            className="rounded-[inherit]"
          />
        </figure>

        <span className="lg:hidden my-[20px] text-white text-center font-[poppins] font-medium text-[20px] max-sm:max-w-[79vw]">
          About us
        </span>

        <span className="lg:hidden max-w-[600px] text-[#B8BCD0] mb-[20px] text-center">
          KeyDrop has been a trusted part of the Counter-Strike community since
          2018, offering players access to their favorite in-game items in a
          fast, fun, and secure way.
        </span>

        <span className="lg:hidden max-w-[600px] text-[#B8BCD0] mb-[20px] text-center">
          With a wide selection of skins, regular events and promotions, a
          detailed item wiki, and a dedicated CS2 blog, we go beyond just case
          openings — we create an immersive experience.
        </span>

        <span className="lg:hidden max-w-[600px] text-[#B8BCD0] text-center font-semibold">
          Our platform is built with players in mind, backed by 24/7 customer
          support and a commitment to comfort, transparency, and excitement at
          every step.
        </span>

        {/* desktop */}
        <section className="max-lg:hidden w-full flex sm:flex-col lg:flex-row justify-between items-center">
          <figure
            style={{ height: `${Math.round(parentWidth / 2.5)}px` }}
            className="w-[50%] h-full relative"
          >
            <Image
              src={"/assets/images/money-guy.webp"}
              alt="money guy img"
              fill
              className="rounded-[inherit]"
            />
          </figure>

          <section
            style={{
              height: `${Math.round(Math.round(parentWidth / 3.7))}px`,
              paddingLeft: `${Math.round(
                Math.round(parentWidth / 2) * 0.05
              )}px`,
            }}
            className="flex w-[45%] flex-col justify-center items-start rounded-l-[8px] bg-[#1B1B22]"
          >
            <span
              style={{ fontSize: `${titleFontSize}px` }}
              className="mb-[20px] text-white text-left font-[poppins] font-medium  w-full"
            >
              About us
            </span>

            <span
              style={{ fontSize: `${descFontSize}px` }}
              className="text-[#B8BCD0] mb-[20px] text-left w-[95%] font-semibold"
            >
              KeyDrop has been a trusted part of the Counter-Strike community
              since 2018, offering players access to their favorite in-game
              items in a fast, fun, and secure way.
            </span>

            <span
              style={{ fontSize: `${descFontSize}px` }}
              className="text-[#B8BCD0] mb-[20px] text-left w-[95%]"
            >
              With a wide selection of skins, regular events and promotions, a
              detailed item wiki, and a dedicated CS2 blog, we go beyond just
              case openings — we create an immersive experience.
            </span>

            <span
              style={{ fontSize: `${descFontSize}px` }}
              className="text-[#B8BCD0] text-left w-[95%] font-semibold"
            >
              Our platform is built with players in mind, backed by 24/7
              customer support and a commitment to comfort, transparency, and
              excitement at every step.
            </span>
          </section>
        </section>
      </section>

      <Footer />
    </main>
  );
}
