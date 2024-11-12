import Autoplay from 'embla-carousel-autoplay';
import { Card, MantineProvider } from '@mantine/core';
import { Carousel as CarouselLib } from '@mantine/carousel';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import './index.scss';
import React from 'react';

type Items = {
  title: string;
  description: string;
  image: {
    width: number;
    src: string;
    height: number;
    format: any;
  };
  slug: string;
};

type CarouselProps = {
  items: Items[];
};

const Wrapper = (props: CarouselProps) => (
  <MantineProvider>
    <Carousel {...props} />
  </MantineProvider>
);

const Carousel = ({ items }: CarouselProps) => {
  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <CarouselLib
      loop
      align="center"
      withIndicators
      controlSize={29}
      withControls={false}
      plugins={[autoplay.current]}
      slideSize={{ base: '90%', sm: '50%', md: '33%' }}
      slideGap={{ base: 0, sm: 'md' }}
    >
      {items.map((item, index) => (
        <CarouselLib.Slide
          key={`${item.slug}-${index}`}
          className="mx-[0.125rem] lg:mx-[1rem]"
        >
          <Card
            className="cursor-pointer"
            component="a"
            radius="md"
            shadow="lg"
            padding="md"
            withBorder
            href={`/services#${item.slug}`}
          >
            <Card.Section className="mb-[1rem]">
              <img
                src={item.image.src}
                alt={item.title}
                style={{
                  viewTransitionName: `img-${item.slug}`,
                }}
              />
            </Card.Section>
            <h2 className="prose prose-xl text-center">{item.title}</h2>
            <p className="prose prose-base text-center">{item.description}</p>
          </Card>
        </CarouselLib.Slide>
      ))}
    </CarouselLib>
  );
};

export default Wrapper;

// const Carousel = ({ items }: CarouselProps) => {
//   const isMediaLg = window.matchMedia('(min-width: 1024px)').matches;

//   return (
//     <CarouselLib
//       width={isMediaLg ? '75%' : '95%'}
//       autoPlay
//       centerMode
//       infiniteLoop
//       emulateTouch
//       showArrows={false}
//       showStatus={false}
//       showThumbs={false}
//       showIndicators={false}
//       transitionTime={1000}
//       centerSlidePercentage={25}
//     >
//       {items.map((item, index) => (
//         <article
//           key={`${item.slug}-${index}`}
//           className="rounded-md shadow-md mx-[1rem]"
//         >
//           <h2>{item.title}</h2>
//           <p>{item.description}</p>
//           <img src={item.image.src} alt={item.title} />
//         </article>
//       ))}
//     </CarouselLib>
//   );
// };

// export default Carousel;
