import React from 'react'
import Gallery1 from '../Assets/home/gallery1.png';
import Gallery2 from '../Assets/home/gallery2.png';
import Gallery3 from '../Assets/home/gallery3.png';
import Gallery4 from '../Assets/home/gallery4.png';
import Gallery5 from '../Assets/home/gallery5.png';
import Gallery6 from '../Assets/home/gallery6.png';

export const Gallerysection = () => {
    let Galleryarr=[{image:Gallery1}, {image:Gallery2}, {image:Gallery3}, {image:Gallery4},
      {image:Gallery5}, {image:Gallery6}]

  return (
    <div className='w-full flex flex-col justify-center items-center gap-[40px] py-[40px] pb-[70px] px-[40px]'>
    <p className='text-[26px] text-[#087620] font-[500]'>GALLERY</p>
    <div className='grid [@media(min-width:890px)]:grid-cols-3 [@media(min-width:670px)]:grid-cols-2 gap-[50px]'>
       
            {Galleryarr.map((value, id) => (
                <div key={id} className="w-full  ">
                    <img 
                        src={value.image} 
                        className="w-[230px] h-[230px] rounded-[10px] shadow-[0_3px_10px_#000000] hover:scale-105"
                    />
                    
                </div>
            ))}
    </div>
   
</div>


  )
}
