import React from 'react'
import { translate } from '../Anim/Anim';
import { motion } from 'framer-motion';

interface MenuItemsProps {
    label: string,
}

const MenuItems: React.FC<MenuItemsProps> = ({label}) => {
    return(
        <ul className={`mt-[10px] overflow-hidden p-0`}> 
                <motion.li 
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span className='text-dark dark:text-primary'>{label}</span>
                </motion.li>
            </ul>
    )
}

export default function Footer() {
    return (
        <div className={`w-[100%] flex justify-between text-[12px] mt-[50px]`}>
            <MenuItems label='Made by: Salik Busk'/>
            <MenuItems label='Typography: Google Fonts'/>
            <MenuItems label='Images: Greenland Cruises'/>
            <MenuItems label='Privacy Policy'/>
            <MenuItems label='Terms & Conditions'/>
        </div>
    )
}
