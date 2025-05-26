import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="border-t-[#2E3244] pt-[30px] border-t-[2px] mt-[45px] w-full flex flex-col justify-start items-center">
      <figure className="w-[240px] h-[45px] relative">
        <Image src={"/assets/images/footer-logo.svg"} alt="Footer logo" fill />
      </figure>

      <section className="w-full my-[30px] flex justify-between items-center px-[12px]">
        {["insta", "discord", "fb", "tg", "twitch", "x", "yt"].map((e, i) => {
          return (
            <figure key={i} className="w-[40px] h-[40px] relative">
              <Image
                src={"/assets/icons/" + e + ".svg"}
                alt="Footer link"
                fill
              />
            </figure>
          );
        })}
      </section>

      <figure className="w-[240px] h-[90px] min-h-[90px] relative object-cover">
        <Image src={"/assets/images/get-addon.svg"} alt="Addon logo" fill />
      </figure>

      <div className="mt-[40px] bg-[#1F1F27] text-center py-[25px] text-[#B8BCD0] px-[12px]">
        With us, you can easily get Steam, Origin and Uplay games. Keys are sent
        immediately. 100% satisfaction guaranteed. Copyright © 2025 Key-Drop.
        All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
