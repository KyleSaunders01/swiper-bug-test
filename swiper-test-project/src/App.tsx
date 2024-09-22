import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const App: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
        Hello
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="bg-blue-500 text-white text-center p-4">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 text-white text-center p-4">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-500 text-white text-center p-4">Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
