// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import LazyImage from '@/app/components/lazy-loading/lazy-image';
import Link from 'next/link';
import 'swiper/css';
export default function Featured() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      // navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ pauseOnMouseEnter: true }}
      breakpoints={{
        280: {
          width: 280,
          slidesPerView: 1,
        },
        576: {
          width: 576,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 4,
        },
        992: {
          width: 992,
          slidesPerView: 4,
        },
        1200: {
          width: 1200,
          slidesPerView: 5,
        },
        1400: {
          width: 1400,
          slidesPerView: 5,
        },
      }}
    >

      <SwiperSlide>
        <div className='product-wrapper'>
          <Link href='/featured-product'>
            <div className='product'>
              <div className='image relative h-[250px]'>
                <LazyImage src='/uploads/images/products/ER001-RG.jpg' alt='image' width={250} height={250} />
              </div>
              <div className='name text-accent text-base font-roboto text-center'>Rose Gold Earrings</div>
              <div className='price text-accent font-roboto text-base  text-center'>45700</div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='product-wrapper'>
          <Link href='/featured-product'>
            <div className='product'>
              <div className='image relative h-[250px]'>
                <LazyImage src='/uploads/images/products/ER001-YG.jpg' alt='image' width={250} height={250} />
              </div>
              <div className='name text-accent font-roboto  text-base text-center'>Rose Gold Earrings</div>
              <div className='price text-accent font-roboto  text-base text-center'>45700</div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='product-wrapper'>
          <Link href='/featured-product'>
            <div className='product'>
              <div className='image relative h-[250px]'>
                <LazyImage src='/uploads/images/products/ER001-WG.jpg' alt='image' width={250} height={250} />
              </div>
              <div className='text-accent font-roboto text-center text-base  name'>Rose Gold Earrings</div>
              <div className='text-accent font-roboto text-center  text-base price'>45700</div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='product-wrapper'>
          <Link href='/featured-product'>
            <div className='product'>
              <div className='image relative h-[250px]'>
                <LazyImage src='/uploads/images/products/ER002-YG.jpg' alt='image' width={250} height={250} />
              </div>
              <div className='text-accent font-roboto text-center  text-base name'>Rose Gold Earrings</div>
              <div className='text-accent font-roboto text-center text-base  price'>45700</div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='product-wrapper'>
          <Link href='/featured-product'>
            <div className='product'>
              <div className='image relative h-[250px]'>
                <LazyImage src='/uploads/images/products/ER003-RG.jpg' alt='image' width={250} height={250} />
              </div>
              <div className='text-accent font-roboto text-center  text-base name'>Rose Gold Earrings</div>
              <div className='text-accent font-roboto text-center  text-base price'>45700</div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='product-wrapper'>
          <Link href='/featured-product'>
            <div className='product'>
              <div className='image relative h-[250px]'>
                <LazyImage src='/uploads/images/products/ER004-RG.jpg' alt='image' width={250} height={250} />
              </div>
              <div className='text-accent font-roboto text-center  text-base name'>Rose Gold Earrings</div>
              <div className='text-accent font-roboto text-center text-base  price'>45700</div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='product-wrapper'>
          <Link href='/featured-product'>
            <div className='product'>
              <div className='image relative h-[250px]'>
                <LazyImage src='/uploads/images/products/ER005-CRB-RG.jpg' alt='image' width={250} height={250} />
              </div>
              <div className='text-accent font-roboto text-center  text-base name'>Rose Gold Earrings</div>
              <div className='text-accent font-roboto text-center  text-base price'>45700</div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='product-wrapper'>
          <Link href='/featured-product'>
            <div className='product'>
              <div className='image relative h-[250px]'>
                <LazyImage src='/uploads/images/products/ER005-CRB-YG.jpg' alt='image' width={250} height={250} />
              </div>
              <div className='text-accent font-roboto text-center  text-base name'>Rose Gold Earrings</div>
              <div className='text-accent font-roboto text-center  text-base price'>45700</div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='product-wrapper'>
          <Link href='/featured-product'>
            <div className='product'>
              <div className='image relative h-[250px]'>
                <LazyImage src='/uploads/images/products/ER006-DT-RG.jpg' alt='image' width={250} height={250} />
              </div>
              <div className='text-accent font-roboto text-center text-base name'>Rose Gold Earrings</div>
              <div className='text-accent font-roboto text-center text-base price'>45700</div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
