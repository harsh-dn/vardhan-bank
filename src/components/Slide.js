import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { css, jsx } from "@emotion/react";
import bank1 from "./images/Bank1.jpg";
import bank2 from "./images/Bank4.png";
import bank3 from "./images/Bank5.png";


const items = [
  {
    src: 'https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/863d9626-79b3-4141-8d87-5a1bfb8f0f92/Personal/Home/content/Hero%20Banners/July-2021/First2.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/c60ba845-63fe-4c7a-9e29-32acfd1fd833/Personal/Home/content/Hero%20Banners/July-2021/Tokenization-716x300.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: 'https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/ce3770a6-f6bf-436f-97d8-68cfd4548823/Personal/Home/content/Hero%20Banners/July-2021/PL2.jpg',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/d845a55e-f6dd-4357-8182-cbfd36f09ed3/Personal/Home/content/Hero%20Banners/July-2021/TWL2.jpg',
    altText: 'Slide 6',
    caption: 'Slide 6'
  },
  {
    src: 'https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/feb03502-acc3-4cdc-8a4c-87ba74302b42/Personal/Home/content/Hero%20Banners/July-2021/LOC2.jpg',
    altText: 'Slide 7',
    caption: 'Slide 7'
  }
];

const Slide = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div class="d-flex justify-content-center">
          <img style={{ width: "50%", margin: 'auto' }} src={item.src} alt={item.altText} />
        </div>
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}


export default Slide;
