import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Styles
import 'swiper/css';
import './Partners.scss';

export const Partners = () => {
  const partners = [
    'Zapier',
    'Spotify',
    'Zoom',
    'Amazon',
    'Adobe',
    'Notion',
    'Netflix'
  ];
  const loopPartners = [...partners, ...partners];

  return (
    <Swiper
      className="Partners"
      modules={[ Autoplay ]}
      slidesPerView={3}
      loop
      speed={5000}
      freeMode
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        576: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 6.999
        }
      }}
    >
      {loopPartners.map((partner, i) => (
        <SwiperSlide key={partner + i} className="Partners__Partner">
          <div className={`Partners__Icon Partners__Icon--${partner}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
