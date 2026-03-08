// src/components/TopSwiper/TopSwiper.jsx
import React, { useEffect, useState } from "react";
import styles from "./TopSwiper.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import slide1 from "@/assets/top-slide1-min.jpg";
import slide2 from "@/assets/top-slide2-min.jpg";
import slide3 from "@/assets/top-slide3-min.jpg";
import slide4 from "@/assets/top-slide4-min.jpg";
import slide5 from "@/assets/top-slide5-min.jpg";

// 480px判定（.jsx用 / eslintエラー回避）
function useMediaQuery(query) {
    const getMatches = () => {
        if (typeof window === "undefined") return false;
        return window.matchMedia(query).matches;
    };

    const [matches, setMatches] = useState(getMatches);

    useEffect(() => {
        const mql = window.matchMedia(query);
        const onChange = (e) => setMatches(e.matches);

        // Chromeは addEventListener / Safari古めは addListener
        if (mql.addEventListener) {
            mql.addEventListener("change", onChange);
            return () => mql.removeEventListener("change", onChange);
        } else {
            mql.addListener(onChange);
            return () => mql.removeListener(onChange);
        }
    }, [query]);

    return matches;
}

const slides = [
    { src: slide1, alt: "Slide 1" },
    { src: slide2, alt: "Slide 2" },
    { src: slide3, alt: "Slide 3" },
    { src: slide4, alt: "Slide 4" },
    { src: slide5, alt: "Slide 5" },
];

export default function TopSwiper() {
    const isMobile = useMediaQuery("(max-width: 479px)");

    return (
        <div className={`${styles.inner} ${isMobile ? styles.mobilePeek : ""}`}>
            <Swiper
                key={isMobile ? "mobile" : "desktop"} // ✅ isMobile切替時にSwiperを再初期化
                modules={isMobile ? [Pagination] : [Autoplay, Pagination, EffectFade]}
                loop
                centeredSlides={isMobile}
                slidesPerView={isMobile ? "auto" : 1} // ✅ SPはauto（CSSで幅を固定して左右均等）
                spaceBetween={isMobile ? 16 : 0}
                pagination={{ clickable: true }}
                autoplay={
                    isMobile
                        ? false
                        : {
                              delay: 4000,
                              disableOnInteraction: false,
                              pauseOnMouseEnter: true,
                          }
                }
                effect={isMobile ? "slide" : "fade"}
                fadeEffect={isMobile ? undefined : { crossFade: true }}
                speed={isMobile ? 300 : 1000}
            >
                {slides.map((s, i) => (
                    <SwiperSlide key={i}>
                        <img className={styles.slideImg} src={s.src} alt={s.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
