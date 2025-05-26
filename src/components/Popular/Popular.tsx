import Image from "next/image";
import "./style.css";

const Popular = () => {
  return (
    <section className="z-[3] absolute bottom-0 w-full left-0 h-[200px] font-[NetflixSans] max-bp:bg-black">
      <section className="max-bp:pl-[10px] bp:pl-[40px] popular-vignette w-full h-full flex flex-col justify-start items-start">
        <span className="font-bold text-white text-[18px]">Popular on Netflix</span>
        <section className="h-[80%] w-full overflow-x-auto flex justify-start items-center mt-[10px] scrollbar-hide">
          {[1,2,3,4,5,6].map((each, i) => {
            return (
              <figure key={i} className="max-bp:bg-[#D9D9D9] max-bp:min-w-[100px] max-bp:h-[160px] max-bp:min-h-[160px] bp:min-w-[248px] bp:min-h-[140px] bp:h-[140px] relative mr-[10px] rounded-[5px]">
                <Image
                  fill
                  src={`/assets/images/p${i + 1}.svg`}
                  alt="Netflix asset image"
                  className="max-bp:hidden max-bp:object-contain"
                />
              </figure>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Popular;
