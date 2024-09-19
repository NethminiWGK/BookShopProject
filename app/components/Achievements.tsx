"use client";

import CountUp from "react-countup";
import { FaHome,FaClock,FaReact } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

import {motion, useInView} from 'framer-motion';
import { useRef } from "react";

const stats = [

    {
        number: 19,
        icon: FaHome,
        text: 'branches'
    },

   
    {
        number: 879,
        icon: FaClock,
        text: 'working hours'
    },

    {
        number: 150,
        icon: ImUsers,
        text: 'happy customers'
    },
    
    {
        number: 999,
        icon: FaReact,
        text: 'reviews'
    },

];

const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return(
         <section>
            <div className="container mx-auto" >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {stats.map((item , index) => {
                return(
                <div className="flex flex-col justify-center items-center" key={index}>

                    {/* circle outer */}
                    <div className='border border-accent/90 w-[100px] h-[100px] mx-auto
                    rounded-full p-1 mb-6'>
                    {/*  circle inner & counter numbers */}
                      <div
                      ref={ref} 
                      className='border border-accent/30 w-full h-full flex items-center
                      justify-center text-5xl rounded-full'>

                      {/* render the CountUp animation only the component is in view (isInView is true) */}
                       
                        {
                        isInView &&(
                        <CountUp start={0} end={item.number} duration={6}/>
                        ) }
                 </div>
                 </div>
                 
                 {/* text */}
                 <div className="flex flex-col justify-center items-center text-center">
                    <item.icon className="text-3xl mb-2"/>
                    <h4 className="h4">{item.text}</h4>
                 </div>
                 </div>
                );
            })}
           </div>

            </div>
        </section>
    );
};
export default Achievements;