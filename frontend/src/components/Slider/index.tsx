import { Photo, StrapiEntity } from '@/app/types/Strapi';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { ReactNode } from 'react';

 interface SliderPros{
  images: StrapiEntity<Photo>[];
 }

export function Slider(images:SliderPros ) {
  return (
    <>
   <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-5 bg-gradient-to-r from-rose-400 to-red-500 p-2 rounded-md">
      <Carousel>
        { images.images.map((image)=><Image className='h-full w-fit rounded-md border-pink-500 border-y-4' key={image.id} width={500} height={500}  src={image.attributes.url ? `${process.env.STRAPI_API_HOST}${image.attributes.url}`
              : "/logo.png"} alt="" /> )}
   
      </Carousel>
    </div>
    </>
  );
}
