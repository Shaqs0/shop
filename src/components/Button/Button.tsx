import styles from './Button.module.css';
import { ButtonProps } from './Button.props.ts';
import cn from 'classnames';

function Button({ children, className, appearence = 'small', ...props }: ButtonProps) {
	return (
		<button className={cn( className, {
			[styles['small']]: appearence === 'small',
			[styles['big']]: appearence === 'big'
		})} {...props}>{children}</button>
	);
}

export default Button;