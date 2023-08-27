import React, { useState } from "react";
import { motion } from "framer-motion";


import { height } from "../Anim/Anim";

// Components
import Body from "./Body";
import Footer from "./Footer";
import Image from "../Image";
import Container from "../Container";

// images
import imageIndex from "../../Assets/index";

interface LinkItem {
  title: string;
  href: string;
  src: string;
  noPicture: string;
}

const links: LinkItem[] = [
  {
    title: "_Index",
    href: "/",
    src: imageIndex.home,
    noPicture: "Home",
  },
  {
    title: "img",
    href: "/gallery",
    src: imageIndex.gallary,
    noPicture: "Gallery",
  },
  {
    title: "About Us",
    href: "/about",
    src: imageIndex.about,
    noPicture: "About US",
  },
  {
    title: "JavaScript",
    href: "/Work",
    src: imageIndex.tours,
    noPicture: "Work",
  },
  {
    title: "Contact,",
    href: "/contact",
    src: imageIndex.contact,
    noPicture: "Contact",
  },
];


const Nav = () => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="hidden"
    >
      <Container>
        <div className="flex flex-row gap-[50px] justify-between mt-[20px]">
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          {links[selectedLink.index].src ? (
            <Image
              src={links[selectedLink.index].src}
              isActive={selectedLink.isActive}
            />
          ) : (
            <div></div>
          )}
        </div>
        <footer>
          <Footer />
        </footer>
      </Container>
    </motion.div>
  );
};

export default Nav;
