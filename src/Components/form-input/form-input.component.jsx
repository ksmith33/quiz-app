import './form-input.styles.scss';

function FormInput ({ label, id, ...otherProps }) {
	return (
		<div className='form-input-container'>
			<label htmlFor={ id } className='auth-label'>{ label }</label>
			<input { ...otherProps } className='auth-input'/>
		</div>
	)
}

export default FormInput;
