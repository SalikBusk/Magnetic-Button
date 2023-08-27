import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blur, translate } from '../Anim/Anim';

interface LinkData {
    title: string;
    href: string;
}

interface SelectedLink {
    isActive: boolean;
    index: number;
}

interface BodyProps {
    links: LinkData[];
    selectedLink: SelectedLink;
    setSelectedLink: React.Dispatch<React.SetStateAction<SelectedLink>>;
}

const Body: React.FC<BodyProps> = ({ links, selectedLink, setSelectedLink }) => {

    const getChars = (word: string) => {
        const chars = word.split("").map((char, i) => (
            <motion.span
                custom={[i * 0.02, (word.length - i) * 0.01]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
                key={char + i}
            >
                {char}
            </motion.span>
        ));
        return chars;
    };

    return (
        <div className="max-w-[1200px] mt-[80px] flex flex-wrap">
            {links.map((link, index) => {
                const { title, href } = link;
                return (
                    <Link key={`l_${index}`} to={href} className="text-dark dark:text-primary uppercase">
                        <motion.p
                            className="text-[5vw] pr-[2vw] m-0 flex overflow-hidden pt-[10px] font-[300]"
                            onMouseOver={() => { setSelectedLink({ isActive: true, index }); }}
                            onMouseLeave={() => { setSelectedLink({ isActive: false, index }); }}
                            variants={blur}
                            animate={selectedLink.isActive && selectedLink.index !== index ? "open" : "closed"}
                            style={{
                                cursor: selectedLink.isActive && selectedLink.index === index ? 'pointer' : 'default'
                            }}
                        >
                            {getChars(title)}
                        </motion.p>
                    </Link>
                );
            })}
        </div>
    );
};

export default Body;
