import React from "react";
import { Link } from "react-router-dom";

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
      <div
        className="w-full h-[48vh] object-contain relative flex items-center justify-center"
      >
        {image ? (
          <img className="w-full h-full" src={image} alt="" />
        ) : (
          <div className="w-full h-full bg-dark dark:bg-primary"/>
        )}
        <Link
          to={`/product/${id}`}
          className="absolute bg-black text-white px-[20px] py-[10px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          View
        </Link>
      </div>
      <figcaption className="mt-5">
        <CardHeading title={title} price={price} />
      </figcaption>
    </figure>
  );
};

export default Card;
