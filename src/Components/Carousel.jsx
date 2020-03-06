import React, { useState } from "react";
import { Bling as GPT } from "react-gpt";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

GPT.enableSingleRequest();

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MyCarousel = () => {
  const [adUnitPaths, changeAdUnitPaths] = useState([
    "/21702373716/DEV_TEB",
    "/21702373716/DEV_TEB",
    "/21702373716/DEV_TEB",
    "/21702373716/DEV_TEB",
    "/21702373716/DEV_TEB",
    "/21702373716/DEV_TEB",
    "/21702373716/DEV_TEB",
    "/21702373716/DEV_TEB",
    "/21702373716/DEV_TEB",
    "/21702373716/DEV_TEB",
  ]);

    const generateAdUnits = adUnitPaths.map((adUnitPath, index) => (
        <GPT
            key={index}
            adUnitPath={adUnitPath}
            slotSize={[160, 80]}
            renderWhenViewable={false}
        />
    ));


  return (
    <React.Fragment>
        <div style={{width:"50%"}}>
            <Carousel responsive={responsive}
            arrows
            >
                {
                    generateAdUnits
                }
            </Carousel>
        </div>
    </React.Fragment>
  );
};

setTimeout(() => {
    GPT.refresh();
}, 5000);

export default MyCarousel;
