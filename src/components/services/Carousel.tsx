import React from 'react';
import '@mantine/carousel/styles.css';

import { Carousel as CarouselMantine } from '@mantine/carousel';

type Items = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

type CarouselProps = {
  items: Items[];
};

const Carousel = ({ items }: CarouselProps) => {
  return (
    <CarouselMantine withIndicators height={200}>
      {items.map((item) => (
        <CarouselMantine.Slide key={item.slug} className="shadow-sm rounded-md">
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </CarouselMantine.Slide>
      ))}
    </CarouselMantine>
  );
};

export default Carousel;
