import React from "react";
import Vignette from "../Vignette/Vignette";
import Image from "next/image";
import "./style.css";

const Hero = () => {
  return (
    <section className="w-full min-h-screen relative max-sm:overflow-x-hidden">
      {/* Nav bg */}
      <figure className="w-full max-sm:w-[1500px] h-screen relative">
        <Image src={"/assets/images/hero-bg.png"} alt="hero img" fill />
      </figure>

      <section className="w-full min-h-screen hero absolute top-0 left-0">
        {/* Nav */}
        <nav className="w-full h-[80px] flex justify-between items-center px-[12px]">
          <section className="h-full flex justify-start items-center">
            <figure className="h-[60%] max-sm:w-[30vw] sm:w-[250px] relative mr-[40px] max-sm:mr-[20px]">
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

          <button className="flex justify-center items-center h-[60%] max-sm:w-[35vw] w-[250px] rounded-[4px] text-[#332918] font-[poppins] font-bold bg-[#FFCB77]">
            <figure className="w-[20px] h-[20px] relative mr-[8px]">
              <Image src={"/assets/icons/btn-icon.svg"} alt="icon" fill />
            </figure>
            <span>SIGN UP</span>
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

        <section style={{height:`calc(100vh - 80px)`}} className="max-sm:hidden w-full flex justify-center items-center">
          <section className="w-[45vw] flex flex-col justify-start items-start">
            <span className="text-white font-[poppins] font-medium text-[30px] max-w-[60%] text-left mb-[30px]">
              Boost your balance and start with bonus
            </span>

            <p className="font-[poppins] text-left text-[#B8BCD0] max-w-[75%]">
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
              start with an edge.&nbsp;<br/><br/>
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

          <figure className="w-[45vw] h-[85vh] relative">
            <Image src={"/assets/images/hero-guy-dk.png"} alt="image" fill />
          </figure>
        </section>
      </section>
    </section>
  );
};

export default Hero;
