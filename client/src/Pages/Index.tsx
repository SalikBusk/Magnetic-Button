import React from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card/Card";
import Container from "../Components/Container";
import { FramerMagnetic } from "../Components/Magnetic/FramerMagnetic";
import Magnetic from "../Components/Magnetic/GsapMagnetic";
import { useFetch } from "../Hooks/useFetch";

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  category: string;
}

const Index = () => {
  const url = "https://fakestoreapi.com/products";
  const { loading, error, apiData } = useFetch(url); // Provide the type here

  if (error) {
    return <div>error</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <body className="bg-primary dark:bg-dark">
      <Container>
        <header className="w-full h-screen flex flex-col gap-[50px] justify-center items-center">
          <section>
            <FramerMagnetic>
              <Link
                to={`/`}
                className="px-[20px] py-[10px] bg-dark text-primary rounded-full"
              >
                Frmaer motion
              </Link>
            </FramerMagnetic>
          </section>
          <section>
            <Magnetic>
              <Link
                to={`/`}
                className="px-[20px] py-[10px] bg-dark text-primary rounded-full"
              >
                Gsap
              </Link>
            </Magnetic>
          </section>
        </header>
        <section className="grid grid-cols-3 gap-5 pt-[150px]">
          {apiData.map((item: Product) => (
            <Card
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </section>
      </Container>
    </body>
  );
};

export default Index;
