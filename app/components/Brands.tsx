'use client';


import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";


const brandImages = [
    {
      src:'/assets/img/brands/b1.jpg' , 
      href:''
    },
    {
        src:'/assets/img/brands/b2.png' , 
        href:''
    },
    {
        src:'/assets/img/brands/b3.jpg' , 
        href:''
    },
];

//variants
const brandContainerVariant = {
  hidden:{
    y:20,
    opacity:0
  },
    

  show:{
    opacity: 1,
    transition:{
      staggerChildren: 0.4,
      duration: 0.5,
      ease:'linear',
    },
  },
};
const brandItem = {
  hidden:{
    y:20,
    opacity:0
  },
    
  
  show:{
    opacity: 1,
    transition:{
  
      duration: 0.5,
      ease:[0.25,0.6,0.3,0.8],
    },
  },
};

const Brands = () => {
   
    return(
         <section className=' py-7' id="Contact">
            <div className="container mx-auto">
                <motion.div
                variants={brandContainerVariant}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.3}}
                className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-16">

                    {brandImages.map((img,index) =>{
                      return(
                        <motion.div
                        variants={brandItem}
                        key={index}>
                          <Link className='group' href={img.href}>
                          <Image className='opacity-50 group-hover:opacity-100 tansition-all mx-auto 'src={img.src} width={204} height={106} alt=''/>
                          </Link>
                          </motion.div>

                      );

                    })}
                    </motion.div>
                </div>

          

      
        </section>
    );
};


export default Brands;