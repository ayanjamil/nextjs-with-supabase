import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";
import psocWhite from '@/public/images/psoc_white.png';
import bitmesraLogo from '@/public/images/Birla_Institute_of_Technology_Mesra(1).png'
import Image from 'next/image';
export default function Header() {
  // return (
  //   <div className="flex flex-col gap-16 items-center">
  //     <div className="flex gap-8 justify-center items-center">
  //       <Image src={psocWhite} alt="PSOC Logo" width={150} height={150} />
  //       {/* <div className=" p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" /> */}
  //       <Image src={bitmesraLogo} alt="BIT Logo" width={120} height={120} />
  //     </div>
  //     {/* <h1 className="sr-only">Supabase and Next.js Starter Template</h1> */}
  //     {/* <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
  //       Welcome to Photographic Society of Birla Institute of technology webpage.
  //     </p> */}
  //     <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
  //   </div>
  // );
  return (
    <div className="flex w-full  justify-center items-center py-8 ">
      <div className="flex flex-row gap-4  p-2 rounded-md">
        <Image src={bitmesraLogo} alt="BIT Logo" width={120} height={120} />
        <Image src={psocWhite} alt="PSOC Logo" width={120} height={120} />
      </div>
    </div>
  );
}
