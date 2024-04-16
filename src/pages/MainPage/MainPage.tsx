import styles from './MainPage.module.css';

export function MainPage() {


	return (
		<div className={styles['shop_now']}>
			<div className={styles['text']}>
				<span className={styles['main_text']}> Discover the Ultimate Culinary Experience: Our</span>
				<span className={styles['secondary_text']}>Elevate Your Kitchen with Our Cutting-Edge Appliances</span>
			</div>
		</div>
	);
}

export default MainPage;