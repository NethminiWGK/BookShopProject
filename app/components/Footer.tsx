'use client'

import Image from "next/image";
import Link from "next/link";

import {
    // FaMapMarketAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaMapMarkerAlt,
} from 'react-icons/fa';

import CustomButton from "./CustomButton";
import {motion} from "framer-motion";

const Footer = () => {
    return (
        <footer className= 'bg-primary-300 pt-24' >
            <div className="container mx-auto pb-24">
            <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
               <div className="flex flex-col gap-4">
               <Link href='#'>
               <Image
                    src={'/assets/img/logo.png'}
                    width={117}
                    height={55}
                    alt=''
               />
               <p className="max-w-sm">Entertainment is as much of a perk of reading as all those positive psychological and scientific benefits.</p>
               </Link>
               <ul>
                <li className="flex items-center gap-4">
                     <FaMapMarkerAlt className="text-xl text-accent"/>
                    <span>New Town,Embilipitiya</span>
                </li>
                <li className="flex items-center gap-4">
                     <FaPhoneAlt className="text-xl text-accent"/>
                    <span>(+74)71 546 4567</span>
                </li>
                <li>
                    <Link className="flex items-center gap-4" href="#">
                     <FaEnvelope className="text-xl text-accent"/>
                    <span>alrajaf@gmail.com</span>
                    </Link>
                </li>
                </ul>
               
               
               </div> 

               <div>
                <h4 className="h4 text-accent mb-4">Our Services</h4>
                <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
                    <Link className="hover:text-accent transition-all " href="#">
                    <h5 className="h5 leading-snug">
                        Friendly customer services
                    </h5>
                    </Link>
                </div>

                <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
                    <Link className="hover:text-accent transition-all " href="#">
                    <h5 className="h5 leading-snug">
                        Special discounts
                    </h5>
                    </Link>
                </div>

                <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
                    <Link className="hover:text-accent transition-all " href="#">
                    <h5 className="h5 leading-snug">
                        Available online orders
                    </h5>
                    </Link>
                </div>

                </div> 

              <div>
                <h4 className="h4 text-accent mb-4">Gallery</h4>
               <div className="flex flex-wrap gap-2">
                <Link href='#'>
                <Image
                    src={'/assets/img/new/n1.jpg'}
                    width={100}
                    height={100}
                    alt=''
                    />
                </Link>
                <Link href='#'>
                <Image
                    src={'/assets/img/new/n2.jpg'}
                    width={100}
                    height={100}
                    alt=''
                    />
                </Link>
                <Link href='#'>
                <Image
                    src={'/assets/img/new/n3.jpg'}
                    width={100}
                    height={100}
                    alt=''
                    />
                </Link>
                <Link href='#'>
                <Image
                    src={'/assets/img/new/n4.jpg'}
                    width={100}
                    height={100}
                    alt=''
                    />
                </Link>
                <Link href='#'>
                <Image
                    src={'/assets/img/new/n1.jpg'}
                    width={100}
                    height={100}
                    alt=''
                    />
                </Link>
                <Link href='#'>
                <Image
                    src={'/assets/img/new/n1.jpg'}
                    width={100}
                    height={100}
                    alt=''
                    />
                </Link>
                <Link href='#'>
                <Image
                    src={'/assets/img/new/n1.jpg'}
                    width={100}
                    height={100}
                    alt=''
                    />
                </Link>
                
                </div>
                </div> 
               <div>
                <h4 className="h4 text-accent mb-4">New Updates</h4>
                <div className="flex flex-col gap-4">
                    <p>
                        Give updates about special offers and new arrivels through email
                    </p>
                    <form>
                        <input 
                            type='text' 
                            placeholder="Your email address" 
                            className="h-[50px] outline-none px-4 text-primary-300"
                            />
                        <CustomButton containerStyles="h-[50px] px-8 "  text="send"/>   
                    </form>
                </div>
                
              </div>

            </div>
            
            
            
            
            
            </div>
            
            
            </footer>
    );
};

export default Footer;