import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useAxiosPublic from "../../hooks/useAxios";
import { useEffect } from "react";
import CountUp from "react-countup";

const Hero = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const axiosPublic = useAxiosPublic();
    const [article, setArticle] = useState();
    useEffect(() => {
        axiosPublic.get("/posts")
            .then(data => {

                // posts has been sorted based on their views and showed 6 posts in the slider as per the instructions
                const sortedArticles = data.data.sort((a, b) => b.views - a.views);
                // console.log(sortedArticles);
                setArticle(sortedArticles.slice(0, 6));
            })
    }, [])

    return (
        <div className="">
            <div className="px-8 text-center py-4">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'News Wave | Unfolding Stories, One Key at a Time!',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'News Wave | Reacting to News in Real Time with News Wave!',
                        1000,
                        'News Wave | Breaking News, Breaking Style!',
                        1000,
                        'News Wave | Typing the Future at News Wave!',
                        1000,
                        'News Wave | Dynamic Headlines, Dynamic Typing!',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>

            <div className="font-medium text-center text-2xl">
                <CountUp end={500000} duration={6} />+ Users All Over The World


            </div>


            <div className="mt-4">
                <Swiper

                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper h-[70vh]"
                >
                    {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                    {
                        article?.map(element => <SwiperSlide key={element._id}>
                            <div className="">
                                <h1 className="absolute mt-64 ml-96 max-w-xl text-white text-center font-bold text-4xl h-auto p-4 bg-black bg-opacity-60">{element?.title} <span className="bg-red-600 font-bold p-2 rounded-md text-sm">Trending</span></h1>
                                <img src={element.photoURL} alt="" className="w-full" />
                            </div>
                        </SwiperSlide>).slice(0, 6)
                    }
                    {/* <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 1 1" ref={progressCircle}>
                            <circle cx="24" cy="24" r="1"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>

            </div>



        </div >
    );
};

export default Hero;