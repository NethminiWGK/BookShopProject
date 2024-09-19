'use client';

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';
import SwiperNavButtons from './SwiperNavButtons';
import {motion} from 'framer-motion';
import {fadeIn} from "../../lib/variants";

const bookData=
[
    {
        image:'/assets/img/new/n1.jpg',
        name:'Kokila',
        href:'',

    },
    {
        image:'/assets/img/new/n2.jpg',
        name: 'Sanchala',
        href:'',
        
    },
    {
        image:'/assets/img/new/n3.jpg',
        name: 'Nethmini',
        href:'',
        
    },
    {
        image:'/assets/img/new/n4.jpg',
        name: 'Widumini',
        href:'',
        
    },
    {
        image:'/assets/img/new/n1.jpg',
        name:'Methsara',
        href:'',
    
    },
    {
        image:'/assets/img/new/n2.jpg',
        name: 'Nanda',
        href:'',
        
    },
    {
        image:'/assets/img/new/n3.jpg',
        name: 'Rajapaksha',
        href:'',
        
    },
    {
        image:'/assets/img/new/n4.jpg',
        name: 'Nisal',
        href:'',
        
    },
];


const NewArrivels = () => {
   
    return (
    <section className=' text-primary py-24  ' id="New Arrivels"> 
    <div className="container mx-auto">
        <h2 className='h2 text-center mb-8'>New Arrivels</h2>
        <div>
            <Swiper slidesPerView={1} spaceBetween={30} breakpoints={{
                768:{
                    slidesPerView:2,
                    spaceBetween: 15,
                },
                1024:{
                    slidesPerView: 3,
                },
                1400:{
                    slidesPerView: 4,
                },
            }}
            className='h-[420px] md:max-w-[660px] lg:max-w-none mb-8'
            >
            {bookData.map((books, index) => {
                return(
                <SwiperSlide key={index}>
                    <div>
                        <Image 
                            src={books.image} 
                            width={320} 
                            height={266}  
                            alt=''
                            className='mb-6'
                            />

                        <div >
                            <Link href={books.href}>
                            {/* <h5 >{books.name}</h5> */}
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            );
        })}

            <SwiperNavButtons containerStyles='absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px]
            sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-l'
            btnStyles='bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent
            transition-all duration-300'
            iconStyles='text-2xl'/>

            </Swiper>
        </div>
     </div>
    </section>

    );
};

export default NewArrivels;