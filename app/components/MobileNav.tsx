'use client';
import { useMediaQuery } from 'react-responsive';
import {Link as ScrollLink} from 'react-scroll';

const links = [
    {name: 'Home', target: 'Home', offset: -100},
    {name: 'About', target: 'About', offset: -80},
    {name: 'Branches', target: 'Branches', offset: -80},
    {name: 'Categories', target: 'Categories', offset: -40},
    // {name: 'Authors', target: 'Authors', offset: 0},
    {name: 'New Arrivels', target: 'New Arrivels', offset: 0},
    {name: 'Order', target: 'Order', offset: 0},
    {name: 'Contact', target: 'Contact', offset: -100},
];



const MobileNav = ({ containerStyles}: { containerStyles: string}) => {
    const isMobile = useMediaQuery({
        query: '(max-width:640px)',
    });
   
    return( 
    <nav className= {`${containerStyles}`}>
       {links.map((link, index) => {
            return(
                <ScrollLink
                offset={link.offset}
                to={link.target}
                smooth
                spy
                activeClass={`${!isMobile && 'active'}`}
                className='cursor-pointer hover:text-accent tranisition-all'
                key={index}
                >
                    {link.name}
                </ScrollLink>
            );
        })}
        
        
        
        </nav>

    );

   
       
};

export default MobileNav;