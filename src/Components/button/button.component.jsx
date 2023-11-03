import './button.styles.scss';

const BUTTON_TYPES = {
	auth: 'auth',
	settings: 'settings',
	delete: 'delete'
}

function Button ({buttonType, children,...otherProps }) {
	return (
		<button className={`button-container ${BUTTON_TYPES[buttonType]}`} { ...otherProps }> { children }</button>
	)
}

export default Button;