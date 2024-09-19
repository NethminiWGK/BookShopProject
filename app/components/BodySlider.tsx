'use client';

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

//custom button component
import CustomButton from './CustomButton';

const BodySlider = () => {
    return(
        <Swiper>
            <SwiperSlide className='h-full flex justify-end pt-48'>
                <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
                    <h3 className='h1 text-center lg:text-left mb-2'>
                        <span>Reading </span>meets success
                        </h3>
                       <p className='text-white italic text-center lg:text-left mb-4'>
                       Entertainment is as much of a perk of reading as all those positive psychological and scientific benefits.
                        </p> 
                        <CustomButton text='Get Started' containerStyles='w-[196px] h-[62px]'/>
                </div>
            </SwiperSlide>
            
            </Swiper>
    );
};

export default BodySlider;




