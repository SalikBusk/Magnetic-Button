import React from 'react';
import Card from '../Components/Card/Card';
import Container from '../Components/Container';
import { useFetch } from '../Hooks/useFetch';

interface Product {
  id: number;
  title: string;
  price: string,
  image: string;
  category: string,
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
    <body className='bg-primary dark:bg-dark'>
      <Container>
        <section className='grid grid-cols-4 gap-5 pt-[150px]'>
          {apiData.map((item: Product) => (
          <Card id={item.id} key={item.id} image={item.image} title={item.title} price={item.price} />
        ))}
        </section>
      </Container>
    </body>
  );
};

export default Index;
