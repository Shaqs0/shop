import { Splide, SplideSlide  } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import styles from './Slider.module.css';

export function Slider() {

	return (
		<div className={styles['slider']}>
			<Splide aria-label="My Favorite Images">
				<SplideSlide className={styles['slide']}>
					<img className={styles['slider_img']}
						src="src/components/Slider/images/big-1920.jpg"
						alt='Big'
						srcSet='src/components/Slider/images/big-500.jpg 500w, src/components/Slider/images/big-900.jpg 900w, src/components/Slider/images/big-1000.jpg 3000w,'
					/>
				</SplideSlide>
				<SplideSlide className={styles['slide']}>
					<img className={styles['slider_img']} src="src/components/Slider/image2.jpg" alt="Image 2"/>
				</SplideSlide>
				<SplideSlide className={styles['slide']}>
					<img className={styles['slider_img']} src="src/components/Slider/image1.jpg" alt="Image 1"/>
				</SplideSlide>
			</Splide>
		</div>
	);
}