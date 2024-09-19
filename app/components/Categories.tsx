'use client';

import Image from "next/image"; 
import Link from "next/link";
import CustomButton from "./CustomButton";

import {motion} from "framer-motion";

const categoryData = [
    {
        image:'/assets/img/categories/Romance.jpg',
        name:'Romance',
        description:' The plot involves a love story where a couple comes together against all odds.'

    },
    {
        image:'/assets/img/categories/historical.jpg',
        name: 'Historical Fiction',
        description:'This genre is a fictional plot that takes place in a real historical era.'
        
    },
    {
        image:'/assets/img/categories/Thriller.jpg',
        name: 'Thriller',
         description:"A thriller is a type of mystery with the focus being on the main character's plight."
        
    },
    {
        image:'/assets/img/categories/children.jpg',
        name: "Children's Literature",
        description:"Any book that is geared to young children, other than picture books."
        
    },
]
const Categories = () => {
   
    return (
    <section className='bg-primary-300 py-12 xl:h-[110vh]' id="Categories"> 
    <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="h2 text-center text-white mb-6"> Book Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-white gap-12 mb-12">
        {categoryData.map((category, index) => {
            return(
                <div className = 'flex flex-col items-center text-center 'key={index}>
                    <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                        <Image src={category.image} fill alt=''/>
                        </div>
                        <h4 className="h4 mb-2">{category.name}</h4>
                        <p className="mb-6 max-w-[320px] mx-auto">{category.description}</p>
                        </div>
            );
        })}
        
       
        </div>
     {/*button */}
     <div>
        <CustomButton 
            containerStyles="w-[196px] h-[62px]"
            text="See All Categories"/>
     </div>

    </div>
    
    </section>
    );
    
};

export default Categories;