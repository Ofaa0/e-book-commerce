import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { bestSeller } from "../../localStore";
const BestSellerSection = () => {
  return (
    <div className="py-30 bg-secondery-bg">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-[26px] font-bold text-white leading-[100%] text-center pb-2">
          Best Seller
        </h1>
        <p className="text-[16px] w-129 text-white/50 leading-[100%] text-center pb-20 px-20 lg:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo.
        </p>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
      >
        {bestSeller.map((el, index) => (
          <SwiperSlide key={index + 1} className="text-black">
            <img src={el} alt={`book${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center w-full">
        <button className="btn btn-secondary mt-20 py-3 px-14">Shop now</button>
      </div>
    </div>
  );
};

export default BestSellerSection;
