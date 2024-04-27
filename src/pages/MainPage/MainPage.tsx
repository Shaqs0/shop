import Button from '../../components/Button/Button';
import { Slider } from '../../components/Slider/Slider';
import styles from './MainPage.module.css';

export function MainPage() {


	return (
		<div>
			<div className={styles['shop_now']}>
				<div className={styles['text']}>
					<p className={styles['main_text']}> Discover the Ultimate Culinary Experience: Our</p>
					<p className={styles['secondary_text']}>Elevate Your Kitchen with Our Cutting-Edge Appliances</p>
					<div className={styles['btn_container']}>
						<Button appearence='small'>Shop Now</Button>
					</div>	
				</div>
			</div>
			<div className={styles['splide']}>
				<Slider/>
			</div>
		</div>
	);
}

export default MainPage;