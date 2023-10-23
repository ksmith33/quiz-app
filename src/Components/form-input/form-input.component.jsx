import './form-input.styles.scss';

function FormInput ({ label, id, ...otherProps }) {
	return (
		<>
			<label htmlFor={ id } className='auth-label'>{ label }</label>
			<input { ...otherProps } className='auth-input'/>
		</>
	)
}

export default FormInput;
