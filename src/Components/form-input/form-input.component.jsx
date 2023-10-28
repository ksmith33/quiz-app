import './form-input.styles.scss';

function FormInput ({ label, id, ...otherProps }) {
	return (
		<div className='form-input-container'>
			<input { ...otherProps } className='auth-input'/>
			<label htmlFor={ id } className={`${otherProps.value.length ? 'shrink' : ''} auth-label`}>{ label }</label>
		</div>
	)
}

export default FormInput;
