import { Splide, SplideSlide  } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import styles from './Slider.module.css';

export function Slider() {
	

	return (
		<div className={styles['slider']}>
			<Splide aria-label="My Favorite Images">
				<SplideSlide>
					<img className={styles['slider_img']} src="src/components/Slider/image1.jpg" alt="Image 1"/>
				</SplideSlide>
				<SplideSlide>
					<img className={styles['slider_img']} src="src/components/Slider/image2.jpg" alt="Image 2"/>
				</SplideSlide>
				<SplideSlide>
					<img className={styles['slider_img']} src="src/components/Slider/image1.jpg" alt="Image 1"/>
				</SplideSlide>
			</Splide>
		</div>
	);
}