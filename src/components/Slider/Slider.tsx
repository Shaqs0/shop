import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import styles from './Slider.module.css';

export function Slider() {
	return (
		<div className={`${styles['slider']} slider`}>
			<Splide
				options={{
					type: 'loop',
					perPage: 3,
					autoplay: false, 
				}}
			>
				<SplideSlide className={styles['slide']}>
					<img
						className={styles['slider_img']}
						src="src/components/Slider/images/big-1000.jpg"
						alt="Big"
						srcSet="src/components/Slider/images/download.jpeg 3000w"
					/>
				</SplideSlide>
				<SplideSlide className={styles['slide']}>
					<img
						className={styles['slider_img']}
						src="src/components/Slider/images/big-1000.jpg"
						alt="Big"
						srcSet="src/components/Slider/images/download.jpeg 3000w"
					/>
				</SplideSlide>
				<SplideSlide className={styles['slide']}>
					<img
						className={styles['slider_img']}
						src="src/components/Slider/images/big-1000.jpg"
						alt="Big"
						srcSet="src/components/Slider/images/download.jpeg 3000w"
					/>
				</SplideSlide>
				<SplideSlide className={styles['slide']}>
					<img
						className={styles['slider_img']}
						src="src/components/Slider/images/big-1000.jpg"
						alt="Big"
						srcSet="src/components/Slider/images/big-1000.jpg 3000w"
					/>
				</SplideSlide>
				<SplideSlide className={styles['slide']}>
					<img
						className={styles['slider_img']}
						src="src/components/Slider/images/big-1000.jpg"
						alt="Big"
						srcSet="src/components/Slider/images/big-1000.jpg  3000w"
					/>
				</SplideSlide>
				<SplideSlide className={styles['slide']}>
					<img
						className={styles['slider_img']}
						src="src/components/Slider/images/big-1000.jpg"
						alt="Big"
						srcSet="src/components/Slider/images/big-1000.jpg  3000w"
					/>
				</SplideSlide>
			</Splide>
		</div>
	);
}