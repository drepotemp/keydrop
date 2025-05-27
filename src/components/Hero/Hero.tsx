"use client";
import React from "react";
import Vignette from "../Vignette/Vignette";
import Image from "next/image";
import "./style.css";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const wrapperRef = useRef(null);
  const heroDivRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);

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

  //Track herodiv height
  useEffect(() => {
    if (!heroDivRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeroHeight(entry.contentRect.height);
      }
    });

    observer.observe(heroDivRef.current);

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
    <section
      ref={wrapperRef}
      className="w-full h-fit relative max-sm:overflow-x-hidden sm:mb-[-50px] lg:mb-[-140px]"
    >
      {/* Nav bg */}
      <figure
        style={{
          height: `${Math.round(heroHeight)}px`,
        }}
        className="w-full max-sm:w-[1500px] relative"
      >
        <Image src={"/assets/images/hero-bg.png"} alt="hero img" fill />
      </figure>

      <section
        ref={heroDivRef}
        className="w-full hero absolute top-0 left-0 h-fit"
      >
        {/* Nav */}
        <nav className="w-full h-[80px] flex justify-between items-center px-[12px] sm:px-0">
          <section className="h-full flex justify-start items-center">
            <figure className="h-[60%] max-sm:w-[30vw] sm:w-[200px] relative mr-[40px] max-sm:mr-[20px]">
              <Image src={"/assets/images/logo.svg"} fill alt="logo" />
            </figure>

            <section className="flex flex-col justify-start items-start max-sm:text-[14px]">
              <section className="flex justify-start items-center">
                <div className="bg-[#77FF9D] w-[10px] h-[10px] rounded-[50%] mr-[9px]"></div>
                <span className="font-[poppins] font-semibold text-white">
                  15&nbsp;658
                </span>
              </section>

              <span className="text-[#858DAD] font-[poppins] font-semibold ">
                ONLINE
              </span>
            </section>
          </section>

          <button className="relative flex justify-center items-center h-[60%] max-sm:w-[35vw] w-[250px] rounded-[4px] bg-[#FFCB77] text-[#332918] font-[poppins] font-bold overflow-hidden group transition duration-300 ease-in-out hover:bg-[#332918] hover:text-[#FFCB77] hover:shadow-[0_0_25px_#FFCB77]">
            {/* Glow animation layer */}
            <span className="absolute inset-0 bg-[#FFCB77] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 pointer-events-none"></span>

            <figure className="w-[20px] h-[20px] relative mr-[8px] z-10">
              <Image src={"/assets/icons/btn-icon.svg"} alt="icon" fill />
            </figure>
            <span className="z-10">SIGN UP</span>
          </button>
        </nav>

        {/* mobile */}
        <figure className="sm:hidden w-full h-[50vh] relative mr-[-30px] mt-[-45px]">
          <Image src={"/assets/images/hero-guy.png"} alt="image" fill />
        </figure>

        <section className="sm:hidden w-full flex flex-col justify-start items-center px-[12px] mt-[-40px]">
          <span className="text-white text-center font-[poppins] font-medium text-[20px] max-sm:max-w-[79vw] mb-[15px]">
            Boost your balance and start with bonus
          </span>

          <p className="font-[poppins] text-left text-[#B8BCD0] max-w-[350px]">
            <span className="font-semibold">
              Join us and get more from the very beginning!
            </span>
            &nbsp; You’ll{" "}
            <span className="font-semibold text-[#FFCB77]">
              receive 20% Extra
            </span>{" "}
            on your first top-up plus a&nbsp;
            <span className="font-semibold text-[#FFCB77]">
              $1 welcome bonus
            </span>
            , added automatically to your account. It’s the easiest way to start
            with an edge.&nbsp;
            <span className="font-semibold">
              No tricks – just real value, right away.
            </span>
          </p>

          <button className="mt-[25px] flex justify-center items-center h-[50px] w-[330px] rounded-[4px] text-[#332918] font-[poppins] font-bold bg-[#FFCB77]">
            <figure className="w-[20px] h-[20px] relative mr-[8px]">
              <Image src={"/assets/icons/btn-icon.svg"} alt="icon" fill />
            </figure>
            <span>GET BONUS NOW</span>
          </button>
        </section>

        {/* (desktop) */}
        <section className=" max-sm:hidden w-full flex justify-between items-center">
          <section className="w-[48vw] flex flex-col justify-start items-start mb-[90px]">
            <span
              style={{ fontSize: `${titleFontSize}px` }}
              className="text-white font-[poppins] font-medium max-w-[80%] text-left mb-[30px]"
            >
              Boost your balance and start with bonus
            </span>

            <p
              style={{
                fontSize: `${descFontSize}px`,
              }}
              className="font-[poppins] text-left text-[#B8BCD0] max-w-[95%]"
            >
              <span className="font-semibold">
                Join us and get more from the very beginning!
              </span>
              &nbsp; You’ll{" "}
              <span className="font-semibold text-[#FFCB77]">
                receive 20% Extra
              </span>{" "}
              on your first top-up plus a&nbsp;
              <span className="font-semibold text-[#FFCB77]">
                $1 welcome bonus
              </span>
              , added automatically to your account. It’s the easiest way to
              start with an edge.&nbsp;
              <br />
              <br />
              <span className="font-semibold">
                No tricks – just real value, right away.
              </span>
            </p>

            <button className="relative mt-[25px] flex justify-center items-center h-[50px] min-w-[220px] w-[50%] rounded-[8px] bg-[#FFCB77] font-[poppins] font-bold text-[#332918] overflow-hidden transition duration-300 ease-in-out hover:text-[#FFCB77] hover:bg-[#332918] hover:animate-glow shadow-lg group">
              {/* Glow Overlay */}
              <span className="absolute inset-0 bg-[#FFCB77] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 pointer-events-none"></span>

              {/* Icon */}
              <figure className="w-[20px] h-[20px] relative mr-[8px] z-10">
                <Image src={"/assets/icons/btn-icon.svg"} alt="icon" fill />
              </figure>

              {/* Text */}
              <span className="z-10">GET BONUS NOW</span>
            </button>
          </section>

          <figure
            style={{
              height: Math.round(parentWidth * 0.5),
            }}
            className={`w-[50vw]  relative`}
          >
            <Image src={"/assets/images/hero-guy-dk.png"} alt="image" fill />
          </figure>
        </section>
      </section>
    </section>
  );
};

export default Hero;
