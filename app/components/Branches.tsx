'use client';

import Image from "next/image";
import {motion} from 'framer-motion';
import {fadeIn} from "../../lib/variants";
import CustomButton from "./CustomButton";

const branches = [
    {   
        district: 'Rathnapura',
        city: 'Embilipitiya',


    },
    {   
        district: 'Mathara',
        city: 'Dikwella',


    },
    {   
        district: 'Colombo',
        city: 'Kottawa',


    },
    {   
        district: 'Kandy',
        city: 'Peradeniya',

    },
    {   
        district: 'Kandy',
        city: 'Peradeniya',

    },
    {   
        district: 'Kandy',
        city: 'Peradeniya',

    },
    {   
        district: 'Kandy',
        city: 'Peradeniya',

    },
    {   
        district: 'Kandy',
        city: 'Peradeniya',

    },
    {   
        district: 'Kandy',
        city: 'Peradeniya',

    },
];

const Branches = () => {
   
    return (
     <section id="Branches"> 
     <div>
            <h2 className='h2 text-center'>
                  Our Branches
            </h2>
            
        </div>
     <div className= 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'>
     
        {branches.map((item, index) => {
            return(
             <div className='flex flex-col justify-center items-center gap-4 border bg-black/50
             p-10'
             key={index} >
                 <div className='flex flex-col justify-center items-center gap-2 text-center'>
                        <h3 className='h4 text-accent '>{item.district}</h3>
                        <h4 className='h4 text-accent '>{item.city}</h4>
                        </div>
                </div>
            );

        })}




     </div>
   
    </section>
    );
};

export default Branches;