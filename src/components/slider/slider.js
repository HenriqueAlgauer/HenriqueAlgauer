'use client'
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import css from '../../images/css-icon.png'
import git from '../../images/git-icon.svg'
import tailwind from '../../images/tailwind-icon.png'
import typeScript from '../../images/typescript-icon.png'
import js from '../../images/script-java.png'
import reactIcon from '../../images/react-logo.png'
import htmlIcon from '../../images/html-icon.svg'

const animation = { duration: 28000, easing: (t) => t };

const Slide = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    vertical: true,
    drag: false,
    slides: {
      perView: 2
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    }
  });
  return (
    <div ref={sliderRef} className="keen-slider bg-green-300 " style={{ height: 300 }}>
      <div className="keen-slider__slide number-slide1 flex">
        <Image src={reactIcon} height={100} width={100} alt="react-icon"/>
      </div>
      <div className="keen-slider__slide number-slide2">
        2
        <Image src={css} height={100} width={100} alt="css-icon"/>
      </div>
      <div className="keen-slider__slide number-slide3">
        3
      </div>
      <div className="keen-slider__slide number-slide4">
        4
      </div>
      <div className="keen-slider__slide number-slide5">
        5
      </div>
      <div className="keen-slider__slide number-slide6">
        6
      </div>
    </div>
  );
};

export { Slide }
