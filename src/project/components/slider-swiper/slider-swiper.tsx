import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, Pagination } from 'swiper/modules';

import { TPromo } from '../../types/product.types';
import { Banner } from '../banner/banner';

type BannerProps = {
  promo: TPromo[];
}

function SliderSwiper({ promo }: BannerProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
    >
      <>
        {promo.map((camera) => (
          <SwiperSlide key={camera.id}>
            <Banner camera={camera} />
          </SwiperSlide>

        ))}
      </>
    </Swiper>


  );
}

export { SliderSwiper };
