"use client";
import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const images = [
  { image: "/assets/images/2.jpg" },
  {
    image: "/assets/images/3.jpg",
  },
  { image: "/assets/images/4.jpg" },
  {
    image: "/assets/images/5.jpg",
  },
  { image: "/assets/images/1.jpg" },
  { image: "/assets/images/6.jpg" },
];
export default function Featured() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className=" pt-20 md:max-w-[70%] md:mx-auto" id="featured">
      <h1 className="text-white text-[30px] text-center px-14 py-5">
        Kiến trúc nổi bật <br /> Đình Thần Thái Bình
      </h1>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full space-y-5 "
      >
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem
              key={index}
              className=" basis-[75%] h-[400px] md:h-[500px] "
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full flex items-center justify-center">
          {Array.from({ length: count }).map((_, index) => (
            <span
              key={index}
              className={`${
                current === index + 1 ? "bg-[#E2D398]" : "bg-[#716E6E]"
              } inline-block h-1 w-[11.1%]`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
