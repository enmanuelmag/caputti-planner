import Autoplay from 'embla-carousel-autoplay';
import { MantineProvider } from '@mantine/core';
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
  const autoplay = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <CarouselLib
      loop
      height={400}
      controlSize={29}
      withControls={true}
      plugins={[autoplay.current]}
      slideGap="md"
      slideSize="70%"
      controlsOffset="xs"
    >
      {items.map((item, index) => (
        <CarouselLib.Slide
          key={`${item.slug}-${index}`}
          className="rounded-md shadow-lg mx-[1rem] p-[2rem]"
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.image.src} alt={item.title} />
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
