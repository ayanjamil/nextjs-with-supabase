"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import landingPhoto from "@/public/images/PSOC.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const mobileWallpapers = [
  "/images/mobile/1.jpg",
  "/images/mobile/2.jpg",
  "/images/mobile/3.jpg",
  "/images/mobile/4.jpg",
  "/images/mobile/5.jpg",
];

const laptopWallpapers = [
  "/images/laptop/1.jpg",
  "/images/laptop/2.jpg",
  "/images/laptop/3.jpg",
  "/images/laptop/4.jpg",
  "/images/laptop/5.jpg",
  "/images/laptop/6.jpg",
  "/images/laptop/7.jpg",
];

export default function Home() {
  const [activeButton, setActiveButton] = useState<"mobile" | "laptop" | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (activeButton === "mobile") {
      setCount(mobileWallpapers.length);
    } else if (activeButton === "laptop") {
      setCount(laptopWallpapers.length);
    }
  }, [activeButton]);

  return (
    <div className="flex-1 w-full flex flex-col  items-center">
      {/* section 1 */}

      <div>
        <main className="flex-1 flex flex-col gap-4 lg:gap-6">
          <div className="w-full mb-6 lg:mb-10">
            <Image
              src={landingPhoto}
              alt="BIT Logo"
              height={900}
              className="mx-auto rounded-lg"
            />
          </div>
        </main>

        {/* section 2 */}

        <div className="w-full mb-6 lg:mb-10 h-[600px] lg:h-[900px] flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 h-full flex justify-center flex-col items-center lg:items-start p-4 lg:p-8 ml-0 lg:ml-11">
            <div className="font-homenaje text-5xl md:text-6xl lg:text-8xl pb-3 lg:pb-5 text-center lg:text-left">
              WALLPAPERS
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl text-center lg:text-left">
              To Elevate Your Display
            </div>
            {activeButton && (
              <button
                className="mt-6 px-6 py-3 text-lg md:text-xl bg-btn-background hover:bg-btn-background-hover rounded-lg transition-colors"
                onClick={() =>
                  activeButton === "mobile"
                    ? setActiveButton("laptop")
                    : setActiveButton("mobile")
                }
              >
                {`For ${activeButton === "mobile" ? "Laptop" : "Mobile"}`}
              </button>
            )}
          </div>
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
            <div className="flex flex-col gap-4 md:gap-6">
              {!activeButton ? (
                <>
                  <button
                    className="px-6 py-3 text-lg md:text-xl bg-btn-background hover:bg-btn-background-hover rounded-lg transition-colors"
                    onClick={() => setActiveButton("mobile")}
                  >
                    For Mobile
                  </button>
                  <button
                    className="px-6 py-3 text-lg md:text-xl bg-btn-background hover:bg-btn-background-hover rounded-lg transition-colors"
                    onClick={() => setActiveButton("laptop")}
                  >
                    For Laptop
                  </button>
                </>
              ) : (
                <div>
                  <Carousel className="w-full max-w-xs " setApi={setApi}>
                    <CarouselContent>
                      {(activeButton === "mobile"
                        ? mobileWallpapers
                        : laptopWallpapers
                      ).map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1 md:p-2 lg:p-3">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-2 md:p-4 lg:p-6">
                                <Image
                                  src={image}
                                  alt={`Wallpaper ${index + 1}`}
                                  width={500}
                                  height={500}
                                  className="object-cover rounded-lg w-full h-full"
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  <div className="py-2 text-center text-sm text-muted-foreground">
                    Slide {current} of {count}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
