import contentLinks from "./links"
import styles from "./MenuBar.module.css";
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode } from 'swiper/modules';

const MenuBar = () => {
    return (
        <section>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode]}
                className={styles.swiper}
            >
                {contentLinks.map((item) => (
                    <SwiperSlide className={styles.sliderItem}>
                        <Link to={item.link} key={item.id} className={styles.item}>
                            {item.name}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default MenuBar;