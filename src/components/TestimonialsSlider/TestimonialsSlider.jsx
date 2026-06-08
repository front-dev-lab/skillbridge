import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import data from '../../data/data.json';

// Styles
import 'swiper/css';
import 'swiper/css/navigation';
import './TestimonialsSlider.scss';

// Components
import { TestimonialCard } from '../TestimonialCard';

export const TestimonialsSlider = ({ className }) => {
  const { testimonials } = data;

  return (
    <section className={className + ' TestimonialsSlider'}>
      <article className="TestimonialsSlider__Text">
        <h2 className="TestimonialsSlider__Title">
          Students Testimonials
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </p>
      </article>

      <Swiper
        className="TestimonialsSlider__Slider"
        modules={[Navigation]}
        slidesPerView={1}
        loop
        allowTouchMove={false}
        navigation={{
          prevEl: '.TestimonialsSlider__Button--Prev',
          nextEl: '.TestimonialsSlider__Button--Next',
        }}
      >
        {testimonials.map(({
          id,
          name,
          imageUrl,
          feedback,
        }) => (
          <SwiperSlide key={id}>
            <TestimonialCard
              name={name}
              imageUrl={imageUrl}
              feedback={feedback}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="TestimonialsSlider__Buttons">
        <button
          type="button"
          className="TestimonialsSlider__Button TestimonialsSlider__Button--Prev"
        />

        <button
          type="button"
          className="TestimonialsSlider__Button TestimonialsSlider__Button--Next"
        />
      </div>
    </section>
  );
};
