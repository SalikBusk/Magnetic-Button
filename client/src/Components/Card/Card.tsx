import React from "react";
import { Link } from "react-router-dom";
import { FramerMagnetic } from "../Magnetic/FramerMagnetic";

interface CardProps {
  image?: string;
  title: string;
  price: string;
  id: number;
}

interface CardHeadingProps {
  title: string;
  price: string;
}

const CardHeading: React.FC<CardHeadingProps> = ({ title, price }) => {
  return (
    <div>
      <div className="text-3xl">
        {title.length > 18 ? title.slice(0, 18) + "..." : title}
      </div>
      <div className="mt-2">{price}</div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ image, title, price, id }) => {
  return (
    <figure className="px-2 py-4 bg-white rounded-[20px] group relative flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center group">
        <img className="object-contain w-full h-[48vh]" src={image} alt="" />
      </div>
      {/* Button that follows the mouse then hovring */}
      <div className="absolute hidden group-hover:block">
        <FramerMagnetic>
          <Link
            className="px-[20px] py-[10px] bg-dark text-primary rounded-full"
            to={`/product/${id}`}
          >
            View
          </Link>
        </FramerMagnetic>
      </div>
      <figcaption className="mt-5">
        <CardHeading title={title} price={price} />
      </figcaption>
    </figure>
  );
};

export default Card;
