import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="max-lg:border-t-[#2E3244] pt-[30px] max-lg:border-t-[2px] mt-[45px] w-full flex flex-col justify-start items-center">
      <section className="max-lg:hidden border-[#2E3244] border-[2px] w-full py-[10px] flex justify-center items-center">
        {["visa", "blik", "paypal", "mastercard", "sofort", "trustly"].map(
          (e, i) => {
            return (
              <figure key={i} className="mr-[50px] relative w-[5vw] h-[30px]">
                <Image
                  src={"/assets/images/" + e + ".svg"}
                  alt="payments img"
                  fill
                />
              </figure>
            );
          }
        )}

        <span className="text-[#858DAD]">+100 more</span>
      </section>

      <figure className="lg:hidden w-[240px] h-[45px] relative">
        <Image src={"/assets/images/footer-logo.svg"} alt="Footer logo" fill />
      </figure>

      <section className="lg:hidden w-full my-[30px] flex justify-between items-center px-[12px]">
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

      <figure className="lg:hidden w-[240px] h-[90px] min-h-[90px] relative object-cover">
        <Image src={"/assets/images/get-addon.svg"} alt="Addon logo" fill />
      </figure>

      {/* desktop Footer */}
      <section className="w-full flex justify-between items-center max-lg:hidden mt-[50px]">
        <section className="flex flex-col justify-start items-start w-[33%]">
          <figure className="w-[200px] h-[45px] relative">
            <Image
              src={"/assets/images/footer-logo.svg"}
              alt="Footer logo"
              fill
            />
          </figure>

          <section className="w-full my-[30px] flex justify-between items-center px-[12px]">
            {["insta", "discord", "fb", "tg", "twitch", "x", "yt"].map(
              (e, i) => {
                return (
                  <figure key={i} className="w-[40px] h-[40px] relative">
                    <Image
                      src={"/assets/icons/" + e + ".svg"}
                      alt="Footer link"
                      fill
                    />
                  </figure>
                );
              }
            )}
          </section>
        </section>

        <figure className="w-[240px] h-[90px] min-h-[90px] relative object-cover">
          <Image src={"/assets/images/get-addon.svg"} alt="Addon logo" fill />
        </figure>

        <section className="footer-links w-[33%] text-[12px] flex flex-wrap gap-[40px] text-[#B8BCD0]">
          <div>
            <h3 className="font-bold text-white mb-2">Customer Service</h3>
            <ul className="space-y-1 list-disc ml-[20px]">
              <li>Provably Fair</li>
              <li>Term of Service</li>
              <li>Privacy Policy</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-2">My Account</h3>
            <ul className="space-y-1 list-disc ml-[20px]">
              <li>My Account</li>
              <li>My Cases</li>
              <li>Affiliate System</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-2">Key-Drop</h3>
            <ul className="space-y-1 list-disc ml-[20px]">
              <li>Daily Cases</li>
              <li>Battle Cases</li>
              <li>Skin Changer</li>
              <li>Ranking</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-1 mt-[25px]">
              <li>Upgrader</li>
              <li>Contracts</li>
              <li>Free Gold</li>
            </ul>
          </div>
        </section>
      </section>

      <div className="lg:hidden mt-[40px] bg-[#1F1F27] text-center py-[25px] text-[#B8BCD0] px-[12px]">
        With us, you can easily get Steam, Origin and Uplay games. Keys are sent
        immediately. 100% satisfaction guaranteed. Copyright © 2025 Key-Drop.
        All rights reserved.
      </div>

      <div className="flex justify-between items-center max-lg:hidden mt-[40px] bg-[#1F1F27] text-[10px] text-center py-[25px] text-[#B8BCD0] px-[20px] w-full">
        <span className="max-w-[420px] text-left">
          WITH US, YOU CAN EASILY GET STEAM, ORIGIN AND UPLAY GAMES. KEYS ARE
          SENT IMMEDIATELY. 100% SATISFACTION GUARANTEED. COPYRIGHT © 2021
          KEY-DROP. ALL RIGHTS RESERVED.
        </span>

        <span className="max-w-[420px] text-right">
          FINALTA PLAY TECHNOLOGIES LLP (71-75 SHELTON STREET, COVENT GARDEN,
          LONDON, UNITED KINGDOM, WC2H 9JQ)
        </span>
      </div>
    </section>
  );
};

export default Footer;
