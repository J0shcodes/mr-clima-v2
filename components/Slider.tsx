import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { BsThermometerHalf } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
  EffectCreative,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
    return (
        <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectCoverflow,
          Autoplay,
        ]}
        centeredSlides={false}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        scrollbar={{ draggable: true }}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect="creative"
        loop={true}
        grabCursor={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
      >
        <SwiperSlide className="bg-[url('/images/sunshine/sunshine-5.jpg')] bg-no-repeat bg-center bg-cover mx-16 pt-6 pb-3 px-6 rounded-xl">
          <div className="flex">
            <p className="text-xl">Lagos</p>
            <div className="mt-1.5">
              <IoLocationOutline size={18} />
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-center">
              <div>
                <BsThermometerHalf size={50} />
              </div>
              <div className="text-5xl">27&deg;C</div>
              <div className="">
                <Image
                  src="/icons/clouds.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="underline">Aug, 23 Tue</div>
          </div>
          <div className="flex justify-between mt-12">
            <div>
              <p className="uppercase text-sm">humidity</p>
              <p className="text-center text-sm">99%</p>
            </div>
            <div>
              <p className="uppercase text-sm">visibility</p>
              <p className="text-center text-sm">8km</p>
            </div>
            <div>
              <p className="uppercase text-sm">air pressure</p>
              <p className="text-center text-sm">1005hpa</p>
            </div>
            <div>
              <p className="uppercase text-sm">wind</p>
              <p className="text-center text-sm">2mph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('/images/raindrops/raindrops-1.jpg')] bg-no-repeat bg-center bg-cover mx-16 pt-6 pb-3 px-6 rounded-xl">
          <div className="flex">
            <p className="text-xl">Lagos</p>
            <div className="mt-1.5">
              <IoLocationOutline size={18} />
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-center">
              <div>
                <BsThermometerHalf size={50} />
              </div>
              <div className="text-5xl">27&deg;C</div>
              <div className="">
                <Image
                  src="/icons/clouds.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="underline">Aug, 23 Tue</div>
          </div>
          <div className="flex justify-between mt-12">
            <div>
              <p className="uppercase text-sm">humidity</p>
              <p className="text-center text-sm">99%</p>
            </div>
            <div>
              <p className="uppercase text-sm">visibility</p>
              <p className="text-center text-sm">8km</p>
            </div>
            <div>
              <p className="uppercase text-sm">air pressure</p>
              <p className="text-center text-sm">1005hpa</p>
            </div>
            <div>
              <p className="uppercase text-sm">wind</p>
              <p className="text-center text-sm">2mph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[rgba(225,225,225,.15)] mx-16 pt-6 pb-3 px-6 rounded-xl backdrop-blur-[5px]">
          <div className="flex">
            <p className="text-xl">Lagos</p>
            <div className="mt-1.5">
              <IoLocationOutline size={18} />
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-center">
              <div>
                <BsThermometerHalf size={50} />
              </div>
              <div className="text-5xl">27&deg;C</div>
              <div className="">
                <Image
                  src="/icons/clouds.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="underline">Aug, 23 Tue</div>
          </div>
          <div className="flex justify-between mt-12">
            <div>
              <p className="uppercase text-sm">humidity</p>
              <p className="text-center text-sm">99%</p>
            </div>
            <div>
              <p className="uppercase text-sm">visibility</p>
              <p className="text-center text-sm">8km</p>
            </div>
            <div>
              <p className="uppercase text-sm">air pressure</p>
              <p className="text-center text-sm">1005hpa</p>
            </div>
            <div>
              <p className="uppercase text-sm">wind</p>
              <p className="text-center text-sm">2mph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[rgba(225,225,225,.15)] mx-16 pt-6 pb-3 px-6 rounded-xl backdrop-blur-[5px]">
          <div className="flex">
            <p className="text-xl">Lagos</p>
            <div className="mt-1.5">
              <IoLocationOutline size={18} />
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-center">
              <div>
                <BsThermometerHalf size={50} />
              </div>
              <div className="text-5xl">27&deg;C</div>
              <div className="">
                <Image
                  src="/icons/clouds.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="underline">Aug, 23 Tue</div>
          </div>
          <div className="flex justify-between mt-12">
            <div>
              <p className="uppercase text-sm">humidity</p>
              <p className="text-center text-sm">99%</p>
            </div>
            <div>
              <p className="uppercase text-sm">visibility</p>
              <p className="text-center text-sm">8km</p>
            </div>
            <div>
              <p className="uppercase text-sm">air pressure</p>
              <p className="text-center text-sm">1005hpa</p>
            </div>
            <div>
              <p className="uppercase text-sm">wind</p>
              <p className="text-center text-sm">2mph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[rgba(225,225,225,.15)] mx-16 pt-6 pb-3 px-6 rounded-xl backdrop-blur-[5px]">
          <div className="flex">
            <p className="text-xl">Lagos</p>
            <div className="mt-1.5">
              <IoLocationOutline size={18} />
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-center">
              <div>
                <BsThermometerHalf size={50} />
              </div>
              <div className="text-5xl">27&deg;C</div>
              <div className="">
                <Image
                  src="/icons/clouds.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="underline">Aug, 23 Tue</div>
          </div>
          <div className="flex justify-between mt-12">
            <div>
              <p className="uppercase text-sm">humidity</p>
              <p className="text-center text-sm">99%</p>
            </div>
            <div>
              <p className="uppercase text-sm">visibility</p>
              <p className="text-center text-sm">8km</p>
            </div>
            <div>
              <p className="uppercase text-sm">air pressure</p>
              <p className="text-center text-sm">1005hpa</p>
            </div>
            <div>
              <p className="uppercase text-sm">wind</p>
              <p className="text-center text-sm">2mph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[rgba(225,225,225,.15)] mx-16 pt-6 pb-3 px-6 rounded-xl backdrop-blur-[5px]">
          <div className="flex">
            <p className="text-xl">Lagos</p>
            <div className="mt-1.5">
              <IoLocationOutline size={18} />
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-center">
              <div>
                <BsThermometerHalf size={50} />
              </div>
              <div className="text-5xl">27&deg;C</div>
              <div className="">
                <Image
                  src="/icons/clouds.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="underline">Aug, 23 Tue</div>
          </div>
          <div className="flex justify-between mt-12">
            <div>
              <p className="uppercase text-sm">humidity</p>
              <p className="text-center text-sm">99%</p>
            </div>
            <div>
              <p className="uppercase text-sm">visibility</p>
              <p className="text-center text-sm">8km</p>
            </div>
            <div>
              <p className="uppercase text-sm">air pressure</p>
              <p className="text-center text-sm">1005hpa</p>
            </div>
            <div>
              <p className="uppercase text-sm">wind</p>
              <p className="text-center text-sm">2mph</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    )
}

export default Slider