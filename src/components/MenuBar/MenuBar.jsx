import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './MenuBar.module.css'
import contentLinks from './links'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { useTranslation } from 'react-i18next'
import { FreeMode } from 'swiper/modules'

const MenuBar = () => {
	const [t] = useTranslation()
	return (
		<section>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				freeMode={true}
				modules={[FreeMode]}
				className={styles.swiper}
			>
				{contentLinks.map(item => (
					<SwiperSlide key={item.id} className={styles.sliderItem}>
						<Link to={t(`menu.item${item.id}.link`)} className={styles.item}>
							{t(`menu.item${item.id}.name`)}
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default MenuBar
