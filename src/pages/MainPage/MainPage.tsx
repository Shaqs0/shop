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
			<div className={styles['footer']}>
				<p className={styles['main_text']}>Revolutionize Your Cooking with Our Advanced Oven and Stove Solutions</p>
				<p className={styles['secondary_text']}>Explore Our Comprehensive Collection of High-Performance Cooking Appliances that </p>
				<Button appearence='small' className={styles['footer_btn']}>Learn more</Button>
			</div>
		</div>
	);
}

export default MainPage;