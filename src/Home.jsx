import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { Events } from "react-scroll";

export default function Home() {
  useEffect(() => {
    Events.scrollEvent.register("begin");
    Events.scrollEvent.register("end");

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  });

  return (
    <div>
      <Element name='Home' className='home'>
        <div className='hero'>
          <header>
            <h1>Home</h1>
          </header>
          <div className='hero__title'>My Weather app</div>
          <div className='hero__title dif'>My Weather app</div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
      </Element>
    </div>
  );
}
