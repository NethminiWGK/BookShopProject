'use client';

import Image from "next/image"; 
import Link from "next/link";
import CustomButton from "./CustomButton";

import {motion} from "framer-motion";

const orderData = [
    {
        image:'/assets/img/orders/p1.jpg',
        name:'',
        price:' Rs.450'

    },
    {
        image:'/assets/img/orders/p2.jpg',
        name: '',
        price:'Rs.500'
        
    },
    {
        image:'/assets/img/orders/p3.jpg',
        name: '',
        price:"Rs.375"
        
    },
    {
        image:'/assets/img/orders/p4.jpg',
        name: "",
        price:"Rs.620"
        
    },
    {
        image:'/assets/img/orders/p5.jpg',
        name: "Rs.525",
        price:""
        
    },
    {
        image:'/assets/img/orders/p6.jpg',
        name: "",
        price:"Rs.400"
        
    },
    {
        image:'/assets/img/orders/p7.jpg',
        name: "",
        price:"Rs.750"
        
    },
    {
        image:'/assets/img/orders/p8.jpg',
        name: "",
        price:"Rs.280"
        
    },
    {
        image:'/assets/img/orders/p9.jpg',
        name: "",
        price:"Rs.1025"
    
    },
    {
        image:'/assets/img/orders/p10.png',
        name: "",
        price:"Rs.200"
        
    },
]
const Order = () => {
   
    return (
    <section className='bg-primary-300 py-12 xl:h-[110vh]' id="Order"> 
    <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12 mb-12">
        {orderData.map((order, index) => {
            return(
                <div className = 'flex flex-col items-center text-center 'key={index}>
                    <div className="relative w-[220px] h-[200px] mx-auto mb-4">
                        <Image src={order.image} fill alt=''/>
                        </div>
                        <h4 className="h4 mb-2">{order.name}</h4>
                        <h4 className="h4 mb-2">{order.price}</h4>
                         {/*button */}
                        <div>
                            <CustomButton 
                                containerStyles="w-[100px] h-[50px]"
                                text="Buy"/>
                        </div>

                    
                
                        </div>
            );
        })}
        
       
        </div>

          {/*button */}
     <div>
        <CustomButton 
            containerStyles="w-[196px] h-[30px]"
            text="See More"/>
     </div>
    
    </div>
    
    </section>
    );
    
};

export default Order;