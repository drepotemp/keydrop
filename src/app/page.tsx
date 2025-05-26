"use client";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Popular from "@/components/Popular/Popular";
import Image from "next/image";
import { useState } from "react";

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

  return (
    <main className="main w-full min-h-screen relative">
      <Hero />
      {/* section */}
      <section className="w-full flex flex-col justify-start items-center px-[12px] font-[poppins]">
        {items.map((e, i) => {
          return (
            <section
              key={i}
              className={`max-sm:w-full max-sm:my-[4px] h-[120px] rounded-[6px] relative`}
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
                className={`w-full h-full absolute top-0 left-0 flex justify-center items-center`}
              >
                <div
                  style={{ backgroundColor: e.iconBgColor }}
                  className={`p-[9px] rounded-[5px] mr-[22px]`}
                >
                  <figure className="w-[25px] h-[25px] relative">
                    <Image
                      src={"/assets/icons/" + e.color + "-box-icon.svg"}
                      alt="box bg-image"
                      fill
                      className="rounded-[inherit]"
                    />
                  </figure>
                </div>

                <section className="flex flex-col justify-center items-start w-[60%]">
                  <span
                    style={{ color: e.textColor }}
                    className={`break-words font-semibold mb-[6px]`}
                  >
                    {e.title}
                  </span>
                  <p className="break-words font-medium text-white text-[12px]">
                    {e.description}
                  </p>
                </section>
              </section>
            </section>
          );
        })}
      </section>

      {/* secetion */}
      <section className="w-full px-[12px] flex flex-col justify-start items-center">
        <figure className="w-full h-[50vh] relative">
          <Image
            src={"/assets/images/knife-img.svg"}
            alt="knife img"
            fill
            className="rounded-[inherit]"
          />
        </figure>

        <section className="w-full flex flex-col justify-start items-center font-[poppins]">
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

        <figure className="w-full h-[50px] relative my-[30px]">
          <Image
            src={"/assets/images/bars.svg"}
            alt="bars img"
            fill
            className="rounded-[inherit]"
          />
        </figure>
      </section>

      {/* section */}
      <section className="w-full flex flex-col justify-start items-center font-[poppins]">
        <span className="text-white text-center font-[poppins] font-medium text-[20px] max-sm:max-w-[79vw] mb-[20px]">
          Obtain new skins today
        </span>

        <span className="text-[#B8BCD0] mb-[30px] text-center">
          Thousands of new CS2 items are being added daily, making it even
          easier for you to find the perfect option. Use our intuitive interface
          to navigate through various skin types and get the drop of your
          dreams.
        </span>

        {/* skins */}
        <section className="skins w-[100vw] flex justify-start items-center overflow-x-scroll mb-[20px]">
          <Skin />
          <Skin />
          <Skin />
          <Skin />
          <Skin />
        </section>
      </section>

      {/* section */}
      <section className="px-[12px] w-full flex flex-col justify-start items-center">
        <span className="mt-1 text-white text-center font-[poppins] font-medium text-[20px] max-sm:max-w-[79vw]">
          Discover our events
        </span>

        <section className="mt-[22px] flex w-full flex-col justify-start items-center">
          {[1, 2, 3].map((e, i) => {
            return (
              <figure
                className="w-full h-[160px] relative rounded-[6px] mb-[12px]"
                key={i}
              >
                <Image
                  src={"/assets/images/event-" + e + ".png"}
                  alt="event image"
                  fill
                  className="rounded-[inherit]"
                />
              </figure>
            );
          })}
        </section>

        <button className="mt-[12px] w-full h-[50px] rounded-[4px] text-[#332918] font-[poppins] font-bold bg-[#FFCB77]">
          CHECK NEW EVENT
        </button>
      </section>

      {/* section */}
      <section className="w-full flex flex-col px-[12px] justify-start items-center">
        <figure className="w-full h-[50vh] relative">
          <Image
            src={"/assets/images/money-guy.png"}
            alt="money guy img"
            fill
            className="rounded-[inherit]"
          />
        </figure>

        <span className="my-[20px] text-white text-center font-[poppins] font-medium text-[20px] max-sm:max-w-[79vw]">
          About us
        </span>

        <span className="text-[#B8BCD0] mb-[20px] text-center">
          KeyDrop has been a trusted part of the Counter-Strike community since
          2018, offering players access to their favorite in-game items in a
          fast, fun, and secure way.
        </span>

        <span className="text-[#B8BCD0] mb-[20px] text-center">
          With a wide selection of skins, regular events and promotions, a
          detailed item wiki, and a dedicated CS2 blog, we go beyond just case
          openings — we create an immersive experience.
        </span>

        <span className="text-[#B8BCD0] text-center font-semibold">
          Our platform is built with players in mind, backed by 24/7 customer
          support and a commitment to comfort, transparency, and excitement at
          every step.
        </span>
      </section>

      <Footer />
    </main>
  );
}
