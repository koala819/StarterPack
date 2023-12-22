// import { Image } from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@/src/components/atoms/Buton";

export function Card() {
  <div className='flex space-x-30 overflow-hidden rounded-lg shadow-lg'>
    <div className='flex-1'>
      <picture className='relative w-full aspect-[16/9] min-h-full'>
        <Image
          src=''
          alt=''
          className='object-cover w-full h-full'
          fill={true}
        />
      </picture>
    </div>
    {/* card_content */}
    <div className='flex flex-col justify-center pl-30'>
      {/* card_label */}
      <div className='h6 mb-10 text-[#ff9300]'>Product Reviews</div>
      {/* card_title */}
      <div className='h3 mb-20'>The Best Product Reviews</div>
      {/* card_summary */}
      <p className='text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Button href='#'>Read More</Button>
    </div>
  </div>;
}
